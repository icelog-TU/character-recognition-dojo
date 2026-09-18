# L463 Production QA

- Unit: L463「期」
- Production owner: Production A / `parallel-a`
- Source boundary: `80431be079de2085bbab084db7da0a3698461a92` (formal L001-L446, latest「音」)
- Package status: `dependency-blocked-asset-complete`
- Release blockers: L454、L458-L462 and R055/R056 after L450 must enter `main` in playable order.

## Curriculum and package audit

- Locked `allowedChars`: 457 unique Han characters, fully expanded in the request and draft.
- Allowed-character sweep: PASS for all five sentences, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text.
- Coverage: 期 3、日 3、文 2、午 2、中 1、其 1 — PASS.
- Sentence Han counts: 10、9、11、11、11; `spokenText` Han sequence and `displayLines` joins — PASS.
- Stage 4 order, one-use sentence assignment, zero-based target indexes, missing indexes, and single-Han partial-order mapping — PASS.

## Image QA

- L463-S01: PASS — recurring father and girl are outside a closed stationery shop; stationery is visible through the window; daytime context is clear; no readable signage.
- L463-S02: PASS — recurring mother shows a phone notice at home while the girl puts the lesson book back into her bag; no readable phone or book text.
- L463-S03: PASS — recurring mother reminds the girl and the girl places the borrowed book into an outing bag; this is preparation at home, not a return counter; no due-date text.
- L463-S04: PASS — exactly six apples: three on the table and three fully visible inside the open gift bag; recurring mother and girl; no numeric labels.
- L463-S05: PASS — generic worker is visually distinct from the recurring parents, points at a registration form, while the girl holds a pencil and father accompanies her; form content is not readable.
- All five: 1024×1024 WebP, established L058 style lock, recurring cast consistency, no readable text/numbers/logos, and each file below 400 KiB — PASS.

## Audio, timing, and interaction QA

- Five sentence tracks, `char-u671f.m4a`, dedicated G02 prefix/suffix, and both complete G05 wrong-choice tracks exist and decode as AAC 44.1 kHz mono — PASS.
- `char-u671f.m4a`: three independent transcription trials returned「期」; pitch evidence retained — PASS.
- G02 prefix: three trials returned「借的書明天到」after Traditional normalization — PASS.
- G02 suffix: three trials returned「別忘了還」after Traditional normalization; final「還」is ㄏㄨㄢˊ — PASS.
- S03 full sentence alignment recognized final「還」and the draft carries `zhuyinOverrides["10"] = "ㄏㄨㄢˊ"` — PASS.
- All nine timed tracks have one timing per Han character, monotonic 80–900 ms spans, and at most 300 ms final tail — PASS.
- G05 mean-volume spread: 0.4 dB — PASS.
- Real `LessonPanel` at phone width: Stage 1 played `char-u671f.m4a`; Stage 2 showed exactly three「期」targets; Stage 3 played S01-S05 through `ended`; G01 correct index completed; G02 displayed the red frame on S03 index 6 and reached the hold-to-record state; G03 accepted「期」; G04 accepted 明→天→下→午; G05 played the correct plus both referenced wrong tracks and accepted the correct option — PASS.
- Physical microphone capture was not invoked by the browser control surface; the hold-to-record transition and lesson data wiring were verified. This is recorded as a browser-control limitation under the SOP fallback, with all non-browser asset/timing/format gates passing.

## Teacher pre-merge audio repair — source review 4fefcda2

- Teacher reported three audio defects at `4fefcda2545b2456c814ba59cf36ffc42c414166`: S01 期 sounded like first-tone 欺, S02 paused unnaturally after the first character, and S05 日期 ended as 日欺 instead of 日奇.
- S01, S02 and S05 were independently regenerated as complete sentences. No image or other lesson audio was changed.
- S01: 期 is explicitly ㄑㄧˊ; acoustic target contour dips near 188 Hz and rises to about 195 Hz before release, replacing the reviewed file's falling contour.
- S02: alignment is continuous across 日 0–220 ms, 文 220–520 ms, 課 520–820 ms, 改 820–1140 ms and 到 1140–1400 ms; no pause remains after 日 or 課.
- S05: 日期 is explicitly ㄖˋ ㄑㄧˊ; final 期 rises approximately 100→127 Hz through the voiced target interval.
- AI transcription matches all three approved Han sequences. Timings and package-local validation are regenerated. Teacher re-review is requested on the new immutable repair ref.
- Actual phone-width `LessonPanel` Stage 3 playback emitted `playing` then `ended` for repaired S01, S02 and S05.
- Repair asset commit: `87237ed7881e07d98cd1f2f512066ae4c0b5c621`.
- Pushed-ref package intake at `origin/codex/l463-complete-package`: PASS; package status remains `dependency-blocked-asset-complete`.
