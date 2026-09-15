const fs=require("node:fs"),cp=require("node:child_process"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const ffmpeg=require("@ffmpeg-installer/ffmpeg").path,probe=require("@ffprobe-installer/ffprobe").path;
const dp="curriculum-workflow/drafts/L370-draft.json",rp="curriculum-workflow/lesson-requests/L370.json";
const d=JSON.parse(fs.readFileSync(dp)),r=JSON.parse(fs.readFileSync(rp));
const packet=fs.readFileSync("curriculum-workflow/generated/L370-generation-packet.md","utf8");
const embedded=packet.match(/## Final Aligned Draft\s+```json\s*([\s\S]*?)```/);
assert(embedded,"Final packet draft required");assert.deepEqual(JSON.parse(embedded[1]),d);
assert.equal(d.packageStatus,"asset-complete-package");assert.equal(r.packageStatus,d.packageStatus);
const han=s=>[...s].filter(c=>/\p{Script=Han}/u.test(c));
const base=JSON.parse(cp.execFileSync("git",["show","95ca55f7:src/curriculum/sample-lessons.json"],{maxBuffer:32e6}));
const allowed=[...new Set(base.lessons.flatMap(l=>l.newChars).concat(["朋","友"]))];
assert.equal(allowed.length,374);assert.deepEqual(r.generationConstraints.allowedChars,allowed);
for(const k of ["title","newChars","zhuyin","charAudio","dependsOnLessons","provisionalLearnedChars"])assert.deepEqual(d[k],r[k],k);
const audio=new Map(),coverage={};
for(const s of d.sentences){
 const a=r.approvedSentences.find(a=>a.id===s.id);
 for(const k of ["text","spokenText","focusChar","displayLines","imageNotes"])assert.deepEqual(s[k],a[k],s.id+" "+k);
 assert.equal(s.displayLines.join(""),s.text);assert(s.displayLines.every(l=>[...l].length<=6));
 assert.equal(han(s.text).join(""),s.spokenText);assert(han(s.text).includes(s.focusChar));assert(han(s.text).every(c=>allowed.includes(c)));
 audio.set(s.audio.src,{...s.audio,text:s.spokenText});
}
for(const w of ["朋友","朋","友","情","感","謝","吧","但"])coverage[w]=d.sentences.reduce((n,s)=>n+s.text.split(w).length-1,0);
assert.deepEqual(coverage,{"朋友":4,"朋":4,"友":4,"情":2,"感":2,"謝":2,"吧":1,"但":1});
assert.deepEqual(d.sentenceGames,r.stage4Plan);
assert.deepEqual(d.sentenceGames.map(g=>g.type),["find-character","teach-character","missing-character","partial-order","choose-pronunciation"]);
assert.equal(new Set(d.sentenceGames.map(g=>g.sentenceId)).size,5);
assert.deepEqual(d.sentenceGames.slice(0,3).map(g=>g.targetChar),["朋","友","朋"]);
for(const g of d.sentenceGames){
 const s=d.sentences.find(s=>s.id===g.sentenceId),h=han(s.text);
 if(g.targetCharIndex!==undefined)assert.equal(h[g.targetCharIndex],g.targetChar,g.id);
 for(const i of g.missingIndexes??[])assert(i>=0&&i<h.length);
 for(const o of g.options??[]){
  assert(o.id);assert.equal(typeof o.correct,"boolean");assert(han(o.text).every(c=>allowed.includes(c)));
  if(g.type==="partial-order"){assert.equal(han(o.text).length,1);assert.equal(h[g.missingIndexes[o.correctOrder]],o.text);}
  if(g.type==="missing-character")assert.equal(han(o.text).length,1);
  if(g.type==="choose-pronunciation"){assert.equal(han(o.text).length,h.length);assert.equal(han(o.text).join(""),o.spokenText);if(!o.correct){const m=d.stage4AudioAlignment[g.id+"-"+o.id];assert.equal(m.spokenText,o.spokenText);audio.set(o.audioSrc,{...m,text:o.spokenText});}}
 }
 if(g.teachAudio)for(const part of ["prefix","suffix"]){
  const expected=(part==="prefix"?h.slice(0,g.targetCharIndex):h.slice(g.targetCharIndex+1)).join("");
  assert.equal(g.teachAudio[part+"Text"],expected);const m=d.stage4AudioAlignment[g.id+"-"+part];
  assert.deepEqual(g.teachAudio[part+"Audio"],m);audio.set(g.teachAudio[part+"Src"],{...m,text:expected});
 }
}
for(const c of d.newChars)audio.set(d.charAudio[c],{character:true});
const out={unit:"L370",coverage,allowed:allowed.length,audio:[],images:[]};
for(const [src,m]of audio){
 const p="public"+src,b=fs.readFileSync(p),info=JSON.parse(cp.execFileSync(probe,["-v","error","-show_streams","-show_format","-of","json",p]));
 const a=info.streams[0],dur=Math.round(Number(info.format.duration)*1000);
 assert.equal(a.codec_name,"aac");assert.equal(a.sample_rate,"44100");assert.equal(a.channels,1);
 const v=cp.spawnSync(ffmpeg,["-i",p,"-af","volumedetect","-f","null","-"],{encoding:"utf8"});assert.equal(v.status,0);
 const mean=Number(v.stderr.match(/mean_volume:\s*([-\d.]+)/)[1]),max=Number(v.stderr.match(/max_volume:\s*([-\d.]+)/)[1]);assert(mean>=-28&&max>=-12,p+" volume");
 if(!m.character){assert.equal(m.charTimings.length,han(m.text).length);assert(Math.abs(m.durationMs-dur)<=30);for(const [i,t]of m.charTimings.entries()){assert.equal(i,t.charIndex);assert(t.endMs>t.startMs&&t.endMs<=dur&&t.startMs>=0);assert(t.endMs-t.startMs>=80);if(i)assert(t.startMs>=m.charTimings[i-1].endMs);}}
 out.audio.push({src,bytes:b.length,durationMs:dur,meanDb:mean,maxDb:max,sha256:crypto.createHash("sha256").update(b).digest("hex")});
}
const vols=d.sentenceGames[4].options.map(o=>out.audio.find(a=>a.src===o.audioSrc).meanDb);
out.g05VolumeSpreadDb=Math.max(...vols)-Math.min(...vols);assert(out.g05VolumeSpreadDb<=3);
for(const s of d.sentences){const b=fs.readFileSync("public"+s.imageSrc);assert.equal(b.toString("ascii",8,12),"WEBP");assert(b.length<=250*1024);const p=JSON.parse(cp.execFileSync(probe,["-v","error","-show_streams","-of","json","public"+s.imageSrc])).streams[0];assert.equal(p.width,1024);assert.equal(p.height,1024);out.images.push({src:s.imageSrc,bytes:b.length,sha256:crypto.createHash("sha256").update(b).digest("hex")});}
for(const a of JSON.parse(fs.readFileSync("curriculum-workflow/generated/L370-teacher-audio-review.json")).assets)assert.equal(out.audio.find(x=>x.src===a.audio.src).sha256,a.sha256);
out.imageBytes=out.images.reduce((n,x)=>n+x.bytes,0);out.audioBytes=out.audio.reduce((n,x)=>n+x.bytes,0);out.totalBytes=out.imageBytes+out.audioBytes;assert(out.totalBytes<2.5*1024*1024);out.status="PASS";
fs.writeFileSync("curriculum-workflow/generated/L370-technical-qa.json",JSON.stringify(out,null,2)+"\n");console.log(JSON.stringify(out,null,2));
