// Run the official curriculum validator on main plus the owned review pair in memory.
const fs=require('node:fs'),path=require('node:path');
const read=fs.readFileSync.bind(fs),target=path.resolve('src/curriculum/sample-lessons.json');
const curriculum=JSON.parse(read(target,'utf8'));
for(const u of ['R045','R046'])curriculum.reviewLessons.push(JSON.parse(read(`curriculum-workflow/drafts/${u}-draft.json`,'utf8')));
fs.readFileSync=function(file,...args){return path.resolve(String(file))===target?JSON.stringify(curriculum):read(file,...args);};
import(require('node:url').pathToFileURL(path.resolve('scripts/validate-curriculum.mjs')).href);
