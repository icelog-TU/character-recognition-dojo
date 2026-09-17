# L428「自」Production C QA

Package status: dependency-blocked-asset-complete.

Teacher-approved source vocabulary is locked to main 4eec51781af66eee3b0a9b0b5afe0e0497a8d121: L001–L415, 419 learned characters, plus provisional 組、隊、各、輪、員 and new 自 (425 expanded allowedChars). Five sentence texts, spokenText, displayLines, focusChar, options and indexes remain exactly as approved. Coverage 自3、員2、輪2、各2、隊1、組1; allowed-character and mechanical audits PASS.

Latest Release observation: origin/main 55ea24c112541b8739c5affc6c6564de94e75185 contains L418「結」. Remaining ordinary lessons L419–L427 must integrate in order, including the explicit vocabulary dependencies L423–L427. R051/R052 afterLessonOrder=420, coverage L391–L420, must also merge first. This package excludes that review pair. The locked request vocabulary does not expand merely because main advanced.

## Final images

Each final exported 1024×1024 WebP was inspected individually and beside the full L058 style set, refined references L115-S01/S02, L118-S02, L119-S01, L128-S03, and family references L154-S01, L162-S04, L163-S02. L058 supplies style only. All are under 250 KiB and contain no readable text or numbers.

- S01 style-lock PASS; cast PASS. Girl and two distinct generic teammates each carry their own water and snack; matching green team bibs.
- S02 style-lock PASS; cast PASS. Mother and girl approach as customers; sensor and sliding opening visible; neither touches the door. Initial extra-arm composition was discarded and regenerated.
- S03 style-lock PASS; cast PASS. Girl sweeps while classmates do other cleaning tasks; another group's sweeper is visible. Background generic boy was changed to curly hair, glasses and mustard clothing to avoid impersonating the fixed striped-shirt brother.
- S04 style-lock PASS; cast PASS. Fixed mother alone learns cookie preparation from a picture cookbook, without a teacher or child.
- S05 style-lock PASS; cast PASS. Fixed father hands a key to mother beside a stationary car at a rest area; driver seat is empty during the exchange.

Rejected image drafts are outside the committed package. See L428-image-provenance.json for final generation identifiers.

## Audio and alignment

Ten final files: independent 自 character audio, five complete sentence recordings, independent G02 prefix 客人一走近門就 and suffix 動打開, and two complete G05 wrong sentences. Standard repo OpenAI generation and processing ran through a lesson-local adapter; shared audio scripts and production JSON were unchanged. No sentence extraction or speech splicing. Only terminal silence was trimmed, retaining 200 ms.

All ten files decode successfully; mono AAC at 44100 Hz; loudness gates PASS. Character duration 1555 ms, mean -20.4 dB, max -2 dB. G05 mean-volume spread 0.4 dB. Nine timed tracks have complete Han-only charTimings, 80–900 ms spans and final tail at most 300 ms. AI alignment was refined using documented silence boundaries for S02 就, S05 輪, S04 心 and G02 prefix 就; exact adjustments are in L428-timing-corrections.json. Final ffprobe, volume, text and timing evidence is in L428-package-audit.json.

Pronunciation evidence is limited to automated analysis and is not a human listening PASS. Final independent Whisper character transcription is 字 (same ㄗˋ); a separate gpt-4o-transcribe pass returned 四, and its raw-MP3 pass returned す。 The measured vowel pitch falls, supporting fourth tone but not independently establishing the consonant. For the short suffix, unprompted Whisper returned 洞打開 (phonetic equivalent); gpt-4o-transcribe returned 動大開 on the final M4A and 洞打開 on its source MP3. These model disagreements are preserved rather than described as consensus. S02 近/進 is also an orthographic ambiguity. Alignment text context was supplied only for S02, G02 prefix and suffix; raw transcripts and the context marker remain available. Teacher subjective pronunciation review remains in the normal post-merge review queue; no teacher audio approval is asserted.

## Browser QA and tooling limits

Real LessonPanel rendered using an isolated local draft fixture in Chrome at 390×844, with no production JSON or cloud-state writes. Observed media playing and ended events are playback completion evidence, not a claim of hearing the sound.

- Stage 1: 自/ㄗˋ displayed, character audio played to completion, stage passed.
- Stage 2: all three 自 cards found, counter reached 3/3 and stage passed.
- Stage 3: all five sentence files played to ended, sentence pictures and approved lines displayed, active-character highlight observed, stage passed.
- G01: index 3 自 selected; accepted and reward control appeared.
- G02: dedicated prefix played to ended; target 自 then received red frame and hold-to-record instruction.
- G03: 自 selected among 他、自、我; accepted.
- G04: shuffled cards 掃、地、流、輪 selected in 輪流掃地 order; all four positions accepted.
- G05: all three animal options played to ended. In this session frog=wrong-two, fox=correct S05, bear=wrong-one. Selecting fox was accepted. Reward completed with visible home control and disabled no-next-lesson control, appropriate to the fixture's hasNext=false.

The browser control API provides clicks but no sustained pointer-down/up operation for this recording control. Physical microphone capture, recording bell, and prefix/child/suffix stitched replay were not exercised. Stage 4 used single-game fixtures, so this is not an uninterrupted five-round end-to-end run or a next-lesson routing check. Technical assets, decode, alignment and lesson-local validators passed; use the browser-tooling fallback documented in docs/CURRICULUM_PRODUCTION_SOP.md. No manual/teacher PASS is claimed. The temporary viewport was reset, test tab closed and own local server stopped.

## Validation and integration ownership

tools:check PASS; ai:check PASS; lesson-local audio format and production validators PASS; L428-package-audit PASS; validate:production PASS; curriculum:audit-state PASS (expected unintegrated L428 asset-directory warning). Total final media 1,339,788 bytes, approximately 1.28 MiB.

verify skipped: dependency-blocked, shared state left for Release. Production JSON, planner export and ledger integration belong to Release; this package changes only the L428 package and registry. The final pushed-ref intake result is recorded in the delivery evidence after push. No required asset or timing file is missing. Remaining work is Release dependencies and the explicitly limited microphone/manual playback scope above.

Pushed asset commit: 2d979af592cbab55365f4bcfc33010bebd80de74. Package intake on origin/codex/l428-complete-package: PASS; 5 images, 10 audio files, canonical Stage 4, no blocking package-status defects. Final evidence-only tip is rechecked after push.
