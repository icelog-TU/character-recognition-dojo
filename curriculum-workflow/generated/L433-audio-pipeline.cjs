// Execute repository audio scripts against the owned draft, without changing shared production state.
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const read=fs.readFileSync,write=fs.writeFileSync,dp='curriculum-workflow/drafts/L433-draft.json';
const action=process.argv[2],only=process.argv[3],shared=path.resolve('src/curriculum/sample-lessons.json');
const d=JSON.parse(read(dp,'utf8')),fetchOriginal=globalThis.fetch;
if(action==='process'&&only){const list=fs.readdirSync;fs.readdirSync=function(dir,...args){const result=list.call(this,dir,...args);return path.resolve(String(dir))===path.resolve('curriculum-workflow/audio-inbox/L433')?result.filter(x=>(typeof x==='string'?x:x.name)===only+'.mp3'):result;};}
globalThis.fetch=async(...args)=>{
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);b.instructions='Read only the exact input text in warm natural Taiwan Mandarin. No explanations or additional words. 願 is ㄩㄢˋ yuan fourth tone. 主角 uses 角 ㄐㄧㄠˇ jiao third tone, not jue. 己 is ㄐㄧˇ. Keep beginning and final syllables complete, normal speaking volume and relaxed natural pacing.';if(b.input==='願')b.instructions='Read the single Chinese input character exactly once in natural Taiwan Mandarin: 願, pinyin yuàn, fourth tone, ㄩㄢˋ. Complete one syllable with natural falling pitch at normal voice volume. Do not add examples or explanations.';if(b.input==='你')b.instructions='用溫柔自然的臺灣華語念出輸入文字。音量正常、咬字清晰。';if(b.input==='意當主角嗎')b.instructions='Speak precisely the five input characters as an intentionally incomplete sentence fragment. Taiwan Mandarin syllables: yì dāng zhǔ jiǎo ma. Begin with the vowel-only fourth-tone yì (意 meaning intention). Do not repair the grammar or add a consonant or pronoun. Normal clear connected speech, gentle question intonation at the end.';args[1]={...args[1],body:JSON.stringify(b)};}
 if(String(args[0]).includes('/audio/transcriptions')&&args[1].body.get('file')?.name==='L433-G02-prefix.m4a')args[1].body.append('prompt','你');
 if(String(args[0]).includes('/audio/transcriptions')&&args[1].body.get('file')?.name==='L433-G02-suffix.m4a')args[1].body.append('prompt','意當主角嗎');
 const res=await fetchOriginal(...args);if(!String(args[0]).includes('/audio/transcriptions')||!res.ok)return res;
 const raw=await res.json();if(args[1].body.get('prompt'))raw.alignmentTextContext=args[1].body.get('prompt');fs.mkdirSync('curriculum-workflow/generated/L433-transcripts',{recursive:true});write('curriculum-workflow/generated/L433-transcripts/'+args[1].body.get('file').name+'.json',JSON.stringify(raw,null,2)+'\n');
 const eq={'愿':'願','爱':'愛','给':'給','当':'當','吗':'嗎','来':'來','选':'選','鸟':'鳥','妈':'媽','这':'這','个':'個','说':'說','玩':'玩'};
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
 else if(only==='char-u9858'){d.sentences=[];d.sentenceGames=[];}
 else if(only.startsWith('L433-G05-')){const o=d.sentenceGames[4].options.find(o=>'L433-G05-'+o.id===only);if(!o)throw Error('Unknown option');d.sentences=[{id:only,text:o.text,spokenText:o.spokenText,approved:true,audio:{src:o.audioSrc}}];d.newChars=[];d.sentenceGames=[];}
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
 if(path.resolve(String(file))===path.resolve('curriculum-workflow/audio-duration-report.json'))return write('curriculum-workflow/generated/L433-duration-report.json',data,...args);
 return write.call(this,file,data,...args);
};
const scripts={generate:'generate-audio-drafts',process:'process-audio-assets',align:'align-audio-timings-ai',formats:'audit-asset-formats',production:'validate-production-assets'};
if(!scripts[action])throw Error('Unknown action');
process.argv=['node','script','--lesson','L433'];if(action==='formats')process.argv.push('--strict');
import(pathToFileURL(path.resolve('scripts/'+scripts[action]+'.mjs')).href);
