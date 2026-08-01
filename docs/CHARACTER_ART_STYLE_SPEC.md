# Collection Character Art Style Spec

This document defines the art direction for generated collection character images in `認字練功房`.

The goal is to keep the collectible characters visually consistent with the existing Stage 3 lesson pictures while avoiding unnecessary regeneration cost.

## Existing Lesson Image Baseline

The current L001-L009 Stage 3 images establish the visual world:

- Warm children's picture-book illustration.
- Soft watercolor or gouache-like texture.
- Cream or pale warm background for character-focused images.
- Bright but gentle colors: coral red, warm yellow, soft blue, fresh green, peach skin tones.
- Soft brown or colored outlines, not thick black outlines.
- Rounded shapes and friendly expressions.
- Clear centered subject with generous empty space.
- Phone-readable composition: one main idea, large face or body, low clutter.
- No visible text, letters, numbers, zhuyin, signs, labels, UI, or watermarks.

Representative references:

- L007 fixed `我` girl: warm cream background, coral-red pinafore, yellow shirt, rounded face, large friendly eyes.
- L006 hand images: soft watercolor texture, warm linework, clear large forms.
- L009 mountain images: brighter outdoor greens and blues, still soft, rounded, and child-friendly.

Collection character images should feel like they belong in the same app world. They should not look like a different product, 3D toy renders, sticker packs, plastic figurines, vector icons, anime mascots, or realistic animal portraits.

## Art Direction

Each collectible character is an animal family member. The character should be the animal itself with age and role cues, not a human wearing an animal costume.

Use this base style:

```text
Warm children's picture-book illustration, soft watercolor texture, gentle colored pencil linework, rounded cute animal character, friendly expressive eyes, soft warm lighting, clean pale cream background, clear full-body pose, centered subject, generous empty space, simple readable details, no text, no letters, no numbers, no symbols, no signs, no labels, no watermark.
```

Avoid:

```text
3D render, plastic toy, vinyl figure, sticker, flat vector icon, heavy black outline, sharp anime style, realistic animal anatomy, scary teeth or claws, cluttered background, busy pattern, text, letters, numbers, labels, signs, watermark, zhuyin.
```

## Image Format

Preferred production target:

- Square image.
- Minimum source size: 1024 x 1024.
- Final app asset: WebP.
- Background: pale warm cream or very light simple wash.
- Subject: full body or nearly full body, centered, occupying about 70-85% of the image height.
- Leave margin around ears, tail, accessories, and feet so the UI can crop safely.

Do not use transparent background for the first style review. The existing lesson images use softly painted backgrounds, so the first review should check compatibility with that world. Transparent cutouts can be tested later only if UI cards need them.

## Family Role System

Each species has 9 roles:

- 爺爺
- 奶奶
- 爸爸
- 媽媽
- 哥哥
- 姐姐
- 弟弟
- 妹妹
- 寶寶

The nine characters in a species must clearly feel like one family:

- Same species shape language.
- Similar fur color family, with small variations allowed.
- Consistent eye style, muzzle style, ear shape, and body proportions.
- Role differences shown by age, size, expression, and small accessories.
- Accessories should be readable on a phone but not visually noisy.

Suggested role cues:

| Role | Visual Cue |
|---|---|
| 爺爺 | gentle older face, small round glasses, vest or scarf, slower relaxed pose |
| 奶奶 | gentle older face, small glasses or shawl, warm caring pose |
| 爸爸 | slightly larger body, simple shirt or vest, steady protective pose |
| 媽媽 | warm adult pose, apron or soft cardigan, caring expression |
| 哥哥 | older child size, small backpack or cap, confident playful pose |
| 姐姐 | older child size, hair bow or shoulder bag, kind playful pose |
| 弟弟 | younger child size, simple shorts or small toy, lively pose |
| 妹妹 | younger child size, small bow or dress detail, cheerful pose |
| 寶寶 | smallest, roundest proportions, sitting or tiny standing pose, very simple bib or blanket |

Use accessories sparingly. The animal species must remain recognizable even if the accessory is hidden by a small card crop.

## Token-Saving Prompt Structure

Do not write a full custom prompt from scratch for every image. Use one stable style anchor and only swap species, role, and role cue.

### Style Anchor

```text
Warm children's picture-book illustration matching the existing 認字練功房 lesson images: soft watercolor texture, gentle colored pencil linework, rounded cute character shapes, friendly expressive eyes, warm cream background, bright but gentle colors, clear centered full-body subject, generous empty space, phone-readable details.
```

### Negative Anchor

```text
No text, letters, numbers, zhuyin, signs, labels, UI, watermark. Not 3D, not plastic toy, not sticker, not flat vector icon, not realistic, not anime, no thick black outline, no cluttered background.
```

### Single-Character Prompt Template

```text
Create one collectible character image for a children's Chinese character recognition app.

Character: {SPECIES}{ROLE}
Design: the character is a cute {SPECIES} itself, not a human in a costume. It belongs to a 9-member {SPECIES} family.
Role cue: {ROLE_CUE}
Style: Warm children's picture-book illustration matching the existing 認字練功房 lesson images: soft watercolor texture, gentle colored pencil linework, rounded cute character shapes, friendly expressive eyes, warm cream background, bright but gentle colors, clear centered full-body subject, generous empty space, phone-readable details.
Composition: square image, centered full-body character, simple pose, safe margin around ears, tail, hands, and feet.
Restrictions: No text, letters, numbers, zhuyin, signs, labels, UI, watermark. Not 3D, not plastic toy, not sticker, not flat vector icon, not realistic, not anime, no thick black outline, no cluttered background.
```

