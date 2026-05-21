import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function readProjectRef() {
  try {
    return readFileSync(resolve("supabase/.temp/project-ref"), "utf8").trim();
  } catch {
    return "";
  }
}

function getFunctionsBaseUrl() {
  const explicitUrl = process.env.SUPABASE_FUNCTIONS_URL?.trim();
  if (explicitUrl) return explicitUrl.replace(/\/$/, "");

  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  if (supabaseUrl) return `${supabaseUrl.replace(/\/$/, "")}/functions/v1`;

  const projectRef = process.env.SUPABASE_PROJECT_REF?.trim() ||
    readProjectRef();
  if (projectRef) return `https://${projectRef}.supabase.co/functions/v1`;

  throw new Error(
    "Missing Supabase target. Set SUPABASE_FUNCTIONS_URL, SUPABASE_URL, or SUPABASE_PROJECT_REF.",
  );
}

async function callFunction(baseUrl, name, payload) {
  const headers = { "Content-Type": "application/json" };
  const anonKey = process.env.SUPABASE_ANON_KEY?.trim();

  if (anonKey) {
    headers.apikey = anonKey;
    headers.Authorization = `Bearer ${anonKey}`;
  }

  const response = await fetch(`${baseUrl}/${name}`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  const rawBody = await response.text();
  let body = rawBody;

  try {
    body = JSON.parse(rawBody);
  } catch {
    // Keep non-JSON error bodies visible in the test output.
  }

  return {
    function: name,
    status: response.status,
    ok: response.ok,
    body,
  };
}

function printStep(result) {
  console.log(`\n=== ${result.function} ===`);
  console.log(JSON.stringify(result, null, 2));
}

function assertOk(result) {
  if (!result.ok) {
    throw new Error(`${result.function} failed with HTTP ${result.status}`);
  }
}

const baseUrl = getFunctionsBaseUrl();
const initialResume = {
  name: "Cloud Draft Test",
  title: "Initial test resume",
  updatedBy: "create-cloud-draft",
  timestamp: new Date().toISOString(),
};
const savedResume = {
  ...initialResume,
  title: "Saved test resume",
  updatedBy: "save-cloud-draft",
  savedAt: new Date().toISOString(),
};

console.log(`Using functions base URL: ${baseUrl}`);

const createResult = await callFunction(baseUrl, "create-cloud-draft", {
  resumeJson: initialResume,
  source: "desktop",
});
printStep(createResult);
assertOk(createResult);

const { draftId, draftToken } = createResult.body;
if (!draftId || !draftToken) {
  throw new Error("create-cloud-draft did not return draftId and draftToken");
}

const saveResult = await callFunction(baseUrl, "save-cloud-draft", {
  draftId,
  draftToken,
  resumeJson: savedResume,
  lastSyncSource: "test-cloud-draft-flow",
});
printStep(saveResult);
assertOk(saveResult);

const loadResult = await callFunction(baseUrl, "load-cloud-draft", {
  draftId,
  draftToken,
});
printStep(loadResult);
assertOk(loadResult);
