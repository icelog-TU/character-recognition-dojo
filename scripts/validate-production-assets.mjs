import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));
const errors = [];
const require = createRequire(import.meta.url);
const charAudioMaxVolumeFloorDb = -35;

function packageToolPath(packageName) {
  try {
    return require(packageName).path;
  } catch {
    return null;
  }
}

const ffmpegCommand = process.env.FFMPEG_PATH || packageToolPath("@ffmpeg-installer/ffmpeg") || "ffmpeg";

function hanChars(text) {
  return Array.from(text).filter((char) => /\p{Script=Han}/u.test(char));
}

function publicPathFromSrc(src) {
  if (!src || typeof src !== "string") return null;
  const normalized = src.startsWith("/") ? src.slice(1) : src;
  return path.resolve("public", normalized);
}

function requirePublicAsset(label, src) {
  const filePath = publicPathFromSrc(src);
  if (!filePath) {
    errors.push(`${label}: missing asset src.`);
    return null;
  }
  if (!fs.existsSync(filePath)) {
    errors.push(`${label}: asset file not found at ${filePath}.`);
    return null;
  }
  return filePath;
}

function getMaxVolumeDb(filePath) {
  const result = spawnSync(ffmpegCommand, [
    "-hide_banner",
    "-i",
    filePath,
    "-af",
    "volumedetect",
    "-f",
    "null",
    "-",
  ], { encoding: "utf8" });
  if (result.error || result.status !== 0) return null;
  const match = result.stderr.match(/max_volume:\s*([-0-9.]+)\s*dB/);
  if (!match) return null;
  return Number(match[1]);
}

function requireAudibleCharAudio(label, src) {
  const filePath = requirePublicAsset(label, src);
  if (!filePath) return;
  const maxVolumeDb = getMaxVolumeDb(filePath);
  if (!Number.isFinite(maxVolumeDb)) {
    errors.push(`${label}: could not measure audio volume.`);
    return;
  }
  if (maxVolumeDb < charAudioMaxVolumeFloorDb) {
    errors.push(`${label}: max volume ${maxVolumeDb} dB is too quiet; regenerate or normalize the character audio.`);
  }
}

function validateSentenceAssets(unit) {
  for (const sentence of unit.sentences ?? []) {
    if (sentence.approved !== true) {
      errors.push(`${sentence.id}: production curriculum requires approved=true.`);
    }

    requirePublicAsset(`${sentence.id} imageSrc`, sentence.imageSrc);

    if (!sentence.audio) {
      errors.push(`${sentence.id}: production sentence audio is missing.`);
      continue;
    }

    requirePublicAsset(`${sentence.id} audio.src`, sentence.audio.src);

    const chars = hanChars(sentence.text);
    if (!Array.isArray(sentence.audio.charTimings) || sentence.audio.charTimings.length !== chars.length) {
      errors.push(`${sentence.id}: charTimings must match Han character count ${chars.length}.`);
    }

    if (!Number.isFinite(sentence.audio.durationMs) || sentence.audio.durationMs <= 0) {
      errors.push(`${sentence.id}: audio.durationMs must be a positive number.`);
    }
  }

  for (const game of unit.sentenceGames ?? []) {
    if (game.teachAudio?.prefixSrc) {
      requirePublicAsset(`${game.id} teachAudio.prefixSrc`, game.teachAudio.prefixSrc);
    }
    if (game.teachAudio?.suffixSrc) {
      requirePublicAsset(`${game.id} teachAudio.suffixSrc`, game.teachAudio.suffixSrc);
    }
    for (const option of game.options ?? []) {
      if (option.audioSrc) {
        requirePublicAsset(`${game.id} option ${option.id} audioSrc`, option.audioSrc);
      }
    }
  }
}

for (const lesson of curriculum.lessons ?? []) {
  for (const char of lesson.newChars ?? []) {
    requireAudibleCharAudio(`${lesson.id} ${char} charAudio`, lesson.charAudio?.[char]);
  }

  validateSentenceAssets(lesson);
}

for (const review of curriculum.reviewLessons ?? []) {
  validateSentenceAssets(review);
}

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}

console.log("Production assets OK.");
