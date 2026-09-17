const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const draftPath = 'curriculum-workflow/drafts/L444-draft.json';
const action = process.argv[2];
const only = process.argv[3];
const shared = path.resolve('src/curriculum/sample-lessons.json');
const draft = JSON.parse(read(draftPath, 'utf8'));
const fetchOriginal = globalThis.fetch;

if (action === 'process' && only) {
  const list = fs.readdirSync;
  fs.readdirSync = function (directory, ...args) {
    const result = list.call(this, directory, ...args);
    return path.resolve(String(directory)) === path.resolve('curriculum-workflow/audio-inbox/L444')
      ? result.filter((entry) => (typeof entry === 'string' ? entry : entry.name) === `${only}.mp3`)
      : result;
  };
}

globalThis.fetch = async (...args) => {
  if (String(args[0]).includes('/audio/speech')) {
    const body = JSON.parse(args[1].body);
    body.instructions = 'Read only the exact input text once in warm natural Taiwan Mandarin for young children. No explanations or added words. 器 is ㄑㄧˋ, 機 is ㄐㄧ, 操 is ㄘㄠ, 賽 is ㄙㄞˋ, 練 is ㄌㄧㄢˋ. Use relaxed pacing, clear consonants, correct Taiwan tones, and complete first and final syllables. Never add erhua.';
    if (body.input === '器') body.instructions = '請用溫暖自然的臺灣華語，只念「器」這一個字一次。器讀 ㄑㄧˋ，第四聲，和「機器」的器相同。完整清楚、正常音量，不念注音、不拼音、不加例詞或解釋。';
    if (body.input === '機器運轉時會發出怪聲') { body.input = '機器運轉時，會發出怪聲。'; body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。逗號只作自然短停頓。機器讀 ㄐㄧ ㄑㄧˋ，運轉讀 ㄩㄣˋ ㄓㄨㄢˇ，怪聲讀 ㄍㄨㄞˋ ㄕㄥ。不解釋、不加字。'; }
    if (body.input === '電器用完要記得關掉') { body.input = '電器用完，要記得關掉。'; }
    if (body.input === '明天有機') body.instructions = '只念「明天有機」四個字一次，臺灣華語。機讀 ㄐㄧ。完整清楚，不加字。';
    if (body.input === '人大賽') { body.voice = 'alloy'; body.input = '人，大賽。'; body.instructions = '只念輸入的三個漢字一次，臺灣華語。第一字「人」讀 ㄖㄣˊ，接著「大賽」讀 ㄉㄚˋ ㄙㄞˋ；逗號只作極短自然停頓。每個字完整清楚，不加字。'; }
    if (body.input === '老太太練習操作助聽器') body.instructions = '只念輸入的完整句子一次，臺灣華語。老太太讀 ㄌㄠˇ ㄊㄞˋ ㄊㄞ˙；練習讀 ㄌㄧㄢˋ ㄒㄧˊ；操作讀 ㄘㄠ ㄗㄨㄛˋ；助聽器讀 ㄓㄨˋ ㄊㄧㄥ ㄑㄧˋ。自然清楚，不解釋、不加字。';
    if (body.input === '我想去看小月的游泳比賽') body.instructions = '只念輸入的完整句子一次，臺灣華語。人名「小月」必須清楚念成 ㄒㄧㄠˇ ㄩㄝˋ，月是月亮的月，不可念成小夜。游泳比賽自然連讀。不解釋、不加字。';
    args[1] = { ...args[1], body: JSON.stringify(body) };
  }
  const response = await fetchOriginal(...args);
  if (!String(args[0]).includes('/audio/transcriptions') || !response.ok) return response;
  const raw = await response.json();
  fs.mkdirSync('curriculum-workflow/generated/L444-transcripts', { recursive: true });
  write(`curriculum-workflow/generated/L444-transcripts/${args[1].body.get('file').name}.json`, `${JSON.stringify(raw, null, 2)}\n`);
  const equivalents = { 练: '練', 运: '運', 赛: '賽', 机: '機', 电: '電', 关: '關', 习: '習', 听: '聽', 发: '發', 转: '轉', 声: '聲', 记: '記', 会: '會', 时: '時', 体: '體', 岳: '月', 期: '機' };
  const normalize = (value) => typeof value === 'string'
    ? [...value].map((char) => equivalents[char] ?? char).join('')
    : Array.isArray(value) ? value.map(normalize)
      : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalize(item)])) : value;
  return new Response(JSON.stringify(normalize(raw)), { status: response.status, headers: { 'content-type': 'application/json' } });
};

