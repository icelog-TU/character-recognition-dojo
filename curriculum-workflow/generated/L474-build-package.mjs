import fs from 'node:fs';

const curriculum = JSON.parse(fs.readFileSync('src/curriculum/sample-lessons.json', 'utf8'));
const formal = [...new Set(curriculum.lessons.flatMap((lesson) => lesson.newChars ?? []))];
const provisional = ['該', '應', '答', '題', '案', '反'];
const allowedChars = [...new Set([...formal, ...provisional, '而'])];
if (formal.length !== 469 || allowedChars.length !== 476) throw new Error(`Boundary mismatch: ${formal.length}/${allowedChars.length}`);

const commonStyle = 'Square 1:1 rich warm pencil-and-gouache-watercolor modern children picture-book illustration closely matching the full L058 STYLE ONLY and refined examples: warm natural light, detailed but clean Taiwan environment, stable preschool age and natural body proportions, expressive soft faces, bright warm palette, phone-readable composition with safe margins. Recurring protagonist girl has short dark bob, pink hair clip, pink cardigan, cream blouse, navy skirt and pink shoes; recurring mother has a distinct adult silhouette, chin-length dark bob, cream blouse and blue jeans; recurring father has short dark hair and a blue button shirt. Do not copy any person identity from L058. No readable text, letters, numbers, logos, watermarks or speech bubbles. ';
const sentence = (id, text, spokenText, displayLines, focusChar, imageNotes, scene, zhuyinOverrides) => ({
  id, text, spokenText, displayLines, focusChar, ...(zhuyinOverrides ? { zhuyinOverrides } : {}), imageNotes,
  imagePrompt: commonStyle + scene,
  approved: true,
  imageSrc: `/assets/lessons/L474/images/${id}.webp`,
  audio: { src: `/assets/lessons/L474/audio/${id}.m4a`, durationMs: 0, charTimings: [] },
});

const approvedSentences = [
  sentence('L474-S01', '這題太難了，我不知道答案。', '這題太難了我不知道答案', ['這題太難了，', '我不知道', '答案。'], '案',
    '家中書桌，主角小女孩拿著筆，看練習本皺眉思考，轉頭向旁邊的主角爸爸求助。爸爸俯身看她指的題目。靠表情呈現遇到難題，不必畫出可讀的題目或答案。老師已明確放棄第一句硬放「而」，保留本定稿。不是「只是問答案」、不是「答案寫反」。',
    'At a home study desk, the recurring girl holds a pencil and looks at an exercise notebook with a puzzled frown, then turns toward her recurring father for help. She points to one place on the notebook; father bends beside her and looks attentively. Show a difficult problem through expression and body language only. The notebook contains only abstract unreadable marks, with no readable problem or answer.', { '9': 'ㄉㄚˊ' }),
  sentence('L474-S02', '這題應該有兩個答案。', '這題應該有兩個答案', ['這題應該有', '兩個答案。'], '題',
    '主角小女孩和主角爸爸做圖像分類題，主題是找會飛的動物。桌上分別有鳥、蝴蝶、小狗、魚四張圖卡；女孩指著鳥與蝴蝶兩張卡，向爸爸表達自己的判斷。用圖案表達，不需要文字題目。兩張被選的卡均是合理答案，不畫成二選一只能答一張。',
    'At a home table, father and girl solve a picture sorting activity about animals that can fly. Exactly four separate large picture cards show a bird, a butterfly, a dog and a fish. The girl confidently points to both the bird and butterfly cards as two valid answers while father listens. Use pictures only, with no checkmarks or labels.', { '2': 'ㄧㄥ', '7': 'ㄉㄚˊ' }),
  sentence('L474-S03', '越想睡，反而越睡不著。', '越想睡反而越睡不著', ['越想睡，反而', '越睡不著。'], '而',
    '夜晚臥室，主角小女孩穿睡衣躺床，被子蓋好，抱著枕頭，眼睛仍睜著，露出想睡卻睡不著的苦惱表情。只有柔和小夜燈，不安排手機、玩具或其他讓她主動分心的物品。不是害怕、受驚或開心熬夜。',
    'Nighttime bedroom: the recurring girl in recognizable child pajamas lies safely under a blanket, hugging a pillow. Her eyes remain open and her face looks tired and mildly frustrated because she wants to sleep but cannot. A single soft night-light gives gentle warm light. No phone, toys, books, clock numbers or other distractions; she is not frightened or happily staying awake.', { '8': 'ㄓㄠˊ' }),
  sentence('L474-S04', '想幫忙，反而把水打翻了。', '想幫忙反而把水打翻了', ['想幫忙，', '反而把水', '打翻了。'], '而',
    '家中餐桌旁，主角小女孩原本想幫主角媽媽端水，卻碰倒杯子，水灑在桌上。女孩驚訝伸手想扶杯子，媽媽拿布準備擦水。使用不會碎的杯子，不畫熱水、碎玻璃或受傷。把本來想幫忙、結果添了麻煩的意外呈現清楚。',
    'Beside the family dining table, the girl was trying to help carry a safe unbreakable cup of cool water, but she has just knocked it over. Water visibly spills across the tabletop. The surprised girl reaches to steady the cup while the recurring mother calmly picks up a cloth. No hot water, broken glass, injury or scolding.'),
  sentence('L474-S05', '我只吃了一口而已。', '我只吃了一口而已', ['我只吃了', '一口而已。'], '而',
    '主角小女孩拿著一塊只有一個小咬痕的麵包，向主角媽媽展示。麵包大部分完整，女孩指著小缺口，表達只吃了一口；媽媽自然看著，不需要生氣或責備。不要畫成吃掉大半還說只吃一口。',
    'At a home table, the girl holds up one bread roll that remains almost completely intact and has exactly one very small clear bite mark. She points to the tiny bite while showing it naturally to her mother. Mother looks calmly, without anger or blame. The bread must not be half eaten.', { '7': 'ㄧˇ' }),
];

