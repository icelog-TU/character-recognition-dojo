// Validate the ordered package sequence without writing Release-owned curriculum.
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync.bind(fs);
const target = path.resolve('src/curriculum/sample-lessons.json');
const curriculum = JSON.parse(read(target, 'utf8'));
for (let n = 376; n <= 380; n++) {
  curriculum.lessons.push(JSON.parse(read(`curriculum-workflow/drafts/L${n}-draft.json`, 'utf8')));
}
fs.readFileSync = function (file, ...args) {
  if (typeof file === 'string' && path.resolve(file) === target) return JSON.stringify(curriculum);
  return read(file, ...args);
};
console.log('Provisional ordered L376-L380 validation; R045/R046 remain a Release prerequisite.');
import(pathToFileURL(path.resolve('scripts/validate-curriculum.mjs')).href);
