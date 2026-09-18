const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const draftPath = 'curriculum-workflow/drafts/L468-draft.json';
const action = process.argv[2];
const only = process.argv[3];
const shared = path.resolve('src/curriculum/sample-lessons.json');
const draft = JSON.parse(read(draftPath, 'utf8'));
const fetchOriginal = globalThis.fetch;

if (action === 'process' && only) {
  const list = fs.readdirSync;
  fs.readdirSync = function (directory, ...args) {
    const result = list.call(this, directory, ...args);
    return path.resolve(String(directory)) === path.resolve('curriculum-workflow/audio-inbox/L468')
      ? result.filter((entry) => (typeof entry === 'string' ? entry : entry.name) === `${only}.mp3`)
      : result;
  };
}

globalThis.fetch = async (...args) => {
  if (String(args[0]).includes('/audio/speech')) {
    const body = JSON.parse(args[1].body);
    body.voice = 'marin';
    body.instructions = '只念輸入文字一次，使用溫暖、自然、清楚的臺灣華語，適合幼兒聆聽。該讀 ㄍㄞ，絕讀 ㄐㄩㄝˊ，活讀 ㄏㄨㄛˊ，期讀 ㄑㄧˊ，招待的待讀 ㄉㄞˋ。句首與句尾完整，不改字、不加字、不解釋，不使用兒化、音樂、歌唱或音效。';
    if (body.input === '該') body.instructions = '只念「該」一個字一次。使用自然清楚的臺灣華語，讀 ㄍㄞ，第一聲平穩完整，正常音量。不念注音、不加例詞或解釋。';
    if (body.input.includes('怪物中了')) { body.voice = 'cedar'; body.instructions = '只念輸入的完整句子一次，使用自然清楚的臺灣華語。句首「怪物」兩字必須完整清楚，怪讀 ㄍㄨㄞˋ，不可省略聲母或念成外物。「中了」表示被招式擊中，必須讀 ㄓㄨㄥˋ ˙ㄌㄜ，不可讀成中間的 ㄓㄨㄥ。「絕招」讀 ㄐㄩㄝˊ ㄓㄠ，「活該」讀 ㄏㄨㄛˊ ㄍㄞ。語氣像兒童奇幻遊戲旁白，生動但不兇狠，不改字、不加字、不解釋。'; }
    if (body.input === '怪物中了別人的絕招活該') body.instructions = '只念「怪物中了別人的絕招活該」一次，使用自然清楚、稍慢的臺灣華語。怪物讀 ㄍㄨㄞˋ ㄨˋ；中了表示擊中，讀 ㄓㄨㄥˋ ˙ㄌㄜ；「別人的」必須逐字清楚讀 ㄅㄧㄝˊ ㄖㄣˊ ˙ㄉㄜ，尤其第一字一定是別，不可改成敵；絕招讀 ㄐㄩㄝˊ ㄓㄠ；活該讀 ㄏㄨㄛˊ ㄍㄞ。不改字、不加字、不解釋。';
    if (body.input === '去哪間餐廳招待客人') body.instructions = '這是問句中目標字「該」後面的獨立片段。只念「去哪間餐廳招待客人」一次，使用自然清楚的臺灣華語，保留自然疑問語氣。「餐廳」與「招待」清楚連續，待讀 ㄉㄞˋ。不可在開頭補「該」，不改字、不加字、不解釋。';
    if (body.input === '你不該拿別人的玩具') { body.voice = 'cedar'; body.instructions = '只念「你不該拿別人的玩具」一次，使用自然、清楚的臺灣華語。關鍵詞「不該」必須讀 ㄅㄨˋ ㄍㄞ：「不」保持明確第四聲，由高音快速下降，絕不能讀成第二聲 ㄅㄨˊ；「該」讀第一聲。整句流暢，句首句尾完整，不改字、不加字、不解釋。'; }
    if (body.input === '星期日該輪到爸爸做飯了') { body.voice = 'marin'; body.input = '星期，日該輪到爸爸做飯了。'; body.instructions = '只念輸入句子一次，使用自然、清楚的臺灣華語。先完整念「星期」ㄒㄧㄥ ㄑㄧˊ，期和奇同音，第二聲必須從較低音自然上揚，絕不能平讀成第一聲「欺」；接著立即念「日該輪到爸爸做飯了」。逗點只用來保住期的上揚，停連要極短，聽起來仍是一句自然的「星期日該輪到爸爸做飯了」。「該」讀第一聲。不得改字、加字或解釋。'; }
    args[1] = { ...args[1], body: JSON.stringify(body) };
  }
  const response = await fetchOriginal(...args);
  if (!String(args[0]).includes('/audio/transcriptions') || !response.ok) return response;
  const raw = await response.json();
  fs.mkdirSync('curriculum-workflow/generated/L468-transcripts', { recursive: true });
  write(`curriculum-workflow/generated/L468-transcripts/${args[1].body.get('file').name}.json`, `${JSON.stringify(raw, null, 2)}\n`);
  const equivalents = { 该: '該', 别: '別', 绝: '絕', 间: '間', 厅: '廳', 饭: '飯', 轮: '輪', 爸: '爸', 这: '這', 还: '還', 过: '過', 个: '個', 说: '說', 让: '讓', 处: '處', 见: '見' };
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
  else if (only === 'char-u8a72') { draft.sentences = []; draft.sentenceGames = []; }
  else if (only.startsWith('L468-G05-')) {
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
  if (path.resolve(String(file)) === path.resolve('curriculum-workflow/audio-duration-report.json')) return write('curriculum-workflow/generated/L468-duration-report.json', data, ...args);
  return write.call(this, file, data, ...args);
};
const scripts = { generate: 'generate-audio-drafts', process: 'process-audio-assets', align: 'align-audio-timings-ai', formats: 'audit-asset-formats', production: 'validate-production-assets' };
if (!scripts[action]) throw new Error('Unknown action');
process.argv = ['node', 'script', '--lesson', 'L468'];
if (action === 'formats') process.argv.push('--strict');
import(pathToFileURL(path.resolve(`scripts/${scripts[action]}.mjs`)).href);
