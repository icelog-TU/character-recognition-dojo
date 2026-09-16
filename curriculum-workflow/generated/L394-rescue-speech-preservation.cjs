const fs=require('fs'),cp=require('child_process'),crypto=require('crypto');
const ids=['L394-G02-suffix','L394-S05','L394-G05-wrong-two'];
const files=ids.map(id=>'public/assets/lessons/L394/audio/'+id+'.m4a');
const saved=files.map(f=>fs.readFileSync(f));
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const fp=require('@ffprobe-installer/ffprobe').path;
const packets=f=>JSON.parse(cp.execFileSync(fp,['-v','error','-show_packets','-show_data_hash','sha256','-of','json',f],{maxBuffer:8e6})).packets.map(p=>[p.pts,p.data_hash]);
const finalPackets=files.map(packets),rows=[];
try{
 cp.execFileSync(process.execPath,['curriculum-workflow/generated/L394-rescue-pipeline.cjs','L394','process']);
 for(let i=0;i<ids.length;i++){
  const before=fs.readFileSync(files[i]),ps=packets(files[i]);
  const unchanged=JSON.stringify(finalPackets[i])===JSON.stringify(ps.slice(0,finalPackets[i].length));
  if(!unchanged)throw Error(ids[i]+' speech packets changed');
  rows.push({id:ids[i],generatedMp3Sha256:hash(fs.readFileSync('curriculum-workflow/audio-inbox/L394/'+ids[i]+'.mp3')),processedBeforeTrimSha256:hash(before),finalSha256:hash(saved[i]),speechPacketPrefixPreserved:true,retainedPackets:finalPackets[i].length,processedPackets:ps.length});
 }
}finally{for(let i=0;i<files.length;i++)fs.writeFileSync(files[i],saved[i]);}
fs.writeFileSync('curriculum-workflow/generated/L394-rescue-speech-preservation.json',JSON.stringify(rows,null,2)+'\n');console.log(rows);
