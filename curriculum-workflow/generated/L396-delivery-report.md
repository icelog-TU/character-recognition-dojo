# L396 單 — Production E delivery

Status: dependency-blocked-asset-complete

## Boundary and scope

Source origin/main 2be6834d0e35978cc417da5721dbd891e8974948: L001–L389, latest 號, 393 learned characters; allowedChars 399. Refetched at delivery with same boundary. Accepted dependencies: L386, L389, L391, L392, L393, L394, L395. 名/號 already merged; handoff provenance retained. Release sequence dependencies: L390, L391, L392, L393, L394, L395, R047, R048. Production JSON, planner, ledger and scripts remain unchanged; Release owns integration, final verify, main push and deployment.

## Assets and checks

Five 1024-square WebP images and ten processed AAC M4A files; 1091302 bytes total. Standalone 單 audio 1718 ms, original onset retained. All audio decodes, AAC 44100 Hz mono, volume checks PASS. G05 option mean volume spread 0.5 dB. G02 suffix gained 8 dB to match prefix/target volume. Sentence and Stage 4 ASR transcripts match approved text after traditional-character normalization. G02 prefix and G05 wrong-two regenerated to improve pronunciation; final full transcripts match 報名 and 他轉了個身又睡著了. 單 ㄉㄢ; 睡著 著 ㄓㄠˊ; 轉 ㄓㄨㄢˇ. ASR is technical text evidence, not subjective listening proof.

Coverage {"單":3,"印":2,"翻":2,"碼":2,"頁":2,"報":1} PASS. Han 11/10/9/9/10; allowed-character sweep, spokenText, displayLines and game indices PASS. AI timings with acoustic correction of S02 的/號 and S05 單/手; final syllable decay retained plus about 200 ms tail. Timing spans, counts, order and durations PASS. Dedicated G02 prefix/suffix and both full G05 wrong sentences included with timing metadata. Local validate-production-assets and strict asset-format audit PASS, 0 warnings.

## Image review and numeric permission

Final exported WebPs inspected beside L058-S01–S05 plus refined L115-S01/S02, L118-S02, L119-S01, L128-S03 and family L154-S01, L162-S04, L163-S02 anchors. Fine textured illustration, modeled faces, warm light and stable identities preserved. No generated image was rejected. Built-in imagegen generation with reference sheets; exact prompts and imageNotes are in the packet and draft.

- S01 style-lock PASS, cast PASS: mother/girl, food pictures printed on menu.
- S02 style-lock PASS, cast PASS: father/girl/distinct clerk; adjacent 00-0000-0000 and 00-0000-0008, only last digit differs, correction not yet made.
- S03 style-lock PASS, cast PASS: mother/girl, turned page, normal clear lower-right 8.
- S04 style-lock PASS, cast PASS: fixed 他 boy with orange shirt, green wristband and spiky hair; one sleeping boy in bed.
- S05 style-lock PASS, cast PASS: father/girl; only one hand grips chair, other hand down, chair feet clear of floor.

Teacher numerical permission is limited to S02's two specified fictional telephone numbers and S03's page number 8; no other readable text/numbers permitted.

## Browser QA — tooling fallback

All five sentence cards and six auxiliary players loaded. Clicking S01 Play lost the inspected target; subsequent inspection returned the built-in This page crashed page (blocked data URL). No further playback or microphone checks were possible. URL: http://localhost:5196/tools/lesson-asset-review.html?unit=L396&ref=local. Actual listening, pronunciation by ear, highlight synchronization, first-tap playback across all readers, phone microphone recording and stitched replay were not verified. Technical gates above passed; use docs/CURRICULUM_PRODUCTION_SOP.md “Browser automation fallback for pre-merge playback QA”. Teacher subjective review remains post-merge by default; no pre-merge teacher PASS is claimed.

Asset omissions: none. Browser QA scope limitations and Release dependencies are listed above.

## Pushed package intake

`npm run curriculum:package-intake -- --unit L396 --ref origin/codex/l396-complete-package` passed on asset commit 2ff64fba49a821abdfa4679858f7e64f21d5bb5d. Five images, ten audio files, canonical five-game order; no package-status defects. Documentation-only delivery tip is checked again after push; final response supplies its immutable SHA and review URL.
