# R021 Review Module Generation Packet

- Review module: R021
- Title: 複習二十一
- Milestone / after lesson: L195
- Target range: L166-L195
- Pair: R021/R022
- Required coverage across pair: 洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光
- Asset base: /assets/reviews/R021
- Allowed-character ceiling: L195 only
- Production target: asset-complete-package; Release integrates production JSON.

## Approved Sentences

1. 我洗手了，可是手又髒了。
   - Spoken: 我洗手了可是手又髒了
   - Focus: 髒
   - Display lines: 我洗手了， / 可是手又 / 髒了。
   - Image: Use the recurring protagonist girl identity for 我. She has just washed her hands, but then touches mud or something dirty again, so her hands are dirty again. Make both the washed-hands context and the newly dirty hands clear.
2. 房間很亂，我就去掃地。
   - Spoken: 房間很亂我就去掃地
   - Focus: 亂
   - Display lines: 房間很亂， / 我就去掃地。
   - Image: Use the recurring protagonist girl identity for 我. She sees that the room floor is messy, then goes to sweep with a broom. The room should visibly look messy, and the broom action should be clear.
3. 小馬跑太快，停不下來。
   - Spoken: 小馬跑太快停不下來
   - Focus: 停
   - Display lines: 小馬跑太快， / 停不下來。
   - Image: A small horse is running too fast on safe grass and cannot stop right away. Keep the scene safe and child-friendly, with motion visible but no dangerous accident.
4. 我聽見小狗的叫聲。
   - Spoken: 我聽見小狗的叫聲
   - Focus: 聽
   - Display lines: 我聽見 / 小狗的叫聲。
   - Image: Use the recurring protagonist girl identity for 我. She hears a small dog barking and turns her head or looks toward it. The dog should have its mouth open, and the girl's listening reaction should make 聽見 clear.
5. 老師說學生上課不能說話。
   - Spoken: 老師說學生上課不能說話
   - Focus: 課
   - Display lines: 老師說學生 / 上課不能 / 說話。
   - Image: Use the recurring teacher identity, visually distinct from the protagonist mother. The teacher is in a classroom reminding generic students that they should not chat during class. Students must be generic children, not recurring 我, 你, or 他 unless needed in the scene.

## Stage 4 Plan

- R021-G01 find-character: R021-S01, target 髒
- R021-G02 teach-character: R021-S05, target 課
  - Prefix: 老師說學生上
  - Suffix: 不能說話
- R021-G03 missing-character: R021-S04, target 聽
- R021-G04 partial-order: R021-S02, target 亂
  - Missing indexes: 0, 1, 3
  - Option cards: 房 / 間 / 亂
- R021-G05 choose-pronunciation: R021-S03, target 停
  - correct: 小馬跑太快，停不下來。
  - wrong-one: 小狗跑太快，停不下來。
  - wrong-two: 小馬跑很快，停不下來。

## Asset Requirements

- Images: square image / 1:1 composition, WebP, long edge <=1024, target <=250 KB and hard <=400 KB.
- Use L058 as mandatory style-only reference and L154/L162/L163 family anchors for recurring protagonist family.
- Use fixed recurring sporty boy identity for `他`; keep teacher and generic students distinct from mother/family roles.
- Audio: OpenAI TTS full sentence audio, G02 prefix/suffix audio, G05 wrong-choice full text audio.
- Review modules do not use newChars, zhuyin, or charAudio.
