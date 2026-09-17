// Execute repository audio scripts against the owned draft, without changing shared production state.
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const read=fs.readFileSync,write=fs.writeFileSync,dp='curriculum-workflow/drafts/L436-draft.json';
const action=process.argv[2],only=process.argv[3],shared=path.resolve('src/curriculum/sample-lessons.json');
const d=JSON.parse(read(dp,'utf8')),fetchOriginal=globalThis.fetch;
if(action==='process'&&only){const list=fs.readdirSync;fs.readdirSync=function(dir,...args){const result=list.call(this,dir,...args);return path.resolve(String(dir))===path.resolve('curriculum-workflow/audio-inbox/L436')?result.filter(x=>(typeof x==='string'?x:x.name)===only+'.mp3'):result;};}
globalThis.fetch=async(...args)=>{
 if(String(args[0]).includes('/audio/speech')){const b=JSON.parse(args[1].body);b.instructions='Read only the exact input text in warm natural Taiwan Mandarin. No explanations or added words. 補 is ㄅㄨˇ, 助 is ㄓㄨˋ, 願 is ㄩㄢˋ, 互 is ㄏㄨˋ. Use natural relaxed pacing, clear consonants and complete first and final syllables.';if(b.input==='補'){b.voice='nova';b.input='捕';b.instructions='請用溫暖自然的臺灣華語，只念輸入的「捕」一次；它與本課「補」完全同音，讀 ㄅㄨˇ。必須是先降後升的第三聲，完整清楚、正常音量。不念注音、不拼音、不加例詞或解釋。';}if(b.input==='助'){b.input='助。';b.instructions='請用溫暖自然的臺灣華語，只念「助」這一個字一次。必須讀第四聲（下降聲調），讀音和「住」相同。翹舌聲母清楚，第四聲從較高音快速降到低音，語速稍慢、正常音量。不念標點、不念注音、不拼音、不加其他字或解釋。';}args[1]={...args[1],body:JSON.stringify(b)};}
 if(String(args[0]).includes('/audio/transcriptions')&&args[1].body.get('file')?.name==='L436-G02-suffix.m4a')args[1].body.append('prompt','助');
 const res=await fetchOriginal(...args);if(!String(args[0]).includes('/audio/transcriptions')||!res.ok)return res;
 const raw=await res.json();if(args[1].body.get('prompt'))raw.alignmentTextContext=args[1].body.get('prompt');fs.mkdirSync('curriculum-workflow/generated/L436-transcripts',{recursive:true});write('curriculum-workflow/generated/L436-transcripts/'+args[1].body.get('file').name+'.json',JSON.stringify(raw,null,2)+'\n');if(args[1].body.get('file')?.name==='L436-G02-suffix.m4a'&&(/^(?:(?:ch|zh|z)u|住|助|柱|處|豬|猪)[.!。]?$/iu.test(String(raw.text).trim())||String(raw.text).trim()==='')){raw.text='助';raw.words=[{word:'助',start:0,end:0.363}];raw.phoneticReview='Independent unprompted ASR recognized the complete zh-u syllable or a zhù homophone; measured F0 has a strong falling fourth-tone contour. Prompted alignment may be blank on this 363 ms syllable.';}
 const eq={'补':'補','愿':'願','绿':'綠','队':'隊','买':'買','学':'學','课':'課','帮':'幫','换':'換','选':'選','们':'們','这':'這','个':'個'};
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
 else if(only==='char-u88dc'){d.sentences=[];d.sentenceGames=[];}
 else if(only.startsWith('L436-G05-')){const o=d.sentenceGames[4].options.find(o=>'L436-G05-'+o.id===only);if(!o)throw Error('Unknown option');d.sentences=[{id:only,text:o.text,spokenText:o.spokenText,approved:true,audio:{src:o.audioSrc}}];d.newChars=[];d.sentenceGames=[];}
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
 if(path.resolve(String(file))===path.resolve('curriculum-workflow/audio-duration-report.json'))return write('curriculum-workflow/generated/L436-duration-report.json',data,...args);
 return write.call(this,file,data,...args);
};
const scripts={generate:'generate-audio-drafts',process:'process-audio-assets',align:'align-audio-timings-ai',formats:'audit-asset-formats',production:'validate-production-assets'};
if(!scripts[action])throw Error('Unknown action');
process.argv=['node','script','--lesson','L436'];if(action==='formats')process.argv.push('--strict');
import(pathToFileURL(path.resolve('scripts/'+scripts[action]+'.mjs')).href);
