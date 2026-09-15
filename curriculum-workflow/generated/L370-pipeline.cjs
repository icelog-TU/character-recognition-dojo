// Scope unchanged repository scripts to the owned draft without changing release state.
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const read = fs.readFileSync;
const write = fs.writeFileSync;
const action = process.argv[2];
const fragment = process.argv[3];
const draftPath = "curriculum-workflow/drafts/L370-draft.json";
const draft = JSON.parse(read(draftPath, "utf8"));
const sharedPath = path.resolve("src/curriculum/sample-lessons.json");
const han = text => [...text].filter(c => /\p{Script=Han}/u.test(c)).join("");
// Normalize only equivalent simplified transcription glyphs; retain raw evidence.
const originalFetch = globalThis.fetch;
globalThis.fetch = async (...args) => {
  if (action === "generate" && fragment === "L370-G02-prefix" && String(args[0]).includes("/audio/speech")) {
    const body = JSON.parse(args[1].body);
    body.instructions += " The input is the single character 朋, Taiwan zhuyin ㄆㄥˊ (peng, second/rising tone), as in 朋友. Say only 朋 once, no 友, no explanation. Keep the eng vowel, not ang; do not say 旁 (pang).";
    args[1] = {...args[1], body:JSON.stringify(body)};
  }
  const response = await originalFetch(...args);
  if (!String(args[0]).includes("/audio/transcriptions") || !response.ok) return response;
  const raw = await response.json();
  const filename = args[1].body.get("file").name;
  fs.mkdirSync("tmp/L370/transcripts", {recursive:true});
  write("tmp/L370/transcripts/"+filename+".json", JSON.stringify(raw,null,2)+"\n");
  const equivalents = {"亲":"親","图":"圖","这":"這","条":"條","边":"邊","说":"說","话":"話","师":"師","给":"給","会":"會","来":"來","谢":"謝","顾":"顧","鸡":"雞","气":"氣","个":"個","坏":"壞","过":"過","们":"們","还":"還"};
  const normalize = value => typeof value === "string" ? [...value].map(c => equivalents[c] ?? c).join("") : Array.isArray(value) ? value.map(normalize) : value && typeof value === "object" ? Object.fromEntries(Object.entries(value).map(([key,item]) => [key,normalize(item)])) : value;
  return new Response(JSON.stringify(normalize(raw)), {status:response.status,headers:{"content-type":"application/json"}});
};
if (action === "generate" && fragment) {
  if (fragment.startsWith("char-")) {
    draft.sentences = [];
    draft.sentenceGames = [];
  } else {
    draft.newChars = [];
    if (/-S\d\d$/.test(fragment)) {
      draft.sentences = draft.sentences.filter(s => s.id === fragment);
    } else {
      const game = draft.sentenceGames.find(g => fragment.startsWith(g.id));
      const text = game.teachAudio?.prefixText || game.options.find(o => fragment.endsWith(o.id)).spokenText;
      draft.sentences = [{ id: fragment, spokenText: han(text), approved: true }];
    }
    draft.sentenceGames = [];
  }
}
if (action === "align") {
  for (const game of draft.sentenceGames) {
    for (const part of ["prefix","suffix"]) {
      if (game.teachAudio?.[part+"Src"]) draft.sentences.push({id:game.id+"-"+part,text:game.teachAudio[part+"Text"],spokenText:game.teachAudio[part+"Text"],approved:true,audio:{src:game.teachAudio[part+"Src"]}});
    }
    if (game.type === "choose-pronunciation") {
      for (const option of game.options.filter(o => !o.correct)) {
        draft.sentences.push({id:game.id+"-"+option.id,text:option.text,spokenText:option.spokenText,approved:true,audio:{src:option.audioSrc}});
      }
    }
  }
}
fs.readFileSync = function(file, ...args) {
  return path.resolve(String(file)) === sharedPath ? JSON.stringify({lessons:[draft],reviewLessons:[]}) : read.call(this, file, ...args);
};
fs.writeFileSync = function(file, data, ...args) {
  if (path.resolve(String(file)) === sharedPath) {
    const result = JSON.parse(data).lessons[0];
    if (action === "align") {
      result.stage4AudioAlignment = Object.fromEntries(result.sentences.filter(s => !/-S\d\d$/.test(s.id)).map(s => [s.id,{spokenText:s.spokenText,...s.audio}]));
      result.sentences = result.sentences.filter(s => /-S\d\d$/.test(s.id));
    }
    return write.call(this, draftPath, JSON.stringify(result,null,2)+"\n", "utf8");
  }
  if (path.resolve(String(file)) === path.resolve("curriculum-workflow/audio-duration-report.json")) {
    return write.call(this,"curriculum-workflow/generated/L370-duration-report.json",data,...args);
  }
  return write.call(this, file, data, ...args);
};
const scripts = {generate:"generate-audio-drafts",process:"process-audio-assets",align:"align-audio-timings-ai",images:"optimize-images",production:"validate-production-assets",formats:"audit-asset-formats"};
if (!scripts[action]) throw Error("Unknown pipeline action: "+action);
process.argv = ["node","script","--lesson","L370"];
if (action === "images") process.argv.push("--remove-original");
if (action === "formats") process.argv.push("--strict");
import(pathToFileURL(path.resolve("scripts/"+scripts[action]+".mjs")).href);
