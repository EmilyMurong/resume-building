import { handleCors } from "../_shared/cors.ts";
import { errorResponse, jsonResponse } from "../_shared/responses.ts";
import { getServiceClient } from "../_shared/supabase.ts";
import { hashAccessToken } from "../_shared/tokens.ts";

function isExpired(expiresAt: string, now: string) {
  return new Date(expiresAt).getTime() <= new Date(now).getTime();
}

function normalizeSource(source: unknown) {
  return source === "desktop" || source === "mobile" ? source : "mobile";
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
      resumeJson,
      resume_json,
      lastSyncSource,
      last_sync_source,
    } = await req.json();
    const normalizedDraftId = draftId ?? draft_id;
    const normalizedDraftToken = draftToken ?? draft_token;
    const resumeData = resumeJson ?? resume_json;
    const syncSource = normalizeSource(lastSyncSource ?? last_sync_source);

    if (!normalizedDraftId || !normalizedDraftToken) {
      return errorResponse("draftId and draftToken are required");
    }

    if (
      !resumeData || typeof resumeData !== "object" ||
      Array.isArray(resumeData)
    ) {
      return errorResponse("resumeJson must be a JSON object");
    }

    const supabase = getServiceClient();
    const now = new Date().toISOString();
    const accessTokenHash = await hashAccessToken(normalizedDraftToken);

    const { data: currentDraft, error: lookupError } = await supabase
      .from("resume_drafts")
      .select("id, version, access_token_hash, status, expires_at")
      .eq("id", normalizedDraftId)
      .maybeSingle();

    if (
      lookupError || !currentDraft ||
      currentDraft.access_token_hash !== accessTokenHash ||
      currentDraft.status !== "active" ||
      isExpired(currentDraft.expires_at, now)
    ) {
      return errorResponse("Cloud draft not found or token is invalid", 404);
    }

    const { data, error } = await supabase
      .from("resume_drafts")
      .update({
        data: resumeData,
        version: Number(currentDraft.version ?? 0) + 1,
        last_sync_source: syncSource,
      })
      .eq("id", normalizedDraftId)
      .select("id, version, updated_at")
      .single();

    if (error || !data) {
      console.error("save draft update error", error);
      return errorResponse("Failed to save cloud draft", 500);
    }

    return jsonResponse({
      draftId: data.id,
      saved: true,
      version: data.version,
      updatedAt: data.updated_at,
    });
  } catch (error) {
    console.error("save-cloud-draft unexpected error", error);
    return errorResponse("Invalid request body", 400);
  }
});
