# L461 Production QA

- Package status: `dependency-blocked-asset-complete`.
- Source boundary: `80431be079de2085bbab084db7da0a3698461a92`, formal lessons L001-L446, 450 learned characters.
- Locked vocabulary: 456 characters = formal 450 + provisional 突、實、其、中、午 + current 文. Allowed-character sweep PASS.
- Coverage: 文 3、午 2、中 2、其 2、實 1、突 1. All teacher thresholds PASS.
- Sentence mechanics: exact approved text, Han-only spokenText, functional display lines at no more than six visible characters, focus chars, canonical game order, target indexes, missing indexes and option order all PASS.

## Image QA

- S01 PASS — recurring father accompanies the recurring protagonist into a clearly stocked stationery shop in bright midday light; the child is not alone and no sign or price is readable.
- S02 PASS — the recurring protagonist points to one selected composition among more than eight separately mounted works while recurring father follows her gesture. Paper marks remain distant and unreadable.
- S03 PASS — the recurring protagonist presents a visibly untouched, complete lunch while recurring mother listens calmly without punishment, illness or dieting cues.
- S04 PASS — the airborne hat, leaves and clothing all establish one sudden gust on a safe park path; recurring father remains close and the hat is clearly visible.
- S05 PASS — the open two-page wordless picture book is large and fully visible, richly illustrated across both pages, and contains no text, page numbers or simulated writing.
- Overall L058 style lock PASS; recurring-family cast lock PASS; all five files are square 1024 px WebP, each below 400 KiB, with no readable text, numbers, labels, brands or watermark.

## Audio and timing QA

- Ten referenced AAC mono 44.1 kHz M4A files decode successfully: standalone char, five sentences, G02 prefix/suffix and two G05 wrong-choice tracks.
- Independent ASR matches all nine timed tracks after Traditional Chinese and pronunciation-equivalent normalization. The five full sentences and both G05 wrong choices preserve their approved wording.
- Three prompted isolated-syllable transcription trials return `文`; the standalone pitch diagnostic rises from about 158 Hz to about 198 Hz, with a 143-203 Hz contour, consistent with the requested isolated second tone.
- G02 prefix was generated independently from exact input `爸爸你看我的作`; three unprompted ASR trials render the final homophone as `座`, while word timing alignment resolves the required ㄗㄨㄛˋ syllable to 作. G02 suffix transcribes exactly as `也在其中` in three trials. Neither fragment contains 文.
- Nine tracks have complete charTimings, 80-900 ms spans, no overlap, and no terminal tail over 300 ms. G05 mean-volume spread is 0.0 dB after normalization.

## Browser QA

- Local isolated renderer used the real `LessonPanel` at a 390 px lesson viewport.
- Stage 1: standalone `char-u6587.m4a` emitted `playing` then `ended`; progress advanced.
- Stage 2: exactly three 文 target cards and three learned-character distractors appeared; all three target taps emitted complete audio events and passed the stage.
- Stage 3: S01-S05 were each opened and played; every file emitted `playing` then `ended`, and the stage passed.
- G01: S01 index 7 文 selected successfully.
- G02: prefix playback stopped on the red-framed 文 at S02 index 7. The real hold/microphone recognition gesture is device-human interaction; structural stop position, exact independently generated fragments, playback and timings were verified here.
- G03: S05 index 9 accepted 文 from three distinct single-character cards.
- G04: 把、帽、子、吹 completed S04 indexes 5-8 in the required order.
- G05: all three shuffled animal audio buttons were played. Media events mapped the correct full S03 track to 小狐狸; selecting 小狐狸 passed.

## Release dependency state

L456-L460 must enter main in playable order before L461 can be integrated. R055/R056 are the milestone after L450, cover L421-L450, and are excluded from this package. These dependencies do not affect asset completeness.
