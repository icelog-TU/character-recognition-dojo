# L020 Generation Packet

## Lesson Request

- Lesson: L020
- Order: 20
- New character(s): 鳥
- Zhuyin: 鳥=ㄋㄧㄠˇ
- Target sentence count: 5
- Teacher notes: Generated from the web next-lesson planner. Selected choice: choice-鳥. Approved sentences: 一隻鳥在很高的山上; 一隻鳥和鳥的小家; 你和我的三隻小鳥; 很大的手和很小的手; 我家在很高的山上. Sentence length target: 4-12 Han characters per sentence. Prefer using recent review characters from the previous five lessons: 在 高 的 山 下 有 水 你 我 二 人 上 大 手 三 個 很 一 小 家 和 隻. Across this lesson's sentence set, include each new character from the previous three lessons at least once: 家 和 隻. Use only learned characters plus the new character(s). Use each sentence's imageNotes as teacher guidance when writing imagePrompt. Generate reviewed image prompts, AI sentence audio, and production AI charTimings after teacher approval. Sentence 5 was corrected after teacher noticed the fixed girl's house is on the mountain.

## Learned Character Boundary

The AI must treat this as a locked curriculum sequence.

- Previously learned characters: 一 二 三 人 個 大 的 小 手 我 有 山 上 下 你 水 在 高 很 家 和 隻
- Current lesson new characters: 鳥
- Allowed Han characters for display text: 一 二 三 人 個 大 的 小 手 我 有 山 上 下 你 水 在 高 很 家 和 隻 鳥
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
- 大人
- 二人
- 三個人
- 一個大人
- 一人
- 二人
- 大大的人
- 三個大大的人
- 大大的人
- 小小的人
- 一個大大的人
- 三個小小的人
- 大大小小的人
- 一個人的手
- 三個人的手
- 大大的手
- 小小的手
- 大大小小的手
- 我一個人
- 我的小手
- 我的手小小的
- 大人的手大大的
- 三個人的大手小手
- 有一個人
- 我有小小的手
- 大人有大大的手
- 三個人有大手小手
- 有一大二小的手
- 有人有山
- 大大的山小小的山
- 我一個人的山
- 三個人的大手小手
- 我有小小的手
- 我一個人上山
- 山上有三個大人
- 我的手小小的
- 我的手上有一個小人
- 有大大的山，有小小的山
- 有三個人上山
- 有一個人下山
- 我的手下有三個小山
- 山下有一個大人
- 有一大二小的手
- 你一個人上山
- 你一個人下山
- 你手上有三個小山
- 我手下有一個大山
- 有二大一小的手
- 大大的山上有水
- 你的水，我的水。
- 水下有三個大人
- 山下有一個大人
- 你小小的手上有水
- 水在你小小的手上
- 你我二人在水下
- 在山下有三個大人
- 有山有水，有你有我。
- 我在水上，你在水下
- 在高高的山下有水
- 你我二人在高山上
- 高高的人有大大的手
- 三個高高的人在水下
- 在你的手上有水
- 在高山上有很大的水
- 有一個很高的人在水下
- 大人的手很大
- 你我二人的手很小
- 有三個很高的人在山上
- 你的家在高山下
- 我的家在高山上
- 山上有三個很大的家
- 你我二人在家
- 有一個很小的家在水上
- 很高的山和很大的水
- 你和我在家
- 很小的手在很大的手上
- 在山下的家和在水上的家
- 很高的人和很高的家
- 一隻很大的手在水下
- 一隻大手和一隻小手
- 很高的人和很高的家
- 有三個小家在一隻手上
- 你和我在家

## Sentence Generation Prompt

Generate 6 to 6 strings for a preschool Chinese character recognition app.

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
- Image target path pattern: `/assets/lessons/L020/images/L020-S01.webp`

## Audio Generation Rules

After the teacher approves a sentence, create one natural full-sentence audio file per sentence.

Rules:

- Create one character audio file for each new character in the lesson.
- Character audio target path pattern: `/assets/lessons/L020/audio/char-字.m4a`
- Voice: natural Taiwan Mandarin.
- Read `spokenText`, not display punctuation.
- Do not synthesize character by character.
- Audio target path pattern: `/assets/lessons/L020/audio/L020-S01.m4a`
- Produce character timing metadata in milliseconds after the audio exists.
- `charTimings` count must match Han characters in display `text`, skipping punctuation.

Audio metadata shape:

```json
{
  "src": "/assets/lessons/L020/audio/L020-S01.m4a",
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
  "id": "L020",
  "order": 20,
  "newChars": ["鳥"],
  "zhuyin": {"鳥":"ㄋㄧㄠˇ"},
  "charAudio": {"鳥":"/assets/lessons/L020/audio/char-鳥.m4a"},
  "title": "鳥",
  "requiredRounds": 5,
  "sentences": [
    {
      "id": "L020-S01",
      "text": "",
      "spokenText": "",
      "focusChar": "鳥",
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
