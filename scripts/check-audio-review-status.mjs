#!/usr/bin/env node
const DEFAULT_REPO = "icelog-TU/character-recognition-dojo";
const DEFAULT_PROJECT = "character-recognition-dojo";

function usage() {
  console.log(`Usage:
  npm run audio:review-status -- --unit L153 --ref <branch-or-sha>

Options:
  --unit       Lesson/review id, for example L153 or R004. Required.
  --ref        Git branch, tag, or commit SHA. Defaults to main.
  --repo       GitHub owner/repo. Defaults to ${DEFAULT_REPO}.
  --project    Firebase project id. Defaults to ${DEFAULT_PROJECT}.
`);
}

function parseArgs(argv) {
  const args = {
    repo: DEFAULT_REPO,
    project: DEFAULT_PROJECT,
    ref: "main",
    unit: "",
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--unit") args.unit = argv[++index] || "";
    else if (arg === "--ref") args.ref = argv[++index] || "";
    else if (arg === "--repo") args.repo = argv[++index] || "";
    else if (arg === "--project") args.project = argv[++index] || "";
    else throw new Error(`Unknown argument: ${arg}`);
  }
  args.unit = args.unit.toUpperCase();
  if (!args.ref) args.ref = "main";
  return args;
}

function reviewId(repo, unit, sha) {
  return Buffer.from(`${repo}|${unit}|${sha}`, "utf8").toString("base64url");
}

async function fetchJson(url, label) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "character-recognition-dojo-audio-review-check",
    },
  });
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`${label} HTTP ${response.status}${body ? `: ${body.slice(0, 200)}` : ""}`);
  }
  return response.json();
}

async function resolveRef(repo, ref) {
  const data = await fetchJson(
    `https://api.github.com/repos/${repo}/commits/${encodeURIComponent(ref)}`,
    "GitHub commit lookup",
  );
  return data.sha;
}

function firestoreValue(value) {
  if (!value || typeof value !== "object") return undefined;
  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return Number(value.doubleValue);
  if ("booleanValue" in value) return Boolean(value.booleanValue);
  if ("timestampValue" in value) return value.timestampValue;
  if ("arrayValue" in value) {
    return (value.arrayValue.values || []).map(firestoreValue);
  }
  if ("mapValue" in value) {
    return firestoreObject(value.mapValue.fields || {});
  }
  return undefined;
}

function firestoreObject(fields) {
  return Object.fromEntries(Object.entries(fields || {}).map(([key, value]) => [key, firestoreValue(value)]));
}

async function readReview(project, id) {
  const url = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/audioReviews/${id}`;
  const response = await fetch(url);
  if (response.status === 404) return null;
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Firestore read HTTP ${response.status}${body ? `: ${body.slice(0, 240)}` : ""}`);
  }
  const data = await response.json();
  return firestoreObject(data.fields || {});
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }
  if (!args.unit) throw new Error("--unit is required.");

  const sha = await resolveRef(args.repo, args.ref);
  const id = reviewId(args.repo, args.unit, sha);
  const review = await readReview(args.project, id);

  console.log(`Audio review status for ${args.unit}`);
  console.log(`Repo: ${args.repo}`);
  console.log(`Ref: ${args.ref}`);
  console.log(`Commit: ${sha}`);
  console.log(`Review document: audioReviews/${id}`);

  if (!review) {
    console.log("Status: pending - no Firestore review document found.");
    process.exitCode = 2;
    return;
  }

  const approvals = Object.entries(review.approvalState || {});
  const pending = approvals.filter(([, value]) => value?.ok !== true);
  console.log(`Approved: ${review.approvedCount ?? 0}/${review.itemCount ?? approvals.length}`);
  console.log(`Approved all: ${review.approvedAll === true ? "yes" : "no"}`);
  console.log(`Updated by: ${review.updatedByEmail || review.updatedByName || review.updatedByUid || "unknown"}`);
  console.log(`Updated at: ${review.updatedAt || "unknown"}`);

  if (pending.length > 0) {
    console.log("Pending:");
    for (const [key, value] of pending) {
      console.log(`- ${key} ${value?.label || ""} ${value?.src || ""}`.trim());
    }
    process.exitCode = 1;
  } else {
    console.log("Status: audio-review OK.");
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
