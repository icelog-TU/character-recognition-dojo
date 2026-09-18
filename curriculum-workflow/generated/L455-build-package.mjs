import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const source = JSON.parse(fs.readFileSync('src/curriculum/sample-lessons.json', 'utf8'));
const sourceMainCommit = execFileSync('git', ['rev-parse', 'origin/main'], { encoding: 'utf8' }).trim();
const formal = [...new Set(source.lessons.flatMap((lesson) => lesson.newChars ?? []))];
const provisionalLearnedChars = ['舞', '台', '候', '演', '表'];
const allowedChars = [...new Set([...formal, ...provisionalLearnedChars, '現'])];
const castStyle = 'Square 1:1 rich warm detailed pencil-and-watercolor modern children picture-book illustration. Use the full L058 set as STYLE ONLY, with natural refined child proportions, warm Taiwan environments, rich paper and fabric texture, clear safe action, uncluttered composition and safe margins. Recurring protagonist girl: preschool child with short dark-brown bob, pink hair clip, expressive dark eyes, pink cardigan over cream blouse, navy skirt and pink shoes. Recurring mother: adult woman with warm brown bob, cream blouse and blue jeans. Xiaoyue must match public/assets/reference/lesson-cast/xiaoyue.webp: long softly curled deep-chestnut hair, crescent-moon hair clip, lavender cardigan, pale-cream top and teal pleated skirt. Generic people remain visually distinct from recurring cast. No readable text, numbers, labels, brands, logos, question-mark symbols or watermark.';
const sentence = (id, text, spokenText, displayLines, focusChar, imageNotes) => ({
  id, text, spokenText, displayLines, focusChar, imageNotes,
  imagePrompt: `${castStyle} ${imageNotes}`,
  imageSrc: `/assets/lessons/L455/images/${id}.webp`, approved: true,
  audio: { src: `/assets/lessons/L455/audio/${id}.m4a`, durationMs: 0, charTimings: [] },
});
const sentences = [
  sentence('L455-S01', '現在換小月上台表演。', '現在換小月上台表演', ['現在換小月', '上台表演。'], '現', '學校活動現場，上一位 generic child 正離開舞台，固定老師在舞台側邊以手勢清楚示意現在輪到小月。小月正踏上舞台準備開始，重點是上一位離開、老師交接、小月上台的時間順序，不是所有孩子同時表演。小月必須保留深栗色長柔卷髮、小月亮髮夾、薰衣草 cardigan、淡奶油上衣與青綠百褶裙，不可畫成主角女孩或 generic classmate。'),
  sentence('L455-S02', '表演的時候，我忘了舞步。', '表演的時候我忘了舞步', ['表演的時候，', '我忘了舞步。'], '舞', '學校舞台上，主角女孩與少量 generic classmates 正在跳舞。其他孩子做一致的簡單舞步，主角女孩停住、看向同伴，表情稍微困惑，雙手與腳步顯示她忘記下一個舞步。不是跌倒、受傷或被嘲笑，不加文字、數字或問號符號。'),
  sentence('L455-S03', '我發現葉子後面有一條小蟲。', '我發現葉子後面有一條小蟲', ['我發現葉子', '後面有一條', '小蟲。'], '現', '明亮花園中，主角女孩用指尖輕輕翻起一片仍長在植物上的大葉子，葉片背面清楚露出一條友善的小毛毛蟲。葉片背面、毛毛蟲與女孩好奇注視的視線形成畫面重點。女孩不撕葉、不抓蟲，毛毛蟲不可畫在葉片正面。'),
  sentence('L455-S04', '小時候怕水，現在會游泳了。', '小時候怕水現在會游泳了', ['小時候怕水，', '現在會', '游泳了。'], '現', '主畫面呈現現在的主角女孩在泳池安全淺水區游泳，表情安心，旁邊有外貌不同於固定家人的 generic 成人教練近距離照看。小型無字回憶泡泡呈現同一女孩更年幼時坐在池邊，因怕水而靠著固定媽媽。過去與現在的女孩保留相同臉型、短深棕髮與粉紅髮夾，不設定確切年齡，不畫成兩個不同孩子，不畫溺水或無人看顧。'),
  sentence('L455-S05', '山洞裡出現了怪物。', '山洞裡出現了怪物', ['山洞裡', '出現了怪物。'], '怪', '溫暖奇幻繪本情境，distinct generic young adventurer 站在明亮可見的山洞口，看見一隻友善、有驚奇感但不恐怖的怪物從洞內走向洞口。怪物完整身體清楚可見，洞內有柔和反射光，不只剩眼睛或模糊影子。勇者不攻擊，怪物不傷人，不血腥；不是主角家門口的人影，也不是星星出現。'),
];
const games = [
  { id: 'L455-G01', type: 'find-character', sentenceId: 'L455-S01', targetChar: '現', targetCharIndex: 0 },
  { id: 'L455-G02', type: 'teach-character', sentenceId: 'L455-S04', targetChar: '現', targetCharIndex: 5, teachAudio: { prefixText: '小時候怕水', suffixText: '在會游泳了', prefixSrc: '/assets/lessons/L455/audio/L455-G02-prefix.m4a', suffixSrc: '/assets/lessons/L455/audio/L455-G02-suffix.m4a' } },
  { id: 'L455-G03', type: 'missing-character', sentenceId: 'L455-S03', targetChar: '現', targetCharIndex: 2, missingIndexes: [2], options: [
    { id: 'L455-G03-O1', text: '見', correct: false }, { id: 'L455-G03-O2', text: '現', correct: true }, { id: 'L455-G03-O3', text: '看', correct: false },
  ] },
  { id: 'L455-G04', type: 'partial-order', sentenceId: 'L455-S05', targetChar: '怪', targetCharIndex: 6, missingIndexes: [5, 6, 7], options: [
    { id: 'L455-G04-O1', text: '物', correct: true, correctOrder: 2 }, { id: 'L455-G04-O2', text: '了', correct: true, correctOrder: 0 }, { id: 'L455-G04-O3', text: '怪', correct: true, correctOrder: 1 },
  ] },
  { id: 'L455-G05', type: 'choose-pronunciation', sentenceId: 'L455-S02', targetChar: '舞', targetCharIndex: 8, options: [
    { id: 'L455-G05-O1', text: '表演的時候，我忘了舞衣。', spokenText: '表演的時候我忘了舞衣', correct: false, audioSrc: '/assets/lessons/L455/audio/L455-G05-wrong-one.m4a' },
    { id: 'L455-G05-O2', text: '表演的時候，我忘了舞步。', spokenText: '表演的時候我忘了舞步', correct: true, audioSrc: '/assets/lessons/L455/audio/L455-S02.m4a' },
    { id: 'L455-G05-O3', text: '表演的時候，你忘了舞步。', spokenText: '表演的時候你忘了舞步', correct: false, audioSrc: '/assets/lessons/L455/audio/L455-G05-wrong-two.m4a' },
  ] },
];
const lesson = {
  id: 'L455', order: 455, title: '現', newChars: ['現'], zhuyin: { 現: 'ㄒㄧㄢˋ' }, charAudio: { 現: '/assets/lessons/L455/audio/char-u73fe.m4a' },
  sourceMainCommit, allowedChars, provisionalLearnedChars, dependsOnLessons: ['L450', 'L451', 'L452', 'L453', 'L454'],
  releaseDependencies: { lessonOrderThrough: 454, requiredReviewPairs: [{ ids: ['R055', 'R056'], afterLessonOrder: 450, targetLessonRange: { startOrder: 421, endOrder: 450 }, relation: 'must merge before L455 Release; excluded from L455 package' }] },
  packageStatus: 'claimed', requiredRounds: 5,
  teacherNotes: 'Production C in parallel-c. Exact teacher-approved sentences and canonical games. Formal source L001-L443 (447 unique chars), plus provisional 舞、台、候、演、表 and current 現 = 453. L450-L454 and R055/R056 block Release. Shared production JSON, planner and ledger integration belong to Release.',
  sentenceGames: games, sentences,
};
const request = { ...structuredClone(lesson), coverageRequirements: { allowedChars, provisionalLearnedChars, targetCharMinimumCount: { 現: 3 }, recentTargetMinimumCounts: { 表: 2, 演: 2, 候: 2, 台: 1, 舞: 1 } }, approvedSentences: structuredClone(sentences) };
const han = (text) => [...text.matchAll(/\p{Script=Han}/gu)].map((match) => match[0]);
const errors = [];
if (formal.length !== 447 || allowedChars.length !== 453 || source.lessons.at(-1)?.id !== 'L443') errors.push('source boundary');
for (const item of [...sentences, ...games.flatMap((game) => game.options ?? [])]) for (const char of han(item.text)) if (!allowedChars.includes(char)) errors.push(`unlearned ${char}`);
for (const item of sentences) if (item.spokenText !== han(item.text).join('') || item.displayLines.join('') !== item.text || item.displayLines.some((line) => [...line].length > 6)) errors.push(`${item.id} sentence mechanics`);
for (const game of games) {
  const chars = han(sentences.find((item) => item.id === game.sentenceId).text);
  if (chars[game.targetCharIndex] !== game.targetChar) errors.push(`${game.id} target`);
  if (game.type === 'partial-order') for (const option of game.options) if (chars[game.missingIndexes[option.correctOrder]] !== option.text) errors.push(`${game.id} order`);
  if (game.type === 'teach-character' && (game.teachAudio.prefixText !== chars.slice(0, game.targetCharIndex).join('') || game.teachAudio.suffixText !== chars.slice(game.targetCharIndex + 1).join(''))) errors.push(`${game.id} split`);
}
const coverage = Object.fromEntries(['現', '表', '演', '候', '台', '舞'].map((char) => [char, sentences.flatMap((item) => han(item.text)).filter((item) => item === char).length]));
if (JSON.stringify(Object.values(coverage)) !== JSON.stringify([4, 2, 2, 2, 1, 1])) errors.push('coverage');
if (errors.length) throw new Error(errors.join('; '));
fs.mkdirSync('curriculum-workflow/lesson-requests', { recursive: true });
fs.mkdirSync('curriculum-workflow/drafts', { recursive: true });
fs.writeFileSync('curriculum-workflow/lesson-requests/L455.json', `${JSON.stringify(request, null, 2)}\n`);
fs.writeFileSync('curriculum-workflow/drafts/L455-draft.json', `${JSON.stringify(lesson, null, 2)}\n`);
fs.writeFileSync('curriculum-workflow/generated/L455-generation-packet.md', `# L455 現 — Production generation packet\n\npackageStatus: claimed\n\nSource main: ${sourceMainCommit}; formal L001-L443, last 操, 447 unique learned characters. Expanded locked allowedChars: 453. Production C owns this lesson-local package in parallel-c.\n\nRelease dependencies: L450-L454 and review milestone R055/R056 after L450. The review pair is excluded from this package.\n\n## Approved request\n\n\`\`\`json\n${JSON.stringify(request, null, 2)}\n\`\`\`\n`);
console.log('L455 handoff PASS', { sourceMainCommit, formal: formal.length, allowed: allowedChars.length, coverage });