const sentenceGames = [
  { id: 'L474-G01', type: 'find-character', sentenceId: 'L474-S03', targetChar: '而', targetCharIndex: 4, prompt: '找出句子裡的「而」。' },
  { id: 'L474-G02', type: 'teach-character', sentenceId: 'L474-S04', targetChar: '而', targetCharIndex: 4, prompt: '教小兔子念這個字。', teachAudio: { prefixText: '想幫忙反', suffixText: '把水打翻了', prefixSrc: '/assets/lessons/L474/audio/L474-G02-prefix.m4a', suffixSrc: '/assets/lessons/L474/audio/L474-G02-suffix.m4a' } },
  { id: 'L474-G03', type: 'missing-character', sentenceId: 'L474-S05', targetChar: '而', targetCharIndex: 6, missingIndexes: [6], prompt: '選出不見的字。', options: [
    { id: 'wrong-one', text: '就', correct: false }, { id: 'correct', text: '而', correct: true }, { id: 'wrong-two', text: '了', correct: false },
  ] },
  { id: 'L474-G04', type: 'partial-order', sentenceId: 'L474-S01', targetChar: '案', targetCharIndex: 10, missingIndexes: [7, 8, 9, 10], prompt: '把字卡排回正確順序。', options: [
    { id: 'card-da', text: '答', correct: true, correctOrder: 2 }, { id: 'card-zhi', text: '知', correct: true, correctOrder: 0 }, { id: 'card-an', text: '案', correct: true, correctOrder: 3 }, { id: 'card-dao', text: '道', correct: true, correctOrder: 1 },
  ] },
  { id: 'L474-G05', type: 'choose-pronunciation', sentenceId: 'L474-S02', targetChar: '題', targetCharIndex: 1, prompt: '聽一聽，選出正確的句子。', options: [
    { id: 'correct', text: '這題應該有兩個答案。', spokenText: '這題應該有兩個答案', correct: true, audioSrc: '/assets/lessons/L474/audio/L474-S02.m4a' },
    { id: 'wrong-one', text: '這題應該有一個答案。', spokenText: '這題應該有一個答案', correct: false, audioSrc: '/assets/lessons/L474/audio/L474-G05-wrong-one.m4a' },
    { id: 'wrong-two', text: '這題應該有三個答案。', spokenText: '這題應該有三個答案', correct: false, audioSrc: '/assets/lessons/L474/audio/L474-G05-wrong-two.m4a' },
  ] },
];

