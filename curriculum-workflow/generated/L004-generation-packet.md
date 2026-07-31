# L004 Generation Packet

## Lesson Request

- Lesson: L004
- Order: 4
- New character(s): 小
- Zhuyin: 小=ㄒㄧㄠˇ
- Target sentence count: 4
- Teacher notes: Use only characters learned in lessons 1-3 plus 小. Keep the first output extremely simple and pictureable.

## Learned Character Boundary

The AI must treat this as a locked curriculum sequence.

- Previously learned characters: 一 二 三 人 個 大
- Current lesson new characters: 小
- Allowed Han characters for display text: 一 二 三 人 個 大 小
- Forbidden: any Han character not listed above.
- Taiwan usage only. Do not use Hanyu pinyin.
- Do not generate worksheet-style questions or test prompts.
- Do not use unnatural Taiwan Mandarin such as "二個人"; wait until "兩" is taught before using "兩個人".

## Existing Sentence Style

Use these only as style references. Do not copy a commercial book sequence.

- 人
- 一人
- 二人
- 三人
- 人
- 一個人
- 三個人
- 人
- 一個人
- 一個大人
- 三個大人

## Sentence Generation Prompt

Generate 4 to 6 short strings for a preschool Chinese character recognition app.

Rules:

1. Display text must use only allowed Han characters.
2. The first one or two items may review previous lesson strings.
3. At least half of the items should naturally include the current lesson new character(s).
4. Keep strings concrete and pictureable.
5. Prefer child-friendly Taiwan Mandarin.
6. Keep punctuation out unless it genuinely helps display. If display text has punctuation, spokenText must omit it.
7. Return candidates as JSON only, using this shape:

```json
[
  {
    "text": "一個人",
    "spokenText": "一個人",
    "focusChar": "個",
    "reason": "Uses only learned characters and practices the new classifier."
  }
]
```

## Image Generation Prompt Rules

After the teacher approves a sentence, create one image prompt per sentence.

Rules:

- Use a warm, simple children's picture-book style.
- Show the meaning clearly with one main idea.
- No visible text, letters, numbers, zhuyin, UI, labels, watermarks, or signs.
- If the sentence has a count, the image must clearly show that count.
- Prefer light backgrounds and clear subjects.
- Image target path pattern: `/assets/lessons/L004/images/L004-S01.webp`

## Audio Generation Rules

After the teacher approves a sentence, create one natural full-sentence audio file per sentence.

Rules:

- Create one character audio file for each new character in the lesson.
- Character audio target path pattern: `/assets/lessons/L004/audio/char-字.m4a`
- Voice: natural Taiwan Mandarin.
- Read `spokenText`, not display punctuation.
- Do not synthesize character by character.
- Audio target path pattern: `/assets/lessons/L004/audio/L004-S01.m4a`
- Produce character timing metadata in milliseconds after the audio exists.
- `charTimings` count must match Han characters in display `text`, skipping punctuation.

Audio metadata shape:

```json
{
  "src": "/assets/lessons/L004/audio/L004-S01.m4a",
  "durationMs": 1200,
  "charTimings": [
    { "charIndex": 0, "startMs": 80, "endMs": 420 }
  ]
}
```

## Final Curriculum JSON Shape

Only after teacher approval, move reviewed content into `src/curriculum/sample-lessons.json`.

```json
{
  "id": "L004",
  "order": 4,
  "newChars": ["小"],
  "zhuyin": {"小":"ㄒㄧㄠˇ"},
  "charAudio": {"小":"/assets/lessons/L004/audio/char-小.m4a"},
  "title": "小",
  "requiredRounds": 4,
  "sentences": [
    {
      "id": "L004-S01",
      "text": "",
      "spokenText": "",
      "focusChar": "小",
      "imagePrompt": "",
      "imageSrc": null,
      "approved": false,
      "audio": null
    }
  ]
}
```

## Review Checklist

- Every display Han character is in the allowed list.
- Sentence sounds natural in Taiwan usage.
- Sentence is easy to picture.
- The new character is meaningfully practiced.
- Image prompt has no text/letter/number request.
- Audio reads smoothly as a whole sentence.
- Character timing metadata is present before production release.
