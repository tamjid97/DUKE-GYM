# DUKE KITCHEN Redesign — Implementation Tasks

Derived from `spec.md`. Each completed task records Completion Evidence
(self-verified TRs passing) before moving to the next highest-priority item.

Priority legend: **H**igh — **M**edium — **L**ow.

---

## Task 1: Create cinematic KitchenHero component
**Status:** pending
**Priority:** H
**Maps to AC:** AC-7, AC-8, AC-9
**File:** `components/restaurant/KitchenHero.tsx` (new)

### Description
Build a full-screen cinematic hero modeled on `components/gym/GymHero.tsx` but
for DUKE KITCHEN. Use `siteConfig.zones.restaurant.image`, Ken Burns zoom,
gold light drift, film grain, multi-layer dark overlays, asymmetric left-aligned
enormous DUKE KITCHEN wordmark, 2 CTAs, right-side vertical scroll indicator,
scroll-based image and content parallax via `useScroll`/`useTransform`. Respect
`useReducedMotion`. Eyebrow label: "FUEL × YOUR × REIGN". CTAs:
"Explore Menu" → anchor to `#kitchen-menu`, "Reserve a Table" →
`waLink('Hello Duke Kitchen! I'd like to reserve a table.')`.

### Test Requirements
- **(rule)** Hero height ≥ 88vh; wordmark `DUKE` uses clamp min 64px, gradient gold text; `KITCHEN` uses warm white uppercase letterspacing.
- **(rule)** Background image uses `siteConfig.zones.restaurant.image` exactly.
- **(rule)** Both CTAs have correct hrefs.
- **(rubric)** Motion: hero parallax, Ken Burns, reveals; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 2: Create KitchenPhilosophy split editorial section
**Status:** pending
**Priority:** H
**Maps to AC:** AC-8
**File:** `components/restaurant/KitchenPhilosophy.tsx` (new)

### Description
Premium asymmetric split layout (image + editorial copy). Left/top: large food
image reusing an existing high-quality image from `menuItems` where `popular=true`
or the restaurant image. Right/bottom: section eyebrow, large Cinzel heading
"CHEF'S PHILOSOPHY", the exact body copy from `app/restaurant/page.tsx` lines
31-35, a thin gold underline with `gold-line-grow` animation on view entry, and
generous whitespace. On mobile the image stacks above the copy.

### Test Requirements
- **(rule)** Body copy matches verbatim the text from current restaurant page Chef's Philosophy paragraph.
- **(rule)** Layout is split on `lg+`, stacked below.
- **(rubric)** Visual hierarchy: heading large, gold underline, cinematic; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 3: Create KitchenSignature featured/signed dish section
**Status:** pending
**Priority:** M
**Maps to AC:** AC-1
**File:** `components/restaurant/KitchenSignature.tsx` (new)

### Description
Large editorial featured section spotlighting popular items. Filter
`menuItems.filter(m => m.popular === true)` (Grilled Chicken Bowl, Protein
Pancakes, Chocolate Protein Shake, BBQ Chicken Platter, Bengali Thali).
Composition: the highest-priced popular item as a hero big-image card, plus 2–4
supporting columns below or beside. Each card shows name, ৳price, description,
calories, protein, and a `GoldButton` "Order via WhatsApp" using the same
message pattern the current modal uses:
`waLink('Hello Duke Kitchen! I'd like to order: ${name} — ৳${price}.')`.

### Test Requirements
- **(rule)** Only items with `popular:true` are shown.
- **(rule)** Each WhatsApp href matches the exact string format above.
- **(rule)** No invented content: prices, cals, protein, descriptions match `menu.ts`.
- **(rubric)** Visual luxury: asymmetric, large imagery; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 4: Rewrite KitchenMenu (MenuSection + upgraded cards & categories)
**Status:** pending
**Priority:** H
**Maps to AC:** AC-1, AC-7, AC-8, AC-9
**File:** `components/restaurant/KitchenMenu.tsx` (new; do NOT modify the shared `MenuSection.tsx` — leave it untouched for any other page using it)

