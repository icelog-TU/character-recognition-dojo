import fs from 'node:fs';

const curriculum = JSON.parse(fs.readFileSync('src/curriculum/sample-lessons.json', 'utf8'));
const formal = [...new Set(curriculum.lessons.flatMap((lesson) => lesson.newChars ?? []))];
const provisional = ['而', '且', '故', '緣', '無', '聊'];
const allowedChars = [...new Set([...formal, ...provisional, '趣'])];
if (formal.length !== 469 || allowedChars.length !== 476) throw new Error(`Boundary mismatch: ${formal.length}/${allowedChars.length}`);

const style = 'Square 1:1 polished modern children picture-book illustration matching the L058 style anchors: warm natural light, fine pencil-and-gouache-watercolor linework, bright clean palette, detailed but uncluttered Taiwan setting, expressive preschool proportions, stable recurring identities, phone-readable composition and safe margins. No readable text, letters, numbers, logos, labels, watermarks or speech bubbles. ';
const sentence = (id, text, spokenText, displayLines, focusChar, imageNotes, scene) => ({
  id, text, spokenText, displayLines, focusChar, imageNotes, imagePrompt: style + scene, approved: true,
  imageSrc: `/assets/lessons/L480/images/${id}.webp`,
  audio: { src: `/assets/lessons/L480/audio/${id}.m4a`, durationMs: 0, charTimings: [] },
});

const approvedSentences = [
  sentence('L480-S01', '爸爸說話風趣，而且人緣好。', '爸爸說話風趣而且人緣好', ['爸爸說話', '風趣，', '而且人緣好。'], '趣',
    '公園聚會，主角爸爸與幾位成年朋友聊天，用生動表情、手勢分享趣事，朋友們自然笑起來；另一位熟人開心走近向爸爸打招呼。主角女孩在旁跟著笑。是輕鬆、有來有往的交談，不是上台演出或集體鼓掌。朋友用與固定爸爸不同的 generic 成人造型。',
    'A relaxed daytime park gathering. The recurring father, short dark hair and blue button shirt, chats animatedly with several visually distinct generic adult friends; he uses a lively hand gesture and the friends laugh naturally. Another familiar adult approaches warmly to greet him. The recurring girl with short dark bob, pink hair clip, pink cardigan, cream blouse, navy skirt and pink shoes stands nearby smiling. Conversational group, no stage and no applause.'),
  sentence('L480-S02', '我們來聊聊學校的趣事。', '我們來聊聊學校的趣事', ['我們來聊聊', '學校的趣事。'], '趣',
    '放學後，主角女孩和固定小月坐公園長椅，小光站旁一起聊天。女孩笑著比手勢，回想班上插曲：老師轉身時才發現背後黏著小狗圖案貼紙。小思考泡泡呈現老師發現貼紙、自己也笑起來，不交代誰貼、不畫成大家嘲笑老師。三個孩子保留各自固定身份。',
    'After school at a park bench, the recurring protagonist girl sits with fixed Xiaoyue while fixed Xiaoguang stands beside them; all three chat warmly. The protagonist gestures while telling a funny school story. A small wordless thought bubble shows their recurring female teacher turning and noticing a harmless puppy-picture sticker on the back of her clothing, then smiling at it herself. No one is mocking her and do not show who placed it. Preserve Xiaoguang exact round glasses, neat short black hair, white shirt, navy vest, khaki shorts, white socks, brown shoes and dark green backpack; preserve Xiaoyue exact long softly curled dark chestnut hair, moon hair clip, lavender cardigan, pale cream top, teal pleated skirt, white socks and purple shoes.'),
  sentence('L480-S03', '無聊時，我會找有趣的書看。', '無聊時我會找有趣的書看', ['無聊時，', '我會找', '有趣的書看。'], '趣',
    '家中書櫃前，主角女孩主動挑書，抽出一本封面畫奇特城堡和會飛動物的圖畫書，露出被吸引的表情。旁有可坐下閱讀的椅子。不是爸爸拿書給她；不要求可讀書名。老師已放棄「畫有趣怪物」舊句，不畫女孩畫畫。',
    'At a cozy home bookshelf, the recurring girl independently pulls out a picture book. Its cover uses only a wordless illustration of a fantastical castle and flying animals. Her face changes from mild boredom to curious interest. A reading chair waits nearby. No adult hands her the book; she is not drawing; no readable book title or symbols.'),
  sentence('L480-S04', '無人機飛不動，是沒電的緣故。', '無人機飛不動是沒電的緣故', ['無人機', '飛不動，', '是沒電的', '緣故。'], '緣',
    '開闊草地，完整無人機停在地上，螺旋槳不轉。主角女孩拿控制器疑惑地看無人機；爸爸蹲旁檢查電池，準備取出更換。沒有冒煙、損壞或墜落，不畫在空中飛慢。控制器不需可讀電量數字。沒電由句子交代，畫面呈現無法起飛及檢查電池。',
    'On an open sunny lawn, a complete undamaged child-safe quadcopter rests firmly on the ground with all propellers stopped. The recurring girl holds a simple controller and looks puzzled at it. The recurring father crouches beside the grounded drone, opens the battery compartment and prepares to replace the battery. No smoke, crash, damage, spinning propellers, flight, screen text or battery numbers.'),
  sentence('L480-S05', '我跟爸爸一邊走，一邊聊天。', '我跟爸爸一邊走一邊聊天', ['我跟爸爸', '一邊走，', '一邊聊天。'], '聊',
    '晴天公園步道，主角女孩和爸爸並肩散步，女孩邊走邊抬頭說話，爸爸轉頭微笑回應；兩人的腳步都向前。背景樹木草地，不靠近車道，不畫停下來面對面聊天。',
    'On a sunny safe park path bordered by trees and grass, the recurring girl and recurring father walk side by side in the same forward direction. Both are visibly mid-step. The girl looks up and talks with a small natural hand gesture; father turns his head toward her and smiles while continuing to walk. No road, vehicles, stopping or face-to-face standing.'),
];

