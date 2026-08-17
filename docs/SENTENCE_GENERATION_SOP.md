# Sentence Generation SOP

This document is the focused SOP for drafting new lesson sentences in `認字練功房`.

Use it whenever a Codex/GPT thread, planner tool, or teacher-facing workflow drafts sentence candidates for a new lesson. The broader production workflow still lives in `docs/CURRICULUM_PRODUCTION_SOP.md`.

## Source Inputs

Before drafting sentences:

1. Run `git fetch origin`.
2. Read latest `origin/main:src/curriculum/sample-lessons.json` for the production boundary. Do not use local `main`, the current checkout, stale chat memory, old screenshots, or unverified branches as the boundary.
3. Report the latest merged lesson id and newest learned character from `origin/main`.
4. Read `docs/CURRICULUM_LEDGER.md` for the merged lesson sequence, recent review pool, visual continuity, and place continuity.
5. Read `docs/PARALLEL_LESSON_REGISTRY.md` if working on any not-yet-merged parallel lesson.
6. Build and use the lesson request's `allowedChars` as the locked character boundary.

If production JSON and Markdown disagree, `src/curriculum/sample-lessons.json` on latest `origin/main` wins.

## Character Boundary

Every display sentence must use only:

- characters already taught before this lesson
- this lesson's current new target character(s)
- explicitly registered provisional learned characters, only when the lesson request lists them for parallel work

`allowedChars` must be built from the complete learned-character set on latest `origin/main`, plus explicitly approved provisional dependency characters, plus the current lesson's new character. It must not be reduced to only recent characters, provisional characters, or the latest theme line.

If a proposed sentence contains any other Han character, stop and identify the unlearned character before generating images, audio, or production curriculum.

Use Taiwan zhuyin only. Do not use Hanyu pinyin in curriculum, prompts, or UI text.

### Full Learned-Character Sweep Gate

This gate is mandatory before word analysis and before sentence drafting.

For every normal lesson, the Editor must review the entire learned-character set from latest `origin/main`, whether it contains 100, 200, 300, 500, or 600 characters. The Editor must not start from the previous 10-20 lessons, the previous-five coverage targets, recent themes, or provisional dependency characters.

Before proposing words or sentences, the Editor must:

1. State the production boundary used, such as `origin/main L001-L234`.
2. State the total number of learned characters being swept.
3. Use the complete learned-character set plus the current target character as the search space for possible words, phrases, scenes, objects, actions, and sentence frames.
4. Explicitly say that the recent coverage targets are only coverage requirements, not the vocabulary search boundary.
5. Identify useful older learned characters or older scene domains that help the current target character form richer natural phrases.

If the Editor cannot show that it considered the full learned-character set, it must stop and redo the sweep before drafting candidates. A sentence set drafted only from the newest few lessons is invalid even if its coverage counts pass.

### Mandatory Allowed-Character Audit

This is a hard gate, not a style preference.

After AI drafts sentence candidates, after the teacher adds custom sentences, and after any Codex/GPT rewrite, audit every Han character in `text`, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text against the lesson request's `allowedChars`.

Teacher-suggested sentences are not exempt. The Editor must check them before accepting them and, if a sentence is over boundary, propose a learned-character rewrite or ask the teacher to change the new-character plan.

If any Han character is not in `allowedChars`, the sentence is rejected. Do not "fix it later" during image prompts, audio generation, or JSON entry. Report the exact sentence, the illegal character(s), and whether the sentence should be rewritten with learned characters or the lesson's `newChars` plan should be changed by the teacher.

For review modules, `allowedChars` means the characters learned by the review milestone, not necessarily latest `origin/main`. Review modules do not introduce new characters. If an overdue review module is produced late, keep the original milestone ceiling:

- For milestone `M = 45, 60, 75, ... 600`, the standard pair may use only characters learned through `M` and must cover the new characters from `M - 29` through `M`.
- Examples: R001/R002 cover L016-L045 using characters through L045; R003/R004 cover L031-L060 using characters through L060; R019/R020 cover L151-L180 using characters through L180; R075/R076 cover L571-L600 using characters through L600.
- There is no extra capstone pair after R075/R076; L600 is the final regular 15-lesson milestone.

