# Lesson Visual Cast SOP

This file controls recurring people and role appearance in lesson and review-module sentence images.

## Core Rule

L058 is the approved lesson image style anchor, not a character identity anchor.

Use L058 references for illustration treatment only:

- warm natural light
- modern children's picture-book look
- fine pencil-and-watercolor linework
- detailed but clean environments
- expressive preschool proportions
- soft cheeks and gentle expressions
- bright warm palette
- phone-readable square composition

Do not copy the specific woman, child, clothing, hair, face, or body shape from L058 into unrelated roles.

## Why This Exists

Recent production work overused the adult woman from the L058 reference images. This made mother, teacher, passerby, and other unrelated adults look like the same person. That is a visual continuity error, not a valid style match.

## Cast Authority

Role identity and style are separate:

- Style source: `docs/CURRICULUM_PRODUCTION_SOP.md` image rules, normally L058 references.
- Cast source: this SOP plus approved visual continuity notes in `docs/CURRICULUM_LEDGER.md`.
- Final image source: the actual merged asset in `public/assets/lessons/` or `public/assets/reviews/`.

If a role has an approved visual description in the ledger, use it. If the ledger is missing that role, use the role description below and record the new approved description in the next ledger update after Release.

## Baseline Human Cast

Until the teacher approves dedicated cast reference images, use these text descriptions to keep roles distinct.

Current identity priority:

- The protagonist mother-and-girl pair from L058-L200 is intentional continuity. Do not redesign that pair.
- Use `public/assets/lessons/L154/images/L154-S01.webp`, `public/assets/lessons/L162/images/L162-S04.webp`, and `public/assets/lessons/L163/images/L163-S02.webp` as the current identity anchors for the protagonist family.
- The protagonist family is four people: mother, father, little girl protagonist, and older brother. Keep this family together when the sentence context says "my family" or clearly shows the recurring household.
- Older L001-L053 parent/family images may be useful historical context, but they are not current identity anchors if they conflict with the refined L058-L200 protagonist family style.
- Teacher identity must be designed separately from the protagonist mother. Do not reuse the L058/L154 mother as the teacher.

| Role | Stable Appearance |
| --- | --- |
| Child protagonist / `我` | preschool-age child, small rounded face, simple child clothing, visually consistent with the existing approved young-girl continuity when `我` is clearly that recurring child |
| `你` / young boy classmate | preschool-age boy, short slightly tousled dark hair, sky-blue shirt, green shorts, blue shoes, small orange backpack, matching the existing L012 continuity when applicable |
| Mother / `媽媽` | adult woman, warm family role, soft cardigan or apron, practical home clothing, distinct from teachers and passersby |
| Father / `爸爸` | adult man, steady family role, simple shirt or vest, clearly different silhouette and hairstyle from mother and teacher |
| Protagonist godmother / `乾媽` | adult woman in the protagonist girl's trusted family-friend circle; warm but more crisp and capable than the mother; very tall, clearly taller than the protagonist mother and teacher, with a height difference visible at phone size for sentences such as `乾媽的身高很高`; short hair or neat medium-length hair; deep green or blue-green jacket or long top; avoid the protagonist mother's yellow/coral-red palette and avoid teacher classroom clothing, books, pointing, or instructional posture |
| Teacher / `老師` | adult teacher, tidy classroom clothing, calm instructional posture, may carry a book or point gently, must not look like the mother unless the sentence explicitly says the mother is acting as a teacher |
| Classmate girl | preschool-age girl, distinct from the child protagonist, different hairstyle and clothing color |
| Classmate boy | preschool-age boy, distinct from `你` when both appear, different clothing color or accessory |
| Elder woman | older adult woman, short or tied hair, gentle face lines, simple elder clothing, not a reused mother face |
| Elder man | older adult man, older posture or face lines, simple elder clothing, not a reused father face |
| Passersby / generic adults | varied adult people with different ages, genders, hairstyles, clothing, and body shapes; never duplicate the mother/teacher template across a crowd |

## Reference Image Set

Current approved cast reference assets:

```text
public/assets/reference/lesson-cast/godmother.webp
```

Use `godmother.webp` as the visual identity reference for the protagonist godmother / `乾媽`.

The next dedicated visual-reference task should create the remaining small accepted cast set in the L058 style, reviewed by the teacher before being used broadly:

```text
public/assets/reference/lesson-cast/mother.webp
public/assets/reference/lesson-cast/father.webp
public/assets/reference/lesson-cast/older-brother.webp
public/assets/reference/lesson-cast/teacher.webp
public/assets/reference/lesson-cast/protagonist-child.webp
public/assets/reference/lesson-cast/classmate-girl.webp
public/assets/reference/lesson-cast/classmate-boy.webp
public/assets/reference/lesson-cast/elder-woman.webp
public/assets/reference/lesson-cast/elder-man.webp
public/assets/reference/lesson-cast/passersby-group.webp
public/assets/reference/lesson-locations/school.webp
public/assets/reference/lesson-locations/protagonist-home.webp
public/assets/reference/lesson-locations/you-home.webp
public/assets/reference/lesson-locations/he-home.webp
docs/visual-references/lesson-cast.md
```

Do not treat the remaining proposed paths as existing until the reference task actually creates and commits them.

## Location Continuity

Stable continuity is household identity, not permanent terrain.

Early curriculum sentences may say a home is on a mountain, below a mountain, on a mountain road, or in the mountains. Those are sentence meanings for those specific lessons. Do not convert them into permanent geography for the entire 600-lesson world.

Rules:

