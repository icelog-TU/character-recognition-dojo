import fs from 'node:fs';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {requireOpenAIKey} from '../../scripts/lib/env.mjs';
const require=createRequire(import.meta.url),ff=require('@ffmpeg-installer/ffmpeg').path;
const unit=process.argv[2],only=process.argv[3];if(unit!=='L474')throw Error('owned unit only');const folder='public/assets/lessons/'+unit+'/audio',out='curriculum-workflow/generated/'+unit+'-listening-evidence.json';
const prompt='Listen carefully to this Taiwan Mandarin recording. Without being given an expected transcript, return concise JSON with the exact Traditional Chinese transcript heard, any omitted/clipped/repeated/substituted syllable, awkward pauses, and pronunciation notes. Judge whether the delivery sounds like natural Taiwan Mandarin rather than Mainland broadcast Mandarin. If 而 occurs, report whether it is ㄦˊ. If 答案 occurs, report whether 答 is ㄉㄚˊ. If 應該 occurs, report whether 應 is first tone ㄧㄥ. If 睡不著 occurs, report whether 著 is ㄓㄠˊ. If 而已 occurs, report whether 已 is ㄧˇ. For the isolated prefix 想幫忙反, verify final 反 ㄈㄢˇ is complete and no 而 follows. For suffix 把水打翻了, verify final 了 is audible neutral tone. Do not infer only from likely context; state uncertainty. This is AI listening, not human QA.';
const rows=[];
for(const file of fs.readdirSync(folder).filter(f=>f.endsWith('.m4a')&&(!only||f===only)).sort()){
 const original=fs.readFileSync(folder+'/'+file),sha256=createHash('sha256').update(original).digest('hex');
 const wav=execFileSync(ff,['-v','error','-i',folder+'/'+file,'-f','wav','-acodec','pcm_s16le','pipe:1'],{maxBuffer:8000000});
 const filePrompt=file==='char-u800c.m4a'?'Transcribe the single Taiwan Mandarin Chinese syllable in this recording and identify its zhuyin and tone. Check whether it is exactly 而 ㄦˊ with a complete rising second tone, spoken once, with no added word, clipping, or awkward silence. Return concise JSON. Do not identify or describe the speaker.':prompt;
 const response=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+requireOpenAIKey(),'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-audio-1.5',modalities:['text'],messages:[{role:'user',content:[{type:'text',text:filePrompt},{type:'input_audio',input_audio:{data:wav.toString('base64'),format:'wav'}}]}]})});
 if(!response.ok)throw Error('Audio QA HTTP '+response.status+' '+(await response.text()).slice(0,300));
 const data=await response.json();const row={file,sha256,model:data.model,method:'AI listening, not human QA',prompt:filePrompt,result:data.choices[0].message.content};rows.push(row);console.log(file+': '+row.result);
}
const finalRows=only&&fs.existsSync(out)?[...JSON.parse(fs.readFileSync(out,'utf8')).filter(row=>row.file!==only),...rows].sort((a,b)=>a.file.localeCompare(b.file)):rows;
fs.writeFileSync(out,JSON.stringify(finalRows,null,2)+'\n');
