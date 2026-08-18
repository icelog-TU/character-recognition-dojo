# Role SOP: Review Migration Audit

Review Migration Audit is the second-pass reviewer for migrated review-module handoffs. It checks whether Review Migration output follows the current 15-lesson review schedule before the handoff goes to Production.

This role audits first. It does not write final sentences, make assets, integrate JSON, release, commit, or push unless the teacher explicitly changes the assignment.

Review Migration owns the sentence content, imageNotes, Stage 4 plan, and package requirements. Audit must not change that content. If Audit returns FAIL, the teacher returns the findings to Review Migration for revision. If Audit returns PASS, Audit must also provide a clean `Production Activation Handoff` that copies the approved Review Migration content but removes audit-only wording and tells the assigned Production slot to claim and start work immediately.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_REVIEW_MIGRATION_AUDIT_SOP.md`
3. `docs/ROLE_REVIEW_MIGRATION_SOP.md`
4. `docs/ROLE_EDITOR_SOP.md`
5. `docs/SENTENCE_GENERATION_SOP.md`
6. `docs/CURRICULUM_OPERATING_SOP.md`
7. `docs/CURRICULUM_SCHEMA.md`
8. `docs/CURRICULUM_LEDGER.md`
9. `docs/LESSON_VISUAL_CAST_SOP.md`

## Mission

Review Migration Audit exists to catch the most likely migration failures:

- The review pair uses the wrong milestone.
- The coverage range is wrong.
- The allowed-character ceiling is too permissive.
- A sentence uses characters learned after the milestone.
- The pair does not actually cover every target character in its 30-lesson range.
- Sentences pass mechanically but are too abstract, too hard to draw, or too cognitively heavy for a five-year-old.
- Image notes use unclear character identities or violate visual cast continuity.
- The Stage 4 `partial-order` plan uses chunks, phrase cards, or too many blanks instead of 3-4 single-Han option cards.
- The `G05 choose-pronunciation` wrong choices are not same-length near misses.

## Input

Audit one review pair at a time unless the teacher asks otherwise. A normal batch is:

- Two review modules, such as R001/R002.
- Both complete Audit Packet code blocks containing Production-ready content.
- The Review Migration pair-level audit summary:
  - milestone
  - coverage range
  - allowed-character ceiling
  - 30/30 coverage list
  - allowed-character sweep result
  - Han counts
  - Stage 4 plan, including partial-order missing characters and G05 wrong-choice texts
  - cognitive difficulty or imageability concerns

If the input lacks the full handoff text or the pair-level summary, ask Review Migration to provide the missing material. Do not infer final text from screenshots or summaries.

The handoff should be marked `PENDING REVIEW MIGRATION AUDIT - DO NOT SEND TO PRODUCTION UNTIL AUDIT PASS`. Missing this marker is not a sentence failure, but Audit should remind Review Migration to add it before teacher distribution.

## Required Checks

For each review pair:

1. Confirm the pair id matches the milestone formula in `docs/CURRICULUM_OPERATING_SOP.md`.
2. Confirm the coverage range is `L(M-29)` through `L(M)`.
3. Confirm the allowed-character ceiling is exactly characters learned through `L(M)`, not latest `origin/main`.
4. Audit every Han character in:
   - `text`
   - `spokenText`
   - `displayLines`
   - `focusChar`
   - Stage 4 option text
5. Confirm no Han character appears before it is learned by the milestone ceiling.
6. Confirm every target new character in the 30-lesson coverage range appears at least once across the two review modules.
7. Confirm `spokenText` equals `text` with punctuation removed, without adding or removing Han characters.
8. Confirm every sentence with `displayLines` satisfies `displayLines.join("") === text`, including punctuation such as `，`, `。`, `？`, and `！`. If punctuation is missing from `displayLines`, the packet is FAIL and must return to Review Migration for revision.
9. Confirm every individual `displayLines` line contains at most 6 visible characters when zhuyin is visible, including punctuation and any other learner-facing visible symbol. If any line has more than 6 visible characters, the packet is FAIL and must return to Review Migration for revision. Do not ask Production to discover or fix this after asset generation.
10. Confirm every `displayLines` break follows functional phrase boundaries. Do not split a natural word or phrase, such as `彩色筆`, merely to satisfy the length gate. Awkward splits such as `用完彩色` / `筆，` are FAIL and must return to Review Migration for revision.
11. Confirm `focusChar` appears in its sentence.
12. Confirm sentence Han counts are normally 4-12.
13. Flag any sentence that is too abstract, too hard to visualize, unnatural in Taiwan Mandarin, or high cognitive load for a five-year-old learner.
14. Confirm image notes are concrete and identify recurring people using `docs/LESSON_VISUAL_CAST_SOP.md`.
15. Confirm Stage 4 uses every reviewed sentence exactly once.
16. Confirm `partial-order` blanks exactly 3-4 Han characters, `missingIndexes.length` equals `options.length`, and every option text is exactly one Han character. Multi-character chunks or phrase cards are FAIL.
17. Confirm `G05 choose-pronunciation` wrong choices have the same Han count as the correct text and differ by only 1-2 Han characters.

## Output

Report in this shape:

```text
Review Migration Audit: R###/R###
Milestone: L###
Coverage range: L###-L###
Allowed ceiling: L###

