const fs=require('node:fs');
const dp='curriculum-workflow/drafts/L394-draft.json',d=JSON.parse(fs.readFileSync(dp));
const evidence=JSON.parse(fs.readFileSync('curriculum-workflow/generated/L394-rescue-audio-evidence.json'));
const reviews=[];
function edit(a,index,change,reason){const t=a.charTimings[index];reviews.push({id:a.id,index,before:{...t},after:{...t,...change},reason});Object.assign(t,change);}
const s2=d.sentences.find(s=>s.id==='L394-S02').audio;s2.id='L394-S02';
edit(s2,3,{endMs:1400},'Local approximate boundary review of 一頁 within the existing 1160–1566 ms phrase; final voiced decay at 1566 ms. Not a new Whisper timestamp or human synchronization verdict.');
edit(s2,4,{startMs:1400,endMs:1566},'The 60 ms 頁 estimate was too short. Approximate adjacent 一頁 division preserves phrase extent and the measured silence onset.');
edit(s2,5,{startMs:2016},'Exclude FFmpeg measured 1566–2016 ms pause before 有; original 920 ms span included this silence.');delete s2.id;
for(const id of ['L394-G05-wrong-one']){const a=d.stage4AudioAlignment[id];a.id=id;edit(a,3,{startMs:id.endsWith('one')?1502:1853},'Exclude the measured phrase pause before 池/河; preserve original syllable end.');delete a.id;}
const records=[...d.sentences.map(s=>({id:s.id,a:s.audio})),...Object.entries(d.stage4AudioAlignment).map(([id,a])=>({id,a}))];
for(const {id,a} of records){a.id=id;a.durationMs=evidence[id].after.durationMs;const last=a.charTimings.at(-1),end=evidence[id].after.speechEndMs;if(last.endMs!==end)edit(a,last.charIndex,{endMs:end},'Final syllable end reviewed against measured -40 dB final speech decay; file duration comes from FFprobe. This avoids padding highlights into silence or beyond EOF.');delete a.id;}
for(const g of d.sentenceGames){if(g.teachAudio)for(const p of ['prefix','suffix'])if(g.teachAudio[p+'Src'])g.teachAudio[p+'Audio']=d.stage4AudioAlignment[g.id+'-'+p];if(g.type==='choose-pronunciation')for(const o of g.options)o.audio=o.correct?d.sentences.find(s=>s.id===g.sentenceId).audio:d.stage4AudioAlignment[g.id+'-'+o.id];}
fs.writeFileSync(dp,JSON.stringify(d,null,2)+'\n');fs.writeFileSync('curriculum-workflow/generated/L394-rescue-timing-review.json',JSON.stringify(reviews,null,2)+'\n');
