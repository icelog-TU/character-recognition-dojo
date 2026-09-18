import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const han = (text) => [...text.matchAll(/\p{Script=Han}/gu)].map((match) => match[0]);
const sourceMainCommit = execFileSync('git', ['rev-parse', 'c243d7d3'], { encoding: 'utf8' }).trim();
const main = JSON.parse(execFileSync('git', ['show', `${sourceMainCommit}:src/curriculum/sample-lessons.json`], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }));
const provisionalLearnedChars = ['練', '運', '賽', '機', '操'];
const allowedChars = [...new Set([...main.lessons.flatMap((lesson) => lesson.newChars), ...provisionalLearnedChars, '器'])];
const style = 'Square 1:1 rich warm detailed pencil-and-watercolor modern children picture-book illustration. Use the full L058 set as STYLE ONLY and refined child proportions from L115-S01/S02, L118-S02, L119-S01 and L128-S03. Recurring protagonist girl: preschool child with short dark-brown bob, pink hair clip, expressive dark eyes, pink cardigan over cream blouse, navy skirt and pink shoes. Recurring mother: adult woman with warm brown bob, cream blouse and blue jeans, clearly older and distinct from teacher. Recurring father: adult man with short dark hair and warm expressive face, clearly an adult family member. Xiaoyue must match public/assets/reference/lesson-cast/xiaoyue.webp: long softly curled deep chestnut hair, crescent-moon hair clip and the same facial identity. Generic people must remain distinct from recurring cast. Natural refined faces and proportions, warm Taiwan environments, rich paper and fabric texture, clear safe action, uncluttered composition and safe margins. No readable text, numbers, labels, brands, logos or watermark. ';
const records = [
  ['明天有機器人大賽。', ['明天有', '機器人大賽。'], '器', '主角女孩在家與固定主角爸爸談論明天的機器人大賽，神情期待。女孩旁有清楚的無字想像泡泡，呈現未來比賽：兩個小型輪式非武器機器人在簡單障礙賽道上，由兩位 generic child contestants 操控。主畫面是今天在家談論，泡泡才是想像中的賽事。不要畫成已在正式比賽現場，不用日曆、日期、海報或文字。'],
  ['機器運轉時，會發出怪聲。', ['機器運轉時，', '會發出怪聲。'], '器', '家中洗衣區，一台完整的洗衣機正在運轉，機身有少量晃動線。固定主角爸爸站在旁邊側耳聽並露出疑惑表情；主角女孩在安全距離觀察。用機器晃動與人物聆聽反應表現不尋常聲音，不放擬聲字、字幕或怪物，不畫冒煙、火花或拆機。'],
  ['電器用完，要記得關掉。', ['電器用完，', '要記得關掉。'], '器', '家中客廳，主角女孩起身準備離開，伸手按電風扇底座的關閉按鍵；固定主角媽媽在旁提醒。動作集中於用完後關掉電器，不是開機或拔插頭。按鍵沒有可讀文字、數字或品牌。'],
  ['我想去看小月的體操比賽。', ['我想去看', '小月的', '體操比賽。'], '操', '主角女孩在家向固定主角媽媽表達想去看比賽，旁邊用清楚的無字想像泡泡呈現小月在體操墊上做簡單穩定的伸展平衡動作。主角尚未到賽場。小月保留長柔卷深栗色頭髮、小月亮髮夾及固定臉部身份，穿淡紫色體操運動服。不要畫成主角或 generic classmate，不畫獎牌、冠軍或頒獎。'],
  ['老太太練習操作助聽器。', ['老太太練習', '操作助聽器。'], '器', '助聽器服務場所近景，一位 generic elder woman 坐在專業人員身旁，耳後佩戴清楚可見且大小合理的耳掛式助聽器，細管延伸到耳內。老太太用手指練習按耳後裝置的按鍵，專業人員指導她操作。清楚呈現耳朵、助聽器與手部動作；不是耳機、手機或耳罩。老太太與專業人員都不沿用固定媽媽或老師外貌。'],
];
const audioRoot = '/assets/lessons/L444/audio/';
const sentences = records.map(([text, displayLines, focusChar, imageNotes], index) => {
  const id = `L444-S0${index + 1}`;
  return { id, text, spokenText: han(text).join(''), displayLines, focusChar, imageNotes, imagePrompt: style + imageNotes, imageSrc: `/assets/lessons/L444/images/${id}.webp`, approved: true, audio: { src: `${audioRoot}${id}.m4a`, durationMs: 0, charTimings: [] } };
});
const sentenceGames = [
  { id: 'L444-G01', type: 'find-character', sentenceId: 'L444-S03', targetChar: '器', targetCharIndex: 1 },
  { id: 'L444-G02', type: 'teach-character', sentenceId: 'L444-S01', targetChar: '器', targetCharIndex: 4, teachAudio: { prefixText: '明天有機', suffixText: '人大賽', prefixSrc: `${audioRoot}L444-G02-prefix.m4a`, suffixSrc: `${audioRoot}L444-G02-suffix.m4a` } },
  { id: 'L444-G03', type: 'missing-character', sentenceId: 'L444-S02', targetChar: '器', targetCharIndex: 1, missingIndexes: [1], options: [
    { id: 'L444-G03-O1', text: '機', correct: false },
    { id: 'L444-G03-O2', text: '器', correct: true },
    { id: 'L444-G03-O3', text: '具', correct: false },
  ] },
  { id: 'L444-G04', type: 'partial-order', sentenceId: 'L444-S05', targetChar: '練', targetCharIndex: 3, missingIndexes: [3, 4, 5, 6], options: [
    { id: 'L444-G04-O1', text: '操', correct: true, correctOrder: 2 },
    { id: 'L444-G04-O2', text: '練', correct: true, correctOrder: 0 },
    { id: 'L444-G04-O3', text: '作', correct: true, correctOrder: 3 },
    { id: 'L444-G04-O4', text: '習', correct: true, correctOrder: 1 },
  ] },
  { id: 'L444-G05', type: 'choose-pronunciation', sentenceId: 'L444-S04', targetChar: '操', targetCharIndex: 8, options: [
    { id: 'L444-G05-O1', text: '我想去看小月的體操比賽。', spokenText: '我想去看小月的體操比賽', correct: true, audioSrc: `${audioRoot}L444-S04.m4a` },
    { id: 'L444-G05-O2', text: '我想去看小光的體操比賽。', spokenText: '我想去看小光的體操比賽', correct: false, audioSrc: `${audioRoot}L444-G05-wrong-one.m4a` },
    { id: 'L444-G05-O3', text: '我想去看小月的游泳比賽。', spokenText: '我想去看小月的游泳比賽', correct: false, audioSrc: `${audioRoot}L444-G05-wrong-two.m4a` },
  ] },
];

