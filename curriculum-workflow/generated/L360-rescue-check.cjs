// Lesson-local adapter: exercise repository validators without writing shared curriculum.
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process'),assert=require('node:assert/strict');
const draft=JSON.parse(fs.readFileSync('curriculum-workflow/drafts/L360-draft.json','utf8'));
const mode=process.argv[2]||'technical';
if(['curriculum','production','formats'].includes(mode)){
 const read=fs.readFileSync,root=path.resolve('src/curriculum/sample-lessons.json');
 const virtual=mode==='curriculum'?JSON.parse(read(root,'utf8')):{version:1,lessons:[],reviewLessons:[]};
 if(virtual.lessons.some(x=>x.id==='L360'))throw Error('L360 already exists in base; recheck rescue context');
 virtual.lessons.push(draft);
 fs.readFileSync=function(file,...args){return path.resolve(String(file))===root?JSON.stringify(virtual):read.call(this,file,...args)};
 process.argv=['node','script','--strict'];
 import(require('node:url').pathToFileURL(path.resolve({curriculum:'scripts/validate-curriculum.mjs',production:'scripts/validate-production-assets.mjs',formats:'scripts/audit-asset-formats.mjs'}[mode])).href);
}else{
 const han=t=>[...t].filter(c=>/\p{Script=Han}/u.test(c));
 const e=JSON.parse(fs.readFileSync('curriculum-workflow/generated/L360-rescue-audio-qa.json','utf8'));
 const audios=[...draft.sentences.map(s=>({id:s.id,text:s.spokenText,...s.audio})),...['prefix','suffix'].map(p=>({id:'L360-G02-'+p,text:draft.sentenceGames[1].teachAudio[p+'Text'],...draft.sentenceGames[1].teachAudio[p+'Audio']})),...draft.sentenceGames[4].options.filter(o=>!o.correct).map(o=>({id:'L360-G05-'+o.id,text:o.text,...o.audio}))];
 for(const a of audios){assert.equal(a.charTimings.length,han(a.text).length,a.id);a.charTimings.forEach((t,i)=>{assert.equal(t.charIndex,i);assert(t.startMs>=0&&t.endMs<=a.durationMs);assert(t.endMs-t.startMs>=80&&t.endMs-t.startMs<=900);if(i)assert(t.startMs>=a.charTimings[i-1].endMs);});assert(a.durationMs-a.charTimings.at(-1).endMs<=300);assert(e.audio[a.id].after.tailMs<=300);assert(e.audio[a.id].textMatch);const file='public'+a.src;assert.equal(require('node:crypto').createHash('sha256').update(fs.readFileSync(file)).digest('hex'),e.audio[a.id].sha256);cp.execFileSync(require('@ffmpeg-installer/ffmpeg').path,['-v','error','-i',file,'-f','null','-']);}
 const packet=fs.readFileSync('curriculum-workflow/generated/L360-generation-packet.md','utf8');assert.deepEqual(JSON.parse(packet.split('## Full Final Draft JSON')[1].match(/```json\s*([\s\S]*?)```/)[1]),draft);
 const old=JSON.parse(cp.execFileSync('git',['show',e.sourcePackageSha+':curriculum-workflow/drafts/L360-draft.json'],{encoding:'utf8'}));
 for(let i=0;i<draft.sentences.length;i++){const {audio,...a}=draft.sentences[i],{audio:b,...before}=old.sentences[i];assert.deepEqual(a,before);assert.deepEqual(fs.readFileSync('public'+a.imageSrc),cp.execFileSync('git',['show',e.sourcePackageSha+':public'+a.imageSrc]));}
 assert.equal(draft.packageStatus,'asset-complete-package');console.log('PASS L360: 9 final audio hashes, decode, timing ranges/spans/order/no overlap/tails; final packet=draft; approved sentence fields and images preserved.');
}
