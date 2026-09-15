export function lessonAudioSources(lesson) {
  const sources = new Set();
  const add = (src) => { if (typeof src === "string" && src) sources.add(src); };
  for (const src of Object.values(lesson.charAudio || {})) add(src);
  for (const sentence of lesson.sentences || []) add(sentence.audio?.src);
  for (const game of lesson.sentenceGames || []) {
    add(game.teachAudio?.prefixSrc);
    add(game.teachAudio?.suffixSrc);
    for (const option of game.options || []) add(option.audioSrc || option.audio?.src);
  }
  return sources;
}
