# Curriculum Schema

The curriculum is stored as JSON so it can later be generated from a spreadsheet or dedicated editor.

## Top-Level Shape

```json
{
  "version": 1,
  "lessons": []
}
```

## Lesson

```json
{
  "id": "L001",
  "order": 1,
  "newChars": ["一", "二", "三", "人"],
  "zhuyin": {
    "一": "ㄧ",
    "二": "ㄦˋ",
    "三": "ㄙㄢ",
    "人": "ㄖㄣˊ"
  },
  "title": "一二三人",
  "requiredRounds": 3,
  "originHint": {
    "kind": "text",
    "text": "Optional licensed/public-domain note.",
    "sourceName": "Optional source name",
    "sourceUrl": "Optional source URL"
  },
  "sentences": []
}
```

Rules:

- `order` must be unique and contiguous.
- `newChars` lists the character or characters introduced by this lesson. Most lessons introduce one character; seed lessons may introduce several.
- `zhuyin` uses Taiwan zhuyin only and must include an entry for every `newChars` item.
- `originHint` is optional.
- `requiredRounds` controls block 3 sentence-game rounds. Blocks 1 and 2 have fixed completion behavior.

## Sentence

```json
{
  "id": "L001-S01",
  "text": "大大",
  "spokenText": "大大",
  "focusChar": "大",
  "imagePrompt": "A warm simple children's picture book illustration...",
  "imageSrc": null,
  "approved": true,
  "audio": {
    "src": "/audio/L001-S01.mp3",
    "durationMs": 980,
    "charTimings": [
      { "charIndex": 0, "startMs": 80, "endMs": 420 },
      { "charIndex": 1, "startMs": 430, "endMs": 760 }
    ]
  }
}
```

Rules:

- `text` is what appears on screen.
- `spokenText` is what the audio says. Use this to omit punctuation from reading.
- `focusChar` is the preferred target for games.
- `imagePrompt` is the reviewed prompt for generating or sourcing a picture for this sentence.
- `imageSrc` is null until the image asset is approved and added.
- `approved` must be true before the sentence is allowed into the curriculum file.
- `audio` may be `null` during draft curriculum work.
- Production curriculum should provide audio and timings for every sentence.
- `charTimings` references Han-character indices in `text`, skipping punctuation.
- Sentences are not production-ready until reviewed and approved by the parent/teacher.

## Validation

The validator checks:

- Lesson order.
- Duplicate lesson IDs.
- Duplicate target characters.
- Sentences only use characters already unlocked or introduced in the current lesson.
- `focusChar` appears in the sentence.
- Audio timings match the number of Han characters when audio exists.

Run:

```bash
npm run validate:curriculum
```
