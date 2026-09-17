import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const han=t=>[...t.matchAll(/\p{Script=Han}/gu)].map(m=>m[0]);
const sourceMainCommit=execFileSync('git',['rev-parse','4eec5178'],{encoding:'utf8'}).trim();
const main=JSON.parse(execFileSync('git',['show',sourceMainCommit+':src/curriculum/sample-lessons.json'],{encoding:'utf8',maxBuffer:32*1024*1024}));
const provisionalLearnedChars=['室','班','組','隊','各'];
const allowedChars=[...new Set([...main.lessons.flatMap(l=>l.newChars),...provisionalLearnedChars,'輪'])];
const style='Square 1:1 detailed warm pencil-and-watercolor modern picture-book illustration. Full L058 set is STYLE ONLY, refined proportions from L115-S01/S02,L118-S02,L119-S01,L128-S03; family identities from L154-S01,L162-S04,L163-S02. Protagonist preschool girl: short dark bob, pink hairclip, pink cardigan, cream blouse, navy skirt, pink sneakers. Mother: brown bob, cream blouse, blue jeans. Father: brown short hair, blue overshirt, white inner shirt, tan trousers. Stable natural child proportions and faces; rich textured environmental detail, warm clear Taiwan daylight, safe margins. Generic classmates/staff distinct from recurring cast. No text, numerals, labels, signs, watermark. ';
const records=[
['各組輪流到畫室畫畫。',['各組輪流','到畫室畫畫。'],'輪','學校分組活動，畫室空間一次接待一個小組。畫面呈現換組的時刻：前一組拿著已完成的圖畫離開畫室，老師在門旁引導；主角小女孩與同組孩子在另一側等候，正準備接著進入。畫室內可見畫架、畫紙與空出的座位。兩組的進出方向清楚、不互相擠撞，呈現依序換組，不是所有小組同時擠進畫室，也不是只有一組正在畫畫而看不出輪流。其他同學使用 generic 角色，不以文字或數字標示組別。'],
['排了好久的隊，才輪到我。',['排了好久','的隊，','才輪到我。'],'輪','遊樂園兒童小火車乘車入口，主角小女孩已等到隊伍最前方，工作人員開放入口並示意她上車，主角媽媽在旁陪同。後方仍有一條清楚的等候隊伍；小火車停妥，車門或入口已開，女孩正準備進入。重點是等候後終於輪到她，不是仍站在隊伍後方，也不是已玩完下車。不使用鐘面、等候分鐘數或文字說明時間長短，不讓孩子接近行進中的車輛。'],
['組裝小車，先把輪子裝上。',['組裝小車，','先把輪子','裝上。'],'輪','家中手工桌前，主角爸爸向主角小女孩說明玩具小車的組裝步驟。車身底座與輪軸已備好，女孩拿著一個大型車輪，正對準輪軸準備裝上；桌面另放著尚未安裝的車輪，爸爸指向連接位置。使用可直接扣合的大型玩具零件，不需要電動工具。小車尚未完整組裝，不是修理壞車，也不要只畫一輛完整小車而看不出裝輪子的動作。'],
['各隊穿不同色的衣服。',['各隊穿','不同色的','衣服。'],'隊','學校球類活動前，至少兩支隊伍分開站在球場兩側。每隊孩子穿同一顏色的運動背心，不同隊使用明顯不同的顏色，例如紅色與綠色。主角小女孩在其中一隊，其他孩子為 generic 同學。要呈現同隊同色、不同隊不同色，不是每個人隨意穿不同顏色。可在既有服裝外加運動背心，主角臉型、髮型及髮夾保持固定。背心不需要號碼、隊名或標誌。'],
['爸爸今天上晚班，白天先休息。',['爸爸今天','上晚班，','白天先休息。'],'班','白天的家中臥室，窗簾邊緣透入日光，主角爸爸已躺下休息，床邊椅子上放著稍後外出工作的衣服與工作包。主角媽媽在門口輕聲提醒主角小女孩保持安靜，女孩準備離開，讓爸爸休息。這是晚上上班前的白天休息，不是下晚班回家後補眠，不畫爸爸同時在辦公室工作。不要用輪班表、時鐘數字或文字標籤交代時間。']
];
const a='/assets/lessons/L426/audio/';
const sentences=records.map(([text,displayLines,focusChar,imageNotes],i)=>{const id=`L426-S0${i+1}`;return{id,text,spokenText:han(text).join(''),displayLines,focusChar,imageNotes,imagePrompt:style+imageNotes,imageSrc:`/assets/lessons/L426/images/${id}.webp`,approved:true,audio:{src:a+id+'.m4a',durationMs:0,charTimings:[]}};});
const sentenceGames=[
{id:'L426-G01',type:'find-character',sentenceId:'L426-S01',targetChar:'輪',targetCharIndex:2},
{id:'L426-G02',type:'teach-character',sentenceId:'L426-S02',targetChar:'輪',targetCharIndex:7,teachAudio:{prefixText:'排了好久的隊才',suffixText:'到我',prefixSrc:a+'L426-G02-prefix.m4a',suffixSrc:a+'L426-G02-suffix.m4a'}},
{id:'L426-G03',type:'missing-character',sentenceId:'L426-S03',targetChar:'輪',targetCharIndex:6,missingIndexes:[6],options:[{id:'correct',text:'輪',correct:true},{id:'wrong-one',text:'盒',correct:false},{id:'wrong-two',text:'帽',correct:false}]},
{id:'L426-G04',type:'partial-order',sentenceId:'L426-S04',targetChar:'隊',targetCharIndex:1,missingIndexes:[5,6,7,8],options:[{id:'card-yi',text:'衣',correct:true,correctOrder:2},{id:'card-se',text:'色',correct:true,correctOrder:0},{id:'card-fu',text:'服',correct:true,correctOrder:3},{id:'card-de',text:'的',correct:true,correctOrder:1}]},
{id:'L426-G05',type:'choose-pronunciation',sentenceId:'L426-S05',targetChar:'班',targetCharIndex:6,options:[{id:'correct',text:sentences[4].text,correct:true,audioSrc:a+'L426-S05.m4a'},{id:'wrong-one',text:'爸爸今天上早班，白天先休息。',correct:false,audioSrc:a+'L426-G05-wrong-one.m4a'},{id:'wrong-two',text:'爸爸明天上晚班，白天先休息。',correct:false,audioSrc:a+'L426-G05-wrong-two.m4a'}]}
];
for(const o of sentenceGames[4].options)o.spokenText=han(o.text).join('');
const errors=[];
for(const s of sentences){if(s.displayLines.join('')!==s.text||s.displayLines.some(x=>[...x].length>6))errors.push(s.id+' lines');}
for(const g of sentenceGames){const h=han(sentences.find(s=>s.id===g.sentenceId).text);if(h[g.targetCharIndex]!==g.targetChar)errors.push(g.id+' target');if(g.type==='partial-order')for(const o of g.options)if(o.text!==h[g.missingIndexes[o.correctOrder]])errors.push(g.id+' order');}
for(const s of [...sentences,...sentenceGames.flatMap(g=>g.options??[])])for(const c of han(s.text))if(!allowedChars.includes(c))errors.push('Forbidden '+c);
const counts=Object.fromEntries(['輪','各','隊','組','班','室'].map(c=>[c,sentences.reduce((n,s)=>n+han(s.text).filter(x=>x===c).length,0)]));
if(JSON.stringify(Object.values(counts))!==JSON.stringify([3,2,2,2,1,1]))errors.push('coverage');
if(allowedChars.length!==425)errors.push('allowed count '+allowedChars.length);
if(errors.length)throw Error(errors.join('\n'));
const base={id:'L426',order:426,title:'輪',newChars:['輪'],zhuyin:{輪:'ㄌㄨㄣˊ'},charAudio:{輪:a+'char-u8f2a.m4a'},dependsOnLessons:['L421','L422','L423','L424','L425'],provisionalLearnedChars,allowedChars,sourceMainCommit,packageStatus:'claimed',releaseDependencies:{lessonOrderThrough:425,reviewPair:['R051','R052'],afterLessonOrder:420,targetLessonRange:{startOrder:391,endOrder:420}},teacherNotes:'Teacher reassigned Production B handoff to Production C / parallel-c. Exact five sentences and canonical games approved. L001-L415 (419 chars) plus 室班組隊各輪 = 425 locked allowed chars. No L416-L420 additional provisional chars; no 員、自、胎. Contiguous ordinary lessons through L425 and R051/R052 after L420 required before Release. Review pair excluded. Production JSON, planner and ledger updates belong to Release under ROLE_PRODUCTION_SOP.',sentenceGames};
const request={...base,targetSentenceCount:5,generationConstraints:{allowedChars,provisionalLearnedChars,targetCharMinimumCount:{輪:3},recentTargetMinimumCounts:{各:2,隊:2,組:2,班:1,室:1}},approvedSentences:sentences};
fs.writeFileSync('curriculum-workflow/lesson-requests/L426.json',JSON.stringify(request,null,2)+'\n');
execFileSync(process.execPath,['scripts/create-generation-packet.mjs','--request','curriculum-workflow/lesson-requests/L426.json'],{stdio:'inherit'});
fs.writeFileSync('curriculum-workflow/drafts/L426-draft.json',JSON.stringify({...base,requiredRounds:5,sentences},null,2)+'\n');
fs.appendFileSync('curriculum-workflow/generated/L426-generation-packet.md','\n## Final teacher-approved records (authoritative)\n\n'+JSON.stringify({...base,approvedSentences:sentences},null,2)+'\n');
console.log('L426 handoff audit PASS: 425 allowed chars; exact lines, coverage and target indexes.',counts);
