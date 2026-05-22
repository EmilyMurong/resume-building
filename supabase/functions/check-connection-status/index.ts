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
    const {
      draftId,
      draft_id,
      draftToken,
      draft_token,
      connectionCode,
      code,
    } = await req.json();
    const normalizedDraftId = String(draftId ?? draft_id ?? "").trim();
    const normalizedDraftToken = String(draftToken ?? draft_token ?? "").trim();
    const normalizedConnectionCode = String(connectionCode ?? code ?? "").trim();

    if (!normalizedDraftId || !normalizedDraftToken) {
      return errorResponse("draftId and draftToken are required");
    }

    if (!/^\d{6}$/.test(normalizedConnectionCode)) {
      return errorResponse("connectionCode must be a 6 digit string");
    }

    const supabase = getServiceClient();
    const now = new Date().toISOString();
    const accessTokenHash = await hashAccessToken(normalizedDraftToken);

    const { data: draft, error: draftError } = await supabase
      .from("resume_drafts")
      .select("id, access_token_hash, status, expires_at")
      .eq("id", normalizedDraftId)
      .maybeSingle();

    if (
      draftError || !draft ||
      draft.access_token_hash !== accessTokenHash ||
      draft.status !== "active" ||
      isExpired(draft.expires_at, now)
    ) {
      return errorResponse("Cloud draft not found or token is invalid", 404);
    }

    const { data: connection, error: connectionError } = await supabase
      .from("connection_codes")
      .select("status, used_at, last_used_at, expires_at")
      .eq("draft_id", normalizedDraftId)
      .eq("code", normalizedConnectionCode)
      .maybeSingle();

    if (connectionError || !connection) {
      return errorResponse("Connection code is invalid", 404);
    }

    const expired = isExpired(connection.expires_at, now);

    return jsonResponse({
      draftId: normalizedDraftId,
      connectionCode: normalizedConnectionCode,
      connected: connection.status === "used",
      status: expired && connection.status === "active" ? "expired" : connection.status,
      usedAt: connection.used_at,
      lastUsedAt: connection.last_used_at,
      expiresAt: connection.expires_at,
    });
  } catch (error) {
    console.error("check-connection-status unexpected error", error);
    return errorResponse("Invalid request body", 400);
  }
});
