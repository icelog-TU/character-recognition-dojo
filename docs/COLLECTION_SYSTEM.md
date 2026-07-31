# Character Collection And Gacha System

This document records the reward collection design for `認字練功房`.

## Current Direction

The app will eventually contain about 600 lessons. Each first-time lesson completion grants:

- 30 coins
- 12 stars

Coins are used for gacha draws. Stars are used to raise character affection.

Each gacha draw costs 10 coins, so one completed lesson gives enough coins for 3 draws.

At 600 lessons, the baseline economy gives at least 1800 draws. Because duplicate draws are allowed, long-term play may involve 3000-4000 draws.

Important rule: replaying an already completed lesson must not grant the reward again. Review is allowed, reward farming is not.

## Affection

Collected characters can gain affection hearts.

- Each character has up to 10 hearts.
- Spending 3 stars adds 1 heart to an owned character.
- Stars should therefore feel like relationship or care currency, not gacha currency.

## Character Interactions

Character interactions unlock by affection hearts.

- 1 heart: 打招呼
- 2 hearts: 聊聊天
- 3-10 hearts: additional deterministic activities such as sharing snacks, playing, going out, giving a small gift, singing, encouragement, expressions, and a final promise.

The interaction content follows the existing Justin app pattern:

- Each character gets deterministic content based on its character ID.
- The same character should not reshuffle its lines after reload.
- Different characters should not all repeat the same activity sequence.
- Seen interaction positions are stored in `seenCharacterInteractions`.
- Newly unlocked unseen interactions may sparkle or show a new marker.
- Once an interaction has been opened, it should not keep presenting itself as new after leaving and returning.

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
- Spend 10 coins per draw.
- If there are missing characters in that realm, prefer a missing character most of the time.
- Duplicates are allowed and counted.
- Duplicates do not unlock the next realm; only unique collected characters count toward realm completion.
- If there are 5 duplicate draws in a row and the active realm still has missing characters, the next draw must be a new character.
- A new character resets the duplicate streak to 0.

This keeps collection progress moving while still allowing repeated draws.

The draw rate can be tuned later after real playtesting. Do not lock final economy numbers until at least the first 30-50 lessons and the first gacha prototype have been tested by a child.

## Page Flow And Child Guidance

The gacha page is designed as a toddler-facing page, not an adult settings page.

- Entering the page speaks a short guide automatically.
- The gacha button stays near the top of the page and includes a clear gift graphic.
- The gacha card uses one central stage: before drawing it shows a large gift; after drawing the same stage changes into the character result.
- The result must stay visible near the draw button on phone. Do not move it below realm progress.
- Realm collection progress appears below the gacha machine.
- Each realm progress card is clickable and opens that realm's collection page.
- Realm cards should use recognizable icons: land, sea, sky, and space must read visually before a child can read the words.
- Pressing the gacha button plays a start sound, speaks that the draw is starting, briefly animates, then reveals the result.
- The result speaks whether the child met a new character or a duplicate.
- The draw result card is clickable and opens that character's personal collection panel.

The collection page also speaks on entry.

- Realm tabs are shown first.
- Choosing a realm plays a sound and speaks which realm the child is viewing.
- All four realms can be opened from the tabs. Locked realms may be viewed, but their characters remain unavailable until unlocked.
- The character list is grouped by species.
- Each species section shows the species icon, species name, and collected count out of 9.
- Each species section shows the 9 family roles in a compact grid.
- A collected character must be tapped before its affection and interaction panel opens.
- Tapping a character plays a sound and speaks that the child can add hearts or open interactions.
- Adding a heart spends 3 stars, plays a reward sound, and speaks the new heart total.
- Opening an interaction speaks the interaction line.
- The collection page includes a small gacha shortcut button near the page heading.
- Until final AI art is approved, character avatars use species icon plus family-role accessories and affection-based mood badges. Final generated art can replace this symbolic layer later.

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
- completedOrders
- ownedCharacters
- characterHearts
- duplicateGachaStreak
- seenCharacterInteractions
- selectedOrder

This is sufficient for solo testing on one device.

Future cloud backup should be added before serious family testing or app-store release, because losing a child's collection would feel bad. Cloud backup should store the same progress shape server-side, keyed to a user account or parent-managed profile.