const sentenceGames = [
  { id: 'L480-G01', type: 'find-character', sentenceId: 'L480-S01', targetChar: '趣', targetCharIndex: 5, prompt: '找出句子裡的「趣」。' },
  { id: 'L480-G02', type: 'teach-character', sentenceId: 'L480-S03', targetChar: '趣', targetCharIndex: 7, prompt: '教小兔子念這個字。', teachAudio: { prefixText: '無聊時我會找有', suffixText: '的書看', prefixSrc: '/assets/lessons/L480/audio/L480-G02-prefix.m4a', suffixSrc: '/assets/lessons/L480/audio/L480-G02-suffix.m4a' } },
  { id: 'L480-G03', type: 'missing-character', sentenceId: 'L480-S02', targetChar: '趣', targetCharIndex: 8, missingIndexes: [8], prompt: '選出不見的字。', options: [
    { id: 'wrong-one', text: '往', correct: false }, { id: 'correct', text: '趣', correct: true }, { id: 'wrong-two', text: '壞', correct: false },
  ] },
  { id: 'L480-G04', type: 'partial-order', sentenceId: 'L480-S05', targetChar: '聊', targetCharIndex: 9, missingIndexes: [7, 8, 9, 10], prompt: '把字卡排回正確順序。', options: [
    { id: 'card-liao', text: '聊', correct: true, correctOrder: 2 }, { id: 'card-yi', text: '一', correct: true, correctOrder: 0 }, { id: 'card-tian', text: '天', correct: true, correctOrder: 3 }, { id: 'card-bian', text: '邊', correct: true, correctOrder: 1 },
  ] },
  { id: 'L480-G05', type: 'choose-pronunciation', sentenceId: 'L480-S04', targetChar: '緣', targetCharIndex: 10, prompt: '聽一聽，選出正確的句子。', options: [
    { id: 'correct', text: '無人機飛不動，是沒電的緣故。', spokenText: '無人機飛不動是沒電的緣故', correct: true, audioSrc: '/assets/lessons/L480/audio/L480-S04.m4a' },
    { id: 'wrong-one', text: '無人機飛不動，是下雨的緣故。', spokenText: '無人機飛不動是下雨的緣故', correct: false, audioSrc: '/assets/lessons/L480/audio/L480-G05-wrong-one.m4a' },
    { id: 'wrong-two', text: '無人機飛不動，是風大的緣故。', spokenText: '無人機飛不動是風大的緣故', correct: false, audioSrc: '/assets/lessons/L480/audio/L480-G05-wrong-two.m4a' },
  ] },
];

