const fs=require("node:fs"),cp=require("node:child_process"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const ffmpeg=require("@ffmpeg-installer/ffmpeg").path,ffprobe=require("@ffprobe-installer/ffprobe").path;
const draft=JSON.parse(fs.readFileSync("curriculum-workflow/drafts/L374-draft.json","utf8"));
const request=JSON.parse(fs.readFileSync("curriculum-workflow/lesson-requests/L374.json","utf8"));
const han=s=>[...s].filter(c=>/\p{Script=Han}/u.test(c));
const base=JSON.parse(cp.execFileSync("git",["show","3317753c:src/curriculum/sample-lessons.json"],{encoding:"utf8",maxBuffer:32*1024*1024}));
const allowed=[...new Set([...base.lessons.flatMap(l=>l.newChars),"朋","友","親","交","通","往"])];
assert.deepEqual(request.generationConstraints.allowedChars,allowed);
assert.equal(allowed.length,378);
for(const key of ["title","newChars","zhuyin","charAudio","dependsOnLessons","provisionalLearnedChars"])assert.deepEqual(draft[key],request[key],key);
const audio=new Map(),images=[],coverage={};
for(const s of draft.sentences){
  const approved=request.approvedSentences.find(a=>a.id===s.id);
  for(const key of ["text","spokenText","focusChar","displayLines","imageNotes"])assert.deepEqual(s[key],approved[key],s.id+" "+key);
  assert.equal(s.displayLines.join(""),s.text);
  assert(s.displayLines.every(l=>[...l].length<=6));
  assert.equal(han(s.text).join(""),s.spokenText);
  assert(han(s.text).includes(s.focusChar));
  assert(han(s.text+s.focusChar).every(c=>allowed.includes(c)));
  audio.set(s.audio.src,{...s.audio,text:s.spokenText});
  images.push(s.imageSrc);
}
for(const word of ["往","通","交","親","朋友","朋","友","情"])coverage[word]=draft.sentences.reduce((n,s)=>n+s.text.split(word).length-1,0);
assert.deepEqual(coverage,{"往":3,"通":2,"交":2,"親":2,"朋友":1,"朋":1,"友":2,"情":1});
assert.deepEqual(draft.sentenceGames,request.stage4Plan);
assert.deepEqual(draft.sentenceGames.map(g=>g.type),["find-character","teach-character","missing-character","partial-order","choose-pronunciation"]);
assert.equal(new Set(draft.sentenceGames.map(g=>g.sentenceId)).size,5);
for(const game of draft.sentenceGames){
  const s=draft.sentences.find(s=>s.id===game.sentenceId),chars=han(s.text);
  if(game.targetCharIndex!==undefined)assert.equal(chars[game.targetCharIndex],game.targetChar,game.id);
  for(const option of game.options??[]){
    assert(option.id);
    assert(han(option.text).every(c=>allowed.includes(c)));
    if(game.type==="partial-order"){assert.equal(han(option.text).length,1);assert.equal(chars[game.missingIndexes[option.correctOrder]],option.text);}
    if(game.type==="missing-character")assert.equal(han(option.text).length,1);
    if(game.type==="choose-pronunciation"){
      assert.equal(han(option.text).length,chars.length);
      assert.equal(han(option.text).join(""),option.spokenText);
      if(!option.correct){const metadata=draft.stage4AudioAlignment[game.id+"-"+option.id];assert.equal(metadata.spokenText,option.spokenText);audio.set(option.audioSrc,{...metadata,text:option.spokenText});}
    }
  }
  if(game.teachAudio){
    assert.equal(game.teachAudio.prefixText,chars.slice(0,game.targetCharIndex).join(""));
    assert.equal(chars.slice(game.targetCharIndex+1).join(""),"");
    assert(!game.teachAudio.suffixSrc);
    const metadata=draft.stage4AudioAlignment[game.id+"-prefix"];
    assert.equal(metadata.spokenText,game.teachAudio.prefixText);
    audio.set(game.teachAudio.prefixSrc,{...metadata,text:game.teachAudio.prefixText});
  }
}
audio.set(draft.charAudio["往"],{character:true});
const report={unit:"L374",allowed:allowed.length,coverage,audio:[],images:[]};
for(const [src,metadata] of audio){
  const p="public"+src,buffer=fs.readFileSync(p);
  const probe=JSON.parse(cp.execFileSync(ffprobe,["-v","error","-show_streams","-show_format","-of","json",p],{encoding:"utf8"}));
  const stream=probe.streams.find(s=>s.codec_type==="audio"),durationMs=Math.round(Number(probe.format.duration)*1000);
  assert.equal(stream.codec_name,"aac");assert.equal(stream.sample_rate,"44100");assert.equal(stream.channels,1);
  const decoded=cp.spawnSync(ffmpeg,["-v","info","-i",p,"-af","volumedetect","-f","null","-"],{encoding:"utf8"});
  assert.equal(decoded.status,0,p);
  const mean=Number(decoded.stderr.match(/mean_volume:\s*([-\d.]+)/)[1]),max=Number(decoded.stderr.match(/max_volume:\s*([-\d.]+)/)[1]);
  assert(mean>=-28&&max>=-12,p+" volume");
  if(metadata.character)assert(durationMs>=700&&durationMs<=3500);
  else {
    assert.equal(metadata.charTimings.length,han(metadata.text).length);
    assert(Math.abs(metadata.durationMs-durationMs)<=25);
    for(const [i,t] of metadata.charTimings.entries()){
      assert.equal(t.charIndex,i);assert(t.startMs>=0&&t.endMs<=durationMs);
      assert(t.endMs-t.startMs>=80&&t.endMs-t.startMs<=900,p+" span "+i);
      if(i)assert(t.startMs>=metadata.charTimings[i-1].endMs);
    }
    assert(durationMs-metadata.charTimings.at(-1).endMs<=300,p+" tail");
  }
  report.audio.push({src,bytes:buffer.length,durationMs,meanDb:mean,maxDb:max,sha256:crypto.createHash("sha256").update(buffer).digest("hex")});
}
const options=draft.sentenceGames[4].options.map(o=>report.audio.find(a=>a.src===o.audioSrc).meanDb);
report.g05VolumeSpreadDb=Math.max(...options)-Math.min(...options);
assert(report.g05VolumeSpreadDb<=3);
if(!process.argv.includes("--audio-only"))for(const src of images){
  const p="public"+src,b=fs.readFileSync(p);
  assert.equal(b.toString("ascii",0,4),"RIFF");assert.equal(b.toString("ascii",8,12),"WEBP");assert(b.length<=400*1024);
  const info=JSON.parse(cp.execFileSync(ffprobe,["-v","error","-show_streams","-of","json",p],{encoding:"utf8"})).streams[0];
  assert.equal(info.width,info.height);assert(info.width<=1024);
  report.images.push({src,bytes:b.length,width:info.width,height:info.height,sha256:crypto.createHash("sha256").update(b).digest("hex")});
}
report.imageBytes=report.images.reduce((n,i)=>n+i.bytes,0);report.audioBytes=report.audio.reduce((n,i)=>n+i.bytes,0);report.totalBytes=report.imageBytes+report.audioBytes;
assert(report.totalBytes<=2.5*1024*1024);
report.status="PASS";
fs.writeFileSync("curriculum-workflow/generated/L374-technical-qa.json",JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify({status:report.status,coverage,allowed:allowed.length,audio:report.audio.length,images:report.images.length,g05VolumeSpreadDb:report.g05VolumeSpreadDb,totalBytes:report.totalBytes},null,2));
