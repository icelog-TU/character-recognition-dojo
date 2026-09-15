const fs=require('fs'),path=require('path'),cp=require('child_process');
const units=['R043','R044'].map(id=>JSON.parse(fs.readFileSync(`curriculum-workflow/drafts/${id}-draft.json`,'utf8')));
const mode=process.argv[2],root=path.resolve('src/curriculum/sample-lessons.json'),read=fs.readFileSync;
if(mode==='production'||mode==='formats'||mode==='curriculum'){
 let virtual={lessons:[],reviewLessons:units};
 if(mode==='curriculum'){
  virtual=JSON.parse(read(root,'utf8'));virtual.reviewLessons.push(...units);
  if(!virtual.lessons.some(l=>l.id==='L360'))virtual.lessons.push(JSON.parse(process.env.L360_DRAFT_PATH?read(process.env.L360_DRAFT_PATH,'utf8'):cp.execFileSync('git',['show',`${process.env.L360_PACKAGE_REF||'5757947265c66cfe200658143d1119bd06d0dcae'}:curriculum-workflow/drafts/L360-draft.json`],{encoding:'utf8'})));
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
 const expectedCoverage=[...main.lessons.filter(l=>l.order>=331&&l.order<=359).flatMap(l=>l.newChars),'奇'];
 if(JSON.stringify(units[0].requiredCoverageChars)!==JSON.stringify(expectedCoverage)||JSON.stringify(units[1].requiredCoverageChars)!==JSON.stringify(expectedCoverage)||Object.values(report.coverage).some(n=>n<1))report.structureErrors.push('Pair coverage does not match all L331-L360 introduced characters');
 for(const u of units){
  if(u.packageStatus!=='dependency-blocked-asset-complete')report.structureErrors.push(`${u.id} package status`);
  if(u.afterLessonOrder!==360||u.targetLessonRange.startOrder!==331||u.targetLessonRange.endOrder!==360)report.structureErrors.push(`${u.id} milestone/range`);
  const evidence=JSON.parse(read(`curriculum-workflow/generated/${u.id}-rescue-audio-qa.json`,'utf8'));
  const packet=read(`curriculum-workflow/generated/${u.id}-generation-packet.md`,'utf8');
  if(JSON.stringify(JSON.parse(packet.split('## Full Final Draft JSON')[1].match(/```json\s*([\s\S]*?)```/)[1]))!==JSON.stringify(u))report.structureErrors.push(`${u.id} packet/draft mismatch`);
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
   const e=evidence.audio[a.id];
   if(!e||!e.textMatch||e.after.tailMs>300)report.timingFindings.push(`${a.id} transcript or measured acoustic tail`);
   if(require('crypto').createHash('sha256').update(read(path.join('public',a.src))).digest('hex')!==e.sha256)report.structureErrors.push(`${a.id} evidence hash mismatch`);
   const h=han(a.spokenText);if(a.charTimings.length!==h.length)report.structureErrors.push(`${a.id} timing count`);
   a.charTimings.forEach((t,i)=>{const span=t.endMs-t.startMs;if(t.charIndex!==i||t.startMs<0||t.endMs>a.durationMs||span<=0)report.structureErrors.push(`${a.id} timing bounds`);if(span<80||span>900)report.timingFindings.push(`${a.id} ${h[i]}[${i}] ${t.startMs}-${t.endMs} (${span}ms)`);if(i&&t.startMs<a.charTimings[i-1].endMs)report.timingFindings.push(`${a.id} overlap at ${i}`)});
   const tail=a.durationMs-a.charTimings.at(-1).endMs;if(tail>300)report.timingFindings.push(`${a.id} measured duration minus last AI end = ${tail}ms; listen/trim or repair alignment`);
   const file=path.join('public',a.src);const r=cp.spawnSync(require('@ffmpeg-installer/ffmpeg').path,['-v','error','-i',file,'-f','null','-'],{encoding:'utf8'});report.decode.push({id:a.id,pass:r.status===0,error:r.stderr.trim()});
  }
  let size=0;for(const folder of ['images','audio'])for(const f of fs.readdirSync(`public/assets/reviews/${u.id}/${folder}`))size+=fs.statSync(`public/assets/reviews/${u.id}/${folder}/${f}`).size;report.sizes[u.id]=size;
 }
 fs.writeFileSync('curriculum-workflow/generated/R043-R044-technical-report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(report.structureErrors.length||report.decode.some(x=>!x.pass)||report.timingFindings.length)process.exitCode=1;
}
