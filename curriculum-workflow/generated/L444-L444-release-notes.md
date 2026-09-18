# L444-L444 Release

- Base main: 5622c827569df36e09c1767d61f114b35973bbea.
- Sources: L444 d7aedc5f66f470a74dbd5429c7c44eccde3ab11e.
- Every source strict intake PASS; dependencies resolved in contiguous order after R053/R054. L444 uses the accepted Package Rescue source.
- Only unit-local package files transplanted; shipping fields equal source drafts. Existing lessons/reviews preserved. Planner, ledger and handoff refreshed.
- `npm run verify` passed. Scoped strict audit passed for 1 unit, 5 image references and 10 audio references with 0 warnings.
- Full strict asset audit passed for 498 units, 2,449 image references and 4,841 audio references with 0 warnings.
- Browser smoke passed at 390x844 and 820x1180, including the actual reward claim, navigation hit areas and the disabled terminal next-lesson state.
- `git diff --check` reports the source-preserved trailing blank line in `L444-generation-packet.md`; the immutable Rescue package blob is intentionally unchanged.
- L445 and later packages are excluded from this release.
- Teacher subjective review remains post-main.
