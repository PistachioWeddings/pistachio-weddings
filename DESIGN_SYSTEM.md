# Pistachio Weddings — Design System & Architecture

Public site for `pistachioweddings.com`. Vite 5 + React 18 + TypeScript + Tailwind 3 + framer-motion.
Visual direction: Scorpios-style warm Mediterranean editorial pacing + Vision Pro-style scroll storytelling
(sticky, layered, 2.5D through transform only — no WebGL). Tokens mirror `pistachio-portal` v5.

---

## 1. Tokens

### Color (`tailwind.config.js`)

| Token | Hex | Use |
|---|---|---|
| `bg` | `#FAFAF6` | Page canvas (warm cream) |
| `sage-ghost` | `#F4F6EE` | Alternating section background |
| `inset` | `#F3F5EC` | Inputs, inset tiles inside cards |
| `sage-soft` | `#E9EDDE` | Soft fills, chips, `::selection` |
| `forest` | `#3D5741` | Primary brand green: buttons, accents, `theme-color` |
| `forest-dark` | `#33493A` | Hover/active, footer background |
| `sage` | `#A6B494` | Secondary accent, numerals, eyebrow rule |
| `ink` | `#2B3328` | Primary text (never pure black) |
| `muted` | `#6F7767` | Secondary copy |
| `faint` | `#9EA695` | Captions, labels |
| `hairline` / `hairline-2` | `#E8EAE0` / `#DADDCE` | 1px editorial dividers |
| `bezel` | `#1E231D` | Phone mockup frame only |

Section rhythm (top to bottom): Hero (dark photo) → Weekend `bg` → Venues `sage-ghost` → Budget `bg` →
Portal `sage-ghost` → Story `bg` → Moments `sage-ghost` → Process + FAQ `bg` → Inquiry `sage-ghost` → Footer `forest-dark`.

### Typography

- **Cormorant Garamond** 500/600/700 + italic 400/500: English editorial headings (`font-display`), the
  wordmark and numerals (`font-serif`, always Cormorant in both languages).
- **Heebo** 300–700: body, UI, the phone mockup, and **all Hebrew headings**.
- Loaded once in `index.html` from Google Fonts with `display=swap`.

`font-display` resolves to `var(--font-display)`. It switches automatically by language in `src/index.css`:

| Var | EN (Cormorant) | HE (Heebo) |
|---|---|---|
| `--fs-hero` → `text-d-hero` | `clamp(2.9rem, 8.2vw, 6.6rem)` | `clamp(2.3rem, 6.4vw, 5rem)` |
| `--fs-d1` → `text-d-1` (section h2) | `clamp(2.4rem, 5.4vw, 4.6rem)` | `clamp(2rem, 4.4vw, 3.6rem)` |
| `--fs-d2` → `text-d-2` (chapter h3) | `clamp(1.9rem, 3.6vw, 3rem)` | `clamp(1.6rem, 3vw, 2.4rem)` |
| `--fs-d3` → `text-d-3` (card titles) | `clamp(1.45rem, 2.2vw, 1.95rem)` | `clamp(1.25rem, 1.8vw, 1.6rem)` |
| `--lh-display` | `1.02` | `1.12` |

Body copy: 0.95–1.05rem, `leading-relaxed` (≈1.65–1.75). Eyebrows: `.eyebrow` (0.72rem, 0.2em tracking, uppercase;
Hebrew drops tracking and goes to 0.8rem).

### Spacing & layout

- Container: `.wrap`: `max-w-site` (1240px), gutters `px-5` (mobile) / `px-8` (sm) / `px-12` (lg).
- Section padding: `py-24` mobile, `md:py-36` desktop (FAQ/Moments `md:py-32`).
- Header height: `--header-h` = 4rem mobile, 4.5rem `md+`. Used for `scroll-padding-top` and sticky offsets.
- Grid: 12 columns on `md+`, single column on mobile.
- Radii: photos `3px` (editorial, near-square), cards `rounded-2xl`, buttons/chips `rounded-full`.

### Motion

- Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)`. Tailwind `ease-brand`, JS `EASE` in `src/lib/motion.ts`.
- Shadows: `shadow-card` = `0 1px 2px rgba(43,51,40,.05)`, `shadow-up` = `0 4px 16px rgba(43,51,40,.09)`,
  plus `shadow-phone` for the mockup only.
- Only `opacity` and `transform` are animated (GPU-composited). The FAQ accordion uses a CSS `grid-template-rows` transition.
- `prefers-reduced-motion`: all scroll-linked motion, the Ken Burns drift, slideshow autoplay and reveals are disabled.

| | Desktop (`md+`, ≥768px) | Mobile (<768px) |
|---|---|---|
| Hero | Poster Ken Burns + scroll parallax + fade | Ken Burns only |
| Weekend | Sticky chapter per day; frames rise/scale in with scroll; floating caption card drifts at its own speed | Stacked images with fade/translate reveal, no pinning |
| Venues | Crossfade autoplay, pause on hover | Crossfade autoplay, swipe + tap, dot buttons |
| Portal | Phone drifts and tilts slightly with scroll | Static phone |
| Story | Overlapping photo moves at a different speed | Static overlap |
| Moments | Strip drifts sideways with page scroll | Native horizontal swipe (scroll-snap) |

Nothing intercepts the scroll wheel or touch scroll anywhere. Every media container has a fixed `aspect-[…]` (no CLS).

### Touch & accessibility

- Every interactive control is ≥44×44px (`min-h-[44px]`, `h-11 w-11`, slideshow dots are 44px tall hit areas).
- Visible `:focus-visible` ring in `forest`. Skip link. `aria-pressed` on the language toggle, `aria-expanded` on the
  FAQ and the menu, proper `tablist`/`tab`/`tabpanel` in the phone mockup.

---

## 2. Bilingual rules

- **English is always the default.** A Hebrew choice is kept in `sessionStorage` only (a reload keeps it, a new visit
  starts in English). `?lang=he` opens directly in Hebrew, for Hebrew-only campaigns.
- Toggle `EN | עברית` is always in the header, on mobile too (`src/components/LangToggle.tsx`).
- Switching sets `<html lang="he" dir="rtl">`. Layout uses logical utilities (`ms-/me-/ps-/pe-/start-/end-/text-start`),
  so it mirrors automatically. Directional icons use `rtl:-scale-x-100`. Numbers, prices, phones and the address are
  wrapped in `dir="ltr"`.
- **Legal pages (`/terms`, `/privacy`, `/refund`) are English and LTR, always**, even when the site is in Hebrew.

---

## 3. Architecture

```
src/
  data/
    site.ts       HERO_VIDEO_ENABLED, media paths, business/legal entity, phones, links, WhatsApp number, section ids
    content.ts    ALL EN/HE copy (en defines the shape, he must match), weekend/editorial/about media, phone demo data
    venues.ts     3 venue cards (bilingual fields), photos, Highlight URLs, slideshow timing
    legal.ts      Terms / Privacy / Refund (English only, compliance wording)
  i18n.tsx        LangProvider + useLang() → { lang, setLang, t, isRtl }
  router.tsx      History-API router, RouteLink (hover/focus/touch prefetch), scroll memory
  lib/motion.ts   EASE, useMediaQuery, scrollToId
  App.tsx         Keeps Home mounted (hidden) while a legal page is open → instant back with restored scroll
  pages/Home.tsx  Section order
  pages/LegalPage.tsx  Lazy chunk, prefetched on link hover
  components/
    Header, LangToggle, Wordmark, Hero, Weekend, Venues, Budget, PortalShowcase, PhoneMockup,
    About, Editorial, Process, Faq, Inquiry, Footer, Reveal, SectionHeading, EmailLink, icons/BrandIcons
public/
  _headers        Cloudflare Pages cache rules
  media/          All optimized photos (hero/, weekend/, venues/<slug>/, editorial/, about/)