- If the current sentence explicitly says `山上`, `山下`, `山路`, `山裡`, or another terrain/location word, the image must show that location clearly.
- If the current sentence only says `我家`, `你家`, `他家`, `家裡`, `同學家`, or another home phrase without terrain words, use the stable household identity and interior/exterior style, but do not force a mountain, downhill road, or old early-lesson geography into the image.
- The protagonist home is a normal warm Taiwan home for ordinary home sentences: bright interior, wood floor, bookshelves, plants, soft cream walls, and the refined L154-L163 family identity.
- The `你` home is a normal home with blue/green cues and child-school details such as a backpack, shoes, or neat entry area. It is not permanently "down the mountain" unless the sentence says so.
- The `他` home is a normal home with orange/green sporty cues, two family dogs when relevant, and casual active-family details such as a ball or water bottle. It is not permanently in the mountains unless the sentence says so.
- School and neighborhood scenes may keep the warm Taiwan mountain-town visual world when useful, but they must not add geography that changes the sentence meaning.

## Visual Refresh From L001

The teacher may choose to refresh old lesson images from L001 onward so the whole course matches the refined L058-L200 visual standard.

This is a separate visual-refresh program, not ordinary new lesson Production:

- Do not mix broad visual refresh work into normal Production lesson packages unless the teacher explicitly assigns a small batch to that slot.
- Prefer dedicated visual-refresh or Asset Repair threads working in ordered batches, such as L001-L010, L011-L020, or smaller batches when the images are semantically tricky.
- Keep lesson text, `spokenText`, audio, Stage 4 data, and `charTimings` unchanged unless the teacher explicitly requests a broader lesson repair.
- Keep existing `imageSrc` paths when replacing images in place, so production JSON does not need churn.
- Regenerate only images that are in the assigned batch and record the exact changed asset paths.
- For each refreshed image, preserve the sentence meaning exactly. Do not add unmentioned people, counts, terrain, signs, labels, letters, numbers, or zhuyin.
- Use the current cast and location rules in this SOP. Older L001-L053 family images are not identity anchors if they conflict with the L154-L163 protagonist family.
- Run normal image/production validation before pushing a refresh batch.
- Visual Refresh may push assigned image-only batches directly to `main` when `docs/ROLE_VISUAL_REFRESH_SOP.md` conditions are met, because the teacher's ordinary review page uses `ref=main`.
- Give the teacher the permanent `lesson-asset-review.html?unit=L###&ref=main` URLs after the batch reaches `main`, so refreshed images can be checked through the normal repair queue.

Recommended first pass:

1. Create and approve the dedicated cast/location reference images.
2. Refresh L001-L030 in small batches, because they define early visual language and basic roles.
3. Continue in order, prioritizing lessons whose images visibly clash with the refined L058-L200 style.

## Prompt Contract

Every new or replacement sentence-image prompt that includes a human role must include both a style instruction and a cast instruction.

Style instruction:

```text
Use the approved L058 lesson images only as style references: warm picture-book pencil-and-watercolor linework, soft natural light, detailed but clean environments, expressive preschool proportions, bright warm palette, and phone-readable square composition. Do not copy any specific person from L058.
```

Cast instruction examples:

```text
Use the recurring teacher identity: adult teacher, tidy classroom clothing, calm instructional posture, visually distinct from the mother and from the L058 adult woman.
```

```text
Use the recurring mother identity: warm adult family role, home clothing such as a soft cardigan or apron, visually distinct from the teacher and passersby.
```

```text
Use `public/assets/reference/lesson-cast/godmother.webp` as the recurring protagonist godmother / 乾媽 visual identity reference: very tall adult woman in the protagonist girl's trusted family-friend circle, clearly taller than the protagonist mother and teacher, warm but crisp, short or neat medium-length hair, deep green or blue-green jacket or long top, visually distinct from the protagonist mother and from the teacher.
```

```text
Use varied passersby: mixed adult ages, genders, hairstyles, clothing, and body shapes. Do not repeat the same adult woman face.
```

## Editor Duties

For every approved sentence that shows people, `imageNotes` must name the intended role identity. Avoid vague notes such as only "adult", "woman", or "person" when the sentence means mother, father, teacher, classmate, or passerby.

If a sentence intentionally says one role resembles or impersonates another, say so explicitly in `imageNotes`; otherwise Production must keep those roles visually distinct.

## Production Duties

Before accepting generated images, Production must check:

- L058 style is matched without copying L058 person identity.
- Mother, father, teacher, classmate, elder, and passerby roles are visually distinct.
- A teacher does not look like the mother unless the sentence explicitly requires that.
- The protagonist godmother does not look like the protagonist mother or teacher; keep her very tall, more crisp, and in deep green or blue-green family-friend clothing. In height-focused sentences, the image must make her height obvious on a phone screen.
- A passerby or generic adult is not the same recurring adult woman reused from another role.
- The same recurring role stays consistent across the lesson and with any ledger description.

If the generated image clones the wrong role, regenerate the image. Do not pass the issue to Release as a known defect unless the teacher explicitly accepts it.

## Release And Repair Duties

Release may reject or hold a package when a repeated wrong-role face makes the image meaning unclear.

Asset Repair should treat wrong-role cloning as an image repair defect. A teacher note such as "teacher looks like mom" or "all adults are the same woman" is enough scope to regenerate the affected image.

## Ledger Updates

When a new recurring human role is approved in merged assets, add a concise visual continuity note to `docs/CURRICULUM_LEDGER.md` during Release or the next supervised SOP/ledger maintenance pass.

Do not add long prompt text to the ledger. Record stable identity facts only: role, age category, hairstyle, clothing cue, accessory, and any key distinction from similar roles.
