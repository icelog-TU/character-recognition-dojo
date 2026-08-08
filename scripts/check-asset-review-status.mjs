#!/usr/bin/env node
const DEFAULT_REPO = "icelog-TU/character-recognition-dojo";
const DEFAULT_PROJECT = "character-recognition-dojo";

function usage() {
  console.log(`Usage:
  npm run asset:review-status -- --unit L155 --ref <branch-or-sha>
  npm run asset:review-status -- --list --ref main

Options:
  --unit            Lesson/review id, for example L155 or R004.
  --list            List every asset review document with repair items for the selected ref.
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
    list: false,
    failOnRepair: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--list") args.list = true;
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

function reviewScope(ref, sha) {
  return ref.trim().toLowerCase() === "main" ? "main" : sha;
}

function reviewId(repo, unit, ref, sha) {
  return Buffer.from(`${repo}|${unit}|${reviewScope(ref, sha)}`, "utf8").toString("base64url");
}

function legacyShaReviewId(repo, unit, sha) {
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

async function listReviews(project) {
  const url = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/assetReviews`;
  const response = await fetch(url);
  if (response.status === 404) return [];
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Firestore list HTTP ${response.status}${body ? `: ${body.slice(0, 240)}` : ""}`);
  }
  const data = await response.json();
  return (data.documents || []).map((document) => firestoreObject(document.fields || {}));
}

function repairItemsFor(review) {
  return Object.entries(review?.repairItems || {})
    .map(([key, value]) => ({ key, ...value }))
    .filter((item) => item.needsRepair === true || item.note);
}

function printRepairItems(review) {
  const repairItems = repairItemsFor(review);
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
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }
  if (!args.unit && !args.list) throw new Error("--unit is required unless --list is used.");

  const sha = await resolveRef(args.repo, args.ref);

  if (args.list) {
    const reviews = await listReviews(args.project);
    const candidates = reviews
      .filter((review) => review.repo === args.repo)
      .filter((review) => (args.ref.trim().toLowerCase() === "main" ? review.ref === "main" : review.commitSha === sha || review.ref === args.ref))
      .filter((review) => repairItemsFor(review).some((item) => item.needsRepair === true));
    const latestByUnit = new Map();
    for (const review of candidates) {
      const previous = latestByUnit.get(review.unit);
      const previousUpdatedAt = previous?.updatedAt || "";
      const nextUpdatedAt = review.updatedAt || "";
      if (!previous || String(nextUpdatedAt) >= String(previousUpdatedAt)) latestByUnit.set(review.unit, review);
    }
    const matching = [...latestByUnit.values()];

    console.log("Asset repair queue");
    console.log(`Repo: ${args.repo}`);
    console.log(`Ref: ${args.ref}`);
    console.log(`Commit: ${sha}`);
    console.log(`Units needing repair: ${matching.length}`);
    for (const review of matching.sort((a, b) => String(a.unit).localeCompare(String(b.unit)))) {
      console.log("");
      console.log(`## ${review.unit}`);
      printRepairItems(review);
    }
    if (args.failOnRepair && matching.length > 0) process.exitCode = 1;
    return;
  }

  const id = reviewId(args.repo, args.unit, args.ref, sha);
  const review = await readReview(args.project, id);
  const legacyReview =
    !review && args.ref.trim().toLowerCase() === "main"
      ? await readReview(args.project, legacyShaReviewId(args.repo, args.unit, sha))
      : null;
  const selectedReview = review || legacyReview;

  console.log(`Asset review status for ${args.unit}`);
  console.log(`Repo: ${args.repo}`);
  console.log(`Ref: ${args.ref}`);
  console.log(`Commit: ${sha}`);
  console.log(`Review document: assetReviews/${id}`);
  if (legacyReview) console.log("Note: read legacy commit-key review document.");

  if (!selectedReview) {
    console.log("Status: no teacher asset review document found.");
    return;
  }

  printRepairItems(selectedReview);

  if (args.failOnRepair && repairItemsFor(selectedReview).some((item) => item.needsRepair === true)) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
