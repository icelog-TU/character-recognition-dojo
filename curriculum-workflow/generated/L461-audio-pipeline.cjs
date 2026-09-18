const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const draftPath = 'curriculum-workflow/drafts/L461-draft.json';
const action = process.argv[2];
const only = process.argv[3];
const shared = path.resolve('src/curriculum/sample-lessons.json');
const draft = JSON.parse(read(draftPath, 'utf8'));
const fetchOriginal = globalThis.fetch;

if (action === 'process' && only) {
  const list = fs.readdirSync;
  fs.readdirSync = function (directory, ...args) {
    const result = list.call(this, directory, ...args);
    return path.resolve(String(directory)) === path.resolve('curriculum-workflow/audio-inbox/L461')
      ? result.filter((entry) => (typeof entry === 'string' ? entry : entry.name) === `${only}.mp3`)
      : result;
  };
}

globalThis.fetch = async (...args) => {
  if (String(args[0]).includes('/audio/speech')) {
    const body = JSON.parse(args[1].body);
    body.instructions = 'Read only the exact input text once in warm natural Taiwan Mandarin for young children. No explanations or added words. 文 is ㄨㄣˊ, 中 is ㄓㄨㄥ in both 中午 and 其中, 午 is ㄨˇ, 其 is ㄑㄧˊ, 實 is ㄕˊ, and 突然 is ㄊㄨˊ ㄖㄢˊ. Use relaxed pacing, clear consonants, correct Taiwan tones, and complete first and final syllables. Never add erhua, music, singing, or sound effects.';
    if (body.input === '文') body.instructions = '請用溫暖自然的臺灣華語，只念「文」這一個字一次。文讀 ㄨㄣˊ，第二聲，和「文字」的文相同。聲音短而完整，音高自然上揚，正常音量，不念注音、不拼音、不加例詞或解釋。';
    if (body.input === '爸爸你看我的作') body.instructions = '這是教學用的不完整句子片段。只念「爸爸你看我的作」七個字一次，使用自然清楚的臺灣華語。末字「作」讀 ㄗㄨㄛˋ，必須完整收尾；不可補回「文」，不可改字或加其他內容。';
    if (body.input === '也在其中') body.instructions = '這是教學用的不完整句子片段。只念「也在其中」四個字一次，使用自然清楚的臺灣華語。其中讀 ㄑㄧˊ ㄓㄨㄥ，中讀第一聲。首字也與末字中都要完整，不可補入「文」或其他字。';
    if (body.input.includes('我其實沒吃')) body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。其實讀 ㄑㄧˊ ㄕˊ；早餐、午餐、晚餐的餐都讀 ㄘㄢ。句首「我」與句尾「餐」要完整。不解釋、不加字。';
    args[1] = { ...args[1], body: JSON.stringify(body) };
  }
  const response = await fetchOriginal(...args);
  if (!String(args[0]).includes('/audio/transcriptions') || !response.ok) return response;
  const raw = await response.json();
  fs.mkdirSync('curriculum-workflow/generated/L461-transcripts', { recursive: true });
  write(`curriculum-workflow/generated/L461-transcripts/${args[1].body.get('file').name}.json`, `${JSON.stringify(raw, null, 2)}\n`);
  const equivalents = { 实: '實', 带: '帶', 这: '這', 图: '圖', 没: '沒', 风: '風', 变: '變', 书: '書', 数: '數', 里: '裡', 画: '畫', 坐: '作', 座: '作' };
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
  else if (only === 'char-u6587') { draft.sentences = []; draft.sentenceGames = []; }
  else if (only.startsWith('L461-G05-')) {
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
  if (path.resolve(String(file)) === path.resolve('curriculum-workflow/audio-duration-report.json')) return write('curriculum-workflow/generated/L461-duration-report.json', data, ...args);
  return write.call(this, file, data, ...args);
};
const scripts = { generate: 'generate-audio-drafts', process: 'process-audio-assets', align: 'align-audio-timings-ai', formats: 'audit-asset-formats', production: 'validate-production-assets' };
if (!scripts[action]) throw new Error('Unknown action');
process.argv = ['node', 'script', '--lesson', 'L461'];
if (action === 'formats') process.argv.push('--strict');
import(pathToFileURL(path.resolve(`scripts/${scripts[action]}.mjs`)).href);
