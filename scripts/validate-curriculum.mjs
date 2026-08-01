import fs from "node:fs";
import path from "node:path";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));
const errors = [];
const warnings = [];
const supportedSentenceGameTypes = new Set([
  "find-character",
  "teach-character",
  "missing-character",
  "partial-order",
  "choose-pronunciation",
]);
const stageFourCycleGameTypes = [
  "find-character",
  "teach-character",
  "missing-character",
  "partial-order",
  "choose-pronunciation",
];

function hanChars(text) {
  return Array.from(text).filter((char) => /\p{Script=Han}/u.test(char));
}

function hanDistance(left, right) {
  const leftChars = hanChars(left);
  const rightChars = hanChars(right);
  if (leftChars.length !== rightChars.length) return Number.POSITIVE_INFINITY;
  return leftChars.reduce((count, char, index) => count + (char === rightChars[index] ? 0 : 1), 0);
}

if (!Array.isArray(curriculum.lessons)) {
  errors.push("`lessons` must be an array.");
}

const lessons = Array.isArray(curriculum.lessons) ? curriculum.lessons : [];
const sorted = [...lessons].sort((a, b) => a.order - b.order);
const lessonIds = new Set();
const introducedChars = new Set();
const unlocked = new Set();

for (let i = 0; i < sorted.length; i += 1) {
  const lesson = sorted[i];
  const expectedOrder = i + 1;
  const newChars = Array.isArray(lesson.newChars) ? lesson.newChars : [];

  if (lesson.order !== expectedOrder) {
    errors.push(`${lesson.id}: expected order ${expectedOrder}, got ${lesson.order}.`);
  }

  if (lessonIds.has(lesson.id)) errors.push(`${lesson.id}: duplicate lesson id.`);
  lessonIds.add(lesson.id);

  if (newChars.length === 0) {
    errors.push(`${lesson.id}: newChars must include at least one character.`);
  }

  for (const char of newChars) {
    if (!/\p{Script=Han}/u.test(char)) {
      errors.push(`${lesson.id}: newChars item ${char} is not a Han character.`);
    }
    if (introducedChars.has(char)) {
      errors.push(`${lesson.id}: duplicate introduced character ${char}.`);
    }
    introducedChars.add(char);
    if (!lesson.zhuyin || typeof lesson.zhuyin[char] !== "string" || lesson.zhuyin[char].trim() === "") {
      errors.push(`${lesson.id}: missing zhuyin for ${char}.`);
    }
  }

  const currentAllowed = new Set([...unlocked, ...newChars]);

  if (!Array.isArray(lesson.sentences) || lesson.sentences.length === 0) {
    errors.push(`${lesson.id}: must include at least one sentence.`);
  }

  for (const sentence of lesson.sentences ?? []) {
    const chars = hanChars(sentence.text);

    if (sentence.displayLines) {
      if (!Array.isArray(sentence.displayLines)) {
        errors.push(`${sentence.id}: displayLines must be an array when provided.`);
      } else if (sentence.displayLines.join("") !== sentence.text) {
        errors.push(`${sentence.id}: displayLines must join back to text.`);
      } else {
        for (const line of sentence.displayLines) {
          if (hanChars(line).length > 5) {
            errors.push(`${sentence.id}: displayLines line "${line}" is too long for phone layout; use shorter lines.`);
          }
        }
      }
    }

    for (const char of chars) {
      if (!currentAllowed.has(char)) {
        errors.push(`${sentence.id}: uses locked character ${char}.`);
      }
    }

    if (!chars.includes(sentence.focusChar)) {
      errors.push(`${sentence.id}: focusChar ${sentence.focusChar} does not appear in text.`);
    }

    if (sentence.approved !== true) {
      errors.push(`${sentence.id}: approved must be true before entering curriculum.`);
    }

    if (!sentence.imagePrompt || typeof sentence.imagePrompt !== "string") {
      errors.push(`${sentence.id}: imagePrompt is required for picture-book lesson planning.`);
    }

    if (sentence.spokenText && /[，。！？、；：,.!?;:]/u.test(sentence.spokenText)) {
      warnings.push(`${sentence.id}: spokenText includes punctuation; verify this is intentional.`);
    }

    if (!sentence.audio) {
      warnings.push(`${sentence.id}: audio is missing; acceptable for draft samples, not for production.`);
    } else if (sentence.audio.charTimings.length !== chars.length) {
      errors.push(`${sentence.id}: audio timings count does not match Han character count.`);
    }
  }

  const sentencesById = new Map((lesson.sentences ?? []).map((sentence) => [sentence.id, sentence]));
  const sentenceGames = lesson.sentenceGames ?? [];
  if (lesson.order >= 11 && sentenceGames.length === stageFourCycleGameTypes.length) {
    const gameTypes = new Set(sentenceGames.map((game) => game.type));
    for (const expectedType of stageFourCycleGameTypes) {
      if (!gameTypes.has(expectedType)) {
        errors.push(`${lesson.id}: five-game Stage 4 lessons must include ${expectedType} exactly once.`);
      }
    }
    if (gameTypes.size !== stageFourCycleGameTypes.length) {
      errors.push(`${lesson.id}: five-game Stage 4 lessons must not repeat a game type.`);
    }
  }
  for (const game of sentenceGames) {
    const label = game.id || `${lesson.id} sentenceGame`;
    const sentence = sentencesById.get(game.sentenceId);

    if (!supportedSentenceGameTypes.has(game.type)) {
      errors.push(`${label}: unsupported sentence game type ${game.type}.`);
    }

    if (!sentence) {
      errors.push(`${label}: sentenceId ${game.sentenceId} does not exist in ${lesson.id}.`);
      continue;
    }

    const chars = hanChars(sentence.text);
    if (!chars.includes(game.targetChar)) {
      errors.push(`${label}: targetChar ${game.targetChar} does not appear in ${game.sentenceId}.`);
    }

    for (const char of hanChars(game.targetChar)) {
      if (!currentAllowed.has(char)) {
        errors.push(`${label}: targetChar uses locked character ${char}.`);
      }
    }

    if (game.missingIndexes) {
      if (!Array.isArray(game.missingIndexes)) {
        errors.push(`${label}: missingIndexes must be an array when provided.`);
      } else {
        for (const index of game.missingIndexes) {
          if (!Number.isInteger(index) || index < 0 || index >= chars.length) {
            errors.push(`${label}: missing index ${index} is outside ${game.sentenceId}.`);
          }
        }
      }
    }

    for (const option of game.options ?? []) {
      if (!option.id || typeof option.id !== "string") {
        errors.push(`${label}: every option needs a string id.`);
      }
      if (!option.text || typeof option.text !== "string") {
        errors.push(`${label}: every option needs text.`);
      }
      if (typeof option.correct !== "boolean") {
        errors.push(`${label}: option ${option.id} needs boolean correct.`);
      }
      for (const char of hanChars(option.text ?? "")) {
        if (!currentAllowed.has(char)) {
          errors.push(`${label}: option ${option.id} uses locked character ${char}.`);
        }
      }
    }

    if (game.type === "missing-character" || game.type === "choose-pronunciation") {
      const correctCount = (game.options ?? []).filter((option) => option.correct === true).length;
      if (correctCount !== 1) {
        errors.push(`${label}: ${game.type} must have exactly one correct option.`);
      }
    }

    if (game.type === "choose-pronunciation") {
      const correctOption = (game.options ?? []).find((option) => option.correct === true);
      if (correctOption) {
        for (const option of game.options ?? []) {
          if (option.correct) continue;
          const distance = hanDistance(correctOption.text, option.text);
          if (distance < 1 || distance > 2) {
            errors.push(`${label}: wrong option ${option.id} should differ from the correct sentence by 1-2 Han characters.`);
          }
        }
      }
    }
  }

  for (const char of newChars) unlocked.add(char);
}

for (const warning of warnings) console.warn(`Warning: ${warning}`);

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}

console.log(`Curriculum OK: ${sorted.length} lessons checked.`);
