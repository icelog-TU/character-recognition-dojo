// Scope the unchanged repository audio scripts to the owned lesson draft.
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const read=fs.readFileSync,write=fs.writeFileSync,dp='curriculum-workflow/drafts/L408-draft.json';
const action=process.argv[2],only=process.argv[3],shared=path.resolve('src/curriculum/sample-lessons.json');
const d=JSON.parse(read(dp,'utf8')),fetchOriginal=globalThis.fetch;
if(action==='process'&&only){const list=fs.readdirSync;fs.readdirSync=function(dir,...args){const result=list.call(this,dir,...args);return path.resolve(String(dir))===path.resolve('curriculum-workflow/audio-inbox/L408')?result.filter(x=>(typeof x==='string'?x:x.name)===only+'.mp3'):result;};}
globalThis.fetch=async(...args)=>{
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);b.instructions+=' 法讀ㄈㄚˇ。只念輸入文字，末字完整。片段我有個想必須停在想，不能加法。';if(['我有個想法加蓋一座橋吧','小狗身體弱媽媽用心照顧'].includes(b.input))b.instructions+=' Read in one smoothly connected breath at an even gentle pace. No long pause in the middle. Give every syllable clear articulation, including 加 and both 媽 syllables.';args[1]={...args[1],body:JSON.stringify(b)};}
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);if(b.input==='法'){b.instructions='請以自然臺灣華語清楚朗讀單字法一次。注音ㄈㄚˇ，第三聲，完整低降再微升的上聲，不是第二聲的乏，不是第一聲的發。不要念注音或解釋，不要加入其他字。正常音量，聲母與韻尾完整。';args[1]={...args[1],body:JSON.stringify(b)};}}
 if(String(args[0]).includes('/audio/transcriptions')){const name=args[1].body.get('file')?.name;const s=d.sentences.find(s=>s.audio?.src.endsWith('/'+name));if(s)args[1].body.append('prompt',s.spokenText);}
 const res=await fetchOriginal(...args);
 if(!String(args[0]).includes('/audio/transcriptions')||!res.ok)return res;
 const raw=await res.json();fs.mkdirSync('tmp/L408/transcripts',{recursive:true});write('tmp/L408/transcripts/'+args[1].body.get('file').name+'.json',JSON.stringify(raw,null,2));
 const equivalents={'减':'減','个':'個','会':'會','盖':'蓋','桥':'橋','这':'這','点':'點','妈':'媽','顾':'顧','体':'體','里':'裡','写':'寫','来':'來','说':'說','纸':'紙','书':'書','强':'強','让':'讓','过':'過'};
 const norm=v=>typeof v==='string'?[...v].map(c=>equivalents[c]??c).join(''):Array.isArray(v)?v.map(norm):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,norm(x)])):v;
 return new Response(JSON.stringify(norm(raw)),{status:res.status,headers:{'content-type':'application/json'}});
};
if(action==='align')for(const g of d.sentenceGames){
 for(const p of ['prefix','suffix'])if(g.teachAudio?.[p+'Src'])d.sentences.push({id:g.id+'-'+p,text:g.teachAudio[p+'Text'],spokenText:g.teachAudio[p+'Text'],approved:true,audio:{src:g.teachAudio[p+'Src']}});
 if(g.type==='choose-pronunciation')for(const o of g.options.filter(o=>!o.correct))d.sentences.push({id:g.id+'-'+o.id,text:o.text,spokenText:o.spokenText,approved:true,audio:{src:o.audioSrc}});
}
if(action==='generate'&&only){
 const s=d.sentences.find(s=>s.id===only);
 if(s){d.sentences=[s];d.newChars=[];d.sentenceGames=[];}
 else if(only==='char-u6cd5'){d.sentences=[];d.sentenceGames=[];}
 else {const g=d.sentenceGames.find(g=>['prefix','suffix'].some(p=>g.id+'-'+p===only));if(!g)throw Error('Unsupported single job');const p=only.endsWith('prefix')?'prefix':'suffix';d.sentences=[{id:only,text:g.teachAudio[p+'Text'],spokenText:g.teachAudio[p+'Text'],approved:true,audio:{src:g.teachAudio[p+'Src']}}];d.newChars=[];d.sentenceGames=[];}
}
fs.readFileSync=function(file,...args){return path.resolve(String(file))===shared?JSON.stringify({lessons:[d],reviewLessons:[]}):read.call(this,file,...args);};
fs.writeFileSync=function(file,data,...args){
 if(path.resolve(String(file))===shared){const result=JSON.parse(data).lessons[0];
  if(action==='align'){
   result.stage4AudioAlignment=Object.fromEntries(result.sentences.filter(s=>!/-S\d\d$/.test(s.id)).map(s=>[s.id,{spokenText:s.spokenText,...s.audio}]));
   result.sentences=result.sentences.filter(s=>/-S\d\d$/.test(s.id));
   for(const g of result.sentenceGames){
    if(g.type==='choose-pronunciation')for(const o of g.options)o.audio=o.correct?result.sentences.find(s=>s.id===g.sentenceId).audio:result.stage4AudioAlignment[g.id+'-'+o.id];
    for(const p of ['prefix','suffix'])if(g.teachAudio?.[p+'Src'])g.teachAudio[p+'Audio']=result.stage4AudioAlignment[g.id+'-'+p];
   }
  }return write(dp,JSON.stringify(result,null,2)+'\n','utf8');
 }
 if(path.resolve(String(file))===path.resolve('curriculum-workflow/audio-duration-report.json'))return write('curriculum-workflow/generated/L408-duration-report.json',data,...args);
 return write.call(this,file,data,...args);
};
const scripts={generate:'generate-audio-drafts',process:'process-audio-assets',align:'align-audio-timings-ai',formats:'audit-asset-formats',production:'validate-production-assets'};
if(!scripts[action])throw Error('Unknown action');
process.argv=['node','script','--lesson','L408'];if(action==='formats')process.argv.push('--strict');
import(pathToFileURL(path.resolve('scripts/'+scripts[action]+'.mjs')).href);
