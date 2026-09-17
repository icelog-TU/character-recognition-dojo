// Execute repository audio scripts against the owned draft without changing shared production state.
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const draftPath = 'curriculum-workflow/drafts/L438-draft.json';
const action = process.argv[2];
const only = process.argv[3];
const shared = path.resolve('src/curriculum/sample-lessons.json');
const draft = JSON.parse(read(draftPath, 'utf8'));
const fetchOriginal = globalThis.fetch;

if (action === 'process' && only) {
  const list = fs.readdirSync;
  fs.readdirSync = function (directory, ...args) {
    const result = list.call(this, directory, ...args);
    return path.resolve(String(directory)) === path.resolve('curriculum-workflow/audio-inbox/L438')
      ? result.filter((entry) => (typeof entry === 'string' ? entry : entry.name) === `${only}.mp3`)
      : result;
  };
}

globalThis.fetch = async (...args) => {
  if (String(args[0]).includes('/audio/speech')) {
    const body = JSON.parse(args[1].body);
    body.instructions = 'Read only the exact input text in warm natural Taiwan Mandarin for young children. No explanations or added words. 習 is ㄒㄧˊ, 修 is ㄒㄧㄡ, 補 is ㄅㄨˇ, 願 is ㄩㄢˋ. Use relaxed pacing, clear consonants, correct Taiwan tones, and complete first and final syllables. Never add erhua.';
    if (body.input === '習') body.instructions = '請用溫暖自然的臺灣華語，只念「習」這一個字一次。習讀 ㄒㄧˊ，第二聲，和「學習」的習相同。完整清楚、正常音量，不念注音、不拼音、不加例詞或解釋。';
    if (body.input === '小光幫助我完成補習班功課') { body.input = '小光，幫助我完成補習班功課。'; body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。逗號只作自然短停頓。停頓後的「幫助」必須清楚念成 ㄅㄤ ㄓㄨˋ，完整保留「幫」的 b 聲母與 ang 韻尾，不可漏字或念成安助。補習的補讀 ㄅㄨˇ，習讀 ㄒㄧˊ。不解釋、不加字。'; }
    if (body.input === '自助影印不能用店員在修理') { body.input = '自助影印不能用，店員在修理。'; body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。逗號只作自然短停頓。「店員」必須清楚念成 ㄉㄧㄢˋ ㄩㄢˊ，是商店的店員；「在」讀 ㄗㄞˋ。不可念成電源再。修理讀 ㄒㄧㄡ ㄌㄧˇ。不解釋、不加字。'; }
    if (body.input === '班功課') { body.voice = 'alloy'; body.instructions = 'Read exactly these three Chinese characters once: 班功課. Natural Taiwan Mandarin. No other words.'; }
    args[1] = { ...args[1], body: JSON.stringify(body) };
  }
  const response = await fetchOriginal(...args);
  if (!String(args[0]).includes('/audio/transcriptions') || !response.ok) return response;
  const raw = await response.json();
  fs.mkdirSync('curriculum-workflow/generated/L438-transcripts', { recursive: true });
  write(`curriculum-workflow/generated/L438-transcripts/${args[1].body.get('file').name}.json`, `${JSON.stringify(raw, null, 2)}\n`);
  const equivalents = { 学: '學', 习: '習', 补: '補', 愿: '願', 帮: '幫', 们: '們', 画: '畫', 书: '書', 员: '員', 印: '印' };
  const normalize = (value) => typeof value === 'string'
    ? [...value].map((char) => equivalents[char] ?? char).join('')
    : Array.isArray(value)
      ? value.map(normalize)
      : value && typeof value === 'object'
        ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalize(item)]))
        : value;
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
  else if (only === 'char-u7fd2') { draft.sentences = []; draft.sentenceGames = []; }
  else if (only.startsWith('L438-G05-')) {
    const option = draft.sentenceGames[4].options.find((item) => `L438-G05-${item.id}` === only || item.id === only.replace('L438-G05-', ''));
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
  if (path.resolve(String(file)) === path.resolve('curriculum-workflow/audio-duration-report.json')) return write('curriculum-workflow/generated/L438-duration-report.json', data, ...args);
  return write.call(this, file, data, ...args);
};
const scripts = { generate: 'generate-audio-drafts', process: 'process-audio-assets', align: 'align-audio-timings-ai', formats: 'audit-asset-formats', production: 'validate-production-assets' };
if (!scripts[action]) throw new Error('Unknown action');
process.argv = ['node', 'script', '--lesson', 'L438'];
if (action === 'formats') process.argv.push('--strict');
import(pathToFileURL(path.resolve(`scripts/${scripts[action]}.mjs`)).href);
