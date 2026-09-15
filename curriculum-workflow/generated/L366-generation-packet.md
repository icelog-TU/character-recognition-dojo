# L366 Generation Packet - 吧

## Package Status

- Production slot: Production B
- Branch: `codex/l366-complete-package`
- Source boundary: `origin/main` at `4d3d883d Integrate lesson L365`
- Package status: `asset-complete-package`
- Learner dependencies: none
- Release/playable blockers: none known
- Provisional learned characters: none
- Formal teacher image/audio review is a post-main workflow; it is not a pre-main Production package gate.
- Browser QA fallback note: non-browser technical gates completed for files, formats, decode, timings, Stage 4 audio, allowed characters, and validators.

## Character

- New character: 吧
- Zhuyin: ㄅㄚ˙
- Character audio: `/assets/lessons/L366/audio/char-u5427.m4a`

## Allowed Character And Coverage Audit

- Allowed ceiling: formal learned chars through latest origin/main production JSON L365 plus current new char L366「吧」
- Forbidden/unlearned characters in approved learner-facing text, focus chars, display lines, and Stage 4 option text: none.
- Coverage targets/counts:
  - 吧: 5 PASS
  - 但: 2 PASS
  - 笑: 4 PASS
  - 歡: 2 PASS
  - 喜: 3 PASS
  - 驚: 1 PASS
- Display lines: join PASS, each line <= 6 visible characters PASS.
- Han count: every sentence <= 12 Han characters PASS.

## Sentences And Assets

### L366-S01

- Text: 你喜歡公園吧？
- Spoken text: 你喜歡公園吧
- Focus char: 吧
- Target index: 5
- Display lines: 你喜歡 / 公園吧？
- Image: /assets/lessons/L366/images/L366-S01.webp
- Audio: /assets/lessons/L366/audio/L366-S01.m4a
- Duration: 2670 ms
- Char timings: 6
- Image notes: 主角小女孩和固定「你」小男孩在公園裡玩或看花草，主角小女孩看著「你」小男孩，好像在問他是不是喜歡公園。畫面要清楚是公園，有草地、樹、長椅或花草。固定「你」小男孩要使用既有 young boy classmate identity，不要畫成小光。

### L366-S02

- Text: 爸爸的笑話，很好笑吧？
- Spoken text: 爸爸的笑話很好笑吧
- Focus char: 吧
- Target index: 8
- Display lines: 爸爸的笑話， / 很好笑吧？
- Image: /assets/lessons/L366/images/L366-S02.webp
- Audio: /assets/lessons/L366/audio/L366-S02.m4a
- Duration: 2995 ms
- Char timings: 9
- Image notes: 主角爸爸剛說完笑話，主角小女孩和家人笑得很開心，爸爸帶著得意又期待的表情，好像在問「很好笑吧？」不要文字對話框、字幕或可讀笑話內容。

### L366-S03

- Text: 這個驚喜很奇怪，但收下吧。
- Spoken text: 這個驚喜很奇怪但收下吧
- Focus char: 吧
- Target index: 10
- Display lines: 這個驚喜 / 很奇怪， / 但收下吧。
- Image: /assets/lessons/L366/images/L366-S03.webp
- Audio: /assets/lessons/L366/audio/L366-S03.m4a
- Duration: 4277 ms
- Char timings: 11
- Image notes: 主角小女孩收到一個奇怪但可愛的小禮物，例如怪物造型帽子、怪物手套或造型特別的小玩具。旁邊的媽媽或爸爸溫和地鼓勵她收下，女孩表情有點驚訝但願意接受。不要恐怖、不要品牌、包裝字或文字卡片。

### L366-S04

- Text: 你喜歡大狗，但是別過去吧。
- Spoken text: 你喜歡大狗但是別過去吧
- Focus char: 吧
- Target index: 10
- Display lines: 你喜歡大狗， / 但是別 / 過去吧。
- Image: /assets/lessons/L366/images/L366-S04.webp
- Audio: /assets/lessons/L366/audio/L366-S04.m4a
- Duration: 4461 ms
- Char timings: 11
- Image notes: 固定「你」小男孩看到一隻大狗，表情喜歡但有點想靠近；主角小女孩或老師在旁邊提醒他不要過去。大狗要看起來大但安全，沒有攻擊姿勢或兇狠表情。固定「你」小男孩要使用既有 young boy classmate identity，不要畫成小光。

### L366-S05

- Text: 不要哭了，笑一笑吧。
- Spoken text: 不要哭了笑一笑吧
- Focus char: 吧
- Target index: 7
- Display lines: 不要哭了， / 笑一笑吧。
- Image: /assets/lessons/L366/images/L366-S05.webp
- Audio: /assets/lessons/L366/audio/L366-S05.m4a
- Duration: 4134 ms
- Char timings: 8
- Timing note: AI transcript matched; the first `笑` in `笑一笑吧` was manually smoothed inside the same spoken phrase after timestamp review to avoid an unusably short highlight.
- Image notes: 主角小女孩或固定「他」小男孩因為小事在哭，旁邊的媽媽、爸爸或老師溫柔安慰，拿著玩具、手帕或指著好玩的東西，希望孩子笑一笑。畫面要溫和，表現「安慰哭泣的孩子」。不要嚴重受傷、恐怖或災難場景。

## Stage 4 Plan

### L366-G01 - find-character

- Canonical slot: G01 = find-character PASS
- Sentence: L366-S01
- Target char: 吧
- Target index: 5

### L366-G02 - teach-character

