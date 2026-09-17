# L425 各 Production A package

Status: dependency-blocked-asset-complete.
Branch: codex/l425-complete-package.
Base origin/main: 4eec5178; formal curriculum L001-L415, newest 解,419 learned characters.

## Approved boundary and text

Allowed character union: 426. Provisional only 果教室班組隊; new 各. No other provisional additions.
Coverage: 各4,隊2,組2,班2,室1,教1. L416 果 is an additional vocabulary dependency outside coverage.

- L425-S01: 各班排好隊，回教室。 Spoken: 各班排好隊回教室. Display: 各班排好隊， / 回教室。 Focus: 各.
- L425-S02: 請各組選出一位隊長。 Spoken: 請各組選出一位隊長. Display: 請各組選出 / 一位隊長。 Focus: 隊.
- L425-S03: 這間店有各種水果。 Spoken: 這間店有各種水果. Display: 這間店有 / 各種水果。 Focus: 各.
- L425-S04: 全班同學分組照顧花草。 Spoken: 全班同學分組照顧花草. Display: 全班同學分組 / 照顧花草。 Focus: 組.
- L425-S05: 各位請上車，我們要出發了。 Spoken: 各位請上車我們要出發了. Display: 各位請上車， / 我們要 / 出發了。 Focus: 各.

## Stage 4

G01 S01[0]=各; G02 S03[4]=各, prefix 這間店有 and suffix 種水果 with dedicated generated clips; G03 S05[0]=各, options 各/這/那; G04 S04[5]=組, missing[6,7,8,9]=照顧花草, four single-Han shuffled cards; G05 S02[7]=隊, correct S02 and full-text wrong options 請各班選出一位隊長 / 請各組選出兩位隊長. Five sentences each used once in canonical game order. All index, exact-split and option checks PASS.

## Final assets and validation

5 square1024px WebP;10 mono44100Hz AAC M4A;9 complete AI charTiming records. Total package media1456323 bytes. Each image under250KB. All final files decoded and duration/volume checked. G05 mean-volume spread1.2dB. Nine transcripts exactly match approved spoken text after simplified/traditional normalization; no homophone substitution. Timings are nonoverlapping,within duration,and80-900ms per Han.

Generated using standard repo ai:audio (gpt-4o-mini-tts/coral),assets:audio,assets:align:ai. Temporary pronunciation instructions and simplified normalization were restored after generation. S03 inserted syllable and G02 suffix reading were corrected by regeneration; G05 wrong-one 各 articulation also regenerated. Only measured trailing silence was shortened by copying AAC frames; no speech cuts/splicing.

- tools:check,ai:check,curriculum:audit-state: PASS.
- validate:production on isolated L425 fixture: PASS.
- assets:audit --strict on isolated L425 fixture: PASS,zero warnings.
- Package text/schema/Stage4/file/timing assertions: PASS.
- Full verify and shared JSON/planner/ledger integration belong to Release after prerequisites. Shared tracked files restored byte-for-byte.

## Style-lock and visual cast

- L425-S01: style-lock PASS; cast PASS. Three distinct class queues each led by a separate teacher; classroom campus, recurring girl preserved. Girl bob/pink clip/cardigan/navy skirt consistent; three generic adults distinct.
- L425-S02: style-lock PASS; cast PASS. Three separate group circles, one teacher inviting discussion before captain selection. Girl identity preserved; generic peers; teacher teal/low bun distinct from mother.
- L425-S03: style-lock PASS; cast PASS. Five clear fruit varieties in distinct displays: apples, bananas, grapes, oranges, watermelons. Mother cream blouse/blue trousers and girl match family references.
- L425-S04: style-lock PASS; cast PASS. Three groups caring separate planting areas, one teacher; front girl waters while peers care plants. Girl and generic teacher consistent; group scale and gardening actions match S04 final text.
- L425-S05: style-lock PASS; cast PASS. Guide beside stopped tour bus invites mixed family travelers to open passenger door; boarding visible. Recurring family four match mother/father/girl/older brother anchors; guide distinct.

All final WebP reviewed side by side with all five L058 style-only anchors,refined L115/L118/L119/L128 examples,and L154/L162/L163 family anchors. No readable text/numbers/bubbles. Exact generation prompts and imageNotes are in draft.

## Audio evidence and Browser QA

Actual final WAV input to gpt-audio-1.5 identified 種 zhong3 in S03 and G02 suffix,長 zhang3 in S02 and both wrong options,教 jiao4 in S01,and standalone 各 ge4. This is AI acoustic verification,not human listening. Evidence and final SHA256 hashes are in L425-qa-evidence.json; exact transcription/timing evidence is in L425-alignment-evidence.json.

390x844 Chrome real LessonPanel QA: all10 final M4A play/ended events; G02 stops/highlights 各 and displays 種 ㄓㄨㄥˇ; dedicated prefix/suffix playback completed; G04 照→顧→花→草 completes; G05 all three audio options play and correct selection reaches reward callback.

Tool limitation: sustained press-to-record/recorded-voice replay and direct human listening unavailable; final parent reward-navigation persistence not certified in isolated harness. Physical-phone recording and highlight smoothness are not claimed. Production SOP browser-tooling fallback applies; dedicated audio/timings and technical gates are complete.

## Release blockers and ownership

Latest checked main remains L415. Release must integrate all preceding L416-L424 in order,including explicit vocabulary dependencies L416果,L420教,L421室,L422班,L423組,L424隊; then satisfy R051/R052 after L420 covering L391-L420 before L425 ships. Review pair is outside this package. Release owns current-main revalidation,production JSON/planner/ledger updates,full verify and merge. Production A does not merge main.

Teacher review is post-merge: https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html (select L425), and npm run asset:review-status. Unit tools available after Release merges/deploys: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L425&ref=main .

## Uploaded checkpoint

Assets pushed in commit 7c57c8d0 on codex/l425-complete-package. Browser QA: all 10 final clips played to ended; scope and recording limitations are documented above. Strict intake is rerun against the final pushed tip.
