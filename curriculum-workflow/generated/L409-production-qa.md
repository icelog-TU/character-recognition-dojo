# L409 Production QA

packageStatus: asset-complete-package

## Boundary
Started from 2632d2c399197f4d62e13e78faf1854ccce7f219 (L404). At final dependency check, origin/main 346b7af0e22c21d388c92491e0e569b37e62299f contains L405-L408 and R049/R050 after405. dependsOnLessons, provisionalLearnedChars, releaseBlockers are empty. Branch base preserved; no shared curriculum integration shipped.

## Images
All five actual exported 1024x1024 WebP files opened and compared against full L058 style sheet, refined L115/L118/L119/L128 examples, fixed family anchors and Xiaoguang anchor.
- S01 style-lock PASS, cast PASS: girl pauses pencil and asks mother; no readable arithmetic.
- S02 style-lock PASS, cast PASS: toy goes into storage; schoolbooks remain in open bag.
- S03 style-lock PASS, cast PASS: occupied seats, two arrivals, mother greeting, father carrying extra chair; generic guests distinct.
- S04 style-lock PASS, cast PASS: Xiaoguang glasses/uniform, no backpack, hands on knees; girl and tied-hair teacher distinct.
- S05 style-lock PASS, cast PASS: librarian hands blank card to girl with mother; bookshelves establish library.
No rejected image drafts. No readable text/numeral exceptions. WebP sizes 149920/169860/207558/197270/175382 bytes. All below250KB.

## Audio
10 processed M4A files, all ffmpeg decode successfully. gpt-4o-mini-tts via repository pipeline; coral sentence/option/prefix voice, shimmer final G02 suffix, marin final standalone character. Standalone input was only 辦. Wrong choices generated independently from entire locked wrong texts; teach fragments generated independently, never extracted/spliced.
Short-audio drafts were regenerated because recognition of initial consonants/tones was uncertain. Final AI listening heard standalone bàn falling tone (homophone written 半), prefix 書包太重想 xiang3, suffix 法減少東西 fa3, S03 得 as dei3. Unprompted short-character ASR has inconsistent orthography; pronunciation evidence is in SHA256-keyed listening records. This is AI listening, not teacher listening.
Alignment uses whisper-1; explicit fragment lexical prompts disambiguated 想/響 without adding a homophone normalization. Final 9 non-character tracks have complete monotonic 80-900ms charTimings, final tails <=300ms. Only trailing silence was trimmed; no spoken content cut or patched.
S03 zhuyinOverrides[6]=ㄉㄟˇ in locked records and displayed UI.

## Checks
- tools:check, ai:check PASS.
- curriculum:packet generated request output, then packet filled with exact approved records.
- assets:audio PASS; assets:align:ai PASS (fragment prompt documented above).
- assets:images: WebPs already converted with ImageMagick quality82; repo command skipped5, missing0.
- assets:audit --lesson L409 --strict PASS: 5 image references,10 audio references,0 warnings.
- L409-package-audit.mjs PASS: 413 allowed chars; coverage 辦3 法3 減2 加2 越2 弱1; locked records; displayLines join/<=6; paths; timing spans/tails; canonical types; each sentence once; three-choice G03; single-Han G04; G02 exact fragments; G05 full texts.
- validate:production PASS on isolated lesson fixture.
- Shared script syntax checks PASS.
- validate:curriculum PASS on restored 404-lesson baseline (existing target-choice advisories); curriculum:audit-state PASS with expected unintegrated L409 asset-folder warning. Lesson-local audit separately validates L409.
- G04 four single-Han cards filled 加椅子了 and reached next question. G05 all three playback controls exercised; mobile screenshot has no text overlap; browser console warning/error list empty.
- Full verify deferred to Release integration; no permanent production JSON entry is shipped.

## Browser QA Scope
390px-wide isolated lesson fixture: Stage1 character playback completed; all5 Stage3 sentence buttons played and UI reported 句子都聽完了. S03 ㄉㄟˇ visible; no text overlap in inspected mobile layout. G01 correct answer reached next-question control. G02 prefix flow reached press-and-hold cue. G03 rendered three distinct choices 借/拿/辦 and correct 辦 populated blank.
Physical microphone press/hold, learner recording and recording replay were not exercised; no teacher subjective approval claimed. Normal teacher review remains post-merge.

## Shared Script Changes
TTS sentence jobs now honor zhuyinOverrides and accept optional --instructions without changing the spoken input. Alignment adds simplified/traditional mappings 办/辦, 减/減, 体/體, optional lexical --prompt, and case-insensitive --sentence filtering. Defaults and strict transcript-match rejection remain unchanged. Release should review these two shared script changes during integration.
