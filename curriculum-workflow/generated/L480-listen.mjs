import fs from 'node:fs';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {requireOpenAIKey} from '../../scripts/lib/env.mjs';
const require=createRequire(import.meta.url),ff=require('@ffmpeg-installer/ffmpeg').path;
const unit=process.argv[2],only=process.argv[3];if(unit!=='L480')throw Error('owned unit only');const folder='public/assets/lessons/'+unit+'/audio',out='curriculum-workflow/generated/'+unit+'-listening-evidence.json';
const prompt='Listen carefully to this Taiwan Mandarin recording. Without being given an expected transcript, return concise JSON with the exact Traditional Chinese transcript heard, any omitted/clipped/repeated/substituted syllable, awkward pauses, and pronunciation notes. Judge whether the delivery sounds like natural Taiwan Mandarin rather than Mainland broadcast Mandarin. Check 趣 ㄑㄩˋ, 緣 ㄩㄢˊ, 聊 ㄌㄧㄠˊ, 而 ㄦˊ and 且 ㄑㄧㄝˇ whenever present. For the G02 prefix 無聊時我會找有, verify final 有 is complete and no 趣 follows. For suffix 的書看, verify initial 的 is audible neutral tone ˙ㄉㄜ and not ㄉㄧˋ, with no 趣 before it. Do not infer only from likely context; state uncertainty. This is AI listening, not human QA.';
const rows=[];
for(const file of fs.readdirSync(folder).filter(f=>f.endsWith('.m4a')&&(!only||f===only)).sort()){
 const original=fs.readFileSync(folder+'/'+file),sha256=createHash('sha256').update(original).digest('hex');
 const wav=execFileSync(ff,['-v','error','-i',folder+'/'+file,'-f','wav','-acodec','pcm_s16le','pipe:1'],{maxBuffer:8000000});
 const filePrompt=file==='char-u8da3.m4a'?'Transcribe the single Taiwan Mandarin Chinese syllable in this recording and identify its zhuyin and tone. Check whether it is exactly 趣 ㄑㄩˋ with a complete falling fourth tone, spoken once, with no added word, clipping, or awkward silence. Return concise JSON. Do not identify or describe the speaker.':file==='L480-G05-wrong-one.m4a'?'Listen carefully to this Taiwan Mandarin recording. Return concise JSON with the exact Traditional Chinese transcript and explicitly identify the actual tone heard on 不 in 飛不動. The teacher requires 不 to be a clear falling fourth tone ㄅㄨˋ, not a rising second tone ㄅㄨˊ. Also report omissions, clipping, substitutions, awkward pauses, and whether the delivery remains natural Taiwan Mandarin. Do not infer from spelling; judge the audio.':prompt;
 const response=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+requireOpenAIKey(),'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-audio-1.5',modalities:['text'],messages:[{role:'user',content:[{type:'text',text:filePrompt},{type:'input_audio',input_audio:{data:wav.toString('base64'),format:'wav'}}]}]})});
 if(!response.ok)throw Error('Audio QA HTTP '+response.status+' '+(await response.text()).slice(0,300));
 const data=await response.json();const row={file,sha256,model:data.model,method:'AI listening, not human QA',prompt:filePrompt,result:data.choices[0].message.content};rows.push(row);console.log(file+': '+row.result);
}
const finalRows=only&&fs.existsSync(out)?[...JSON.parse(fs.readFileSync(out,'utf8')).filter(row=>row.file!==only),...rows].sort((a,b)=>a.file.localeCompare(b.file)):rows;
fs.writeFileSync(out,JSON.stringify(finalRows,null,2)+'\n');
