# Curriculum Ledger

This file is the running map for the full character course. Update it whenever a reviewed lesson enters `src/curriculum/sample-lessons.json`.

The purpose is to keep the sequence visible when the course grows to 600-700 characters:

- Know exactly which characters have already been taught.
- See which sentences each lesson uses.
- Prefer reusing characters from the previous 4-5 lessons when writing new sentences.
- Prevent accidental new characters from entering a lesson before they are taught.
- Give AI sentence generation a compact source of truth before drafting new lessons.

## Current Character State

Characters taught after Lesson 40:

`一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都`

Recent review pool for the next lesson:

`到 他 沒 裡 走 看 我 家 兩 隻 有 小 狗 鳥 人 不 在 山 都 手 的 水 也 是 孩 上 飛 很 男 女 門 高 下 大`

## Visual Continuity Ledger

Use this section before writing image prompts. Once a recurring person or family role is introduced, keep the same visual identity in every future image. This reduces image-regeneration cost and makes the app feel like one coherent world.

| Role / Character | First Lesson | Approved Visual Description | Reuse Rule |
|---|---:|---|---|
| 我 | L007 | Friendly young girl, preschool to early elementary age, shoulder-length dark brown hair, small pink hair clip, bright curious eyes, yellow top, coral-red pinafore dress, red shoes, warm expression, child-friendly picture-book style. | Always use this same girl whenever `我` appears. Use L007 images as the current reference. |
| 你 | L012 | Friendly young boy, the same age as the fixed `我` girl, preschool to early elementary age, short slightly tousled dark hair, bright friendly eyes, sky-blue shirt, green shorts, blue shoes, small orange backpack, warm curious expression, child-friendly picture-book style. | Always use this same boy whenever `你` appears. Use L012-S01/L012-S02/L012-S03 as the current references. |
| 他 | L035 | Friendly sporty young boy, the same age as the fixed `我` girl and fixed `你` boy, short energetic slightly spiky black hair, bright open expression, plain orange athletic T-shirt, navy shorts, red sneakers, green wristband, no backpack. | Always use this same sporty boy whenever `他` appears. Keep him visually distinct from the fixed `你` boy, who wears a sky-blue shirt, green shorts, blue shoes, and an orange backpack. Use L035-S01/L035-S02/L035-S03/L035-S05 as the current references. |
| 爸爸 | TBD | TBD after the role is introduced and reviewed. | After approval, reuse the same father design in all future images. |
| 媽媽 | TBD | TBD after the role is introduced and reviewed. | After approval, reuse the same mother design in all future images. |
| 哥哥 | TBD | TBD after the role is introduced and reviewed. | After approval, reuse the same older-brother design in all future images. |
| 姐姐 | TBD | TBD after the role is introduced and reviewed. | After approval, reuse the same older-sister design in all future images. |
| 弟弟 | TBD | TBD after the role is introduced and reviewed. | After approval, reuse the same younger-brother design in all future images. |
| 妹妹 | TBD | TBD after the role is introduced and reviewed. | After approval, reuse the same younger-sister design in all future images. |

Image reuse rule:

- If a new sentence can use an existing approved image without changing the meaning, reuse it.
- If the same scene needs a different focus, prefer adding a clear circle, glow, or spotlight to the existing scene instead of creating an unrelated new scene.
- Generate a new image only when the count, role, object, or meaning would be wrong with the existing asset.

## Place Continuity Ledger

Use this section before writing image prompts for homes or recurring places. Keep houses visually distinct so `我家`, `你家`, and `他家` do not blur together.

