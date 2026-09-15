# L376-L380 Release

- Main prerequisite: db22fecba1cc1d6e312767f6d18f2f208b4f16ed integrated R045/R046; both main and gh-pages workflows succeeded before this batch.
- Rescue source: 96f5ee18ebdfd2046109719c2045ad5c8e4e868e, codex/l376-l380-package-rescue.
- Contiguous order: L376 -> L377 -> L378 -> L379 -> L380. Both prerequisite reviews retain their L375 ceiling and 31-character coverage.
- All five strict package intake checks PASS against the immutable source. Isolated rescue audit PASS: approved text/game preservation, packet parity, allowed characters, final hashes, decode/duration, 80-900 ms timings, no overlap, preserved AAC speech packets, all 25 original images and standalone character audio unchanged.
- The audit's packet regex assumes LF; the first archive-checkout run rejected CRLF fences. Reran unchanged assertions with read-time CRLF-to-LF normalization, PASS. No asset or metadata quality rules were relaxed.
- Per-unit official production-assets and strict format checks PASS before transplant. On integrated production data, strict audit PASS: 5 units / 25 images / 50 audio references, zero warnings. Existing 421 units passed full assets:audit immediately before this batch and their media/data are unchanged.
- Included only intended L376-L380 files, Release-owned production/planner/ledger/handoff updates, and the required Stage 2 callback change. Card-width CSS already shipped with R045/R046. No stale branch shared curriculum, SOP, registry or unrelated repairs imported. Main registry has no active merged-unit rows.
- npm run verify PASS. Existing advisory curriculum/bundle warnings remain. Imported QA helpers add four lint warnings: duplicate equivalent-map keys (same values) and two unused destructured variables. No lint errors.
- Existing L001-L375 and all 46 reviews are unchanged; each new production entry equals the corresponding rescue draft's shipping fields. All 46 review missing-character regression checks PASS.
- Stage 2 actual Chrome regression at 390x844: L379 three targets completes only at 3/3; L370 has two of each target and completes only at 4/4, not 2/4 or 3/4. Local seeded progress only, no cloud state changed.
- Release UI reward smoke PASS: L376/L377/L380 at 390x844, L378/L379 at 820x1180. G05 reveal/retry/correct answer followed by actual reward claim yields 150 coins/48 stars from 120/36. Next/Rest controls visible above floating playback controls; L380 endpoint Next correctly disabled. L379 Next actually opens L380. Source synthetic-recording QA is retained, not claimed as physical-device microphone verification.
- Tooling recovery: local Vite watcher stopped on a locked temporary archive file; restarted on a fresh port. One Playwright CDP click timeout recovered through accessibility click. No application failure inferred from those tooling errors.
- Subjective teacher image/audio review is post-main: https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
