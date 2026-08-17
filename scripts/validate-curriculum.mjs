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
const reviewLessons = Array.isArray(curriculum.reviewLessons) ? curriculum.reviewLessons : [];
const sorted = [...lessons].sort((a, b) => a.order - b.order);
const lessonIds = new Set();
const reviewLessonIds = new Set();
const introducedChars = new Set();
const unlocked = new Set();

function validateSentenceContent({ unitLabel, sentence, currentAllowed }) {
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
    errors.push(`${sentence.id}: imagePrompt is required for picture-book ${unitLabel} planning.`);
  }

  if (sentence.spokenText && /[，。！？、；：,.!?;:]/u.test(sentence.spokenText)) {
    warnings.push(`${sentence.id}: spokenText includes punctuation; verify this is intentional.`);
  }

  if (!sentence.audio) {
    warnings.push(`${sentence.id}: audio is missing; acceptable for draft samples, not for production.`);
  } else if (sentence.audio.charTimings.length !== chars.length) {
    errors.push(`${sentence.id}: audio timings count does not match Han character count.`);
  }

  return chars;
}

function validateSentenceGames({ unit, currentAllowed, enforceUniqueStageFourSentences = false, normalLessonNewChar = null }) {
  const sentencesById = new Map((unit.sentences ?? []).map((sentence) => [sentence.id, sentence]));
  const sentenceGames = unit.sentenceGames ?? [];
  if (sentenceGames.length > 0) {
    if (!Number.isInteger(unit.requiredRounds) || unit.requiredRounds < 0) {
      errors.push(`${unit.id}: requiredRounds must be a non-negative integer when sentenceGames are present.`);
    } else if (unit.requiredRounds > sentenceGames.length) {
      errors.push(`${unit.id}: requiredRounds cannot exceed sentenceGames length.`);
    }
  }
  if (sentenceGames.length === stageFourCycleGameTypes.length) {
    const gameTypes = new Set(sentenceGames.map((game) => game.type));
    const gameSentenceIds = sentenceGames.map((game) => game.sentenceId);
    const uniqueGameSentenceIds = new Set(gameSentenceIds);
    for (const expectedType of stageFourCycleGameTypes) {
      if (!gameTypes.has(expectedType)) {
        errors.push(`${unit.id}: five-game Stage 4 lessons must include ${expectedType} exactly once.`);
      }
    }
    if (gameTypes.size !== stageFourCycleGameTypes.length) {
      errors.push(`${unit.id}: five-game Stage 4 lessons must not repeat a game type.`);
    }
    if (enforceUniqueStageFourSentences && (unit.sentences ?? []).length === stageFourCycleGameTypes.length) {
      if (uniqueGameSentenceIds.size !== stageFourCycleGameTypes.length) {
        errors.push(`${unit.id}: five-game Stage 4 lessons must use each reviewed sentence exactly once.`);
      }
      for (const sentence of unit.sentences ?? []) {
        if (!uniqueGameSentenceIds.has(sentence.id)) {
          errors.push(`${unit.id}: Stage 4 does not include reviewed sentence ${sentence.id}.`);
        }
      }
    }
    if (normalLessonNewChar) {
      for (const coreType of ["find-character", "teach-character", "missing-character"]) {
        const coreGame = sentenceGames.find((game) => game.type === coreType);
        if (coreGame && coreGame.targetChar !== normalLessonNewChar) {
          warnings.push(`${unit.id}: ${coreType} should usually target the new character ${normalLessonNewChar}.`);
        }
      }
    }
  }
  for (const game of sentenceGames) {
    const label = game.id || `${unit.id} sentenceGame`;
    const sentence = sentencesById.get(game.sentenceId);

    if (!supportedSentenceGameTypes.has(game.type)) {
      errors.push(`${label}: unsupported sentence game type ${game.type}.`);
    }

    if (!sentence) {
      errors.push(`${label}: sentenceId ${game.sentenceId} does not exist in ${unit.id}.`);
      continue;
    }

    const chars = hanChars(sentence.text);
    if (!chars.includes(game.targetChar)) {
      errors.push(`${label}: targetChar ${game.targetChar} does not appear in ${game.sentenceId}.`);
    }
    if (game.targetCharIndex !== undefined) {
      if (!Number.isInteger(game.targetCharIndex) || game.targetCharIndex < 0 || game.targetCharIndex >= chars.length) {
        errors.push(`${label}: targetCharIndex ${game.targetCharIndex} is outside ${game.sentenceId}.`);
      } else if (chars[game.targetCharIndex] !== game.targetChar) {
        errors.push(
          `${label}: targetCharIndex ${game.targetCharIndex} points to ${chars[game.targetCharIndex]}, not targetChar ${game.targetChar}.`,
        );
      }
    }
    if (game.type === "teach-character") {
      if (!Number.isInteger(game.targetCharIndex)) {
        errors.push(`${label}: teach-character must set targetCharIndex so repeated target characters are unambiguous.`);
      } else if (chars[game.targetCharIndex] === game.targetChar) {
        const prefixText = chars.slice(0, game.targetCharIndex).join("");
        const suffixText = chars.slice(game.targetCharIndex + 1).join("");
        if (prefixText && !game.teachAudio?.prefixSrc) {
          errors.push(`${label}: teach-character prefix text ${prefixText} requires teachAudio.prefixSrc.`);
        }
        if (suffixText && !game.teachAudio?.suffixSrc) {
          errors.push(`${label}: teach-character suffix text ${suffixText} requires teachAudio.suffixSrc.`);
        }
      }
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

    if (game.type === "partial-order") {
      const missingIndexes = Array.isArray(game.missingIndexes) ? game.missingIndexes : [];
      const options = game.options ?? [];
      if (missingIndexes.length < 3 || missingIndexes.length > 4) {
        errors.push(`${label}: partial-order must blank 3-4 Han characters, found ${missingIndexes.length}.`);
      }
      if (options.length !== missingIndexes.length) {
        errors.push(`${label}: partial-order must have exactly one option card per missing Han character.`);
      }
      for (const option of options) {
        const optionChars = hanChars(option.text ?? "");
        if (optionChars.length !== 1) {
          errors.push(`${label}: partial-order option ${option.id} must be exactly one Han character.`);
        }
        if (!Number.isInteger(option.correctOrder) || option.correctOrder < 0 || option.correctOrder >= missingIndexes.length) {
          errors.push(`${label}: partial-order option ${option.id} needs a valid correctOrder.`);
          continue;
        }
        const expectedChar = chars[missingIndexes[option.correctOrder]];
        if (optionChars[0] !== expectedChar) {
          errors.push(`${label}: partial-order option ${option.id} text ${option.text} does not match missing index ${missingIndexes[option.correctOrder]}.`);
        }
        if (option.correct !== true) {
          errors.push(`${label}: partial-order option ${option.id} must be marked correct.`);
        }
      }
    }
  }
}

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
    validateSentenceContent({ unitLabel: "lesson", sentence, currentAllowed });
  }

  validateSentenceGames({
    unit: lesson,
    currentAllowed,
    enforceUniqueStageFourSentences: lesson.order >= 32,
    normalLessonNewChar: (lesson.newChars ?? []).length === 1 ? lesson.newChars[0] : null,
  });

  for (const char of newChars) unlocked.add(char);
}

