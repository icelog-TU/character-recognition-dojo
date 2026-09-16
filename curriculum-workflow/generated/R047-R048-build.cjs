// Preserve teacher-approved review pair; no shared curriculum writes.
const fs=require('fs'),cp=require('child_process');
const boundary=cp.execFileSync('git',['rev-parse','origin/main'],{encoding:'utf8'}).trim();
const main=JSON.parse(cp.execFileSync('git',['show','origin/main:src/curriculum/sample-lessons.json'],{encoding:'utf8',maxBuffer:64*1024*1024}));
const allowed=[...new Set([...main.lessons.filter(l=>l.order<=390).flatMap(l=>l.newChars),...'數'])];
if(allowed.length!==394)throw Error('Allowed count '+allowed.length);
const coverage=[...'驚喜歡笑但吧謝感情朋友親交通往經已近接送連傳相信寫字名第念號數'];
const specs={
R047:[
['收到朋友親手做的花，好驚喜。',['收到朋友','親手做的花，','好驚喜。'],'驚','小月將親手製作的彩色紙花送給主角小女孩。女孩雙手接過，睜大眼睛、露出驚喜笑容。紙花要有清楚摺紙與手作質感，不是鮮花。'],
['我喜歡這張笑臉，謝謝你。',['我喜歡','這張笑臉，','謝謝你。'],'歡','家中畫畫桌旁，小光把剛畫好的作品送給主角小女孩。白紙中央是一張大大的彩色笑臉，桌上放著畫筆。女孩接過畫紙，開心向小光道謝。笑臉必須畫在紙上，不是面具或人物本身表情。本句「你」指小光，不使用固定「你」小男孩。'],
['天冷了，但還是出去走走吧。',['天冷了，','但還是出去','走走吧。'],'但','家門口，主角媽媽穿好外套，拿著女孩的外套，邀請她出門散步。女孩正準備穿外套。門外樹枝被風吹動，呈現冷天，不畫大雨或危險天氣。'],
['朋友熱情地送來一盒點心。',['朋友熱情地','送來','一盒點心。'],'情','主角家門口，小月笑著將一盒打開的點心遞給主角小女孩，女孩伸手迎接。盒內是幾塊外形清楚的小蛋糕；小月媽媽在後方陪同，不畫成主角媽媽。呈現朋友親自送來、熱情分享。'],
['我寫信給老師，感謝他的幫忙。',['我寫信','給老師，','感謝','他的幫忙。'],'感','主角小女孩坐在家中桌前寫信，旁邊有信封。簡單回想泡泡呈現老師蹲下，幫女孩包紮膝蓋的小擦傷，交代感謝原因。輕微擦傷，不血腥；信紙內容不需可讀。老師與主角媽媽必須明確區分。']
],R048:[
['一號公車通往海邊。',['一號公車','通往海邊。'],'通','公車沿濱海道路前往海邊，遠處清楚可見沙灘與大海。主角小女孩和媽媽坐在車內靠窗處看海岸。公車路線牌清楚顯示「1」。老師已批准數字入圖；本圖僅需路線數字「1」，不新增其他文字或車牌資訊。'],
['最近接連下雨，不能出去玩。',['最近接連','下雨，','不能出去玩。'],'連','主角小女孩抱著球站在家中窗邊，看著外面的雨和積水，露出失望表情；媽媽在旁陪伴。窗外遊戲區無人使用。以雨天不能出去玩為主，不用日曆或文字硬表現「接連」。'],
['寫好名字，再把紙交給我。',['寫好名字，','再把紙','交給我。'],'交','教室裡，老師站在桌旁，指著紙張上方預留的姓名位置，另一手做出收紙手勢。主角小女孩低頭拿筆，正在姓名位置書寫。這是老師交代要求，句中「我」指老師，不是主角女孩。不要同時畫成紙已交出去；姓名筆跡不需可讀。'],
['我相信你已經會數數了。',['我相信你','已經會','數數了。'],'數','親子遊戲區，一位非固定角色的幼兒爸爸蹲在自己年幼的孩子旁，微笑鼓勵。約兩三歲的小小孩伸手逐一指數地墊上的三塊大積木。爸爸耐心等待，不代替孩子數。兩人都是本張 generic 親子；不得使用主角、哥哥、小月、小光或固定「你」小男孩，不得把主角群畫成年幼幼兒。「我」是幼兒爸爸，「你」是他的孩子。'],
['第一張字卡，念完再往下傳。',['第一張字卡，','念完再','往下傳。'],'傳','教室傳字卡活動。老師帶領，主角小女孩坐在第一個位置，拿著字卡開口念；小月坐在旁邊，等女孩念完接過。桌上另有尚未使用的一疊字卡。字卡正面朝女孩、背面朝觀者，不必生成可讀漢字。']
]};
const plans={R047:{sentences:[1,4,3,5,2],targets:['驚','情','但','感','歡'],indexes:[10,3,3,6,2],missing:[8,9,10,11],cards:[['bang','幫',2],['ta','他',0],['mang','忙',3],['de','的',1]],distractors:['又','就'],prefix:'朋友熱',suffix:'地送來一盒點心',wrong:['我喜歡這張畫紙，謝謝你。','我喜歡這張笑臉，謝謝他。']},R048:{sentences:[1,2,3,5,4],targets:['通','連','交','傳','數'],indexes:[4,3,7,10,7],missing:[6,7,8,9],cards:[['xia','下',3],['zai','再',1],['wang','往',2],['wan','完',0]],distractors:['拿','放'],prefix:'最近接',suffix:'下雨不能出去玩',wrong:['我相信你已經會寫字了。','我相信他已經會數數了。']}};
const han=t=>[...t].filter(c=>/\p{Script=Han}/u.test(c)).join('');
const write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
for(const [id,ss]of Object.entries(specs)){
const base='/assets/reviews/'+id, p=plans[id];
const sentences=ss.map(([text,displayLines,focusChar,imageNotes],i)=>({id:id+'-S0'+(i+1),text,spokenText:han(text),displayLines,focusChar,imageNotes,imagePrompt:imageNotes,imageSrc:base+'/images/'+id+'-S0'+(i+1)+'.webp',approved:true,audio:{src:base+'/audio/'+id+'-S0'+(i+1)+'.m4a'}}));
if(id==='R048')sentences[3].zhuyinOverrides={'7':'ㄕㄨˇ','8':'ㄕㄨˋ'};
const types=['find-character','teach-character','missing-character','partial-order','choose-pronunciation'];
const sentenceGames=types.map((type,i)=>({id:id+'-G0'+(i+1),type,sentenceId:sentences[p.sentences[i]-1].id,targetChar:p.targets[i],targetCharIndex:p.indexes[i],prompt:['找出句子裡的字，點一下。','請你幫我念。','選出少掉的字。','把字放回句子裡。','聽一聽，選出正確的句子。'][i]}));
sentenceGames[1].teachAudio={prefixText:p.prefix,suffixText:p.suffix,prefixSrc:base+'/audio/'+id+'-G02-prefix.m4a',suffixSrc:base+'/audio/'+id+'-G02-suffix.m4a'};
sentenceGames[2].missingIndexes=[p.indexes[2]];sentenceGames[2].options=[p.targets[2],...p.distractors].map((text,i)=>({id:['correct','wrong-one','wrong-two'][i],text,correct:i===0}));
sentenceGames[3].missingIndexes=p.missing;sentenceGames[3].options=p.cards.map(([key,text,correctOrder])=>({id:'card-'+key,text,correct:true,correctOrder}));
const correct=sentences[p.sentences[4]-1];sentenceGames[4].options=[correct.text,...p.wrong].map((text,i)=>({id:['correct','wrong-one','wrong-two'][i],text,correct:i===0,...(i===0?{sentenceId:correct.id}:{}),audioSrc:i===0?correct.audio.src:base+'/audio/'+id+'-G05-wrong-'+(i===1?'one':'two')+'.m4a'}));
const meta={id,reviewNumber:Number(id.slice(1)),title:id==='R047'?'複習四十七':'複習四十八',afterLessonOrder:390,targetLessonRange:{startOrder:361,endOrder:390},requiredCoverageChars:coverage,requiredRounds:5,dependsOnLessons:['L390'],provisionalLearnedChars:['數'],packageStatus:'partial-package',sourceBoundary:boundary};
const notes='Teacher-approved pair, same Production D slot. Playable L390 -> R047 -> R048 -> L391. L381-L389 now merged; L390 pending Release only. Ceiling L390, 394 allowed Han. R047-S05 four functional lines explicitly approved. R048-S01 route digit 1 explicitly approved; no other readable text exception. R048-S04 數數 = ㄕㄨˇ ㄕㄨˋ. Image/audio/timing/browser QA in progress.';
const request={kind:'review',...meta,targetSentenceCount:5,allowedChars:allowed,generationConstraints:{allowedChars:allowed,provisionalLearnedChars:['數'],requiredCoverageChars:coverage},teacherNotes:notes,approvedSentences:sentences,sentenceGames};
write('curriculum-workflow/review-requests/'+id+'.json',request);
write('curriculum-workflow/drafts/'+id+'-draft.json',{...meta,notes,sentences,sentenceGames});
}
const all=Object.values(specs).flat().map(x=>x[0]).join('');
const actual=Object.fromEntries(coverage.map(c=>[c,[...all].filter(x=>x===c).length]));
for(const id of Object.keys(specs)){
 const d=JSON.parse(fs.readFileSync('curriculum-workflow/drafts/'+id+'-draft.json'));
 for(const s of d.sentences){if(s.displayLines.join('')!==s.text||s.displayLines.some(l=>[...l].length>6)||!s.spokenText.includes(s.focusChar))throw Error(s.id+' text');for(const c of s.spokenText)if(!allowed.includes(c))throw Error(s.id+' illegal '+c);}
 for(const g of d.sentenceGames){const s=d.sentences.find(s=>s.id===g.sentenceId);if(s.spokenText[g.targetCharIndex]!==g.targetChar)throw Error(g.id+' target');for(const o of g.options||[])for(const c of han(o.text))if(!allowed.includes(c))throw Error(g.id+' illegal '+c);if(g.type==='partial-order')for(const o of g.options)if(s.spokenText[g.missingIndexes[o.correctOrder]]!==o.text)throw Error(g.id+' order');if(g.teachAudio&& (s.spokenText.slice(0,g.targetCharIndex)!==g.teachAudio.prefixText||s.spokenText.slice(g.targetCharIndex+1)!==g.teachAudio.suffixText))throw Error(g.id+' fragments');}
}
if(Object.values(actual).some(n=>n<1))throw Error('pair coverage');
write('curriculum-workflow/generated/R047-R048-data-audit.json',{boundary,allowedCount:allowed.length,coverage:actual,friendWordCount:all.split('朋友').length-1,hanCounts:Object.values(specs).flat().map(x=>han(x[0]).length),allowed:'PASS',displayLines:'PASS',stage4Indexes:'PASS',pairCoverage:'PASS'});
console.log('Approved data checks PASS',actual);
