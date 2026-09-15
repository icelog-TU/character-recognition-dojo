#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { lessonAudioSources } from "./lib/lesson-audio-sources.mjs";

const COMPLETE_STATUSES = new Set(["asset-complete-package", "dependency-blocked-asset-complete"]);
const COMPLETE_REGISTRY_STATUSES = new Set([
  "asset-complete-package",
  "dependency-blocked-asset-complete",
  "ready-blocked-by-dependency",
]);
const EXPECTED_STAGE4_ORDER = [
  "find-character",
  "teach-character",
  "missing-character",
  "partial-order",
  "choose-pronunciation",
];

const BLOCKER_PATTERNS = [
  /\bpartial-package\b/i,
  /\bneeds-rework\b/i,
  /\bassets-only\b/i,
  /not asset-complete/i,
  /do not integrate/i,
  /keep needs-rework/i,
  /\bNOT COMPLETED\b/i,
  /\bFAIL(?:ED)?\b/i,
  /\bunresolved\b/i,
];

function usage() {
  console.log(`Usage:
  npm run curriculum:package-intake -- --unit L357 --ref origin/codex/l357-complete-package
  npm run curriculum:package-intake -- --unit L357 --ref <commit-sha> --strict

Options:
  --unit    Unit id, such as L357. Required.
  --ref     Git ref to inspect. Defaults to HEAD.
  --strict  Treat warnings as failures.
`);
}

function parseArgs(argv) {
  const args = { ref: "HEAD", strict: false, unit: "" };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--unit") args.unit = (argv[++index] || "").toUpperCase();
    else if (arg === "--ref") args.ref = argv[++index] || "HEAD";
    else if (arg === "--strict") args.strict = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return args;
}

function git(args, options = {}) {
  return execFileSync("git", args, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    ...options,
  });
}

function gitShow(ref, file) {
  return git(["show", `${ref}:${file}`]);
}

function readJson(ref, file) {
  return JSON.parse(gitShow(ref, file));
}

function listFiles(ref, prefix) {
  const raw = git(["ls-tree", "-r", "--name-only", ref, prefix]);
  return raw.trim() ? raw.trim().split(/\r?\n/) : [];
}

function hanChars(text) {
  return [...(text || "")].filter((char) => /\p{Script=Han}/u.test(char));
}

function findRegistryRow(registry, unit) {
  return registry
    .split(/\r?\n/)
    .find((line) => line.trim().startsWith(`| ${unit} |`));
}

