# L421 Production QA

packageStatus: dependency-blocked-asset-complete

## Boundary and release dependencies

Built from 182ace5f; final fetch e0fec697 still has formal L001-L414, latest 決. Locked vocabulary is 424 characters: formal 418 plus 果、如、結、合、教、室. Text and all options exclude 解、班、內、浴、臥、實、驗. Vocabulary dependencies are L416-L420; Release must preserve contiguous order including L415, then L420 -> R051 -> R052 -> L421. R051/R052 cover L391-L420 at afterLessonOrder 420 and are not part of this package. Shared production JSON, planner export and ledger remain Release-owned and unchanged.

## Final image inspection

Built-in image_gen generated five separate square scenes. Actual final exported 1024x1024 WebPs were opened individually and in side-by-side sheets with all five L058 anchors, refined L115-S01/S02, L118-S02, L119-S01, L128-S03 and family L154-S01, L162-S04, L163-S02.

- S01 style-lock PASS, cast PASS: teacher in teal with tied hair, distinct from mother; fixed girl supplies books while distinct generic classmate shelves them in the same reading corner.
- S02 style-lock PASS, cast PASS: recurring mother demonstrates a ribbon knot while girl follows with her own separate ribbon; ongoing lesson at craft table.
- S03 style-lock PASS, cast PASS: fixed girl still seated indoors with open book; mother suggests garden play, not an already completed trip.
- S04 style-lock PASS, cast PASS: fixed girl with art bag remains at wrong office door; distinct older staff member points to separate art studio visible through opposite doorway.
- S05 style-lock PASS, cast PASS: fixed father in driver seat, girl safely seated in rear; stationary car in underground bay with ceiling beams and uphill ramp.

No image draft was rejected. No readable text/numeral exceptions. Image bytes: 188110, 153306, 196794, 159344, 177498. Total shipping folder: 1,280,034 bytes for 5 WebPs and 9 M4As, below 2.0 MB target. Prompt set is stored with each approved sentence in request/packet/draft. Built-in image generation only; no CLI image fallback.

## Audio and pronunciation

Standard repo OpenAI TTS path, gpt-4o-mini-tts voice coral, exact approved full-sentence inputs. Standalone 室 generated from only 室. G02 is exactly 爸爸把車停在地下, with no suffix. Both G05 wrong options generated as independent whole sentences. No splicing or extraction of production syllables.

First character take was abnormally quiet and was replaced by full regeneration. Initial S03 had long pauses and was replaced by full regeneration. Rejected audio takes are not shipping files. Standard assets:audio normalization produces AAC, mono, 44100 Hz M4A. Only terminal silence was removed, preserving a 200ms acoustic buffer; G02 uses -40dB terminal detection to exclude a faint noise tail. All nine final files decode and meet measured loudness/format limits; G05 options meet the 3dB relative-volume gate.

Pronunciation evidence is acoustic analysis plus transcription, not human listening: S01 教我們 voiced plateau around 275Hz before the following 我 descent; S01 教室 shows a clear fall around 3400-3650ms; S02 教我 has a roughly 250Hz plateau before the following 我 descent. The requested first/first/fourth contrasts are supported by the actual final signal. Sentence zhuyinOverrides explicitly set S01 index2 ㄐㄧㄠ, index9 ㄐㄧㄠˋ, and S02 index2 ㄐㄧㄠ. Standalone 室 shows falling F0 and independent unprompted transcription 是 (same ㄕˋ syllable), recorded honestly as phonetic support rather than an exact orthographic match. The source input remains only 室. Pitch JSON and character transcription evidence are retained.

The audio-chat model returned empty or cannot-access-audio replies; a legacy preview model returned HTTP404. Those replies are diagnostic tool limitations and provide no listening verification. No claim of human or teacher listening approval is made. Teacher subjective image/audio review remains post-merge.

## Alignment and technical validation

Eight spoken tracks aligned through assets:align:ai: five sentences, one G02 prefix, two G05 wrong options. Correct G05 reuses final S03 timings. Whisper sometimes selected simplified 结 or homophone 盒; only equivalent 结 -> 結 normalization was added. Exact approved-text context disambiguated orthography; no homophone normalization or transcript mismatch bypass was introduced. Raw final transcription/timestamp evidence is stored in L421-alignment/.

After AI alignment, two final-syllable ends were manually extended to measured acoustic-tail boundaries: S03 玩 4020 -> 4158ms; G05 wrong-one 玩 3840 -> 3982ms. This preserves final syllables and leaves 200ms terminal silence. All final spans are 80-900ms, monotonic and nonoverlapping, with matching Han counts and <=300ms tails. Corrections are recorded in L421-timing-corrections.json.

PASS: tools:check, ai:check, curriculum:audit-state, exact approved texts and displayLines, 424-character sweep, Stage 4 indexes/options, coverage 室4 教3 合2 結2 如1 果1, eight timing tracks, isolated validate:production, strict assets:audit (5 image references, 9 audio references, zero warnings). The audit-state warning that L421 assets are outside formal production is expected for this lesson-local package. Full verify skipped: dependency-blocked package; shared state left for Release.

## Browser QA and tooling boundary

Real LessonPanel rendered in an isolated local Vite fixture at 390x844. No cloud progress writes or production app edits. Stage1 室 starts on first tap and reaches completed state. S01-S05 each start and return to idle; screenshot confirms readable sentence lines, correct 教 annotation and active highlighting. G01 correct 室 accepted, G03 exactly 室/紙/筆 with 室 accepted, G04 four single-character cards 怎/麼/打/結 accepted in order. G02 prefix playback reaches final 室 and requests held recording. Individual Stage4 rounds were tested in fixtures; this is not a claim of full sequential reward-flow testing.

Browser control initially timed out; AX interactions recovered. Playwright click sometimes hit a CDP timeout while AX clicks worked. The supported control APIs have click but no sustained pointer hold, so physical microphone recording and stitched replay were not exercised. Use the documented browser-tooling fallback after the passing technical gates; no fake recording or teacher pre-merge approval requirement was substituted. G02 final prefix text/path/timings and absent suffix were mechanically verified.

G05 native media events explicitly recorded playing and ended for L421-S03.m4a, L421-G05-wrong-one.m4a and L421-G05-wrong-two.m4a; no audio error event. Correct reader selection was accepted. Stage2 displayed six cards with exactly three 室 targets and three distractors; all three targets accepted, counts 1/3 -> 2/3 -> 3/3, then stage complete. Browser viewport restored, QA tab closed and local server stopped after testing.

## Shared script changes

generate-audio-drafts.mjs now passes per-sentence zhuyinOverrides to TTS instructions. align-audio-timings-ai.mjs adds the exact simplified equivalent 结 -> 結 and optional text-context/evidence-dir flags. Standard generation, normalization, alignment and validators were exercised using these scripts; node syntax checks also passed. No prior L415 script changes were copied wholesale.

## Release review entry

After Release merges and deploys: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L421&ref=main

Index after deployment: https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main

Status command after deployment: npm run asset:review-status -- --unit L421 --ref main
