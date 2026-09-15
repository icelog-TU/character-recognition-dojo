# L362 Generation Packet - 喜

## Package Status

- Production slot: Production B
- Branch: `codex/l362-complete-package`
- Source boundary: `origin/main` at `496aa87a Integrate lesson L359`
- Package status: `dependency-blocked-asset-complete`
- Learner dependencies: `L360`, `L361`
- Release/playable blockers: `L360`, `R043`, `R044`, `L361`
- Provisional learned characters: `奇`, `驚`
- Formal teacher image/audio review is a post-main workflow; it is not a pre-main Production package gate.

## Character

- New character: 喜
- Zhuyin: 喜 ㄒㄧˇ
- Character audio: /assets/lessons/L362/audio/char-u559c.m4a

## Dependency Metadata

```json
{
  "dependsOnLessons": [
    "L360",
    "L361"
  ],
  "provisionalLearnedChars": [
    "奇",
    "驚"
  ],
  "releaseBlockers": [
    "L360",
    "R043",
    "R044",
    "L361"
  ]
}
```

## Allowed Character And Coverage Audit

- Allowed ceiling: formal learned chars through latest origin/main production JSON L359 plus provisional L360「奇」 and L361「驚」 plus current new char L362「喜」
- Forbidden/unlearned characters in approved text, display lines, focus chars, and Stage 4 option text: none.
- Coverage targets/counts:
  - 喜: 3 PASS
  - 驚: 2 PASS
  - 奇: 2 PASS
  - 怪: 2 PASS
  - 物: 2 PASS
  - 園: 1 PASS
- Display lines: join PASS, each line <= 6 visible characters PASS.
- Han count: every sentence <= 12 Han characters PASS.

## Sentences And Assets

### L362-S01

- Text: 過年時穿紅衣才喜氣。
- Spoken text: 過年時穿紅衣才喜氣
- Focus char: 喜
- Target index: 7
- Display lines: 過年時 / 穿紅衣 / 才喜氣。
- Image: /assets/lessons/L362/images/L362-S01.webp
- Audio: /assets/lessons/L362/audio/L362-S01.m4a
- Duration: 3180 ms
- Char timings: 9
- Image notes: 過年家中或親戚聚會場景，主角小女孩穿著紅色上衣或紅色外套，看起來喜氣；旁邊有家人、年菜或紅色裝飾，但不要可讀春聯、文字、數字或符號。畫面要表現「穿紅衣很喜氣」。

### L362-S02

- Text: 小月很受動物們的喜愛。
- Spoken text: 小月很受動物們的喜愛
- Focus char: 喜
- Target index: 8
- Display lines: 小月很受 / 動物們的 / 喜愛。
- Image: /assets/lessons/L362/images/L362-S02.webp
- Audio: /assets/lessons/L362/audio/L362-S02.m4a
- Duration: 3966 ms
- Char timings: 10
- Image notes: 小月在公園或動物園安全互動區，溫柔地蹲下看小動物，幾隻小動物主動靠近她，例如小狗、小鳥、小兔子或小雞，表現動物們很喜愛她。小月必須使用 public/assets/reference/lesson-cast/xiaoyue.webp，不能畫成主角小女孩或 generic classmate。不要危險大型動物。

### L362-S03

- Text: 這真是一個奇怪的驚喜。
- Spoken text: 這真是一個奇怪的驚喜
- Focus char: 喜
- Target index: 9
- Display lines: 這真是 / 一個奇怪的 / 驚喜。
- Image: /assets/lessons/L362/images/L362-S03.webp
- Audio: /assets/lessons/L362/audio/L362-S03.m4a
- Duration: 4798 ms
- Char timings: 10
- Image notes: 主角小女孩打開禮物盒，看到裡面是一頂可愛怪物造型帽子或怪物手套，表情又驚訝又開心。禮物看起來奇怪但好玩，不恐怖。不要文字卡片、品牌或包裝字。

### L362-S04

- Text: 這本書叫花園裡的小怪物。
- Spoken text: 這本書叫花園裡的小怪物
- Focus char: 怪
- Target index: 9
- Display lines: 這本書叫 / 花園裡的 / 小怪物。
- Image: /assets/lessons/L362/images/L362-S04.webp
- Audio: /assets/lessons/L362/audio/L362-S04.m4a
- Duration: 6048 ms
- Char timings: 11
- Image notes: 主角小女孩正在看一本打開的圖畫書，書頁畫面裡是一個花園和可愛的小怪物。不要讓書上出現可讀書名或文字；用書頁插圖表現「花園裡的小怪物」。

### L362-S05

- Text: 海裡的魚會發光，真驚奇。
- Spoken text: 海裡的魚會發光真驚奇
- Focus char: 奇
- Target index: 9
- Display lines: 海裡的魚 / 會發光， / 真驚奇。
- Image: /assets/lessons/L362/images/L362-S05.webp
- Audio: /assets/lessons/L362/audio/L362-S05.m4a
- Duration: 4893 ms
- Char timings: 10
- Image notes: 海底或水族箱場景，幾條魚身上發出柔和亮光，主角小女孩隔著玻璃或在安全觀察區看得很驚奇。畫面要清楚是發光的魚，不要黑暗恐怖深海，不要文字標籤或說明牌。

