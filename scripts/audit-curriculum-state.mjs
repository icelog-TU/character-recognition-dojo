import fs from "node:fs";
import path from "node:path";

const errors = [];
const warnings = [];

function readText(relativePath) {
  return fs.readFileSync(path.resolve(relativePath), "utf8");
}

function readJson(relativePath) {
  return JSON.parse(readText(relativePath));
}

function lessonNumber(id) {
  const match = /^L(\d{3})$/.exec(id);
  return match ? Number(match[1]) : Number.NaN;
}

function expectedLessonId(order) {
  return `L${String(order).padStart(3, "0")}`;
}

function assertIncludes(file, text, label) {
  if (!file.includes(text)) errors.push(label);
}

const curriculum = readJson("src/curriculum/sample-lessons.json");
const lessons = Array.isArray(curriculum.lessons) ? curriculum.lessons : [];

if (lessons.length === 0) {
  errors.push("src/curriculum/sample-lessons.json has no lessons.");
} else {
  for (let index = 0; index < lessons.length; index += 1) {
    const lesson = lessons[index];
    const expectedOrder = index + 1;
    const expectedId = expectedLessonId(expectedOrder);
    if (lesson.id !== expectedId) {
      errors.push(`Production curriculum order ${expectedOrder} should be ${expectedId}, got ${lesson.id}.`);
    }
    if (lesson.order !== expectedOrder) {
      errors.push(`${lesson.id}: lesson.order should be ${expectedOrder}, got ${lesson.order}.`);
    }
  }

  const lastLesson = lessons.at(-1);
  const lastId = lastLesson.id;
  const lastChars = (lastLesson.newChars ?? []).join("");
  const lastIsReviewLesson = lastLesson.kind === "review" || lastChars === "";

  const handoff = readText("docs/PROJECT_HANDOFF_SOP.md");
  assertIncludes(
    handoff,
    `Current reviewed lessons: L001-${lastId}`,
    `docs/PROJECT_HANDOFF_SOP.md current reviewed lesson range is not synced to ${lastId}.`,
  );
  if (lastIsReviewLesson) {
    assertIncludes(
      handoff,
      `${lastId} is a review lesson and introduces no new characters.`,
      `docs/PROJECT_HANDOFF_SOP.md latest review lesson note is not synced to ${lastId}.`,
    );
  } else {
    assertIncludes(
      handoff,
      `${lastId} introduces \`${lastChars}\`.`,
      `docs/PROJECT_HANDOFF_SOP.md latest introduced character is not synced to ${lastId}:${lastChars}.`,
    );
  }

  const ledger = readText("docs/CURRICULUM_LEDGER.md");
  const ledgerCompleteMatch = ledger.match(/Merged curriculum is complete through (L\d{3})\./);
  if (!ledgerCompleteMatch) {
    errors.push("docs/CURRICULUM_LEDGER.md is missing the merged-through line.");
  } else if (ledgerCompleteMatch[1] !== lastId) {
    errors.push(`docs/CURRICULUM_LEDGER.md says merged through ${ledgerCompleteMatch[1]}, but production curriculum ends at ${lastId}.`);
  }

  const ledgerRows = ledger.split(/\r?\n/).filter((line) => /^\| L\d{3} \|/.test(line));
  const lastLedgerRow = ledgerRows.at(-1) ?? "";
  if (!lastLedgerRow.startsWith(`| ${lastId} |`)) {
    errors.push(`docs/CURRICULUM_LEDGER.md last lesson row is not ${lastId}.`);
  }
  const expectedLastLedgerCharCell = lastIsReviewLesson ? "review" : lastChars;
  if (!lastLedgerRow.includes(`| ${expectedLastLedgerCharCell} |`)) {
    errors.push(`docs/CURRICULUM_LEDGER.md last lesson row does not list ${expectedLastLedgerCharCell} for ${lastId}.`);
  }

  const registry = readText("docs/PARALLEL_LESSON_REGISTRY.md");
  const registryRows = registry
    .split(/\r?\n/)
    .filter((line) => /^\| L\d{3} \|/.test(line))
    .map((line) => line.split("|").slice(1, -1).map((cell) => cell.trim()));
  for (const row of registryRows) {
    const [lessonId, , status] = row;
    const number = lessonNumber(lessonId);
    if (Number.isFinite(number) && number <= lessonNumber(lastId) && status !== "merged") {
      errors.push(`docs/PARALLEL_LESSON_REGISTRY.md has active row ${lessonId}, but ${lessonId} is already in production curriculum.`);
    }
    if (status === "merged") {
      warnings.push(`docs/PARALLEL_LESSON_REGISTRY.md still contains merged row ${lessonId}; cleanup is recommended.`);
    }
  }

  const assetDir = path.resolve("public/assets/lessons");
  const assetLessons = fs.existsSync(assetDir)
    ? fs.readdirSync(assetDir).filter((name) => /^L\d{3}$/.test(name))
    : [];
  const assetLessonSet = new Set(assetLessons);
  for (const lesson of lessons) {
    if (!assetLessonSet.has(lesson.id)) {
      errors.push(`${lesson.id}: missing public/assets/lessons/${lesson.id}/ folder.`);
    }
  }
  for (const lessonId of assetLessons) {
    if (!lessons.some((lesson) => lesson.id === lessonId)) {
      warnings.push(`public/assets/lessons/${lessonId}/ exists but is not in production curriculum.`);
    }
  }

  if (fs.existsSync(path.resolve("public/tools/planner-data.json"))) {
    const plannerData = readJson("public/tools/planner-data.json");
    const plannerLessons = Array.isArray(plannerData.lessons) ? plannerData.lessons : [];
    const plannerLast = plannerLessons.at(-1);
    if (plannerLessons.length !== lessons.length || plannerLast?.id !== lastId) {
      errors.push("public/tools/planner-data.json is stale; run npm run curriculum:export-planner.");
    }
  }

  const deployWorkflow = readText(".github/workflows/deploy.yml");
  for (const requiredCommand of [
    "npm run curriculum:audit-state",
    "npm run validate:curriculum",
    "npm run validate:production",
    "npm run lint",
    "npm run build",
  ]) {
    assertIncludes(
      deployWorkflow,
      requiredCommand,
      `.github/workflows/deploy.yml does not run ${requiredCommand}.`,
    );
  }

  console.log(
    lastIsReviewLesson
      ? `Production curriculum: L001-${lastId}, latest lesson is a review lesson.`
      : `Production curriculum: L001-${lastId}, latest new character(s): ${lastChars}.`,
  );
}

for (const warning of warnings) console.warn(`Warning: ${warning}`);

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}

console.log("Curriculum state audit OK.");
