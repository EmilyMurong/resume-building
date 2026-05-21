import { handleCors } from "../_shared/cors.ts";
import { errorResponse, jsonResponse } from "../_shared/responses.ts";
import { getServiceClient } from "../_shared/supabase.ts";
import {
  generateConnectionCode,
  getConnectionCodeExpiry,
  hashAccessToken,
} from "../_shared/tokens.ts";

Deno.serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  try {
    const { draftId, draft_id, draftToken, draft_token } = await req.json();
    const normalizedDraftId = draftId ?? draft_id;
    const normalizedDraftToken = draftToken ?? draft_token;

    if (!normalizedDraftId || !normalizedDraftToken) {
      return errorResponse("draftId and draftToken are required");
    }

    const supabase = getServiceClient();
    const accessTokenHash = await hashAccessToken(normalizedDraftToken);
    const now = new Date().toISOString();

    const { data: draft, error: draftError } = await supabase
      .from("resume_drafts")
      .select("id")
      .eq("id", normalizedDraftId)
      .eq("access_token_hash", accessTokenHash)
      .eq("status", "active")
      .gt("expires_at", now)
      .single();

    if (draftError || !draft) {
      return errorResponse("Cloud draft not found or token is invalid", 404);
    }

    await supabase
      .from("connection_codes")
      .update({ status: "revoked", last_used_at: now })
      .eq("draft_id", normalizedDraftId)
      .eq("status", "active");

    const expiresAt = getConnectionCodeExpiry();
    let connectionCode = "";
    let codeError: unknown = null;

    for (let attempt = 0; attempt < 5; attempt += 1) {
      connectionCode = generateConnectionCode();

      const { error } = await supabase.from("connection_codes").insert({
        draft_id: normalizedDraftId,
        code: connectionCode,
        status: "active",
        attempts: 0,
        expires_at: expiresAt,
      });

      codeError = error;
      if (!error) break;
    }

    if (codeError) {
      console.error("refresh connection code error", codeError);
      return errorResponse("Failed to refresh connection code", 500);
    }

    return jsonResponse({
      draftId: normalizedDraftId,
      connectionCode,
      connectionCodeExpiresAt: expiresAt,
    });
  } catch (error) {
    console.error("refresh-connection-code unexpected error", error);
    return errorResponse("Invalid request body", 400);
  }
});
