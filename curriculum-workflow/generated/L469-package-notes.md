# L469 應 Production D package

Status: needs-rework

Branch codex/l469-complete-package. Claim e266eefc; pushed assets checkpoint 1624da90c9041b17c24fc8c1f24ad8ec91972924. Base acd71a5bd25e927c209ed749506aea1d3cc643a0, formal L465 招 / R056, 469 learned characters. Full allowedChars 473 = formal 469 + 絕活該 + 應. Dependencies L466/L467/L468 and R057/R058 release milestone. No main integration or shared app changes.

## Required shared-app follow-up

Browser QA found G04 initial cards already in correct order 拿/手/絕/活. The approved stored option order remains 絕/拿/活/手 with correctOrder 2/0/3/1. Source-backed deterministic reproduction of stableShuffledOptions in src/App.tsx:6613 with seed L469:L469-G04:L469-S03 yields correctOrder [0,1,2,3]. The helper prevents an unchanged input permutation but does not prevent the correct-answer permutation. This violates CURRICULUM_PRODUCTION_SOP initial partial-order shuffle requirement. Shared-app owner must repair the permutation guard, then rerun L469 G04. Production does not alter the teacher-approved options/ids to mask the shared behavior. Package is not represented as dependency-blocked-asset-complete.

## Image review

- S01 style-lock PASS; cast PASS. Girl rests after exercise, ball put down, fixed mother hands water bottle; no illness/running.
- S02 style-lock PASS; cast PASS. Awake low-energy puppy with open eyes ignores nearby ball; fixed girl and mother care, no diagnosis/emergency.
- S03 style-lock PASS; cast PASS. Distinct generic adult with both ordinary hands on lap, toes grip pen at fixed low desk; paper only beginning ink dab, no readable marks; fixed girl watches.
- S04 style-lock PASS; cast PASS. Only fixed girl and striped-shirt older brother; TV hero charging attack while monster remains upright; no text or damage numbers.
- S05 style-lock PASS; cast PASS. Fixed father and girl wait; distinct generic receptionist attends telephone facing away from visitors; no response gestures.

All five exported WebPs compared side by side with L058 style-only set, refined L115-S01/S02,L118-S02,L119-S01,L128-S03 and family L154-S01/L162-S04/L163-S02. Built-in image_gen used; S03 paper marks removed and S04 extra child removed. Final 1024-square WebPs all below 250KB. Total lesson media 1458886 bytes.

## Audio and timings

Ten final M4As, mono AAC 44100Hz, decode and volume gates PASS. G05 mean-volume spread 0.2dB. Standalone 應 1277ms, independently heard ying1; level acoustic contour supports first tone. S01/S02 應該 ying1, S05 回應 ying4; indexed zhuyinOverrides preserved at 3/5/10. Independent G02 prefix 接待人員忙著通話沒回 ends 回 only; suffix 我 complete and audible to AI analysis, mean -16dB, peak -2dB. G05 O1 references S04, two wrong full utterances independently generated. Nine exact-text final-file AI alignments; prompted realignment repaired short/overlapping spans. No speech extraction/splicing. S04 independent audio-model transcript inserts 一 but its pinyin does not; two Whisper transcripts match exact approved text. Raw AI output retained, no human listening approval claimed.

## Browser QA

390x844 phone-width UI: Stage 1 playback/主讀音 and Stage 2 3/3 completed; Stage 3 all five card controls played, layouts and active highlights inspected; S05 ㄧㄥˋ visible. G01/G03 completed; G02 red target and answer reveal ㄧㄥˋ inspected, replay control used; sustained recording and stitched replay untested because supported browser APIs lack press-and-hold recording. SOP browser fallback recorded, no human listening or ear-verified synchronization claimed. G04 accepts all four correct placements but initial-order defect above needs shared-app correction. G05 all three reader controls clicked, wrong fox red/correct frog green. Preview uses full canonical isolated lesson; old-character zhuyin absent only in this fixture. Temporary tab closed, viewport reset, preview stopped; shared curriculum/scripts restored.

## Verification

Startup tools:check, ai:check and curriculum:audit-state PASS. Allowed characters, coverage, display lines, Han counts and Stage 4 mapping PASS. Lesson-local validate:production PASS; all media decode/format/size/volume gates PASS. Final strict pushed-ref intake result is recorded separately; needs-rework is intentionally retained while shared-app QA finding remains. Full integration and npm run verify belong to Release.

Final lesson-local strict assets:audit PASS (5 images, 10 audio, 0 warnings); unchanged main baseline validate:production PASS.