| Place | First Clear Lesson | Approved Visual Description | Reuse Rule |
|---|---:|---|---|
| 我家 | L017 / L034 | 山上的溫馨奶油色小屋，紅橘色瓦屋頂，圓拱木門，門前有花園與安全山路；整體像固定小女孩的山上家。 | Whenever `我家` appears, use the fixed girl's mountain home. Use L017-S02, L034-S01, and L034-S05 as references. |
| 你家 | L017 | 高山下的溫馨小屋，和固定 `你` 小男孩連結；保持山下位置，避免畫成固定小女孩的山上家。 | Whenever `你家` appears, use the fixed second-person boy's home at the foot of the mountain. Use L017-S01 as the current reference. |
| 他家 | L036 | 奶油色小屋，藍灰色屋頂，圓拱橘色前門，門邊有球或小運動水壺，低矮白色籬笆與乾淨小花園；整體呼應固定 `他` 小男孩的活潑運動型角色。 | Whenever `他家` appears, use this sporty boy's home and keep it visually distinct from `我家` and `你家`. Use L036-S05 as the current reference. |

## Lesson Ledger

| Lesson | New Character(s) | Cumulative Learned Characters | Reviewed Sentences | Old Characters Reviewed | Notes |
|---|---|---|---|---|---|
| L001 | 一、二、三、人 | 一、二、三、人 | 人 / 一人 / 二人 / 三人 | none | Seed lesson. Four characters are introduced together because the first lesson needs enough material to make meaning. |
| L002 | 個 | 一、二、三、人、個 | 人 / 一個人 / 三個人 | 一、三、人 | `個` is neutral tone in `一個人` and `三個人`. Avoid `二個人`; use `兩個人` only after `兩` is taught. |
| L003 | 大 | 一、二、三、人、個、大 | 大人 / 二人 / 三個人 / 一個大人 | 一、二、三、人、個 | Uses `大人` as a meaningful phrase and repeats counting people. |
| L004 | 的 | 一、二、三、人、個、大、的 | 一人 / 二人 / 大大的人 / 三個大大的人 | 一、二、三、人、個、大 | First use of possessive/modifier marker `的`; keep syntax concrete and visual. |
| L005 | 小 | 一、二、三、人、個、大、的、小 | 大大的人 / 小小的人 / 一個大大的人 / 三個小小的人 / 大大小小的人 | 一、三、人、個、大、的 | Contrasts `大` and `小`; keeps all sentence characters inside the learned set. |
| L006 | 手 | 一、二、三、人、個、大、的、小、手 | 一個人的手 / 三個人的手 / 大大的手 / 小小的手 / 大大小小的手 | 一、三、個、人、的、大、小 | Introduces a concrete body-part noun and reviews size contrast. |
| L007 | 我 | 一、二、三、人、個、大、的、小、手、我 | 我一個人 / 我的小手 / 我的手小小的 / 大人的手大大的 / 三個人的大手小手 | 一、三、個、人、的、大、小、手 | Establishes the fixed first-person girl character for `我`. |
| L008 | 有 | 一、二、三、人、個、大、的、小、手、我、有 | 有一個人 / 我有小小的手 / 大人有大大的手 / 三個人有大手小手 / 有一大二小的手 | 一、二、三、人、個、大、的、小、手、我 | Introduces `有` to unlock simple existential and possession patterns while continuing concrete hand-focused picture sentences. |
| L009 | 山 | 一、二、三、人、個、大、的、小、手、我、有、山 | 有人有山 / 大大的山小小的山 / 我一個人的山 / 三個人的大手小手 / 我有小小的手 | 一、三、人、個、大、的、小、手、我、有 | Introduces `山` and reviews existence, size contrast, the fixed `我` character, and hand phrases. |
| L010 | 上 | 一、二、三、人、個、大、的、小、手、我、有、山、上 | 我一個人上山 / 山上有三個大人 / 我的手小小的 / 我的手上有一個小人 / 有大大的山，有小小的山 | 一、三、個、人、的、大、小、手、我、有、山 | Introduces `上` through mountain location/action and hand-surface use. Reuses L007-S03 for `我的手小小的` and L009-S02 for the big/small mountain picture. |
| L011 | 下 | 一、二、三、人、個、大、的、小、手、我、有、山、上、下 | 有三個人上山 / 有一個人下山 / 我的手下有三個小山 / 山下有一個大人 / 有一大二小的手 | 一、二、三、人、個、大、的、小、手、我、有、山、上 | Introduces `下` through mountain direction/location and hand-under-object phrasing. Reuses L008-S05 image/audio for `有一大二小的手`. |
| L012 | 你 | 一、二、三、人、個、大、的、小、手、我、有、山、上、下、你 | 你一個人上山 / 你一個人下山 / 你手上有三個小山 / 我手下有一個大山 / 有二大一小的手 | 一、二、三、人、個、大、的、小、手、我、有、山、上、下 | Introduces `你` as a fixed second-person young boy character and reviews up/down mountain, hand position, toy mountains, and big/small hand contrast. |
| L013 | 水 | 一、二、三、人、個、大、的、小、手、我、有、山、上、下、你、水 | 大大的山上有水 / 你的水，我的水。 / 水下有三個大人 / 山下有一個大人 / 你小小的手上有水 | 一、三、人、個、大、的、小、手、我、有、山、上、下、你 | Introduces `水` through mountain water, each child having water, swimming under water, and the fixed `你` boy's wet hand. Reuses the approved L011-S04 image for `山下有一個大人`. |
| L014 | 在 | 一、二、三、人、個、大、的、小、手、我、有、山、上、下、你、水、在 | 水在你小小的手上 / 你我二人在水下 / 在山下有三個大人 / 有山有水，有你有我。 / 我在水上，你在水下 | 二、三、人、個、大、的、小、手、我、有、山、上、下、你、水 | Introduces `在` for location/existence phrasing and reviews the previous three new characters `下`、`你`、`水`. Reuses approved L013-S05 image for `水在你小小的手上`. |
| L015 | 高 | 一、二、三、人、個、大、的、小、手、我、有、山、上、下、你、水、在、高 | 在高高的山下有水 / 你我二人在高山上 / 高高的人有大大的手 / 三個高高的人在水下 / 在你的手上有水 | 二、三、人、個、大、的、手、我、有、山、上、下、你、水、在 | Introduces `高` for height and high-mountain scenes. Reviews the previous three new characters `你`、`水`、`在`; reuses approved L013-S05 image for `在你的手上有水`. |
| L016 | 很 | 一、二、三、人、個、大、的、小、手、我、有、山、上、下、你、水、在、高、很 | 在高山上有很大的水 / 有一個很高的人在水下 / 大人的手很大 / 你我二人的手很小 / 有三個很高的人在山上 | 一、二、三、人、個、大、的、小、手、我、有、山、上、下、你、水、在、高 | Introduces `很` as a degree word for size/height. Reviews recent `水`、`在`、`高`; reuses approved L008-S03 image for `大人的手很大` and creates new images for the four new visual meanings. |
| L017 | 家 | 一二三人個大的小手我有山上下你水在高很家 | 你的家在高山下 / 我的家在高山上 / 山上有三個很大的家 / 你我二人在家 / 有一個很小的家在水上 | 你的在高山下我上有三個很大二人一小水 | Introduces `家` through home scenes on/under mountains, at home with the fixed children, and one small house on water. Reviews recent `在`, `高`, and `很`. |
| L018 | 和 | 一二三人個大的小手我有山上下你水在高很家和 | 很高的山和很大的水 / 你和我在家 / 很小的手在很大的手上 / 在山下的家和在水上的家 / 很高的人和很高的家 | 很高的山大水你我在家小手上下人 | Introduces `和` as the conjunction read `ㄏㄜˊ` to match the approved AI audio. Reviews recent `高`, `很`, and `家`; reuses approved L016-S01 and L017-S04 images. |
| L019 | 隻 | 一二三人個大的小手我有山上下你水在高很家和隻 | 一隻很大的手在水下 / 一隻大手和一隻小手 / 很高的人和很高的家 / 有三個小家在一隻手上 / 你和我在家 | 一很大的手在水下和小高人家有三個上你我 | Introduces `隻` as the measure word read `ㄓ`. Reviews recent `很`, `家`, and `和`; reuses approved L018-S03, L018-S05, and L017-S04 images. |
| L020 | 鳥 | 一二三人個大的小手我有山上下你水在高很家和隻鳥 | 一隻鳥在很高的山上 / 一隻鳥和鳥的小家 / 你和我的三隻小鳥 / 很大的手和很小的手 / 我家在很高的山上 | 一隻在很高的山上和小家你我三大手 | Introduces `鳥` with one-bird and three-bird scenes. Reviews recent `家`, `和`, and `隻`; reuses approved L018-S03 and L017-S02 images. Sentence 5 was corrected to stay consistent with the fixed girl's home on the mountain. |
| L021 | 孩 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩 | 一個小孩和一隻小鳥在家 / 一隻小孩的手 / 小孩和一隻很大的鳥 / 一隻小鳥和很小的家 / 一隻很大的手上有三個小家 | 一個小和隻鳥在家很大的手上有三 | Introduces `孩` through child, hand, and child-bird scenes. Reviews recent `和`, `隻`, and `鳥`; reuses approved L020-S02 and L019-S04 images. Request was corrected before production and later adjusted from `一個小孩的手` to `一隻小孩的手` so `隻` measures the hand shown in the picture; `spokenText` must match display text, and `focusChar` must appear in the sentence. |
| L022 | 指 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指 | 小孩的一隻手指 / 三隻小鳥和手指山 / 很大的手指上有一隻小鳥 / 小孩和小鳥在家 / 小孩和在水上的家 | 小孩的一隻手三鳥和山很大上有在家水 | Introduces `指` through child finger, finger-shaped mountain, and bird-on-finger scenes. Reviews recent `隻`, `鳥`, and `孩`; reuses approved L021-S01 image for `小孩和小鳥在家`. |
| L023 | 看 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看 | 大人和小孩看三隻小鳥 / 小孩看手指上的一隻小鳥 / 手指山和三隻小鳥 / 小孩的手指和大人的手指 / 我和大家在山上看鳥 | 大人和小孩三隻鳥手指山我家在上 | 加入「看」作為觀察動作字，複習近課的「鳥」、「孩」、「指」。第三句重用 L022-S02 手指山圖片，其餘句子產生新圖。 |
| L024 | 女 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女 | 小女孩在看一隻小鳥 / 女孩看女人的手指 / 有一隻手指在指女孩 / 大家在山上看鳥 / 你和我的三隻小鳥 | 小孩看一隻鳥人在手指有大家山上你和我的三 | Introduces `女` through girl and woman scenes. Reviews recent `孩`, `指`, and `看`; reuses approved L023-S05 image for `大家在山上看鳥` and approved L020-S03 image/audio for `你和我的三隻小鳥`. |
| L025 | 飛 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛 | 女孩在看鳥飛 / 一隻小鳥在女孩的手指上 / 大家在看女孩 / 你看！小鳥飛很高 / 女孩的手在指一隻飛鳥 | 女孩在看鳥一隻小的手指上大家你很高 | Introduces `飛` through flying-bird scenes. Reviews recent `指`, `看`, and `女`; all five sentence images use newly generated reviewed picture-book assets. |
| L026 | 男 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男 | 小男孩在看男人飛 / 小男孩的手指很小 / 男孩和女孩在看鳥飛 / 女孩看女人的手指 / 女孩的手在指一隻飛鳥 | 小孩在看人飛的手指很和女鳥一隻 | Introduces `男` through the fixed boy and adult man scenes. Reviews recent `看`, `女`, and `飛`; creates new images for the first three sentences and reuses approved L024-S02 and L025-S05 images for review sentences. |
| L027 | 門 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門 | 女人的門和男人的門 / 你看！一隻小鳥飛上門 / 男孩手指有飛鳥的門 / 女孩在看鳥飛 / 男孩看女人的手指 | 女人男人和你看一隻小鳥飛上男孩手指有的 | Introduces `門` through doors, door-top placement, and a flying-bird door decoration. Reviews recent `女`, `飛`, and `男`; reuses approved L025-S01 image for `女孩在看鳥飛` and creates new images for the other four sentences. |
| L028 | 前 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前 | 男孩和女孩在門前。 / 我在看門前的飛鳥 / 女孩飛在男孩前 / 男孩和女孩在看大人飛 / 女孩在看門上的鳥 | 男孩和女孩在門前我看的飛鳥大人 | Introduces `前` through in-front-of-door and in-front-of-boy scenes. Reviews recent `飛`, `男`, and `門`; all five sentence images use newly generated reviewed picture-book assets. |
| L029 | 後 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後 | 男孩在門前，女孩在門後 / 男孩和女孩在門前。 / 女孩飛在前，男孩飛在後 / 男孩和女孩在看大人飛 / 前門有山，後門有水。 | 男孩在門前女孩後和飛大人有山水 | Introduces `後` through behind-door and behind/in-back flying scenes. Reviews recent `男`, `門`, and `前`; reuses approved L028-S01 and L028-S04 images, and creates new images for the other three sentences. |
| L030 | 也 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也 | 我在門後，你也在門後 / 男孩在看門前的飛鳥 / 門前有男也有女 / 小鳥在飛，男人也在飛 / 人前有鳥，人後也有鳥 | 我門後你在男孩看前的飛鳥有男女小人 | Introduces `也` through shared-position and shared-action scenes. Reviews recent `門`, `前`, and `後`; all five sentence images use newly generated reviewed picture-book assets. |
| L031 | 是 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是 | 我是女孩，你是男孩 / 門前是水，門後也是水 / 我是小孩，你也是小孩 / 鳥飛很高，男人也飛很高 / 你在山前，我在山後 | 我女孩你男門前水後也小鳥飛很高人在山 | Introduces `是` through identity and judgment sentences. Reviews recent `前`, `後`, and `也`; all five sentence images use newly generated reviewed picture-book assets. |
| L032 | 不 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不 | 我不是鳥，也不是大人 / 前門有山，後門也有山 / 你是男孩，不是女孩 / 鳥不在門前，也不在門後 / 我在門後看門前的人 | 我不是鳥也大人前門有山後你男孩女孩在看的 | Introduces `不` through concrete negation and front/behind door scenes. Reviews recent `後`, `也`, and `是`; S02 and S04 images were replaced with safer reviewed picture-book compositions. |
| L033 | 到 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到 | 我到門前，你也到門前 / 大人到家，小孩也到家 / 我到門前看山也看水 / 鳥不在門前，也不在門後 / 你是男孩，不是女孩 | 我到門前你也大人家小孩看山水鳥不在後是男女 | Introduces `到` through arrival-at-door and arrival-home scenes. Reviews recent `也`, `是`, and `不`; S04 now has an L033-specific uncropped bird image and regenerated audio with `不在` pronounced as `不` second tone. |
| L034 | 走 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走 | 你走到我家 / 女孩不走，男孩也不走 / 我不是鳥，也不是大人 / 我看到門後有鳥也有人 / 我上山後，走到家 | 你走到我家女孩不男也我是鳥大人看門後有上山 | Introduces `走` through walking-to-home and not-walking scenes. Reviews recent `是`, `不`, and `到`; S02 uses the refreshed haunted-house image and Stage 4 requires all five sentence games. |
| L035 | 他 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他 | 他是男孩，不是女孩 / 他看到我，我看不到他 / 他走到山上，我也走到山上 / 女孩不走，男孩也不走 / 他是男孩，你也是男孩 | 他是男孩不女看到我走山上也你 | Introduces `他` through a new fixed sporty boy character. Reviews recent `不`, `到`, and `走`; S02 uses the refreshed hide-and-seek image, S04 reuses the refreshed L034-S02 haunted-house image, and Stage 4 requires all five sentence games. |
| L036 | 沒 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒 | 他沒走，我也沒走 / 他是男孩，不是女孩 / 我看到鳥，他沒看到 / 鳥在門上，沒有飛走 / 我到他家，他不在家 | 他沒走我也是男孩不女看到鳥在門上有飛家 | Introduces `沒` through not-leaving, not-seeing, and not-flying-away scenes. Reviews recent `到`, `走`, and `他`; S01 now clearly shows other children leaving while the two main children stay cleaning, and Stage 4 requires all five sentence games. |
| L037 | 裡 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡 | 他走到家裡，沒看到人 / 他手裡有小山，沒有小鳥 / 他不在家裡，沒人看到他 / 他看到我，我看不到他 / 山很高，我走不到山上 | 他走到家裡沒看人手有小山鳥不在我很高上 | Introduces `裡` through inside-the-home and in-the-hand spatial scenes. Reviews recent `走`, `他`, and `沒`; reuses approved L035-S02 image for the hide-and-seek review sentence. |
| L038 | 兩 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩 | 他沒走，我也沒走 / 兩人走到家裡，沒看到人 / 他的手裡有兩隻小鳥 / 我看到兩隻鳥飛到山裡 / 他沒看到我走下山 | 他沒走我也兩人到家裡看的隻手有小鳥飛山下 | Introduces `兩` through two people and toy-bird counting scenes. Reviews recent `他`, `沒`, and `裡`; reuses approved L036-S01 image for the not-leaving review sentence. |
| L039 | 狗 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗 | 他家裡有兩隻狗 / 我家裡沒有狗 / 他走到家裡，沒看到人 / 兩隻小狗走到水裡 / 我有兩隻手，小鳥沒有手 | 他家裡有兩隻狗我沒走到看人小水鳥手 | Introduces `狗` through dogs at home, no dog at home, and two small dogs in shallow water. Reviews recent `沒`, `裡`, and `兩`; reuses approved L037-S01 image for the home-with-no-people review sentence. |
| L040 | 都 | 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都 | 他的兩隻狗都在家裡 / 兩隻狗都很小 / 兩隻小狗都走到水裡 / 大人都沒在水裡 / 他沒看到家裡的狗 | 他的兩隻狗都在家裡很小走到水大人沒看 | Introduces `都` through all-at-home, both-small, both-entering-water, and all-not-in-water scenes. Reviews recent `裡`, `兩`, and `狗`; S02 was corrected from the request's mismatched display text to match the approved spokenText/reason. |

