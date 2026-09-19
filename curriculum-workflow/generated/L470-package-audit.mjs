import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const req = JSON.parse(fs.readFileSync('curriculum-workflow/lesson-requests/L470.json', 'utf8'));
const d = JSON.parse(fs.readFileSync('curriculum-workflow/drafts/L470-draft.json', 'utf8'));
const han = (s) => [...s].filter((c) => /\p{Script=Han}/u.test(c));
const allowed = new Set(req.allowedChars);
assert.equal(req.allowedChars.length, 474);
assert.equal(allowed.size, 474);
assert.equal(d.packageStatus, 'dependency-blocked-asset-complete');
assert.deepEqual(d.dependsOnLessons, ['L466', 'L467', 'L468', 'L469']);
assert.deepEqual(d.provisionalLearnedChars, ['絕', '活', '該', '應']);
assert.equal(d.sentences.length, 5);
assert.deepEqual(d.sentenceGames.map((g) => g.type), ['find-character', 'teach-character', 'missing-character', 'partial-order', 'choose-pronunciation']);
assert.equal(new Set(d.sentenceGames.map((g) => g.sentenceId)).size, 5);
for (const s of d.sentences) {
  assert.equal(s.displayLines.join(''), s.text);
  assert(s.displayLines.every((x) => [...x].length <= 6));
  assert.equal(han(s.text).join(''), s.spokenText);
  assert(han(s.text).every((c) => allowed.has(c)));
  assert(fs.existsSync(path.join('public', s.imageSrc.slice(1))));
  assert(fs.existsSync(path.join('public', s.audio.src.slice(1))));
  assert.equal(s.audio.charTimings.length, han(s.text).length);
  let prev = -1;
  for (const [i, t] of s.audio.charTimings.entries()) {
    assert.equal(t.charIndex, i);
    assert(t.startMs >= prev && t.endMs > t.startMs && t.endMs <= s.audio.durationMs);
    assert(t.endMs - t.startMs >= 80);
    prev = t.endMs;
  }
}
for (const [i, g] of d.sentenceGames.entries()) {
  assert.equal(g.id, `L470-G0${i + 1}`);
  const s = d.sentences.find((x) => x.id === g.sentenceId);
  const chars = han(s.text);
  assert.equal(chars[g.targetCharIndex], g.targetChar);
  for (const o of g.options || []) assert(han(o.text).every((c) => allowed.has(c)));
  if (g.type === 'missing-character') {
    assert.equal(g.options.length, 3);
    assert.equal(g.options.filter((o) => o.correct).length, 1);
    assert.equal(g.options.find((o) => o.correct).text, chars[g.missingIndexes[0]]);
  }
  if (g.type === 'partial-order') {
    assert.equal(g.options.length, 4);
    for (const o of g.options) assert.equal(o.text, chars[g.missingIndexes[o.correctOrder]]);
  }
  if (g.type === 'teach-character') {
    assert.equal(g.teachAudio.prefixText, chars.slice(0, g.targetCharIndex).join(''));
    assert.equal(g.teachAudio.suffixText, chars.slice(g.targetCharIndex + 1).join(''));
    for (const side of ['prefix', 'suffix']) {
      const a = g.teachAudio[`${side}Audio`];
      assert(fs.existsSync(path.join('public', a.src.slice(1))));
      assert.equal(a.charTimings.length, han(g.teachAudio[`${side}Text`]).length);
    }
  }
  if (g.type === 'choose-pronunciation') {
    for (const o of g.options) {
      assert.equal(han(o.text).join(''), o.spokenText);
      assert.equal(han(o.text).length, chars.length);
      assert(fs.existsSync(path.join('public', o.audioSrc.slice(1))));
      assert.equal(o.audio.charTimings.length, chars.length);
      if (!o.correct) assert(han(o.text).filter((c, j) => c !== chars[j]).length >= 1);
    }
  }
}
assert.equal(Object.keys(d.stage4AudioAlignment).length, 4);
assert(fs.existsSync('curriculum-workflow/generated/L470-production-report.md'));
assert(fs.existsSync('curriculum-workflow/generated/L470-technical-qa.json'));
assert(fs.existsSync('curriculum-workflow/generated/L470-phonetic-audio-review.json'));
console.log('L470 package audit PASS');
