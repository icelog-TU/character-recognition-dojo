# Curriculum Ledger

This file is the running map for the full character course. Update it whenever a reviewed lesson enters `src/curriculum/sample-lessons.json`.

The purpose is to keep the sequence visible when the course grows to 600-700 characters:

- Know exactly which characters have already been taught.
- See which sentences each lesson uses.
- Prefer reusing characters from the previous 4-5 lessons when writing new sentences.
- Prevent accidental new characters from entering a lesson before they are taught.
- Give AI sentence generation a compact source of truth before drafting new lessons.

## Current Character State

Characters taught after Lesson 8:

`一 二 三 人 個 大 的 小 手 我 有`

Recent review pool for the next lesson:

`的 小 手 我 有 大 人 個`

## Lesson Ledger

| Lesson | New Character(s) | Cumulative Learned Characters | Reviewed Sentences | Old Characters Reviewed | Notes |
|---|---|---|---|---|---|
| L001 | 一、二、三、人 | 一、二、三、人 | 人 / 一人 / 二人 / 三人 | none | Seed lesson. Four characters are introduced together because the first lesson needs enough material to make meaning. |
| L002 | 個 | 一、二、三、人、個 | 人 / 一個人 / 三個人 | 一、三、人 | `個` is neutral tone in `一個人` and `三個人`. Avoid `二個人`; use `兩個人` only after `兩` is taught. |
| L003 | 大 | 一、二、三、人、個、大 | 大人 / 二人 / 三個人 / 一個大人 | 一、二、三、人、個 | Uses `大人` as a meaningful phrase and repeats counting people. |
| L004 | 的 | 一、二、三、人、個、大、的 | 一人 / 二人 / 大大的人 / 三個大大的人 | 一、二、三、人、個、大 | First use of possessive/modifier marker `的`; keep syntax concrete and visual. |
| L005 | 小 | 一、二、三、人、個、大、的、小 | 大大的人 / 小小的人 / 一個大大的人 / 三個小小的人 / 大大小小的人 | 一、三、人、個、大、的 | Contrasts `大` and `小`; keeps all sentence characters inside the learned set. |
| L006 | 手 | 一、二、三、人、個、大、的、小、手 | 一個人的手 / 三個人的手 / 大大的手 / 小小的手 / 大大小小的手 | 一、三、個、人、的、大、小 | Introduces a concrete body-part noun and reviews size contrast. |
| L007 | 我 | 一、二、三、人、個、大、的、小、手、我 | 我一個人 / 我的小手 / 我的手小小的 / 大人的手大大的 / 三個人的大手小手 | 一、三、個、人、的、大、小、手 | Establishes the fixed first-person girl character for `我`. |
| L008 | 有 | 一、二、三、人、個、大、的、小、手、我、有 | 有一個人 / 我有小小的手 / 大人有大大的手 / 三個人有大手小手 / 有一大二小的手 | 一、二、三、人、個、大、的、小、手、我 | Introduces `有` to unlock simple existential and possession patterns while continuing concrete hand-focused picture sentences. |

## Planned Lessons

No post-L008 lesson is selected yet.

## Planning Rule For New Lessons

Before drafting a new lesson:

1. Add only the current new character(s) to the learned set.
2. Sentence text may use only cumulative learned characters.
3. Try to include several characters from the recent review pool.
4. Prefer natural Taiwan usage over mechanically combining characters.
5. Keep early lessons short; do not force 6-8 sentences until the learned set can support them.
6. After teacher approval, generate image prompts, image files, AI audio, and `charTimings`.

## Suggested Next-Lesson Prompt Shape

Use this shape when asking AI to draft sentence candidates:

```text
We are building a Taiwan zhuyin character recognition app for young children.

Already taught characters:
一 二 三 人 個 大 的 小 手 我 有

New character for this lesson:
{NEW_CHARACTER}

Rules:
- Sentence display text may use only already taught characters plus the new character.
- Use Taiwan usage.
- No Hanyu pinyin.
- No punctuation in spokenText.
- Prefer concrete, imageable sentences.
- Reuse characters from the recent review pool when natural: 的 小 手 我 有 大 人 個.
- Keep the sentence set short if the character set cannot support natural variety.
```
