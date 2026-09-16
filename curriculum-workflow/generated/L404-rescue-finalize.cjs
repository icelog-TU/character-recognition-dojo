const fs=require('fs');
const p='curriculum-workflow/drafts/L404-draft.json',d=JSON.parse(fs.readFileSync(p)),e=JSON.parse(fs.readFileSync('curriculum-workflow/generated/L404-rescue-audio-evidence.json')),reviews=[];
const records=[...d.sentences.map(s=>({id:s.id,a:s.audio})),...Object.entries(d.stage4AudioAlignment).map(([id,a])=>({id,a}))];
function edit(id,index,change,reason){const a=records.find(r=>r.id===id).a,t=a.charTimings[index];reviews.push({id,index,before:{...t},after:{...t,...change},reason});Object.assign(t,change);}
edit('L404-S02',2,{startMs:972},'Whisper 60 ms 找 starts late after a phrase pause. Local waveform review: silence ends at 972 ms; use this onset and retain original 1260 ms end. Not a new Whisper timestamp.');
edit('L404-S03',4,{startMs:1776},'Whisper 60 ms 游 starts late after the 1456–1776 ms phrase pause. Use measured resumed speech onset, retain original 2160 ms end.');
edit('L404-S04',3,{startMs:1546},'我 follows the 1105–1546 ms pause; local onset review retains the original 1860 ms end.');
edit('L404-G02-prefix',2,{startMs:1091},'Exclude 739–1091 ms phrase silence before 找, preserving its original 1420 ms end.');
for(const {id,a} of records){a.durationMs=e[id].after.durationMs;edit(id,a.charTimings.length-1,{endMs:e[id].after.speechEndMs},'Local final-syllable end review against -40 dB final speech decay; positive duration measured by FFprobe.');}
for(const g of d.sentenceGames){for(const part of ['prefix','suffix'])if(g.teachAudio?.[part+'Src'])g.teachAudio[part+'Audio']=d.stage4AudioAlignment[g.id+'-'+part];if(g.type==='choose-pronunciation')for(const o of g.options)o.audio=o.correct?d.sentences.find(s=>s.id===g.sentenceId).audio:d.stage4AudioAlignment[g.id+'-'+o.id];}
fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');fs.writeFileSync('curriculum-workflow/generated/L404-rescue-timing-review.json',JSON.stringify(reviews,null,2)+'\n');
