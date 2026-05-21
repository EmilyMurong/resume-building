import { handleCors } from "../_shared/cors.ts";
import { errorResponse, jsonResponse } from "../_shared/responses.ts";
import { getServiceClient } from "../_shared/supabase.ts";
import {
  generateConnectionCode,
  generateEditToken,
  getConnectionCodeExpiry,
  getDraftExpiry,
  hashAccessToken,
} from "../_shared/tokens.ts";

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
    const { resumeJson, resume_json, source, lastSyncSource, last_sync_source } =
      await req.json();
    const resumeData = resumeJson ?? resume_json;
    const syncSource = normalizeSource(source ?? lastSyncSource ?? last_sync_source);

    if (!resumeData || typeof resumeData !== "object" || Array.isArray(resumeData)) {
      return errorResponse("resumeJson must be a JSON object");
    }

    const supabase = getServiceClient();
    const draftToken = generateEditToken();
    const accessTokenHash = await hashAccessToken(draftToken);

    const { data: draft, error: draftError } = await supabase
      .from("resume_drafts")
      .insert({
        data: resumeData,
        access_token_hash: accessTokenHash,
        status: "active",
        last_sync_source: syncSource,
        version: 1,
        expires_at: getDraftExpiry(),
      })
      .select("id")
      .single();

    if (draftError || !draft) {
      console.error("create draft insert error", {
        code: draftError?.code,
        message: draftError?.message,
        details: draftError?.details,
        hint: draftError?.hint,
      });
      return errorResponse("Failed to create cloud draft", 500);
    }

    const expiresAt = getConnectionCodeExpiry();
    let connectionCode = "";
    let codeError: unknown = null;

    for (let attempt = 0; attempt < 5; attempt += 1) {
      connectionCode = generateConnectionCode();

      const { error } = await supabase.from("connection_codes").insert({
        draft_id: draft.id,
        code: connectionCode,
        status: "active",
        attempts: 0,
        expires_at: expiresAt,
      });

      codeError = error;
      if (!error) break;
    }

    if (codeError) {
      console.error("create connection code insert error", codeError);
      return errorResponse("Failed to create connection code", 500);
    }

    return jsonResponse({
      draftId: draft.id,
      draftToken,
      connectionCode,
      connectionCodeExpiresAt: expiresAt,
    });
  } catch (error) {
    console.error("create-cloud-draft unexpected error", error);
    return errorResponse("Invalid request body", 400);
  }
});
