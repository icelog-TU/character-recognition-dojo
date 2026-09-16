import fs from 'node:fs';import{spawnSync}from'node:child_process';import{createRequire}from'node:module';
const require=createRequire(import.meta.url),ff=require('@ffmpeg-installer/ffmpeg').path;
const p='curriculum-workflow/drafts/L428-draft.json',d=JSON.parse(fs.readFileSync(p,'utf8'));
const corrections=[];
for(const [audio,index,field,value,basis]of[
 [d.sentences[1].audio,6,'startMs',2520,'S02 就: AI span included the preceding 563ms pause. -40dB silence ends at 2560ms; start 40ms before speech onset.'],
 [d.sentences[4].audio,5,'startMs',2180,'S05 輪: AI span included preceding pause. -40dB silence ends at 2212ms; start 32ms before speech onset.'],
 [d.sentences[3].audio,8,'endMs',4051,'S04 心: final acoustic tail ends at 4051ms (-45dB); preserve 200ms terminal quiet.'],
 [d.sentenceGames[1].teachAudio.prefixAudio,6,'endMs',2460,'G02 prefix 就: final acoustic tail ends at 2460ms (-45dB); preserve 200ms terminal quiet.']
]){const t=audio.charTimings[index];corrections.push({src:audio.src,charIndex:index,field,before:t[field],after:value,basis});t[field]=value;}
const silenceEvidence={};for(const id of ['S02','S04','S05','G02-prefix']){const result=spawnSync(ff,['-hide_banner','-i',`public/assets/lessons/L428/audio/L428-${id}.m4a`,'-af','silencedetect=noise=-40dB:d=0.06','-f','null','-'],{encoding:'utf8'});silenceEvidence[id]=result.stderr.split('\n').filter(l=>l.includes('silence_'));}
fs.writeFileSync('curriculum-workflow/generated/L428-timing-corrections.json',JSON.stringify({corrections,silenceEvidence},null,2)+'\n');fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');console.log(corrections);
