# R045 / R046 Release

- Release base: 3f105601 (SOP-only update after b313ded8 intake); formal numbered boundary L375.
- Rescue source: 534c85cdec635e73e6867589ca7d3486e2ee5fcc, codex/r045-r046-package-rescue.
- Both reviews follow L375 and precede L376. Pair covers all 31 introduced characters in L346-L375, including both L370 characters; allowed ceiling is 379 characters. No new characters introduced.
- Exact-source pair audit PASS in isolated checkout, including request/draft/packet parity, final audio hashes, duration/decode, timing, source image preservation, G02/G05 metadata, and three-choice G03.
- Built-in package intake does not support R###. Used supplied strict pair audit plus unchanged official curriculum, production-assets and strict format validators; no built-in intake PASS claimed and no quality gate waived.
- Included only pair-local files and the requested src/index.css card-relative sizing/wrapping fix. Existing main audio/image repairs and R041-R044 three-choice fixes retained. Main registry already has no active rows for this pair; no historical branch registry imported.
- npm run verify PASS. Per-review strict assets audit PASS: 5 images / 9 audio references each, zero warnings. All 46 review missing-character rounds pass the milestone-safe three-choice regression check.
- Release UI smoke: R045 at 390x844 and R046 at 820x1180, actual app with local-only seeded prerequisite progress. G03 has three visible options and unclipped text; R046 contextual neutral-tone override renders. G05 reveal/retry/correct selection and actual reward claim checked. R045 red Next and white Rest buttons visible above floating controls; R046 endpoint Next is correctly disabled, Rest visible. Both rewards increase fixture totals from 120/36 to 150/48. No cloud writes or physical microphone certification.
- Teacher listening approvals for the three rescue audio items are retained as source evidence, not independently re-certified by Release. Subjective teacher image/audio review remains post-main.
- Post-deploy review: https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
- Full assets:audit PASS: 421 units, 2064 image references, 4084 audio references, zero warnings. Staged diff check PASS after removing one extra EOF blank line from the QA pipeline helper; no validator logic changed.
