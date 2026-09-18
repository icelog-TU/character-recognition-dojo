const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const draftPath = 'curriculum-workflow/drafts/L455-draft.json';
const action = process.argv[2];
const only = process.argv[3];
const shared = path.resolve('src/curriculum/sample-lessons.json');
const draft = JSON.parse(read(draftPath, 'utf8'));
const fetchOriginal = globalThis.fetch;

if (action === 'process' && only) {
  const list = fs.readdirSync;
  fs.readdirSync = function (directory, ...args) {
    const result = list.call(this, directory, ...args);
    return path.resolve(String(directory)) === path.resolve('curriculum-workflow/audio-inbox/L455')
      ? result.filter((entry) => (typeof entry === 'string' ? entry : entry.name) === `${only}.mp3`)
      : result;
  };
}

globalThis.fetch = async (...args) => {
  if (String(args[0]).includes('/audio/speech')) {
    const body = JSON.parse(args[1].body);
    body.instructions = 'Read only the exact input text once in warm natural Taiwan Mandarin for young children. No explanations or added words. 現 is ㄒㄧㄢˋ, 台 is ㄊㄞˊ, 候 is ㄏㄡˋ, 演 is ㄧㄢˇ, 表 is ㄅㄧㄠˇ, 舞 is ㄨˇ. Use relaxed pacing, clear consonants, correct Taiwan tones, and complete first and final syllables. Never add erhua, music, singing, or sound effects.';
    if (body.input === '現') body.instructions = '請用溫暖自然的臺灣華語，只念「現」這一個字一次。現讀 ㄒㄧㄢˋ，第四聲，和「現在」的現相同。聲音短而完整，清楚下降，正常音量，不念注音、不拼音、不加例詞或解釋。';
    if (body.input === '小時候怕水') body.instructions = '只念「小時候怕水」五個字一次，使用自然清楚的臺灣華語。候讀 ㄏㄡˋ，怕水讀 ㄆㄚˋ ㄕㄨㄟˇ。完整自然，不加現在或其他字。';
    if (body.input === '在會游泳了') { body.voice = 'alloy'; body.instructions = '這是教學用的不完整句子片段。只念「在會游泳了」五個字一次，必須從「在」開始：ㄗㄞˋ ㄏㄨㄟˋ ㄧㄡˊ ㄩㄥˇ ㄌㄜ˙。首字「在」要清楚完整，聲母是 ㄗ，不可念成才、再、他或省略；在和會之間可有極短自然界線。不可補回「現」，不可改字、修句或加其他內容。末字了也要完整清楚。'; }
    if (body.input.includes('表演的時候')) body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。表演讀 ㄅㄧㄠˇ ㄧㄢˇ，時候讀 ㄕˊ ㄏㄡˋ，舞步讀 ㄨˇ ㄅㄨˋ，舞衣讀 ㄨˇ ㄧ。逗號只作自然短停頓。不解釋、不加字。';
    args[1] = { ...args[1], body: JSON.stringify(body) };
  }
  const response = await fetchOriginal(...args);
  if (!String(args[0]).includes('/audio/transcriptions') || !response.ok) return response;
  const raw = await response.json();
  fs.mkdirSync('curriculum-workflow/generated/L455-transcripts', { recursive: true });
  write(`curriculum-workflow/generated/L455-transcripts/${args[1].body.get('file').name}.json`, `${JSON.stringify(raw, null, 2)}\n`);
  const equivalents = { 现: '現', 换: '換', 台: '台', 表: '表', 发: '發', 叶: '葉', 后: '後', 条: '條', 虫: '蟲', 时: '時', 么: '麼', 会: '會', 里: '裡', 怪: '怪', 演: '演', 舞: '舞', 步: '步', 悦: '月', 悅: '月', 再: '在' };
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
  const sentenceItem = draft.sentences.find((item) => item.id === only);
  if (sentenceItem) { draft.sentences = [sentenceItem]; draft.newChars = []; draft.sentenceGames = []; }
  else if (only === 'char-u73fe') { draft.sentences = []; draft.sentenceGames = []; }
  else if (only.startsWith('L455-G05-')) {
    const option = only.endsWith('wrong-one') ? draft.sentenceGames[4].options[0] : only.endsWith('wrong-two') ? draft.sentenceGames[4].options[2] : undefined;
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
      result.stage4AudioAlignment = Object.fromEntries(result.sentences.filter((sentenceItem) => !/-S\d\d$/.test(sentenceItem.id)).map((sentenceItem) => [sentenceItem.id, { spokenText: sentenceItem.spokenText, ...sentenceItem.audio }]));
      result.sentences = result.sentences.filter((sentenceItem) => /-S\d\d$/.test(sentenceItem.id));
      for (const game of result.sentenceGames) {
        if (game.type === 'choose-pronunciation') for (const option of game.options) option.audio = option.correct ? result.sentences.find((sentenceItem) => sentenceItem.id === game.sentenceId).audio : result.stage4AudioAlignment[`${game.id}-${option.id}`];
        for (const part of ['prefix', 'suffix']) if (game.teachAudio?.[`${part}Src`]) game.teachAudio[`${part}Audio`] = result.stage4AudioAlignment[`${game.id}-${part}`];
      }
    }
    return write(draftPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
  }
  if (path.resolve(String(file)) === path.resolve('curriculum-workflow/audio-duration-report.json')) return write('curriculum-workflow/generated/L455-duration-report.json', data, ...args);
  return write.call(this, file, data, ...args);
};
const scripts = { generate: 'generate-audio-drafts', process: 'process-audio-assets', align: 'align-audio-timings-ai', formats: 'audit-asset-formats', production: 'validate-production-assets' };
if (!scripts[action]) throw new Error('Unknown action');
process.argv = ['node', 'script', '--lesson', 'L455'];
if (action === 'formats') process.argv.push('--strict');
import(pathToFileURL(path.resolve(`scripts/${scripts[action]}.mjs`)).href);
