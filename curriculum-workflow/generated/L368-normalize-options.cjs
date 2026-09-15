// Apply the repository's safety-gain encoder to all G05 choices together.
// The stock processor only reinforces files below -28 dB, causing a threshold discontinuity.
const fs=require('fs'),path=require('path'),vm=require('vm'),{execFileSync,spawnSync}=require('child_process');
const source=fs.readFileSync('scripts/process-audio-assets.mjs','utf8');
let helpers=source.slice(source.indexOf('function volumeStatsDb'),source.indexOf('function publicSrc'));
helpers=helpers.replace('if (stats.mean >= -28 && stats.max >= -12) return { before: stats, gainDb: 0, after: stats };','');
const ctx={fs,execFileSync,spawnSync,ffmpegCommand:require('@ffmpeg-installer/ffmpeg').path};vm.createContext(ctx);vm.runInContext(helpers,ctx);
const d=JSON.parse(fs.readFileSync('curriculum-workflow/drafts/L368-draft.json','utf8'));
const report=d.sentenceGames.find(g=>g.type==='choose-pronunciation').options.map(o=>({id:o.id,src:o.audioSrc,...ctx.reinforceQuietAudio(path.join('public',o.audioSrc))}));
fs.writeFileSync('curriculum-workflow/generated/L368-option-volume.json',JSON.stringify(report,null,2)+'\n');console.log(report);
