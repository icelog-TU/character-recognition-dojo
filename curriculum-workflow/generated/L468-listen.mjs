// Independent AI listening to final decoded audio; model QA, not human listening.
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {requireOpenAIKey} from '../../scripts/lib/env.mjs';
const require=createRequire(import.meta.url),ff=require('@ffmpeg-installer/ffmpeg').path;
const unit=process.argv[2];if(unit!=='L468')throw Error('owned unit only');const folder='public/assets/lessons/'+unit+'/audio',out='curriculum-workflow/generated/'+unit+'-listening-evidence.json';
const prompt='Listen carefully to this Taiwan Mandarin recording. Without being given an expected transcript, return concise JSON with: exact Traditional Chinese transcript as heard; whether any syllable is omitted, clipped, repeated, or substituted; awkward pauses; and pronunciation notes. If 中了 occurs, identify whether 中 is fourth tone ㄓㄨㄥˋ (hit by something) or first tone ㄓㄨㄥ. If 星期日 occurs, identify whether 期 is rising second tone ㄑㄧˊ or flat first tone ㄑㄧ. If 招待 occurs, identify whether 待 is ㄉㄞˋ. If 該、絕、活 occur, report their audible tones. Do not infer only from likely written context; state uncertainty. This is AI listening, not human QA.';
const rows=[];
for(const file of fs.readdirSync(folder).filter(f=>f.endsWith('.m4a')).sort()){
 const original=fs.readFileSync(folder+'/'+file),sha256=createHash('sha256').update(original).digest('hex');
 const wav=execFileSync(ff,['-v','error','-i',folder+'/'+file,'-f','wav','-acodec','pcm_s16le','pipe:1'],{maxBuffer:8000000});
 const response=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+requireOpenAIKey(),'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-audio-1.5',modalities:['text'],messages:[{role:'user',content:[{type:'text',text:prompt},{type:'input_audio',input_audio:{data:wav.toString('base64'),format:'wav'}}]}]})});
 if(!response.ok)throw Error('Audio QA HTTP '+response.status+' '+(await response.text()).slice(0,300));
 const data=await response.json();const row={file,sha256,model:data.model,method:'AI listening, not human QA',prompt,result:data.choices[0].message.content};rows.push(row);console.log(file+': '+row.result);
}
fs.writeFileSync(out,JSON.stringify(rows,null,2)+'\n');
