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

function reviewNumber(id) {
  const match = /^R(\d{3})$/.exec(id);
  return match ? Number(match[1]) : Number.NaN;
}

function expectedLessonId(order) {
  return `L${String(order).padStart(3, "0")}`;
}

function assertIncludes(file, text, label) {
  if (!file.includes(text)) errors.push(label);
}

function expectedRecentReviewPool(lessonList, count = 16) {
  return lessonList
    .slice(-count)
    .flatMap((lesson) => lesson.newChars ?? [])
    .reverse()
    .join(" ");
}

const curriculum = readJson("src/curriculum/sample-lessons.json");
const lessons = Array.isArray(curriculum.lessons) ? curriculum.lessons : [];
const reviewLessons = Array.isArray(curriculum.reviewLessons) ? curriculum.reviewLessons : [];

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

  const handoff = readText("docs/PROJECT_HANDOFF_SOP.md");
  assertIncludes(
    handoff,
    `Current reviewed lessons: L001-${lastId}`,
    `docs/PROJECT_HANDOFF_SOP.md current reviewed lesson range is not synced to ${lastId}.`,
  );
  assertIncludes(
    handoff,
    `${lastId} introduces \`${lastChars}\`.`,
    `docs/PROJECT_HANDOFF_SOP.md latest introduced character is not synced to ${lastId}:${lastChars}.`,
  );

  const ledger = readText("docs/CURRICULUM_LEDGER.md");
  const expectedLearnedChars = lessons.flatMap((lesson) => lesson.newChars ?? []).join("");
  const expectedRecentPool = expectedRecentReviewPool(lessons);
  const currentStateMatch = ledger.match(
    /## Current Character State\s+Characters taught after Lesson (\d+):\s+`([^`]+)`/m,
  );
  if (!currentStateMatch) {
    errors.push("docs/CURRICULUM_LEDGER.md is missing the Current Character State learned-character summary.");
  } else {
    const [, ledgerCurrentOrderText, ledgerLearnedChars] = currentStateMatch;
    const ledgerCurrentOrder = Number(ledgerCurrentOrderText);
    if (ledgerCurrentOrder !== lastLesson.order) {
      errors.push(
        `docs/CURRICULUM_LEDGER.md Current Character State says Lesson ${ledgerCurrentOrder}, but production curriculum ends at ${lastId}.`,
      );
    }
    if (ledgerLearnedChars !== expectedLearnedChars) {
      errors.push(
        "docs/CURRICULUM_LEDGER.md Current Character State learned-character string is stale; update it from src/curriculum/sample-lessons.json.",
      );
    }
  }

  const recentPoolMatch = ledger.match(/Recent review pool for the next lesson:\s+`([^`]+)`/m);
  if (!recentPoolMatch) {
    errors.push("docs/CURRICULUM_LEDGER.md is missing the Recent review pool summary.");
  } else if (recentPoolMatch[1] !== expectedRecentPool) {
    errors.push(
      `docs/CURRICULUM_LEDGER.md Recent review pool is stale; expected \`${expectedRecentPool}\` from the latest production lessons.`,
    );
  }

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
  if (!lastLedgerRow.includes(`| ${lastChars} |`)) {
    errors.push(`docs/CURRICULUM_LEDGER.md last lesson row does not list ${lastChars} for ${lastId}.`);
  }

  const registry = readText("docs/PARALLEL_LESSON_REGISTRY.md");
  const registryRows = registry
    .split(/\r?\n/)
    .filter((line) => /^\| [LR]\d{3} \|/.test(line))
    .map((line) => line.split("|").slice(1, -1).map((cell) => cell.trim()));
  for (const row of registryRows) {
    const [unitId, , status] = row;
    const number = lessonNumber(unitId);
    if (Number.isFinite(number) && number <= lessonNumber(lastId) && status !== "merged") {
      errors.push(`docs/PARALLEL_LESSON_REGISTRY.md has active row ${unitId}, but ${unitId} is already in production curriculum.`);
    }
    const review = reviewNumber(unitId);
    if (Number.isFinite(review) && reviewLessons.some((candidate) => candidate.id === unitId) && status !== "merged") {
      errors.push(`docs/PARALLEL_LESSON_REGISTRY.md has active row ${unitId}, but ${unitId} is already in production reviewLessons.`);
    }
    if (status === "merged") {
      warnings.push(`docs/PARALLEL_LESSON_REGISTRY.md still contains merged row ${unitId}; cleanup is recommended.`);
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

  const reviewAssetDir = path.resolve("public/assets/reviews");
  const assetReviews = fs.existsSync(reviewAssetDir)
    ? fs.readdirSync(reviewAssetDir).filter((name) => /^R\d{3}$/.test(name))
    : [];
  const assetReviewSet = new Set(assetReviews);
  for (const review of reviewLessons) {
    if (!assetReviewSet.has(review.id)) {
      errors.push(`${review.id}: missing public/assets/reviews/${review.id}/ folder.`);
    }
  }
  for (const reviewId of assetReviews) {
    if (!reviewLessons.some((review) => review.id === reviewId)) {
      warnings.push(`public/assets/reviews/${reviewId}/ exists but is not in production reviewLessons.`);
    }
  }

  if (fs.existsSync(path.resolve("public/tools/planner-data.json"))) {
    const plannerData = readJson("public/tools/planner-data.json");
    const plannerLessons = Array.isArray(plannerData.lessons) ? plannerData.lessons : [];
    const plannerReviewLessons = Array.isArray(plannerData.reviewLessons) ? plannerData.reviewLessons : [];
    const plannerLast = plannerLessons.at(-1);
    if (
      plannerLessons.length !== lessons.length ||
      plannerLast?.id !== lastId ||
      plannerReviewLessons.length !== reviewLessons.length
    ) {
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

  console.log(`Production curriculum: L001-${lastId}, latest new character(s): ${lastChars}.`);
}

for (const warning of warnings) console.warn(`Warning: ${warning}`);

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}

console.log("Curriculum state audit OK.");