Do not use characters learned after the milestone ceiling just because the current repo has later numbered lessons.

For parallel-prepared lessons, provisional learned characters are allowed only when they are explicitly listed in the lesson request and still match latest `origin/main` before merge. Before merging, re-run the audit against the real merged learned-character set.

### Editor Handoff Dependency Gate

This gate is mandatory before the Editor outputs a Production handoff for any normal lesson prepared ahead of `origin/main`.

Coverage targets and allowed-character dependencies are different things:

- Coverage targets answer which recent target characters must be practiced.
- Allowed-character dependencies answer whether every Han character in the approved display text is legal.

Do not derive `dependsOnLessons` or `provisionalLearnedChars` only from the previous-five coverage targets. In parallel production, an approved sentence may use an unmerged character outside the coverage window. That character is still a dependency.

Before final handoff, the Editor must:

1. Run `git fetch origin`.
2. Read latest `origin/main:src/curriculum/sample-lessons.json`.
3. Report the exact `origin/main` commit and latest complete lesson id/new character used as the boundary.
4. Build the merged learned-character set from that `origin/main` production JSON.
5. List the coverage targets separately: current lesson plus previous 1-5 lesson targets.
6. Combine approved S01-S05 `text`, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text, then sweep every Han character.
7. Classify every Han character as one of:
   - already learned in latest `origin/main`
   - current lesson new character
   - provisional character from a specific not-yet-merged lesson
   - fully unlearned
8. Reject the handoff if any fully unlearned character appears. Rewrite the sentence or change the lesson plan before Production sees it.
9. Add every provisional character used by the approved text to `dependsOnLessons` and `provisionalLearnedChars`, even if that character is outside the previous-five coverage targets.
10. Build the final allowed set as `latest origin/main learned chars + provisionalLearnedChars + current new char`, then rerun the audit and report `Editor allowed-character sweep: PASS`.

The handoff must separate these sections:

- `Coverage targets`: current target plus previous five targets, with counts and PASS/FAIL.
- `Additional provisional chars used in display text`: provisional characters outside the coverage window, with sentence ids; write `None` if there are none.
- `Correct dependencies`: final `dependsOnLessons` and `provisionalLearnedChars`.
- `Editor self-check`: `I have verified that every Han character in approved S01-S05 and Stage 4 option text is in latest origin/main learned chars + provisionalLearnedChars + current new char.`

Practical rule: before handoff, never ask only "which recent lessons need coverage?" Always ask "Every single Han character in the five approved display sentences: is it already in latest main, the current new character, or explicitly listed as provisional?"

## Required Coverage

For a normal five-sentence new-character lesson:

- The current lesson target character must appear at least 3 times across the five approved sentences.
- Each target character from the previous 3 lessons must appear at least 2 times across the five approved sentences.
- Each target character from the previous 4th and 5th lessons must appear at least 1 time across the five approved sentences.

Example for L064 after:

- L063 `開`
- L062 `站`
- L061 `坐`
- L060 `去`
- L059 `起`

The L064 sentence set should include:

- L064 target, e.g. `左`: at least 3 occurrences
- `開`, `站`, `坐`: at least 2 occurrences each
- `去`, `起`: at least 1 occurrence each

These are minimums, not writing goals. Do not force every sentence to contain the new target character if that makes the set repetitive or unnatural.

Recalculate coverage after every teacher rewrite, AI rewrite, or manual sentence substitution. Do not rely on old coverage counts after even a small text change. If a strong teacher sentence covers several targets, use the freed sentence slots to improve naturalness, scene variety, or target-phrase diversity rather than adding more forced review characters.

For lessons with more or fewer than five approved sentences, preserve the same intent:

- meaningful repeated exposure to the current target
- strong review of the previous 3 lessons
- light review of the previous 4th and 5th lessons

If a lesson introduces multiple target characters as one natural unit, such as `朋友`, count the unit intentionally. Prefer sentences that practice the target characters together instead of mechanically isolating one half of the word.

## Word-First Drafting

Draft sentences from useful words and short phrases first, not from isolated character-count targets.

Before writing candidate sentences:

