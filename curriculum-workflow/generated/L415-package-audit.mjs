import fs from "node:fs";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
const read = p => JSON.parse(fs.readFileSync(p, "utf8"));
const request = read("curriculum-workflow/lesson-requests/L415.json");
const draft = read("curriculum-workflow/drafts/L415-draft.json");
const packet = fs.readFileSync("curriculum-workflow/generated/L415-generation-packet.md","utf8").replace(/\r\n/g,"\n");
const packetSentences = JSON.parse(packet.split("```json\n")[1].split("\n```")[0]);
const formal = JSON.parse(execFileSync("git",["show",request.sourceMainCommit+":src/curriculum/sample-lessons.json"],{encoding:"utf8",maxBuffer:64000000}));
const allowed = new Set([...formal.lessons.flatMap(l=>l.newChars),...request.provisionalLearnedChars,...draft.newChars]);
const han = text => [...text].filter(c=>/\p{Script=Han}/u.test(c));
const checked = text => han(text).forEach(c=>assert(allowed.has(c),c));
const timing = (audio,text) => {
  assert(fs.existsSync("public"+audio.src),audio.src);
  assert(audio.durationMs>0);
  assert.equal(audio.charTimings.length,han(text).length);
  audio.charTimings.forEach((t,i,all)=>{
    assert.equal(t.charIndex,i);assert(t.startMs>=0 && t.endMs<=audio.durationMs);
    assert(t.endMs-t.startMs>=80 && t.endMs-t.startMs<=900);
    if(i)assert(t.startMs>=all[i-1].endMs);
  });
  assert(audio.durationMs-audio.charTimings.at(-1).endMs<=300);
};
assert.equal(allowed.size,418);
assert.equal(draft.sentences.length,5);
assert.deepEqual(request.dependsOnLessons,draft.dependsOnLessons);
assert.deepEqual(request.provisionalLearnedChars,draft.provisionalLearnedChars);
for(const [i,s] of draft.sentences.entries()){
  const approved=request.approvedSentences[i];
  assert.equal(typeof s.imagePrompt,"string");assert(s.imagePrompt.trim().length>0);
  for(const key of ["text","spokenText","focusChar","displayLines","imageNotes","imagePrompt"]){
    assert.deepEqual(s[key],approved[key]);assert.deepEqual(s[key],packetSentences[i][key]);
  }
  assert.equal(s.spokenText,han(s.text).join(""));
  assert.equal(s.displayLines.join(""),s.text);
  assert(s.displayLines.every(l=>[...l].length<=6));
  assert(han(s.text).length<=12);checked(s.text);checked(s.focusChar);
  assert(s.imageSrc.endsWith(".webp"));assert(fs.existsSync("public"+s.imageSrc));
  timing(s.audio,s.spokenText);
}
const targets={解:3,決:2,功:2,成:2,定:1,試:1};
const corpus=draft.sentences.map(s=>s.spokenText).join("");
const coverage=Object.fromEntries(Object.keys(targets).map(c=>[c,[...corpus].filter(x=>x===c).length]));
for(const [c,min] of Object.entries(targets))assert(coverage[c]>=min);
assert.deepEqual(draft.sentenceGames.map(g=>g.type),["find-character","teach-character","missing-character","partial-order","choose-pronunciation"]);
assert.equal(new Set(draft.sentenceGames.map(g=>g.sentenceId)).size,5);
for(const g of draft.sentenceGames){
  const s=draft.sentences.find(s=>s.id===g.sentenceId), chars=han(s.text);
  assert.equal(chars[g.targetCharIndex],g.targetChar);assert.equal(han(g.targetChar).length,1);
  for(const o of g.options??[]) {checked(o.text);assert(o.id);}
  if(g.type==="missing-character"){assert.equal(g.options.length,3);assert.equal(new Set(g.options.map(o=>o.text)).size,3);assert.equal(g.options.filter(o=>o.correct).length,1);assert.deepEqual(g.missingIndexes,[g.targetCharIndex]);}
  if(g.type==="partial-order" || g.type==="missing-character")assert(g.options.every(o=>han(o.text).length===1));
  if(g.type==="partial-order")assert.deepEqual([...g.options].sort((a,b)=>a.correctOrder-b.correctOrder).map(o=>o.text),g.missingIndexes.map(i=>chars[i]));
  if(g.type==="teach-character"){
    const t=g.teachAudio;assert.equal(t.prefixText,chars.slice(0,g.targetCharIndex).join(""));assert.equal(t.suffixText,chars.slice(g.targetCharIndex+1).join(""));
    timing(t.prefixAudio,t.prefixText);timing(t.suffixAudio,t.suffixText);
  }
  if(g.type==="choose-pronunciation")for(const o of g.options){timing(o.audio,o.text);assert.equal(o.audioSrc,o.audio.src);assert.equal(han(o.text).length,chars.length);}
}
assert(fs.existsSync("public"+draft.charAudio["解"]));
console.log(JSON.stringify({unit:"L415",result:"PASS",allowed:allowed.size,coverage,checks:["approved records","display lines","paths","timing spans and tails","fixed game order","single-Han options","three-choice G03","G02 exact fragments","G05 full texts"]},null,2));
