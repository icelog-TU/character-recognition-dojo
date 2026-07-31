# Character Collection And Gacha System

This document records the reward collection design for `認字練功房`.

## Current Direction

The app will eventually contain about 600 lessons. Each first-time lesson completion grants:

- 30 coins
- 12 stars
- 3 gacha tickets

Coins and stars are achievement counters. Gacha tickets control character draws.

At 600 lessons, the baseline economy gives at least 1800 draws. Because duplicate draws are allowed, long-term play may involve 3000-4000 draws.

Important rule: replaying an already completed lesson must not grant the reward again. Review is allowed, reward farming is not.

## Collection Realms

The collection is split into four realms. They unlock in order:

1. 地上的生物
2. 海裡的生物
3. 天上的生物
4. 外太空的生物

The child starts with land creatures. Sea unlocks after land is complete, sky unlocks after sea is complete, and space unlocks after sky is complete.

## Character Count

Each realm currently has 15 species. Each species has 9 family roles:

- 爺爺
- 奶奶
- 爸爸
- 媽媽
- 哥哥
- 姐姐
- 弟弟
- 妹妹
- 寶寶

So each realm has:

`15 species x 9 roles = 135 collectible characters`

All four realms together have:

`135 x 4 = 540 collectible characters`

This is large enough for a 600-lesson app with repeated gacha draws.

## Prototype Species List

Land:

貓、狗、兔、熊、鹿、狐狸、松鼠、貓熊、老虎、獅子、大象、無尾熊、猴子、刺蝟、馬

Sea:

海豚、鯨魚、海豹、海龜、章魚、魷魚、螃蟹、蝦、小魚、彩魚、河豚、水母、海星、海馬、貝殼

Sky:

小鳥、老鷹、貓頭鷹、鴨、天鵝、火鶴、企鵝、蝙蝠、蝴蝶、蜜蜂、瓢蟲、蜻蜓、鸚鵡、孔雀、白鷺

Space:

月兔、星貓、火箭狗、星球熊、彗星狐、星雲鯨、太空貓熊、流星獅、衛星鳥、銀河鹿、宇宙龜、極光兔、小行星猴、太陽象、軌道魚

## Draw Rules

The current prototype draw rule:

- Draw from the first unlocked realm that is not yet complete.
- If there are missing characters in that realm, prefer a missing character most of the time.
- Duplicates are allowed and counted.
- Duplicates do not unlock the next realm; only unique collected characters count toward realm completion.

This keeps collection progress moving while still allowing repeated draws.

The draw rate can be tuned later after real playtesting. Do not lock final economy numbers until at least the first 30-50 lessons and the first gacha prototype have been tested by a child.

## Asset Strategy

Do not generate hundreds of final character images before the art direction is approved.

Recommended workflow:

1. Keep the current prototype using clear symbolic avatars.
2. Pick 1 species from land and generate all 9 family-role images.
3. Review consistency, appeal, and recognizability on a phone.
4. Lock the visual style prompt.
5. Generate images in small reviewed batches, such as 1-3 species at a time.
6. Store final assets under `public/assets/characters/`.
7. Add an optional `imageSrc` field to the character data and let the UI fall back to symbolic avatars when no image exists.

The family images should feel related. A child should be able to see that the nine roles belong to the same species family.

## Local Storage

The current prototype stores progress locally in browser `localStorage`:

- coins
- stars
- gachaTickets
- completedOrders
- ownedCharacters
- selectedOrder

This is sufficient for solo testing on one device.

Future cloud backup should be added before serious family testing or app-store release, because losing a child's collection would feel bad. Cloud backup should store the same progress shape server-side, keyed to a user account or parent-managed profile.

