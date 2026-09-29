# DUKE KITCHEN — Luxury Restaurant Page Redesign

## Problem

The current DUKE KITCHEN /restaurant page feels small, flat, card-heavy, and template-like. It uses a generic `PageHeader`, small centered cards, and tight spacing — failing to deliver the premium 5-star fitness lifestyle restaurant experience that the DUKE brand demands. The photography is undersized, typography is cramped, and compositions are symmetric and safe.

## Users

- **End customers**: Gym members, restaurant patrons, and prospects visiting `/restaurant` to view the menu, book tables, or order takeaway.
- **Client / DUKE brand stakeholders**: Need the page to feel like a high-end commercial website worthy of a luxury fitness club.

## Goals

1. Transform `/restaurant` into a cinematic, luxury 5-star fitness lifestyle restaurant experience.
2. Dramatically improve visual hierarchy through photography scale, editorial typography, asymmetric composition, and generous whitespace.
3. **Keep 100% of existing data, routes, prices, menu items, reservation logic, WhatsApp actions, and config unchanged** — no business logic changes, only presentation.

## Non-Goals

- No new menu items, prices, calories, reviews, hours, or fake content.
- No changes to `data/menu.ts`, `data/siteConfig.ts`, `lib/contact.ts`, or any data/config file.
- No changes to WhatsApp message construction, reservation form fields, or modal ordering logic.
- No breaking changes to responsive behavior (must still work on mobile, tablet, desktop).
- No changes to the Navbar, Footer, FloatingButtons, or other shared layout components.

## Functional Requirements

### FR-1: Hero — Cinematic DUKE KITCHEN Hero

- Full-screen hero (min ~88vh-92vh) using existing `siteConfig.zones.restaurant.image` as base.
- Dramatic dark overlays (multi-layer gradient + radial vignette + optional parallax on scroll).
- Ken Burns slow zoom on the background image (using existing `ken-burns` class when motion allowed).
- Subtle gold light-drift glow, smoky fog, and film-grain overlay matching GymHero style.
- Left-aligned asymmetric layout (not centered): DUKE KITCHEN wordmark with enormous gold-gradient "DUKE" + "KITCHEN" in warm-white uppercase with letterspacing.
- Gold section label line with "FUEL × YOUR × REIGN" or existing restaurant tagline.
- Two premium CTAs: "Explore Menu" (anchor to menu section) + "Reserve a Table" (WhatsApp).
- Vertical scroll indicator on the right edge (desktop only), matching GymHero pattern.
- Optional scroll-based image/content parallax transforms via `useScroll` + `useTransform`.
- Respect `prefers-reduced-motion` everywhere.

### FR-2: Chef's Philosophy — Premium Split Editorial Section

- Replace the small centered text block with a split 50/50 or asymmetric layout.
- Left: large cinematic food/chef imagery (use an existing `menuItems[*].image` OR the existing restaurant image, no external new images).
- Right: Editorial copy block with large serif display heading + generous paragraph + thin gold underline animation.
- Preserve the exact Chef's Philosophy text from `app/restaurant/page.tsx` lines 31-35.

### FR-3: Featured / Signature Dish Presentation

- NEW large section before the menu grid: spotlight 1–3 existing popular items (those with `popular: true` from `data/menu.ts`).
- Asymmetric editorial layout: one hero image + side info card OR a 3-column premium showcase.
- Show name, price, description, calories, protein for each.
- "Order via WhatsApp" CTA that opens the same waLink message the existing modal uses.
- All data from real `menuItems` only — no invented dishes.

### FR-4: Menu Section — Large Premium Food Cards

- Preserve exact menu data, search, category filtering, modal detail, and WhatsApp ordering from `MenuSection`.
- Upgrade category tabs to `variant="editorial"` from existing `Tabs` component or create a premium editorial-style nav.
- Replace small 3-column cards with a larger, richer layout:
  - Larger images (taller aspect ratio).
  - Cinematic overlay gradients on hover.
  - Elegant hover zoom (already exists but enhance subtly).
  - Clearer nutrition info row with thin gold separators.
  - Thin gold architectural frame lines or subtle corner ornaments.
  - "Popular" badge styling upgraded.
  - Modal upgraded with larger image, premium info block, same WhatsApp CTA.
