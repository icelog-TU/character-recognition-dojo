# L476「故」Production E package

Status: `dependency-blocked-asset-complete`.

L476 is based on `origin/main@33ba62a69df2de88e8aaa49a2dd45c4347c540f7`, where formal production ends at L465「招」and R056. The package preserves the teacher-approved 476-character ceiling: 469 formally learned characters, provisional `答、題、案、反、而、且`, and new `故`. Release blockers are R057/R058 and L470-L475.

## Final content and Stage 4

The five approved sentences, line breaks, image notes, pronunciation overrides, coverage counts and canonical G01-G05 plan match the handoff. The allowed-character sweep, Han-only indexes, G03 choices, G04 single-Han order mapping and G05 near misses pass mechanically. S02 uses the final teacher-approved cold-weather deliberate opposite-speech scene; abandoned joke concepts were not used.

## Images

- S01 style-lock PASS, cast PASS: fixed Xiaoguang writes and illustrates the same storybook while the recurring protagonist watches.
- S02 style-lock PASS, cast PASS: the fixed sporty boy performs in a cold park; fixed Xiaoyue and the protagonist laugh, and the hot-weather thought bubble remains separate.
- S03 style-lock PASS, cast PASS: the recurring protagonist and father safely handle one large, thick storybook.
- S04 style-lock PASS, cast PASS: the recurring protagonist exposes the patterned front and blank reverse of one continuous sheet.
- S05 style-lock PASS, cast PASS: the recurring protagonist and father play a supportive image-only guessing game.

All five final WebPs were viewed together and compared with L058, refined proportion references and relevant cast anchors. They are square 1024px, 127-211KB, phone-readable and contain no readable text or numbers. No image draft was rejected.

## Audio and timing

Ten final files were generated with OpenAI `gpt-4o-mini-tts` / `shimmer`, then processed by `npm run assets:audio -- --lesson L476` to mono AAC 44.1kHz M4A. Standalone `故`, five sentences, both G02 fragments and both full G05 distractors were generated independently without cutting or splicing.

The first S04 audio was rejected because `空白` used first-tone ㄎㄨㄥ and the clause pause was too long. It was regenerated as a complete sentence using spoken homophone `控白` to force Taiwan ㄎㄨㄥˋ. The first G05 wrong-one was rejected because it added `一` after `這`; it was regenerated as the exact eleven-Han sentence. Final exact-text alignment covers all nine timing-bearing tracks. Independent `gpt-audio-1.5` listening passes all ten M4As, including `故` ㄍㄨˋ, S03 `重` ㄓㄨㄥˋ, S04 `空白` ㄎㄨㄥˋ ㄅㄞˊ, S05 `還` ㄏㄞˊ and `答案` ㄉㄚˊ ㄢˋ.

## Verification scope

This is a new full lesson package, so lesson-local request/package audit, lesson-local production validation, strict asset-format audit and pushed-branch package intake are required. Full `npm run verify` is not applicable because the dependency-blocked package intentionally leaves shared production JSON, planner and ledger to Release. Browser playback QA was not certified because this control surface has no reliable computer-audio return or physical-phone microphone channel; live highlight synchronization and G02 phone recording/replay remain unverified. Teacher human image/audio review remains pending.

Release owns production JSON, planner, ledger, review-pair sequencing, integration and deployment.

## Pushed package intake evidence

Asset package commit `d25524ba1c180dc16cd9695455c0eba2044ee25c` passed `npm run curriculum:package-intake -- --unit L476 --ref origin/codex/l476-complete-package --strict`: status `dependency-blocked-asset-complete`, 5 images, 10 audio files, canonical Stage 4 and zero blocking defects.

## Targeted teacher repair (2026-09-19)

Teacher review at `3ae5ee3c1d6d4f71dfc2836731dbd2ec16dc7931` requested two underlying asset changes. S04 was regenerated so one continuous floral sheet has an unmistakable curled page-turn arc: the flat front is patterned and the lifted reverse is blank. S05 was regenerated as a complete sentence; G05 correct reuses the same file. Independent final-M4A review heard exact `這個問題我還沒想到答案`, Taiwan Mandarin, with 問 as falling fourth tone (問, not 溫), 題/還/答 as second tone, and no defects. Only S05 timing was regenerated. Renewed teacher visual/listening acceptance is pending.

Targeted repair commit `8078d9e45e2ea15b812f6efd2badba8d2dd138ac` passed pushed strict package intake: status `dependency-blocked-asset-complete`, 5 images, 10 audio files, canonical Stage 4 and zero blocking defects.

## Second S04 visual repair (2026-09-19)

Teacher accepted the repaired S05/G05-correct audio, so audio and timing were left unchanged. The first page-turn repair at `55b1eb9d3add0c563b6c670d18c329cc8e110b65` was rejected as visually strange. S04 now follows the teacher's two-sheet proposal: a separate flat sheet displays the complete floral front, while a second matching sheet is lifted to display the blank reverse with a narrow curled floral edge. Renewed S04 visual acceptance is pending.

Second S04 repair commit `67a3b8c971bf4cb032ec97e30e93a43711364764` passed pushed strict package intake with 5 images, 10 audio files, canonical Stage 4 and zero blocking defects.

## Third S04 visual repair (2026-09-19)

Following teacher feedback at `420d703ad24e2486f395ee969751996597097ad9`, every attempted floral detail was removed from the sheet held up by the girl. S04 now shows one flat floral sheet on the left and one completely plain white held sheet on the right. Audio and timing remain unchanged and the teacher has accepted the repaired audio. Renewed S04 visual acceptance is pending.

Third S04 repair commit `102225fa350e469d96ade88c779f4eb762ddb434` passed pushed strict package intake with zero blocking defects.

## Hands-only S04 visual repair (2026-09-19)

Following teacher feedback at `4dbab67dd91dcced827d3e4e4c0aa7f87e679e43`, S04 was rebuilt from the supplied physical-paper composition reference. The close-up contains only a wooden tabletop, one continuous sheet and two hands: its floral front lies flat at the rear while the broad lifted foreground shows the completely blank white reverse. No person, room props, tools or extra paper appear. Audio and timing remain unchanged and teacher-accepted. Renewed S04 visual acceptance is pending.

Hands-only S04 repair commit `9baf9e9cec2a1d42d5d250203df68e0f7bc92382` passed pushed strict package intake with zero blocking defects.

## Reference-matched S04 visual repair (2026-09-19)

Following teacher feedback at `65b8bb3db678987e91784613f093ec8afd75a72b`, S04 was rebuilt to closely match the newly supplied physical folding-paper reference while retaining the lesson watercolor style. The top-down scene shows only a wooden table and two hands: patterned folded sections remain at left and frame a large clean white reverse at right. Audio and timing remain unchanged and teacher-accepted. Renewed S04 visual acceptance is pending.

Reference-matched S04 repair commit `1f31d76e5dae14d782eb51ecd3425283ee36f958` passed pushed strict package intake with zero blocking defects.
