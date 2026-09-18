// Run unchanged repository validators against the owned L457 draft in memory.
const fs=require("fs"),path=require("path"),url=require("url");
const action=process.argv[2],draft=JSON.parse(fs.readFileSync("curriculum-workflow/drafts/L457-draft.json","utf8"));
const curriculumPath=path.resolve("src/curriculum/sample-lessons.json"),originalRead=fs.readFileSync;
fs.readFileSync=function(file,...args){if(path.resolve(String(file))===curriculumPath)return JSON.stringify({version:1,lessons:[draft],reviewLessons:[]});return originalRead.call(this,file,...args);};
process.argv=["node","script"];
const scripts={production:"validate-production-assets.mjs",formats:"audit-asset-formats.mjs"};
if(action==="formats")process.argv.push("--strict");
if(!scripts[action])throw new Error("Use production or formats");
import(url.pathToFileURL(path.resolve("scripts",scripts[action])).href);