- Search bar upgraded styling — larger, more editorial, but same logic.

### FR-5: Combo Deals — Richer Visual Presentation

- Replace basic 3 equal glass cards with a luxury composition.
- Options: editorial card grid with varying sizes, or a stepped asymmetric layout with "Save ৳X" callout made prominent.
- Preserve exact combo names, items, prices, and save values from `data/menu.ts` `comboDeals`.
- Add elegant iconography / thin gold lines / "VALUE" / "SIGNATURE" labels per combo.

### FR-6: Member Benefits — Premium Lifestyle Section

- Replace 3 identical centered glass cards with a stronger visual hierarchy.
- Asymmetric layout: large lifestyle benefit block + 2 smaller or grid with iconography.
- Preserve exact copy: 10%/15%/20% member discount, meal plans, takeaway/delivery text.
- Keep the 3 icons (Percent / UtensilsCrossed / Truck) but elevate presentation.

### FR-7: Table Reservation — Luxury Concierge Booking

- Split layout: large restaurant image on one side, elegant form on the other (not single centered glass card).
- Keep exact fields: Name, Date, Time, Guests dropdown with same values.
- Keep exact `handleSubmit` WhatsApp message construction from `ReservationForm`.
- Premium field styling: thinner gold underlines or editorial inputs, concierge micro-copy, "Concierge will confirm within minutes" message.

### FR-8: Takeaway & Delivery — Full-Width CTA

- Replace the tiny centered `bg-smoke/30` section with a strong full-width cinematic CTA band.
- Large dark image background + overlay.
- Huge heading "Takeaway & Delivery", two premium CTAs (Call + WhatsApp Order).
- Preserve exact phone number via `telLink()`, exact WhatsApp message via `waLink(...)`, and exact opening hours string from `siteConfig.zones.restaurant.hours`.

### FR-9: Final Cinematic CTA Before Footer

- NEW section: full-width brand CTA similar to `GymFinale` pattern.
- Headline e.g. "FUEL YOUR REIGN." / "DUKE KITCHEN." large editorial display, gold accent, CTA to WhatsApp or Reserve.
- Thin gold top border line with gradient.

### FR-10: Luxury Brand Closing / Footer (on-page section)

- No change to the shared global `Footer.tsx` component.
- The final CTA (FR-9) serves as the on-page luxury closing, seamlessly flowing into the global footer.

### FR-11: Motion — Tasteful Framer Motion / GSAP

- Scroll-reveal animations on every section using `whileInView`.
- Image parallax on hero (and optionally other sections with images).
- Subtle image zoom on hover — not exaggerated.
- Gold underline / gold line growth animations where possible.
- Magnetic / elevated button hover states where appropriate (do not break `GoldButton` core logic).
- **Respect `prefers-reduced-motion`** globally.
- Continue to use Framer Motion (already imported and used extensively); GSAP is available but only use if clearly beneficial.

### FR-12: Metadata & Routes

- Keep exact `export const metadata` from `app/restaurant/page.tsx` (title, description unchanged).
- Keep route `/restaurant` unchanged — only its page content.

## Non-Functional Requirements

### NFR-1: Data Integrity (rule)

- No new dish, price, calorie, protein, combo, hour, or contact data introduced.
- No modifications to files under `data/` or `lib/contact.ts`.
- All WhatsApp messages identical to current construction (only wrap in new UI).

### NFR-2: Business Logic (rule)

- `ReservationForm` state and `handleSubmit` behavior preserved (may move into a new component file structure, but logic identical).
- `MenuSection` search filter, tab filter, modal open, and "Order via WhatsApp" message construction preserved.
- No new dependencies added (project already has framer-motion, gsap, lenis, lucide-react).

### NFR-3: Responsive (rule)

- Mobile-first; no horizontal overflow at any viewport width 320px+.
- Existing responsive breakpoints (sm / md / lg) respected; no new breakpoint system.
- All sections collapse gracefully on mobile — split layouts become stacked.

### NFR-4: Visual Style System (rubric)

- **Scale 0-3, pass threshold ≥ 2.**
- Anchors:
  - `0`: Still feels like the old card-heavy template.
  - `1`: Small improvements but still template-like.
  - `2`: Clearly luxury — large scale, asymmetric layouts, black + gold + warm white, film grain, thin gold lines, editorial serifs.
  - `3`: Exceptional — feels like an Awwwards-level luxury hospitality site.

