# DUKE FITNESS CLUB — Website

A premium, multi-page website for Duke Fitness Club — a luxury fitness and lifestyle destination in Dhaka, Bangladesh, featuring four zones: Gym, Restaurant (Duke Kitchen), Swimming Pool (Duke Aqua), and Pool & Game Zone (Duke Arena).

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with custom gold/black theme
- Framer Motion for animations
- Lucide React for icons
- No backend required — all forms send WhatsApp messages

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts automatically. Open your browser to the shown URL.

## How to Customize

### 1. Club Information (phone, address, hours, social links)
Edit `data/siteConfig.ts` — this is the single source of truth. Every page reads from this file, so changing a value here updates it everywhere.

### 2. Logo
The lion logo is an inline SVG used in the navbar, footer, preloader, and 404 page. To replace it with an image logo, swap the SVG elements in:
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/layout/Preloader.tsx`
- `app/not-found.tsx`

### 3. Colors
Color variables are defined in `app/globals.css` under `:root` and in `tailwind.config.ts`. The five brand colors:
- Obsidian Black `#0B0B0C` — main background
- Smoke Graphite `#22262A` — cards and sections
- Royal Gold `#D4AF37` — primary accent
- Champagne Gold `#F1DDA0` — highlights
- Antique Bronze `#8C6B2A` — shadows and gradients

### 4. Prices
- Membership tiers: `data/plans.ts`
- Menu items: `data/menu.ts`
- Swimming classes and pool pricing: `data/pool.ts`
- Game zone rates: `data/games.ts`

### 5. Schedule
Edit `data/schedule.ts` to change weekly timetable entries.

### 6. Trainers
Edit `data/trainers.ts` to add, remove, or modify trainer profiles.

### 7. Menu Items
Edit `data/menu.ts` to add dishes, change prices, or update categories.

### 8. Images
All images use Pexels stock photo URLs. Replace the URLs in the data files or `siteConfig.ts` with your own image URLs.

### 9. Blog Posts
Edit `data/blog.ts` to add or modify articles.

## Pages
- `/` — Home
- `/gym` — Duke Gym
- `/swimming-pool` — Duke Aqua
- `/restaurant` — Duke Kitchen
- `/pool-game-zone` — Duke Arena
- `/trainers` — Trainers
- `/membership` — Membership tiers
- `/schedule` — Weekly timetable
- `/tools` — Fitness calculators
- `/gallery` — Photo gallery
- `/blog` — Articles
- `/contact` — Contact info and form
- `/privacy-policy` — Privacy policy
- `/terms` — Terms & conditions

## Deployment
Deploy to Vercel by connecting this repository. No environment variables are required — all data is static.

## Notes
- Items marked `[PLACEHOLDER]` in `siteConfig.ts` should be replaced with real data.
- The WhatsApp number in `siteConfig.whatsapp` must include country code without `+` or spaces.
