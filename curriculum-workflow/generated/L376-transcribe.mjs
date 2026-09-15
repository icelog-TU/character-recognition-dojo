import fs from 'node:fs';
import path from 'node:path';
import { requireOpenAIKey } from '../../scripts/lib/env.mjs';
const apiKey=requireOpenAIKey();
const report=[];
for(const file of process.argv.slice(2)){
 const form=new FormData();form.append('model','gpt-4o-transcribe');form.append('language','zh');form.append('file',new Blob([fs.readFileSync(file)]),path.basename(file));
 const response=await fetch('https://api.openai.com/v1/audio/transcriptions',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`},body:form});
 if(!response.ok)throw Error(`Transcription HTTP ${response.status}`);
 const result=await response.json();report.push({file,model:'gpt-4o-transcribe',prompt:null,...result});
}
fs.writeFileSync('curriculum-workflow/generated/L376-independent-transcription.json',JSON.stringify(report,null,2)+'\n');console.log(report);
