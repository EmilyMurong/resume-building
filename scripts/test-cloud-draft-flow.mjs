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

function readFrontendAnonKey() {
  try {
    const script = readFileSync(resolve("script.js"), "utf8");
    const match = script.match(/const supabaseAnonKey = "([^"]+)"/);

    return match?.[1] ?? "";
  } catch {
    return "";
  }
}

async function callFunction(baseUrl, name, payload) {
  const headers = { "Content-Type": "application/json" };
  const anonKey = process.env.SUPABASE_ANON_KEY?.trim() || readFrontendAnonKey();

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

const { draftId, draftToken, connectionCode } = createResult.body;
if (!draftId || !draftToken || !connectionCode) {
  throw new Error(
    "create-cloud-draft did not return draftId, draftToken, and connectionCode",
  );
}

const waitingStatusResult = await callFunction(baseUrl, "check-connection-status", {
  draftId,
  draftToken,
  connectionCode,
});
printStep(waitingStatusResult);
assertOk(waitingStatusResult);

if (waitingStatusResult.body.connected) {
  throw new Error("QR session should not be connected before phone connect");
}

const connectResult = await callFunction(baseUrl, "connect-cloud-draft", {
  draftId,
  code: connectionCode,
});
printStep(connectResult);
assertOk(connectResult);

if (connectResult.body.draftToken) {
  throw new Error("connect-cloud-draft must not issue or return a draftToken");
}

if (connectResult.body.draftId !== draftId) {
  throw new Error("connect-cloud-draft returned the wrong draftId");
}

const connectedStatusResult = await callFunction(baseUrl, "check-connection-status", {
  draftId,
  draftToken,
  connectionCode,
});
printStep(connectedStatusResult);
assertOk(connectedStatusResult);

if (!connectedStatusResult.body.connected) {
  throw new Error("QR session should be connected after phone auto connect");
}

const desktopInitialLoadResult = await callFunction(baseUrl, "load-cloud-draft", {
  draftId,
  draftToken,
});
printStep(desktopInitialLoadResult);
assertOk(desktopInitialLoadResult);

if (desktopInitialLoadResult.body.resumeJson?.updatedBy !== "create-cloud-draft") {
  throw new Error("desktop load did not see the QR-created resume");
}

const saveResult = await callFunction(baseUrl, "save-cloud-draft", {
  draftId,
  draftToken,
  resumeJson: savedResume,
  lastSyncSource: "mobile",
});
printStep(saveResult);
assertOk(saveResult);

const loadResult = await callFunction(baseUrl, "load-cloud-draft", {
  draftId,
  connectionCode,
});
printStep(loadResult);
assertOk(loadResult);

if (loadResult.body.resumeJson?.updatedBy !== "save-cloud-draft") {
  throw new Error("desktop load did not see the mobile-saved resume");
}
