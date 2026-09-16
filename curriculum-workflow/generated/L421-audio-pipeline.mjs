import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const cp='src/curriculum/sample-lessons.json',dp='curriculum-workflow/drafts/L421-draft.json';
const original=fs.readFileSync(cp);
const draft=JSON.parse(fs.readFileSync(dp,'utf8'));
const run=(script,args=[])=>execFileSync(process.execPath,[script,...args],{stdio:'inherit'});
const mode=process.argv[2];
try {
 const fixture=structuredClone(draft);
 if(mode==='align'){
  fixture.sentences.push({id:'L421-G02-prefix',text:fixture.sentenceGames[1].teachAudio.prefixText,spokenText:fixture.sentenceGames[1].teachAudio.prefixText,audio:{src:fixture.sentenceGames[1].teachAudio.prefixSrc}});
  for(const o of fixture.sentenceGames[4].options.filter(o=>!o.correct))fixture.sentences.push({id:'L421-G05-'+o.id,text:o.text,spokenText:o.spokenText,audio:{src:o.audioSrc}});
 }
 fs.writeFileSync(cp,JSON.stringify({version:1,lessons:[fixture],reviewLessons:[]},null,2)+'\n');
 if(mode==='generate')run('scripts/generate-audio-drafts.mjs',['--lesson','L421',...process.argv.slice(3)]);
 else if(mode==='process')run('scripts/process-audio-assets.mjs',['--lesson','L421']);
 else if(mode==='align'){
  run('scripts/align-audio-timings-ai.mjs',['--lesson','L421','--evidence-dir','curriculum-workflow/generated/L421-alignment','--text-context']);
  const aligned=JSON.parse(fs.readFileSync(cp,'utf8')).lessons[0];
  draft.sentences=aligned.sentences.slice(0,5);
  draft.sentenceGames[1].teachAudio.prefixAudio={...aligned.sentences[5].audio,spokenText:aligned.sentences[5].spokenText};
  draft.sentenceGames[4].options[0].audio=draft.sentences[2].audio;
  for(let n=1;n<3;n++)draft.sentenceGames[4].options[n].audio={...aligned.sentences[5+n].audio,spokenText:aligned.sentences[5+n].spokenText};
  fs.writeFileSync(dp,JSON.stringify(draft,null,2)+'\n');
 } else if(mode==='validate'){
  run('scripts/audit-asset-formats.mjs',['--lesson','L421','--strict']);
  run('scripts/validate-production-assets.mjs');
 }else throw Error('Unknown mode');
}finally{fs.writeFileSync(cp,original);}
