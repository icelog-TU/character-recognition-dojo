import test from "node:test";
import assert from "node:assert/strict";
import { lessonAudioSources } from "./lesson-audio-sources.mjs";

function fixture(suffix) {
  return {
    charAudio: { char: "char.m4a" },
    sentences: Array.from({ length: 5 }, (_, i) => ({ audio: { src: `S${i}.m4a` } })),
    sentenceGames: [
      { teachAudio: { prefixSrc: "prefix.m4a", ...(suffix ? { suffixSrc: "suffix.m4a" } : {}) } },
      { options: [{ audioSrc: "S4.m4a" }, { audioSrc: "wrong1.m4a" }, { audio: { src: "wrong2.m4a" } }] },
    ],
  };
}

test("final-character teaching has nine unique files, reusing correct sentence", () => {
  assert.equal(lessonAudioSources(fixture(false)).size, 9);
});
test("prefix and suffix teaching has ten unique files", () => {
  assert.equal(lessonAudioSources(fixture(true)).size, 10);
});
test("absent optional fields do not become asset paths", () => {
  assert.deepEqual([...lessonAudioSources({ sentenceGames: [{}] })], []);
});