### Description
Re-implement the MenuSection logic but with a premium presentation:
- Larger search bar, editorial styling, same exact search filter logic.
- Category tabs using the `variant="editorial"` style from existing `Tabs` component or custom editorial nav with animated gold underline per active tab.
- Menu grid: cards with taller images (~h-64), richer overlay, elegant hover zoom (1.05–1.08 scale), thin gold corner ornaments, nutrition info row clearly separated, popular badge upgraded.
- Modal retains the same order-by-WhatsApp logic with identical message.
- Keep the exact filtering logic (category + search name/description).

### Test Requirements
- **(rule)** Rendered 14 items match `menu.ts` exactly for name, price, category, calories, protein, veg, spicy, popular, image, description.
- **(rule)** Search filters by name and description, case-insensitive.
- **(rule)** Modal "Order via WhatsApp" uses the same message as current.
- **(rubric)** Card visual polish: larger image, richer hierarchy, nutrition clear; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 5: Rewrite KitchenCombos (ComboDeals as luxury composition)
**Status:** pending
**Priority:** M
**Maps to AC:** AC-2, AC-7
**File:** `components/restaurant/KitchenCombos.tsx` (new; shared `ComboDeals` untouched)

### Description
Replace the three equal glass cards with a stepped or staggered asymmetric
editorial composition. Each combo prominently shows the "Save ৳X" callout, a
distinctive label such as "POST-WORKOUT", "BREAKFAST POWER", "BENGALI FEAST", a
curved or thin gold separator, and the item list with a gold diamond bullet.
Preserve the exact combo data from `comboDeals`.

### Test Requirements
- **(rule)** All 3 combos from `comboDeals` present with identical name, price, items array, and save value.
- **(rule)** Save ৳ value shown for each.
- **(rubric)** Not three identical centered cards anymore; varied composition; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 6: Create KitchenBenefits premium lifestyle section
**Status:** pending
**Priority:** M
**Maps to AC:** AC-6, AC-8
**File:** `components/restaurant/KitchenBenefits.tsx` (new)

### Description
Three benefits but with stronger visual hierarchy, not three equal glass cards.
Options: big-left-card + two stacked, or a 3-column grid but each benefit has a
distinct size/role, or a large section eyebrow + benefit rows with icon +
heading + copy with a vertical gold line timeline. Use the existing 3 icons
(`Percent`, `UtensilsCrossed`, `Truck`) and preserve the exact benefit copy.

### Test Requirements
- **(rule)** Benefit 1 discount tiers copy matches: Gold 10%, Platinum 15%, Black Diamond 20%.
- **(rule)** Benefit 2 "Meal Plans" paragraph matches current.
- **(rule)** Benefit 3 "Takeaway & Delivery" paragraph matches current.
- **(rubric)** Layout is not three identical centered cards; stronger visual hierarchy; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 7: Rewrite KitchenReservation concierge-style split booking
**Status:** pending
**Priority:** H
**Maps to AC:** AC-3, AC-7, AC-8
**File:** `components/restaurant/KitchenReservation.tsx` (new; shared `ReservationForm.tsx` untouched)

### Description
Split layout: left/right side shows a large restaurant image, right/left side
shows an elegant reservation form. Keep exact fields: Name, Date, Time,
Guests (1,2,3,4,5,6,7,8,9,10+). Preserve the exact `handleSubmit` WhatsApp
message from the original `ReservationForm`. Premium input styling, concierge
micro-label text, larger CTA. Form has concierge messaging: "A member of our
concierge team will confirm your table within minutes via WhatsApp."

### Test Requirements
- **(rule)** State variables `name, date, time, guests` identical shape and default value.
- **(rule)** On submit, opens `window.open(waLink(msg), '_blank')` with the exact same msg format as current.
- **(rule)** Guest options list is [1..10+] unchanged.
- **(rubric)** Split layout visual; not a single centered card; concierge feel; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 8: Create KitchenTakeaway full-width cinematic CTA
**Status:** pending
**Priority:** M
**Maps to AC:** AC-4, AC-5, AC-7
**File:** `components/restaurant/KitchenTakeaway.tsx` (new)

