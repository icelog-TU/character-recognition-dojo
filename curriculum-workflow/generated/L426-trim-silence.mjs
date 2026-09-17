import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {execFileSync,spawnSync} from 'node:child_process';
const require=createRequire(import.meta.url),ff=require('@ffmpeg-installer/ffmpeg').path,probe=require('@ffprobe-installer/ffprobe').path;
const root=path.resolve('public/assets/lessons/L426/audio');
const report=[];
for(const name of fs.readdirSync(root).filter(n=>n.endsWith('.m4a')&&!n.startsWith('char-'))){
 const file=path.join(root,name);
 const duration=Number(execFileSync(probe,['-v','error','-show_entries','format=duration','-of','csv=p=0',file],{encoding:'utf8'}).trim());
 const threshold=-45;
 const out=spawnSync(ff,['-hide_banner','-i',file,'-af',`silencedetect=noise=${threshold}dB:d=0.15`,'-f','null','-'],{encoding:'utf8'}).stderr;
 const starts=[...out.matchAll(/silence_start: ([\d.]+)/g)].map(m=>Number(m[1]));
 const ends=[...out.matchAll(/silence_end: ([\d.]+)/g)].map(m=>Number(m[1]));
 const start=starts.at(-1),end=ends.at(-1);
 let keep=duration;
 if(start!==undefined&&end>=duration-.06&&duration-start>.35){
  keep=start+.20;
  const tmp=path.join(root,name+'.tail.m4a');
  execFileSync(ff,['-y','-i',file,'-t',String(keep),'-c:a','aac','-b:a','96k','-ac','1','-ar','44100','-movflags','+faststart',tmp],{stdio:'ignore'});
  fs.copyFileSync(tmp,file);fs.unlinkSync(tmp);
 }
 report.push({name,beforeSeconds:duration,silenceStart:start,keptSeconds:keep,bufferSeconds:.2,thresholdDb:threshold});
}
fs.writeFileSync('curriculum-workflow/generated/L426-silence-trim.json',JSON.stringify(report,null,2)+'\n');
console.log(report);
