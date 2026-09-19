const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const draftPath = 'curriculum-workflow/drafts/L474-draft.json';
const action = process.argv[2];
const only = process.argv[3];
const shared = path.resolve('src/curriculum/sample-lessons.json');
const draft = JSON.parse(read(draftPath, 'utf8'));
const fetchOriginal = globalThis.fetch;

if (action === 'process' && only) {
  const list = fs.readdirSync;
  fs.readdirSync = function (directory, ...args) {
    const result = list.call(this, directory, ...args);
    return path.resolve(String(directory)) === path.resolve('curriculum-workflow/audio-inbox/L474')
      ? result.filter((entry) => (typeof entry === 'string' ? entry : entry.name) === `${only}.mp3`)
      : result;
  };
}

globalThis.fetch = async (...args) => {
  if (String(args[0]).includes('/audio/speech')) {
    const body = JSON.parse(args[1].body);
    body.voice = 'cedar';
    body.instructions = '只念輸入文字一次，使用自然、溫暖、流暢的臺灣華語，像臺灣幼兒園老師說話，不用中國大陸普通話播音腔、兒化或強烈捲舌。句首句尾完整，不改字、不加字、不解釋。讀音要求：而 ㄦˊ；答案的答 ㄉㄚˊ；應該的應 ㄧㄥ；反 ㄈㄢˇ；睡不著的著 ㄓㄠˊ；而已的已 ㄧˇ。';
    if (body.input === '而') body.instructions = '只念「而」一個字一次，使用自然清楚的臺灣華語，讀 ㄦˊ，第二聲自然上揚，短而完整。不念注音、不加例詞或解釋。';
    if (body.input === '想幫忙反') body.instructions = '這是「想幫忙，反而把水打翻了」在目標字「而」之前的教學片段。只念「想幫忙反」一次，四字自然連續。最後一字是反而的「反」，必須完整讀 ㄈㄢˇ，第三聲清楚收尾；絕對不可補入「而」，不改字、不加字、不解釋。使用自然清楚的臺灣華語。';
    if (body.input === '把水打翻了') body.instructions = '這是教學用句子後段。只念「把水打翻了」一次，使用自然清楚的臺灣華語。最後的「了」讀自然輕聲且完整可聽，不可在開頭補「而」，不改字、不加字、不解釋。';
    if (body.input.includes('這題應該有')) body.instructions = '只念輸入的完整句子一次，使用自然、溫暖、流暢的臺灣華語。這題的題讀 ㄊㄧˊ；應該讀 ㄧㄥ ㄍㄞ，應是第一聲；答案讀 ㄉㄚˊ ㄢˋ。數量字依輸入原文準確念出。不用中國大陸普通話播音腔，不改字、不加字、不解釋。';
    if (body.input === '越想睡反而越睡不著') body.instructions = '只念「越想睡反而越睡不著」一次，使用自然流暢的臺灣華語。反而讀 ㄈㄢˇ ㄦˊ；最後「睡不著」表示無法入睡，著必須讀 ㄓㄠˊ。語氣疲倦但自然，不改字、不加字、不解釋。';
    if (body.input === '我只吃了一口而已') body.instructions = '只念「我只吃了一口而已」一次，使用自然流暢的臺灣華語。而讀 ㄦˊ，已讀 ㄧˇ；「而已」連讀自然，不用中國大陸普通話播音腔。不改字、不加字、不解釋。';
    args[1] = { ...args[1], body: JSON.stringify(body) };
  }
  if (String(args[0]).includes('/audio/transcriptions')) {
    const form = args[1].body;
    if (form.get('file')?.name === 'L474-G02-prefix.m4a') form.set('prompt', '完整句是「想幫忙，反而把水打翻了」。本片段只到反而的「反」：想幫忙反。');
  }
  const response = await fetchOriginal(...args);
  if (!String(args[0]).includes('/audio/transcriptions') || !response.ok) return response;
  const raw = await response.json();
  fs.mkdirSync('curriculum-workflow/generated/L474-transcripts', { recursive: true });
  write(`curriculum-workflow/generated/L474-transcripts/${args[1].body.get('file').name}.json`, `${JSON.stringify(raw, null, 2)}\n`);
  const equivalents = { 这: '這', 题: '題', 应: '應', 该: '該', 个: '個', 难: '難', 帮: '幫', 翻: '翻', 着: '著', 还: '還', 过: '過', 说: '說', 让: '讓' };
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
  else if (only === 'char-u800c') { draft.sentences = []; draft.sentenceGames = []; }
  else if (only.startsWith('L474-G05-')) {
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
  if (path.resolve(String(file)) === path.resolve('curriculum-workflow/audio-duration-report.json')) return write('curriculum-workflow/generated/L474-duration-report.json', data, ...args);
  return write.call(this, file, data, ...args);
};
const scripts = { generate: 'generate-audio-drafts', process: 'process-audio-assets', align: 'align-audio-timings-ai', formats: 'audit-asset-formats', production: 'validate-production-assets' };
if (!scripts[action]) throw new Error('Unknown action');
process.argv = ['node', 'script', '--lesson', 'L474'];
if (action === 'formats') process.argv.push('--strict');
import(pathToFileURL(path.resolve(`scripts/${scripts[action]}.mjs`)).href);
