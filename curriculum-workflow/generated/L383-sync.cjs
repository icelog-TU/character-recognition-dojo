// Synchronize only the owned L383 package after media/QA changes.
const fs=require('fs'),cp=require('child_process'),assert=require('assert');
const dp='curriculum-workflow/drafts/L383-draft.json',rp='curriculum-workflow/lesson-requests/L383.json';
const d=JSON.parse(fs.readFileSync(dp,'utf8')),r=JSON.parse(fs.readFileSync(rp,'utf8'));
for(const g of d.sentenceGames){if(g.teachAudio){const a=d.stage4AudioAlignment[g.id+'-prefix'];g.teachAudio.prefixAudio=a;assert(!g.teachAudio.suffixSrc);}if(g.type==='choose-pronunciation')for(const o of g.options)o.audio=o.correct?d.sentences.find(s=>s.id===g.sentenceId).audio:d.stage4AudioAlignment[g.id+'-'+o.id];}
r.sentenceGames=d.sentenceGames;
if(process.argv[2]){d.packageStatus=process.argv[2];r.packageStatus=process.argv[2];}
const ff=require('@ffmpeg-installer/ffmpeg').path,fp=require('@ffprobe-installer/ffprobe').path;
const report=JSON.parse(fs.readFileSync('curriculum-workflow/generated/L383-duration-report.json','utf8'));
for(const a of report){const p='public'+a.src;const duration=Math.round(Number(cp.execFileSync(fp,['-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',p],{encoding:'utf8'}))*1000);a.processingDurationMs??=a.durationMs;a.durationMs=duration;const v=cp.spawnSync(ff,['-hide_banner','-i',p,'-af','volumedetect','-f','null','-'],{encoding:'utf8'});assert.equal(v.status,0);a.finalVolume={max:Number(v.stderr.match(/max_volume:\s*(-?[\d.]+)/)[1]),mean:Number(v.stderr.match(/mean_volume:\s*(-?[\d.]+)/)[1])};assert(a.finalVolume.max>=-12&&a.finalVolume.mean>=-28);}
const audioObjects=[...d.sentences.map(s=>({id:s.id,...s.audio})),...Object.entries(d.stage4AudioAlignment).map(([id,a])=>({id,...a}))];
for(const a of audioObjects){assert(a.durationMs-a.charTimings.at(-1).endMs<=300,a.id+' trailing gap');a.charTimings.forEach(t=>assert(t.endMs-t.startMs>=80&&t.endMs-t.startMs<=900,a.id+' individual span'));}
const means=report.filter(a=>/S05|G05/.test(a.src)).map(a=>a.finalVolume.mean);assert(Math.max(...means)-Math.min(...means)<=3);
for(const [p,data] of [[dp,d],[rp,r],['curriculum-workflow/generated/L383-duration-report.json',report]])fs.writeFileSync(p,JSON.stringify(data,null,2)+'\n');
fs.writeFileSync('curriculum-workflow/generated/L383-generation-packet.md','# L383 generation packet\n\nPackage status: '+d.packageStatus+'\n\n'+r.teacherNotes+'\n\nQA evidence: L383-package-notes.md; mechanical and format reports accompany this packet.\n\n## Approved request\n\n```json\n'+JSON.stringify(r,null,2)+'\n```\n\n## Final lesson-local draft\n\n```json\n'+JSON.stringify(d,null,2)+'\n```\n');
console.log({packageStatus:d.packageStatus,timingSpans:'80-900 ms PASS',trailingGap:'<=300 ms PASS',g05MeanSpreadDb:Math.max(...means)-Math.min(...means)});
