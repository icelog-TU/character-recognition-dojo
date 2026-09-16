// Acoustic diagnostic only: inspect plotted voiced F0, not an automatic linguistic verdict.
import fs from 'node:fs';import {execFileSync} from 'node:child_process';import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),ff=require('@ffmpeg-installer/ffmpeg').path;
const rows=[];
for(const name of ['L428-S01','L428-S02','char-u81ea']){
 const raw=execFileSync(ff,['-v','error','-i',`public/assets/lessons/L428/audio/${name}.m4a`,'-ar','16000','-ac','1','-f','f32le','pipe:1'],{maxBuffer:8000000});
 const a=new Float32Array(raw.buffer,raw.byteOffset,raw.length/4),points=[];
 for(let c=400;c<a.length-400;c+=160){
  let energy=0;for(let j=-320;j<320;j++)energy+=a[c+j]**2;
  if(Math.sqrt(energy/640)<.008)continue;
  const corr=[];
  for(let lag=29;lag<=145;lag++){let cross=0,e1=0,e2=0;for(let j=-300;j<300;j++){let x=a[c+j],y=a[c+j-lag];cross+=x*y;e1+=x*x;e2+=y*y;}corr[lag]=cross/Math.sqrt(e1*e2);}
  const peaks=[];for(let lag=30;lag<145;lag++)if(corr[lag]>.65&&corr[lag]>=corr[lag-1]&&corr[lag]>=corr[lag+1])peaks.push(lag);
  if(!peaks.length)continue;
  const best=Math.max(...peaks.map(l=>corr[l]));const lag=peaks.find(l=>corr[l]>=best*.92);
  points.push({ms:c/16,hz:Math.round(16000/lag*10)/10,correlation:Math.round(corr[lag]*1000)/1000});
 }
 rows.push({name,points});
}
fs.writeFileSync('curriculum-workflow/generated/L428-pitch-evidence.json',JSON.stringify(rows,null,2)+'\n');
let svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="780"><rect width="100%" height="100%" fill="white"/>';
rows.forEach((r,n)=>{const oy=45+n*250;svg+=`<text x="30" y="${oy}" font-size="22">${r.name} - voiced F0 Hz (autocorrelation diagnostic)</text>`;for(let hz=100;hz<=500;hz+=100){const y=oy+210-(hz-100)*.4;svg+=`<path d="M60 ${y}H1150" stroke="#ddd"/><text x="10" y="${y}" font-size="12">${hz}</text>`;}for(let ms=0;ms<=4200;ms+=200){const x=60+ms/4;svg+=`<text x="${x}" y="${oy+230}" font-size="10">${ms}</text>`;}for(const p of r.points)svg+=`<circle cx="${60+p.ms/4}" cy="${oy+210-(p.hz-100)*.4}" r="2" fill="#186fba"/>`;});
svg+='</svg>';fs.writeFileSync('curriculum-workflow/ai-outputs/L428/pitch.svg',svg);
console.log('Pitch diagnostic written');