1. List natural words or short phrases that combine the current target character with any already learned character. Use the full learned-character set, not only the recent five lessons.
2. Sort the phrase list into useful groups, such as high-frequency life words, fixed collocations, action phrases, scene phrases, abstract-but-worth-teaching uses, and words that are currently not recommended.
3. Mark common good words that cannot yet be used because one or more Han characters are outside `allowedChars`.
4. List natural words or short phrases that combine the current target character with each weak-review character from the previous five lessons.
5. Prefer combinations that a child can understand, hear clearly, and see in a picture.
6. Reject combinations that are technically made of allowed characters but are not natural Taiwan Mandarin.
7. Use the strongest phrase list to build sentences with varied meanings and structures.

Examples:

- For `坐`, useful phrase directions may include `坐起來`, `坐下`, `坐著`, `坐到`, `不可坐`, depending on which characters have already been learned.
- For `左`, useful phrase directions may include `左手`, `左邊`, `門左邊`, `我左邊`.
- For `著`, useful phrase directions may include `看著`, `指著`, `開著`, `坐著`, `站著`, but the sentence set should not overuse only `坐著` and `站著`.

Phrase diversity is the writing goal. Coverage counts are the minimum gate after drafting, not the generator's first move.

The final five-sentence set should normally include:

- several different words or short phrases using the current target character
- at least one phrase that uses the current target with a non-recent learned character, when natural
- useful phrases that connect the current target to previous-five weak-review characters
- sentence patterns that do not all share the same frame

Do not make the whole lesson circle around the previous five characters if the full learned set offers better words. The recent weak-review characters still need coverage, but they should be woven into meaningful phrases rather than repeated mechanically.

During drafting discussion, a useful editor response should include:

- a compact word/phrase analysis before final sentence drafting
- the current candidate sentence set; early rounds should normally include 8-10 candidates before narrowing to five
- a compact coverage table for the current target and previous-five review targets
- Han counts for each sentence, excluding punctuation
- allowed-character audit result, including exact illegal characters when present
- any sentence that feels weak or coverage-driven, plus natural alternatives

Keep this discussion outside the final production handoff code block.

## Full Learned-Set Scene Scan

Every normal lesson must deliberately look beyond the newest few lessons. Before narrowing to five approved sentences, scan the complete `allowedChars` set for scene sources, old actions, old nouns, and old sentence patterns that can support natural uses of the new character.

Useful scene sources often include:

- family life
- school life
- nature and weather
- animals and plants
- body and clothing
- food and meals
- traffic, roads, and travel
- shops and buying/selling
- games and sports
- cleaning and organizing
- time and daily routines
- spatial position and direction
- imagination, speech, recognition, judgment, feelings, and other abstract uses

This is not a fixed checklist. As the curriculum grows, newly learned scene domains must also be considered. The goal is a five-sentence set spread across multiple child-readable life scenes, not five variations of one phrase or one picture type.

When drafting candidates, vary:

- subject or speaker
- scene
- sentence frame
- target-character phrase
- `focusChar`
- concrete visual action

If the first three or four sentences already meet coverage, use the remaining slots for naturalness and scene variety. Do not keep adding review characters mechanically just because the counts already pass.

## Sentence Quality

Coverage does not excuse weak sentences.

Every sentence must be:

- natural Taiwan Mandarin
- clear in meaning
- concrete enough to picture
- useful for a young child who may not read prompts yet
- within 4-12 Han characters, excluding punctuation, unless the teacher explicitly approves otherwise

Prefer visible actions, positions, people, objects, and states. Avoid abstract or underspecified phrases.

For position words such as `左`, `右`, `上`, `下`, `前`, `後`, `裡`, and `邊`, include a concrete reference point when needed:

- Good: `門左邊`, `我左邊`, `你左邊`, `門前`, `家裡`
- Weak: `左邊` by itself when the picture has no clear anchor

For a person's `左邊` or `右邊`, judge by that person's own body, not by the viewer's screen direction. `我左邊` means beside `我`'s left hand. If the character faces the viewer, that may appear on the viewer's right side. Image prompts must state the reference person and anatomical side clearly.

