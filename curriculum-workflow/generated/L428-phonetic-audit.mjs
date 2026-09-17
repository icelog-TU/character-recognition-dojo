import fs from 'node:fs';import{createHash}from'node:crypto';import{requireOpenAIKey}from'../../scripts/lib/env.mjs';
const results=[];
for(const name of ['char-u81ea','L428-G02-suffix']){
 const file=process.argv.includes('--raw')?`curriculum-workflow/audio-inbox/L428/${name}.mp3`:`public/assets/lessons/L428/audio/${name}.m4a`,bytes=fs.readFileSync(file),form=new FormData();
 form.append('model','gpt-4o-transcribe');form.append('file',new Blob([bytes],{type:file.endsWith('.mp3')?'audio/mpeg':'audio/mp4'}),file.split('/').at(-1));form.append('language','zh');form.append('response_format','json');
 const r=await fetch('https://api.openai.com/v1/audio/transcriptions',{method:'POST',headers:{Authorization:'Bearer '+requireOpenAIKey()},body:form});if(!r.ok)throw Error('Transcription HTTP '+r.status+' '+await r.text());
 results.push({file,sha256:createHash('sha256').update(bytes).digest('hex'),model:'gpt-4o-transcribe',prompt:null,result:await r.json()});
}
fs.writeFileSync('curriculum-workflow/generated/L428-phonetic-audit'+(process.argv.includes('--raw')?'-raw':'')+'.json',JSON.stringify(results,null,2)+'\n');console.log(results);