const errors = [];
for (const sentence of sentences) {
  if (sentence.spokenText !== han(sentence.text).join('') || sentence.displayLines.join('') !== sentence.text || sentence.displayLines.some((line) => [...line].length > 6) || !sentence.text.includes(sentence.focusChar)) errors.push(`${sentence.id} text/lines/focus`);
}
for (const game of sentenceGames) {
  const chars = han(sentences.find((sentence) => sentence.id === game.sentenceId).text);
  if (chars[game.targetCharIndex] !== game.targetChar) errors.push(`${game.id} target`);
  if (game.type === 'partial-order') for (const option of game.options) if (chars[game.missingIndexes[option.correctOrder]] !== option.text || han(option.text).length !== 1) errors.push(`${game.id} order`);
  if (game.type === 'teach-character' && (game.teachAudio.prefixText !== chars.slice(0, game.targetCharIndex).join('') || game.teachAudio.suffixText !== chars.slice(game.targetCharIndex + 1).join(''))) errors.push(`${game.id} teach split`);
}
for (const item of [...sentences, ...sentenceGames.flatMap((game) => game.options ?? [])]) for (const char of han(item.text)) if (!allowedChars.includes(char)) errors.push(`Unlearned ${char}`);
const coverage = Object.fromEntries(['器', '操', '機', '賽', '運', '練'].map((char) => [char, sentences.reduce((count, sentence) => count + han(sentence.text).filter((value) => value === char).length, 0)]));
if (allowedChars.length !== 448 || JSON.stringify(Object.values(coverage)) !== JSON.stringify([4, 2, 2, 2, 1, 1])) errors.push('vocabulary/coverage');
if (new Set(sentenceGames.map((game) => game.sentenceId)).size !== 5) errors.push('sentence reuse');
if (errors.length) throw new Error(errors.join('\n'));

const base = {
  id: 'L444', order: 444, title: '器', newChars: ['器'], zhuyin: { 器: 'ㄑㄧˋ' },
  charAudio: { 器: `${audioRoot}char-u5668.m4a` }, sourceMainCommit, allowedChars,
  provisionalLearnedChars, dependsOnLessons: ['L439', 'L440', 'L441', 'L442', 'L443'],
  releaseDependencies: { lessonOrderThrough: 443, reviewPairs: [] },
  packageStatus: 'claimed',
  teacherNotes: 'Production C in parallel-c. Exact teacher-approved sentences and canonical games. Formal source L001-L438 (442 chars), plus provisional 練、運、賽、機、操 and current 器 = 448. No extra provisional or fully unlearned characters. L439-L443 block Release only. Shared production JSON, planner and ledger integration belong to Release.',
  sentenceGames,
};
const request = { ...base, targetSentenceCount: 5, generationConstraints: { allowedChars, provisionalLearnedChars, targetCharMinimumCount: { 器: 3 }, recentTargetMinimumCounts: { 操: 2, 機: 2, 賽: 2, 運: 1, 練: 1 } }, approvedSentences: sentences };
fs.mkdirSync('curriculum-workflow/lesson-requests', { recursive: true });
fs.mkdirSync('curriculum-workflow/drafts', { recursive: true });
fs.mkdirSync('curriculum-workflow/generated', { recursive: true });
fs.writeFileSync('curriculum-workflow/lesson-requests/L444.json', `${JSON.stringify(request, null, 2)}\n`);
execFileSync(process.execPath, ['scripts/create-generation-packet.mjs', '--request', 'curriculum-workflow/lesson-requests/L444.json'], { stdio: 'inherit' });
fs.writeFileSync('curriculum-workflow/drafts/L444-draft.json', `${JSON.stringify({ ...base, requiredRounds: 5, sentences }, null, 2)}\n`);
fs.appendFileSync('curriculum-workflow/generated/L444-generation-packet.md', `\n## Final approved records\n\n${JSON.stringify(request, null, 2)}\n`);
console.log('L444 handoff PASS', coverage, allowedChars.length);
