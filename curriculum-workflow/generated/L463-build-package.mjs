import fs from 'node:fs';

const source = JSON.parse(fs.readFileSync('src/curriculum/sample-lessons.json', 'utf8'));
const sourceMainCommit = '80431be079de2085bbab084db7da0a3698461a92';
const formal = [...new Set(source.lessons.flatMap((lesson) => lesson.newChars ?? []))];
const provisionalLearnedChars = ['表', '其', '中', '午', '文', '日'];
const allowedChars = [...new Set([...formal, ...provisionalLearnedChars, '期'])];
const castStyle = 'Square 1:1 rich warm detailed pencil-and-watercolor modern children picture-book illustration. Use the full L058 set as STYLE ONLY, with natural refined preschool-child proportions, warm Taiwan environments, rich paper and fabric texture, clear safe action, uncluttered composition and safe margins. Recurring protagonist girl: preschool child with short dark-brown bob, pink hair clip, expressive dark eyes, pink cardigan over cream blouse, navy skirt and pink shoes. Recurring mother: adult woman with warm brown bob, cream blouse and blue jeans. Recurring father: adult man with short dark hair, warm approachable face, pale-blue collared shirt and khaki trousers. Generic people remain visually distinct from recurring cast. No readable text, numbers, labels, brands, logos, question-mark symbols or watermark.';
const sentence = (id, text, spokenText, displayLines, focusChar, imageNotes, extra = {}) => ({
  id, text, spokenText, displayLines, focusChar, imageNotes,
  imagePrompt: `${castStyle} ${imageNotes}`,
  imageSrc: `/assets/lessons/L463/images/${id}.webp`, approved: true,
  audio: { src: `/assets/lessons/L463/audio/${id}.m4a`, durationMs: 0, charTimings: [] },
  ...extra,
});
const sentences = [
  sentence('L463-S01', '星期日下午，文具店沒開。', '星期日下午文具店沒開', ['星期日下午，', '文具店沒開。'], '期', '主角女孩與固定爸爸來到文具店門口，發現店門關著。透過展示窗可辨認筆、紙本等文具，店內無人營業；外面是白天下午。重點是父女到店卻沒開門，不要求圖片用營業時間文字證明星期日。'),
  sentence('L463-S02', '日文課改到明天下午。', '日文課改到明天下午', ['日文課改到', '明天下午。'], '午', '家中，固定媽媽剛收到課程改時間的通知，拿著手機向主角女孩說明；女孩把原本準備上課的課本收回袋中。畫面是收到改課通知，不是正在上課。不靠人物外貌表達日文，也不要求手機或課本出現可讀文字；明天下午由句子交代。'),
  sentence('L463-S03', '借的書明天到期，別忘了還。', '借的書明天到期別忘了還', ['借的書', '明天到期，', '別忘了還。'], '期', '家中，固定媽媽指著借回家的書，提醒主角女孩準備歸還；女孩正把書放進外出用袋子。表現提醒與準備，不畫成今天已在櫃台還書。到期日不用印成可讀文字。', { zhuyinOverrides: { '10': 'ㄏㄨㄢˊ' } }),
  sentence('L463-S04', '這些水果，其中一半要送人。', '這些水果其中一半要送人', ['這些水果，', '其中一半', '要送人。'], '中', '固定媽媽與主角女孩在桌邊分裝水果。六顆大小相近的蘋果分成相等兩份，三顆留在桌上，另外三顆放入敞開的送禮袋，仍清楚可見。重點是其中一半準備送人，不是販賣或吃掉；不靠數字標籤表示一半。'),
  sentence('L463-S05', '報名表上，要寫名字和日期。', '報名表上要寫名字和日期', ['報名表上，', '要寫名字', '和日期。'], '期', '活動報名櫃台，一位 generic 工作人員指著報名表的填寫欄位，主角女孩拿筆準備填寫，固定爸爸陪在旁邊。表格有自然的欄線，以距離及角度避免清楚呈現姓名、日期或數字。不要改成一般畫畫或抄寫作業。'),
];
const games = [
  { id: 'L463-G01', type: 'find-character', sentenceId: 'L463-S01', targetChar: '期', targetCharIndex: 1 },
  { id: 'L463-G02', type: 'teach-character', sentenceId: 'L463-S03', targetChar: '期', targetCharIndex: 6, teachAudio: { prefixText: '借的書明天到', suffixText: '別忘了還', prefixSrc: '/assets/lessons/L463/audio/L463-G02-prefix.m4a', suffixSrc: '/assets/lessons/L463/audio/L463-G02-suffix.m4a' } },
  { id: 'L463-G03', type: 'missing-character', sentenceId: 'L463-S05', targetChar: '期', targetCharIndex: 10, missingIndexes: [10], options: [
    { id: 'L463-G03-O1', text: '光', correct: false }, { id: 'L463-G03-O2', text: '期', correct: true }, { id: 'L463-G03-O3', text: '出', correct: false },
  ] },
  { id: 'L463-G04', type: 'partial-order', sentenceId: 'L463-S02', targetChar: '午', targetCharIndex: 8, missingIndexes: [5, 6, 7, 8], options: [
    { id: 'L463-G04-O1', text: '下', correct: true, correctOrder: 2 }, { id: 'L463-G04-O2', text: '明', correct: true, correctOrder: 0 }, { id: 'L463-G04-O3', text: '午', correct: true, correctOrder: 3 }, { id: 'L463-G04-O4', text: '天', correct: true, correctOrder: 1 },
  ] },
  { id: 'L463-G05', type: 'choose-pronunciation', sentenceId: 'L463-S04', targetChar: '中', targetCharIndex: 5, options: [
    { id: 'L463-G05-O1', text: '這些水果，其中一半要送人。', spokenText: '這些水果其中一半要送人', correct: true, audioSrc: '/assets/lessons/L463/audio/L463-S04.m4a' },
    { id: 'L463-G05-O2', text: '這些水果，其中一半要賣掉。', spokenText: '這些水果其中一半要賣掉', correct: false, audioSrc: '/assets/lessons/L463/audio/L463-G05-wrong-one.m4a' },
    { id: 'L463-G05-O3', text: '這些水果，其中一半要吃掉。', spokenText: '這些水果其中一半要吃掉', correct: false, audioSrc: '/assets/lessons/L463/audio/L463-G05-wrong-two.m4a' },
  ] },
];
const lesson = {
  id: 'L463', order: 463, title: '期', newChars: ['期'], zhuyin: { 期: 'ㄑㄧˊ' }, charAudio: { 期: '/assets/lessons/L463/audio/char-u671f.m4a' },
  sourceMainCommit, allowedChars, provisionalLearnedChars, dependsOnLessons: ['L454', 'L458', 'L459', 'L460', 'L463', 'L462'],
  releaseDependencies: { lessonOrderThrough: 462, requiredReviewPairs: [{ ids: ['R055', 'R056'], afterLessonOrder: 450, targetLessonRange: { startOrder: 421, endOrder: 450 }, relation: 'must merge before L463 Release; excluded from L463 package' }] },
  packageStatus: 'claimed', requiredRounds: 5,
  teacherNotes: 'Production A in parallel-a. Exact teacher-approved sentences and canonical games. Formal source L001-L446 (450 unique chars), plus provisional 表、其、中、午、文、日 and current 期 = 457. L454, L458-L462 and R055/R056 block Release. Shared production JSON, planner and ledger integration belong to Release.',
  sentenceGames: games, sentences,
};
const request = { ...structuredClone(lesson), coverageRequirements: { allowedChars, provisionalLearnedChars, targetCharMinimumCount: { 期: 3 }, recentTargetMinimumCounts: { 日: 2, 文: 2, 午: 2, 中: 1, 其: 1 } }, approvedSentences: structuredClone(sentences) };
const han = (text) => [...text.matchAll(/\p{Script=Han}/gu)].map((match) => match[0]);
const errors = [];
if (formal.length !== 450 || allowedChars.length !== 457 || source.lessons.at(-1)?.id !== 'L446') errors.push('source boundary');
for (const item of [...sentences, ...games.flatMap((game) => game.options ?? [])]) for (const char of han(item.text)) if (!allowedChars.includes(char)) errors.push(`unlearned ${char}`);
for (const item of sentences) if (item.spokenText !== han(item.text).join('') || item.displayLines.join('') !== item.text || item.displayLines.some((line) => [...line].length > 6)) errors.push(`${item.id} sentence mechanics`);
for (const game of games) {
  const chars = han(sentences.find((item) => item.id === game.sentenceId).text);
  if (chars[game.targetCharIndex] !== game.targetChar) errors.push(`${game.id} target`);
  if (game.type === 'partial-order') for (const option of game.options) if (chars[game.missingIndexes[option.correctOrder]] !== option.text) errors.push(`${game.id} order`);
  if (game.type === 'teach-character' && (game.teachAudio.prefixText !== chars.slice(0, game.targetCharIndex).join('') || game.teachAudio.suffixText !== chars.slice(game.targetCharIndex + 1).join(''))) errors.push(`${game.id} split`);
}
const coverage = Object.fromEntries(['期', '日', '文', '午', '中', '其'].map((char) => [char, sentences.flatMap((item) => han(item.text)).filter((item) => item === char).length]));
if (JSON.stringify(Object.values(coverage)) !== JSON.stringify([3, 3, 2, 2, 1, 1])) errors.push('coverage');
if (errors.length) throw new Error(errors.join('; '));
fs.mkdirSync('curriculum-workflow/lesson-requests', { recursive: true });
fs.mkdirSync('curriculum-workflow/drafts', { recursive: true });
fs.writeFileSync('curriculum-workflow/lesson-requests/L463.json', `${JSON.stringify(request, null, 2)}\n`);
fs.writeFileSync('curriculum-workflow/drafts/L463-draft.json', `${JSON.stringify(lesson, null, 2)}\n`);
fs.writeFileSync('curriculum-workflow/generated/L463-generation-packet.md', `# L463 期 — Production generation packet\n\npackageStatus: claimed\n\nSource main: ${sourceMainCommit}; formal L001-L446, last 音, 450 unique learned characters. Expanded locked allowedChars: 457. Production A owns this lesson-local package in parallel-a.\n\nRelease dependencies: L454, L458-L462 and review milestone R055/R056 after L450. The review pair is excluded from this package.\n\n## Approved request\n\n\`\`\`json\n${JSON.stringify(request, null, 2)}\n\`\`\`\n`);
console.log('L463 handoff PASS', { sourceMainCommit, formal: formal.length, allowed: allowedChars.length, coverage });