## Planned Lessons

None yet. L040 已完成，下一課請從 planner 重新規劃。

## Planning Rule For New Lessons

Before drafting a new lesson:

1. Add only the current new character(s) to the learned set.
2. Sentence text may use only cumulative learned characters.
3. Try to include several characters from the recent review pool.
4. Prefer natural Taiwan usage over mechanically combining characters.
5. Keep each sentence around 4-12 Han characters, ignoring punctuation.
6. Prefer characters from the previous 5 lessons when they can fit naturally.
7. Across the lesson's sentence set, include each new character from the previous 3 lessons at least once.
8. Keep early lessons short; do not force 6-8 sentences until the learned set can support them.
9. After teacher approval, generate image prompts, image files, AI audio, and `charTimings`.

## Suggested Next-Lesson Prompt Shape

Use this shape when asking AI to draft sentence candidates:

```text
We are building a Taiwan zhuyin character recognition app for young children.

Already taught characters:
一 二 三 人 個 大 的 小 手 我 有 山 上 下 你 水 在 高 很 家 和 隻 鳥 孩 指 看 女 飛 男 門 前 後 也

New character for this lesson:
{NEW_CHARACTER}

Rules:
- Sentence display text may use only already taught characters plus the new character.
- Use Taiwan usage.
- No Hanyu pinyin.
- No punctuation in spokenText.
- Prefer concrete, imageable sentences.
- Reuse characters from the recent review pool when natural: 小 男 孩 在 看 人 飛 的 手 指 很 和 女 鳥 一 隻 門 你 上 有 前 我 大 後 山 水 也
- Keep each sentence 4-12 Han characters long, ignoring punctuation.
- Across the sentence set, include the previous 3 lesson new characters at least once.
- Keep the sentence set short if the character set cannot support natural variety.
```
