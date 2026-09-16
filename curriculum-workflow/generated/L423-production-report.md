# L423 組 Production E package

Status: dependency-blocked-asset-complete
Branch: codex/l423-complete-package
Base origin/main: 4eec51781af66eee3b0a9b0b5afe0e0497a8d121 (L415 解). Locked handoff vocabulary e0fec697 L414: 425 Han.

## Delivered

Request, final generation packet, draft, original teacher handoff, 5 exported 1024px square WebP images, 10 mono AAC 44100Hz M4A files, sentence and Stage 4 timings, alignment/transcript report and hash-based production QA report. Asset folder: 1317183 bytes (1.256 MiB). No rejected image committed; no raw audio committed.

## Validation

- Request/draft/packet equality, allowed characters, coverage (組3 班2 室2 教2 合1 結1), display lines and canonical Stage 4 indexes: PASS.
- Lesson-local validate:production: PASS.
- Lesson-local assets:audit --strict: PASS, 5 images/10 audio references, zero warnings.
- All audio decodes; standalone char duration/volume and G05 <=3dB mean spread pass.
- Final M4A transcriptions match all five sentences and four Stage 4 fragments/options after documented traditional/simplified equivalence normalization. No same-sound wrong-character substitutions.
- AI auditory check (gpt-audio) PASS for standalone 組 ㄗㄨˇ, S01 教 ㄐㄧㄠˋ, S02 教 ㄐㄧㄠ, S03 長 ㄓㄤˇ and G02 prefix 教 ㄐㄧㄠ. This is not human listening or browser QA.
- npm run verify skipped: dependency-blocked; shared state left for Release. Lesson-local validators run with temporary isolated curriculum input and restore original bytes in finally.

## Per-image visual review

S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS

Built-in imagegen used with full L058 reference set, five refined examples, and L154/L162/L163 family references. Actual exported WebP files compared with those references. S01 shows four playing pairs and separate boards; S02 incomplete car assembly with recurring father; S03 generic monitor distinct from protagonist; S04 three children on one unfinished poster; S05 open unlatched rigid pencil case with falling pencils. S03 original rejected for protagonist-like child and background lettering, regenerated and excluded from commit. Final prompts are in request/draft imagePrompt and imageNotes.

## Audio and timing notes

Whole G05 wrong-two regenerated after initial transcription said 禮盒; final text is 筆盒沒關好結果錢掉出來. Repo OpenAI generator, assets:audio and assets:align:ai used. Trailing silence only shortened after measuring last active sample envelope, retaining 250ms decay margin; no syllable cut-outs or splicing. AI timestamps with 1/20ms spans and preceding pauses were corrected from waveform evidence; all final spans 80–900ms, ordered and nonoverlapping. Details in L423-alignment-report.json.

## Browser QA limitation

Browser QA tooling fallback: cua.getBrowser initialization timed out after 30 seconds and kernel reset before playback. Manual continuous listening, in-app highlighting and phone recording QA not performed. Teacher subjective review remains post-merge.

Technical and AI auditory checks do not constitute human continuous listening, in-app syllable-highlight observation or phone recording acceptance.

## Release handoff

Required vocabulary lessons: L416 果, L418 結, L419 合, L420 教, L421 室, L422 班. Release must integrate all numbered predecessors L416–L422 in order, including unused L417 如. R051/R052 must be integrated after L420; coverage L391–L420. Latest checked main remains L415. No review modules included in this package.

Production JSON, planner, ledger and deployment remain Release-owned; no final changes to those shared files. Ignored intermediate audio/cache retained. Release should use the draft, run current-boundary checks, export planner, update ledger and clean the registry.

Pre-merge preview: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L423&ref=codex%2Fl423-complete-package (package preview, not final main review queue).

After Release merges and deploys: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L423&ref=main ; index https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main ; npm run asset:review-status -- --unit L423 --ref main.
