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
  "targetChar": "大",
  "zhuyin": "ㄉㄚˋ",
  "title": "大",
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
- `targetChar` should introduce exactly one new Han character.
- `zhuyin` uses Taiwan zhuyin only.
- `originHint` is optional.
- `requiredRounds` controls block 3 sentence-game rounds. Blocks 1 and 2 have fixed completion behavior.

## Sentence

```json
{
  "id": "L001-S01",
  "text": "大大",
  "spokenText": "大大",
  "focusChar": "大",
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
