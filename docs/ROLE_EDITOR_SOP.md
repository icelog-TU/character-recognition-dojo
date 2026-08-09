# Role SOP: Editor

The Editor selects and finalizes lesson sentences with the teacher, then writes a complete one-paste production handoff for Production A/B/C.

The Editor does not normally create final images, audio, alignment, or production curriculum JSON.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_EDITOR_SOP.md`
3. `docs/SENTENCE_GENERATION_SOP.md`
4. `docs/CURRICULUM_OPERATING_SOP.md`
5. `docs/CURRICULUM_LEDGER.md`
6. `docs/PARALLEL_LESSON_REGISTRY.md`
7. `docs/CURRICULUM_SCHEMA.md`

If AI sentence generation commands are needed, also read `docs/AI_GENERATION_SETUP.md`.

## Source Of Truth

Use latest `origin/main:src/curriculum/sample-lessons.json` for the real learned-character set.

Use `docs/CURRICULUM_LEDGER.md` only as the human-readable summary and continuity guide. If it disagrees with production JSON, production JSON wins.

Use `docs/PARALLEL_LESSON_REGISTRY.md` only for not-yet-merged provisional dependencies.

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
- Required image style anchor, normally L058 references.
- Audio requirements for sentence audio, standalone `charAudio`, `G02` teach audio, and `G05` wrong-choice audio.

For review modules, follow `docs/CURRICULUM_OPERATING_SOP.md` and `docs/CURRICULUM_SCHEMA.md` review-module rules.

## Required Sentence Gates

Before sending a Production handoff:

- Audit every Han character in `text`, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text against `allowedChars`.
- Reject or rewrite any sentence with unlearned Han characters.
- Use Taiwan wording and Taiwan zhuyin only.
- Keep sentences concrete, imageable, and normally 4-12 Han characters.
- Confirm `spokenText` includes exactly the Han characters from `text` in order, without punctuation.
- Confirm every `focusChar` appears in its sentence.
- Confirm current target and recent review coverage follows `docs/SENTENCE_GENERATION_SOP.md`.
- Confirm the teacher approved the final set.

## Production Handoff Rules

The handoff must be one-paste executable. The receiving Production thread must be able to claim the unit and continue without another teacher message.

Every handoff must include:

- Repo URL.
- Assigned production slot A/B/C and exact worktree path.
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
