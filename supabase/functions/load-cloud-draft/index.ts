import { handleCors } from "../_shared/cors.ts";
import { errorResponse, jsonResponse } from "../_shared/responses.ts";
import { getServiceClient } from "../_shared/supabase.ts";
import { hashAccessToken } from "../_shared/tokens.ts";

function isExpired(expiresAt: string, now: string) {
  return new Date(expiresAt).getTime() <= new Date(now).getTime();
}

Deno.serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  try {
    const { draftId, draft_id, draftToken, draft_token, connectionCode, code } =
      await req.json();
    const normalizedDraftId = String(draftId ?? draft_id ?? "").trim();
    const normalizedDraftToken = String(draftToken ?? draft_token ?? "").trim();
    const normalizedConnectionCode = String(connectionCode ?? code ?? "").trim();

    if (!normalizedDraftToken && !/^\d{6}$/.test(normalizedConnectionCode)) {
      return errorResponse("draftToken or connectionCode is required");
    }

    const supabase = getServiceClient();
    const now = new Date().toISOString();
    let draftLookupId = normalizedDraftId;

    if (!normalizedDraftToken) {
      const { data: connection, error: connectionError } = await supabase
        .from("connection_codes")
        .select("draft_id, status, expires_at")
        .eq("code", normalizedConnectionCode)
        .maybeSingle();

      if (
        connectionError || !connection ||
        (connection.status !== "active" && connection.status !== "used") ||
        isExpired(connection.expires_at, now)
      ) {
        return errorResponse("Connection code is invalid or expired", 404);
      }

      if (normalizedDraftId && normalizedDraftId !== connection.draft_id) {
        return errorResponse("Connection code does not match draft", 404);
      }

      draftLookupId = connection.draft_id;
    }

    if (!draftLookupId) {
      return errorResponse("draftId is required");
    }

    const { data, error } = await supabase
      .from("resume_drafts")
      .select(
        "id, data, version, updated_at, access_token_hash, status, expires_at",
      )
      .eq("id", draftLookupId)
      .maybeSingle();

    const accessTokenHash = normalizedDraftToken
      ? await hashAccessToken(normalizedDraftToken)
      : "";

    if (
      error || !data ||
      (normalizedDraftToken && data.access_token_hash !== accessTokenHash) ||
      data.status !== "active" ||
      isExpired(data.expires_at, now)
    ) {
      return errorResponse("Cloud draft not found or token is invalid", 404);
    }

    return jsonResponse({
      draftId: data.id,
      resumeJson: data.data,
      version: data.version,
      updatedAt: data.updated_at,
    });
  } catch (error) {
    console.error("load-cloud-draft unexpected error", error);
    return errorResponse("Invalid request body", 400);
  }
});
