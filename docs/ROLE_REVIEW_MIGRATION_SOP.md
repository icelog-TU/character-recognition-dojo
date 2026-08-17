# Role SOP: Review Migration

Review Migration is the review-module editor for the 2026-08-17 review schedule migration. It audits legacy review modules, rewrites or replaces review-module sentences, and produces complete one-paste Production handoffs for review modules.

This role has Editor-level sentence editing authority for review modules. It is not a Production, Release, Asset Repair, or Visual Refresh role.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_REVIEW_MIGRATION_SOP.md`
3. `docs/ROLE_EDITOR_SOP.md`
4. `docs/SENTENCE_GENERATION_SOP.md`
5. `docs/CURRICULUM_OPERATING_SOP.md`
6. `docs/CURRICULUM_SCHEMA.md`
7. `docs/CURRICULUM_LEDGER.md`
8. `docs/PARALLEL_LESSON_REGISTRY.md`
9. `docs/LESSON_VISUAL_CAST_SOP.md`

If a review handoff contains image notes with recurring people, follow `docs/LESSON_VISUAL_CAST_SOP.md`.

## Mission

The current review schedule starts after L045 and adds two review modules after every 15-lesson milestone. The immediate migration target is valid R001-R036 through the L300 milestone.

Review Migration must:

- Treat existing R001-R018 as legacy 30-lesson-schedule material until audited.
- Decide whether each legacy review module can be reused, edited, renumbered, or replaced under the current 15-lesson schedule.
- For each review pair, lock the milestone, coverage range, and allowed-character ceiling from `docs/CURRICULUM_OPERATING_SOP.md`.
- Draft or revise 10 total review sentences per pair, five in each module.
- Confirm every target character in the pair's 30-lesson coverage range appears at least once across the pair.
- Confirm no sentence uses characters learned after the milestone ceiling.
- Keep sentences concrete, natural for Taiwan Mandarin, imageable, and low cognitive load for a five-year-old learner.
- Output complete one-paste Production handoffs for Production A/B/C/D.

## Review Pair Rules

For milestone `M = 45, 60, 75, ... 600`:

- Pair index `k = (M - 45) / 15`.
- Pair ids are `R(2k+1)` and `R(2k+2)`, zero-padded.
- The pair covers lessons `L(M-29)` through `L(M)`.
- The pair may use only characters learned through `L(M)`.
- Each module has five reviewed sentences.
- Across the two modules, every new character from the covered 30 numbered lessons must appear at least once.
- The pair blocks the next numbered lesson in the playable sequence.

Examples:

- After L045: R001/R002 cover L016-L045, allowed characters through L045.
- After L060: R003/R004 cover L031-L060, allowed characters through L060.
- After L075: R005/R006 cover L046-L075, allowed characters through L075.
- After L300: R035/R036 cover L271-L300, allowed characters through L300.

## Audit Workflow

For each assigned review pair:

1. Run `git fetch origin`.
2. Read latest `origin/main:src/curriculum/sample-lessons.json` for the learned-character list through the milestone.
3. Read existing `reviewLessons` and `docs/CURRICULUM_LEDGER.md` only as legacy/reference material.
4. Build the allowed-character ceiling for the milestone.
5. Build the 30-character coverage target list from the pair's lesson range.
6. If a legacy review module exists for the id, audit it against the new range and allowed ceiling.
7. Decide one of:
   - `reuse as-is`
   - `reuse with sentence edits`
   - `renumber/reposition after audit`
   - `replace completely`
   - `missing, create new handoff`
8. Draft or revise the pair together, not one review module in isolation.
9. Recalculate coverage after every edit.
10. Before handoff, run an allowed-character sweep over every Han character in `text`, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text.

If a sentence is legal but too abstract for a five-year-old, simplify it even if it passes coverage.

## Output

For each review module, produce a complete Production handoff in a single Markdown fenced code block using `text`.

The handoff must include:

- Assigned Production slot and exact worktree path.
- Unit id, such as `R001`.
- Unit kind: `review module`.
- Milestone lesson id.
- Coverage lesson range.
- Allowed-character ceiling lesson id.
- Pair mate id, such as `R001` paired with `R002`.
- Pair-level coverage checklist.
- Five approved review sentences for this module.
- `text`, `spokenText`, `focusChar`, `displayLines`, and concrete `imageNotes` for each sentence.
- Stage 4 plan appropriate for review modules.
- Required review request, draft, generated packet, image, and audio asset paths.
- Auto-claim-and-continue instructions for Production.
- Stop conditions.

Discussion, audit notes, and rejected sentence options must stay outside the final handoff block.

## What Not To Do

- Do not make final images.
- Do not make final audio.
- Do not run alignment as the final package owner.
- Do not update production JSON, planner data, or ledger as Release.
- Do not commit or push unless the teacher explicitly asks for repo maintenance in this Review Migration thread.
- Do not treat legacy R001-R018 as valid under the new schedule without auditing them.
- Do not use latest `origin/main` learned characters as the allowed set for an overdue review module; use the milestone ceiling.
