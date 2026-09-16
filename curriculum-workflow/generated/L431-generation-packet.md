# L431 由 Production A package

Status: dependency-blocked-asset-complete.
Branch: codex/l431-complete-package.
Base origin/main: f4bc071d; formal L001-L420,latest教,424 learned Han; latest review R050 after405.

## Approved boundary and source

Allowed-character array fully expanded in request:430 distinct Han. Only provisional 輪員自己主 plus new由. 活 and於 are not introduced. Coverage 由3,主2,己2,自3,員1,輪1; all minima met. Han counts10/11/11/10/8; displayLines join exactly,each at most6 visible characters.

- L431-S01: 主人不在，由我照顧小狗。 Spoken: 主人不在由我照顧小狗. Lines: 主人不在， / 由我照顧 / 小狗。 Focus: 由.
- L431-S02: 店員說，這些花可以自由選。 Spoken: 店員說這些花可以自由選. Lines: 店員說， / 這些花可以 / 自由選。 Focus: 由.
- L431-S03: 我自己選的書，主角是小魚。 Spoken: 我自己選的書主角是小魚. Lines: 我自己 / 選的書， / 主角是小魚。 Focus: 主.
- L431-S04: 我會自己穿衣，不用幫忙。 Spoken: 我會自己穿衣不用幫忙. Lines: 我會 / 自己穿衣， / 不用幫忙。 Focus: 己.
- L431-S05: 我們輪流，由你先玩。 Spoken: 我們輪流由你先玩. Lines: 我們輪流， / 由你先玩。 Focus: 由.

## Stage 4

G01 S02[9]=由,find-character,no option cards. G02 S01[4]=由,prefix主人不在,suffix我照顧小狗,dedicated exact-fragment audio without由. G03 S05[4]=由,options由/給/和. G04 S03[6]=主,missing[8,9,10]=是小魚,three single-Han shuffled cards and correctOrder0/1/2. G05 S04[3]=己,correct S04 我會自己穿衣不用幫忙; wrong1 我會自己洗臉不用幫忙; wrong2 我會自己穿鞋不用幫忙. All10Han,wrong options differ by2/1Han; each complete wrong text generated independently. Correct option explicitly references S04,notS05. Canonical order,five sentences used exactly once,index/split/option checks PASS.

## Assets and technical validation

5 square1024px WebP,10 mono44100Hz AAC M4A,9 complete AI timing records; media total1191694bytes. Each image <=250KB; package below2MB target. Standard repo ai:audio,gpt-4o-mini-tts/coral,assets:audio and assets:align:ai used. Tail-only measured silence shortened using AAC frame copy; no syllable editing/splicing. All final audio decoded,durations/volume checked; G05 mean-volume spread1.5dB. All9 transcripts match exact spokenText using simplified/traditional normalization; S01/G02-prefix context 主人不在，照顧小狗。 resolves 在/再 transcription ambiguity without altering approved text. Timings nonoverlapping,within file duration,80-900ms per Han; no manual timing changes.

- tools:check,ai:check,curriculum:audit-state: PASS.
- Package-local text,boundary,schema,Stage4,file,timing assertions: PASS.
- validate:production on isolated L431 fixture: PASS.
- assets:audit --strict on isolated L431 fixture: PASS,zero warnings.
- Full verify belongs to Release after meaningful production integration. All own temporary changes to shared JSON and generation/alignment scripts restored.

## Per-image style-lock and cast

- L431-S01: style-lock PASS; cast PASS. Neighbor puppy receives girl-placed kibble bowl with mother supervising; portable carrier,water bowl and dog bed; owner absent. Recurring mother and girl match family references.
- L431-S02: style-lock PASS; cast PASS. Girl chooses among offered flower buckets; clerk gestures and prepares a stem; mother accompanies; no price/free-gift text. Clerk auburn bun/green apron distinct from recurring mother.
- L431-S03: style-lock PASS; cast PASS. Girl shows father an open storybook and points to central small fish in connected underwater illustration; no text,aquarium or drawing action. Father blue shirt/khaki trousers and recurring girl match family anchors.
- L431-S04: style-lock PASS; cast PASS. Fully clothed girl confidently puts on pink cardigan herself; mother stands with hands lowered and smiles. Stable girl bob/pink clip/navy skirt and mother cream blouse/blue trousers.
- L431-S05: style-lock PASS; cast PASS. Girl hands the single remote to recurring you boy and waits,one toy car ahead; friendly turn-taking. Recurring you boy sky-blue shirt,green shorts,blue shoes,tousled dark hair; not older brother/Xiaoguang.

Each final WebP compared side by side with all five L058 style-only references,refined L115-S01/S02,L118-S02,L119-S01,L128-S03,and family L154-S01,L162-S04,L163-S02. Recurring you boy also checked against L012-S01 continuity. No text,number,or sentence-length exceptions. Built-in imagegen; exact prompt set and imageNotes saved in draft; final images public/assets/lessons/L431/images/.

## Audio evidence and Browser QA

Final audio supplied as WAV input to gpt-audio-1.5 for acoustic pinyin verification;由you2,己ji3,and S03角jiao3 confirmed. S03 regenerated after initial角jue2. AI acoustic evidence is not human listening. Detailed responses and final audio SHA256 in L431-qa-evidence.json; full transcription/timing evidence in L431-alignment-evidence.json.

Chrome390x844 real LessonPanel: all10clips played to ended; G01/G03 correct由 selection completed; G02 helper stops at由 and separate exact prefix/suffix play; G04 是→小→魚 completed and角showsㄐㄧㄠˇ; G05 all three mapped clips play,correctS04 grants reward; after animation red下一課 and white回首頁休息 visible,next click emits navigation next. Local harness simulates prerequisites and parent completion only; no production progress or cloud writes.

Tool limitation: sustained press-to-record and recorded-voice replay not operable through current browser tools. Physical-phone microphone and highlight smoothness,plus direct human listening,are not certified. Production SOP browser-tooling fallback applies after technical gates. No full recording QA PASS is claimed.

## Release dependencies and ownership

Explicit vocabulary dependencies L426輪,L427員,L428自,L429己,L430主. Release must first integrate all preceding L421-L430 in playable order,plus R051/R052 afterL420 coveringL391-L420. R051/R052 assigned separately,not part of this package. These dependencies block Release only. Production A does not merge main; Release owns latest-main revalidation,production JSON/planner/ledger and full verify.

After Release merges and deploys,teacher review entry: https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html ,selectL431; status via npm run asset:review-status. This page is not claimed available for L431 before Release. Unit URL usable after Release: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L431&ref=main .

## Upload checkpoint

Pushed asset commit and strict package-intake result recorded at upload checkpoint.
