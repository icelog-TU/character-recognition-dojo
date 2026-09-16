import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const han=t=>[...t.matchAll(/\p{Script=Han}/gu)].map(m=>m[0]);
const input=fs.readFileSync(process.argv[2],'utf8');
const main=JSON.parse(execFileSync('git',['show','182ace5f:src/curriculum/sample-lessons.json'],{encoding:'utf8',maxBuffer:32*1024*1024}));
const provisionalLearnedChars=['果','如','結','合','教'];
const allowedChars=[...new Set([...main.lessons.flatMap(l=>l.newChars),...provisionalLearnedChars,'室'])];
const style='Square 1:1 illustration-story, warm detailed pencil-and-watercolor modern picture book, natural Taiwan lighting and bright warm palette; match the full L058 style reference set without copying person identities. Match refined L115-S01/S02, L118-S02, L119-S01, L128-S03 proportions. Recurring family identities from L154-S01, L162-S04, L163-S02: preschool girl short dark bob, pink clip, pink cardigan, cream top, navy skirt, pink shoes; mother brown bob, cream blouse, blue jeans; father brown hair, blue overshirt, white inner shirt, tan trousers. Keep teachers and generic people distinct. Detailed clean environment, stable preschool proportions, safe square margins. No readable text, numerals, labels, signs, license plates, watermark. ';
const sentences=[];
for(let n=1;n<=5;n++){
 const id=`L421-S0${n}`;
 const block=input.split(id+'\r\n')[1].split('【')[0].split(/\r\nL421-S0/)[0];
 const field=k=>block.match(new RegExp('^'+k+'：(.*)$','m'))[1].trim();
 const text=field('text'), spokenText=field('spokenText'), displayLines=JSON.parse(field('displayLines'));
 const imageNotes=block.split('imageNotes：')[1].trim();
 sentences.push({id,text,spokenText,displayLines,focusChar:field('focusChar'),imageNotes,imagePrompt:style+imageNotes,imageSrc:`/assets/lessons/L421/images/${id}.webp`,approved:true,audio:{src:`/assets/lessons/L421/audio/${id}.m4a`,durationMs:0,charTimings:[]}});
}
sentences[0].zhuyinOverrides={'2':'ㄐㄧㄠ','9':'ㄐㄧㄠˋ'};
sentences[1].zhuyinOverrides={'2':'ㄐㄧㄠ'};
const a='/assets/lessons/L421/audio/';
const sentenceGames=[
{id:'L421-G01',type:'find-character',sentenceId:'L421-S01',targetChar:'室',targetCharIndex:10},
{id:'L421-G02',type:'teach-character',sentenceId:'L421-S05',targetChar:'室',targetCharIndex:8,teachAudio:{prefixText:'爸爸把車停在地下',prefixSrc:a+'L421-G02-prefix.m4a'}},
{id:'L421-G03',type:'missing-character',sentenceId:'L421-S04',targetChar:'室',targetCharIndex:4,missingIndexes:[4],options:[{id:'correct',text:'室',correct:true},{id:'wrong-one',text:'紙',correct:false},{id:'wrong-two',text:'筆',correct:false}]},
{id:'L421-G04',type:'partial-order',sentenceId:'L421-S02',targetChar:'教',targetCharIndex:2,missingIndexes:[4,5,6,7],options:[{id:'card-da',text:'打',correct:true,correctOrder:2},{id:'card-zen',text:'怎',correct:true,correctOrder:0},{id:'card-jie',text:'結',correct:true,correctOrder:3},{id:'card-me',text:'麼',correct:true,correctOrder:1}]},
{id:'L421-G05',type:'choose-pronunciation',sentenceId:'L421-S03',targetChar:'合',targetCharIndex:4,options:[{id:'correct',text:'不如把書合上，到室外玩。',correct:true,audioSrc:a+'L421-S03.m4a'},{id:'wrong-one',text:'不如把門合上，到室外玩。',correct:false,audioSrc:a+'L421-G05-wrong-one.m4a'},{id:'wrong-two',text:'不如把書合上，到室外坐。',correct:false,audioSrc:a+'L421-G05-wrong-two.m4a'}]}
];
for(const o of sentenceGames[4].options)o.spokenText=han(o.text).join('');
const errors=[];
for(const s of sentences){if(han(s.text).join('')!==s.spokenText)errors.push(s.id+' spokenText');if(s.displayLines.join('')!==s.text||s.displayLines.some(x=>[...x].length>6))errors.push(s.id+' display');}
for(const g of sentenceGames){const h=han(sentences.find(s=>s.id===g.sentenceId).text);if(h[g.targetCharIndex]!==g.targetChar)errors.push(g.id+' target');if(g.type==='partial-order')for(const o of g.options)if(o.text!==h[g.missingIndexes[o.correctOrder]])errors.push(g.id+' order');}
for(const s of [...sentences,...sentenceGames.flatMap(g=>g.options??[])])for(const c of han(s.text))if(!allowedChars.includes(c))errors.push('Forbidden '+c);
if(allowedChars.length!==424)errors.push('allowed count '+allowedChars.length);
if(errors.length)throw Error(errors.join('\n'));
const base={id:'L421',order:421,title:'室',newChars:['室'],zhuyin:{'室':'ㄕˋ'},charAudio:{'室':a+'char-u5ba4.m4a'},dependsOnLessons:['L416','L417','L418','L419','L420'],provisionalLearnedChars,allowedChars,sourceMainCommit:execFileSync('git',['rev-parse','182ace5f'],{encoding:'utf8'}).trim(),packageStatus:'claimed',releaseDependencies:{lessonOrderThrough:420,reviewPair:['R051','R052'],afterLessonOrder:420,targetLessonRange:{startOrder:391,endOrder:420}},teacherNotes:'Teacher approved five exact sentences and canonical games. L415 解 is not vocabulary for this unit; Release must preserve contiguous lesson order. L420 and R051/R052 required before L421 enters main. S01 教 index2 ㄐㄧㄠ and index9 ㄐㄧㄠˋ; S02 教 index2 ㄐㄧㄠ. Shared production JSON, planner and ledger integration belong to Release under ROLE_PRODUCTION_SOP.',sentenceGames};
const request={...base,targetSentenceCount:5,generationConstraints:{allowedChars,provisionalLearnedChars,targetCharMinimumCount:{室:3},recentTargetMinimumCounts:{教:2,合:2,結:2,如:1,果:1}},approvedSentences:sentences};
fs.writeFileSync('curriculum-workflow/lesson-requests/L421.json',JSON.stringify(request,null,2)+'\n');
execFileSync(process.execPath,['scripts/create-generation-packet.mjs','--request','curriculum-workflow/lesson-requests/L421.json'],{stdio:'inherit'});
fs.writeFileSync('curriculum-workflow/drafts/L421-draft.json',JSON.stringify({...base,requiredRounds:5,sentences},null,2)+'\n');
fs.appendFileSync('curriculum-workflow/generated/L421-generation-packet.md','\n## Final teacher-approved records (authoritative)\n\n'+JSON.stringify({...base,approvedSentences:sentences},null,2)+'\n');
fs.copyFileSync(process.argv[2],'curriculum-workflow/generated/L421-teacher-handoff.txt');
console.log('L421 handoff audit PASS: 424 allowed chars, exact texts, lines and indexes.');
