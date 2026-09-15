# L392 Production package

Status: dependency-blocked-asset-complete

Branch: codex/l392-complete-package. Full pushed SHA is supplied by the final handoff; verify the same ref with curriculum:package-intake.

Text dependencies: L385, L386, L387, L388, L389, L390, L391. Release sequence blockers: L381, L382, L383, L384, L385, L386, L387, L388, L389, L390, L391, R047, R048.

## Production QA

- S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. Each exported WebP compared beside the full L058 sheet, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03, family anchors L154-S01/L162-S04/L163-S02 and teacher L374-S04.
- Built-in image_gen generated all five images. Rejected S01 speech-bubble draft, S04 colored-symbol ID-column draft, and S05 extra-mother draft were revised; none of those rejected files are committed. Final S03 uses a blank inside cover on the left and first inner page on the right; S04 has paired unreadable handwriting/code marks; S05 has one complete upright question mark printed on the page.
- OpenAI gpt-4o-mini-tts/coral generated exact complete sentence and game-fragment text; character 頁 generated separately from single-character input with ㄧㄝˋ instruction. No production audio splicing or extraction.
- S02 zhuyinOverrides indices 0/2 are ㄕㄨˇ; S03 index 7 is ㄕㄨˋ. G02 suffix text is 的數字. Contextual subjective pronunciation listening follows the browser tooling fallback below, not an asserted listening PASS.
- assets:audio processing, AI transcription/alignment, all 10 AAC/44100 Hz/mono decodes, timing cardinality/order/span/tail checks, and strict L392 asset audit PASS. G05 mean-volume spread 1.0 dB. Total assets 1,011,464 bytes.
- AI normalization was applied only during local alignment for 简繁 equivalents 报/報, 页/頁, 数/數, 号/號, 学/學, 纸/紙, 记/記 and the reading-context spelling 唸/念. Approved Traditional text stays unchanged. The alignment script was restored byte-for-byte afterward.
- Final sentence/game silent tails were removed only after -45 dB silence detection, retaining 200 ms after audible decay. The character file was left intact. G02 suffix Whisper output had unusably short spans; waveform-based boundaries 0/350/970/1333 ms now cover 的/數/字. Full details in L392-timing-review.json and L392-audio-tail-review.json.
- Browser QA tooling fallback: existing asset-review UI at http://localhost:5192/tools/lesson-asset-review.html?unit=L392&ref=local loaded all five sentence cards and six auxiliary players at 390x844. Clicking S01 Play produced “This page crashed”. Listening/highlight synchronization, first-tap playback of all readers, microphone recording and stitched replay were not verified. Authority: docs/CURRICULUM_PRODUCTION_SOP.md, Browser automation fallback for pre-merge playback QA. Teacher subjective review remains post-merge.
- validate:production and assets:audit -- --strict passed against the temporarily projected L392 draft; production JSON was restored byte-for-byte. Shared-state final verify is Release-owned and skipped for this dependency-blocked package.
