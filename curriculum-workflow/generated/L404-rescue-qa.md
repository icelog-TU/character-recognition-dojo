# L404「弱」Package Rescue

Status: **dependency-blocked-asset-complete**.

- Source: `origin/codex/l404-complete-package` at `6a7a20d620219c7f9de9b53cb85d6e8f20125ea4`.
- Rescue branch: `codex/l404-package-rescue`.
- Latest main/SOP checked: `09ad28d766640bbbb1b2c1f8d3cb2ccb43efc306`, formal lessons through L398.
- L399–L403 remain dependencies. L405 is outside this rescue. R049/R050 belong after L405, before L406.

## Exact repairs

1. Filled all five sentence `durationMs` and `charTimings`, G02 prefix/suffix alignment, and all G05 option audio metadata. G05 correct option references the final S05 metadata.
2. Preserved the original G02 suffix「點」recording. Independent gpt-4o-transcribe recognized 點; Whisper also matched it after adding 500 ms leading/trailing silence to an analysis-only WAV and supplying the exact fragment as prompt. Subtracted the 500 ms analysis offset from returned timestamps. No analysis padding was added to the playback asset, and no unrelated transcription was substituted.
3. All nine sentence/fragment records matched exact approved Han text, using equivalent simplified/traditional normalization only. Raw responses and prompts are stored in the per-file `*-rescue-alignment.json` files.
4. Locally reviewed two 60 ms Whisper spans: S02 找 now starts at 972 ms, following the measured 688–972 ms pause; S03 游 starts at 1776 ms, following the measured 1456–1776 ms pause. Preserved their original end boundaries. S04 我 onset and G02 prefix 找 onset also use measured post-pause voice onsets. Final syllable ends use measured -40 dB final decay. These transparent approximate local reviews are recorded separately in `L404-rescue-timing-review.json`, not presented as raw Whisper output or human synchronization acceptance.
5. Standalone 弱 had about 452 ms final silence; only its terminal silence was shortened to about 173 ms. All retained AAC packets and timestamps match the source prefix. Nine other M4A files are retained unchanged; no new speech generation or syllable splicing.
6. Re-encoded S01–S03 WebP from source originals, without resizing, cropping or content edits. Final sizes: 215,610 / 234,942 / 235,034 bytes (quality 70/70/78). Side-by-side original/final visual comparison preserved cast, story action, composition, safe river path and readability. S04/S05 remain byte-identical. All five images are below 250,000 bytes. Exact hashes/sizes in `L404-rescue-image-evidence.json`.

## Audio and timing evidence

- Ten mono AAC/44100 Hz files decode successfully.
- Final detected silence: 173–232 ms. Mean volume: -19.0 to -15.9 dB; peaks -4.5 to -1.9 dB. G05 mean spread: 0.5 dB.
- All nine timing records: full Han count, sequential indexes, no overlaps, 80–900 ms spans, first start below 500 ms, final timing-to-file gap ≤300 ms; duration metadata matches FFprobe.
- Independent short-clip text review is AI evidence, not teacher listening. No teacher auditory PASS is claimed.
- Original `L404-duration-report.json` / `L404-tail-trim-report.json` remain historical Production processing evidence. Runtime metadata and rescue audio evidence are authoritative for final files.

## Browser QA, 2026-09-16

Chrome local fixture using actual package assets and owned draft; current-main/prerequisite lesson data and unlocked progress loaded only in memory. Frame sizes 390×844 phone and 820×844 tablet. No production JSON or app source edited. Stage 1–3 prerequisite completion is seeded; this is not a fresh full learner progression test.

- All 11 native media controls (10 distinct assets, including S05 again as G05 correct) reached `ended`; final counter `Completed 11/11 PASS`.
- Phone Stage 3: clicked each actual sentence card; observed active first-character highlights 就／勇／水／光／可. Each returned to idle before the next sentence was tested. Full frame-by-frame human auditory synchronization is not claimed.
- Phone G01 accepted 弱; next enabled.
- Phone G02 reached the hold cue, recorded a synthetic 440 Hz microphone stream via the app's real MediaRecorder path, completed prefix/recording/suffix replay and enabled next. No physical microphone permission or real human recording test.
- Phone G03 displayed three distinct options 強／亮／弱, accepted 弱. All three sentence rows fit their 277 px bounds without clipping.
- Phone G04 accepted 游／泳／就／算 in order.
- Phone G05: exercised all three animal playback controls, answer reveal, restart and correct selection; reward entry enabled. Native-media test independently verifies complete playback of each final option asset.
- Tablet G03 layout spot-check: three rows fit their 335 px bounds, no clipped Han. Full tablet interaction was not repeated.
- Browser startup initially timed out; reconnecting and recreating the QA tab succeeded. Some iframe semantic clicks timed out after dispatch; fresh accessibility targets resolved them. No lesson runtime error appeared in the sampled game console logs.
- Phone reward return-to-home navigation passed: clicked 回首頁休息 and observed 第 404 課完成 plus the home lesson list. The button occupied x=41, width=293 in the 375 px content viewport, with no clipping. The preview ends at L404 because L405 has no completed draft; no invented next-lesson package was used.

## Checks and handoff

- `tools:check`, `curriculum:audit-state`: PASS (expected unmerged asset-folder warning).
- Owned-draft production validator and strict asset-format audit: PASS, zero warnings.
- Rescue audit: PASS for approved text/game structure, coverage/allowed set, stage indexes, timing bounds, audio hashes/decoding/volume, original speech-packet preservation, request/packet/draft consistency and untouched shared release files.
- Total assets: 1,285,727 bytes, below 2.5 MB.
- Required production JSON validator, HEAD/pushed-ref strict intake and diff checks are recorded with the final pushed SHA in the handoff.
- `verify` skipped: dependency-blocked, shared state left for Release. This source checkout still contains its original production JSON through L390.

No SOP modification or Supervisor escalation is required. Release should integrate from the final rescue SHA after L399–L403 and rerun its intake. Teacher subjective audio/image review remains a separate step; the records above do not invent that approval.
