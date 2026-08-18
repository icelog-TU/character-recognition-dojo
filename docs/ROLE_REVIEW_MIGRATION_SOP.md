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
- Send review-pair handoffs to Review Migration Audit before Production when the teacher is using the double-review workflow.

R001-R036 are a draft pool only. A review pair becomes production-eligible only after:

1. The teacher approves the pair's 10 review sentences.
2. Review Migration produces an audit packet containing complete Production-ready content.
3. Review Migration Audit returns PASS and produces a clean Production Activation Handoff.

Do not send any pair to Production before all three gates are complete.

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
11. Before handoff, confirm every sentence with `displayLines` satisfies `displayLines.join("") === text`, including punctuation such as `，`, `。`, `？`, and `！`. `spokenText` removes punctuation; `displayLines` must not.
12. Before handoff, confirm every individual `displayLines` line contains at most 5 Han characters when zhuyin is visible. If a visual line is longer than 5 Han, split the line without changing `text` or `spokenText`.

If a sentence is legal but too abstract for a five-year-old, simplify it even if it passes coverage.

## Teacher Sentence Approval Gate

Review Migration works one review pair at a time, two review modules per batch. Examples: R001/R002, R003/R004, R005/R006.

Before writing any Production handoff:

1. Give the teacher only the 10 candidate sentences for the pair, plus the pair milestone, coverage range, allowed-character ceiling, and coverage summary.
2. Wait for the teacher to approve or edit the sentence set.
3. After every teacher edit, rerun pair-level coverage and allowed-character checks.
4. Do not generate handoff code blocks until the teacher confirms the final 10 sentences.

After teacher sentence approval, write imageNotes with explicit role identities for every sentence that shows people. Generic labels such as `adult`, `person`, `woman`, or unclear family roles are not enough when a recurring or social role is intended. Follow `docs/LESSON_VISUAL_CAST_SOP.md`.

## Output

For each review pair, produce an `Audit Packet` in one or more Markdown fenced code blocks using `text`. The packet must contain complete Production-ready content, but it is addressed to Review Migration Audit first.

The Audit Packet must be clearly marked:

```text
PENDING REVIEW MIGRATION AUDIT - DO NOT SEND TO PRODUCTION UNTIL AUDIT PASS
```

The Audit Packet must include:

- Suggested Production slot and exact worktree path. This is advisory for Audit unless the teacher explicitly assigned the slot.
- Unit id, such as `R001`.
- Unit kind: `review module`.
- Milestone lesson id.
- Coverage lesson range.
- Allowed-character ceiling lesson id.
- Pair mate id, such as `R001` paired with `R002`.
- Pair-level coverage checklist.
- Five approved review sentences for this module.
- `text`, `spokenText`, `focusChar`, `displayLines`, and concrete `imageNotes` for each sentence.
- A schema precheck confirming every `displayLines.join("") === text`; if any display line break omits punctuation, revise the packet before sending to Audit.
- A layout precheck confirming every individual `displayLines` line is at most 5 Han characters. Lines such as `我在游泳池裡`, `我換上乾衣服，`, or `我知道做錯事，` are invalid because each contains 6 Han characters and must be split before the packet goes to Audit.
- Stage 4 plan appropriate for review modules, using every sentence once.
- `G05 choose-pronunciation` option texts with the same Han count as the correct sentence and only 1-2 Han-character differences.
- `partial-order` plan that blanks exactly 3-4 Han characters. Each option card must be exactly one Han character. Do not use chunks, word cards, phrase cards, or full-sentence reordering.
- Required review request, draft, generated packet, image, and audio asset paths.
- The mandatory image style and cast requirements from `docs/LESSON_VISUAL_CAST_SOP.md`, or an explicit instruction for Audit to insert that block unchanged into the final `Production Activation Handoff`.
- Auto-claim-and-continue instructions that Audit can copy into the later Production Activation Handoff.
- Startup instructions that check for a dirty worktree first, create the new package branch from latest `origin/main`, and run `npm run tools:check` plus `npm run curriculum:audit-state` only after switching to that new branch.
- Package completion instructions that Audit can turn into a Production Activation Handoff: after required package checks pass, Production commits and pushes the package branch, then reports the branch and full tip commit SHA. Do not include no-commit/no-push wording inside content intended for Production, unless the teacher explicitly requested local-only diagnostic work.
- If this review pair replaces an existing legacy `R###` id in `reviewLessons`, clearly label it `review migration replacement package`. State the current schedule metadata, the legacy metadata if known, and that Release owns replacing the legacy `reviewLessons` entries. Production must not modify `src/curriculum/sample-lessons.json`, `public/tools/planner-data.json`, or `docs/CURRICULUM_LEDGER.md` for the replacement package.
- Stop conditions.

Discussion, audit notes, and rejected sentence options must stay outside the Audit Packet block.

## Second-Pass Audit

For migration batches, do not send a review pair directly to Production until Review Migration Audit has had a chance to check it, unless the teacher explicitly skips the audit.

Send one pair at a time, such as R001/R002, with:

- Both complete Production handoff code blocks.
- Milestone lesson id.
- Coverage range.
- Allowed-character ceiling.
- Pair-level 30/30 coverage list.
- Allowed-character sweep result.
- Han counts.
- Stage 4 plan summary, including the `partial-order` missing Han characters and `G05` wrong-choice texts.
- Any sentence naturalness, cognitive load, or imageability concern.

If Review Migration Audit returns FAIL, revise the Audit Packet and resend the pair for audit before Production.

If Review Migration Audit returns PASS, Audit is responsible for producing the final `Production Activation Handoff` by copying the approved content and removing audit-only wording. Review Migration does not need to regenerate a new Production handoff unless Audit finds a problem or the teacher asks for a revision.

Unless the teacher explicitly assigns a different slot, Review Migration should suggest slots using the review-pair round-robin: R001/R002 -> A, R003/R004 -> B, R005/R006 -> C, R007/R008 -> D, then repeat A/B/C/D. Audit makes the final Production Activation Handoff slot/worktree selection from the teacher's latest instruction or this round-robin rule.

## What Not To Do

- Do not make final images.
- Do not make final audio.
- Do not run alignment as the final package owner.
- Do not update production JSON, planner data, or ledger as Release.
- Do not commit or push unless the teacher explicitly asks for repo maintenance in this Review Migration thread.
- Do not treat legacy R001-R018 as valid under the new schedule without auditing them.
- Do not use latest `origin/main` learned characters as the allowed set for an overdue review module; use the milestone ceiling.
- Do not expect the teacher to manually clean audit-only wording before sending work to Production. Review Migration owns the approved content; Audit owns the PASS-time wrapper conversion into a Production Activation Handoff.
- Do not write `partial-order` as multi-character chunks. The current app and validator require 3-4 single-Han option cards.
