import { handleCors } from "../_shared/cors.ts";
import { errorResponse, jsonResponse } from "../_shared/responses.ts";
import { getServiceClient } from "../_shared/supabase.ts";

Deno.serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  try {
    const { code, connectionCode, connection_code, draftId, draft_id } =
      await req.json();
    const normalizedCode = String(code ?? connectionCode ?? connection_code ?? "")
      .trim();
    const normalizedDraftId = String(draftId ?? draft_id ?? "").trim();

    if (!/^\d{6}$/.test(normalizedCode)) {
      return errorResponse("code must be a 6 digit string");
    }

    const supabase = getServiceClient();
    const now = new Date().toISOString();

    const { data: connection, error: connectionError } = await supabase
      .from("connection_codes")
      .select("id, draft_id, status, attempts, expires_at")
      .eq("code", normalizedCode)
      .single();

    if (connectionError || !connection) {
      return errorResponse("Connection code is invalid", 404);
    }

    if (normalizedDraftId && normalizedDraftId !== connection.draft_id) {
      return errorResponse("Connection code does not match draft", 404);
    }

    await supabase
      .from("connection_codes")
      .update({
        attempts: Number(connection.attempts ?? 0) + 1,
        last_used_at: now,
      })
      .eq("id", connection.id);

    if (connection.status !== "active") {
      return errorResponse("Connection code is not active", 409);
    }

    if (connection.expires_at <= now) {
      await supabase
        .from("connection_codes")
        .update({ status: "expired" })
        .eq("id", connection.id)
        .eq("status", "active");

      return errorResponse("Connection code is expired", 410);
    }

    const { data: draft, error: draftError } = await supabase
      .from("resume_drafts")
      .select("id, data, status, version, updated_at, expires_at")
      .eq("id", connection.draft_id)
      .single();

    if (
      draftError || !draft || draft.status !== "active" ||
      draft.expires_at <= now
    ) {
      console.error("connect draft lookup error", draftError);
      return errorResponse("Cloud draft is not available", 404);
    }

    await supabase
      .from("connection_codes")
      .update({ status: "used", used_at: now, last_used_at: now })
      .eq("id", connection.id);

    return jsonResponse({
      draftId: draft.id,
      connectionCode: normalizedCode,
      readOnly: true,
      canSave: false,
      resumeJson: draft.data,
      version: draft.version,
      updatedAt: draft.updated_at,
    });
  } catch (error) {
    console.error("connect-cloud-draft unexpected error", error);
    return errorResponse("Invalid request body", 400);
  }
});
