const fs=require('fs'),path=require('path'),cp=require('child_process');
const units=['R043','R044'].map(id=>JSON.parse(fs.readFileSync(`curriculum-workflow/drafts/${id}-draft.json`,'utf8')));
const mode=process.argv[2],root=path.resolve('src/curriculum/sample-lessons.json'),read=fs.readFileSync;
if(mode==='production'||mode==='formats'||mode==='curriculum'){
 let virtual={lessons:[],reviewLessons:units};
 if(mode==='curriculum'){
  virtual=JSON.parse(read(root,'utf8'));virtual.reviewLessons.push(...units);
  for(let n=355;n<=360;n++)virtual.lessons.push(JSON.parse(cp.execFileSync('git',['show',`origin/codex/l${n}-complete-package:curriculum-workflow/drafts/L${n}-draft.json`],{encoding:'utf8'})));
 }
 fs.readFileSync=function(file,...args){return path.resolve(String(file))===root?JSON.stringify(virtual):read.call(this,file,...args)};
 process.argv=['node','script','--strict'];
 import(require('url').pathToFileURL(path.resolve({production:'scripts/validate-production-assets.mjs',formats:'scripts/audit-asset-formats.mjs',curriculum:'scripts/validate-curriculum.mjs'}[mode])).href);
}else{
 const han=t=>[...t].filter(c=>/\p{Script=Han}/u.test(c));
 const report={coverage:{},structureErrors:[],timingFindings:[],decode:[],sizes:{}};
 const main=JSON.parse(read(root,'utf8'));const allowed=new Set([...main.lessons.flatMap(l=>l.newChars),'雞','公','園','物','怪','奇']);
 const all=units.flatMap(u=>u.sentences).map(s=>s.text).join('');
 for(const c of units[0].requiredCoverageChars)report.coverage[c]=han(all).filter(x=>x===c).length;
 for(const u of units){
  for(const s of u.sentences){
   for(const c of han(s.text+s.spokenText+s.focusChar+s.displayLines.join('')))if(!allowed.has(c))report.structureErrors.push(`${s.id} illegal ${c}`);
   if(s.displayLines.join('')!==s.text||han(s.text).join('')!==s.spokenText||han(s.text).length>12)report.structureErrors.push(`${s.id} text/lines`);
  }
  for(const g of u.sentenceGames){const s=u.sentences.find(s=>s.id===g.sentenceId),h=han(s.text);
   if(g.targetCharIndex!==undefined&&h[g.targetCharIndex]!==g.targetChar)report.structureErrors.push(`${g.id} index`);
   if(g.type==='partial-order')for(const o of g.options)if(han(o.text).length!==1||o.text!==h[g.missingIndexes[o.correctOrder]])report.structureErrors.push(`${g.id} cards`);
   for(const o of g.options||[])for(const c of han(o.text))if(!allowed.has(c))report.structureErrors.push(`${g.id} option illegal ${c}`);
  }
  const audios=[...u.sentences.map(s=>({id:s.id,spokenText:s.spokenText,...s.audio})),...Object.entries(u.stage4AudioAlignment).map(([id,a])=>({id,...a}))];
  for(const a of audios){
   const h=han(a.spokenText);if(a.charTimings.length!==h.length)report.structureErrors.push(`${a.id} timing count`);
   a.charTimings.forEach((t,i)=>{const span=t.endMs-t.startMs;if(t.charIndex!==i||t.startMs<0||t.endMs>a.durationMs||span<=0)report.structureErrors.push(`${a.id} timing bounds`);if(span<80||span>900)report.timingFindings.push(`${a.id} ${h[i]}[${i}] ${t.startMs}-${t.endMs} (${span}ms)`);if(i&&t.startMs<a.charTimings[i-1].endMs)report.timingFindings.push(`${a.id} overlap at ${i}`)});
   const tail=a.durationMs-a.charTimings.at(-1).endMs;if(tail>300)report.timingFindings.push(`${a.id} measured duration minus last AI end = ${tail}ms; listen/trim or repair alignment`);
   const file=path.join('public',a.src);const r=cp.spawnSync(require('@ffmpeg-installer/ffmpeg').path,['-v','error','-i',file,'-f','null','-'],{encoding:'utf8'});report.decode.push({id:a.id,pass:r.status===0,error:r.stderr.trim()});
  }
  let size=0;for(const folder of ['images','audio'])for(const f of fs.readdirSync(`public/assets/reviews/${u.id}/${folder}`))size+=fs.statSync(`public/assets/reviews/${u.id}/${folder}/${f}`).size;report.sizes[u.id]=size;
 }
 fs.writeFileSync('curriculum-workflow/generated/R043-R044-technical-report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(report.structureErrors.length||report.decode.some(x=>!x.pass)||report.timingFindings.length)process.exitCode=1;
}
