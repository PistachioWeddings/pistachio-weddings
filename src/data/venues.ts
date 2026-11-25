// ---------------------------------------------------------------------------
// Venue collection (Greece). Hotel names are NEVER shown on the site.
//
// To swap photos: replace files in /public/media/venues/<slug>/ and update
// `photos` below (keep 4 per card, ~1600px wide WebP, <300KB). Use a NEW file
// name when replacing, because /media/* is cached as immutable for a year.
//
// To set a real Instagram Highlight: replace `highlightUrl` with the highlight
// link (Instagram app → Highlight → ⋯ → Copy link).
//
// TODO(Raday): confirm `capacity` and `fromAthens` for each card.
// ---------------------------------------------------------------------------

import type { Lang } from '../i18n'

type L<T = string> = Record<Lang, T>

export type Venue = {
  slug: string
  title: L
  vibe: L
  capacity: L
  fromAthens: L
  flow: L
  highlightUrl: string
  photos: { src: string; alt: L }[]
}

const INSTAGRAM_PLACEHOLDER = 'https://www.instagram.com/pistachio.weddings/'

export const venues: Venue[] = [
  {
    slug: 'coastal-resort',
    title: { en: 'The Seafront Resort', he: 'ריזורט על המים' },
    vibe: {
      en: 'A whole resort for your guests, with the chuppah on a pier over the water.',
      he: 'כל הריזורט רק לאורחים שלכם, והחופה על מזח מעל המים.',
    },
    capacity: { en: '60–150 guests', he: '60–150 אורחים' },
    fromAthens: { en: '≈ 1.5 h from Athens', he: 'כשעה וחצי מאתונה' },
    flow: {
      en: 'Pool day and welcome dinner · Pier ceremony at sunset · Slow brunch by the sea',
      he: 'יום בריכה וארוחת פתיחה · חופה על המזח בשקיעה · בראנץ׳ רגוע מול הים',
    },
    highlightUrl: INSTAGRAM_PLACEHOLDER,
    photos: [
      {
        src: '/media/venues/coastal-resort/01-aerial-chuppah.webp',
        alt: { en: 'Aerial view of a chuppah on a pier by the resort', he: 'חופה על מזח, צילום מלמעלה' },
      },
      {
        src: '/media/venues/coastal-resort/02-twilight-resort.webp',
        alt: { en: 'The resort at twilight', he: 'הריזורט בשעת בין ערביים' },
      },
      {
        src: '/media/venues/coastal-resort/03-night-villas.webp',
        alt: { en: 'Guest villas lit up at night', he: 'וילות האורחים מוארות בלילה' },
      },
      {
        src: '/media/venues/coastal-resort/04-pool-day.webp',
        alt: { en: 'Guests at the pool during the day', he: 'אורחים בבריכה באמצע היום' },
      },
    ],
  },
  {
    slug: 'private-cove',
    title: { en: 'The Private Cove', he: 'מפרץ פרטי' },
    vibe: {
      en: 'A quiet bay, a small chapel on the steps and long tables under olive trees.',
      he: 'מפרץ שקט, כנסייה קטנה על המדרגות ושולחנות ארוכים מתחת לעצי זית.',
    },
    capacity: { en: '50–120 guests', he: '50–120 אורחים' },
    fromAthens: { en: '≈ 2.5 h from Athens', he: 'כשעתיים וחצי מאתונה' },
    flow: {
      en: 'Taverna night on the beach · Ceremony above the cove · Morning swim and goodbyes',
      he: 'ערב טברנה על החוף · טקס מעל המפרץ · שחייה של בוקר ופרידות',
    },
    highlightUrl: INSTAGRAM_PLACEHOLDER,
    photos: [
      {
        src: '/media/venues/private-cove/01-cove-drone.webp',
        alt: { en: 'Drone view of a private cove', he: 'מפרץ פרטי מצילום רחפן' },
      },
      {
        src: '/media/venues/private-cove/02-coastline-aerial.webp',
        alt: { en: 'The coastline from above', he: 'קו החוף מלמעלה' },
      },
      {
        src: '/media/venues/private-cove/03-chapel-steps.webp',
        alt: { en: 'Stone steps leading to a small chapel', he: 'מדרגות אבן שעולות לכנסייה קטנה' },
      },
      {
        src: '/media/venues/private-cove/04-olive-table.webp',
        alt: { en: 'A long dinner table set under olive trees', he: 'שולחן ארוך ערוך מתחת לעצי זית' },
      },
    ],
  },
  {
    slug: 'sea-terrace',
    title: { en: 'The White Terrace', he: 'המרפסת הלבנה' },
    vibe: {
      en: 'Whitewashed terraces, a pergola dance floor and nothing in front of you but sea.',
      he: 'מרפסות לבנות, רחבת ריקודים מתחת לפרגולה ומולכם רק ים.',
    },
    capacity: { en: '45–90 guests', he: '45–90 אורחים' },
    fromAthens: { en: '≈ 3 h from Athens', he: 'כשלוש שעות מאתונה' },
    flow: {
      en: 'Sunset drinks on the terrace · Dinner by the water · Late breakfast with a view',
      he: 'דרינקים בשקיעה על המרפסת · ארוחת ערב על המים · ארוחת בוקר מאוחרת עם נוף',
    },
    highlightUrl: INSTAGRAM_PLACEHOLDER,
    photos: [
      {
        src: '/media/venues/sea-terrace/01-white-terrace.webp',
        alt: { en: 'A whitewashed terrace above the sea', he: 'מרפסת לבנה מעל הים' },
      },
      {
        src: '/media/venues/sea-terrace/02-table-sea.webp',
        alt: { en: 'A dinner table facing the sea', he: 'שולחן ערוך מול הים' },
      },
      {
        src: '/media/venues/sea-terrace/03-pergola-dance.webp',
        alt: { en: 'Dancing under a pergola', he: 'ריקודים מתחת לפרגולה' },
      },
      {
        src: '/media/venues/sea-terrace/04-terrace-dinner.webp',
        alt: { en: 'Dinner on the terrace at night', he: 'ארוחת ערב על המרפסת בלילה' },
      },
    ],
  },
]

/** Milliseconds between slides, and the per-card start offset so cards never switch together. */
export const SLIDE_INTERVAL = 5600
export const SLIDE_STAGGER = 1900
