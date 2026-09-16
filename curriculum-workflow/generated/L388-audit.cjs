const fs=require('node:fs'),cp=require('node:child_process'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const ffmpeg=require('@ffmpeg-installer/ffmpeg').path,probe=require('@ffprobe-installer/ffprobe').path;
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const d=read('curriculum-workflow/drafts/L388-draft.json'),r=read('curriculum-workflow/lesson-requests/L388.json');
const han=s=>[...s].filter(c=>/\p{Script=Han}/u.test(c));
const base=JSON.parse(cp.execFileSync('git',['show','7fcef325b37f13fc68fe950bffd7fea8e9db6108:src/curriculum/sample-lessons.json'],{maxBuffer:32e6}));
const allowed=[...new Set(base.lessons.flatMap(l=>l.newChars).concat(['信','寫','字','名','第','念']))];
assert.equal(allowed.length,385);assert.deepEqual(r.allowedChars,allowed);
for(const k of ['title','newChars','zhuyin','charAudio','dependsOnLessons','provisionalLearnedChars'])assert.deepEqual(d[k],r[k],k);
const audio=new Map(),coverage={};
for(const s of d.sentences){
 const a=r.approvedSentences.find(a=>a.id===s.id);
 for(const k of ['text','spokenText','focusChar','displayLines','imageNotes'])assert.deepEqual(s[k],a[k],s.id+' '+k);
 assert.equal(s.displayLines.join(''),s.text);assert(s.displayLines.every(l=>[...l].length<=6));
 assert(han(s.text).length<=12);assert.equal(han(s.text).join(''),s.spokenText);assert(han(s.text).includes(s.focusChar));assert(han(s.text).every(c=>allowed.includes(c)));
 audio.set(s.audio.src,{...s.audio,text:s.spokenText});
}
for(const w of ['念','第','名','字','寫','信'])coverage[w]=d.sentences.reduce((n,s)=>n+s.text.split(w).length-1,0);
assert.deepEqual(coverage,{'念':3,'第':2,'名':3,'字':3,'寫':1,'信':1});
assert.deepEqual(d.sentenceGames.map(g=>g.type),['find-character','teach-character','missing-character','partial-order','choose-pronunciation']);
assert.deepEqual(d.sentenceGames.map(g=>g.sentenceId),['L388-S01','L388-S03','L388-S04','L388-S02','L388-S05']);
assert.deepEqual(d.sentenceGames.map(g=>g.targetCharIndex),[2,7,2,0,3]);
assert.deepEqual(d.sentenceGames[3].missingIndexes,[6,7,8,9]);
assert.deepEqual(d.dependsOnLessons,['L383','L384','L385','L386','L387']);
assert.deepEqual(d.provisionalLearnedChars,['信','寫','字','名','第']);
const formal=new Set(base.lessons.flatMap(l=>l.newChars));
const used=han(d.sentences.map(s=>s.text).concat(d.sentenceGames.flatMap(g=>(g.options??[]).map(o=>o.text))).join(''));
assert.deepEqual([...new Set(used.filter(c=>!formal.has(c)&&!d.newChars.includes(c)))].sort(),[...d.provisionalLearnedChars].sort());
for(const g of d.sentenceGames){
 const h=han(d.sentences.find(s=>s.id===g.sentenceId).text);assert.equal(h[g.targetCharIndex],g.targetChar,g.id);
 for(const o of g.options??[]){
  assert(o.id);assert.equal(typeof o.correct,'boolean');assert(han(o.text).every(c=>allowed.includes(c)));
  if(['partial-order','missing-character'].includes(g.type))assert.equal(han(o.text).length,1);
  if(g.type==='partial-order')assert.equal(h[g.missingIndexes[o.correctOrder]],o.text);
  if(g.type==='choose-pronunciation'){
   assert.equal(han(o.text).length,10);assert.equal(han(o.text).join(''),o.spokenText);
   assert.deepEqual(o.audio,o.correct?d.sentences.find(s=>s.id===g.sentenceId).audio:d.stage4AudioAlignment[g.id+'-'+o.id]);
   if(!o.correct){const m=d.stage4AudioAlignment[g.id+'-'+o.id];assert.equal(m.spokenText,o.spokenText);audio.set(o.audioSrc,{...m,text:o.spokenText});}
  }
 }
 if(g.teachAudio)for(const part of ['prefix','suffix']){
  const expected=(part==='prefix'?h.slice(0,g.targetCharIndex):h.slice(g.targetCharIndex+1)).join('');
  assert.equal(g.teachAudio[part+'Text'],expected);const m=d.stage4AudioAlignment[g.id+'-'+part];
  assert.deepEqual(g.teachAudio[part+'Audio'],m);audio.set(g.teachAudio[part+'Src'],{...m,text:expected});
 }
}
const g3=d.sentenceGames[2];assert.deepEqual(g3.options.map(o=>o.text),['念','想','說']);assert.equal(g3.options.filter(o=>o.correct).length,1);assert.deepEqual(g3.missingIndexes,[2]);
for(const c of d.newChars)audio.set(d.charAudio[c],{character:true});assert.equal(audio.size,10);
const out={unit:'L388',coverage,allowed:allowed.length,audio:[],images:[]};
for(const [src,m]of audio){
 const p='public'+src,b=fs.readFileSync(p),info=JSON.parse(cp.execFileSync(probe,['-v','error','-show_streams','-show_format','-of','json',p]));
 const a=info.streams[0],dur=Math.round(Number(info.format.duration)*1000);
 assert(src.endsWith('.m4a'));assert.equal(a.codec_name,'aac');assert.equal(a.sample_rate,'44100');assert.equal(a.channels,1);
 const v=cp.spawnSync(ffmpeg,['-i',p,'-af','volumedetect','-f','null','-'],{encoding:'utf8'});assert.equal(v.status,0);
 const mean=Number(v.stderr.match(/mean_volume:\s*([-\d.]+)/)[1]),max=Number(v.stderr.match(/max_volume:\s*([-\d.]+)/)[1]);
 if(m.character){assert(dur>=700&&dur<=3500&&max>=-35);}else{
  assert(mean>=-28&&max>=-12,p+' volume');assert.equal(m.charTimings.length,han(m.text).length);assert(Math.abs(m.durationMs-dur)<=30);
  for(const [i,t]of m.charTimings.entries()){assert.equal(i,t.charIndex);assert(t.endMs>t.startMs&&t.endMs<=dur&&t.startMs>=0);assert(t.endMs-t.startMs>=20);if(i)assert(t.startMs>=m.charTimings[i-1].endMs);}
 }
 out.audio.push({src,bytes:b.length,durationMs:dur,meanDb:mean,maxDb:max,sha256:crypto.createHash('sha256').update(b).digest('hex')});
}
const vols=d.sentenceGames[4].options.map(o=>out.audio.find(a=>a.src===o.audioSrc).meanDb);
out.g05VolumeSpreadDb=Math.max(...vols)-Math.min(...vols);assert(out.g05VolumeSpreadDb<=3);
for(const s of d.sentences){const b=fs.readFileSync('public'+s.imageSrc);assert.equal(b.toString('ascii',8,12),'WEBP');assert(b.length<=250*1024);const p=JSON.parse(cp.execFileSync(probe,['-v','error','-show_streams','-of','json','public'+s.imageSrc])).streams[0];assert.equal(p.width,1024);assert.equal(p.height,1024);out.images.push({src:s.imageSrc,bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex')});}
if(process.argv.includes('--final')){
 assert.deepEqual(d.sentenceGames,r.stage4Plan);assert.equal(r.packageStatus,d.packageStatus);
 assert(['asset-complete-package','dependency-blocked-asset-complete'].includes(d.packageStatus));
 const packet=fs.readFileSync('curriculum-workflow/generated/L388-generation-packet.md','utf8');
 const embedded=packet.match(/## Final Aligned Draft\s+```json\s*([\s\S]*?)```/);assert(embedded);assert.deepEqual(JSON.parse(embedded[1]),d);
}
out.imageBytes=out.images.reduce((n,x)=>n+x.bytes,0);out.audioBytes=out.audio.reduce((n,x)=>n+x.bytes,0);out.totalBytes=out.imageBytes+out.audioBytes;assert(out.totalBytes<2.5*1024*1024);out.status='PASS';
fs.writeFileSync('curriculum-workflow/generated/L388-technical-qa.json',JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify(out,null,2));