const productionQA = {
  imageStyle: 'Pending final contact-sheet style-lock and cast review.',
  audioPipeline: 'Pending OpenAI TTS generation and repo audio processing.',
  timingReview: 'Pending AI alignment.',
  pronunciation: 'Required: 而 ㄦˊ; 答案 ㄉㄚˊ; 應該 ㄧㄥ ㄍㄞ; 睡不著 ㄓㄠˊ; 而已 ㄧˇ; G02 prefix final 反 ㄈㄢˇ and suffix-final 了 neutral tone.',
  browserQA: '390x844 LessonPanel QA PASS for Stage 1-3, Stage 4 G01 and G02 presentation. Physical microphone hold/record/replay was not automated; G03-G05 are covered by package validation.',
  packageIntake: 'PASS on pushed origin/codex/l474-complete-package; 5 images, 10 audio files, all five canonical Stage 4 types, no blocking defects.',
  manualPlayback: 'Teacher manual pre-merge audio QA PASS at reviewed ref 610157d8cc5388b62946768b62972c4113c98f34; teacher approved the repaired L474 audio package, including the G02 prefix pause.',
};

const request = {
  id: 'L474', order: 474, title: '而', newChars: ['而'], zhuyin: { '而': 'ㄦˊ' }, charAudio: { '而': '/assets/lessons/L474/audio/char-u800c.m4a' },
  dependsOnLessons: ['L468', 'L469', 'L470', 'L471', 'L472', 'L473'], provisionalLearnedChars: provisional, allowedChars,
  handoffBoundary: { latestLesson: 'L465', learnedCharCount: 469, provisionalLearnedChars: provisional, allowedChars },
  productionBase: { ref: '29406e21ead23463b62b06812997e6a871ffcef1', latestLesson: 'L465', learnedCharCount: 469, latestReview: 'R056' },
  releaseBlockers: ['R057', 'R058', 'L468', 'L469', 'L470', 'L471', 'L472', 'L473'], packageStatus: 'partial-package', kind: 'normal', targetSentenceCount: 5, requiredRounds: 5,
  teacherNotes: 'Teacher-approved L474 Production handoff. Do not introduce 且 or 而且. L468 該 is an additional vocabulary dependency used by S02/G05, not a coverage target. No readable text or numbers in images.',
  generationConstraints: { allowedChars, provisionalLearnedChars: provisional, targetCharMinimumCount: { '而': 3 }, recentTargetMinimumCounts: { '反': 2, '案': 2, '題': 2, '答': 1, '應': 1 } },
  approvedSentences, sentenceGames, coverage: { '而': 3, '反': 2, '案': 2, '題': 2, '答': 2, '應': 1 }, productionQA,
};

const draft = {
  id: request.id, order: request.order, title: request.title, newChars: request.newChars, zhuyin: request.zhuyin, charAudio: request.charAudio,
  dependsOnLessons: request.dependsOnLessons, provisionalLearnedChars: request.provisionalLearnedChars, allowedChars, handoffBoundary: request.handoffBoundary,
  productionBase: request.productionBase, releaseBlockers: request.releaseBlockers, packageStatus: request.packageStatus, requiredRounds: 5,
  originHint: { kind: 'text', text: '而連接前後意思；反而表示結果和原先所想不同，而已表示只有這樣。' },
  sentences: approvedSentences, sentenceGames,
  optionAudioVerification: { 'L474-G05': { correct: 'L474-S02', wrongOne: 'L474-G05-wrong-one', wrongTwo: 'L474-G05-wrong-two', eachWrongGeneratedAsFullSentence: true } },
  stage4AudioAlignment: {}, latestMainChecked: '29406e21ead23463b62b06812997e6a871ffcef1', productionQA,
};

fs.mkdirSync('curriculum-workflow/lesson-requests', { recursive: true });
fs.mkdirSync('curriculum-workflow/drafts', { recursive: true });
fs.writeFileSync('curriculum-workflow/lesson-requests/L474.json', JSON.stringify(request, null, 2) + '\n');
fs.writeFileSync('curriculum-workflow/drafts/L474-draft.json', JSON.stringify(draft, null, 2) + '\n');
const packet = `# L474 生成資料包\n\n## 課程需求\n\n- 課程：L474\n- 新字：而（ㄦˊ）\n- packageStatus：partial-package\n- 正式邊界：origin/main 29406e21，L001-L465，469 字，R056\n- provisional：該、應、答、題、案、反\n- Release blockers：R057/R058、L468-L473\n\n## 鎖定 request\n\n\`\`\`json\n${JSON.stringify(request, null, 2)}\n\`\`\`\n\n## Production QA\n\nPending asset generation, alignment, interaction QA and pushed-ref intake.\n`;
fs.writeFileSync('curriculum-workflow/generated/L474-generation-packet.md', packet);
console.log(`Wrote L474 request/draft/packet with ${allowedChars.length} allowed chars.`);
