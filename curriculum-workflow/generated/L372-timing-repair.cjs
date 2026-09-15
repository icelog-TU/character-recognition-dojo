// Local repair of two collapsed AI timestamps; not a replacement for AI alignment.
const fs=require('fs'),assert=require('assert/strict');
const p='curriculum-workflow/drafts/L372-draft.json',d=JSON.parse(fs.readFileSync(p));
const records=[{id:'L372-S05',a:d.sentences[4].audio,onset:1660,split:1980,end:2300},{id:'L372-G05-wrong-two',a:d.stage4AudioAlignment['L372-G05-wrong-two'],onset:2300,split:2640,end:2940}];
const report=[];
for(const x of records){const before=x.a.charTimings.slice(4,6).map(t=>({...t}));assert.equal(before[0].endMs-before[0].startMs,40);assert.equal(before[1].endMs,x.end);assert(x.onset>=x.a.charTimings[3].endMs);x.a.charTimings[4]={charIndex:4,startMs:x.onset,endMs:x.split};x.a.charTimings[5]={charIndex:5,startMs:x.split,endMs:x.end};report.push({id:x.id,text:'媽媽',before,after:x.a.charTimings.slice(4,6),evidence:'20/40ms PCM RMS inspection: inter-phrase silence below -50dB ends around 1660ms (S05) / 2300ms (wrong-two); first/second vowel energy transition around 1980ms / 2640ms. Retain next AI boundary and all other AI timings. No audio modification. Manual waveform-based correction; live playback synchrony remains a separate QA item.'});}
fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');fs.writeFileSync('curriculum-workflow/generated/L372-timing-repair.json',JSON.stringify(report,null,2)+'\n');console.log(report);
