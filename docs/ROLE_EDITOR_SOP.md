# Role SOP: Editor

The Editor selects and finalizes lesson sentences with the teacher, then writes a complete one-paste production handoff for Production A/B/C/D.

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

Use latest `origin/main:src/curriculum/sample-lessons.json` for the real learned-character set.

Use `docs/CURRICULUM_LEDGER.md` only as the human-readable summary and continuity guide. If it disagrees with production JSON, production JSON wins.

Use `docs/PARALLEL_LESSON_REGISTRY.md` only for not-yet-merged provisional dependencies.

## Editor Operating Pattern

For each normal lesson, use this sequence before producing a handoff:

1. Start from latest `origin/main`, report the current production boundary, and name any provisional dependency lessons that are not yet merged.
2. Build a word/phrase list before drafting sentences. Use the full learned-character set plus the current new character, not only the previous-five review pool.
3. Reject legal-but-unnatural words early. Coverage counts are minimum gates after good sentences exist; they are not a reason to keep a weak sentence.
4. Draft more candidate directions than needed, with varied sentence frames, scenes, people, actions, and uses of the new character.
5. After every teacher edit, recalculate current-target and previous-five coverage, Han sentence counts, and the allowed-character audit. Report exact illegal characters instead of assuming they can be used.
6. Preserve teacher-approved strong sentences unless there is a hard blocker. If a teacher rejects a sentence as unnatural, identify which coverage target it served and rewrite around that target with natural Taiwan Mandarin.
7. Before final handoff, confirm the five sentences, `spokenText`, `focusChar`, `displayLines`, coverage, allowed-character audit, imageability, visual cast identities, and Stage 4 sentence usage.

During discussion, keep analysis outside the production handoff block. A useful response shape is: candidate five sentences, a small coverage table, Han counts, allowed-character audit result, and any weak sentence or alternative.

## Editor Output

For each assigned normal lesson, produce final approved sentence data:

- Unit id, such as `L171`.
- New character(s), Taiwan zhuyin, title.
- Dependency lessons and any provisional learned characters.
- Locked `allowedChars`.
- Forbidden/unlearned characters found during audit.
- Five approved sentences.
- For every sentence: `text`, `spokenText`, `focusChar`, optional `displayLines`, and concrete `imageNotes`.
- Coverage counts for the current target and previous-five review targets.
- Stage 4 plan using the five standard game types once each.
- Required image style anchor, normally L058 references, explicitly marked as style-only.
- Required visual cast identity for each sentence that shows people, following `docs/LESSON_VISUAL_CAST_SOP.md`.
- Audio requirements for sentence audio, standalone `charAudio`, `G02` teach audio, and `G05` wrong-choice audio.

For review modules, follow `docs/CURRICULUM_OPERATING_SOP.md` and `docs/CURRICULUM_SCHEMA.md` review-module rules.

Review module planning must lock the milestone boundary:

- Use the full review schedule in `docs/CURRICULUM_OPERATING_SOP.md`.
- For milestone `M = 60, 90, 120, ... 600`, the standard pair covers `M - 59` through `M - 30` and may use only characters learned through `M`.
- Pair numbering follows the formula in the operating SOP. Examples: R005/R006 cover L061-L090 using characters through L120; R009/R010 cover L121-L150 using characters through L180; R037/R038 cover L541-L570 using characters through L600.
- Final capstone R039/R040 covers L571-L600 using characters through L600.

Plan each review pair together as 10 total sentences. Across the pair, every new character in the coverage target must appear at least once. Do not use characters learned after the milestone ceiling, even if latest `origin/main` is already later.

## Required Sentence Gates

Before sending a Production handoff:

- Audit every Han character in `text`, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text against `allowedChars`.
- Reject or rewrite any sentence with unlearned Han characters.
- Use Taiwan wording and Taiwan zhuyin only.
- Keep sentences concrete, imageable, and normally 4-12 Han characters.
- Confirm `spokenText` includes exactly the Han characters from `text` in order, without punctuation.
- Confirm every `focusChar` appears in its sentence.
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
- Assigned production slot A/B/C/D and exact worktree path.
- Unit id and unit kind.
- Latest known merged boundary from `origin/main`.
- Complete sentence data and Stage 4 plan.
- Required repo files to create or update.
- Auto-claim-and-continue block.
- Stop conditions.

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

- Do not leave final sentences only in chat.
- Do not tell Production only to "make images and audio."
- Do not reserve AI-recommended characters without teacher approval.
- Do not use Hanyu pinyin.
- Do not ask Production to merge to `main`; Release owns ordered merge/push.
