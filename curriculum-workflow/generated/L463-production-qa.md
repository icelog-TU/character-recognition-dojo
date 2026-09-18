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