- Canonical slot: G02 = teach-character PASS
- Sentence: L366-S02
- Target char: 吧
- Target index: 8
- Teach audio: {"prefixText":"爸爸的笑話很好笑","targetText":"吧","prefixSrc":"/assets/lessons/L366/audio/L366-G02-prefix.m4a","prefixAudio":{"src":"/assets/lessons/L366/audio/L366-G02-prefix.m4a","durationMs":3177,"charTimings":[{"charIndex":0,"startMs":0,"endMs":190},{"charIndex":1,"startMs":190,"endMs":380},{"charIndex":2,"startMs":380,"endMs":660},{"charIndex":3,"startMs":660,"endMs":980},{"charIndex":4,"startMs":980,"endMs":1160},{"charIndex":5,"startMs":1160,"endMs":1530},{"charIndex":6,"startMs":1530,"endMs":1900},{"charIndex":7,"startMs":1900,"endMs":2220}]}}

### L366-G03 - missing-character

- Canonical slot: G03 = missing-character PASS
- Sentence: L366-S03
- Target char: 吧
- Target index: 10
- Missing indexes: 10
- Options: L366-G03-A:吧

### L366-G04 - partial-order

- Canonical slot: G04 = partial-order PASS
- Sentence: L366-S04
- Target char: 吧
- Target index: 10
- Missing indexes: 5, 6, 9, 10
- Options: L366-G04-A:但 | L366-G04-B:是 | L366-G04-C:去 | L366-G04-D:吧

### L366-G05 - choose-pronunciation

- Canonical slot: G05 = choose-pronunciation PASS
- Sentence: L366-S05
- Target char: 吧
- Target index: 7
- Options: correct:不要哭了，笑一笑吧。:/assets/lessons/L366/audio/L366-S05.m4a | wrong-one:不要哭了，看一看吧。:/assets/lessons/L366/audio/L366-G05-wrong-one.m4a | wrong-two:不要哭了，喝一口吧。:/assets/lessons/L366/audio/L366-G05-wrong-two.m4a

## Image Production Results

- S01: style-lock PASS; cast PASS, protagonist girl plus fixed `你` young boy, distinct from 小光, park scene clear.
- S02: style-lock PASS; cast PASS, recurring protagonist father and family, joke/laughter scene clear.
- S03: style-lock PASS; cast PASS, protagonist girl plus recurring mother, strange cute surprise gift, no readable packaging.
- S04: style-lock PASS; cast PASS, fixed `你` young boy distinct from 小光, protagonist girl cautioning, large safe dog.
- S05: style-lock PASS; cast PASS, protagonist girl plus recurring mother, gentle comforting scene.
- Rejected draft images committed: none.

## Audio Production Results

- Generated via repo OpenAI TTS workflow.
- Processed with `npm run assets:audio -- --lesson L366`.
- Aligned with `npm run assets:align:ai -- --lesson L366`.
- Sentence audio exists for S01-S05.
- Standalone char audio exists for `吧`: `/assets/lessons/L366/audio/char-u5427.m4a`.
- Stage 4 teach audio exists for G02 prefix, with prefixAudio timing metadata.
- G02 suffix omitted because target is final Han character.
- Stage 4 choose-pronunciation wrong-option audio exists for G05 wrong-one/wrong-two.
- G05 option mean-volume spread PASS at 2.4 dB.

## Checks

- `git fetch origin`: PASS
- `npm run tools:check`: PASS
- `npm run ai:check`: PASS
- `npm run curriculum:audit-state`: PASS
- `npm run curriculum:packet -- --request curriculum-workflow/lesson-requests/L366.json`: PASS
- `npm run assets:images -- --lesson L366 --remove-original`: PASS
- `npm run assets:audio -- --lesson L366`: PASS
- `npm run assets:align:ai -- --lesson L366`: PASS
- `npm run validate:curriculum`: PASS
- `npm run validate:production`: PASS
- `L366 lesson-local package audit`: PASS
- `L366 media audit`: PASS

## Release Notes

- Release owns insertion into production JSON/planner export, ledger update, registry cleanup, final verify, push to main, and deployment checks.
- Post-main teacher review URL after Release merge and deploy: `https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L366&ref=main`.
- Post-main review status command: `npm run asset:review-status -- --unit L366 --ref main`.

## Required Files

- curriculum-workflow/lesson-requests/L366.json
- curriculum-workflow/generated/L366-generation-packet.md
- curriculum-workflow/drafts/L366-draft.json
- curriculum-workflow/audio-inbox/L366/
- public/assets/lessons/L366/images/L366-S01.webp
- public/assets/lessons/L366/images/L366-S02.webp
- public/assets/lessons/L366/images/L366-S03.webp
- public/assets/lessons/L366/images/L366-S04.webp
- public/assets/lessons/L366/images/L366-S05.webp
- public/assets/lessons/L366/audio/L366-S01.m4a
- public/assets/lessons/L366/audio/L366-S02.m4a
- public/assets/lessons/L366/audio/L366-S03.m4a
- public/assets/lessons/L366/audio/L366-S04.m4a
- public/assets/lessons/L366/audio/L366-S05.m4a
- public/assets/lessons/L366/audio/char-u5427.m4a
- public/assets/lessons/L366/audio/L366-G02-prefix.m4a
- public/assets/lessons/L366/audio/L366-G05-wrong-one.m4a
- public/assets/lessons/L366/audio/L366-G05-wrong-two.m4a
- docs/PARALLEL_LESSON_REGISTRY.md
