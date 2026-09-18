import fs from 'node:fs';

const source = JSON.parse(fs.readFileSync('src/curriculum/sample-lessons.json', 'utf8'));
const sourceMainCommit = '80431be079de2085bbab084db7da0a3698461a92';
const formal = [...new Set(source.lessons.flatMap((lesson) => lesson.newChars ?? []))];
const provisionalLearnedChars = ['突', '實', '其', '中', '午'];
const allowedChars = [...new Set([...formal, ...provisionalLearnedChars, '文'])];
const castStyle = 'Square 1:1 rich warm detailed pencil-and-watercolor modern children picture-book illustration. Use the full L058 set as STYLE ONLY, with natural refined preschool-child proportions, warm Taiwan environments, rich paper and fabric texture, clear safe action, uncluttered composition and safe margins. Recurring protagonist girl: preschool child with short dark-brown bob, pink hair clip, expressive dark eyes, pink cardigan over cream blouse, navy skirt and pink shoes. Recurring mother: adult woman with warm brown bob, cream blouse and blue jeans. Recurring father: adult man with short dark hair, warm approachable face, pale-blue collared shirt and khaki trousers. Generic people remain visually distinct from recurring cast. No readable text, numbers, labels, brands, logos, question-mark symbols or watermark.';
const sentence = (id, text, spokenText, displayLines, focusChar, imageNotes) => ({
  id, text, spokenText, displayLines, focusChar, imageNotes,
  imagePrompt: `${castStyle} ${imageNotes}`,
  imageSrc: `/assets/lessons/L461/images/${id}.webp`, approved: true,
  audio: { src: `/assets/lessons/L461/audio/${id}.m4a`, durationMs: 0, charTimings: [] },
});
const sentences = [
  sentence('L461-S01', '中午，爸爸帶我去文具店。', '中午爸爸帶我去文具店', ['中午，', '爸爸帶我去', '文具店。'], '文', '明亮中午，固定主角爸爸陪主角女孩走進文具店，店內可見筆、筆記本、紙張等陳列；女孩看向文具，爸爸在旁陪同。不是上作文課，不畫成只有女孩自行外出；店名、品牌及價牌不需可讀文字或數字。'),
  sentence('L461-S02', '爸爸你看，我的作文也在其中。', '爸爸你看我的作文也在其中', ['爸爸你看，', '我的作文', '也在其中。'], '文', '學校走廊或教室外的作品展示牆，張貼許多學生作文；主角女孩開心指向其中自己的那張，轉頭請固定主角爸爸看，爸爸順著手勢看作品。必須呈現多篇作品，才能交代「其中」；不是台上幾位老師，也不是只有一張紙。紙面有文章行列的整體視覺即可，從距離與斜角呈現，不要求可讀姓名、標題或漢字內容。'),
  sentence('L461-S03', '我其實沒吃午餐。', '我其實沒吃午餐', ['我其實', '沒吃午餐。'], '午', '主角女孩放學回家，拿出尚未動過的午餐盒，向固定媽媽說明自己沒有吃午餐；媽媽原先以為她已吃過，現在專心聽她說。盒內仍有完整飯菜，女孩表情坦白、略有飢餓感，不畫成已吃完空盒，也不擅自加入生病、處罰或節食情節。'),
  sentence('L461-S04', '風突然變大，把帽子吹走了。', '風突然變大把帽子吹走了', ['風突然變大，', '把帽子', '吹走了。'], '帽', '戶外公園步道，主角女孩的帽子剛被一陣大風吹離頭頂，女孩驚訝伸手，固定爸爸在旁；樹葉和衣角的方向交代風勢。帽子仍清楚可見，不畫成孩子自己拋帽，不追進車道、水邊或高處。'),
  sentence('L461-S05', '這本書只有圖畫，沒有文字。', '這本書只有圖畫沒有文字', ['這本書', '只有圖畫，', '沒有文字。'], '文', '主角女孩翻看一本無字圖畫書，構圖清楚看見展開的兩頁，頁面只有連續的圖畫，沒有任何文字、頁碼、標題或模擬字跡。以可見頁面呈現真正的無字書，不能只畫封面，也不能把書畫成空白本。'),
];
const games = [
  { id: 'L461-G01', type: 'find-character', sentenceId: 'L461-S01', targetChar: '文', targetCharIndex: 7 },
  { id: 'L461-G02', type: 'teach-character', sentenceId: 'L461-S02', targetChar: '文', targetCharIndex: 7, teachAudio: { prefixText: '爸爸你看我的作', suffixText: '也在其中', prefixSrc: '/assets/lessons/L461/audio/L461-G02-prefix.m4a', suffixSrc: '/assets/lessons/L461/audio/L461-G02-suffix.m4a' } },
  { id: 'L461-G03', type: 'missing-character', sentenceId: 'L461-S05', targetChar: '文', targetCharIndex: 9, missingIndexes: [9], options: [
    { id: 'L461-G03-O1', text: '名', correct: false }, { id: 'L461-G03-O2', text: '文', correct: true }, { id: 'L461-G03-O3', text: '數', correct: false },
  ] },
  { id: 'L461-G04', type: 'partial-order', sentenceId: 'L461-S04', targetChar: '帽', targetCharIndex: 6, missingIndexes: [5, 6, 7, 8], options: [
    { id: 'L461-G04-O1', text: '帽', correct: true, correctOrder: 1 }, { id: 'L461-G04-O2', text: '把', correct: true, correctOrder: 0 }, { id: 'L461-G04-O3', text: '吹', correct: true, correctOrder: 3 }, { id: 'L461-G04-O4', text: '子', correct: true, correctOrder: 2 },
  ] },
  { id: 'L461-G05', type: 'choose-pronunciation', sentenceId: 'L461-S03', targetChar: '午', targetCharIndex: 5, options: [
    { id: 'L461-G05-O1', text: '我其實沒吃早餐。', spokenText: '我其實沒吃早餐', correct: false, audioSrc: '/assets/lessons/L461/audio/L461-G05-wrong-one.m4a' },
    { id: 'L461-G05-O2', text: '我其實沒吃午餐。', spokenText: '我其實沒吃午餐', correct: true, audioSrc: '/assets/lessons/L461/audio/L461-S03.m4a' },
    { id: 'L461-G05-O3', text: '我其實沒吃晚餐。', spokenText: '我其實沒吃晚餐', correct: false, audioSrc: '/assets/lessons/L461/audio/L461-G05-wrong-two.m4a' },
  ] },
];
const lesson = {
  id: 'L461', order: 461, title: '文', newChars: ['文'], zhuyin: { 文: 'ㄨㄣˊ' }, charAudio: { 文: '/assets/lessons/L461/audio/char-u6587.m4a' },
  sourceMainCommit, allowedChars, provisionalLearnedChars, dependsOnLessons: ['L456', 'L457', 'L458', 'L459', 'L460'],
  releaseDependencies: { lessonOrderThrough: 460, requiredReviewPairs: [{ ids: ['R055', 'R056'], afterLessonOrder: 450, targetLessonRange: { startOrder: 421, endOrder: 450 }, relation: 'must merge before L461 Release; excluded from L461 package' }] },
  packageStatus: 'claimed', requiredRounds: 5,
  teacherNotes: 'Production C in parallel-c. Exact teacher-approved sentences and canonical games. Formal source L001-L446 (450 unique chars), plus provisional 突、實、其、中、午 and current 文 = 456. L456-L460 and R055/R056 block Release. Shared production JSON, planner and ledger integration belong to Release.',
  sentenceGames: games, sentences,
};
const request = { ...structuredClone(lesson), coverageRequirements: { allowedChars, provisionalLearnedChars, targetCharMinimumCount: { 文: 3 }, recentTargetMinimumCounts: { 午: 2, 中: 2, 其: 2, 實: 1, 突: 1 } }, approvedSentences: structuredClone(sentences) };
const han = (text) => [...text.matchAll(/\p{Script=Han}/gu)].map((match) => match[0]);
const errors = [];
if (formal.length !== 450 || allowedChars.length !== 456 || source.lessons.at(-1)?.id !== 'L446') errors.push('source boundary');
for (const item of [...sentences, ...games.flatMap((game) => game.options ?? [])]) for (const char of han(item.text)) if (!allowedChars.includes(char)) errors.push(`unlearned ${char}`);
for (const item of sentences) if (item.spokenText !== han(item.text).join('') || item.displayLines.join('') !== item.text || item.displayLines.some((line) => [...line].length > 6)) errors.push(`${item.id} sentence mechanics`);
for (const game of games) {
  const chars = han(sentences.find((item) => item.id === game.sentenceId).text);
  if (chars[game.targetCharIndex] !== game.targetChar) errors.push(`${game.id} target`);
  if (game.type === 'partial-order') for (const option of game.options) if (chars[game.missingIndexes[option.correctOrder]] !== option.text) errors.push(`${game.id} order`);
  if (game.type === 'teach-character' && (game.teachAudio.prefixText !== chars.slice(0, game.targetCharIndex).join('') || game.teachAudio.suffixText !== chars.slice(game.targetCharIndex + 1).join(''))) errors.push(`${game.id} split`);
}
const coverage = Object.fromEntries(['文', '午', '中', '其', '實', '突'].map((char) => [char, sentences.flatMap((item) => han(item.text)).filter((item) => item === char).length]));
if (JSON.stringify(Object.values(coverage)) !== JSON.stringify([3, 2, 2, 2, 1, 1])) errors.push('coverage');
if (errors.length) throw new Error(errors.join('; '));
fs.mkdirSync('curriculum-workflow/lesson-requests', { recursive: true });
fs.mkdirSync('curriculum-workflow/drafts', { recursive: true });
fs.writeFileSync('curriculum-workflow/lesson-requests/L461.json', `${JSON.stringify(request, null, 2)}\n`);
fs.writeFileSync('curriculum-workflow/drafts/L461-draft.json', `${JSON.stringify(lesson, null, 2)}\n`);
fs.writeFileSync('curriculum-workflow/generated/L461-generation-packet.md', `# L461 文 — Production generation packet\n\npackageStatus: claimed\n\nSource main: ${sourceMainCommit}; formal L001-L446, last 音, 450 unique learned characters. Expanded locked allowedChars: 456. Production C owns this lesson-local package in parallel-c.\n\nRelease dependencies: L456-L460 and review milestone R055/R056 after L450. The review pair is excluded from this package.\n\n## Approved request\n\n\`\`\`json\n${JSON.stringify(request, null, 2)}\n\`\`\`\n`);
console.log('L461 handoff PASS', { sourceMainCommit, formal: formal.length, allowed: allowedChars.length, coverage });