function hasPlaybackEvidence(text) {
  return /Browser QA|manualPlayback|manual playback|teacher manual|pre-merge asset QA|phone playback|played to ended|Stage 4.*record/i.test(
    text,
  );
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }
  if (!/^L\d{3}$/.test(args.unit)) {
    throw new Error("--unit must be a normal lesson id such as L357.");
  }

  const errors = [];
  const warnings = [];
  const unit = args.unit;
  const ref = args.ref;
  const draftPath = `curriculum-workflow/drafts/${unit}-draft.json`;
  const requestPath = `curriculum-workflow/lesson-requests/${unit}.json`;
  const packetPath = `curriculum-workflow/generated/${unit}-generation-packet.md`;

  const draft = readJson(ref, draftPath);
  const request = readJson(ref, requestPath);
  const packet = gitShow(ref, packetPath);
  const registry = gitShow(ref, "docs/PARALLEL_LESSON_REGISTRY.md");
  const row = findRegistryRow(registry, unit);
  const mediaFiles = listFiles(ref, `public/assets/lessons/${unit}`);
  const imageFiles = mediaFiles.filter((file) => file.endsWith(".webp"));
  const audioFiles = mediaFiles.filter((file) => file.endsWith(".m4a"));

  if (draft.id !== unit) errors.push(`${draftPath}: id is ${draft.id}, expected ${unit}.`);
  if (request.id !== unit) errors.push(`${requestPath}: id is ${request.id}, expected ${unit}.`);
  if (!COMPLETE_STATUSES.has(draft.packageStatus)) {
    errors.push(`${draftPath}: packageStatus is ${JSON.stringify(draft.packageStatus)}, not asset-complete.`);
  }
  if (!row) {
    errors.push(`docs/PARALLEL_LESSON_REGISTRY.md has no row for ${unit}.`);
  } else {
    const statusCell = row.split("|").map((cell) => cell.trim())[3] || "";
    if (!COMPLETE_REGISTRY_STATUSES.has(statusCell)) {
      errors.push(`Registry status for ${unit} is ${JSON.stringify(statusCell)}, not asset-complete.`);
    }
    for (const pattern of BLOCKER_PATTERNS) {
      if (pattern.test(row)) errors.push(`Registry row contains blocker text matching ${pattern}.`);
    }
  }

  for (const [label, text] of [
    [packetPath, packet],
    [draftPath, JSON.stringify(draft, null, 2)],
  ]) {
    for (const pattern of BLOCKER_PATTERNS) {
      if (pattern.test(text)) errors.push(`${label} contains blocker text matching ${pattern}.`);
    }
  }

  if (imageFiles.length !== 5) errors.push(`${unit}: expected 5 WebP images, found ${imageFiles.length}.`);
  const expectedAudio = lessonAudioSources(draft);
  if (audioFiles.length !== expectedAudio.size) errors.push(`${unit}: expected ${expectedAudio.size} referenced M4A audio files, found ${audioFiles.length}.`);

  const finalAssetPaths = new Set(mediaFiles.map((file) => `/${file.replaceAll("\\", "/").replace(/^public\//, "")}`));
  for (const src of expectedAudio) {
    if (!src.endsWith(".m4a") || !finalAssetPaths.has(src)) errors.push(`${unit}: missing processed audio ${src}.`);
  }
  for (const sentence of draft.sentences || []) {
    const timings = sentence.audio?.charTimings;
    const expectedTimingCount = hanChars(sentence.spokenText).length;
    if (!Array.isArray(timings) || timings.length !== expectedTimingCount) {
      errors.push(
        `${sentence.id}: charTimings length ${Array.isArray(timings) ? timings.length : "missing"} does not match Han count ${expectedTimingCount}.`,
      );
    }
    if (!finalAssetPaths.has(sentence.imageSrc)) errors.push(`${sentence.id}: missing image asset ${sentence.imageSrc}.`);
    if (!finalAssetPaths.has(sentence.audio?.src)) errors.push(`${sentence.id}: missing audio asset ${sentence.audio?.src}.`);
  }

  const games = draft.sentenceGames || [];
  const actualOrder = games.map((game) => game.type || game.gameType);
  if (actualOrder.join("|") !== EXPECTED_STAGE4_ORDER.join("|")) {
    errors.push(`${unit}: Stage 4 order is ${actualOrder.join(", ")}, expected ${EXPECTED_STAGE4_ORDER.join(", ")}.`);
  }

  for (const game of games) {
    const type = game.type || game.gameType;
    if (type === "teach-character") {
      for (const part of ["prefix", "suffix"]) {
        const text = game.teachAudio?.[`${part}Text`] || "";
        const src = game.teachAudio?.[`${part}Src`];
        const audio = game.teachAudio?.[`${part}Audio`];
        if (text && !finalAssetPaths.has(src)) errors.push(`${game.id}: missing ${part}Src asset ${src}.`);
        if (hanChars(text).length > 0) {
          const timings = audio?.charTimings;
          if (!Array.isArray(timings) || timings.length !== hanChars(text).length) {
            warnings.push(
              `${game.id}: ${part}Audio.charTimings length ${Array.isArray(timings) ? timings.length : "missing"} does not match ${part}Text Han count ${hanChars(text).length}.`,
            );
          }
        }
      }
    }
    if (type === "choose-pronunciation") {
      for (const option of game.options || []) {
        const src = option.audioSrc || option.audio?.src;
        if (!finalAssetPaths.has(src)) errors.push(`${game.id}/${option.id}: missing option audio asset ${src}.`);
      }
    }
  }

  if (!hasPlaybackEvidence(packet) && !hasPlaybackEvidence(JSON.stringify(draft))) {
    warnings.push(`${unit}: no explicit playback/manual QA evidence found in packet or draft.`);
  }

  console.log(`Package intake: ${unit} @ ${ref}`);
  console.log(`packageStatus: ${draft.packageStatus}`);
  console.log(`assets: ${imageFiles.length} images, ${audioFiles.length} audio files`);
  console.log(`stage4: ${actualOrder.join(", ")}`);
  if (warnings.length) {
    console.log("\nWarnings:");
    for (const warning of warnings) console.log(`- ${warning}`);
  }
  if (errors.length) {
    console.error("\nErrors:");
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }
  if (args.strict && warnings.length) {
    console.error("\nStrict mode failed because warnings are present.");
    process.exitCode = 1;
    return;
  }
  console.log("\nPASS: package intake gate found no blocking package-status defects.");
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
