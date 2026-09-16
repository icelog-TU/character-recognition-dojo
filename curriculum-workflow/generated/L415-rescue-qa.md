# L415 Package Rescue QA — 2026-09-16

Status: asset-complete-package.
Source: origin/codex/l415-complete-package at 59e94f066bec2e29f4325db6f1d2efbeb39b9d51.
Rescue: codex/l415-package-rescue.
Main checked: 182ace5f6686596696c19359038879e9126e45b3, through L414. All declared learner and release-order dependencies are satisfied. Source dependency/provisional fields remain provenance; remaining releaseBlockers is empty.

## Teacher decision and preservation
The teacher listened to six original files and said: 「好棒哦，这一次的音档全部正确耶。」 Accepted S04 and G02 prefix 了 ㄌㄧㄠˇ; S05 (also G05 correct) and both G05 distractors 長 ㄓㄤˇ; S01 neutral 著. L415-teacher-audio-review.json binds this approval to exact source SHA and six SHA-256 hashes, checked against both the displayed local copies and Git source.
All five images, ten M4A files, sentence texts, pronunciation overrides, games and timing metadata remain unchanged. Fifteen-file hash/size evidence: L415-rescue-asset-preservation.json. Total 1,298,926 bytes. No new media generation, processing or alignment. Historical AI diagnostic JSON is retained; its contradictory observations do not override the teacher's explicit acceptance.

## Browser verification
Chrome, local fixture using actual owned assets/draft and latest-main App.tsx/curriculum injected in memory. No shared source or production JSON edited. Phone frame 390x844, tablet frame 820x844. Prior progress seeded for focused Stage4 testing; not a fresh learner progression or reward-amount test.
- Phone G01: 解 accepted, next enabled; S01 neutral 著 displayed.
- Phone G02: 了 ㄌㄧㄠˇ displayed. Dedicated prefix completed; hold cue recorded 1200ms synthetic 440Hz through the actual MediaRecorder path; recording/suffix replay completed, next enabled. This tests browser recording plumbing, not a physical microphone or teacher speech recording.
- Phone G03: three options 看/開/解, correct 解 accepted. Three rows fit 277px bounds with no overflow.
- Tablet G03: three rows fit 335px bounds; screenshot visually confirms no clipped characters/options.
- Phone G04: 用/功/念/書 accepted in order; next enabled.
- Phone G05: 長 ㄓㄤˇ displayed. Each frog/fox/bear playback control entered playing state and returned idle before the next; answer reveal, restart and correct frog selection worked; reward enabled.
- Phone reward: Home button x41/y539.875/w293/h58 within 844px viewport; clicked and observed 第415課完成 plus home lesson list.
- Tablet G05 correct choice/reward spot-check: Home x557.5/y534.469/w184.5/h58, visible in 844px viewport; click returned to home with 第415課完成. Other tablet rounds not repeated.
- Preview ends at L415, so 沒有下一課 is disabled. L416 was not invented or included.
- First browser tab creation timed out; reconnect/retry succeeded. Phone wrapper logs include three asynchronous-listener message-channel errors at one timestamp; tablet logs empty. No observed lesson playback/interaction failure followed them. Do not represent the phone console as error-free.
Source Production Stage1 and five Stage3 playback evidence is retained; not newly repeated in this Rescue. Six-clip teacher auditory approval is distinct from physical-device/microphone QA.

## Changes and validation
Request/draft/packet/own registry row now agree on asset-complete-package. Current Production QA points to the resolved teacher decision and this browser scope. Fixed only the package-local audit reader's CRLF handling so it runs on Windows checkouts; validation rules unchanged.
- tools:check and curriculum:audit-state: PASS (expected unmerged L415 asset warning).
- npm run validate:production: PASS on source baseline through L408.
- Isolated owned-draft production validator and strict asset-format audit: PASS, 5 images/10 audio references, zero warnings; in-memory curriculum override only.
- L415-package-audit.mjs: PASS, approved records, source-boundary418 allowed set, coverage, timing indexes/spans/tails, G02 exact fragments, G05 full texts, three-option G03 and single-Han G04.
- Latest-main allowed-character sweep: PASS,419 including new 解; L409 辦 is now formal but unused.
- Final HEAD and pushed-ref strict intake plus diff check are required and reported with final pushed SHA.
- Full verify skipped: source checkout retains L408 shared curriculum; final integration/verify belongs to Release despite dependencies now being satisfied on main.

## Shared-script review for Release
Original source also carries scripts/generate-audio-drafts.mjs (pronunciation instructions from zhuyinOverrides, optional --instructions) and scripts/align-audio-timings-ai.mjs (simplified/traditional equivalents, optional --prompt and --sentence filter). Rescue does not modify or execute generation/alignment. Reviewed diff contains no homophone mismatch bypass. These shared changes need a separate Release decision; do not wholesale merge this old-base branch or overwrite current shared state.

No SOP change or Supervisor tool exception is needed. Integrate only the intended package after fresh Release intake.

## Image prompt metadata follow-up
Release found that the original five sentence records omitted required imagePrompt. Reproduced all five errors using the unchanged curriculum validator with latest-main182ace5f curriculum plus L415 injected only in memory. Copied each exact existing S01-S05 prompt from L415-image-prompts.md into draft sentences, request approvedSentences and packet approved sentences. Added imagePrompt presence/parity to the package-local audit.
After correction, curriculum validator: PASS, 415 lessons checked; existing earlier-lesson target-character warnings remain, no L415 error. This check exercises actual sequential curriculum validation without modifying production JSON. Final HEAD/pushed-ref strict intake and asset hash preservation are rechecked for this metadata follow-up. All images, audio, timings and six-clip teacher acceptance remain unchanged. Full integrated verify remains Release-owned.
