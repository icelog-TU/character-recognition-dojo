# L465「招」Production E package

Status: `dependency-blocked-asset-complete`.

L465 is based on `origin/main@c130f105f1808588cb22f237519234527643b8fe`, where formal production ends at L461「文」and R056. The package preserves the teacher-approved 469-character ceiling: 465 formally learned characters, provisional `日、期、待`, and new `招`. It depends on L462-L464. R057/R058 are future Release sequencing work and are outside this package.

## Final content and Stage 4

The five approved sentences, line breaks, image notes, coverage counts and canonical G01-G05 plan match the handoff. The allowed-character sweep, Han-only indexes, G03 three-choice schema, G04 single-Han order mapping and G05 one-character near misses pass mechanically. No student-facing text uses `牌、式、呼、絕、昨` or another out-of-ceiling character.

## Images

- S01 style-lock PASS, cast PASS: protagonist girl actively hosts fixed Xiaoyue and Xiaoguang; mother remains background support.
- S02 style-lock PASS, cast PASS: fixed mother and girl stay on the sidewalk while the girl signals an approaching closed-door bus.
- S03 style-lock PASS, cast PASS: fixed mother/girl meet a distinct generic registration worker; blank form and empty classroom establish enrollment.
- S04 style-lock PASS, cast PASS: fixed family of four waits safely on a broad railed mountain platform before the sun disk appears.
- S05 style-lock PASS, cast PASS: fixed girl faces a clearly contained, child-safe game battle on the television.

All five final WebPs were viewed together and compared with the L058 style-only references, refined proportion examples, family anchors, and S01 Xiaoyue/Xiaoguang references. All are square 1024px, 113-148KB, with safe compositions and no readable text, numbers or logos. No image draft was rejected.

## Audio and timing

Ten final files were generated with OpenAI `gpt-4o-mini-tts` / `coral`, then processed by `npm run assets:audio -- --lesson L465` to mono AAC 44.1kHz M4A. The standalone `招`, five sentences, G02 prefix/suffix and both complete G05 wrong sentences were generated independently; no audio was cut or spliced.

The first S01 attempts were rejected because independent transcript alignment heard `上午`; S01 and G02 prefix were regenerated with explicit `下午 ㄒㄧㄚˋ ㄨˇ`. Initial G05 wrong candidates were also rejected for an added `一` and a long pause, then regenerated as exact eight-Han whole sentences. Final exact-text alignment passes all nine timing-bearing tracks. Independent `gpt-audio-1.5` listening passes all ten M4As, including `招 ㄓㄠ`, `期 ㄑㄧˊ`, `還 ㄏㄞˊ`, `待 ㄉㄞˋ`, and complete final syllables. G05 mean-volume spread is 1.1dB.

## Verification scope

Lesson-local `validate:production` PASS. Lesson-local strict asset format audit PASS with 5 image references, 10 audio references and zero warnings. Browser playback QA was not certified because this control surface has no reliable computer-audio return or physical-phone microphone channel; live highlight synchronization and G02 phone recording/replay remain unverified. `verify` is skipped because this dependency-blocked Production package intentionally leaves shared production JSON, planner and ledger to Release.

## Pushed package intake evidence

`npm run curriculum:package-intake -- --unit L465 --ref origin/codex/l465-complete-package --strict` passed at `021ad3a667ca2af8d32e1a7bbbbd29700bf3619e`: package status `dependency-blocked-asset-complete`, 5 images, 10 audio files, canonical Stage 4, zero warnings.

## Teacher audio repair after ref 1656891f23e9ebe0858b553e94f89cca31a1d9b3

Teacher review found Mainland-leaning delivery and 期 sounding like 七 in `L465-S01.m4a` and `L465-G02-prefix.m4a`. Both were regenerated as complete audio units with OpenAI `gpt-4o-mini-tts` / `shimmer`, explicit natural Taiwan Mandarin, and `星期日 ㄒㄧㄥ ㄑㄧˊ ㄖˋ`. No cutting or splicing was used. Final processed M4As were re-aligned. Independent `gpt-audio-1.5` reports 期 as rising second tone like 奇, 日 and overall accent as Taiwan-natural, exact wording, and no defects. Renewed teacher listening is pending on the repaired immutable commit.
