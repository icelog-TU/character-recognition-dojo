# R043/R044 Production D checkpoint

Status: **partial-package**. Not dependency-blocked-asset-complete and not merge-ready.
Branch: `codex/r043-r044-complete-package`; base `debe8774` (formal through L354).
Release dependencies: L355 雞, L356 公, L357 園, L358 物, L359 怪, L360 奇 all absent from this main snapshot. Integrate these before this pair; pair must precede L361. Production JSON, planner and ledger are untouched.

## Completed

- Exact 10 teacher-approved sentences, spokenText, displayLines, imageNotes and Stage 4 plans; 30/30 pair coverage at ceiling L360.
- 10 final square WebP images; both folders below 2 MB. Final per-image style-lock PASS; cast PASS except R044-S03 N/A.
- Image reference inspection: all five L058 references (style only), L115 S01/S02, L118 S02, L119 S01, L128 S03, L154 S01/L162 S04/L163 S02 family, named xiaoyue.webp. Final WebPs opened/viewed at phone-readable size; R044-S05 preserves Xiaoyue's crescent clip, long wavy hair and purple/teal clothes.
- R044-S01 initial visitors resembled recurring parents: rejected and regenerated with visually distinct elderly visitors; final PASS. Other nine images accepted first generation. R043-S05/R044-S03 recompressed from original PNG and final WebPs rechecked. Original PNGs remain outside shipping assets.
- 18 whole OpenAI-generated clips processed through repository scripts: 10 sentence, 4 teach prefix/suffix, 4 wrong-choice. Correct G05 options reuse sentences. Reviews have no standalone charAudio; G02 target is the child's recorded syllable.
- AI alignment obtained for all 18 exact spoken texts; Stage 4 metadata preserved in `stage4AudioAlignment` keyed by game/fragment id. This does not imply manual timing acceptance.

## Unresolved asset QA

- R043-S01 特 index4: 1700–1720 ms (20 ms).
- R043-S03 請 index3: 1560–1561 ms (1 ms), overlaps following 別 by 1 ms.
- All 18 clips have duration minus last AI timestamp above 300 ms (488–2472 ms). This is an alignment/tail diagnostic, not a claim that every interval is verified silence. Do not trim solely to the AI timestamp; listen/inspect final syllable first.
- Mobile sentence listening/highlight QA and G02 recording/stitched replay/G05 first-tap QA pending. No teacher PASS for this pair. Existing L354 teacher acceptance does not apply.
- Repair these actual technical findings before requesting browser-failure manual fallback or promoting package status.

R043-S01 regenerated once, S03 twice; short segments persisted. R043-G02 suffix regenerated twice after transcript mismatches; final exact 因不明 alignment passed. A pronunciation instruction was added for 因不明 and continuous speech for S03. Simplified transcript equivalence normalization added for 脏/鸡/对/园/吗 only; no homophone substitution and no approved text changes. No clips were spliced. Current tails are untrimmed standard processed output.

## Validation evidence

- `npm run tools:check`: PASS.
- `npm run ai:check`: PASS.
- `npm run curriculum:audit-state`: PASS; expected warnings for unintegrated R043/R044 asset folders, formal remains L354.
- `npm run validate:production`: PASS for unchanged main curriculum (does not itself validate unintegrated drafts).
- `node curriculum-workflow/generated/R043-R044-package-check.cjs curriculum`: PASS with existing normal-lesson warnings; memory-only main + six remote dependency drafts + pair, 360 lessons. No shared JSON writes.
- Same command `production`: PASS scoped to R043/R044 draft assets.
- Same command `formats`: PASS strict format audit, 10 image/18 audio references, zero warnings; includes AAC/44100Hz/mono and G05 volume spread.
- Same command `technical`: **FAIL as expected on unresolved timing/tail gate**; structure and allowed chars PASS, 30/30 coverage, ffmpeg decode 18/18. Full findings and folder bytes in R043-R044-technical-report.json.
- `npm run verify`: skipped; no production JSON entries and six missing main dependencies, integration/full verify belongs to Release.

The two owned `.cjs` adapters invoke the existing repo scripts against memory-only draft curriculum. Audio adapter commands are `<unit> generate|process|align [optional-fragment-id]`; generation is a paid mutation and not needed to inspect this checkpoint. Raw MP3 inputs remain in ignored owned audio-inbox directories. Do not run processing without those source inputs.

## Preview convention

After push, use `https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=R043&ref=<full-pushed-SHA>` (and R044).
Label: **pre-merge package preview, not final main review queue**.
The supplied handoff's `review-asset-review.html` filename is absent in this repo; the permanent lesson-asset-review tool supports review units. Do not use `ref=main` for this unmerged pair.

## Browser attempt at pushed asset checkpoint

```json
{
  "attemptedSha": "db22ca7f407307bab2d81b7b8eb0c4528201bd45",
  "exactUrl": "https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=R043&ref=db22ca7f407307bab2d81b7b8eb0c4528201bd45",
  "loaded": "R043: five sentence cards and five extra audio entries loaded",
  "failure": "First R043-S01 Play click: inspected target navigated or closed; tab inventory confirms This page crashed. No successful audible playback, highlighting, microphone recording or stitched replay QA.",
  "teacherManualQa": "NOT performed; no PASS; technical timing/tail gate still fails. Do not promote via fallback."
}
```

This failure is a tooling failure; it does not establish that the media is bad. Existing timing/tail findings remain separate blockers. Later notes-only tip preserves the same image/audio bytes.
