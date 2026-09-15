// Remove only measured trailing silence; preserve all speech and 180 ms decay margin.
const fs = require("node:fs"), cp = require("node:child_process");
const ffmpeg = require("@ffmpeg-installer/ffmpeg").path;
const ends = {"L374-S01":2.54946,"L374-S02":2.81283,"L374-S03":2.39161,"L374-S04":3.17150,"L374-S05":3.11508,"L374-G02-prefix":2.25832,"L374-G05-wrong-one":3.29642,"L374-G05-wrong-two":3.48229};
fs.mkdirSync("tmp/L374/pre-tail-trim", {recursive:true});
for (const [id, end] of Object.entries(ends)) {
  const file = "public/assets/lessons/L374/audio/"+id+".m4a";
  const backup = "tmp/L374/pre-tail-trim/"+id+".m4a";
  if (!fs.existsSync(backup)) fs.copyFileSync(file, backup);
  cp.execFileSync(ffmpeg, ["-y","-v","error","-i",backup,"-t",String(end+0.18),"-c","copy",file]);
  console.log(id+": trailing silence only; speech end "+end+" s, retained margin 180 ms");
}
