// Review-specific read-only intake; upstream check-package-intake only accepts L###.
const cp=require('child_process'),assert=require('assert/strict');const ref=process.argv[2]||'HEAD';
const git=(...a)=>cp.execFileSync('git',a,{encoding:'utf8',maxBuffer:64000000}),read=p=>git('show',`${ref}:${p}`),json=p=>JSON.parse(read(p));
const h=t=>[...t].filter(c=>/\p{Script=Han}/u.test(c));const registry=read('docs/PARALLEL_LESSON_REGISTRY.md');
for(const u of ['R043','R044']){
 const row=registry.split('\n').find(l=>l.startsWith('| '+u+' |'));assert(row && row.split('|')[3].trim()==='dependency-blocked-asset-complete');
 const d=json(`curriculum-workflow/drafts/${u}-draft.json`),r=json(`curriculum-workflow/review-requests/${u}.json`),packet=read(`curriculum-workflow/generated/${u}-generation-packet.md`);
 const block=/\b(?:partial-package|needs-rework|FAIL(?:ED)?|unresolved)\b|Do not integrate|NOT COMPLETED/i;
 assert(!block.test(JSON.stringify(d)+JSON.stringify(r)+packet+row));assert.equal(d.packageStatus,'dependency-blocked-asset-complete');assert.equal(r.packageStatus,d.packageStatus);assert.equal(d.afterLessonOrder,360);assert.deepEqual(d.targetLessonRange,{startOrder:331,endOrder:360});assert.equal(d.sentences.length,5);
 assert.deepEqual(JSON.parse(packet.split('## Full Final Draft JSON')[1].match(/```json\s*([\s\S]*?)```/)[1]),d);
 const files=git('ls-tree','-r','--name-only',ref,`public/assets/reviews/${u}`).trim().split('\n');assert.equal(files.filter(f=>f.endsWith('.webp')).length,5);assert.equal(files.filter(f=>f.endsWith('.m4a')).length,9);
 const exists=src=>assert(files.includes('public'+src),`Missing ${src}`);
 const timing=(a,text)=>{exists(a.src);assert.equal(a.charTimings.length,h(text).length);a.charTimings.forEach((t,i)=>{assert.equal(t.charIndex,i);assert(t.startMs>=0&&t.endMs<=a.durationMs);assert(t.endMs-t.startMs>=80&&t.endMs-t.startMs<=900);if(i)assert(t.startMs>=a.charTimings[i-1].endMs)});assert(a.durationMs-a.charTimings.at(-1).endMs<=300)};
 for(const s of d.sentences){exists(s.imageSrc);timing(s.audio,s.spokenText);const q=r.approvedSentences.find(q=>q.id===s.id);for(const k of ['text','spokenText','focusChar','displayLines','imageNotes']){assert.deepEqual(q[k],s[k])};assert.equal(s.displayLines.join(''),s.text)}
 assert.deepEqual(d.sentenceGames.map(g=>g.type),['find-character','teach-character','missing-character','partial-order','choose-pronunciation']);assert.equal(new Set(d.sentenceGames.map(g=>g.sentenceId)).size,5);assert.deepEqual(r.sentenceGames,d.sentenceGames);
 for(const g of d.sentenceGames){const s=d.sentences.find(s=>s.id===g.sentenceId),chars=h(s.text);if(g.targetCharIndex!==undefined)assert.equal(chars[g.targetCharIndex],g.targetChar);if(g.teachAudio)for(const part of ['prefix','suffix'])timing(g.teachAudio[part+'Audio'],g.teachAudio[part+'Text']);if(g.type==='choose-pronunciation')for(const o of g.options)timing(o.audio,o.text);if(g.type==='partial-order')for(const o of g.options)assert.equal(o.text,chars[g.missingIndexes[o.correctOrder]])}
 console.log(`${u} @ ${ref}: PASS review package intake (5 WebP / 9 M4A, status, packet/request agreement, timings, Stage 4).`);
}
