import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const han = (text) => [...text.matchAll(/\p{Script=Han}/gu)].map((match) => match[0]);
const sourceMainCommit = execFileSync('git', ['rev-parse', '72b61a61'], { encoding: 'utf8' }).trim();
const main = JSON.parse(execFileSync('git', ['show', `${sourceMainCommit}:src/curriculum/sample-lessons.json`], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }));
const provisionalLearnedChars = ['補', '修'];
const allowedChars = [...new Set([...main.lessons.flatMap((lesson) => lesson.newChars), ...provisionalLearnedChars, '習'])];
const style = 'Square 1:1 rich warm detailed pencil-and-watercolor modern children picture-book illustration. Use the full L058 set as STYLE ONLY and refined child proportions from L115-S01/S02, L118-S02, L119-S01 and L128-S03. Recurring protagonist girl: preschool child with short dark-brown bob, pink hair clip, expressive dark eyes, pink cardigan over cream blouse, navy skirt and pink shoes. Recurring mother: adult woman with warm brown bob, cream blouse and blue jeans, clearly older and distinct from teacher. Xiaoguang must match public/assets/reference/lesson-cast/xiaoguang.webp: round glasses, tidy short black hair, white short-sleeve shirt, deep navy knit vest and khaki shorts. Generic classmates must not resemble Xiaoyue, Xiaoguang or the recurring YOU boy. Natural refined faces and proportions, warm Taiwan environments, rich paper and fabric texture, clear safe action, uncluttered composition and safe margins. No readable text, numbers, labels, brands, logos or watermark. ';
const records = [
  ['我想學習怎麼修補衣服。', ['我想學習', '怎麼修補', '衣服。'], '習', '家中明亮桌邊，主角女孩拿著一件有小破口的舊衣服，認真看固定媽媽示範用布片修補。媽媽安全操作針線，女孩在幾塊布片中挑選合適的一塊並靠近觀察。衣服仍有小破口，呈現正在學習而不是已全部完成。尖銳工具只在媽媽手中。'],
  ['小光幫助我完成補習班功課。', ['小光幫助我', '完成補習班', '功課。'], '習', '補習班或課後學習教室，主角女孩和固定小光坐在同一張學習桌旁，各自有分開的作業紙。小光指著自己的課本耐心解說，女孩自己拿筆完成自己的功課。不可畫成小光代寫或女孩照抄。紙張內容不可讀。小光嚴格沿用 round glasses、整齊短黑髮、白短袖襯衫、深藍針織背心、卡其短褲。'],
  ['自助影印不能用，店員在修理。', ['自助影印', '不能用，', '店員在修理。'], '修', '便利商店或影印店的自助影印區，一台大型落地自助影印機暫停使用。generic 店員打開機器側板或紙匣，正在檢查修理；主角女孩拿著幾張要影印的紙，在安全距離安靜等候。機器螢幕、按鍵和面板不得出現文字、數字、錯誤代碼、品牌或標誌。不是家用印表機，女孩不碰機器內部。'],
  ['自習時，同學互相借書來看。', ['自習時，', '同學互相', '借書來看。'], '習', '安靜的教室自習時間，兩位 generic 同學坐在相鄰座位，各自拿出一本不同的圖畫書，正友善地互相交換借閱；其他 generic 同學在背景各自安靜看書。兩位主要同學不可誤畫成小月、小光、主角女孩或固定 YOU 男孩。書封沒有可讀書名。'],
  ['我的心願是學會游泳。', ['我的心願', '是學會游泳。'], '願', '游泳池邊，主角女孩穿合適的兒童泳裝與泳帽，站在安全淺水區旁，看著一位外貌不同於固定老師和媽媽的 generic 游泳教練教其他孩子游泳。女孩期待但尚未下水獨游；上方小型無字想像泡泡呈現將來同一位女孩能自己游過泳池。沒有泳道數字、告示、品牌或文字。'],
];
const audioRoot = '/assets/lessons/L438/audio/';
const sentences = records.map(([text, displayLines, focusChar, imageNotes], index) => {
  const id = `L438-S0${index + 1}`;
  return {
    id,
    text,
    spokenText: han(text).join(''),
    displayLines,
    focusChar,
    imageNotes,
    imagePrompt: style + imageNotes,
    imageSrc: `/assets/lessons/L438/images/${id}.webp`,
    approved: true,
    audio: { src: `${audioRoot}${id}.m4a`, durationMs: 0, charTimings: [] },
  };
});
const sentenceGames = [
  { id: 'L438-G01', type: 'find-character', sentenceId: 'L438-S01', targetChar: '習', targetCharIndex: 3 },
  { id: 'L438-G02', type: 'teach-character', sentenceId: 'L438-S02', targetChar: '習', targetCharIndex: 8, teachAudio: { prefixText: '小光幫助我完成補', suffixText: '班功課', prefixSrc: `${audioRoot}L438-G02-prefix.m4a`, suffixSrc: `${audioRoot}L438-G02-suffix.m4a` } },
  { id: 'L438-G03', type: 'missing-character', sentenceId: 'L438-S04', targetChar: '習', targetCharIndex: 1, missingIndexes: [1], options: [
    { id: 'L438-G03-O1', text: '學', correct: false },
    { id: 'L438-G03-O2', text: '習', correct: true },
    { id: 'L438-G03-O3', text: '修', correct: false },
  ] },
  { id: 'L438-G04', type: 'partial-order', sentenceId: 'L438-S03', targetChar: '修', targetCharIndex: 10, missingIndexes: [8, 9, 10, 11], options: [
    { id: 'L438-G04-O1', text: '修', correct: true, correctOrder: 2 },
    { id: 'L438-G04-O2', text: '員', correct: true, correctOrder: 0 },
    { id: 'L438-G04-O3', text: '理', correct: true, correctOrder: 3 },
    { id: 'L438-G04-O4', text: '在', correct: true, correctOrder: 1 },
  ] },
  { id: 'L438-G05', type: 'choose-pronunciation', sentenceId: 'L438-S05', targetChar: '願', targetCharIndex: 3, options: [
    { id: 'L438-G05-O1', text: '我的心願是學會游泳。', spokenText: '我的心願是學會游泳', correct: true, audioSrc: `${audioRoot}L438-S05.m4a` },
    { id: 'L438-G05-O2', text: '我的心願是學會畫畫。', spokenText: '我的心願是學會畫畫', correct: false, audioSrc: `${audioRoot}L438-G05-wrong-one.m4a` },
    { id: 'L438-G05-O3', text: '我的心願是學會下棋。', spokenText: '我的心願是學會下棋', correct: false, audioSrc: `${audioRoot}L438-G05-wrong-two.m4a` },
  ] },
];

