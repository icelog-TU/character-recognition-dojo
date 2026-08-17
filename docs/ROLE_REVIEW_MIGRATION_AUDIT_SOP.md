# Role SOP: Review Migration Audit

Review Migration Audit is the second-pass reviewer for migrated review-module handoffs. It checks whether Review Migration output follows the current 15-lesson review schedule before the handoff goes to Production.

This role audits only. It does not write final sentences, produce handoffs, make assets, integrate JSON, release, commit, or push unless the teacher explicitly changes the assignment.

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

## Input

Audit one review pair at a time unless the teacher asks otherwise. A normal batch is:

- Two review modules, such as R001/R002.
- Both complete Production handoff code blocks.
- The Review Migration pair-level audit summary:
  - milestone
  - coverage range
  - allowed-character ceiling
  - 30/30 coverage list
  - allowed-character sweep result
  - Han counts
  - cognitive difficulty or imageability concerns

If the input lacks the full handoff text or the pair-level summary, ask Review Migration to provide the missing material. Do not infer final text from screenshots or summaries.

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
8. Confirm `focusChar` appears in its sentence.
9. Confirm sentence Han counts are normally 4-12.
10. Flag any sentence that is too abstract, too hard to visualize, unnatural in Taiwan Mandarin, or high cognitive load for a five-year-old learner.
11. Confirm image notes are concrete and identify recurring people using `docs/LESSON_VISUAL_CAST_SOP.md`.

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

If the result is PASS, do not rewrite the handoff. If the result is FAIL, list precise fixes for Review Migration.

## What Not To Do

- Do not make final sentence edits inside the handoff.
- Do not produce Production handoffs.
- Do not make images, audio, alignment, or JSON.
- Do not update registry, ledger, planner, or production curriculum.
- Do not commit or push unless explicitly assigned repo maintenance.
- Do not approve a review pair by checking only coverage. Allowed-character ceiling and cognitive difficulty are also required gates.
