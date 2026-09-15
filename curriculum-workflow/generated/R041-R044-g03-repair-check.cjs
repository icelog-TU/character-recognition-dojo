const fs = require('node:fs');
const assert = require('node:assert/strict');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const c = read('src/curriculum/sample-lessons.json');
const expected = {R041:['圖','圓','畫'],R042:['跟','很','眼'],R043:['請','說','話'],R044:['排','拿','掉']};
let checked = 0;
for (const review of c.reviewLessons) {
  const allowed = new Set(c.lessons.filter(l => l.order <= review.afterLessonOrder).flatMap(l => l.newChars));
  for (const game of review.sentenceGames.filter(g => g.type === 'missing-character')) {
    const options = game.options;
    assert.equal(options.length, 3, game.id);
    assert.equal(new Set(options.map(o => o.text)).size, 3, game.id);
    assert.equal(options.filter(o => o.correct).length, 1, game.id);
    for (const option of options) {
      assert.match(option.text, /^\p{Script=Han}$/u, game.id);
      assert(allowed.has(option.text), `${game.id}: locked ${option.text}`);
    }
    const s = review.sentences.find(s => s.id === game.sentenceId);
    const chars = s.text.match(/\p{Script=Han}/gu);
    assert.equal(options.find(o => o.correct).text, chars[game.missingIndexes[0]], game.id);
    if (expected[review.id]) {
      assert.deepEqual(options.map(o => o.text), expected[review.id]);
      for (const file of [`curriculum-workflow/review-requests/${review.id}.json`, `curriculum-workflow/drafts/${review.id}-draft.json`]) {
        assert.deepEqual(read(file).sentenceGames.find(g => g.id === game.id).options, options, file);
      }
    }
    checked++;
  }
}
console.log(`PASS: ${checked} review missing-character rounds; three distinct single-Han choices, one matching answer, milestone-safe distractors, repaired source consistency.`);
