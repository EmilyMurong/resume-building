export function generateEditToken() {
  return crypto.randomUUID().replaceAll("-", "") +
    crypto.randomUUID().replaceAll("-", "");
}

export async function hashAccessToken(token: string) {
  const data = new TextEncoder().encode(token);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const bytes = [...new Uint8Array(digest)];

  return bytes.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function generateConnectionCode() {
  const bytes = new Uint8Array(4);
  crypto.getRandomValues(bytes);
  const value = new DataView(bytes.buffer).getUint32(0) % 1_000_000;

  return value.toString().padStart(6, "0");
}

export function getConnectionCodeExpiry() {
  const minutes = Number(Deno.env.get("CONNECTION_CODE_TTL_MINUTES") ?? "15");
  const expiresAt = new Date(Date.now() + minutes * 60 * 1000);

  return expiresAt.toISOString();
}

export function getDraftExpiry() {
  const days = Number(Deno.env.get("DRAFT_TTL_DAYS") ?? "30");
  const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

  return expiresAt.toISOString();
}
