import fs from "node:fs";
import { execFileSync, spawnSync } from "node:child_process";

const curriculumPath = "src/curriculum/sample-lessons.json";
const original = fs.readFileSync(curriculumPath);
const curriculum = JSON.parse(original.toString("utf8"));
const draft = JSON.parse(fs.readFileSync("curriculum-workflow/drafts/L440-draft.json", "utf8"));
if (curriculum.lessons.some((lesson) => lesson.id === "L440")) throw new Error("L440 already exists in production JSON; use Release validation instead");

if (!curriculum.lessons.some((lesson) => lesson.id === "L439")) {
  const l439 = JSON.parse(execFileSync("git", ["show", "origin/codex/l439-complete-package:curriculum-workflow/drafts/L439-draft.json"], { encoding: "utf8", maxBuffer: 20_000_000 }));
  curriculum.lessons.push(l439);
}
curriculum.lessons.push(draft);

let result;
try {
  fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`);
  result = spawnSync(process.execPath, ["scripts/validate-curriculum.mjs"], { encoding: "utf8" });
} finally {
  fs.writeFileSync(curriculumPath, original);
}

const report = {
  unit: "L440",
  fixture: "current package base plus origin/codex/l439-complete-package draft when L439 was absent, plus L440 rescue draft",
  exitCode: result.status,
  stdout: result.stdout,
  stderr: result.stderr,
};
fs.writeFileSync("curriculum-workflow/generated/L440-curriculum-check.json", `${JSON.stringify(report, null, 2)}\n`);
process.stdout.write(result.stdout);
process.stderr.write(result.stderr);
if (result.status !== 0) process.exitCode = result.status ?? 1;
