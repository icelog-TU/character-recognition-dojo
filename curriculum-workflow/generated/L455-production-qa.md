# L455 Production QA

- Package status: `dependency-blocked-asset-complete`.
- Source boundary: `5622c827569df36e09c1767d61f114b35973bbea`, formal lessons L001-L443, 447 learned characters.
- Locked vocabulary: 453 characters = formal 447 + provisional 舞、台、候、演、表 + current 現. Allowed-character sweep PASS.
- Coverage: 現 4、表 2、演 2、候 2、台 1、舞 1. All teacher thresholds PASS.
- Sentence mechanics: exact approved text, Han-only spokenText, functional display lines at no more than six visible characters, focus chars, canonical game order, target indexes, missing indexes and option order all PASS.

## Image QA

- S01 PASS — the previous generic performer is visibly leaving, the teacher cues the next turn, and cast-locked Xiaoyue steps onto the stage with long softly curled deep-chestnut hair, crescent clip and lavender/teal identity.
- S02 PASS — the cast-locked protagonist pauses in mild confusion while distinct generic classmates continue one synchronized dance step; there is no fall, injury or ridicule.
- S03 PASS — the cast-locked protagonist gently lifts a leaf that remains attached to the plant and clearly discovers a caterpillar on its underside.
- S04 PASS — the present-day protagonist swims safely with an adult instructor nearby, while a small memory bubble shows the same girl younger and afraid of water beside her mother.
- S05 PASS after teacher repair — the fantasy scene is unmistakably contained in a handheld game screen; a fully visible friendly monster emerges from a warmly lit cave toward a generic armored game avatar, and the protagonist girl does not appear.
- Overall L058 style lock PASS; recurring-cast lock PASS; all five files are square 1024 px WebP, each below 400 KiB, with no readable text, numbers, labels, brands or watermark.

## Audio and timing QA

- Ten referenced AAC mono 44.1 kHz M4A files decode successfully: standalone char, five sentences, G02 prefix/suffix and two G05 wrong-choice tracks.
- Independent ASR matches all nine timed tracks after Traditional Chinese normalization. The S02 sentence and both G05 wrong choices preserve their full approved wording.
- Three prompted isolated-syllable transcription trials return `現`; the standalone pitch diagnostic falls from about 320 Hz to about 142 Hz, consistent with the requested isolated fourth tone.
- G02 prefix transcribes as `小時候怕水` in three trials. G02 suffix was generated independently from exact input `在會游泳了`; three unprompted trials render the homophone `再會游泳了`, while prompted alignment resolves the required first syllable as 在. The initial syllable and final 了 are complete, and the fragment does not contain 現.
- Nine tracks have complete charTimings, 80-900 ms spans, no overlap, and no terminal tail over 300 ms. G05 mean-volume spread is 1.0 dB.

## Browser QA

- Local isolated renderer used the real `LessonPanel` at a 390 px lesson viewport.
- Stage 1: standalone `char-u73fe.m4a` emitted `playing` then `ended`; progress advanced.
- Stage 2: exactly three 現 target cards and learned-character distractors appeared; all three target taps emitted complete audio events and passed the stage.
- Stage 3: S01-S05 were each opened and played; every file emitted `playing` then `ended`, and the stage passed.
- G01: S01 index 0 現 selected successfully.
- G02: prefix playback stopped on the red-framed 現 at S04 index 5. The real hold/microphone recognition gesture is device-human interaction; structural stop position, exact independently generated fragments, playback and timings were verified here.
- G03: S03 index 2 accepted 現 from three distinct single-character cards.
- G04: 了、怪、物 completed S05 indexes 5-7 in the required order.
- G05: all three shuffled animal audio buttons were played. Media events mapped the correct full S02 track to 小狐狸; selecting 小狐狸 passed.

## Release dependency state

L450-L454 must enter main in playable order before L455 can be integrated. R055/R056 are the milestone after L450, cover L421-L450, and are excluded from this package. These dependencies do not affect asset completeness.

## Teacher asset review repair

- Review ref `f7f1ab72bf6dff126ec93e4376a2ad967ed5a663` marked only `L455-S05:image` for repair: present the fictional monster as a game image and remove the protagonist girl.
- S05 was regenerated as a close handheld-console view. The game screen contains the cave, friendly monster and generic armored avatar; no protagonist girl appears. The other four images and all audio files were left unchanged.
- 2026-09-18: Teacher reviewed the repaired `L455-S05:image` at immutable ref `543a8a9e63d703860c4ecb20de934ea223cddb2e` and explicitly reported PASS. The cloud review-status command had no document for this new ref, so this package record captures the teacher's direct approval.
