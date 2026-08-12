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
| Teacher / `老師` | adult teacher, tidy classroom clothing, calm instructional posture, may carry a book or point gently, must not look like the mother unless the sentence explicitly says the mother is acting as a teacher |
| Classmate girl | preschool-age girl, distinct from the child protagonist, different hairstyle and clothing color |
| Classmate boy | preschool-age boy, distinct from `你` when both appear, different clothing color or accessory |
| Elder woman | older adult woman, short or tied hair, gentle face lines, simple elder clothing, not a reused mother face |
| Elder man | older adult man, older posture or face lines, simple elder clothing, not a reused father face |
| Passersby / generic adults | varied adult people with different ages, genders, hairstyles, clothing, and body shapes; never duplicate the mother/teacher template across a crowd |

## Reference Image Set

The next dedicated visual-reference task should create a small accepted cast set in the L058 style, reviewed by the teacher before being used broadly:

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

Do not treat these paths as existing until the reference task actually creates and commits them.

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
- A passerby or generic adult is not the same recurring adult woman reused from another role.
- The same recurring role stays consistent across the lesson and with any ledger description.

If the generated image clones the wrong role, regenerate the image. Do not pass the issue to Release as a known defect unless the teacher explicitly accepts it.

## Release And Repair Duties

Release may reject or hold a package when a repeated wrong-role face makes the image meaning unclear.

Asset Repair should treat wrong-role cloning as an image repair defect. A teacher note such as "teacher looks like mom" or "all adults are the same woman" is enough scope to regenerate the affected image.

## Ledger Updates

When a new recurring human role is approved in merged assets, add a concise visual continuity note to `docs/CURRICULUM_LEDGER.md` during Release or the next supervised SOP/ledger maintenance pass.

Do not add long prompt text to the ledger. Record stable identity facts only: role, age category, hairstyle, clothing cue, accessory, and any key distinction from similar roles.
