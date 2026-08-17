# R022 Review Module Generation Packet

- Review module: R022
- Title: 複習二十二
- Milestone / after lesson: L195
- Target range: L166-L195
- Pair: R021/R022
- Required coverage across pair: 洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光
- Asset base: /assets/reviews/R022
- Allowed-character ceiling: L195 only
- Production target: asset-complete-package; Release integrates production JSON.

## Approved Sentences

1. 這隻鳥畫得像真的。
   - Spoken: 這隻鳥畫得像真的
   - Focus: 像
   - Display lines: 這隻鳥 / 畫得像真的。
   - Image: A drawing of a bird is shown clearly, and the bird in the drawing looks very real. The scene can include the recurring protagonist girl looking at the drawing, but do not add a real bird beside it for comparison. The image should focus on the picture of the bird looking lifelike.
2. 他想用力拿起大球。
   - Spoken: 他想用力拿起大球
   - Focus: 力
   - Display lines: 他想用力 / 拿起大球。
   - Image: Use the fixed recurring sporty boy identity for 他, not a generic boy. He is trying hard to lift a large wooden ball. The ball should clearly look solid and heavy, not like a balloon or beach ball, so 用力 makes sense.
3. 玩火不是好事。
   - Spoken: 玩火不是好事
   - Focus: 火
   - Display lines: 玩火不是 / 好事。
   - Image: A safe instructional scene about not playing with fire. A recurring teacher or trusted adult can point to a controlled small flame from a safe distance while generic children listen. No child should be shown touching or playing with fire.
4. 明明有電，電燈卻發不出光。
   - Spoken: 明明有電電燈卻發不出光
   - Focus: 光
   - Display lines: 明明有電， / 電燈卻 / 發不出光。
   - Image: A room has an electric lamp with a visible switch or plug showing it should have power, but the lamp is not giving off light. The recurring protagonist girl looks puzzled at the lamp. Do not use the unlearned word 亮 in any visible text.
5. 他有事，就先回家了。
   - Spoken: 他有事就先回家了
   - Focus: 回
   - Display lines: 他有事， / 就先回家了。
   - Image: Use the fixed recurring sporty boy identity for 他, not a generic boy. He has something to do and leaves first, walking toward home with his small backpack. Other children may remain in the original place to make 先回家 clear.

## Stage 4 Plan

- R022-G01 find-character: R022-S04, target 光
- R022-G02 teach-character: R022-S02, target 力
  - Prefix: 他想用
  - Suffix: 拿起大球
- R022-G03 missing-character: R022-S01, target 像
- R022-G04 partial-order: R022-S05, target 回
  - Missing indexes: 0, 2, 5
  - Option cards: 他 / 事 / 回
- R022-G05 choose-pronunciation: R022-S03, target 火
  - correct: 玩火不是好事。
  - wrong-one: 玩水不是好事。
  - wrong-two: 玩火也是好事。

## Asset Requirements

- Images: square image / 1:1 composition, WebP, long edge <=1024, target <=250 KB and hard <=400 KB.
- Use L058 as mandatory style-only reference and L154/L162/L163 family anchors for recurring protagonist family.
- Use fixed recurring sporty boy identity for `他`; keep teacher and generic students distinct from mother/family roles.
- Audio: OpenAI TTS full sentence audio, G02 prefix/suffix audio, G05 wrong-choice full text audio.
- Review modules do not use newChars, zhuyin, or charAudio.