### Contact Sheet Prompt Template

Use contact sheets only for review. Do not treat the contact sheet as final app art unless the individual crops are clean enough.

```text
Create a 3x3 review contact sheet of one cute {SPECIES} family for a children's Chinese character recognition app.

Show these 9 family roles in order: 爺爺, 奶奶, 爸爸, 媽媽, 哥哥, 姐姐, 弟弟, 妹妹, 寶寶.
Each character should be a cute {SPECIES} itself, not a human in a costume.
The family must share the same species design, color family, eye style, muzzle style, and soft watercolor picture-book style.
Each role must be visually distinguishable by age, size, expression, and one simple accessory.

Style: Warm children's picture-book illustration matching the existing 認字練功房 lesson images: soft watercolor texture, gentle colored pencil linework, rounded cute character shapes, friendly expressive eyes, warm cream background, bright but gentle colors, clear centered full-body subjects, generous empty space, phone-readable details.
Restrictions: No text, letters, numbers, zhuyin, signs, labels, UI, watermark. Not 3D, not plastic toy, not sticker, not flat vector icon, not realistic, not anime, no thick black outline, no cluttered background.
```

## Review Workflow

Do not generate all 540 characters at once.

### Step 1: Three-Role Style Test

Start with land species `貓`.

Generate only 3 images or one 3-character review image:

- 貓爺爺
- 貓媽媽
- 貓寶寶

Review these before any 9-role batch.

Pass criteria:

- The images match the existing lesson picture-book world.
- The characters look like animals, not children in costumes.
- The role difference is readable at phone card size.
- The style does not drift into 3D, sticker, vector, or anime.
- The palette works beside the existing coral/yellow/cream lesson images.
- The character remains recognizable with a small crop.

### Step 2: One-Species 9-Role Contact Sheet

After the 3-role test passes, generate one `貓` family contact sheet with all 9 roles.

Review on a phone:

- Do all 9 feel like one family?
- Can a child tell older/younger roles apart?
- Is each card readable when reduced to collection-grid size?
- Are accessories helpful but not too detailed?
- Are expressions warm and safe?
- Does the style still match L007/L008/L009 lesson images?

### Step 3: Final Individual Images

Only after the contact sheet is approved, generate final individual images for the 9 `貓` roles.

Store final approved assets later under:

```text
public/assets/characters/
```

Recommended path shape:

```text
public/assets/characters/land/cat/grandpa.webp
public/assets/characters/land/cat/grandma.webp
public/assets/characters/land/cat/father.webp
public/assets/characters/land/cat/mother.webp
public/assets/characters/land/cat/older-brother.webp
public/assets/characters/land/cat/older-sister.webp
public/assets/characters/land/cat/younger-brother.webp
public/assets/characters/land/cat/younger-sister.webp
public/assets/characters/land/cat/baby.webp
```

### Step 4: Small Batches

After the `貓` family is approved in-app on a phone, generate future species in small batches:

- 1 to 3 species at a time.
- Use the same style anchor.
- Keep a contact sheet for review before individual final images.
- Stop and revise immediately if the model drifts.

## Rejection Criteria

Reject and regenerate if any image:

- Contains text, letters, numbers, zhuyin, signs, labels, or watermark.
- Looks like 3D, plastic, toy, sticker, icon, anime mascot, or realistic animal photo.
- Has thick black outlines unlike the lesson images.
- Uses a dark, muddy, or high-contrast palette.
- Has a busy background that competes with the character.
- Crops off important ears, tail, feet, or accessories.
- Makes the animal species hard to identify.
- Makes family roles indistinguishable.
- Looks scary, sharp, aggressive, or too adult.
- Does not read clearly at small phone card size.

## First Test Recommendation

Start with `貓爺爺`, `貓媽媽`, and `貓寶寶`.

If those pass, create the `貓` 9-role contact sheet. Do not generate the rest of the land realm until the first species family has been reviewed on a phone and the style anchor is locked.

## Approved Pilot Batch

The first approved collection-art batch is the land `貓` family.

Approved source:

- `tmp/collection-art-tests/cat-family-3-role-style-test-v1.png`
- `tmp/collection-art-tests/cat-family-9-role-contact-sheet-v1.png`

Final prototype assets:

```text
public/assets/characters/land/cat/cat-grandpa.webp
public/assets/characters/land/cat/cat-grandma.webp
public/assets/characters/land/cat/cat-father.webp
public/assets/characters/land/cat/cat-mother.webp
public/assets/characters/land/cat/cat-older-brother.webp
public/assets/characters/land/cat/cat-older-sister.webp
public/assets/characters/land/cat/cat-younger-brother.webp
public/assets/characters/land/cat/cat-younger-sister.webp
public/assets/characters/land/cat/cat-baby.webp
```

Production note:

- The approved contact sheet was used for the family style and most prototype assets.
- `cat-younger-brother.webp` was regenerated as an individual image because the contact-sheet crop had edge artifacts.
- Future species should use the approved cat family as the style reference, but should still be generated and reviewed in small batches.
