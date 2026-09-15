# L364 Production D package notes

Status: asset-complete-package. Registry: dependency-blocked-asset-complete.

## Scope and dependencies

Approved five sentences and canonical games are unchanged. Claimed from 44fedeffd9055ac64799b69f6f20145f9b51ff41; latest origin/main checked 3c9beb7ad4b16cd264d62338829815d17e8a9387, formal through L362. Learner dependencies stay L361/L362/L363; current remaining Release blocker: L363. No production JSON, planner or ledger changes.

## Images

- L364-S01: style-lock PASS, cast PASS, semantics PASS. Protagonist girl drawing a clearly visible silly smile; pink cardigan, bob and clip match family anchors.
- L364-S02: style-lock PASS, cast PASS, semantics PASS. Protagonist girl, visually distinct generic pigtail child, and teal-clad recurring teacher; gentle social scene.
- L364-S03: style-lock PASS, cast PASS, semantics PASS. Protagonist girl surprised and smiling as friendly puppy emerges from the box; no threatening expression.
- L364-S04: style-lock PASS, cast PASS, semantics PASS. Fixed sporty boy: spiky dark hair, orange shirt, navy shorts, red sneakers and green wristband; loud crying with teacher comfort.
- L364-S05: style-lock PASS, cast PASS, semantics PASS. Recurring father in blue shirt and protagonist girl laughing together; family anchors and natural joke-telling gesture.

Full L058 set used only for style; refined examples and cast anchors are recorded in draft.productionQa.imageReferences. Each final WebP was visually inspected. All five first image generations accepted; zero rejected images committed. Original generated PNGs retained outside public assets. Raw audio inbox remains local under the repository ignore rule. Final images/audio total 1087784 bytes.

## Audio and timings

All nine referenced files decode and satisfy AAC/44100Hz/mono, duration, volume, timing-count and timing-bound checks. Dedicated char input was exactly 笑; one targeted regeneration resolved inconsistent short-clip transcription. Final independent gpt-4o-transcribe result is 笑 with no text prompt, SHA256 602c513810ddd407acab3b054d1fd37e36dccbe7cc89d938b3bce1acf8720b5a. This is technical evidence rather than human listening.

G02 prefix generated directly from 我不喜歡被人; no suffix because 笑 is sentence-final. Both wrong choices generated from exact whole sentences. Initial G05 spread 9.6dB corrected by reusing repository safety gain/limiter; final spread 2.1dB. Re-ran AI alignment against final audio. Character durations 80–900ms, no overlaps. Tail removal used AAC packet copy after speech plus decay; last timing endpoint reconciled with acoustic endpoint. Final tails 167–218ms. See volume and tail JSON reports. No cut-and-paste sentence or character construction.

## Browser QA tooling fallback

The same Codex in-app browser surface crashed to This page crashed on first playback in the preceding R043 run; prior L354 had the same crash. L364 did not repeat that broken browser path, per SOP. No L364 manual listening, highlight synchrony or microphone replay PASS is claimed.

Under the current Production SOP fallback, technical gates are complete; teacher subjective image/audio review remains post-main. No teacher pre-merge PASS is claimed.

## Reproducible validation

Startup tools:check, ai:check and curriculum:audit-state passed. curriculum:packet was run before filling the final draft; this final packet preserves exact approved records.

The owned L364-pipeline.cjs adapter invokes repository generation/image/audio/AI-alignment/validation scripts against an in-memory L364 curriculum and redirects output only to the owned draft; it does not edit shared curriculum files.

- node curriculum-workflow/generated/L364-pipeline.cjs images
- node curriculum-workflow/generated/L364-pipeline.cjs process
- node curriculum-workflow/generated/L364-pipeline.cjs align
- node curriculum-workflow/generated/L364-normalize-options.cjs
- node curriculum-workflow/generated/L364-tail-qa.cjs metadata
- node curriculum-workflow/generated/L364-pipeline.cjs formats: PASS, zero warnings
- node curriculum-workflow/generated/L364-pipeline.cjs production: PASS
- node curriculum-workflow/generated/L364-audit.cjs technical: PASS
- node curriculum-workflow/generated/L364-audit.cjs curriculum: PASS; virtual latest main plus unmerged dependency and L364; existing curriculum warnings only
- npm run validate:production: PASS on branch baseline
- npm run curriculum:audit-state: PASS on branch baseline L360; expected future L364 asset-folder warning
- npm run verify: skipped, dependency-blocked, shared state left for Release

Intake count exception: Explicit L364 handoff requires 9 unique audio files because G02 target is final and suffixSrc must be omitted. The stock intake script hardcodes 10. L364-audit.cjs intake verifies exact nine-file references and applies only this count exception to the otherwise unchanged strict intake gate. Report the stock count incompatibility separately.

## Release handoff

Release must satisfy L363 and integrate shared state, then run final verify. Teacher review URL, usable after Release merges and deploys:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L364&ref=main

Post-merge status: npm run asset:review-status -- --unit L364 --ref main

## Pushed-ref intake result

Tested pushed asset commit 9139c5da4ea8400839b161b61cba926a693ec912:

- Stock `npm run curriculum:package-intake -- --unit L364 --ref origin/codex/l364-complete-package --strict`: exit 1, sole finding `expected 10 M4A audio files, found 9`.
- `node curriculum-workflow/generated/L364-audit.cjs intake origin/codex/l364-complete-package`: PASS with zero other findings, using only the explicit prefix-only handoff count exception.
- Production follows the teacher's explicit nine-file/no-suffix specification. Stock intake compatibility must be acknowledged by Supervisor/Release; this report does not claim the unmodified stock command passed. Shared validator code was not changed.
- Staged scope and whitespace checks passed; all owned assets pushed. No rejected images included.
