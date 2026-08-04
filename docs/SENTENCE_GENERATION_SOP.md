# Sentence Generation SOP

This document is the focused SOP for drafting new lesson sentences in `認字練功房`.

Use it whenever a Codex/GPT thread, planner tool, or teacher-facing workflow drafts sentence candidates for a new lesson. The broader production workflow still lives in `docs/CURRICULUM_PRODUCTION_SOP.md`.

## Source Inputs

Before drafting sentences:

1. Read latest `origin/main` and `src/curriculum/sample-lessons.json`.
2. Read `docs/CURRICULUM_LEDGER.md` for the merged lesson sequence, recent review pool, visual continuity, and place continuity.
3. Read `docs/PARALLEL_LESSON_REGISTRY.md` if working on any not-yet-merged parallel lesson.
4. Use the lesson request's `allowedChars` as the locked character boundary.

If production JSON and Markdown disagree, `src/curriculum/sample-lessons.json` on latest `origin/main` wins.

## Character Boundary

Every display sentence must use only:

- characters already taught before this lesson
- this lesson's current new target character(s)
- explicitly registered provisional learned characters, only when the lesson request lists them for parallel work

If a proposed sentence contains any other Han character, stop and identify the unlearned character before generating images, audio, or production curriculum.

Use Taiwan zhuyin only. Do not use Hanyu pinyin in curriculum, prompts, or UI text.

## Required Coverage

For a normal five-sentence new-character lesson:

- The current lesson target character must appear at least 3 times across the five approved sentences.
- Each target character from the previous 3 lessons must appear at least 2 times across the five approved sentences.
- Each target character from the previous 4th and 5th lessons must appear at least 1 time across the five approved sentences.

Example for L064 after:

- L063 `開`
- L062 `站`
- L061 `坐`
- L060 `去`
- L059 `起`

The L064 sentence set should include:

- L064 target, e.g. `左`: at least 3 occurrences
- `開`, `站`, `坐`: at least 2 occurrences each
- `去`, `起`: at least 1 occurrence each

These are minimums, not writing goals. Do not force every sentence to contain the new target character if that makes the set repetitive or unnatural.

For lessons with more or fewer than five approved sentences, preserve the same intent:

- meaningful repeated exposure to the current target
- strong review of the previous 3 lessons
- light review of the previous 4th and 5th lessons

If a lesson introduces multiple target characters as one natural unit, such as `朋友`, count the unit intentionally. Prefer sentences that practice the target characters together instead of mechanically isolating one half of the word.

## Word-First Drafting

Draft sentences from useful words and short phrases first, not from isolated character-count targets.

Before writing candidate sentences:

1. List natural words or short phrases that combine the current target character with any already learned character. Use the full learned-character set, not only the recent five lessons.
2. List natural words or short phrases that combine the current target character with each weak-review character from the previous five lessons.
3. Prefer combinations that a child can understand, hear clearly, and see in a picture.
4. Reject combinations that are technically made of allowed characters but are not natural Taiwan Mandarin.
5. Use the strongest phrase list to build sentences with varied meanings and structures.

Examples:

- For `坐`, useful phrase directions may include `坐起來`, `坐下`, `坐著`, `坐到`, `不可坐`, depending on which characters have already been learned.
- For `左`, useful phrase directions may include `左手`, `左邊`, `門左邊`, `我左邊`.
- For `著`, useful phrase directions may include `看著`, `指著`, `開著`, `坐著`, `站著`, but the sentence set should not overuse only `坐著` and `站著`.

Phrase diversity is the writing goal. Coverage counts are the minimum gate after drafting, not the generator's first move.

The final five-sentence set should normally include:

- several different words or short phrases using the current target character
- at least one phrase that uses the current target with a non-recent learned character, when natural
- useful phrases that connect the current target to previous-five weak-review characters
- sentence patterns that do not all share the same frame

Do not make the whole lesson circle around the previous five characters if the full learned set offers better words. The recent weak-review characters still need coverage, but they should be woven into meaningful phrases rather than repeated mechanically.

## Sentence Quality

Coverage does not excuse weak sentences.

Every sentence must be:

- natural Taiwan Mandarin
- clear in meaning
- concrete enough to picture
- useful for a young child who may not read prompts yet
- within 4-12 Han characters, excluding punctuation, unless the teacher explicitly approves otherwise

Prefer visible actions, positions, people, objects, and states. Avoid abstract or underspecified phrases.

For position words such as `左`, `右`, `上`, `下`, `前`, `後`, `裡`, and `邊`, include a concrete reference point when needed:

- Good: `門左邊`, `我左邊`, `你左邊`, `門前`, `家裡`
- Weak: `左邊` by itself when the picture has no clear anchor

When a sentence has a motion or state change, make the purpose or visual outcome clear when possible:

- Weak: `我站起來去左邊`
- Stronger: `我站起來去門左邊`

Do not write sentences that only exist to satisfy counts. If a sentence feels mechanical, rewrite it even if the coverage math is correct.

## Set Quality

Check the five sentences as a set, not only one by one.

The set should:

- vary sentence patterns
- avoid five near-identical location sentences
- use several different words or short phrases built from the target character
- avoid overusing one target phrase such as only `坐著` / `站著`
- feel like related child-friendly scenes when possible
- keep recurring characters visually consistent
- avoid overusing one easy structure such as `X在左邊`

It is acceptable for one or two sentences not to contain the current target character when that improves naturalness and still keeps the target count at or above the required minimum.

## Spoken Text

`spokenText` is what the audio reads.

Rules:

- It must include every Han character from `text`.
- It may omit punctuation.
- It must not add any Han character not shown in `text`.
- If `text` has punctuation, `spokenText` should remove it without changing the character order.

Example:

```json
{
  "text": "我去開門，你坐下",
  "spokenText": "我去開門你坐下"
}
```

## Focus Character

`focusChar` must appear in the sentence.

Prefer the current lesson target for at least the first few target-practice sentences. Use recent review characters for some Stage 4 or review-focused sentences when that produces a stronger lesson.

Do not set `focusChar` to the current target when the sentence does not contain it.

## Display Lines

Use `displayLines` only when needed for phone layout.

Rules:

- Lines must join exactly back to `text`.
- Each line should stay at or under 5 Han characters when zhuyin is visible.
- `displayLines` affects only visual line breaks; audio and timings still use `text` and `spokenText`.

## Imageability

Before approving a sentence, imagine the picture.

Approve only if the image can clearly show the sentence without relying on written labels, signs, numbers, zhuyin, or UI text inside the image.

If a sentence has a count, contrast, or position, the picture must make it obvious on a phone screen.

For recurring people and places, use `docs/CURRICULUM_LEDGER.md` visual continuity descriptions. Do not redesign `我`, `你`, `他`, parents, family members, or recurring homes from lesson to lesson.

## Review Checklist

Before sending sentences to image/audio production, verify:

- all display Han characters are allowed
- the draft first explored natural target-character words and short phrases from the full learned set
- the sentence set uses varied target-character phrases rather than one repeated frame
- the current target count meets the lesson minimum
- previous 3 lesson targets each appear at least twice
- previous 4th and 5th lesson targets each appear at least once
- every sentence is 4-12 Han characters, excluding punctuation
- every sentence has clear meaning
- position words have concrete anchors when needed
- the sentence set is not repetitive
- `spokenText` matches `text` without punctuation
- every `focusChar` appears in its sentence
- the teacher has approved the sentence set

Only after this checklist passes should the lesson proceed to image prompts, AI audio, `teachAudio`, Stage 4 option audio, and AI-aligned `charTimings`.
