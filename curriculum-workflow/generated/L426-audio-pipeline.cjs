// Execute repository audio scripts against the owned draft, without changing shared production state.
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const read=fs.readFileSync,write=fs.writeFileSync,dp='curriculum-workflow/drafts/L426-draft.json';
const action=process.argv[2],only=process.argv[3],shared=path.resolve('src/curriculum/sample-lessons.json');
const d=JSON.parse(read(dp,'utf8')),fetchOriginal=globalThis.fetch;
if(action==='process'&&only){const list=fs.readdirSync;fs.readdirSync=function(dir,...args){const result=list.call(this,dir,...args);return path.resolve(String(dir))===path.resolve('curriculum-workflow/audio-inbox/L426')?result.filter(x=>(typeof x==='string'?x:x.name)===only+'.mp3'):result;};}
globalThis.fetch=async(...args)=>{
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);b.instructions+=' 使用自然臺灣華語。輪流、輪到、輪子的輪均讀ㄌㄨㄣˊ，第二聲自然上揚。排了的了、輪子的子讀輕聲。只念輸入文字，起音與尾音完整。排了好久的隊才必須完整念到才，不加輪；到我必須完整讀兩字。';args[1]={...args[1],body:JSON.stringify(b)};}
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);if(b.input.startsWith('各')){b.instructions+=' 各讀ㄍㄜˋ，第四聲，清楚下降，不讀ㄍㄜˊ。組讀ㄗㄨˇ。';args[1]={...args[1],body:JSON.stringify(b)};}}
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);if(b.input==='到我'){b.instructions='請以清楚自然的臺灣華語只念「到我」兩個字一次。到讀ㄉㄠˋ，聲母ㄉ要清楚，不能變成告的ㄍ；我讀ㄨㄛˇ。正常溫暖音量和語速，起音完整，尾音保留。不要加其他字或解說。';args[1]={...args[1],body:JSON.stringify(b)};}}
 if(String(args[0]).includes('/audio/transcriptions')&&process.env.L426_TRANSCRIPT_CONTEXT==='1'){const name=args[1].body.get('file')?.name;const s=d.sentences.find(s=>s.audio?.src.endsWith('/'+name));if(s)args[1].body.append('prompt',s.spokenText);}
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);if(b.input==='輪'){b.instructions='只念「輪」這一個中文字一次。臺灣華語，ㄌㄨㄣˊ，第二聲自然上揚。一次完整音節，不拆注音，不加任何別的字、不解釋。清楚正常音量。';args[1]={...args[1],body:JSON.stringify(b)};}}
 const res=await fetchOriginal(...args);
 if(!String(args[0]).includes('/audio/transcriptions')||!res.ok)return res;
 const raw=await res.json();fs.mkdirSync('curriculum-workflow/generated/L426-transcripts',{recursive:true});write('curriculum-workflow/generated/L426-transcripts/'+args[1].body.get('file').name+'.json',JSON.stringify(raw,null,2)+'\n');
 // Script-only traditional equivalents, no phonetic substitutions or transcript prompting.
 const equivalents={'轮':'輪','组':'組','队':'隊','装':'裝','车':'車','画':'畫'};
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
 else if(only==='char-u8f2a'){d.sentences=[];d.sentenceGames=[];}
 else if(only.startsWith('L426-G05-')){const o=d.sentenceGames[4].options.find(o=>'L426-G05-'+o.id===only);if(!o)throw Error('Unknown option');d.sentences=[{id:only,text:o.text,spokenText:o.spokenText,approved:true,audio:{src:o.audioSrc}}];d.newChars=[];d.sentenceGames=[];}
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
 if(path.resolve(String(file))===path.resolve('curriculum-workflow/audio-duration-report.json'))return write('curriculum-workflow/generated/L426-duration-report.json',data,...args);
 return write.call(this,file,data,...args);
};
const scripts={generate:'generate-audio-drafts',process:'process-audio-assets',align:'align-audio-timings-ai',formats:'audit-asset-formats',production:'validate-production-assets'};
if(!scripts[action])throw Error('Unknown action');
process.argv=['node','script','--lesson','L426'];if(action==='formats')process.argv.push('--strict');
import(pathToFileURL(path.resolve('scripts/'+scripts[action]+'.mjs')).href);
