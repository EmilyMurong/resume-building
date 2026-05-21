import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function getServiceRoleKey() {
  const explicitServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ??
    Deno.env.get("SERVICE_ROLE_KEY");

  if (explicitServiceRoleKey) {
    return explicitServiceRoleKey;
  }

  const secretKeys = Deno.env.get("SUPABASE_SECRET_KEYS");

  if (secretKeys) {
    try {
      const parsed = JSON.parse(secretKeys);
      const defaultKey = parsed?.service_role ?? parsed?.secret ??
        parsed?.default;

      if (typeof defaultKey === "string" && defaultKey.length > 0) {
        return defaultKey;
      }
    } catch (error) {
      console.error("Failed to parse SUPABASE_SECRET_KEYS", error);
    }
  }
}

export function getServiceClient() {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = getServiceRoleKey();

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing SUPABASE_URL or service role key from SUPABASE_SECRET_KEYS, SUPABASE_SERVICE_ROLE_KEY, or SERVICE_ROLE_KEY",
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