const errors = [];
for (const sentence of sentences) {
  if (sentence.spokenText !== han(sentence.text).join('') || sentence.displayLines.join('') !== sentence.text || sentence.displayLines.some((line) => [...line].length > 6) || han(sentence.text).length < 9 || han(sentence.text).length > 12 || !sentence.text.includes(sentence.focusChar)) errors.push(`${sentence.id} text/lines/focus`);
}
for (const game of sentenceGames) {
  const chars = han(sentences.find((sentence) => sentence.id === game.sentenceId).text);
  if (chars[game.targetCharIndex] !== game.targetChar) errors.push(`${game.id} target`);
  if (game.type === 'partial-order') for (const option of game.options) if (chars[game.missingIndexes[option.correctOrder]] !== option.text || han(option.text).length !== 1) errors.push(`${game.id} order`);
  if (game.type === 'teach-character' && (game.teachAudio.prefixText !== chars.slice(0, game.targetCharIndex).join('') || game.teachAudio.suffixText !== chars.slice(game.targetCharIndex + 1).join(''))) errors.push(`${game.id} teach split`);
}
for (const item of [...sentences, ...sentenceGames.flatMap((game) => game.options ?? [])]) for (const char of han(item.text)) if (!allowedChars.includes(char)) errors.push(`Unlearned ${char}`);
const coverage = Object.fromEntries(['習', '修', '補', '助', '互', '願'].map((char) => [char, sentences.reduce((count, sentence) => count + han(sentence.text).filter((value) => value === char).length, 0)]));
if (allowedChars.length !== 442 || JSON.stringify(Object.values(coverage)) !== JSON.stringify([3, 2, 2, 2, 1, 1])) errors.push('vocabulary/coverage');
if (new Set(sentenceGames.map((game) => game.sentenceId)).size !== 5) errors.push('sentence reuse');
if (errors.length) throw new Error(errors.join('\n'));

const base = {
  id: 'L438', order: 438, title: '習', newChars: ['習'], zhuyin: { 習: 'ㄒㄧˊ' },
  charAudio: { 習: `${audioRoot}char-u7fd2.m4a` }, sourceMainCommit, allowedChars,
  provisionalLearnedChars, dependsOnLessons: ['L436', 'L437'],
  releaseDependencies: { lessonOrderThrough: 437, reviewPairs: [{ ids: ['R053', 'R054'], afterLessonOrder: 435, targetLessonRange: { startOrder: 406, endOrder: 435 } }] },
  packageStatus: 'claimed',
  teacherNotes: 'Production C in parallel-c. Exact teacher-approved sentences and canonical games. Formal source L001-L435 (439 chars), plus provisional 補、修 and current 習 = 442. No extra provisional or fully unlearned characters. R053/R054 and L436/L437 block Release only. Shared production JSON, planner and ledger integration belong to Release.',
  sentenceGames,
};
const request = {
  ...base,
  targetSentenceCount: 5,
  generationConstraints: { allowedChars, provisionalLearnedChars, targetCharMinimumCount: { 習: 3 }, recentTargetMinimumCounts: { 修: 2, 補: 2, 助: 2, 互: 1, 願: 1 } },
  approvedSentences: sentences,
};
fs.mkdirSync('curriculum-workflow/lesson-requests', { recursive: true });
fs.mkdirSync('curriculum-workflow/drafts', { recursive: true });
fs.mkdirSync('curriculum-workflow/generated', { recursive: true });
fs.writeFileSync('curriculum-workflow/lesson-requests/L438.json', `${JSON.stringify(request, null, 2)}\n`);
execFileSync(process.execPath, ['scripts/create-generation-packet.mjs', '--request', 'curriculum-workflow/lesson-requests/L438.json'], { stdio: 'inherit' });
fs.writeFileSync('curriculum-workflow/drafts/L438-draft.json', `${JSON.stringify({ ...base, requiredRounds: 5, sentences }, null, 2)}\n`);
fs.appendFileSync('curriculum-workflow/generated/L438-generation-packet.md', `\n## Final approved records\n\n${JSON.stringify(request, null, 2)}\n`);
console.log('L438 handoff PASS', coverage, allowedChars.length);