```

### Common edits

- **Turn on the hero video:** drop the file at `public/media/hero/hero-video.mp4` (H.264, muted, ≤4MB, ~10–20s loop),
  then set `HERO_VIDEO_ENABLED = true` in `src/data/site.ts`. The poster stays as the video `poster`, so LCP is unchanged.
- **Swap a venue photo:** add the new file to `public/media/venues/<slug>/` with a **new file name** (media is cached
  as immutable for a year), then update its `src` and `alt` in `src/data/venues.ts`. Keep 4 photos per card.
- **Set a real Instagram Highlight:** replace `highlightUrl` for that venue in `src/data/venues.ts`.
- **Venue facts:** `capacity`, `fromAthens`, `flow` live in `src/data/venues.ts`. Never add hotel names.
- **Copy changes:** edit `src/data/content.ts` (both `en` and `he`). TypeScript fails the build if the Hebrew object
  is missing a key.
- **WhatsApp number for the form:** `WHATSAPP_NUMBER` in `src/data/site.ts`.
- **Slideshow pace:** `SLIDE_INTERVAL` (ms per photo) and `SLIDE_STAGGER` (offset between cards) in `src/data/venues.ts`.

### Caching & performance

- `public/_headers`: `/assets/*` and `/media/*` → `Cache-Control: public, max-age=31536000, immutable`.
- Hero poster is preloaded in `index.html` with `fetchpriority="high"` and rendered with `fetchpriority="high"`.
- All other images: `loading="lazy"` + `decoding="async"`; venue slideshows only load the current + next photo.
- Legal pages are a separate ~3.5KB (gzip) chunk, prefetched on hover/focus/touch of any legal link.
- Slideshow timers run only while the card is on screen (`useInView`).
- No cookie banner (Cloudflare Web Analytics is cookie-free). No trust-seal badges.

---

## 4. Stage 2 polish checklist (Claude Sonnet 5.5)

### 1. Hebrew RTL & copy polish
- [ ] Confirm the Hebrew spelling of Raday's name (currently `רדאי`) everywhere in `content.ts` (`about.body`, `inquiry.msg.hi`, `meta`).
- [ ] Read every `he` string aloud (Friday dinner test, `hebrew-writing-skill.md`). Check `גם` placement and register consistency.
- [ ] Confirm no "minimum" / "starting from" / "מינימום" / "החל מ" anywhere, and no blacklist words from `anti-AI-style.md`.
- [ ] Check every mixed Hebrew/number line in RTL: budget range, guest counts (`60–90`), times, `€` amounts in the phone.
- [ ] Check arrows: Hebrew should point left (`rtl:-scale-x-100` on every directional icon).
- [ ] Confirm the venue facts with Raday (`capacity`, `fromAthens`) and replace the 3 `highlightUrl` placeholders.
- [ ] Verify FAQ "How far ahead should we book?" matches how Raday actually answers it.

### 2. Mobile / Safari motion & performance QA
- [ ] iOS Safari (real device): hero `100svh`, safe-area bottom padding, Ken Burns smoothness, no address-bar jump.
- [ ] Venue swipe vs vertical page scroll (`touch-action: pan-y`), tap-to-advance, dot targets.
- [ ] Phone mockup scroll inside the screen (`overscroll-contain`) doesn't trap page scroll on iOS.
- [ ] WhatsApp form on iOS/Android: opens the app with the pre-filled message in both languages (emoji/Hebrew encoding).
- [ ] Lighthouse mobile: LCP < 2.5s on 4G, CLS < 0.05, TBT low. Consider code-splitting below-the-fold sections if JS cost shows up.
- [ ] Reduced-motion on iOS (Settings → Accessibility → Reduce Motion): weekend falls back to stacked layout, no autoplay.

### 3. Cross-breakpoint visual QA
- [ ] 360, 390, 430, 768, 1024, 1280, 1440, 1920 widths, in EN and HE.
- [ ] Weekend sticky chapters at short desktop heights (≤760px): stage height and caption card don't collide with the header.
- [ ] Header between 768–1024 (portal link + toggle + CTA + menu button) doesn't crowd.
- [ ] Budget card: range stays on one line from `md`, wraps cleanly on small phones.
- [ ] Moments strip end alignment in RTL on wide screens.
- [ ] Footer columns at `md` (4/2/3/3 split) with the long legal labels.
- [ ] Replace `01-aerial-chuppah.webp` if the baked-in "Wedding time" text overlay isn't wanted on the venue card.
