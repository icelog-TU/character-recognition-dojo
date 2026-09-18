# L456 突 — partial package for Rescue

Status: partial-package. Registry: needs-rework. This is a preservation checkpoint explicitly requested by Package Rescue, not an asset-complete handoff.

Branch: codex/l456-complete-package. Claim: b785569b6f7b07a947e939b7710879c3bbc9e471. Base: 5622c827569df36e09c1767d61f114b35973bbea, official L443 操 / R054. Full allowedChars 453 saved in request/draft. Dependencies L451-L455; provisional 台候演表現; R055/R056 milestone remains a Release blocker. No merge main.

## Preserved work

Teacher-approved five texts, spokenText, displayLines, focusChar and Stage 4 options/indexes are unchanged. Request, generation packet, canonical draft, five WebPs, ten current M4As and nine current alignment records are preserved. Raw MP3s remain local and ignored in curriculum-workflow/audio-inbox/L456/. Exact image prompts/source paths are in L456-image-prompts.json.

S01 style-lock PASS, cast PASS.
S02 style-lock PASS, cast PASS.
S03 style-lock PASS, cast PASS.
S04 style-lock PASS, cast PASS.
S05 style-lock PASS, cast PASS.

Actual exported WebPs compared side by side with full L058 style-only set, refined L115/L118/L119/L128 examples and L154/L162/L163 family identities. No rejected image drafts committed.

## Required audio repair

- char-u7a81.m4a: target is Taiwan ㄊㄨˊ (tu2); current recording is approximately flat-pitched and AI auditory analysis hears tu1.
- L456-S01.m4a, L456-S02.m4a, L456-S05.m4a: 突然 must be tu2 ran2; current audio still flagged tu1. Regenerate each complete utterance from unchanged spokenText, then realign final M4A.
- L456-S01 final 了: Whisper exact-text transcription includes it; a separate auditory model omitted it. Verify complete ending during repair; no human PASS claimed.
- G02 suffix was regenerated independently from exact 然出現一隻小鳥; current Whisper and auditory result match. Preserve initial 然 and do not insert 突 or 後. Other six audio files are preserved without a known tone blocker, but all still need final listening/QA.

## Required timing repair

- S01 Han index 5 突: 2180–2181 ms (1 ms), overlaps next 然 starting 2180 ms.
- S05 Han index 4 突: 1860–1861 ms (1 ms), overlaps next 然 starting 1860 ms.
- S02 Han index 3 突: 1240–2140 ms (900 ms), inspect and regenerate after audio replacement.
- G02 suffix index 1 出: 400–1300 ms (900 ms), review boundary.
- Keep draft sentence audio, teachAudio prefixAudio/suffixAudio, optionAudioVerification and L456-alignment.json synchronized after changes.

## QA and limitations

Startup tools/AI/state checks PASS. Allowed characters, coverage and Stage 4 indices PASS. All ten current M4As decode; codec/duration/hash inventory in L456-technical-qa.json. Technical timing gate failed on impossible short spans. Browser/phone QA not yet performed; G02 recording and stitched replay untested. Human listening not performed. No completed-package or teacher PASS claim.

The next pronunciation-candidate generation command was rejected by automatic approval review with only 'blocked by policy'; no detailed reason returned, and the rejected generation did not execute. Existing files were preserved; no stash/reset/revert or shared-file changes.
