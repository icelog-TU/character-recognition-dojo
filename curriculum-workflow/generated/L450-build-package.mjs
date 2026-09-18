import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const han = (text) => [...text.matchAll(/\p{Script=Han}/gu)].map((match) => match[0]);
const sourceMainCommit = execFileSync('git', ['rev-parse', 'a5779c4b'], { encoding: 'utf8' }).trim();
const main = JSON.parse(execFileSync('git', ['show', `${sourceMainCommit}:src/curriculum/sample-lessons.json`], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }));
const provisionalLearnedChars = ['樂', '音', '拍', '歌', '唱'];
const allowedChars = [...new Set([...main.lessons.flatMap((lesson) => lesson.newChars), ...provisionalLearnedChars, '舞'])];
const style = 'Square 1:1 rich warm detailed pencil-and-watercolor modern children picture-book illustration. Use the full L058 set as STYLE ONLY and refined child proportions from L115-S01/S02, L118-S02, L119-S01 and L128-S03. Recurring protagonist girl: preschool child with short dark-brown bob, pink hair clip, expressive dark eyes, pink cardigan over cream blouse, navy skirt and pink shoes. Recurring mother: adult woman with warm brown bob, cream blouse and blue jeans. Recurring father: adult man with short dark hair and warm expressive face. Xiaoyue must match public/assets/reference/lesson-cast/xiaoyue.webp: long softly curled deep chestnut hair, crescent-moon hair clip, same facial identity, and recognizable pale-purple/teal clothing. Generic people remain distinct from recurring cast. Natural refined faces and proportions, warm Taiwan environments, rich paper and fabric texture, clear safe action, uncluttered composition and safe margins. No readable text, numbers, labels, brands, logos or watermark. ';
const records = [
  ['小月一邊唱歌，一邊跳舞。', ['小月', '一邊唱歌，', '一邊跳舞。'], '舞', '明亮的學校活動室，小月正在一邊唱歌、一邊做簡單舞蹈動作。嘴巴張開唱歌，雙臂與腳步呈自然舞姿，畫面以小月為主，不只是站著拿麥克風。小月保留長柔卷深栗色頭髮、小月亮髮夾、固定臉部及淡紫與青綠服裝辨識。不可畫成主角或 generic classmate，不做高難度翻騰。'],
  ['舞會的音樂一放，大家就跳舞。', ['舞會的音樂', '一放，', '大家就跳舞。'], '舞', '白天的社區親子舞會，主角女孩與固定媽媽，以及幾組外貌不同的 generic families，在寬敞明亮的活動空間隨音樂開始跳舞。側邊有無字播放設備，distinct generic event staff 剛啟動音樂；主角與其他人已做出簡單舞姿。家庭友善，不是夜店、酒吧或成人派對，也不是安靜等候或表演結束。'],
  ['唱歌時，我會用手打拍子。', ['唱歌時，', '我會用手', '打拍子。'], '拍', '主角女孩在家中唱歌，嘴巴自然張開，一隻手輕拍另一隻手掌打拍子。近景清楚呈現嘴部與雙手，表情專心愉快。動作是唱歌時保持拍子，不是聽完別人唱歌後鼓掌，不加球拍、麥克風文字或擬聲字。'],
  ['爸爸幫我拍下跳舞的樣子。', ['爸爸幫我拍下', '跳舞的樣子。'], '舞', '主角家客廳，主角女孩在空曠處跳舞，固定爸爸站在稍遠處橫拿手機拍攝她的舞姿。構圖同時清楚看見爸爸的拍攝動作與女孩全身舞姿。爸爸替女孩拍攝，不是女孩自拍，也不是爸爸跳舞。手機背面朝觀者，不畫計時、介面文字或品牌。'],
  ['媽媽親手做了我的舞衣。', ['媽媽親手做了', '我的舞衣。'], '舞', '家中工作桌旁，固定媽媽展示已完成、大小適合主角女孩的完整兒童舞裙，主角女孩站在旁邊欣賞。桌上留有同色布料、線與安全擺放的簡單縫製工具，清楚說明親手製作。是完成後展示成果，不是未完成布料或商店挑衣服；女孩維持幼兒年齡與比例。'],
];
const audioRoot = '/assets/lessons/L450/audio/';
const sentences = records.map(([text, displayLines, focusChar, imageNotes], index) => {
  const id = `L450-S0${index + 1}`;
  const sentence = { id, text, spokenText: han(text).join(''), displayLines, focusChar, imageNotes, imagePrompt: style + imageNotes, imageSrc: `/assets/lessons/L450/images/${id}.webp`, approved: true, audio: { src: `${audioRoot}${id}.m4a`, durationMs: 0, charTimings: [] } };
  if (id === 'L450-S02') sentence.zhuyinOverrides = { 4: 'ㄩㄝˋ' };
  return sentence;
});
const sentenceGames = [
  { id: 'L450-G01', type: 'find-character', sentenceId: 'L450-S05', targetChar: '舞', targetCharIndex: 8 },
  { id: 'L450-G02', type: 'teach-character', sentenceId: 'L450-S04', targetChar: '舞', targetCharIndex: 7, teachAudio: { prefixText: '爸爸幫我拍下跳', suffixText: '的樣子', prefixSrc: `${audioRoot}L450-G02-prefix.m4a`, suffixSrc: `${audioRoot}L450-G02-suffix.m4a` } },
  { id: 'L450-G03', type: 'missing-character', sentenceId: 'L450-S01', targetChar: '舞', targetCharIndex: 9, missingIndexes: [9], options: [
    { id: 'L450-G03-O1', text: '歌', correct: false }, { id: 'L450-G03-O2', text: '高', correct: false }, { id: 'L450-G03-O3', text: '舞', correct: true },
  ] },
  { id: 'L450-G04', type: 'partial-order', sentenceId: 'L450-S03', targetChar: '拍', targetCharIndex: 8, missingIndexes: [6, 7, 8, 9], options: [
    { id: 'L450-G04-O1', text: '拍', correct: true, correctOrder: 2 }, { id: 'L450-G04-O2', text: '手', correct: true, correctOrder: 0 }, { id: 'L450-G04-O3', text: '子', correct: true, correctOrder: 3 }, { id: 'L450-G04-O4', text: '打', correct: true, correctOrder: 1 },
  ] },
  { id: 'L450-G05', type: 'choose-pronunciation', sentenceId: 'L450-S02', targetChar: '舞', targetCharIndex: 0, options: [
    { id: 'L450-G05-O1', text: '舞會的音樂一放，大家就跳舞。', spokenText: '舞會的音樂一放大家就跳舞', correct: true, audioSrc: `${audioRoot}L450-S02.m4a` },
    { id: 'L450-G05-O2', text: '舞會的音樂一放，大家就唱歌。', spokenText: '舞會的音樂一放大家就唱歌', correct: false, audioSrc: `${audioRoot}L450-G05-wrong-one.m4a` },
    { id: 'L450-G05-O3', text: '舞會的音樂一放，大家就拍手。', spokenText: '舞會的音樂一放大家就拍手', correct: false, audioSrc: `${audioRoot}L450-G05-wrong-two.m4a` },
  ] },
];
const errors = [];
for (const sentence of sentences) if (sentence.spokenText !== han(sentence.text).join('') || sentence.displayLines.join('') !== sentence.text || sentence.displayLines.some((line) => [...line].length > 6) || !sentence.text.includes(sentence.focusChar)) errors.push(`${sentence.id} text/lines/focus`);
for (const game of sentenceGames) {
  const chars = han(sentences.find((sentence) => sentence.id === game.sentenceId).text);
  if (chars[game.targetCharIndex] !== game.targetChar) errors.push(`${game.id} target`);
  if (game.type === 'partial-order') for (const option of game.options) if (chars[game.missingIndexes[option.correctOrder]] !== option.text || han(option.text).length !== 1) errors.push(`${game.id} order`);
  if (game.type === 'teach-character' && (game.teachAudio.prefixText !== chars.slice(0, game.targetCharIndex).join('') || game.teachAudio.suffixText !== chars.slice(game.targetCharIndex + 1).join(''))) errors.push(`${game.id} teach split`);
}
for (const item of [...sentences, ...sentenceGames.flatMap((game) => game.options ?? [])]) for (const char of han(item.text)) if (!allowedChars.includes(char)) errors.push(`Unlearned ${char}`);
const coverage = Object.fromEntries(['舞', '唱', '歌', '拍', '音', '樂'].map((char) => [char, sentences.reduce((count, sentence) => count + han(sentence.text).filter((value) => value === char).length, 0)]));
if (allowedChars.length !== 448 || JSON.stringify(Object.values(coverage)) !== JSON.stringify([5, 2, 2, 2, 1, 1])) errors.push('vocabulary/coverage');
if (new Set(sentenceGames.map((game) => game.sentenceId)).size !== 5) errors.push('sentence reuse');
if (errors.length) throw new Error(errors.join('\n'));
const base = {
  id: 'L450', order: 450, title: '舞', newChars: ['舞'], zhuyin: { 舞: 'ㄨˇ' }, charAudio: { 舞: `${audioRoot}char-u821e.m4a` }, sourceMainCommit, allowedChars,
  provisionalLearnedChars, dependsOnLessons: ['L445', 'L446', 'L447', 'L448', 'L449'],
  releaseDependencies: { lessonOrderThrough: 449, reviewPairsAfterLesson: [{ ids: ['R055', 'R056'], afterLessonOrder: 450, targetLessonRange: { startOrder: 421, endOrder: 450 }, relation: 'follow-up milestone; not included in L450 package' }] },
  packageStatus: 'claimed',
  teacherNotes: 'Production C in parallel-c. Exact teacher-approved sentences and canonical games. Formal source L001-L438 (442 chars), plus provisional 樂、音、拍、歌、唱 and current 舞 = 448. L439-L449 block Release in playable order; text uses L445-L449 only. R055/R056 follow L450 and are excluded. Shared production JSON, planner and ledger integration belong to Release.', sentenceGames,
};
const request = { ...base, targetSentenceCount: 5, generationConstraints: { allowedChars, provisionalLearnedChars, targetCharMinimumCount: { 舞: 3 }, recentTargetMinimumCounts: { 唱: 2, 歌: 2, 拍: 2, 音: 1, 樂: 1 } }, approvedSentences: sentences };
fs.mkdirSync('curriculum-workflow/lesson-requests', { recursive: true }); fs.mkdirSync('curriculum-workflow/drafts', { recursive: true }); fs.mkdirSync('curriculum-workflow/generated', { recursive: true });
fs.writeFileSync('curriculum-workflow/lesson-requests/L450.json', `${JSON.stringify(request, null, 2)}\n`);
execFileSync(process.execPath, ['scripts/create-generation-packet.mjs', '--request', 'curriculum-workflow/lesson-requests/L450.json'], { stdio: 'inherit' });
fs.writeFileSync('curriculum-workflow/drafts/L450-draft.json', `${JSON.stringify({ ...base, requiredRounds: 5, sentences }, null, 2)}\n`);
fs.appendFileSync('curriculum-workflow/generated/L450-generation-packet.md', `\n## Final approved records\n\n${JSON.stringify(request, null, 2)}\n`);
console.log('L450 handoff PASS', coverage, allowedChars.length);
