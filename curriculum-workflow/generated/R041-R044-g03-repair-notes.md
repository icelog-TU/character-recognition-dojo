# R041-R044 Missing-Character Repair

- Base: 250ca4a3. Teacher screenshot identifies R043-G03 with only 請 displayed.
- Root cause: R041-G03 through R044-G03 each stored only one correct option in production and source packages. R001-R040 already had three options. No App/UI change is required.
- Options (correct first): R041 圖/圓/畫; R042 跟/很/眼; R043 請/說/話; R044 排/拿/掉. All distractors are learned before each review's own milestone.
- Request, draft, every packet JSON occurrence, production, planner and ledger synchronized. Only eight distractor records added to production; deep comparison confirms all other curriculum data unchanged. No media changes.
- npm run verify PASS. Focused regression check PASS for all 44 review missing-character rounds: three distinct single-Han choices, one correct matching blank, milestone-safe options, repaired source consistency. Re-run with node curriculum-workflow/generated/R041-R044-g03-repair-check.cjs.
- Actual app R043 smoke: 390x844 and 768x1024 option layout readable. Wrong 說 leaves round incomplete; correct 請 fills the blank and enables 下一題. G04 solved and G05 completed; first-reward navigation shows red 下一課 and white 回首頁休息 without footer obstruction at both widths. Used isolated local test progress, no cloud writes.
- Shared validators/SOP and all Production worktrees left unchanged. Existing unrelated lint/bundle warnings remain.
- Post-deploy review: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=R043&ref=main