## Stage 4 Plan

### L362-G01 - find-character

- Canonical slot: G01 = find-character PASS
- Sentence: L362-S01
- Target char: 喜
- Target index: 7

### L362-G02 - teach-character

- Canonical slot: G02 = teach-character PASS
- Sentence: L362-S02
- Target char: 喜
- Target index: 8
- Teach audio: {"prefixText":"小月很受動物們的","targetText":"喜","suffixText":"愛","prefixSrc":"/assets/lessons/L362/audio/L362-G02-prefix.m4a","suffixSrc":"/assets/lessons/L362/audio/L362-G02-suffix.m4a"}

### L362-G03 - missing-character

- Canonical slot: G03 = missing-character PASS
- Sentence: L362-S03
- Target char: 喜
- Target index: 9
- Missing indexes: 9
- Options: L362-G03-A:喜 | L362-G03-B:奇 (incorrect) | L362-G03-C:客 (incorrect)

### L362-G04 - partial-order

- Canonical slot: G04 = partial-order PASS
- Sentence: L362-S04
- Target char: 怪
- Missing indexes: 4, 5, 9, 10
- Options: L362-G04-A:花 | L362-G04-B:園 | L362-G04-C:怪 | L362-G04-D:物

### L362-G05 - choose-pronunciation

- Canonical slot: G05 = choose-pronunciation PASS
- Sentence: L362-S05
- Target char: 奇
- Target index: 9
- Options: correct:海裡的魚會發光，真驚奇。:/assets/lessons/L362/audio/L362-S05.m4a | wrong-one:海裡的魚會發光，真好看。:/assets/lessons/L362/audio/L362-G05-wrong-one.m4a | wrong-two:河裡的魚會發光，真驚奇。:/assets/lessons/L362/audio/L362-G05-wrong-two.m4a

## Image Production Results

- S01: style-lock PASS; cast PASS, recurring protagonist girl/family, New Year home scene, no readable text.
- S02: style-lock PASS; cast PASS, 小月 matches xiaoyue reference and is distinct from protagonist/generic classmates, no readable text.
- S03: style-lock PASS; cast PASS, recurring protagonist girl, cute strange surprise, no readable text.
- S04: style-lock PASS; cast PASS, recurring protagonist girl, picture-book garden monster shown without readable book text.
- S05: style-lock PASS; cast PASS, recurring protagonist girl in safe aquarium scene, glowing fish clear, no readable signs.

## Audio Production Results

- Generated via repo OpenAI TTS workflow.
- Processed with `npm run assets:audio -- --lesson L362`.
- Aligned with `npm run assets:align:ai -- --lesson L362`.
- Sentence audio exists for S01-S05.
- Standalone char audio exists for `喜`: `/assets/lessons/L362/audio/char-u559c.m4a`.
- Stage 4 teach audio exists for G02 prefix/suffix.
- Stage 4 choose-pronunciation wrong-option audio exists for G05 wrong-one/wrong-two.

## Release Notes

- Release must integrate in playable order: L360, R043/R044, L361, then L362.
- Release owns insertion into production JSON/planner export, ledger update, registry cleanup, final verify, push to main, and deployment checks.
- Post-main teacher review URL after Release merge and deploy: `https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L362&ref=main`.
- Post-main review status command: `npm run asset:review-status -- --unit L362 --ref main`.

## Required Files

- curriculum-workflow/lesson-requests/L362.json
- curriculum-workflow/generated/L362-generation-packet.md
- curriculum-workflow/drafts/L362-draft.json
- curriculum-workflow/audio-inbox/L362/
- public/assets/lessons/L362/images/L362-S01.webp
- public/assets/lessons/L362/images/L362-S02.webp
- public/assets/lessons/L362/images/L362-S03.webp
- public/assets/lessons/L362/images/L362-S04.webp
- public/assets/lessons/L362/images/L362-S05.webp
- public/assets/lessons/L362/audio/L362-S01.m4a
- public/assets/lessons/L362/audio/L362-S02.m4a
- public/assets/lessons/L362/audio/L362-S03.m4a
- public/assets/lessons/L362/audio/L362-S04.m4a
- public/assets/lessons/L362/audio/L362-S05.m4a
- public/assets/lessons/L362/audio/char-u559c.m4a
- public/assets/lessons/L362/audio/L362-G02-prefix.m4a
- public/assets/lessons/L362/audio/L362-G02-suffix.m4a
- public/assets/lessons/L362/audio/L362-G05-wrong-one.m4a
- public/assets/lessons/L362/audio/L362-G05-wrong-two.m4a
- docs/PARALLEL_LESSON_REGISTRY.md