const reviewGroups = new Map();
for (const review of reviewLessons) {
  if (!/^R\d{3}$/.test(review.id)) errors.push(`${review.id}: review module ids must use R### and must not use L###.`);
  if (reviewLessonIds.has(review.id)) errors.push(`${review.id}: duplicate review lesson id.`);
  reviewLessonIds.add(review.id);
  if (Array.isArray(review.newChars) && review.newChars.length > 0) {
    errors.push(`${review.id}: review modules must not include newChars; use requiredCoverageChars instead.`);
  }
  if (!Number.isInteger(review.reviewNumber) || review.reviewNumber < 1) {
    errors.push(`${review.id}: reviewNumber must be a positive integer.`);
  }
  if (!Number.isInteger(review.afterLessonOrder) || review.afterLessonOrder < 1) {
    errors.push(`${review.id}: afterLessonOrder must be a positive lesson order.`);
  }
  const afterLesson = sorted.find((lesson) => lesson.order === review.afterLessonOrder);
  if (!afterLesson) errors.push(`${review.id}: afterLessonOrder ${review.afterLessonOrder} does not exist.`);

  const range = review.targetLessonRange;
  if (!range || !Number.isInteger(range.startOrder) || !Number.isInteger(range.endOrder) || range.startOrder > range.endOrder) {
    errors.push(`${review.id}: targetLessonRange must include valid startOrder and endOrder.`);
  }

  const currentAllowed = new Set(sorted.filter((lesson) => lesson.order <= review.afterLessonOrder).flatMap((lesson) => lesson.newChars ?? []));
  const targetChars = new Set(
    sorted
      .filter((lesson) => range && lesson.order >= range.startOrder && lesson.order <= range.endOrder)
      .flatMap((lesson) => lesson.newChars ?? []),
  );
  for (const char of review.requiredCoverageChars ?? []) {
    if (!targetChars.has(char)) {
      errors.push(`${review.id}: requiredCoverageChars includes ${char}, but it is not introduced in targetLessonRange.`);
    }
  }
  for (const char of targetChars) {
    if (!(review.requiredCoverageChars ?? []).includes(char)) {
      errors.push(`${review.id}: requiredCoverageChars is missing target character ${char}.`);
    }
  }

  if (!Array.isArray(review.sentences) || review.sentences.length === 0) {
    errors.push(`${review.id}: review module must include at least one sentence.`);
  }
  const usedChars = [];
  for (const sentence of review.sentences ?? []) {
    usedChars.push(...validateSentenceContent({ unitLabel: "review module", sentence, currentAllowed }));
  }
  validateSentenceGames({ unit: review, currentAllowed, enforceUniqueStageFourSentences: false });

  const groupKey = `${review.afterLessonOrder}:${range?.startOrder ?? "?"}-${range?.endOrder ?? "?"}`;
  const group = reviewGroups.get(groupKey) ?? { reviews: [], usedChars: [] };
  group.reviews.push(review);
  group.usedChars.push(...usedChars);
  reviewGroups.set(groupKey, group);
}

for (const [groupKey, group] of reviewGroups) {
  if (group.reviews.length !== 2) {
    warnings.push(`Review pair ${groupKey} has ${group.reviews.length} review module(s); production pairs should have exactly 2.`);
    continue;
  }
  const required = new Set(group.reviews.flatMap((review) => review.requiredCoverageChars ?? []));
  const used = new Set(group.usedChars);
  for (const char of required) {
    if (!used.has(char)) {
      errors.push(`Review pair ${groupKey}: required target character ${char} does not appear across the two review modules.`);
    }
  }
}

for (const warning of warnings) console.warn(`Warning: ${warning}`);

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}

console.log(`Curriculum OK: ${sorted.length} lessons checked.`);
