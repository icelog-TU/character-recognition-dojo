const fs=require('node:fs'),cp=require('node:child_process'),path=require('node:path');
const ff=require('@ffmpeg-installer/ffmpeg').path,fp=require('@ffprobe-installer/ffprobe').path;
const root='public/assets/lessons/L394/audio',report=[];
for(const name of fs.readdirSync(root).filter(n=>n.endsWith('.m4a')&&!n.startsWith('char-'))){
 const p=path.join(root,name),duration=Number(cp.execFileSync(fp,['-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',p]));
 const scan=cp.spawnSync(ff,['-i',p,'-af','silencedetect=noise=-45dB:d=0.15','-f','null','-'],{encoding:'utf8'});
 if(scan.status!==0)throw Error(scan.stderr);
 const starts=[...scan.stderr.matchAll(/silence_start: ([\d.]+)/g)],ends=[...scan.stderr.matchAll(/silence_end: ([\d.]+)/g)];
 const start=Number(starts.at(-1)?.[1]),end=Number(ends.at(-1)?.[1]);
 if(Number.isFinite(start)&&Math.abs(end-duration)<0.06&&duration-start>0.35){
  const target=start+0.20,tmp=p+'.trim.m4a';
  cp.execFileSync(ff,['-y','-i',p,'-t',target.toFixed(3),'-ac','1','-ar','44100','-c:a','aac','-b:a','96k','-movflags','+faststart',tmp],{stdio:'ignore'});
  fs.copyFileSync(tmp,p);fs.unlinkSync(tmp);report.push({name,before:duration,silenceStart:start,after:target});
 }
}
fs.writeFileSync('curriculum-workflow/generated/L394-tail-trim-report.json',JSON.stringify(report,null,2)+'\n');console.log(report);

