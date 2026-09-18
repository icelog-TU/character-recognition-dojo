# L468 Production QA

- Unit: L468「該」
- Owner: Production C / parallel-c
- Source: acd71a5bd25e927c209ed749506aea1d3cc643a0, formal L001-L465「招」, 469 learned characters, R056.
- Status: dependency-blocked-asset-complete; Release blockers R057/R058 and L466/L467.

## Curriculum

- Locked allowedChars: 472 unique Han (formal 469 + 絕、活、該).
- Allowed-character, coverage 該4/活2/絕2/招2/待1/期1, sentence Han counts 9/10/11/10/11, spokenText, displayLines, focusChar and canonical Stage 4 indexes: PASS.

## Images

- S01 style-lock PASS, cast PASS: recurring mother and protagonist, distinct generic visiting friend, ownership/correction action clear. S02 style-lock PASS, cast PASS: recurring father demonstrates safe handkerchief-and-ball skill; protagonist asks to learn. S03 style-lock PASS: generic fantasy hero reflects the same bubble spell back onto a comic unharmed monster; initial symbol-bearing draft rejected, final has no text/numbers/punctuation overlays. S04 style-lock PASS, cast PASS: recurring mother compares exactly two picture-only restaurant cards and remains undecided at home. S05 style-lock PASS, cast PASS: recurring mother hands apron to father while protagonist watches; father is visibly next to cook. All five final 1024x1024 WebPs were opened together and compared with L058, refined examples and family anchors; 149-207 KiB each, no readable text or numbers.

## Audio and timing

- OpenAI gpt-4o-mini-tts with Taiwan Mandarin instructions; repository assets:audio produced 9 final mono AAC M4As: standalone 該, five full sentences, independent G02 suffix, and two complete G05 wrong choices. G02 target is sentence-initial, so no empty prefix asset exists. No cutting or splicing.
- Whisper word timestamps aligned five full sentences plus G02 suffix and both G05 wrong choices. Counts match exact Han-only sequences; all char indexes are ordered and non-overlapping. G02 has suffix only. Stage 4 target indexes, missing indexes and partial-order mapping mechanically PASS.
- Teacher repair ref `556b72dcd29947844223d9eaef959ff06d82f170` addressed: L468-S01 was regenerated as a complete sentence with 不 in 不該 audibly ㄅㄨˋ fourth tone; L468-S05 was regenerated as a complete sentence with 星期日 audibly ㄒㄧㄥ ㄑㄧˊ ㄖˋ in Taiwan Mandarin. Fresh alignment and independent AI listening PASS; teacher re-review is pending. This is AI listening evidence, not teacher manual auditory approval.

## Interaction and intake

- Phone-width LessonPanel QA at 390x844: Stage 1 standalone character playback PASS; Stage 2 showed the exact six cards and accepted all three target taps; Stage 3 played all five final sentence assets to completion and reached PASS; Stage 4 G01 target selection PASS. G02 rendered the sentence-initial target, independently generated suffix playback and hold-to-record UI correctly. The automated browser session has no physical microphone input, so microphone capture/replay remains teacher-device QA; G03-G05 payloads, indexes, card order and referenced audio were verified mechanically and by the package validator.
- `npm run curriculum:package-intake -- --unit L468 --ref origin/codex/l468-complete-package`: PASS after teacher-requested S01/S05 audio repair (dependency-blocked-asset-complete; 5 images; 9 audio files; all five canonical Stage 4 game types).
