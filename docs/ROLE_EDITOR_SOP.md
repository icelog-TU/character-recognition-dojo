# Role SOP: Editor

The Editor selects and finalizes lesson sentences with the teacher, then writes a complete one-paste production handoff for the currently assigned Production slot. The production pool is currently A/B/C/D, but the Editor must follow the latest Supervisor assignment if the pool changes.

The Editor does not normally create final images, audio, alignment, or production curriculum JSON.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_EDITOR_SOP.md`
3. `docs/SENTENCE_GENERATION_SOP.md`
4. `docs/LESSON_VISUAL_CAST_SOP.md`
5. `docs/CURRICULUM_OPERATING_SOP.md`
6. `docs/CURRICULUM_LEDGER.md`
7. `docs/PARALLEL_LESSON_REGISTRY.md`
8. `docs/CURRICULUM_SCHEMA.md`

If AI sentence generation commands are needed, also read `docs/AI_GENERATION_SETUP.md`.

## Source Of Truth

Before each lesson, run `git fetch origin` and use latest `origin/main:src/curriculum/sample-lessons.json` for the real learned-character set.

Do not use local `main`, the current checkout, stale chat memory, screenshots, old handoffs, or unverified branches as the production boundary. If the local checkout is behind `origin/main`, the Editor must still read `origin/main` directly and report the boundary from that version.

Use `docs/CURRICULUM_LEDGER.md` only as the human-readable summary and continuity guide. If it disagrees with production JSON, production JSON wins.

Use `docs/PARALLEL_LESSON_REGISTRY.md` only for not-yet-merged provisional dependencies.

## New Character Discovery Gate

Before the teacher chooses the next normal lesson target character, the Editor must run a fresh discovery pass. This is a hard gate: do not draft five sentences, do not prepare a handoff, and do not rely on old chat memory or yesterday's candidate list.

For each new-character discovery pass:

1. Run `git fetch origin`.
2. Read latest `origin/main:src/curriculum/sample-lessons.json` directly and report the official latest merged lesson id and newest learned character.
3. Read `docs/PARALLEL_LESSON_REGISTRY.md` only to identify already handed-off but not-yet-merged provisional lesson targets that the teacher still wants to keep in sequence.
4. Build the current planned sequence from merged lessons plus accepted provisional lessons. If a provisional lesson is uncertain, label it uncertain instead of silently using it.
5. List the recent three and recent five target characters from that planned sequence. These are context for candidate discovery, not yet the coverage table for a final sentence set.
6. Re-scan not-yet-learned candidate characters. Do not select only from the newest theme, the latest few lessons, or stale candidates from the chat.
7. For each strong candidate, analyze whether it can connect naturally to the recent three/five targets, open useful words, open new sentence patterns, open new scenes, stay suitable for a five-year-old, remain imageable, and support Stage 4.
8. Report only candidate characters, useful word/phrase directions, strengths, risks, and a recommendation ranking.
9. Stop and wait for the teacher to choose the target character. Sentence drafting starts only after teacher selection.

The discovery report should include:

- latest `origin/main` boundary
- current planned/provisional sequence
- recent three target characters
- recent five target characters
- candidate character table with phrase potential, recent-three/five fit, new sentence/scenario value, child suitability, imageability risk, and recommendation
- an explicit note that no five-sentence draft has been produced yet

## Editor Operating Pattern

For each normal lesson, use this sequence before producing a handoff:

1. Fetch and report the latest `origin/main` production boundary, including the last merged lesson id and newest learned character. If local audit output disagrees with `origin/main`, report the local checkout as stale and do not use it for planning.
2. Build `allowedChars` from the full `origin/main` learned-character set, explicitly approved provisional dependency characters, and the current lesson's new character. Provisional characters supplement dependencies; they are not the whole writing pool.
3. Perform the full learned-character sweep gate from `docs/SENTENCE_GENERATION_SOP.md` before any word or sentence proposal. The Editor must explicitly consider every learned character from `origin/main`, whether the set has 200, 300, 500, or 600 characters. If this sweep is missing, stop and redo it.
4. Build a word/phrase list before drafting sentences. Use the full learned-character set plus the current new character, not only the previous-five review pool, the newest 10-20 lessons, provisional dependency characters, or a recent theme line.
5. Scan the full learned set for scene sources, old actions, old nouns, and old sentence patterns that can make the lesson varied. Do not let all five sentences stay in one topic line when older learned vocabulary supports better scenes.
6. Reject legal-but-unnatural words early. Coverage counts are minimum gates after good sentences exist; they are not a reason to keep a weak sentence.
7. Draft more candidate directions than needed, normally 8-10 candidates, with varied sentence frames, scenes, people, actions, `focusChar` choices, and uses of the new character.
8. After every teacher edit, recalculate current-target and previous-five coverage, Han sentence counts, `spokenText`, `displayLines`, and the allowed-character audit. Report exact illegal characters instead of assuming they can be used. Do not reuse a coverage table from before the edit.
9. Preserve teacher-approved strong sentences unless there is a hard blocker. If a teacher rejects a sentence as unnatural, identify which coverage target it served and rewrite around that target with natural Taiwan Mandarin.
10. Before final handoff, run the Editor Handoff Dependency Gate from `docs/SENTENCE_GENERATION_SOP.md`. Derive `dependsOnLessons` and `provisionalLearnedChars` from the approved display text sweep, not only from previous-five coverage targets.
11. Before final handoff, run the Stage 4 Index Validation Gate from `docs/SENTENCE_GENERATION_SOP.md`. Do not rely on manual counting for `targetCharIndex`, `missingIndexes`, or `partial-order` option mapping.
12. Before final handoff, confirm the five sentences, `spokenText`, `focusChar`, `displayLines`, coverage, allowed-character audit, imageability, visual cast identities, Stage 4 sentence usage, and Stage 4 index self-check.

During discussion, keep analysis outside the production handoff block. A useful response shape is: candidate five sentences, a small coverage table, Han counts, allowed-character audit result, and any weak sentence or alternative.

## Teacher Sentence Approval Gate

For normal lessons, do not produce the full Production handoff until the teacher has approved the final sentence set or explicitly asks for the handoff.

The normal sequence is:

1. Propose candidate sentences or a five-sentence draft.
2. Report coverage, Han counts, allowed-character result, and weak points.
3. Revise with the teacher.
4. After every teacher edit, recalculate allowed-character audit, current and previous-five coverage, Han counts, `spokenText`, and `displayLines`.
5. Only after the teacher confirms the five sentences, produce the complete Production handoff.

This gate exists to reduce rework. A full handoff produced too early is more likely to contain stale coverage, stale `displayLines`, wrong image notes, or Stage 4 data that no longer matches the final sentences.

## Editor Output

For each assigned normal lesson, produce final approved sentence data:

- Unit id, such as `L171`.
- New character(s), Taiwan zhuyin, title.
- Dependency lessons and any provisional learned characters.
- If dependency lessons are not yet merged, state that they are Release/main blockers only; Production should still claim and build the assigned dependency-blocked package after recording `dependsOnLessons` / `provisionalLearnedChars`.
- Locked `allowedChars`.
- Forbidden/unlearned characters found during audit.
- Coverage targets separated from allowed-character dependencies.
- Additional provisional characters used in approved display text outside the coverage window, or `None`.
- Editor allowed-character self-check showing the `origin/main` boundary, final `provisionalLearnedChars`, and PASS/FAIL.
- Five approved sentences.
- For every sentence: `text`, `spokenText`, `focusChar`, optional `displayLines`, and concrete `imageNotes`.
- Coverage counts for the current target and previous-five review targets.
- Stage 4 plan using the five standard game types once each in canonical normal-lesson order: `G01 find-character`, `G02 teach-character`, `G03 missing-character`, `G04 partial-order`, `G05 choose-pronunciation`.
- If the teacher explicitly approved any Stage 4 order exception, state the exact exception and reason; otherwise do not reorder Stage 4 games for variety or convenience.
- Stage 4 index self-check table showing each indexed game's Han-only sequence, intended target, index, actual character at that index, and PASS/FAIL; for `partial-order`, include `missingIndexes`, Han values, single-Han option cards, and `correctOrder` mapping PASS/FAIL.
- Required image style anchor, normally L058 references, explicitly marked as style-only.
- Required visual cast identity for each sentence that shows people, following `docs/LESSON_VISUAL_CAST_SOP.md`.
- Audio requirements for sentence audio, standalone `charAudio`, `G02` teach audio, and `G05` wrong-choice audio.

For review modules, follow `docs/CURRICULUM_OPERATING_SOP.md` and `docs/CURRICULUM_SCHEMA.md` review-module rules.

Review module planning must lock the milestone boundary:

- Use the full review schedule in `docs/CURRICULUM_OPERATING_SOP.md`.
- For milestone `M = 45, 60, 75, ... 600`, the standard pair covers `M - 29` through `M` and may use only characters learned through `M`.
- Pair numbering follows the formula in the operating SOP. Examples: R001/R002 cover L016-L045 using characters through L045; R003/R004 cover L031-L060 using characters through L060; R019/R020 cover L151-L180 using characters through L180; R075/R076 cover L571-L600 using characters through L600.
- There is no extra capstone pair after R075/R076.

Plan each review pair together as 10 total sentences. Across the pair, every new character in the coverage target must appear at least once. Do not use characters learned after the milestone ceiling, even if latest `origin/main` is already later.

## Required Sentence Gates

Before sending a Production handoff:

- Audit every Han character in `text`, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text against `allowedChars`.
- Reject or rewrite any sentence with unlearned Han characters.
- Separate coverage targets from dependency/provisional learned characters. Coverage targets are exactly the current lesson and previous five lesson targets. Previous-six or earlier characters may be allowed vocabulary, but they are never coverage requirements. `dependsOnLessons` and `provisionalLearnedChars` must include every not-yet-merged character used by approved display text, even when that character is outside the coverage window.
- Run a final approved-text sweep against latest `origin/main` learned chars plus final `provisionalLearnedChars` plus the current new character. If any Han character is still illegal, do not hand off.
- Use Taiwan wording and Taiwan zhuyin only.
- Keep sentences concrete, imageable, and normally 4-12 Han characters.
- Confirm `spokenText` includes exactly the Han characters from `text` in order, without punctuation.
- Confirm every `displayLines` array joins exactly back to `text`, including punctuation.
- Confirm every `displayLines` line contains at most 6 visible characters when zhuyin is visible, including punctuation and any other learner-facing visible symbol. Do not use a Han-only count.
- Confirm `displayLines` uses the fewest readable lines: two lines when possible; three lines only when no functional two-line split fits; four or more lines only with a clear reason.
- Confirm `displayLines` breaks follow functional phrase boundaries. Do not split a natural word or phrase, such as `彩色筆`, merely to satisfy the length gate. Prefer breaks at subject, time/frequency, object, action, result, reason/condition, short predicate, or natural punctuation boundaries.
- Confirm every `focusChar` appears in its sentence.
- Mechanically validate every Stage 4 index against the Han-only sentence sequence: every explicit `targetCharIndex` must point to `targetChar`, every `missingIndexes` entry must be in range, and every `partial-order` option must be a single Han card whose `correctOrder` points to the matching missing Han character.
- Confirm current target and recent review coverage follows `docs/SENTENCE_GENERATION_SOP.md`.
- For review modules, confirm the pair-level coverage target and milestone allowed-character ceiling, and include both in the handoff.
- Confirm the teacher approved the final set.

## Production Handoff Rules

The handoff must be one-paste executable. The receiving Production thread must be able to claim the unit and continue without another teacher message.

Every formal Production handoff must be wrapped as one complete Markdown fenced code block using `text`:

````text
```text
...full handoff...
```
````

The teacher uses that gray code block as the one-click copy area. Put discussion, coverage statistics, and sentence-polishing notes outside the block unless they are part of the final handoff itself.

Every handoff must include:

- Repo URL.
- Assigned production slot and exact worktree path from the latest Supervisor/teacher assignment.
- Unit id and unit kind.
- Latest known merged boundary from `origin/main`.
- Coverage target list: current lesson and previous 1-5 lesson targets only.
- Display text provisional dependency sweep: provisional chars required by coverage, additional provisional chars used outside coverage, fully unlearned chars, and PASS/FAIL.
- Correct dependencies: final `dependsOnLessons` and `provisionalLearnedChars`, derived from all approved text and Stage 4 option text.
- Editor self-check sentence confirming every Han character in approved S01-S05 and Stage 4 option text is in latest `origin/main` learned chars plus `provisionalLearnedChars` plus current new char.
- Complete sentence data and Stage 4 plan.
- Stage 4 index self-check showing that `targetCharIndex`, `missingIndexes`, and `partial-order` `correctOrder` values were machine-checked against each sentence's zero-based Han-only sequence.
- Required repo files to create or update.
- Auto-claim-and-continue block.
- Stop conditions.

The final Production handoff must be clean Production-facing text. Do not include Audit-thread wording, draft-only discussion, `if Audit PASS`, `do not commit`, `do not push`, or `local only` restrictions unless the teacher explicitly requested a local-only diagnostic task. A normal Production package handoff should tell the assigned Production slot to claim, build, validate, commit, push the package branch, and report the full tip commit SHA.

## Auto-Claim-And-Continue Block

Include this block, filled for the assigned unit:

```text
Auto-claim-and-continue:
1. Confirm you are in the assigned worktree.
2. Run startup checks from docs/PROJECT_HANDOFF_SOP.md.
3. Stop if the assigned worktree is dirty, startup checks fail, approved sentence data is missing, dependency/allowed-character audit fails, or the registry cannot be updated before large asset work.
4. If clean, create the branch from latest origin/main:
   git switch -c codex/l###-complete-package origin/main
5. Add/update exactly one row in docs/PARALLEL_LESSON_REGISTRY.md with status claimed.
6. Continue directly into the full package: request, packet, draft, images, audio, Stage 4 audio, alignment, validation, and pushed branch.
```

## What Not To Do

- Do not create lesson request JSON, generation packet Markdown, draft JSON, production curriculum JSON, planner data, ledger entries, image assets, audio assets, `charTimings`, or alignment output unless the teacher explicitly assigns Editor to act outside its normal role.
- Do not commit or push from the Editor role unless the teacher explicitly asks for an SOP or repo-maintenance change in that same Editor thread.
- Do not leave final sentences only in chat.
- Do not tell Production only to "make images and audio."
- Do not reserve AI-recommended characters without teacher approval.
- Do not draft five lesson sentences before the teacher has selected the target character from a fresh New Character Discovery Gate.
- Do not use Hanyu pinyin.
- Do not ask Production to merge to `main`; Release owns ordered merge/push.
