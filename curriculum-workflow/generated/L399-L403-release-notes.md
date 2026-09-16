# L399-L403 Release

- Base main 09ad28d7; existing L371/L375 repairs and R047/R048 preserved.
- L399: origin/codex/l399-complete-package @ d3cf16d5da67bc9c0558d2fcc536984722a7086a
- L400: origin/codex/l400-complete-package @ 7f8fb52b4101cf3564bbf16b6ee123c0e004158f
- L401: origin/codex/l401-complete-package @ 360a5a9830f736261b7174d811acecb92243c802
- L402: origin/codex/l402-complete-package @ db9156275c86149587bc6d5c5ac93df622c1ba07
- L403: origin/codex/l403-complete-package @ ad695b2f521327520b1c1d8381cd273054b5c0d5
- Strict intake passed on all five sources. Predecessors satisfied in contiguous order; next review milestone is after L405. L404 excluded for Package Rescue.
- Only unit-local package files and release-owned shared state transplanted. L400 alignment/TTS tool changes inspected and excluded: generation-only, not needed for finished audio playback. No application or CSS changes.
- Registry has no active merged-unit rows; no edit needed.
- Approved image-only exceptions: L400-S04 Lily; L403-S03 book prices 50 and 30 only, no total. No other new readable-text exception.
- L399/L401/L402 documented browser tooling fallbacks accepted per SOP. Source playback/recording limitations retained; no physical microphone or teacher auditory PASS claimed. L400 short fragment transcription ambiguity and L401/L402 standalone tone uncertainty remain post-main listening follow-ups, not confirmed audio defects.
- Validation PASS: tools:check, curriculum:audit-state, full npm run verify (production assets, curriculum schema, lint, build). Existing curriculum advisories and bundle-size warning remain. L399 helper has two same-value duplicate-key lint warnings, not runtime curriculum defects.
- Official asset-format audit scoped to L399-L403 with unchanged checks, strict mode: 5 units, 25 images, 50 audio references, zero warnings. Existing 398 lesson entries and all 48 reviews deep-equal base; all new shipping fields deep-equal source drafts. Existing repair assets and shared scripts untouched.
- Browser smoke PASS: all five lessons at 390x844 and 820x1180, ten cases. Seeded local prerequisites, G03 exactly three choices, G04 correct ordering, G05 correct choice, actual reward (+30 coins/+12 stars), completion persisted, Next/Rest visible within viewport and above playback bar. L403 is the shipping endpoint; next lesson disabled. No page errors. Screenshots reviewed; tests do not claim physical microphone or subjective auditory QA.
- Release-side format cleanup only: removed extra EOF blank line from L399-pipeline.cjs. No sentence, audio, image or game repair. git diff --check PASS.
