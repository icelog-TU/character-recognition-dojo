# L394「翻」Package Rescue handoff

Status: **dependency-blocked-asset-complete**.

- Source branch: `origin/codex/l394-complete-package`.
- Source SHA: `ee191ff2650f0c05c4d02a0708c0362765c856f1`.
- Rescue branch: `codex/l394-package-rescue`.
- SOP/main authority checked: `2be6834d0e35978cc417da5721dbd891e8974948`, formal lessons through L389.
- Release dependencies: L390, R047/R048, L391–L393. No main integration, deployment, shared tool change, or new lesson production.

## Repairs

1. G02 suffix `了水報紙都濕了` regenerated independently with exact Chinese input using gpt-4o-mini-tts, nova, speed 0.9. Pronunciation guidance was supplied only in instructions. Accepted take obtained exact gpt-4o-transcribe text and independent gpt-audio-1.5 listening text before silence trimming; final Whisper alignment matches all seven Han. No homophone substitution, preceding 翻 insertion, or sentence splicing.
2. S05 and G05 wrong-two regenerated as full exact sentences after independent AI listening raised first-tone concerns in the source candidates. Final S05 uses alloy/0.9; wrong-two uses nova/0.9. Independent transcript matches both. Focused AI listening reports both S05 數 occurrences as third tone; wrong-two listening reports third tone. The original wrong-one has a separate AI observation explicitly reporting both occurrences as third tone, and exact final Whisper alignment.
3. All five sentence durations/timings and G02 prefix/suffix/G05 option metadata are populated and synchronized. G05 correct option references final S05 metadata.
4. S02's 920 ms 有 span included the measured 1566–2016 ms silence. Its start is now 2016 ms. Adjacent 一/頁 boundaries were locally reviewed as approximate 1160–1400 / 1400–1566 ms, preserving the phrase extent and measured decay. This is transparent local timing review, not a fabricated Whisper output or a claim of human synchronization acceptance.
5. Removed the phrase pause from wrong-one 池's highlight. Reviewed final syllable ends against measured final speech decay, including the wrong-one Whisper estimate beyond EOF. See `L394-rescue-timing-review.json` for exact before/after values.
6. Only trailing silence was shortened in standalone 翻 and wrong-one. Other source sentence audio S01–S04 and G02 prefix were retained. All retained source audio packets match the original package prefix. Three regenerated files also have packet-preservation evidence tying accepted processed audio to final trimmed files.

## Audio evidence and limits

`L394-rescue-listening-evidence.json` preserves all model responses, including rejected generations and uncertain or inconsistent responses. Match hashes before interpreting a row. AI listening is not teacher listening.

- The first rescue suffix take was also misrecognized and replaced. The accepted nova take received exact text before trimming; a later listener response on the trimmed file used 樂 and uncertain confidence. Exact independent transcription, exact final Whisper alignment, and unchanged speech packet hashes are the technical acceptance basis; no word correction was silently applied to raw results.
- S05's accepted take initially received a third-tone observation with uncertain confidence; a focused follow-up explicitly examining both occurrences reported third/third with high confidence. Both responses are retained. Earlier rejected nova S05 is also recorded.
- `L394-rescue-speech-preservation.json` maps generated MP3, accepted pre-trim M4A and final M4A hashes. Only terminal packets were removed; retained AAC packet payloads and timestamps are identical. G05 wrong-two needed no tail trim.
- `L394-rescue-audio-evidence.json`: ten decodable mono AAC/44100 Hz files; final tails 163–279 ms, mean levels -19.7 to -17.7 dB, peaks -4.5 to -2 dB. G05 mean spread 2.0 dB. The `before` values are the first rescue inspection, not necessarily the original Production file.
- Source `L394-duration-report.json` and `L394-tail-trim-report.json` are historical Production processing evidence. Final runtime durations are in the draft and rescue evidence. `L394-rescue-processing.json` describes generated files before tail trimming.

## Browser QA

Chrome local fixture, 390×844 and 820×844 iframe dimensions; no physical phone/tablet or human auditory acceptance claimed. Preceding/following lesson data and unlocked progress are supplied in memory only. Stage 3 completion prerequisites are seeded; the tests validate actual media controls/highlights, not a fresh full learner progression from Stage 1.

- All 11 native audio controls (10 distinct files, S05 repeated as correct G05) reached `ended`; final counter `Completed 11/11 PASS`.
- Phone Stage 3: clicked all five actual picture/sentence buttons. Observed first-character active highlights 翻/報/打/太/數; S05 displays third-tone overrides. Playback returned idle. This checks runtime highlighting, not a human frame-by-frame synchronization judgment.
- Phone G01: correct 翻 accepted, next enabled.
- Phone G02: reached hold-to-record cue, recorded a synthetic 440 Hz microphone stream through the app's real MediaRecorder path, completed replay and enabled next. No real microphone permission or physical recording test was performed.
- Phone G03: three options 爬/跑/翻; selecting 翻 accepted. All three sentence rows stay within their card boundaries (277 px row width), no clipped Han.
- Phone G04: single-Han 家/的/號/碼 selection sequence accepted.
- Phone G05: exercised the three animal playback buttons, answer reveal, restart, correct selection and reward. Native-control playback separately establishes each final file reaches EOF.
- Phone reward: next-lesson button at y≈471–531 within 844 px frame, actually clicked and reached L395「印」. This is fixture navigation only, not release integration.
- Tablet: G03 layout spot-check, three rows within 335 px row bounds, no overflow. Full tablet interaction was not repeated.
- Occasional iframe locator timeouts were resolved using fresh accessibility-tree targets. Some waits have a tool-imposed 3-second limit. Console sample included extension/message-channel errors; no lesson-media load failure was observed. Stage 3 console sample was empty.

## Images and approved content

All five final WebPs are byte-for-byte preserved from source, as are approved sentences, image instructions, line breaks, target/game structures and zhuyin readings. Production's image acceptance remains attached to source SHA: S01 complete page number `8`; S02 fictional `00-0000-0000`; S05 exactly three fish. These approved image-text exceptions remain in request/draft. No new image-generation claim.

## Validation

- `tools:check`: PASS.
- `curriculum:audit-state`: PASS, with expected unmerged L394 folder warning.
- Owned-draft production validator and strict asset format audit: PASS, five images/ten audio files, no format warning.
- Rescue audit: PASS, approved content preserved, coverage/allowed set, G02/G05 references, all nine timing records 80–900 ms/no overlap/full Han coverage, decoded duration equality, final tails ≤300 ms, volume, hashes, request/packet/draft parity, shared release files unchanged.
- Total owned assets: 1,278,985 bytes.
- Required HEAD and pushed-ref strict intake are recorded at final commit handoff after the consistent metadata is committed.
- `verify` skipped: dependency-blocked, shared state left for Release.

Teacher subjective review remains post-merge under SOP. L390's separately pending teacher tone review is unchanged. No SOP modification or Supervisor escalation is currently required for this L394 rescue.
