# L445-L446 Release

- Base main: f766046b1cef50ff0ee34627996b87b56be8ddab.
- Sources: L445 5802379d2405be4bec63687d3e6a137903170b39; L446 2b5b5b18319625bf006d486b8be7d3604075a66b.
- Every source strict intake PASS; dependencies resolved in contiguous order after R053/R054.
- Only unit-local package files transplanted; shipping fields equal source drafts. Existing lessons/reviews preserved. Planner, ledger and handoff refreshed.
- `npm run verify` passed. Scoped strict audit passed for 2 units, 10 image references and 20 audio references with 0 warnings.
- Full strict asset audit passed for 500 units, 2,459 image references and 4,861 audio references with 0 warnings.
- Browser smoke passed for L445 and L446 at 390x844 and 820x1180, including reward claims, navigation hit areas and the L446 terminal state.
- L447 and later packages are excluded. L447 source `1134e379d10c7e51cec2329dc90bdaa9f6e094d3` failed strict scoped audit because `char-u62cd.m4a` has mean volume -30.5 dB.
- Teacher subjective review remains post-main.
