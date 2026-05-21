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
    const { draftId, draft_id, draftToken, draft_token } = await req.json();
    const normalizedDraftId = draftId ?? draft_id;
    const normalizedDraftToken = draftToken ?? draft_token;

    if (!normalizedDraftId || !normalizedDraftToken) {
      return errorResponse("draftId and draftToken are required");
    }

    const supabase = getServiceClient();
    const now = new Date().toISOString();
    const accessTokenHash = await hashAccessToken(normalizedDraftToken);

    const { data, error } = await supabase
      .from("resume_drafts")
      .select(
        "id, data, version, updated_at, access_token_hash, status, expires_at",
      )
      .eq("id", normalizedDraftId)
      .maybeSingle();

    if (
      error || !data ||
      data.access_token_hash !== accessTokenHash ||
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
