# L422 班 — Production D handoff

Status: dependency-blocked-asset-complete
Branch: codex/l422-complete-package

Latest main recheck: 4eec51781af66eee3b0a9b0b5afe0e0497a8d121; L415 解. Required unmerged lessons: L416-L421. Review release gate: R051/R052 after L420, covering L391-L420. Locked 425-char teacher handoff unchanged; 解 is unused.

Five WebP, ten M4A, five sentence timings, two fragment timings, wrong-option transcription/timing evidence; see L422-technical-qa.json and L422-alignment.json. Standard repo audio generation, processing and AI alignment used. No audio cutting/splicing.

Browser QA tooling fallback: cua.getBrowser timed out after 30 seconds and reset; no successful page control. Listening, highlight synchrony and G02 hold-to-record/stitched replay are untested, not manual PASS. Technical checks passed; teacher subjective review is post-merge.

S01 style-lock PASS, cast PASS
S02 style-lock PASS, cast PASS
S03 style-lock PASS, cast PASS
S04 style-lock PASS, cast PASS
S05 style-lock PASS, cast PASS

No rejected images. Reference/final comparison is local tmp/L422-final-comparison.jpg. Originals remain under Codex generated_images. Raw MP3 remain ignored in curriculum-workflow/audio-inbox/L422/.

Image prompts: final approved records in L422-generation-packet.md; built-in image_gen with full style/cast reference sheet. Final assets: public/assets/lessons/L422/images and audio.

Shared production JSON/planner/ledger unchanged; Release integrates the final draft in order. verify skipped for dependency-blocked package.

After Release merges and deploys: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L422&ref=main
Review index: https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
Status command: npm run asset:review-status -- --unit L422 --ref main