### Description
Strong full-width band. Large food or restaurant image background + dark
overlay + film grain. Huge warm-white serif heading "Takeaway & Delivery".
Subheading matches current "Call us for takeaway orders or delivery within
Gulshan area." Two premium CTAs side-by-side: solid gold "Call to Order" using
`telLink()`, outline gold "WhatsApp Order" using
`waLink('Hello Duke Kitchen! I would like to place an order.')`. Show opening
hours text with gold label "Opening Hours" followed by
`siteConfig.zones.restaurant.hours` exactly.

### Test Requirements
- **(rule)** Call href = `telLink()` output.
- **(rule)** WhatsApp href = same message string as current.
- **(rule)** Opening hours verbatim matches `siteConfig.zones.restaurant.hours`.
- **(rubric)** Full-width, cinematic, premium; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 9: Create KitchenFinale final cinematic CTA
**Status:** pending
**Priority:** L
**Maps to AC:** AC-7, AC-8, AC-9
**File:** `components/restaurant/KitchenFinale.tsx` (new)

### Description
Modeled on `GymFinale`. Full-width section with thin gold top border line
gradient. Large editorial headline: e.g. "EAT CLEAN." /
"FUEL YOUR REIGN." + "— DUKE KITCHEN" closing. CTA either "Reserve Now" or
"Order via WhatsApp" with appropriate waLink. Scroll reveal animation.

### Test Requirements
- **(rule)** Thin gold gradient top border (full width 70% centered linear gradient).
- **(rubric)** Closing feels luxury, editorial; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 10: Rewrite `app/restaurant/page.tsx` to compose the new components
**Status:** pending
**Priority:** H
**Maps to AC:** AC-1..AC-11
**File:** `app/restaurant/page.tsx` (edit)

### Description
Remove the current sections (`PageHeader`, ChefStory `SectionHeading` block,
`MenuSection`, `ComboDeals`, GlassCard benefits, `ReservationForm`, tiny
Takeaway). Import and compose the 9 new components in order:
KitchenHero → KitchenPhilosophy → KitchenSignature → KitchenMenu →
KitchenCombos → KitchenBenefits → KitchenReservation → KitchenTakeaway →
KitchenFinale. Keep the same `metadata` export unchanged. Keep anchor id
`#kitchen-menu` on the KitchenMenu section wrapper so the hero CTA scrolls to
it.

### Test Requirements
- **(rule)** `export const metadata` block matches the current content byte-for-byte.
- **(rule)** Route stays `/restaurant` (no new file routing changes).
- **(rule)** `#kitchen-menu` anchor exists so hero CTA scrolls correctly.
- **(rule)** `npm run typecheck` passes.
- **(rule)** `npm run build` passes.
- **(rule)** No horizontal scroll on widths 320–1920 (AC-10).
- **(rubric)** Page flow: sections rhythm, spacing scale, composition; score ≥ 2.

### Completion Evidence
(to be filled by implementer)

---

## Task 11: Build verification, lint, and typecheck
**Status:** pending
**Priority:** H
**Maps to AC:** AC-11, AC-10

### Description
After Task 10 completes, run `npm run typecheck`, `npm run lint`, and
`npm run build` and record passing evidence. Inspect responsive mode at widths
320, 768, 1024, 1440, 1920 for no horizontal overflow.

### Test Requirements
- **(rule)** `tsc --noEmit` zero errors.
- **(rule)** `next lint` zero new errors (existing pre-existing lint issues ok).
- **(rule)** `next build` exits 0.
- **(rule)** DevTools responsive check shows no horizontal scrollbar at 320px, 768px, 1024px, 1440px, 1920px.

### Completion Evidence
(to be filled by implementer)
