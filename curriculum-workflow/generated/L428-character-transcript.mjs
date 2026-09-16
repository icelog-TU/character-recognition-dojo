import fs from 'node:fs';import {createHash} from 'node:crypto';import{requireOpenAIKey}from'../../scripts/lib/env.mjs';
const file='public/assets/lessons/L428/audio/char-u81ea.m4a',bytes=fs.readFileSync(file),form=new FormData();
form.append('model','whisper-1');form.append('file',new Blob([bytes],{type:'audio/mp4'}),'character.m4a');form.append('language','zh');form.append('response_format','verbose_json');
const r=await fetch('https://api.openai.com/v1/audio/transcriptions',{method:'POST',headers:{Authorization:'Bearer '+requireOpenAIKey()},body:form});if(!r.ok)throw Error('Transcription HTTP '+r.status);
const evidence={file,sha256:createHash('sha256').update(bytes).digest('hex'),method:'Independent transcription without target text or prompt; orthography may be ambiguous for isolated syllables',transcript:await r.json()};
fs.writeFileSync('curriculum-workflow/generated/L428-character-transcript.json',JSON.stringify(evidence,null,2)+'\n');console.log(evidence.transcript);
