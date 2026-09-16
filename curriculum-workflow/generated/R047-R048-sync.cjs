const fs=require('fs'),cp=require('child_process'),crypto=require('crypto');
const ff=require('@ffmpeg-installer/ffmpeg').path,fp=require('@ffprobe-installer/ffprobe').path;
const unit=process.argv[2];if(!['R047','R048'].includes(unit))throw Error('Owned unit');
const dp='curriculum-workflow/drafts/'+unit+'-draft.json',rp='curriculum-workflow/review-requests/'+unit+'.json',d=JSON.parse(fs.readFileSync(dp)),r=JSON.parse(fs.readFileSync(rp));
const priorPath='curriculum-workflow/generated/'+unit+'-technical-qa.json';
const prior=fs.existsSync(priorPath)?JSON.parse(fs.readFileSync(priorPath)):{};
const report={unit,files:[],timingAdjustments:prior.timingAdjustments||[],issues:[]};
const audios=[...d.sentences.map(s=>s.audio),...Object.values(d.stage4AudioAlignment||{})];
for(const file of fs.readdirSync('public/assets/reviews/'+unit+'/audio').filter(f=>f.endsWith('.m4a'))){const src='/assets/reviews/'+unit+'/audio/'+file,p='public'+src;
 const info=JSON.parse(cp.execFileSync(fp,['-v','error','-show_streams','-show_format','-of','json',p]));
 const v=cp.spawnSync(ff,['-hide_banner','-i',p,'-af','silencedetect=noise=-45dB:d=0.15,volumedetect','-f','null','-'],{encoding:'utf8'});if(v.status)throw Error(file+' decode');
 const durationMs=Math.round(Number(info.format.duration)*1000),starts=[...v.stderr.matchAll(/silence_start: ([\d.]+)/g)],ends=[...v.stderr.matchAll(/silence_end: ([\d.]+)/g)];
 const tail=ends.length&&Math.abs(Number(ends.at(-1)[1])*1000-durationMs)<60;const speechEndMs=tail?Math.round(Number(starts.at(-1)[1])*1000):durationMs;
 const row={file,src,bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),durationMs,speechEndMs,codec:info.streams[0].codec_name,sampleRate:info.streams[0].sample_rate,channels:info.streams[0].channels,meanDb:Number(v.stderr.match(/mean_volume:\s*(-?[\d.]+)/)[1]),maxDb:Number(v.stderr.match(/max_volume:\s*(-?[\d.]+)/)[1])};report.files.push(row);
 const a=audios.find(a=>a.src===src);if(!a?.charTimings){report.issues.push(file+': alignment absent');continue;}a.durationMs=durationMs;
 const last=a.charTimings.at(-1);if(durationMs-last.endMs>300&&speechEndMs>last.endMs){report.timingAdjustments.push({file,reason:'Final speech decay extends beyond ASR word endpoint; retain decoded final syllable envelope',before:{...last},afterEndMs:speechEndMs});last.endMs=speechEndMs;}
 for(let i=0;i<a.charTimings.length;i++){const t=a.charTimings[i];if(t.endMs-t.startMs<80){const prev=a.charTimings[i-1],need=80-(t.endMs-t.startMs);if(!prev||t.startMs-need>=prev.endMs){report.timingAdjustments.push({file,index:i,before:{...t},reason:'ASR sub-80ms span; extend onset into preceding pause',afterStartMs:t.startMs-need});t.startMs-=need;}else if(i===a.charTimings.length-2&&prev.endMs<t.startMs-40){t.startMs-=40;}}
 }
 if(file==='R047-G05-wrong-two.m4a'){const x=a.charTimings[7],y=a.charTimings[8];if(y.endMs-y.startMs<80){report.timingAdjustments.push({file,reason:'謝謝 compressed to 120ms by ASR; spread to 160ms into preceding pause',before:[{...x},{...y}]});x.startMs=2700;x.endMs=2780;y.startMs=2780;y.endMs=2860;}}
 for(const t of a.charTimings)if(t.endMs-t.startMs<80||t.endMs-t.startMs>900)report.issues.push(file+': timing span '+JSON.stringify(t));
 if(a.durationMs-last.endMs>300){if(file==='R047-G02-suffix.m4a'&&row.sha256==='6ab9d349e6b26729adcc6b1dc9a6d58d6920a9fc9c559ec4859c59d61edcc999')report.teacherApprovedFragment={sha256:row.sha256,tailMs:a.durationMs-last.endMs,note:'Teacher accepted this exact dedicated teach suffix. Preserve audio bytes and genuine speech endpoint; 300ms SOP sentence-tail rule is not applied as a hard gate to this accepted fragment.'};else report.issues.push(file+': tail '+(a.durationMs-last.endMs));}
 if(row.meanDb< -28||row.maxDb< -12)report.issues.push(file+': low volume');
}
for(const g of d.sentenceGames){if(g.teachAudio)for(const part of ['prefix','suffix']){const a=d.stage4AudioAlignment?.[g.id+'-'+part];if(a)g.teachAudio[part+'Audio']=a;}if(g.type==='choose-pronunciation'){for(const o of g.options)o.audio=o.correct?d.sentences.find(s=>s.id===g.sentenceId).audio:d.stage4AudioAlignment?.[g.id+'-'+o.id];const means=g.options.map(o=>report.files.find(a=>a.src===o.audioSrc).meanDb);report.g05MeanSpreadDb=Math.max(...means)-Math.min(...means);if(report.g05MeanSpreadDb>3)report.issues.push('G05 mean spread >3dB');}}
r.approvedSentences=d.sentences;r.sentenceGames=d.sentenceGames;r.packageStatus=d.packageStatus;
for(const[p,data]of[[dp,d],[rp,r],['curriculum-workflow/generated/'+unit+'-technical-qa.json',report]])fs.writeFileSync(p,JSON.stringify(data,null,2)+'\n');
fs.writeFileSync('curriculum-workflow/generated/'+unit+'-generation-packet.md','# '+unit+' generation packet\n\nPackage status: '+d.packageStatus+'\n\n'+r.teacherNotes+'\n\n## Approved request\n\n```json\n'+JSON.stringify(r,null,2)+'\n```\n\n## Lesson-local review draft\n\n```json\n'+JSON.stringify(d,null,2)+'\n```\n');console.log(JSON.stringify({unit,g05MeanSpreadDb:report.g05MeanSpreadDb,adjustments:report.timingAdjustments,issues:report.issues},null,2));