const productionQA = {
  imageStyle: 'Pending final side-by-side style-lock and cast review.',
  audioPipeline: 'Pending OpenAI TTS generation and standard audio processing.',
  timingReview: 'Pending AI alignment.',
  pronunciation: 'Required: 趣 ㄑㄩˋ; 緣 ㄩㄢˊ; 聊 ㄌㄧㄠˊ; G02 suffix 的 is neutral tone.',
  browserQA: 'Pending 390x844 LessonPanel interaction and S04 four-line layout check.',
  packageIntake: 'Pending pushed-ref intake.',
  manualPlayback: 'Teacher subjective asset review is post-merge by default; no manual PASS claimed.',
};

const request = {
  id: 'L480', order: 480, title: '趣', newChars: ['趣'], zhuyin: { 趣: 'ㄑㄩˋ' }, charAudio: { 趣: '/assets/lessons/L480/audio/char-u8da3.m4a' },
  dependsOnLessons: ['L474', 'L475', 'L476', 'L477', 'L478', 'L479'], provisionalLearnedChars: provisional, allowedChars,
  handoffBoundary: { latestLesson: 'L465', learnedCharCount: 469, provisionalLearnedChars: provisional, allowedChars },
  productionBase: { ref: '7d2827d5', latestLesson: 'L465', learnedCharCount: 469, latestReview: 'R056' },
  releaseBlockers: ['R057', 'R058', 'L474', 'L475', 'L476', 'L477', 'L478', 'L479'], packageStatus: 'partial-package', kind: 'normal', targetSentenceCount: 5, requiredRounds: 5,
  teacherNotes: 'Teacher-approved L480 handoff. Do not introduce 興 or 味. S04 uses the approved four-line layout and must be checked at phone width. No readable text or numbers in images.',
  generationConstraints: { allowedChars, provisionalLearnedChars: provisional, targetCharMinimumCount: { 趣: 3 }, recentTargetMinimumCounts: { 聊: 2, 無: 2, 緣: 2, 故: 1, 且: 1 } },
  approvedSentences, sentenceGames, coverage: { 趣: 3, 聊: 4, 無: 2, 緣: 2, 故: 1, 且: 1 }, productionQA,
};
const draft = {
  id: request.id, order: request.order, title: request.title, newChars: request.newChars, zhuyin: request.zhuyin, charAudio: request.charAudio,
  dependsOnLessons: request.dependsOnLessons, provisionalLearnedChars: provisional, allowedChars, handoffBoundary: request.handoffBoundary, productionBase: request.productionBase,
  releaseBlockers: request.releaseBlockers, packageStatus: request.packageStatus, requiredRounds: 5,
  originHint: { kind: 'text', text: '趣表示有意思、能吸引人的感受；風趣是說話生動有意思。' },
  sentences: approvedSentences, sentenceGames,
  optionAudioVerification: { 'L480-G05': { correct: 'L480-S04', wrongOne: 'L480-G05-wrong-one', wrongTwo: 'L480-G05-wrong-two', eachWrongGeneratedAsFullSentence: true } },
  stage4AudioAlignment: {}, latestMainChecked: '7d2827d5', productionQA,
};

fs.mkdirSync('curriculum-workflow/lesson-requests', { recursive: true });
fs.mkdirSync('curriculum-workflow/drafts', { recursive: true });
fs.writeFileSync('curriculum-workflow/lesson-requests/L480.json', JSON.stringify(request, null, 2) + '\n');
fs.writeFileSync('curriculum-workflow/drafts/L480-draft.json', JSON.stringify(draft, null, 2) + '\n');
const packet = `# L480 生成資料包\n\n## 課程需求\n\n- 課程：L480\n- 新字：趣（ㄑㄩˋ）\n- packageStatus：partial-package\n- 正式邊界：origin/main 7d2827d5，L001-L465，469 字，R056\n- provisional：而、且、故、緣、無、聊\n- Release blockers：R057/R058、L474-L479\n\n## 鎖定 request\n\n\`\`\`json\n${JSON.stringify(request, null, 2)}\n\`\`\`\n\n## Production QA\n\nPending asset generation, alignment, interaction QA and pushed-ref intake.\n`;
fs.writeFileSync('curriculum-workflow/generated/L480-generation-packet.md', packet);
console.log(`Wrote L480 request/draft/packet with ${allowedChars.length} allowed chars.`);