if (action === 'align') {
  for (const game of draft.sentenceGames) {
    for (const part of ['prefix', 'suffix']) if (game.teachAudio?.[`${part}Src`]) draft.sentences.push({ id: `${game.id}-${part}`, text: game.teachAudio[`${part}Text`], spokenText: game.teachAudio[`${part}Text`], approved: true, audio: { src: game.teachAudio[`${part}Src`] } });
    if (game.type === 'choose-pronunciation') for (const option of game.options.filter((item) => !item.correct)) draft.sentences.push({ id: `${game.id}-${option.id}`, text: option.text, spokenText: option.spokenText, approved: true, audio: { src: option.audioSrc } });
  }
}
if (action === 'generate' && only) {
  const sentence = draft.sentences.find((item) => item.id === only);
  if (sentence) { draft.sentences = [sentence]; draft.newChars = []; draft.sentenceGames = []; }
  else if (only === 'char-u5668') { draft.sentences = []; draft.sentenceGames = []; }
  else if (only.startsWith('L444-G05-')) {
    const option = only.endsWith('wrong-one') ? draft.sentenceGames[4].options[1] : only.endsWith('wrong-two') ? draft.sentenceGames[4].options[2] : undefined;
    if (!option) throw new Error('Unknown G05 option');
    draft.sentences = [{ id: only, text: option.text, spokenText: option.spokenText, approved: true, audio: { src: option.audioSrc } }]; draft.newChars = []; draft.sentenceGames = [];
  } else {
    const game = draft.sentenceGames.find((item) => ['prefix', 'suffix'].some((part) => `${item.id}-${part}` === only));
    if (!game) throw new Error('Unsupported single audio job');
    const part = only.endsWith('prefix') ? 'prefix' : 'suffix';
    draft.sentences = [{ id: only, text: game.teachAudio[`${part}Text`], spokenText: game.teachAudio[`${part}Text`], approved: true, audio: { src: game.teachAudio[`${part}Src`] } }]; draft.newChars = []; draft.sentenceGames = [];
  }
}

fs.readFileSync = function (file, ...args) { return path.resolve(String(file)) === shared ? JSON.stringify({ version: 1, lessons: [draft], reviewLessons: [] }) : read.call(this, file, ...args); };
fs.writeFileSync = function (file, data, ...args) {
  if (path.resolve(String(file)) === shared) {
    const result = JSON.parse(data).lessons[0];
    if (action === 'align') {
      result.stage4AudioAlignment = Object.fromEntries(result.sentences.filter((sentence) => !/-S\d\d$/.test(sentence.id)).map((sentence) => [sentence.id, { spokenText: sentence.spokenText, ...sentence.audio }]));
      result.sentences = result.sentences.filter((sentence) => /-S\d\d$/.test(sentence.id));
      for (const game of result.sentenceGames) {
        if (game.type === 'choose-pronunciation') for (const option of game.options) option.audio = option.correct ? result.sentences.find((sentence) => sentence.id === game.sentenceId).audio : result.stage4AudioAlignment[`${game.id}-${option.id}`];
        for (const part of ['prefix', 'suffix']) if (game.teachAudio?.[`${part}Src`]) game.teachAudio[`${part}Audio`] = result.stage4AudioAlignment[`${game.id}-${part}`];
      }
    }
    return write(draftPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
  }
  if (path.resolve(String(file)) === path.resolve('curriculum-workflow/audio-duration-report.json')) return write('curriculum-workflow/generated/L444-duration-report.json', data, ...args);
  return write.call(this, file, data, ...args);
};
const scripts = { generate: 'generate-audio-drafts', process: 'process-audio-assets', align: 'align-audio-timings-ai', formats: 'audit-asset-formats', production: 'validate-production-assets' };
if (!scripts[action]) throw new Error('Unknown action');
process.argv = ['node', 'script', '--lesson', 'L444'];
if (action === 'formats') process.argv.push('--strict');
import(pathToFileURL(path.resolve(`scripts/${scripts[action]}.mjs`)).href);
