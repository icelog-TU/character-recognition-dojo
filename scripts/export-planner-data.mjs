import fs from "node:fs";
import path from "node:path";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const bankPath = path.resolve("curriculum-workflow/next-character-bank.json");
const outputPath = path.resolve("public/tools/planner-data.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

const curriculum = readJson(curriculumPath);
const nextCharacterBank = readJson(bankPath);

const data = {
  exportedAt: new Date().toISOString(),
  curriculumVersion: curriculum.version,
  lessons: curriculum.lessons,
  nextCharacterBank,
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(`Wrote ${outputPath}`);
