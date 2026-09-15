// Run repository media tools on an owned review draft without writing main.
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const read=fs.readFileSync.bind(fs),write=fs.writeFileSync.bind(fs);
const [unit,action,fragment]=process.argv.slice(2);
if(!['R045','R046'].includes(unit))throw Error('Owned review pair only');
const dp=`curriculum-workflow/drafts/${unit}-draft.json`,d=JSON.parse(read(dp,'utf8'));
const target=path.resolve('src/curriculum/sample-lessons.json'),virtual={lessons:[],reviewLessons:[d]};
const han=t=>[...t].filter(c=>/\p{Script=Han}/u.test(c)).join('');
if(action==='generate'){
 const g=d.sentenceGames.find(g=>fragment.startsWith(g.id));
 const text=g?.teachAudio?.[fragment.endsWith('suffix')?'suffixText':'prefixText'];
 if(!text)throw Error('Fragment must come from approved teachAudio');
 d.sentences=[{id:fragment,text,spokenText:han(text),approved:true}];d.sentenceGames=[];
}
if(action==='align')for(const g of d.sentenceGames){
 if(g.teachAudio)for(const p of ['prefix','suffix'])if(g.teachAudio[p+'Src'])d.sentences.push({id:g.id+'-'+p,text:g.teachAudio[p+'Text'],spokenText:han(g.teachAudio[p+'Text']),audio:{src:g.teachAudio[p+'Src']}});
 if(g.type==='choose-pronunciation')for(const o of g.options.filter(o=>!o.correct))d.sentences.push({id:g.id+'-'+o.id,text:o.text,spokenText:han(o.text),audio:{src:o.audioSrc}});
}
const realFetch=globalThis.fetch;
globalThis.fetch=async(url,init)=>{
 let offsetMs=0;
 if(action==='generate'&&String(url).includes('/audio/speech')){
  const b=JSON.parse(init.body);b.model='gpt-4o-mini-tts';b.voice='alloy';b.speed=.9;
  b.instructions='用標準台灣國語清楚朗讀輸入的單一漢字一次。動，讀音ㄉㄨㄥˋ，第四聲。音量清楚，完整發音，尾音不截斷，不加任何其他字。';
  init={...init,body:JSON.stringify(b)};
 }
 if(action==='align'&&String(url).includes('/audio/transcriptions')){
  const name=init.body.get('file').name,s=d.sentences.find(s=>s.id+'.m4a'===name);
  if(name.includes('G02-'))init.body.append('prompt',s.spokenText);
  if(han(s.spokenText).length===1){
   const tmp=path.resolve('../'+s.id+'-analysis-pad.wav');
   cp.execFileSync(require('@ffmpeg-installer/ffmpeg').path,['-y','-v','error','-i',path.join('public',s.audio.src),'-af','adelay=500|500,apad=pad_len=22050',tmp]);
   init.body.set('file',new Blob([read(tmp)],{type:'audio/wav'}),name);offsetMs=500;
  }
 }
 const response=await realFetch(url,init);
 if(action==='align'&&String(url).includes('/audio/transcriptions')&&response.ok){
  const data=await response.json(),id=init.body.get('file').name.replace('.m4a','');
  write(`curriculum-workflow/generated/${id}-rescue-alignment.json`,JSON.stringify({model:'whisper-1',prompt:init.body.get('prompt'),offsetMs,transcript:data},null,2)+'\n');
  if(offsetMs)for(const w of data.words||[]){w.start=Math.max(0,w.start-offsetMs/1000);w.end=Math.max(0,w.end-offsetMs/1000);}
  const map={'欢':'歡','听':'聽','帮':'幫','忙':'忙','点':'點','厅':'廳','车':'車','门':'門','让':'讓','书':'書','长':'長','鸡':'雞','园':'園','里':'裡','经':'經','动':'動','说':'說','话':'話','爱':'愛','谢':'謝','热':'熱','这':'這','条':'條','边':'邊','吗':'嗎','亲':'親','画':'畫','图':'圖','给':'給','惊':'驚','满':'滿','请':'請'};
  const norm=v=>typeof v==='string'?[...v].map(c=>map[c]||c).join(''):Array.isArray(v)?v.map(norm):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,norm(x)])):v;
  return new Response(JSON.stringify(norm(data)),{status:200,headers:{'content-type':'application/json'}});
 }
 return response;
};
fs.readFileSync=function(file,...args){return path.resolve(String(file))===target?JSON.stringify(virtual):read(file,...args);};
fs.writeFileSync=function(file,data,...args){
 if(path.resolve(String(file))===target){const out=JSON.parse(data).reviewLessons[0];if(action==='align'){out.stage4AudioAlignment=Object.fromEntries(out.sentences.filter(s=>!/-S\d\d$/.test(s.id)).map(s=>[s.id,{spokenText:s.spokenText,...s.audio}]));out.sentences=out.sentences.filter(s=>/-S\d\d$/.test(s.id));}return write(dp,JSON.stringify(out,null,2)+'\n');}
 if(path.resolve(String(file))===path.resolve('curriculum-workflow/audio-duration-report.json'))return write(`curriculum-workflow/generated/${unit}-rescue-processing.json`,data,...args);
 return write(file,data,...args);
};
const scripts={generate:'generate-audio-drafts',process:'process-audio-assets',align:'align-audio-timings-ai',production:'validate-production-assets',formats:'audit-asset-formats'};
if(!scripts[action])throw Error('Unknown action');process.argv=['node','script','--lesson',unit];if(action==='formats')process.argv.push('--strict');
import(require('node:url').pathToFileURL(path.resolve('scripts/'+scripts[action]+'.mjs')).href);
