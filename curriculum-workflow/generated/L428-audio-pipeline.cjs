// Execute repository audio scripts against the owned draft, without changing shared production state.
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const read=fs.readFileSync,write=fs.writeFileSync,dp='curriculum-workflow/drafts/L428-draft.json';
const action=process.argv[2],only=process.argv[3],shared=path.resolve('src/curriculum/sample-lessons.json');
const d=JSON.parse(read(dp,'utf8')),fetchOriginal=globalThis.fetch;
if(action==='process'&&only){const list=fs.readdirSync;fs.readdirSync=function(dir,...args){const result=list.call(this,dir,...args);return path.resolve(String(dir))===path.resolve('curriculum-workflow/audio-inbox/L428')?result.filter(x=>(typeof x==='string'?x:x.name)===only+'.mp3'):result;};}
globalThis.fetch=async(...args)=>{
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);if(b.input==='自')b.instructions='只念「自」這一個字一次。臺灣華語ㄗˋ，完整單音節，第四聲清楚自然下降，正常音量。不念注音、不加例詞、不解釋。';else b.instructions+=' 自讀ㄗˋ；輪讀ㄌㄨㄣˊ；員讀ㄩㄢˊ；各讀ㄍㄜˋ。只念輸入文字，首尾完整。片段客人一走近門就要念到就，不加自；動打開要完整讀三字。';args[1]={...args[1],body:JSON.stringify(b)};}
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);if(b.input==='自'){b.instructions='Read the single input Chinese character exactly once in natural Taiwan Mandarin. Its pinyin is zì, fourth tone, pronounced with a clear brief ts affricate at the onset and a falling pitch. Speak the complete syllable at normal speaking volume.';args[1]={...args[1],body:JSON.stringify(b)};}if(b.input==='動打開'){b.instructions='Read the exact three Chinese characters in the input as connected natural Taiwan Mandarin. The pinyin sequence is dòng dǎ kāi. Keep the initial dental d in dòng clear and complete. Warm natural voice, normal speaking volume.';args[1]={...args[1],body:JSON.stringify(b)};}}
 if(String(args[0]).includes('/audio/transcriptions')){const name=args[1].body.get('file')?.name;if(['L428-S02.m4a','L428-G02-prefix.m4a','L428-G02-suffix.m4a'].includes(name)){const sentence=d.sentences.find(s=>s.audio?.src.endsWith('/'+name));if(sentence)args[1].body.append('prompt',sentence.spokenText);}}
 const res=await fetchOriginal(...args);if(!String(args[0]).includes('/audio/transcriptions')||!res.ok)return res;
 const raw=await res.json();if(args[1].body.get('prompt'))raw.alignmentTextContext=args[1].body.get('prompt');fs.mkdirSync('curriculum-workflow/generated/L428-transcripts',{recursive:true});write('curriculum-workflow/generated/L428-transcripts/'+args[1].body.get('file').name+'.json',JSON.stringify(raw,null,2)+'\n');
 const eq={'队':'隊','员':'員','组':'組','轮':'輪','带':'帶','点':'點','动':'動','开':'開','门':'門','扫':'掃','学':'學','车':'車','书':'書'};
 const norm=v=>typeof v==='string'?[...v].map(c=>eq[c]??c).join(''):Array.isArray(v)?v.map(norm):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,norm(x)])):v;
 return new Response(JSON.stringify(norm(raw)),{status:res.status,headers:{'content-type':'application/json'}});
};
if(action==='align')for(const g of d.sentenceGames){
 for(const p of ['prefix','suffix'])if(g.teachAudio?.[p+'Src'])d.sentences.push({id:g.id+'-'+p,text:g.teachAudio[p+'Text'],spokenText:g.teachAudio[p+'Text'],approved:true,audio:{src:g.teachAudio[p+'Src']}});
 if(g.type==='choose-pronunciation')for(const o of g.options.filter(o=>!o.correct))d.sentences.push({id:g.id+'-'+o.id,text:o.text,spokenText:o.spokenText,approved:true,audio:{src:o.audioSrc}});
}
if(action==='generate'&&only){
 const s=d.sentences.find(s=>s.id===only);
 if(s){d.sentences=[s];d.newChars=[];d.sentenceGames=[];}
 else if(only==='char-u81ea'){d.sentences=[];d.sentenceGames=[];}
 else if(only.startsWith('L428-G05-')){const o=d.sentenceGames[4].options.find(o=>'L428-G05-'+o.id===only);if(!o)throw Error('Unknown option');d.sentences=[{id:only,text:o.text,spokenText:o.spokenText,approved:true,audio:{src:o.audioSrc}}];d.newChars=[];d.sentenceGames=[];}
 else {const g=d.sentenceGames.find(g=>['prefix','suffix'].some(p=>g.id+'-'+p===only));if(!g)throw Error('Unsupported single job');const p=only.endsWith('prefix')?'prefix':'suffix';d.sentences=[{id:only,text:g.teachAudio[p+'Text'],spokenText:g.teachAudio[p+'Text'],approved:true,audio:{src:g.teachAudio[p+'Src']}}];d.newChars=[];d.sentenceGames=[];}
}
fs.readFileSync=function(file,...args){return path.resolve(String(file))===shared?JSON.stringify({version:1,lessons:[d],reviewLessons:[]}):read.call(this,file,...args);};
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
 if(path.resolve(String(file))===path.resolve('curriculum-workflow/audio-duration-report.json'))return write('curriculum-workflow/generated/L428-duration-report.json',data,...args);
 return write.call(this,file,data,...args);
};
const scripts={generate:'generate-audio-drafts',process:'process-audio-assets',align:'align-audio-timings-ai',formats:'audit-asset-formats',production:'validate-production-assets'};
if(!scripts[action])throw Error('Unknown action');
process.argv=['node','script','--lesson','L428'];if(action==='formats')process.argv.push('--strict');
import(pathToFileURL(path.resolve('scripts/'+scripts[action]+'.mjs')).href);