When a sentence has a motion or state change, make the purpose or visual outcome clear when possible:

- Weak: `我站起來去左邊`
- Stronger: `我站起來去門左邊`

Do not write sentences that only exist to satisfy counts. If a sentence feels mechanical, rewrite it even if the coverage math is correct.

## Set Quality

Check the five sentences as a set, not only one by one.

The set should:

- vary sentence patterns
- avoid five near-identical location sentences
- use several different words or short phrases built from the target character
- avoid overusing one target phrase such as only `坐著` / `站著`
- feel like related child-friendly scenes when possible
- keep recurring characters visually consistent
- avoid overusing one easy structure such as `X在左邊`

It is acceptable for one or two sentences not to contain the current target character when that improves naturalness and still keeps the target count at or above the required minimum.

## Spoken Text

`spokenText` is what the audio reads.

Rules:

- It must include every Han character from `text`.
- It may omit punctuation.
- It must not add any Han character not shown in `text`.
- If `text` has punctuation, `spokenText` should remove it without changing the character order.

Example:

```json
{
  "text": "我去開門，你坐下",
  "spokenText": "我去開門你坐下"
}
```

## Focus Character

`focusChar` must appear in the sentence.

Prefer the current lesson target for at least the first few target-practice sentences. Use recent review characters for some Stage 4 or review-focused sentences when that produces a stronger lesson.

Do not set `focusChar` to the current target when the sentence does not contain it.

## Display Lines

Use `displayLines` only when needed for phone layout.

Rules:

- Lines must join exactly back to `text`.
- Each line should stay at or under 5 Han characters when zhuyin is visible.
- `displayLines` affects only visual line breaks; audio and timings still use `text` and `spokenText`.

## Imageability

Before approving a sentence, imagine the picture.

Approve only if the image can clearly show the sentence without relying on written labels, signs, numbers, zhuyin, or UI text inside the image.

If a sentence has a count, contrast, or position, the picture must make it obvious on a phone screen.

For ambiguous, abstract, or role-sensitive sentences, discuss the intended image direction with the teacher before final handoff. Do not wait until Production starts to discover that the picture would be unclear or the role identity would be wrong.

For recurring people and places, use `docs/LESSON_VISUAL_CAST_SOP.md` plus `docs/CURRICULUM_LEDGER.md` visual continuity descriptions. Do not redesign `我`, `你`, `他`, parents, family members, teachers, classmates, elders, passersby, or recurring homes from lesson to lesson. L058 is an image style reference only; it is not permission to copy the L058 adult woman into mother, teacher, passerby, or other unrelated roles.

For every sentence image with people, `imageNotes` must name the intended human role identity, such as protagonist girl, protagonist mother, protagonist father, older brother, teacher, principal, godmother, worker, shop owner or clerk, classmate, elder, passerby, `你` family member, or `他` family member. Avoid vague labels such as "a woman", "an adult", "a person", "a big person", "a classmate", or "a passerby" when the role should have continuity or clear social identity.

If a sentence needs context to be natural, put that context in `imageNotes` or rewrite the sentence. Do not keep a sentence that is only understandable with hidden chat context.

## Stage 4 Plan From Sentences

For a normal five-sentence lesson, design five Stage 4 games and use the five standard game types exactly once:

- `find-character`
- `teach-character`
- `missing-character`
- `partial-order`
- `choose-pronunciation`

Each reviewed sentence must be used by exactly one Stage 4 game. Do not assign two games to the same sentence while another approved sentence receives no Stage 4 practice.

`teach-character` must include a precise `targetCharIndex`. Its `teachAudio` prefix and suffix must be generated from exact fragments around the target character.

For `choose-pronunciation`, finalize the complete `correct`, `wrong-one`, and `wrong-two` option texts before Production makes audio. Wrong-choice audio must be generated from the exact final complete text. Do not ask Production to splice or cut existing sentence audio to make wrong choices.

## Review Checklist

Before sending sentences to image/audio production, verify:

