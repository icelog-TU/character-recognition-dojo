import fs from 'node:fs';import path from 'node:path';
const dp='curriculum-workflow/drafts/L421-draft.json',rp='curriculum-workflow/lesson-requests/L421.json';
const d=JSON.parse(fs.readFileSync(dp,'utf8')),r=JSON.parse(fs.readFileSync(rp,'utf8'));
// Reviewed acoustic tail boundaries extend AI's final syllable to its actual quiet endpoint.
const corrections=[];
for(const [audio,newEnd,label] of [[d.sentences[2].audio,4158,'S03 玩'],[d.sentenceGames[4].options[1].audio,3982,'G05 wrong-one 玩']]){
 const t=audio.charTimings.at(-1);if(t.endMs<newEnd){corrections.push({label,oldEndMs:t.endMs,newEndMs:newEnd,basis:'Final voiced/acoustic tail ends at silencedetect -45dB boundary; preserve 200ms of terminal silence.'});t.endMs=newEnd;}
}
if(corrections.length)fs.writeFileSync('curriculum-workflow/generated/L421-timing-corrections.json',JSON.stringify(corrections,null,2)+'\n');
d.sentenceGames[4].options[0].audio=structuredClone(d.sentences[2].audio);
const status=process.argv[2]??d.packageStatus;d.packageStatus=status;r.packageStatus=status;
if(fs.existsSync('curriculum-workflow/generated/L421-production-qa.md'))d.productionQA=fs.readFileSync('curriculum-workflow/generated/L421-production-qa.md','utf8');
r.approvedSentences=structuredClone(d.sentences);r.sentenceGames=structuredClone(d.sentenceGames);r.productionQA=d.productionQA;
fs.writeFileSync(dp,JSON.stringify(d,null,2)+'\n');fs.writeFileSync(rp,JSON.stringify(r,null,2)+'\n');
fs.writeFileSync('curriculum-workflow/generated/L421-generation-packet.md',`# L421 室 - final production generation packet\n\npackageStatus: ${status}\n\nSource: ${d.sourceMainCommit}; formal L414. Locked vocabulary: 424 characters, excludes 解 and 班.\n\nRelease dependencies: L416-L420 vocabulary; contiguous order through L420 including L415; R051/R052 after L420, coverage L391-L420. Shared production JSON/planner/ledger integration belongs to Release.\n\n## Final approved request, sentences, image prompts and Stage 4\n\n\`\`\`json\n${JSON.stringify(r,null,2)}\n\`\`\`\n\n## Production QA\n\n${d.productionQA??'Production in progress.'}\n`);
const han=t=>[...t.matchAll(/\p{Script=Han}/gu)].map(m=>m[0]);const errors=[];
const expected=['老師教我們合作整理教室。','媽媽教我怎麼打結。','不如把書合上，到室外玩。','我想去畫室，結果走錯了。','爸爸把車停在地下室。'];
const coverage={};for(const c of ['室','教','合','結','如','果'])coverage[c]=d.sentences.reduce((n,s)=>n+han(s.text).filter(x=>x===c).length,0);
for(let i=0;i<5;i++){const s=d.sentences[i];if(s.text!==expected[i]||s.spokenText!==han(s.text).join('')||s.displayLines.join('')!==s.text||s.displayLines.some(l=>[...l].length>6))errors.push(s.id+' text/lines');}
for(const s of [...d.sentences,...d.sentenceGames.flatMap(g=>g.options??[])])for(const c of han(s.text))if(!d.allowedChars.includes(c))errors.push('Unlearned '+c);
for(const g of d.sentenceGames){const h=han(d.sentences.find(s=>s.id===g.sentenceId).text);if(h[g.targetCharIndex]!==g.targetChar)errors.push(g.id+' target');if(g.type==='partial-order')for(const o of g.options)if(h[g.missingIndexes[o.correctOrder]]!==o.text||han(o.text).length!==1)errors.push(g.id+' order');}
const tracks=[...d.sentences.map(s=>({text:s.text,...s.audio})),{text:d.sentenceGames[1].teachAudio.prefixText,...d.sentenceGames[1].teachAudio.prefixAudio},...d.sentenceGames[4].options.filter(o=>!o.correct).map(o=>({text:o.text,...o.audio}))];
for(const t of tracks){if(han(t.text).length!==t.charTimings.length)errors.push(t.src+' count');let prev=0;for(const c of t.charTimings){if(c.startMs<prev||c.endMs-c.startMs<80||c.endMs-c.startMs>900||c.endMs>t.durationMs)errors.push(t.src+' span');prev=c.endMs;}if(t.durationMs-prev>300)errors.push(t.src+' tail '+(t.durationMs-prev));if(!fs.existsSync(path.join('public',t.src)))errors.push(t.src+' missing');}
if(d.allowedChars.length!==424||JSON.stringify(Object.values(coverage))!==JSON.stringify([4,3,2,2,1,1]))errors.push('coverage');
const result={status:errors.length?'FAIL':'PASS',coverage,allowedChars:d.allowedChars.length,tracks:tracks.length,errors};
fs.writeFileSync('curriculum-workflow/generated/L421-package-audit.json',JSON.stringify(result,null,2)+'\n');console.log(result);if(errors.length)process.exitCode=1;