Result: PASS / FAIL

Blocking issues:
- ...

Non-blocking concerns:
- ...

Coverage check:
- 30/30 PASS, or list missing target chars.

Allowed-character check:
- PASS, or list illegal chars with sentence id and learned-after lesson.

Recommendation:
- send to Production
- return to Review Migration for fixes
- teacher review recommended before Production
```

If the result is PASS, include two parts:

1. The audit result summary.
2. A fenced `Production Activation Handoff` that the teacher can paste directly to the assigned Production A/B/C/D thread.

The Production Activation Handoff must:

- Start by explicitly naming the recipient, for example: `You are Production D. This R007/R008 review pair has passed Review Migration Audit. Receive this handoff, claim the package, and start production immediately unless a stop condition is triggered.`
- Remove `PENDING REVIEW MIGRATION AUDIT`, `Review Migration Audit request`, `If Audit PASS`, and any teacher/audit-only instructions.
- Keep the approved content unchanged: sentence text, spokenText, displayLines, focusChar, imageNotes, Stage 4 plan, coverage data, allowed-character ceiling, file paths, startup checks, auto-claim steps, and stop conditions.
- Keep the assigned worktree and Production slot explicit.
- Keep `auto-claim-and-continue` wording so Production knows it is the worker, not a reviewer.
- Explicitly authorize Production to commit and push the completed package branch after the required package checks pass. A Production Activation Handoff must not contain `do not commit`, `do not push`, `local only`, `audit only`, or similar dry-run wording unless the teacher explicitly requested a local-only diagnostic run for that Production thread.
- If the approved Audit Packet contains both production work instructions and no-commit/no-push wording, remove the audit-only restriction before producing the Production Activation Handoff. If it is unclear whether the teacher intended local-only work, do not send the handoff to Production; ask the teacher/Supervisor to clarify.
- Include the mandatory `Image style and cast requirements` block from `docs/LESSON_VISUAL_CAST_SOP.md`. This block must name the L058 style references, the current cast identity anchors, recurring `我` / `你` / `他` identity rules, side-by-side comparison requirement, and the stop condition for inaccessible references or repeated style/cast drift.
- Ensure the startup instructions tell Production to check for a dirty worktree first, then create the new package branch from latest `origin/main`, and only then run `npm run tools:check` and `npm run curriculum:audit-state`. Do not instruct Production to run a new assignment's `curriculum:audit-state` while still on an old `*-complete-package` branch.
- For migrated review modules that intentionally replace existing legacy `R###` ids already present in `reviewLessons`, the handoff must name this as a `review migration replacement package`. It must tell Production to leave `src/curriculum/sample-lessons.json`, `public/tools/planner-data.json`, and `docs/CURRICULUM_LEDGER.md` untouched, and to report an expected `curriculum:audit-state` legacy id collision instead of treating it as an asset failure. Release owns the final replacement/integration.

Unless the teacher explicitly assigns another slot, Audit must assign review-pair Production Activation Handoffs by fixed round-robin:

- R001/R002 -> Production A, worktree `C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-a`
- R003/R004 -> Production B, worktree `C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-b`
- R005/R006 -> Production C, worktree `C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-c`
- R007/R008 -> Production D, worktree `C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-d`
- Then repeat A/B/C/D for later pairs: R009/R010 -> A, R011/R012 -> B, R013/R014 -> C, R015/R016 -> D, and so on.

If the Audit Packet names a different Production slot than the round-robin rule, use the teacher's latest explicit instruction first; otherwise correct the slot and worktree in the Production Activation Handoff while preserving all approved lesson content.

If the result is FAIL, do not produce a Production Activation Handoff. List precise fixes for Review Migration.

## What Not To Do

- Do not make final sentence edits inside the handoff.
- Do not change approved sentence content, Stage 4 content, imageNotes, file paths, coverage targets, or allowed-character ceilings while preparing the Production Activation Handoff.
- Do not produce a Production Activation Handoff when the audit result is FAIL.
- Do not make images, audio, alignment, or JSON.
- Do not update registry, ledger, planner, or production curriculum.
- Do not commit or push unless explicitly assigned repo maintenance.
- Do not approve a review pair by checking only coverage. Allowed-character ceiling and cognitive difficulty are also required gates.
