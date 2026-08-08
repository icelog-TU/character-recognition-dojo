#!/usr/bin/env node
const DEFAULT_REPO = "icelog-TU/character-recognition-dojo";
const DEFAULT_PROJECT = "character-recognition-dojo";

function usage() {
  console.log(`Usage:
  npm run asset:review-status -- --unit L155 --ref <branch-or-sha>

Options:
  --unit            Lesson/review id, for example L155 or R004. Required.
  --ref             Git branch, tag, or commit SHA. Defaults to main.
  --repo            GitHub owner/repo. Defaults to ${DEFAULT_REPO}.
  --project         Firebase project id. Defaults to ${DEFAULT_PROJECT}.
  --fail-on-repair  Exit 1 when repair items exist.
`);
}

function parseArgs(argv) {
  const args = {
    repo: DEFAULT_REPO,
    project: DEFAULT_PROJECT,
    ref: "main",
    unit: "",
    failOnRepair: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--unit") args.unit = argv[++index] || "";
    else if (arg === "--ref") args.ref = argv[++index] || "";
    else if (arg === "--repo") args.repo = argv[++index] || "";
    else if (arg === "--project") args.project = argv[++index] || "";
    else if (arg === "--fail-on-repair") args.failOnRepair = true;
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
      "User-Agent": "character-recognition-dojo-asset-review-check",
    },
  });
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`${label} HTTP ${response.status}${body ? `: ${body.slice(0, 220)}` : ""}`);
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
  if ("arrayValue" in value) return (value.arrayValue.values || []).map(firestoreValue);
  if ("mapValue" in value) return firestoreObject(value.mapValue.fields || {});
  return undefined;
}

function firestoreObject(fields) {
  return Object.fromEntries(Object.entries(fields || {}).map(([key, value]) => [key, firestoreValue(value)]));
}

async function readReview(project, id) {
  const url = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/assetReviews/${id}`;
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

  console.log(`Asset review status for ${args.unit}`);
  console.log(`Repo: ${args.repo}`);
  console.log(`Ref: ${args.ref}`);
  console.log(`Commit: ${sha}`);
  console.log(`Review document: assetReviews/${id}`);

  if (!review) {
    console.log("Status: no teacher asset review document found.");
    return;
  }

  const repairItems = Object.entries(review.repairItems || {})
    .map(([key, value]) => ({ key, ...value }))
    .filter((item) => item.needsRepair === true || item.note);
  const needsRepair = repairItems.filter((item) => item.needsRepair === true);

  console.log(`Review complete: ${review.reviewComplete === true ? "yes" : "no"}`);
  console.log(`Needs repair: ${needsRepair.length}`);
  console.log(`Items with notes: ${repairItems.length}`);
  console.log(`Updated by: ${review.updatedByEmail || review.updatedByName || review.updatedByUid || "unknown"}`);
  console.log(`Updated at: ${review.updatedAt || "unknown"}`);

  if (repairItems.length > 0) {
    console.log("Repair queue:");
    for (const item of repairItems) {
      const status = item.needsRepair === true ? "NEEDS_REPAIR" : "NOTE";
      console.log(`- ${status} ${item.key} ${item.label || ""}`);
      if (item.src) console.log(`  src: ${item.src}`);
      if (item.text) console.log(`  text: ${item.text}`);
      if (item.note) console.log(`  note: ${item.note}`);
    }
  } else {
    console.log("Status: no repair items marked.");
  }

  if (args.failOnRepair && needsRepair.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
