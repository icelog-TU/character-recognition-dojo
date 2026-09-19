const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const draftPath = 'curriculum-workflow/drafts/L480-draft.json';
const action = process.argv[2];
const only = process.argv[3];
const shared = path.resolve('src/curriculum/sample-lessons.json');
const draft = JSON.parse(read(draftPath, 'utf8'));
const fetchOriginal = globalThis.fetch;

if (action === 'process' && only) {
  const list = fs.readdirSync;
  fs.readdirSync = function (directory, ...args) {
    const result = list.call(this, directory, ...args);
    return path.resolve(String(directory)) === path.resolve('curriculum-workflow/audio-inbox/L480')
      ? result.filter((entry) => (typeof entry === 'string' ? entry : entry.name) === `${only}.mp3`)
      : result;
  };
}

globalThis.fetch = async (...args) => {
  if (String(args[0]).includes('/audio/speech')) {
    const body = JSON.parse(args[1].body);
    body.voice = 'cedar';
    body.instructions = '只念輸入文字一次，使用自然、溫暖、流暢的臺灣華語，像臺灣幼兒園老師說話，不用中國大陸普通話播音腔、兒化或強烈捲舌。句首句尾完整，不改字、不加字、不解釋。讀音要求：趣 ㄑㄩˋ；緣 ㄩㄢˊ；聊 ㄌㄧㄠˊ；而 ㄦˊ；且 ㄑㄧㄝˇ。';
    if (body.input === '趣') body.instructions = '只念「趣」一個字一次，使用自然清楚的臺灣華語，讀 ㄑㄩˋ，第四聲完整下降。不要念成去、取或其他字；不念注音、不加例詞或解釋。';
    if (body.input === '無聊時我會找有') body.instructions = '這是「無聊時，我會找有趣的書看」在目標字「趣」之前的教學片段。只念「無聊時我會找有」一次，自然流暢的臺灣華語；最後的「有」完整收尾，絕對不可補入「趣」，不改字、不加字、不解釋。';
    if (body.input === '的書看') {
      body.input = '的書看。';
      body.instructions = '只念輸入的三個字一次，使用自然清楚的臺灣華語。第一字「的」讀輕聲 ˙ㄉㄜ，接著念「書看」。句首與句尾完整，不加任何開場、來源、說明或其他文字。';
    }
    if (body.input.startsWith('無人機飛不動是')) body.instructions = '只念輸入的完整句子一次，使用自然、清楚、流暢的臺灣華語。無人機讀 ㄨˊ ㄖㄣˊ ㄐㄧ；緣故讀 ㄩㄢˊ ㄍㄨˋ。完整念出句尾，不用中國大陸普通話播音腔，不改字、不加字、不解釋。';
    if (body.input === '無人機飛不動，是下雨的緣故。') body.instructions = '只念「無人機飛不動，是下雨的緣故」一次，使用自然清楚的臺灣華語。老師指定「飛不動」的「不」必須保留第四聲 ㄅㄨˋ，清楚下降，絕對不要變調成第二聲 ㄅㄨˊ；動讀 ㄉㄨㄥˋ，緣故讀 ㄩㄢˊ ㄍㄨˋ。完整念出句首句尾，不改字、不加字、不解釋。';
    args[1] = { ...args[1], body: JSON.stringify(body) };
  }
  if (String(args[0]).includes('/audio/transcriptions')) {
    const form = args[1].body;
    if (form.get('file')?.name === 'L480-G02-prefix.m4a') form.set('prompt', '完整句是「無聊時，我會找有趣的書看」。本片段只到「有」：無聊時我會找有。');
    if (form.get('file')?.name === 'L480-G02-suffix.m4a') form.set('prompt', '完整句是「無聊時，我會找有趣的書看」。本片段是目標字後的「的書看」，的讀輕聲。');
  }
  const response = await fetchOriginal(...args);
  if (!String(args[0]).includes('/audio/transcriptions') || !response.ok) return response;
  const raw = await response.json();
  fs.mkdirSync('curriculum-workflow/generated/L480-transcripts', { recursive: true });
  write(`curriculum-workflow/generated/L480-transcripts/${args[1].body.get('file').name}.json`, `${JSON.stringify(raw, null, 2)}\n`);
  const equivalents = { 这: '這', 题: '題', 应: '應', 该: '該', 个: '個', 难: '難', 帮: '幫', 翻: '翻', 着: '著', 还: '還', 过: '過', 说: '說', 让: '讓', 无: '無', 缘: '緣', 聊: '聊', 趣: '趣', 书: '書', 飞: '飛', 动: '動', 电: '電', 风: '風', 机: '機' };
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
  else if (only === 'char-u8da3') { draft.sentences = []; draft.sentenceGames = []; }
  else if (only.startsWith('L480-G05-')) {
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
  if (path.resolve(String(file)) === path.resolve('curriculum-workflow/audio-duration-report.json')) return write('curriculum-workflow/generated/L480-duration-report.json', data, ...args);
  return write.call(this, file, data, ...args);
};
const scripts = { generate: 'generate-audio-drafts', process: 'process-audio-assets', align: 'align-audio-timings-ai', formats: 'audit-asset-formats', production: 'validate-production-assets' };
if (!scripts[action]) throw new Error('Unknown action');
process.argv = ['node', 'script', '--lesson', 'L480'];
if (action === 'formats') process.argv.push('--strict');
import(pathToFileURL(path.resolve(`scripts/${scripts[action]}.mjs`)).href);
