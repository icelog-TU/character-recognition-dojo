# R045 / R046 Package Rescue

Branch: `codex/r045-r046-package-rescue`

Source: `9991d7dfe4c11a31ebd212a8b4e09d71ca59b307`. Base main: `7fcef325b37f13fc68fe950bffd7fea8e9db6108` (L375). Release owns integration of the pair before L376. No formal curriculum, planner, ledger, or SOP changes are included. Include the shared src/index.css repair: the same card-width fix already present in L376-L380 rescue, now required before releasing the review pair.

## Repairs

- Generate missing R046 G02 suffix directly from `動` using the standard OpenAI/repository pipeline, then align the final AAC. Retain the accepted raw MP3. Teacher directly listened and accepted ㄉㄨㄥˋ. No homophone replacement or sentence splicing.
- Remove excessive silent tails while preserving original AAC speech packets. Final acoustic tails are at most 212 ms; metadata tails are at most 300 ms.
- Smooth R045-S04 connected 的/怪 timing from a 40 ms 怪 interval to 220 ms; retain speech that the teacher accepted. Correct final audible-decay boundaries, including R046-S05 友.
- Add sentence-level zhuyin overrides: R045-S04 長 = ㄓㄤˇ; R046-S03 地 = ˙ㄉㄜ.
- Synchronize request/draft/packet, G02 prefix/suffix metadata and G05 choice metadata; preserve original images and approved sentences/game design.

- Repair R046 tablet-width sentence clipping with card-relative type size and wrapping fallback.

## Teacher listening

Teacher explicitly accepted R045-S04, R046-G02-suffix 動, and R046-S05. Exact statements, local file identity and subsequent silence-only trimming are recorded in per-unit rescue QA. These were direct chat audio checks, not cloud review checkmarks or new image approval. Original image production review is retained: all ten style checks PASS; cast PASS except R045-S03 N/A. Source R046-S04 had already been regenerated for gaze correction; only the accepted source image is included.

## Verification commands

Run from this package checkout:

```powershell
npm run tools:check
node curriculum-workflow/generated/R045-R046-rescue-validate.cjs
node curriculum-workflow/generated/R045-R046-rescue-audit.cjs --ref HEAD
foreach ($unit in @('R045','R046')) {
  node curriculum-workflow/generated/R045-R046-rescue-pipeline.cjs $unit production
  node curriculum-workflow/generated/R045-R046-rescue-pipeline.cjs $unit formats
}
git diff --check
```

The official curriculum validator runs against main plus the pair in memory. Pair audit checks the exact milestone, all 31 target characters, the 379-character allowed ceiling, five games/sentences each, indexes/options, package parity, image and AAC packet preservation, actual audio duration/hash, and final timing constraints. `--ref` additionally verifies checkout metadata/assets against the specified commit. Final browser scope is in `R045-R046-rescue-browser-qa.json`.

## Intake tool limitation

The built-in `npm run curriculum:package-intake` rejects R### before reading a package, requires newChars/charAudio, and assumes lesson asset/request paths. These are tool assumptions incompatible with the existing review schema; do not add fake newChars or rename reviews to L### to pass it. No built-in intake PASS is asserted.

This package includes strict pair validation and uses the official production/format/curriculum validators through in-memory adapters. If Release requires the built-in command specifically, ask Supervisor to assign R### support in `scripts/check-package-intake.mjs` (review paths, no introduced characters, milestone/pair coverage), and clarify the Release checklist. No asset-quality waiver or curriculum-rule change is needed. Release still runs full `npm run verify` after actual integration.

Pre-merge audio review uses the permanent `tools/audio-review.html?unit=R045&ref=<full-pushed-sha>` and corresponding R046 URL. The post-main asset review index is usable only after Release merges and deploys.
