import fs from "node:fs";
import path from "node:path";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));
const errors = [];

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
    return;
  }
  if (!fs.existsSync(filePath)) {
    errors.push(`${label}: asset file not found at ${filePath}.`);
  }
}

for (const lesson of curriculum.lessons ?? []) {
  for (const char of lesson.newChars ?? []) {
    requirePublicAsset(`${lesson.id} ${char} charAudio`, lesson.charAudio?.[char]);
  }

  for (const sentence of lesson.sentences ?? []) {
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

  for (const game of lesson.sentenceGames ?? []) {
    for (const option of game.options ?? []) {
      if (option.audioSrc) {
        requirePublicAsset(`${game.id} option ${option.id} audioSrc`, option.audioSrc);
      }
    }
  }
}

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}

console.log("Production assets OK.");
