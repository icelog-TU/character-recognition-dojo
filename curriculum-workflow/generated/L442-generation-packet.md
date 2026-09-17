# L442 機 Production A package

Status: dependency-blocked-asset-complete.
Branch: codex/l442-complete-package.
Base origin/main: 5ab2118f955437e32e0921f7c4b633261ba03c50; formal L001-L435, latest助,439 learned Han; R053/R054 merged and resolved.

## Approved boundary and source

Allowed-character array is fully expanded in request: 445 distinct Han. Only provisional 修習練運賽 plus new機. Coverage 機4,賽2,運2,練2,習2,修1; all minima met. Han counts 12/11/8/8/12; displayLines join exactly and each line is at most six visible characters.

- L442-S01: 影印機不能正常運轉，要修理。 Spoken: 影印機不能正常運轉要修理. Lines: 影印機不能 / 正常運轉， / 要修理。 Focus: 機.
- L442-S02: 這些水果是用飛機運來的。 Spoken: 這些水果是用飛機運來的. Lines: 這些水果 / 是用飛機 / 運來的。 Focus: 機.
- L442-S03: 爸爸用手機看球賽。 Spoken: 爸爸用手機看球賽. Lines: 爸爸用手機 / 看球賽。 Focus: 機.
- L442-S04: 我練習用手機照相。 Spoken: 我練習用手機照相. Lines: 我練習 / 用手機照相。 Focus: 機. Override: 相[7]=ㄒㄧㄤˋ.
- L442-S05: 這場練習賽，我們全隊都上場。 Spoken: 這場練習賽我們全隊都上場. Lines: 這場練習賽， / 我們全隊 / 都上場。 Focus: 賽.

## Stage 4

G01 S01[2]=機. G02 S03[4]=機 with independent prefix 爸爸用手 and suffix 看球賽. G03 S02[7]=機, options 場/機/車 with specified IDs. G04 S04[5]=機, missing[4,5,6,7]=手機照相, shuffled options 照/手/相/機 and correctOrder 2/0/3/1; 相 retains ㄒㄧㄤˋ. G05 S05[4]=賽; correct S05; wrong-one changes 我→你 and wrong-two changes 上→下; all three are 12 Han and independently mapped. Canonical order,five sentences used exactly once,index/split/option assertions PASS.

## Assets and technical validation

5 square 1024px WebP,10 mono 44100Hz AAC M4A,9 complete AI timing records; media total 1355575 bytes. Every image <=250KB; package below2MB target. Standard repo ai:audio,gpt-4o-mini-tts/coral,assets:audio and assets:align:ai used. Measured tail-only silence shortened with AAC frame copy; no syllable editing/splicing. All final audio decoded; G05 mean-volume spread 0.8dB. Whisper transcripts match exact spokenText after simplified/traditional normalization; final G02 suffix is directly 看球賽 with no normalization exception. Timings are increasing,within duration,80-900ms per Han; no manual timing changes.

- Startup tools:check,ai:check,curriculum:audit-state: PASS.
- Package-local text,boundary,schema,Stage4,file,timing assertions: PASS.
- validate:production on isolated L442 fixture: PASS.
- assets:audit --strict on isolated L442 fixture: PASS,zero warnings.
- Full verify belongs to Release after integration. All temporary changes to shared production JSON and generation/alignment scripts restored.

## Per-image style-lock and cast

- L442-S01: style-lock PASS; cast PASS. Broken copier with visibly jammed wrinkled paper; distinct clerk examines while recurring girl waits with documents; no smoke/sparks or repaired-state output. Recurring girl matches bob/pink clip/pink cardigan/cream top/navy skirt/pink shoes; generic clerk clearly distinct.
- L442-S02: style-lock PASS; cast PASS. Supermarket remains main scene; fruit already displayed; bubble contains cargo airplane and fruit crates; no airport loading state or price/origin text. Recurring mother cream blouse/blue trousers and recurring girl match family anchors.
- L442-S03: style-lock PASS; cast PASS. Father holds phone horizontally in living room; screen visibly shows basketball players and hoop without scores or UI. Recurring father blue shirt/khaki trousers matches family anchor; girl is incidental and consistent.
- L442-S04: style-lock PASS; cast PASS. Girl actively photographs a real flower; phone shows matching flower composition; mother coaches beside her. Recurring girl and mother match family anchors; no selfie/call/review state.
- L442-S05: style-lock PASS; cast PASS. Exactly three pink-team children and exactly three distinct blue-team children all visible on field; one adult coach; no bench/substitutes. Recurring girl remains identifiable by dark bob,pink clip and pink sports outfit; all generic children and coach are distinct.

Every actual final exported WebP was compared side by side with the reference composite containing all mandated L058 style-only, refined L115/L118/L119/L128, and family L154/L162/L163 anchors. S05 first generation was rejected because only two opponents were unambiguous; regenerated final shows exactly three pink teammates and three blue opponents. No text or number exception. Built-in imagegen used with the attached reference composite; exact final prompts are stored in the draft imagePrompt fields.

## Audio evidence and browser QA

Final M4A files were supplied as actual audio input to gpt-audio-1.5. 機 ji1 and S04 照相 xiang4 confirmed; 賽 sai4,運 yun4,修 xiu1,習 xi2,練 lian4 also confirmed. G02 suffix was regenerated until both Whisper and acoustic AI returned 看球賽 / kan4 qiu2 sai4. This is AI acoustic evidence, not human listening. Detailed responses and SHA256 are in L442-qa-evidence.json; timing evidence is in L442-alignment-evidence.json.

Chrome at 390px content width using the real LessonPanel: all10 clips played to ended; G01機 selection completed; G02 prefix stops at機 and dedicated suffix played; G03機 card completed; G04 手→機→照→相 completed with 相 ㄒㄧㄤˋ; G05 all three mapped clips played and correct S05 granted reward; 下一課 and 回首頁休息 appeared and next emitted navigation next. Local harness simulates prerequisites and parent completion only; no production progress or cloud writes.

Tool limitation: sustained press-to-record and recorded-voice replay were not operated because microphone access was not pre-authorized in the browser session. Physical-phone microphone and highlight smoothness,plus direct human listening,are not certified. Production SOP browser-tooling fallback applies after technical gates; no recording QA PASS is claimed.

## Release dependencies and ownership

Explicit vocabulary dependencies L437修,L438習,L439練,L440運,L441賽. Release must first integrate all preceding L436-L441 in playable order. R053/R054 are already merged and resolved and are not blockers. Production A does not merge main; Release owns latest-main revalidation,shared production JSON/planner/ledger and full verify.

After Release merges and deploys,teacher review entry: https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html ,select L442; status via npm run asset:review-status. Pre-merge package preview uses the exact pushed SHA recorded below.

## Upload checkpoint

Pushed asset commit and strict package-intake result will be recorded after upload.
