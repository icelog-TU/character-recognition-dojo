# L450 Production QA

- Package status: `dependency-blocked-asset-complete`.
- Source boundary: `a5779c4bae03fa363689cc7ee4d6555b7dadeafb`, formal lessons L001-L438, 442 learned characters.
- Locked vocabulary: 448 characters = formal 442 + provisional 樂、音、拍、歌、唱 + current 舞. Allowed-character sweep PASS.
- Coverage: 舞 5、唱 2、歌 2、拍 2、音 1、樂 1. All teacher thresholds PASS.
- Sentence mechanics: exact approved text, Han-only spokenText, functional display lines at no more than six visible characters, focus chars, canonical game order, target indexes, missing indexes and option order all PASS.

## Image QA

- S01 PASS — Xiaoyue keeps long softly curled deep-chestnut hair, crescent clip and purple/teal identity; singing mouth and full dance pose are both visible.
- S02 PASS — recurring protagonist and mother remain distinct from generic families; the event staff has just started the audio and the families are dancing.
- S03 PASS — recurring protagonist sings while tapping one palm with the other hand; the image does not read as applause after a performance.
- S04 PASS — recurring father records the recurring protagonist's full dance pose with a horizontal phone; no phone UI or brand is visible.
- S05 PASS after edit — recurring mother presents a completed child-size dance dress; sewing context is clear and the measuring tape with tiny marks was removed.
- Overall L058 style lock PASS; recurring-cast lock PASS; all five files are square 1024 px WebP, each below 400 KiB, with no readable text, numbers, labels, brands or watermark.

## Audio and timing QA

- Ten referenced AAC mono 44.1 kHz M4A files decode successfully: standalone char, five sentences, G02 prefix/suffix and two G05 wrong-choice tracks.
- Independent ASR matches all nine timed tracks after Traditional Chinese normalization. The final S02 take and all three G05 choices preserve `音樂` as ㄧㄣ ㄩㄝˋ.
- Three prompted isolated-syllable transcription trials return `舞`; the standalone pitch diagnostic falls from about 200 Hz to about 137 Hz and rises to about 182 Hz, consistent with the requested isolated third tone.
- G02 prefix transcribes as `爸爸幫我拍下跳` in three trials and keeps final 跳 complete. G02 suffix transcribes as `的樣子` in three trials and begins directly with 的.
- Nine tracks have complete charTimings, 80-900 ms spans, no overlap, and no terminal tail over 300 ms. G05 mean-volume spread is 0.1 dB.

## Browser QA

- Local isolated renderer used the real `LessonPanel` at a 390 px lesson viewport.
- Stage 1: standalone `char-u821e.m4a` emitted `playing` then `ended`; progress advanced.
- Stage 2: exactly three 舞 target cards and three learned-character distractors appeared; all three target taps emitted complete audio events and passed the stage.
- Stage 3: S01-S05 were each opened and played; every file emitted `playing` then `ended`, and the stage passed.
- G01: S05 index 8 舞 selected successfully.
- G02: prefix playback stopped on the red-framed 舞 at S04 index 7. The real hold/microphone recognition gesture is device-human interaction; structural stop position, exact independently generated fragments, playback and timings were verified here.
- G03: S01 index 9 accepted 舞 from three distinct single-character cards.
- G04: 手、打、拍、子 completed S03 indexes 6-9 in the required order.
- G05: all three shuffled animal audio buttons were played. Media events mapped the correct full S02 track to 小熊; selecting 小熊 passed.

## Release dependency state

L439-L449 must enter main in playable order before L450 can be integrated. R055/R056 are the follow-up milestone after L450, cover L421-L450, and are excluded from this package. These dependencies do not affect asset completeness.

## Teacher asset review

- 2026-09-17: Teacher reviewed all L450 image and audio assets from immutable package ref `ea57c031570a1ef33c23f3897b1a459c3c7da93e` and reported no issues. Image review PASS; audio review PASS; no repair items.
