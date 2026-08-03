# Curriculum Schema

The curriculum is stored as JSON so it can later be generated from a spreadsheet or dedicated editor.

## Top-Level Shape

```json
{
  "version": 1,
  "lessons": [],
  "reviewLessons": []
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
  "charAudio": {
    "一": "/assets/lessons/L001/audio/char-一.m4a",
    "二": "/assets/lessons/L001/audio/char-二.m4a",
    "三": "/assets/lessons/L001/audio/char-三.m4a",
    "人": "/assets/lessons/L001/audio/char-人.m4a"
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
- `newChars` lists the character or characters introduced by this lesson. Most lessons introduce one character; seed lessons may introduce several. A regular lesson may introduce two characters together when the natural learning unit should not be split, such as `朋友`.
- `zhuyin` uses Taiwan zhuyin only and must include an entry for every `newChars` item.
- `charAudio` maps each new character to its reviewed single-character AI audio file. During prototype work this may be omitted and the app will use a TTS fallback.
- `originHint` is optional internal curriculum metadata. It must not appear in the child-facing lesson practice UI unless a separate reviewed child-safe design is explicitly built.
- `requiredRounds` controls Stage 4 sentence-game rounds when `sentenceGames` is present. Stages 1-3 have fixed completion behavior.

Review module note:

- Review modules are planned after every 30-lesson milestone starting after L060.
- Review modules are not lessons. They use `R###` ids, display as `複習一`, `複習二`, and live in top-level `reviewLessons`.
- The first pair after L060 is R001/R002 and covers L001-L030; the second pair after L090 is R003/R004 and covers L031-L060.
- Each review module has 5 sentences, and each two-module pair must cover every new character from its target 30-lesson range at least once.
- Do not add empty placeholder review modules to this JSON. Add review modules only after the review module flow, sentences, images, audio, timings, and pair-level coverage checklist are production-ready.
- Do not create L061/L062 as review modules; after L060, L061 remains the next new-character lesson.

## Review Module

```json
{
  "id": "R001",
  "reviewNumber": 1,
  "title": "複習一",
  "afterLessonOrder": 60,
  "targetLessonRange": {
    "startOrder": 1,
    "endOrder": 30
  },
  "requiredCoverageChars": ["一", "二", "三"],
  "requiredRounds": 5,
  "sentences": []
}
```

Rules:

- `id` must use `R###`. Review modules must not use `L###`.
- `reviewNumber` controls the display label: R001 is `複習一`, R002 is `複習二`.
- `afterLessonOrder` is the milestone lesson after which this module appears.
- `targetLessonRange` is the older 30-lesson block that must be covered by the pair.
- `requiredCoverageChars` must exactly list the new characters introduced in `targetLessonRange`.
- Review modules introduce no new characters and must not contain `newChars`, `zhuyin`, or `charAudio`.
- Review module sentence text may use any Han character learned by `afterLessonOrder`.
- Review module assets live under `public/assets/reviews/R###/`.

## Sentence

```json
{
  "id": "L001-S01",
  "text": "大大",
  "displayLines": ["大大"],
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
- `displayLines` is optional. Use it when a sentence needs teacher-approved visual line breaks, such as `["一個", "大大的人"]`. It must contain the same Han characters as `text` in the same order.
- `spokenText` is what the audio says. Use this to omit punctuation from reading.
- `focusChar` is the preferred target for games.
- `imagePrompt` is the reviewed prompt for generating or sourcing a picture for this sentence.
- `imageSrc` is null until the image asset is approved and added.
- `approved` must be true before the sentence is allowed into the curriculum file.
- `audio` may be `null` during draft curriculum work.
- Production curriculum should provide audio and timings for every sentence.
- `charTimings` references Han-character indices in `text`, skipping punctuation.
- Sentences are not production-ready until reviewed and approved by the parent/teacher.

## Sentence Game

Current production data starts Stage 4 at L006. A lesson may include a fixed `sentenceGames` array. Do not choose the game type randomly at runtime; each reviewed game is part of the lesson design.

```json
{
  "id": "L011-G01",
  "type": "find-character",
  "sentenceId": "L011-S01",
  "targetChar": "上",
  "prompt": "找到「上」。",
  "missingIndexes": [4],
  "options": [
    { "id": "correct", "text": "有一大二小的手", "correct": true, "audioSrc": "/assets/lessons/L008/audio/L008-S05.m4a" }
  ]
}
```

Rules:

- `type` is one of `find-character`, `teach-character`, `missing-character`, `partial-order`, or `choose-pronunciation`.
- `sentenceId` must point to a reviewed sentence in the same lesson.
- `targetChar` must appear in that sentence. It may be the current lesson's new character or a review character.
- Early lessons should use fixed, teacher-reviewed game plans. Do not randomize game type at runtime.
- In a normal five-sentence production lesson, the five Stage 4 games should use all five reviewed sentences exactly once.
- In that same pattern, `find-character`, `teach-character`, and `missing-character` should usually target the current lesson's new character; `partial-order` and `choose-pronunciation` may focus on review characters.
- `missingIndexes` uses Han-character indexes in the sentence, skipping punctuation.
- `options` is used for missing-character, partial-order, and choose-pronunciation games.
- `choose-pronunciation` options should use reviewed AI audio when audio choices are provided. Do not rely on browser TTS as the production voice for these choices.

## Validation

The validator checks:

- Lesson order.
- Duplicate lesson IDs.
- Duplicate introduced characters.
- Sentences only use characters already unlocked or introduced in the current lesson.
- `focusChar` appears in the sentence.
- Audio timings match the number of Han characters when audio exists.

Production asset validation is stricter:

```bash
npm run validate:production
```

It requires character audio, sentence images, sentence audio, and character timing metadata.

Run:

```bash
npm run validate:curriculum
```

## Generation Entry

New lessons should start from a lesson request file, not from directly editing production curriculum JSON.

If the lesson is being prepared before previous lessons are merged, first register the provisional dependency in `docs/PARALLEL_LESSON_REGISTRY.md`, then include the same dependency in the lesson request's `dependsOnLessons` and `provisionalLearnedChars`.

```bash
npm run curriculum:packet -- --request curriculum-workflow/lesson-requests/L004-example.json
```

This produces:

- `curriculum-workflow/generated/L###-generation-packet.md`: prompt and constraints for AI sentence, image, and audio generation.
- `curriculum-workflow/drafts/L###-draft.json`: empty lesson draft using the app schema.

See `docs/CURRICULUM_PRODUCTION_SOP.md` for the full review workflow.
