import fs from "node:fs";
import path from "node:path";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));
const errors = [];
const warnings = [];

function hanChars(text) {
  return Array.from(text).filter((char) => /\p{Script=Han}/u.test(char));
}

if (!Array.isArray(curriculum.lessons)) {
  errors.push("`lessons` must be an array.");
}

const lessons = Array.isArray(curriculum.lessons) ? curriculum.lessons : [];
const sorted = [...lessons].sort((a, b) => a.order - b.order);
const lessonIds = new Set();
const targetChars = new Set();
const unlocked = new Set();

for (let i = 0; i < sorted.length; i += 1) {
  const lesson = sorted[i];
  const expectedOrder = i + 1;

  if (lesson.order !== expectedOrder) {
    errors.push(`${lesson.id}: expected order ${expectedOrder}, got ${lesson.order}.`);
  }

  if (lessonIds.has(lesson.id)) errors.push(`${lesson.id}: duplicate lesson id.`);
  lessonIds.add(lesson.id);

  if (targetChars.has(lesson.targetChar)) {
    errors.push(`${lesson.id}: duplicate target character ${lesson.targetChar}.`);
  }
  targetChars.add(lesson.targetChar);

  const currentAllowed = new Set([...unlocked, lesson.targetChar]);
  if (!lesson.zhuyin || lesson.zhuyin.includes(" ")) {
    errors.push(`${lesson.id}: zhuyin is required and should not contain spaces.`);
  }

  if (!Array.isArray(lesson.sentences) || lesson.sentences.length === 0) {
    errors.push(`${lesson.id}: must include at least one sentence.`);
  }

  for (const sentence of lesson.sentences ?? []) {
    const chars = hanChars(sentence.text);
    for (const char of chars) {
      if (!currentAllowed.has(char)) {
        errors.push(`${sentence.id}: uses locked character ${char}.`);
      }
    }

    if (!chars.includes(sentence.focusChar)) {
      errors.push(`${sentence.id}: focusChar ${sentence.focusChar} does not appear in text.`);
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

  unlocked.add(lesson.targetChar);
}

for (const warning of warnings) console.warn(`Warning: ${warning}`);

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}

console.log(`Curriculum OK: ${sorted.length} lessons checked.`);
