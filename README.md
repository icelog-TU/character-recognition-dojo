# 認字練功房

幼兒漢字識字 app。核心是「一課一字、循序解鎖、用句子遊戲自然認字」。

## Core Rules

- Sentences are horizontal, left to right.
- Every Han character may show vertical zhuyin on its right side.
- The app must not switch sentence practice into vertical text layout.
- Main lesson reading uses pre-recorded audio plus character-level timings.
- Live TTS is not the primary reading source for curriculum sentences.
- Punctuation is display-only unless explicitly included in `spokenText`.
- Lessons unlock in order.
- Completed lessons enter the review pool.

## Development

Start new work by reading:

- `docs/PROJECT_HANDOFF_SOP.md`
- `docs/CURRICULUM_LEDGER.md`
- `docs/CURRICULUM_PRODUCTION_SOP.md`
- `docs/COLLECTION_SYSTEM.md`

```bash
npm install
npm run dev
```

Validate the sample curriculum:

```bash
npm run validate:curriculum
```

Build:

```bash
npm run build
```