### NFR-5: Typography Scale (rubric)

- **Scale 0-3, pass threshold ≥ 2.**
- Headings must be noticeably larger than current (current ~5xl for `PageHeader`, ~4xl for `SectionHeading`).
- Use `font-display` (Cinzel) consistently for display, Inter (body) for copy.
- Line heights tight on display, generous on body copy.
- Uppercase tracking labels for section eyebrows.

### NFR-6: Motion & Polish (rubric)

- **Scale 0-3, pass threshold ≥ 2.**
- Tasteful scroll reveals, parallax, hover effects present.
- No excessive gold, no rounded-everything, no gaudy effects.
- Subtle Ken Burns on hero, reduced motion respected.

## Constraints

- **Do not change** `data/menu.ts`, `data/siteConfig.ts`, `lib/contact.ts`, `components/layout/Footer.tsx`, `components/layout/Navbar.tsx`.
- **Do not invent** content: prices, reviews, calories, hours, menu items, staff names.
- Existing images (from `menu.ts` items + `siteConfig.zones.restaurant.image`) are the only imagery allowed.
- Cinzel (display serif) + Inter (body) font stack unchanged.
- Black `#0B0B0C` / gold `#D4AF37` / champagne `#F1DDA0` / bronze `#8C6B2A` / warm white `#F5F1E6` palette unchanged.

## Dependencies

- Existing: `framer-motion` ^13.4.4, `gsap` ^3.15.0, `lucide-react` ^0.446.0, `next` 13.5.1, React 18.2 — all sufficient.
- CSS utility classes already defined in `app/globals.css`: `.ken-burns`, `.gold-light-drift`, `.editorial-card`, `.gold-underline`, `.gym-grain`, `.btn-gold`, `.corner-ornament`, `.film-grain`, `.text-gold-gradient`, `.diamond-divider`, `.section-label`. All can be reused.

## Assumptions

- Images hosted on `images.pexels.com` in `menu.ts` and `siteConfig` are acceptable for production hero use.
- The user's attached screenshot (not visible here) describes the same sections already present in `app/restaurant/page.tsx`.
- Meta tags, sitemap, and structured data are already handled by the root layout and do not need changes.

## Open Questions

None at this time. Any ambiguity will be resolved by following the GymHero / GymFinale premium editorial patterns as the reference implementation.

---

## Acceptance Criteria

### AC-1 (rule): All existing menu items render with correct prices, descriptions, images, and categories
- Evidence: Compare each of the 14 items in `data/menu.ts` to what renders on page.

### AC-2 (rule): Combo deals show exact 3 combos with identical name, price, item list, and save value
- Evidence: Cross-reference `comboDeals` array against rendered output.

### AC-3 (rule): Reservation form fields and WhatsApp message text identical to current
- Evidence: Submit form, compare URL & query string to baseline. Fields: name, date, time, guests (1–10+).

### AC-4 (rule): Takeaway section CTAs use `telLink()` and `waLink('Hello Duke Kitchen! I would like to place an order.')` exactly
- Evidence: Inspect href attributes.

### AC-5 (rule): Opening hours string matches `siteConfig.zones.restaurant.hours` verbatim
- Evidence: Compare rendered text to config value.

### AC-6 (rule): Member benefits copy matches exactly: Gold 10%, Platinum 15%, Black Diamond 20%
- Evidence: Cross-reference the 3 benefit paragraphs.

### AC-7 (rubric): Visual Luxury — NFR-4 score ≥ 2
- Evidence: Full-page screenshot comparison showing hero scale, split layouts, not card-template feel.

### AC-8 (rubric): Typography Scale — NFR-5 score ≥ 2
- Evidence: Heading sizes visibly larger; section eyebrows with uppercase + tracking; editorial feel.

### AC-9 (rubric): Motion Quality — NFR-6 score ≥ 2
- Evidence: Scroll reveals, hero parallax/Ken Burns, hover effects, reduced motion respected.

### AC-10 (rule): No horizontal scroll / layout break on 320px–1920px widths
- Evidence: DevTools responsive mode check.

### AC-11 (rule): `next build` completes successfully with no TypeScript errors
- Evidence: Build output from `npm run build`.
