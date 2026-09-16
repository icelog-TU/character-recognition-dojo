// Independent AI listening to final decoded audio; no expected transcript/tone in prompt.
// This is model QA, not human/manual listening. Never changes production audio.
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {requireOpenAIKey} from '../../scripts/lib/env.mjs';
const require=createRequire(import.meta.url),ff=require('@ffmpeg-installer/ffmpeg').path;
const unit=process.argv[2];if(unit!=='L416')throw Error('owned units');const folder='public/assets/lessons/'+unit+'/audio',out='curriculum-workflow/generated/'+unit+'-listening-evidence.json';
const prompt='Listen carefully to this Taiwan Mandarin recording. Give the exact Traditional Chinese transcript as heard, without an expected transcript. Report omitted or clipped syllables, actual audible syllable counts for repeated words, final syllable completeness, and awkward pauses. If 長 occurs report whether zhang3 or chang2 is actually heard. For a standalone syllable report pronunciation. If uncertain, say so. Return concise JSON. This is independent AI listening, not human QA.';
const rows=fs.existsSync(out)?JSON.parse(fs.readFileSync(out)):[];
for(const file of fs.readdirSync(folder).filter(f=>f.endsWith('.m4a'))){
 const original=fs.readFileSync(folder+'/'+file),sha256=createHash('sha256').update(original).digest('hex');
 if(process.argv[3] && file!==process.argv[3])continue; if(!process.argv[3] && rows.some(r=>r.file===file&&r.sha256===sha256))continue;
 const wav=execFileSync(ff,['-v','error','-i',folder+'/'+file,'-f','wav','-acodec','pcm_s16le','pipe:1'],{maxBuffer:8000000});
 const response=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+requireOpenAIKey(),'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-audio-1.5',modalities:['text'],messages:[{role:'user',content:[{type:'text',text:prompt},{type:'input_audio',input_audio:{data:wav.toString('base64'),format:'wav'}}]}]})});
 if(!response.ok)throw Error('Audio QA HTTP '+response.status+' '+(await response.text()).slice(0,300));
 const data=await response.json();const row={file,sha256,model:data.model,method:'AI listening, not human QA',prompt,result:data.choices[0].message.content};
 rows.push(row);fs.writeFileSync(out,JSON.stringify(rows,null,2)+'\n');console.log(file+': '+row.result);
}
