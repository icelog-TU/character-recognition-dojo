const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const draftPath = 'curriculum-workflow/drafts/L463-draft.json';
const action = process.argv[2];
const only = process.argv[3];
const shared = path.resolve('src/curriculum/sample-lessons.json');
const draft = JSON.parse(read(draftPath, 'utf8'));
const fetchOriginal = globalThis.fetch;

if (action === 'process' && only) {
  const list = fs.readdirSync;
  fs.readdirSync = function (directory, ...args) {
    const result = list.call(this, directory, ...args);
    return path.resolve(String(directory)) === path.resolve('curriculum-workflow/audio-inbox/L463')
      ? result.filter((entry) => (typeof entry === 'string' ? entry : entry.name) === `${only}.mp3`)
      : result;
  };
}

globalThis.fetch = async (...args) => {
  if (String(args[0]).includes('/audio/speech')) {
    const body = JSON.parse(args[1].body);
    body.instructions = 'Read only the exact input text once in warm natural Taiwan Mandarin for young children. No explanations or added words. 期 is ㄑㄧˊ in 星期、到期、日期; 日 is ㄖˋ; 文 is ㄨㄣˊ; 午 is ㄨˇ; 中 is ㄓㄨㄥ; 其 is ㄑㄧˊ. In 借的書明天到期別忘了還, 還 means return and must be pronounced ㄏㄨㄢˊ. Use relaxed pacing, clear consonants, correct Taiwan tones, and complete first and final syllables. Never add erhua, music, singing, or sound effects.';
    if (body.input === '星期日下午文具店沒開') body.instructions = '只念「星期日下午文具店沒開」一次，使用溫暖自然、清楚的臺灣華語。在「星期日」之後做極短自然停頓，再清楚念「下午」ㄒㄧㄚˋ ㄨˇ。必須發出下的 ㄒㄧㄚˋ，絕不能念成「上午」；期讀 ㄑㄧˊ，文讀 ㄨㄣˊ。句首與句尾完整，不解釋、不加字。';
    if (body.input === '期') body.instructions = '請用溫暖自然的臺灣華語，只念「期」這一個字一次。期讀 ㄑㄧˊ，第二聲，和「星期」的期相同。聲音短而完整，音高自然上揚，正常音量，不念注音、不拼音、不加例詞或解釋。';
    if (body.input === '借的書明天到') body.voice = 'marin';
    if (body.input === '借的書明天到') body.instructions = '這是教學用的不完整句子片段。只念「借的書明天到」七個字一次，使用自然清楚的臺灣華語。第一個字「借」讀 ㄐㄧㄝˋ，清楚發音，不能念成「一切」或增加任何字；末字「到」必須完整收尾；不可補回「期」，不可改字或加其他內容。';
    if (body.input === '別忘了還') body.instructions = '這是教學用的不完整句子片段。只念「別忘了還」四個字一次，使用自然清楚的臺灣華語。最後的「還」表示歸還，必須清楚讀 ㄏㄨㄢˊ，完整發出開頭的 ㄏ 聲母，不能讀成「玩」ㄨㄢˊ；完整收尾，不可補入「期」或其他字。';
    if (body.input.includes('借的書明天到期')) body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。期讀 ㄑㄧˊ；最後的「還」表示歸還，必須讀 ㄏㄨㄢˊ。句首與句尾都要完整。不解釋、不加字。';
    if (body.input.includes('這些水果其中一半要')) body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。其中讀 ㄑㄧˊ ㄓㄨㄥ。句首「這」與句尾「人」或「掉」要完整。不解釋、不加字。';
    args[1] = { ...args[1], body: JSON.stringify(body) };
  }
  const response = await fetchOriginal(...args);
  if (!String(args[0]).includes('/audio/transcriptions') || !response.ok) return response;
  const raw = await response.json();
  fs.mkdirSync('curriculum-workflow/generated/L463-transcripts', { recursive: true });
  write(`curriculum-workflow/generated/L463-transcripts/${args[1].body.get('file').name}.json`, `${JSON.stringify(raw, null, 2)}\n`);
  const equivalents = { 这: '這', 书: '書', 还: '還', 卖: '賣', 写: '寫', 没: '沒', 开: '開', 课: '課', 别: '別' };
  const normalize = (value) => typeof value === 'string'
    ? [...value].map((char) => equivalents[char] ?? char).join('')
    : Array.isArray(value) ? value.map(normalize)
      : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalize(item)])) : value;
  return new Response(JSON.stringify(normalize(raw)), { status: response.status, headers: { 'content-type': 'application/json' } });
};

if (action === 'align') {
  for (const game of draft.sentenceGames) {
    for (const part of ['prefix', 'suffix']) if (game.teachAudio?.[`${part}Src`]) draft.sentences.push({ id: `${game.id}-${part}`, text: game.teachAudio[`${part}Text`], spokenText: game.teachAudio[`${part}Text`], approved: true, audio: { src: game.teachAudio[`${part}Src`] } });
    if (game.type === 'choose-pronunciation') for (const option of game.options.filter((item) => !item.correct)) draft.sentences.push({ id: path.basename(option.audioSrc, '.m4a'), text: option.text, spokenText: option.spokenText, approved: true, audio: { src: option.audioSrc } });
  }
}
if (action === 'generate' && only) {
  const sentenceItem = draft.sentences.find((item) => item.id === only);
  if (sentenceItem) { draft.sentences = [sentenceItem]; draft.newChars = []; draft.sentenceGames = []; }
  else if (only === 'char-u671f') { draft.sentences = []; draft.sentenceGames = []; }
  else if (only.startsWith('L463-G05-')) {
    const option = draft.sentenceGames[4].options.find((item) => item.audioSrc?.endsWith(`${only}.m4a`));
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
        if (game.type === 'choose-pronunciation') for (const option of game.options) option.audio = option.correct ? result.sentences.find((sentenceItem) => sentenceItem.id === game.sentenceId).audio : result.stage4AudioAlignment[path.basename(option.audioSrc, '.m4a')];
        for (const part of ['prefix', 'suffix']) if (game.teachAudio?.[`${part}Src`]) game.teachAudio[`${part}Audio`] = result.stage4AudioAlignment[`${game.id}-${part}`];
      }
    }
    return write(draftPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
  }
  if (path.resolve(String(file)) === path.resolve('curriculum-workflow/audio-duration-report.json')) return write('curriculum-workflow/generated/L463-duration-report.json', data, ...args);
  return write.call(this, file, data, ...args);
};
const scripts = { generate: 'generate-audio-drafts', process: 'process-audio-assets', align: 'align-audio-timings-ai', formats: 'audit-asset-formats', production: 'validate-production-assets' };
if (!scripts[action]) throw new Error('Unknown action');
process.argv = ['node', 'script', '--lesson', 'L463'];
if (action === 'formats') process.argv.push('--strict');
import(pathToFileURL(path.resolve(`scripts/${scripts[action]}.mjs`)).href);



