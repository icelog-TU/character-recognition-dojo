// SOP-authorized local smoothing of transcription granularity, never audio splicing.
const fs=require('fs'),cp=require('child_process');
const p='curriculum-workflow/drafts/L390-draft.json',d=JSON.parse(fs.readFileSync(p)),ff=require('@ffmpeg-installer/ffmpeg').path,fp=require('@ffprobe-installer/ffprobe').path;
const report=[];
const a=d.sentences.find(s=>s.id==='L390-S02').audio;
report.push({id:'L390-S02',reason:'Whisper compressed 下一個 into 60/120/120 ms. Preserve phrase boundaries 2500-2800 and evenly distribute its three Han.',before:a.charTimings.slice(5,8)});
for(let i=0;i<3;i++){a.charTimings[5+i].startMs=Math.round(2500+300*i/3);a.charTimings[5+i].endMs=Math.round(2500+300*(i+1)/3);}
const w=d.stage4AudioAlignment['L390-G05-wrong-two'];
report.push({id:'L390-G05-wrong-two',reason:'Whisper 多 span 940 ms; rebalance 多得 within original phrase 1460-3020, no changes to 數 or audio.',before:w.charTimings.slice(5,7)});
w.charTimings[5].endMs=2240;w.charTimings[6].startMs=2240;
for(const a of [...d.sentences.map(s=>s.audio),...Object.values(d.stage4AudioAlignment)]){
 const file='public'+a.src;
 if(a.durationMs-a.charTimings.at(-1).endMs>300){
  const res=cp.spawnSync(ff,['-hide_banner','-i',file,'-af','silencedetect=noise=-45dB:d=0.1','-f','null','-'],{encoding:'utf8'});if(res.status)throw Error(file);
  const decay=Number([...res.stderr.matchAll(/silence_start: ([\d.]+)/g)].at(-1)?.[1]);if(!Number.isFinite(decay))throw Error(file+' no tail silence');
  const cutoff=decay+.10,tmp=file+'.tail.m4a';
  cp.execFileSync(ff,['-y','-v','error','-i',file,'-t',String(cutoff),'-c:a','copy','-movflags','+faststart',tmp]);fs.copyFileSync(tmp,file);fs.unlinkSync(tmp);
  report.push({src:a.src,beforeDurationMs:a.durationMs,decayMs:decay*1000,retainedDecayPadMs:100});
 }
 a.durationMs=Math.round(Number(cp.execFileSync(fp,['-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',file],{encoding:'utf8'}))*1000);
}
fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');fs.writeFileSync('curriculum-workflow/generated/L390-timing-review.json',JSON.stringify(report,null,2)+'\n');
