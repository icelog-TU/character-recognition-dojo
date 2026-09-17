const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const draftPath = 'curriculum-workflow/drafts/L450-draft.json';
const action = process.argv[2];
const only = process.argv[3];
const shared = path.resolve('src/curriculum/sample-lessons.json');
const draft = JSON.parse(read(draftPath, 'utf8'));
const fetchOriginal = globalThis.fetch;

if (action === 'process' && only) {
  const list = fs.readdirSync;
  fs.readdirSync = function (directory, ...args) {
    const result = list.call(this, directory, ...args);
    return path.resolve(String(directory)) === path.resolve('curriculum-workflow/audio-inbox/L450')
      ? result.filter((entry) => (typeof entry === 'string' ? entry : entry.name) === `${only}.mp3`)
      : result;
  };
}

globalThis.fetch = async (...args) => {
  if (String(args[0]).includes('/audio/speech')) {
    const body = JSON.parse(args[1].body);
    body.instructions = 'Read only the exact input text once in warm natural Taiwan Mandarin for young children. No explanations or added words. 舞 is ㄨˇ, 唱 is ㄔㄤˋ, 歌 is ㄍㄜ, 拍 is ㄆㄞ. Use relaxed pacing, clear consonants, correct Taiwan tones, and complete first and final syllables. Never add erhua, singing, music, or sound effects.';
    if (body.input === '舞') { body.voice = 'sage'; body.instructions = '請用溫暖自然的臺灣華語，只念「舞」這一個字一次。舞讀 ㄨˇ，第三聲，聲調要先自然下降到低點，再清楚回升，像單獨念「五」的聲調，但只可念舞。發音短而完整、正常音量，不可拉長，不念注音、不拼音、不加例詞或解釋。'; }
    if (body.input === '小月一邊唱歌一邊跳舞') body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。人名小月讀 ㄒㄧㄠˇ ㄩㄝˋ，唱歌讀 ㄔㄤˋ ㄍㄜ，跳舞讀 ㄊㄧㄠˋ ㄨˇ。不唱歌、不加音樂、不解釋、不加字。';
    if (body.input.includes('舞會的音樂一放')) body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。舞會讀 ㄨˇ ㄏㄨㄟˋ；音樂必須讀 ㄧㄣ ㄩㄝˋ，其中樂讀 ㄩㄝˋ；跳舞讀 ㄊㄧㄠˋ ㄨˇ。逗號只作自然短停頓。不唱歌、不加音樂、不解釋、不加字。';
    if (body.input === '爸爸幫我拍下跳') body.instructions = '只念「爸爸幫我拍下跳」八個字一次，臺灣華語。最後一字跳讀 ㄊㄧㄠˋ，必須完整清楚且不可漏掉。自然連讀，不加舞或其他字。';
    if (body.input === '的樣子') body.instructions = '只念「的樣子」三個字一次，臺灣華語。完整清楚、正常音量，不加字、不解釋。';
    args[1] = { ...args[1], body: JSON.stringify(body) };
  }
  const response = await fetchOriginal(...args);
  if (!String(args[0]).includes('/audio/transcriptions') || !response.ok) return response;
  const raw = await response.json();
  fs.mkdirSync('curriculum-workflow/generated/L450-transcripts', { recursive: true });
  write(`curriculum-workflow/generated/L450-transcripts/${args[1].body.get('file').name}.json`, `${JSON.stringify(raw, null, 2)}\n`);
  const equivalents = { 会: '會', 乐: '樂', 边: '邊', 时: '時', 帮: '幫', 样: '樣', 妈: '媽', 亲: '親', 岳: '月', 悅: '月' };
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
  else if (only === 'char-u821e') { draft.sentences = []; draft.sentenceGames = []; }
  else if (only.startsWith('L450-G05-')) {
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
  if (path.resolve(String(file)) === path.resolve('curriculum-workflow/audio-duration-report.json')) return write('curriculum-workflow/generated/L450-duration-report.json', data, ...args);
  return write.call(this, file, data, ...args);
};
const scripts = { generate: 'generate-audio-drafts', process: 'process-audio-assets', align: 'align-audio-timings-ai', formats: 'audit-asset-formats', production: 'validate-production-assets' };
if (!scripts[action]) throw new Error('Unknown action');
process.argv = ['node', 'script', '--lesson', 'L450'];
if (action === 'formats') process.argv.push('--strict');
import(pathToFileURL(path.resolve(`scripts/${scripts[action]}.mjs`)).href);
