# L415 Release

- Base main: e0fec697, including latest R048 S04 teacher-specified tone repair.
- Source: origin/codex/l415-package-rescue at 1dfc4db7131d3d699f19228b6d69e772500eb297, asset-complete-package.
- Prior intake attempt stopped because all five sentence imagePrompt fields were absent. Rescue restored prompts consistently in request, packet and draft; full integrated curriculum validation now passes.
- Source strict intake PASS. All dependencies and R049/R050 satisfied. Next review milestone follows L420.
- Only L415-local files and Release shared state transplanted. Original shared TTS/alignment tool changes reviewed and excluded: generation-only changes are not required for completed media playback. Registry has no active L415 row; left unchanged.
- Six teacher-approved audio hashes and all fifteen image/audio hashes verified against rescue evidence. No media, game or timing modifications. Teacher approval covers only the six documented clips; no new physical microphone approval claimed. Rescue synthetic-recording QA scope preserved.
- Shipping fields equal source draft. Previous 414 lessons and 50 review modules unchanged. Planner regenerated; ledger and handoff boundary updated.
- npm run verify PASS (existing advisory/lint and bundle-size warnings only). Scoped strict asset-format audit PASS: one unit, five image references, ten audio references, zero warnings. git diff --check PASS.
- Browser smoke PASS at 390x844 and 820x1180: G03 three choices, G04 order, G05 answer, actual reward persistence (+30 coins/+12 stars), and visible completion navigation. Final L415 next disabled as expected. No page errors. Phone reward and tablet G03 screenshots inspected.
