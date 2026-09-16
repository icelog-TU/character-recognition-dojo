// Adapt existing repository scripts to the owned draft, without writing release state.
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const read=fs.readFileSync,write=fs.writeFileSync;
const action=process.argv[2],only=process.argv[3],dp='curriculum-workflow/drafts/L381-draft.json';
const shared=path.resolve('src/curriculum/sample-lessons.json');
const d=JSON.parse(read(dp,'utf8'));
const originalFetch=globalThis.fetch;
globalThis.fetch=async(...args)=>{
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);b.instructions+=' 本課所有「傳」都讀ㄔㄨㄢˊ，不讀ㄓㄨㄢˋ。只念輸入文字，不加解釋。';args[1]={...args[1],body:JSON.stringify(b)};}
 const res=await originalFetch(...args);
 if(!String(args[0]).includes('/audio/transcriptions')||!res.ok)return res;
 const raw=await res.json(),name=args[1].body.get('file').name;
 fs.mkdirSync('tmp/L381/transcripts',{recursive:true});write('tmp/L381/transcripts/'+name+'.json',JSON.stringify(raw,null,2)+'\n');
 const eq={'传':'傳','来':'來','连':'連','经':'經','图':'圖','给':'給','电':'電','帮':'幫','话':'話','饭':'飯','间':'間','里':'裡','声':'聲','这':'這','个':'個','妈':'媽','对':'對','说':'說','听':'聽'};
 const norm=v=>typeof v==='string'?[...v].map(c=>eq[c]??c).join(''):Array.isArray(v)?v.map(norm):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,norm(x)])):v;
 return new Response(JSON.stringify(norm(raw)),{status:res.status,headers:{'content-type':'application/json'}});
};
if(action==='align'){
 for(const g of d.sentenceGames){
  for(const part of ['prefix','suffix'])if(g.teachAudio?.[part+'Src'])d.sentences.push({id:g.id+'-'+part,text:g.teachAudio[part+'Text'],spokenText:g.teachAudio[part+'Text'],approved:true,audio:{src:g.teachAudio[part+'Src']}});
  if(g.type==='choose-pronunciation')for(const o of g.options.filter(o=>!o.correct))d.sentences.push({id:g.id+'-'+o.id,text:o.text,spokenText:o.spokenText,approved:true,audio:{src:o.audioSrc}});
 }
}
if(action==='generate'&&only){
 const s=d.sentences.find(s=>s.id===only);
 if(s){d.sentences=[s];d.newChars=[];d.sentenceGames=[];}
 else if(only==='char-u50b3'){d.sentences=[];d.sentenceGames=[];}
 else throw Error('Unknown single audio job '+only);
}
fs.readFileSync=function(file,...args){return path.resolve(String(file))===shared?JSON.stringify({lessons:[d],reviewLessons:[]}):read.call(this,file,...args);};
fs.writeFileSync=function(file,data,...args){
 if(path.resolve(String(file))===shared){
  const result=JSON.parse(data).lessons[0];
  if(action==='align'){
   result.stage4AudioAlignment=Object.fromEntries(result.sentences.filter(s=>!/-S\d\d$/.test(s.id)).map(s=>[s.id,{spokenText:s.spokenText,...s.audio}]));
   result.sentences=result.sentences.filter(s=>/-S\d\d$/.test(s.id));
   for(const g of result.sentenceGames)for(const part of ['prefix','suffix'])if(g.teachAudio?.[part+'Src'])g.teachAudio[part+'Audio']=result.stage4AudioAlignment[g.id+'-'+part];
  }
  return write(dp,JSON.stringify(result,null,2)+'\n','utf8');
 }
 if(path.resolve(String(file))===path.resolve('curriculum-workflow/audio-duration-report.json'))return write('curriculum-workflow/generated/L381-duration-report.json',data,...args);
 return write.call(this,file,data,...args);
};
const scripts={generate:'generate-audio-drafts',process:'process-audio-assets',align:'align-audio-timings-ai',formats:'audit-asset-formats',production:'validate-production-assets'};
if(!scripts[action])throw Error('Unknown action '+action);
process.argv=['node','script','--lesson','L381'];
if(action==='formats')process.argv.push('--strict');
import(pathToFileURL(path.resolve('scripts/'+scripts[action]+'.mjs')).href);