- all display Han characters are allowed
- `text`, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text have been checked against `allowedChars`; any sentence with an unlearned Han character has been rejected or rewritten
- the draft first explored natural target-character words and short phrases from the full learned set
- the draft scanned the full learned set for varied scene sources rather than only recent lessons or one theme line
- the sentence set uses varied target-character phrases rather than one repeated frame
- the current target count meets the lesson minimum
- previous 3 lesson targets each appear at least twice
- previous 4th and 5th lesson targets each appear at least once
- every sentence is 4-12 Han characters, excluding punctuation
- every sentence has clear meaning
- position words have concrete anchors when needed
- the sentence set is not repetitive
- `spokenText` matches `text` without punctuation
- every `focusChar` appears in its sentence
- every sentence with people has explicit role identities in `imageNotes` following `docs/LESSON_VISUAL_CAST_SOP.md`
- the Stage 4 plan uses every reviewed sentence exactly once when the lesson has five reviewed sentences and five sentence games
- `choose-pronunciation` wrong-choice texts are final and ready for exact TTS generation
- the teacher has approved the sentence set

Only after this checklist passes should the lesson proceed to image prompts, AI audio, `teachAudio`, Stage 4 option audio, and AI-aligned `charTimings`.

The final sentence approval report must include:

- the five final `text` values
- Han count for each sentence, excluding punctuation
- current target and previous-five target coverage counts with PASS/FAIL
- any sentence over 12 Han characters, or an explicit note that none exceed 12
- expected allowed-character audit result
- confirmation that every `spokenText` is exactly `text` with punctuation removed and no Han characters added or removed

## Sentence Editor Handoff

When a thread is acting as the sentence editor, its job does not end with five good sentences. After the teacher approves the sentence set, the thread must output a complete production handoff following `docs/CURRICULUM_OPERATING_SOP.md` `Five-Thread Curriculum Workflow`.

The handoff must tell the receiving production thread to build the whole course package, not only media assets. It must also be one-paste executable: the receiving production thread must be told to claim the unit in the repo and then continue automatically, without waiting for the teacher to re-enter that conversation after an "I claimed it" message.

The complete final handoff must be placed inside one Markdown fenced code block using `text`:

````text
```text
...full handoff...
```
````

The teacher copies that single gray block into Production. Keep discussion, coverage recalculation, and sentence-polishing notes outside the block unless they are included as final handoff content.

The handoff must include:

- assigned production slot and exact worktree path from the latest Supervisor/teacher assignment
- target unit id and kind, such as `L127` normal lesson or `R005` review module
- current merged boundary and dependency lessons
- approved new character(s), Taiwan zhuyin, and title, or review coverage range
- locked `allowedChars`, provisional learned characters, and forbidden/unlearned characters
- the Editor Handoff Dependency Gate output: coverage targets, additional provisional chars used outside coverage, final dependencies/provisional learned characters, and Editor self-check
- final approved sentences with `text`, `spokenText`, `focusChar`, optional `displayLines`, and `imageNotes`
- visual cast notes for every sentence that shows people, especially mother, father, teacher, classmate, elder, and passerby roles
- coverage counts for the current target and previous-five review targets
- Stage 4 plan and required `G02`/`G05` audio work
- teacher review instructions: provide the permanent `lesson-asset-review.html` URL and `npm run asset:review-status` command for post-merge repair queue; use the audio-only `audio-review.html` URL only if the teacher explicitly requests pre-merge audio approval
- required repo paths for request, packet, draft, images, audio inbox, final assets, production JSON, planner export, ledger, and registry
- an auto-claim-and-continue block: confirm assigned worktree, run startup checks, stop only on blockers, create the branch from `origin/main`, add/update the registry row as `claimed`, then continue into full package production

The sentence editor must not leave final sentences only in chat. If it cannot write repo files itself, it must explicitly instruct the production thread to create `curriculum-workflow/lesson-requests/L###.json`, `curriculum-workflow/generated/L###-generation-packet.md`, and `curriculum-workflow/drafts/L###-draft.json` before generating or merging assets.

The sentence editor must not design a workflow that requires the teacher to visit the same production conversation twice just to move from "claimed" to "continue." A production thread should pause only for real blockers such as a dirty assigned worktree, failed startup checks, missing approved sentence data, failed dependency/allowed-character audit, or inability to update/push the registry before large asset work.
