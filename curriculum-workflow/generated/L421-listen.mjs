import fs from 'node:fs';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {requireOpenAIKey} from '../../scripts/lib/env.mjs';
const require=createRequire(import.meta.url),ff=require('@ffmpeg-installer/ffmpeg').path;
const root='public/assets/lessons/L421/audio/';
const out='curriculum-workflow/generated/L421-listening-evidence.json';
const rows=fs.existsSync(out)?JSON.parse(fs.readFileSync(out,'utf8')):[];
for(const file of ['char-u5ba4.m4a','L421-S01.m4a','L421-S02.m4a','L421-S03.m4a','L421-G02-prefix.m4a']){
 const sha256=createHash('sha256').update(fs.readFileSync(root+file)).digest('hex');
 if(rows.some(r=>r.file===file&&r.sha256===sha256))continue;
 const wav=execFileSync(ff,['-v','error','-i',root+file,'-f','wav','-acodec','pcm_s16le','pipe:1'],{maxBuffer:8000000});
 const prompt='Listen to the actual supplied audio. Transcribe it verbatim in Traditional Chinese. Then give the Taiwan zhuyin and tone actually audible for each occurrence of 教 and for any standalone syllable. Distinguish first-level versus fourth-falling tone based on sound, not expected grammar or spelling. Describe whether final syllables are clear, natural Taiwan Mandarin without erhua, and whether any speech sounds missing, clipped or overly paused. If audio cannot be accessed or tone is ambiguous, explicitly say so. Do not claim human review.';
 const response=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+requireOpenAIKey(),'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-audio-1.5',modalities:['text'],messages:[{role:'user',content:[{type:'text',text:prompt},{type:'input_audio',input_audio:{data:wav.toString('base64'),format:'wav'}}]}]})});
 if(!response.ok)throw Error('Listening HTTP '+response.status);
 const data=await response.json(); const row={file,sha256,model:data.model,method:'AI listening, not human review',prompt,result:data.choices[0].message.content};
 rows.push(row);fs.writeFileSync(out,JSON.stringify(rows,null,2)+'\n');console.log(file+': '+row.result);
}
