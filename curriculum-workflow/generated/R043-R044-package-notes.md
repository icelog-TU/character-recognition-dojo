# R043 / R044 Package Rescue

Status: **dependency-blocked-asset-complete** for both units.
Branch: `codex/r043-r044-package-rescue`.
Pinned original package: `02a35b9b4d102d62238718d0379a4b8e32462b03`.
Base main: `496aa87af167b0760bcee8f9ca959d6cc657edfd`, formal through L359.
Required L360 rescue: `5757947265c66cfe200658143d1119bd06d0dcae` (`origin/codex/l360-package-rescue`).

Release order: **L360, then R043/R044, then L361**. This branch contains only the review pair and its registry/QA records; it does not insert lessons into shared production curriculum, planner or ledger.

## Repairs

- All 18 final clips retain the original speech AAC packets and timestamps. Only post-speech tails were removed; no speech regeneration or internal splicing.
- R043-S01 特 is now 1327–1720 ms, based on the measured post-pause onset and stable next-syllable boundary. The preceding 落 ends at the measured 990 ms decay boundary.
- R043-S03 請 is now 1209–1560 ms, based on a padded Whisper recheck and acoustic onset. No overlap remains. The original sentence ends at 2873 ms; its long silence and isolated late transient were removed after a 160 ms margin, yielding a 3042 ms file.
- R043-G02 suffix 明 includes its measured audible decay through 1357 ms.
- Every sentence and G02/G05 clip has final duration and Han-index timing metadata. G02 nested metadata, G05 option metadata and review `stage4AudioAlignment` agree.
- Actual final trailing silence is 160–180 ms across the pair. Every final timing span is 80–900 ms and duration minus final highlight endpoint is at most 300 ms.
- Approved sentence text, spokenText, displayLines, focusChar, imageNotes, all ten WebP images and game design are unchanged from the pinned original.

## QA evidence

- Exact Han transcripts on all 18 final clips after explicit traditional/simplified character normalization; no homophone substitutions.
- FFmpeg decode 18/18, mono AAC 44100 Hz; strict image/audio format and G05 volume-spread audit: PASS, zero warnings.
- Pair coverage: 30/30 introduced characters from L331–L360; allowed-character ceiling remains L360.
- Repository curriculum and production validators run against draft data in memory: PASS. Old normal-lesson advisory warnings are unrelated to this pair.
- All 20 browser controls / 18 unique audio files played to ended in Codex in-app Chromium via the existing review page served locally. This is automated media playback evidence, not a teacher subjective listening approval or a physical-phone microphone/stitched-recording assessment.
- Previous original-package browser crash is superseded for focused media playback by this successful local test. Current SOP leaves teacher subjective image/audio review in the ordinary post-merge queue; no pre-merge cloud sync or approval is requested.
- Full per-clip original/final measurements, raw transcripts, padded rechecks, final timings and SHA-256 hashes: `R043-rescue-audio-qa.json` and `R044-rescue-audio-qa.json`.
- Existing image style/cast approvals are retained; images were not regenerated in rescue.

## Reproducible checks

```text
npm run tools:check
npm run validate:production
node curriculum-workflow/generated/R043-R044-package-check.cjs curriculum
node curriculum-workflow/generated/R043-R044-package-check.cjs production
node curriculum-workflow/generated/R043-R044-package-check.cjs formats
node curriculum-workflow/generated/R043-R044-package-check.cjs technical
node curriculum-workflow/generated/R043-R044-intake.cjs HEAD
git diff --check
```

The curriculum adapter defaults to the exact L360 rescue SHA above. It inserts that lesson only in memory. `technical` refreshes the owned technical-report JSON. The ref intake is read-only and accepts a branch, tree or commit SHA. It checks status, request/packet/draft agreement, references, 5 WebP / 9 M4A per review, timing bounds/spans/tails and Stage 4 design. The review intake is adapted from the concurrently added Production checker at `4bb6dd30` to use individual registry rows, dependency-blocked status and full parsed draft equality; no media from that alternate package was mixed into this rescue.

The shared `curriculum:package-intake` command currently accepts only L###; it rejects R### at argument parsing, so no generic intake PASS is claimed for reviews. Full main integration and `npm run verify` remain Release-owned.
