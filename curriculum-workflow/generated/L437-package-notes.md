# L437 修 Production D handoff

Status: dependency-blocked-asset-complete

Branch: codex/l437-complete-package
Remote: origin/codex/l437-complete-package
Claim commit: 0090ebdb
Base: 72b61a615628b25a2c78b63c9c400f9adcca946f (L435 助, 439 learned; R052 latest review)

Release blockers: L436 補 and R053/R054 after L435. Production owns only the L437 request, packet, draft, final assets, alignment/QA/provenance files and registry row. Shared curriculum, planner and ledger are unchanged.

Allowed 441 characters; coverage 修4/補2/助2/互2/願1/意1; all approved sentence and option text checks PASS. Exactly 5 WebP and 10 M4A files, total 1601063 bytes. All images 1024x1024 and <=250KB. CharAudio 修 2066ms, audible-volume technical check PASS. G05 volume spread 1.3dB.

S01 style-lock PASS, cast PASS (224990 bytes); S02 style-lock PASS, cast PASS (240820 bytes); S03 style-lock PASS, cast PASS (243042 bytes); S04 style-lock PASS, cast PASS (222892 bytes); S05 style-lock PASS, cast PASS (230732 bytes). No rejected image drafts committed.

Nine exact-text AI alignments plus documented spectral/tail timing review. See L437-timing-review.json for manual timing corrections. Raw whole recordings retained in ignored curriculum-workflow/audio-inbox/L437/. Temporary processing/alignment script changes restored byte-for-byte.

Browser QA: phone 390x844 Stage1, all five Stage3 card playback/highlights/layouts, G01, G03, G04 and G05 controls/feedback inspected. G02 reached red target after prefix; sustained hold unsupported. Microphone recording, stitched replay, human audible pronunciation/synchronization and final reward navigation untested; SOP fallback recorded, no human QA PASS claimed. G03-G05 used separate temporary subset preview; final canonical draft unchanged. Preview stopped, tab closed, viewport reset.

Technical checks: startup tools:check / ai:check / audit-state PASS; lesson-local validate:production PASS; strict assets:audit PASS with zero warnings. verify skipped: dependency-blocked, shared state left for Release.

Full baseline `npm run validate:production`: PASS. Final `curriculum:audit-state`: PASS, with expected notice that the unmerged L437 asset folder is not in production JSON. Final handoff consistency/index/allowed-character checks and shared-state byte comparison: PASS. Preview port 14237 has no listening server.

Pushed-ref intake checkpoint is appended after remote verification.

Post-merge teacher repair queue (usable after Release merges and deploys): https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main and https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L437&ref=main . Query: npm run asset:review-status -- --unit L437 --ref main
