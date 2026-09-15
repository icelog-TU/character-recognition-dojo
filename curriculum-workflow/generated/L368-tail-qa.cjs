// Run from repository root. Removes only post-speech tail via AAC packet copy.
const fs=require('fs'),cp=require('child_process'),path=require('path');
const ff=require('@ffmpeg-installer/ffmpeg').path,probe=require('@ffprobe-installer/ffprobe').path;
const action=process.argv[2]; if(!['trim','metadata'].includes(action))throw Error('Use trim or metadata');
const report=[];
for(const u of ['L368']){
 const p=`curriculum-workflow/drafts/${u}-draft.json`,d=JSON.parse(fs.readFileSync(p));
 const records=[...d.sentences.map(s=>({id:s.id,a:s.audio})),...Object.entries(d.stage4AudioAlignment).map(([id,a])=>({id,a}))];
 for(const {id,a} of records){
  const file=path.join('public',a.src),pcm=cp.execFileSync(ff,['-v','error','-i',file,'-f','f32le','-ac','1','-ar','16000','-'],{maxBuffer:10000000});
  let acousticEnd=0;for(let i=0;i<pcm.length/4;i+=320){let sum=0;for(let j=i;j<Math.min(i+320,pcm.length/4);j++)sum+=pcm.readFloatLE(j*4)**2;if(10*Math.log10(sum/320+1e-12)>-45)acousticEnd=Math.round(i/16)+20;}
  const aiEnd=a.charTimings.at(-1).endMs,cutMs=Math.max(acousticEnd,aiEnd)+200;
  if(action==='trim'&&a.durationMs>cutMs+25){const temp=file+'.tail.m4a';cp.execFileSync(ff,['-v','error','-y','-i',file,'-t',String(cutMs/1000),'-c:a','copy','-movflags','+faststart',temp]);fs.copyFileSync(temp,file);fs.unlinkSync(temp);}
  const durationMs=Math.round(Number(cp.execFileSync(probe,['-v','error','-show_entries','format=duration','-of','default=noprint_wrappers=1:nokey=1',file],{encoding:'utf8'}))*1000);
  report.push({id,aiEndMs:aiEnd,acousticEndMs:acousticEnd,requestedCutMs:cutMs,durationMs,method:'20ms PCM RMS above -45 dB; retain 200ms decay margin; AAC stream copy, no onset/interior edits'});
  if(action==='metadata'){
   a.durationMs=durationMs;a.charTimings.at(-1).endMs=Math.max(aiEnd,acousticEnd);

  }
 }
 if(action==='metadata'){
  for(const g of d.sentenceGames){if(g.teachAudio)for(const part of ['prefix','suffix']){const a=d.stage4AudioAlignment[g.id+'-'+part];if(!a)continue;g.teachAudio[part+'Audio']={src:a.src,durationMs:a.durationMs,charTimings:a.charTimings};}
   if(g.type==='choose-pronunciation')for(const o of g.options){const a=o.correct?d.sentences.find(s=>s.id===g.sentenceId).audio:d.stage4AudioAlignment[g.id+'-'+o.id];o.audio={src:a.src,durationMs:a.durationMs,charTimings:a.charTimings};}}
  fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');
 }
}
fs.writeFileSync(`curriculum-workflow/generated/L368-tail-${action}.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
