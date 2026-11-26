// ---------------------------------------------------------------------------
// Venue collection (Greece). Hotel names are NEVER shown on the site.
//
// To swap media: add files to /public/media/venues/<slug>/ and update `media`
// below (WebP, max 1500px, <300KB). Use a NEW file name when replacing,
// because /media/* is cached as immutable for a year.
//
// Video slides: { type: 'video', src, poster, alt }. H.264 MP4, no audio, <=3MB.
// Keep a video as the LAST slide: it plays once, then the card returns to slide 1.
//
// To update an Instagram Highlight: replace `highlightUrl` with the highlight
// link (Instagram app → Highlight → ⋯ → Copy link).
// ---------------------------------------------------------------------------

import type { Lang } from '../i18n'

type L<T = string> = Record<Lang, T>

export type Slide =
  | { type?: 'photo'; src: string; alt: L }
  | { type: 'video'; src: string; poster: string; alt: L }

export type Venue = {
  slug: string
  title: L
  vibe: L
  capacity: L
  fromAthens: L
  highlightUrl: string
  media: Slide[]
}

export const venues: Venue[] = [
  {
    slug: 'coastal-resort',
    title: { en: 'The Seafront Resort', he: 'ריזורט על המים' },
    vibe: {
      en: 'A whole resort for your guests, with the chuppah right on the beach by the water.',
      he: 'כל הריזורט רק לאורחים שלכם, והחופה ממש על החוף על קו המים.',
    },
    capacity: { en: '80–130 guests', he: '80–130 אורחים' },
    fromAthens: { en: '≈ 3.5 h from Athens Airport', he: 'כ-3.5 שעות משדה התעופה באתונה' },
    highlightUrl:
      'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTExODQ0MTk5MTA0ODUw?evlk=MXZodGdrdXp3d2hq',
    media: [
      {
        src: '/media/venues/coastal-resort/v2-01.webp',
        alt: { en: 'The resort and its villas lit up at night, from above', he: 'הריזורט והווילות מוארים בלילה, צילום מלמעלה' },
      },
      {
        src: '/media/venues/coastal-resort/v2-02.webp',
        alt: { en: 'Guests gathered on the beach below the resort at sunset', he: 'אורחים על החוף למרגלות הריזורט בשקיעה' },
      },
      {
        src: '/media/venues/coastal-resort/v2-03.webp',
        alt: { en: 'A long table being set in front of a window with a mountain view', he: 'עורכים שולחן ארוך מול חלון עם נוף להרים' },
      },
      {
        src: '/media/venues/coastal-resort/v2-04.webp',
        alt: { en: 'The pool and sun beds with the sea behind', he: 'הבריכה ומיטות השיזוף, והים מאחור' },
      },
      {
        type: 'video',
        src: '/media/venues/coastal-resort/v2-05-reception.mp4',
        poster: '/media/venues/coastal-resort/v2-05-reception-poster.webp',
        alt: { en: 'A rooftop reception at the resort, filmed from above', he: 'קבלת פנים על גג בריזורט, צילום מלמעלה' },
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
    capacity: { en: '40–60 guests', he: '40–60 אורחים' },
    fromAthens: { en: '≈ 1 h from Athens Airport', he: 'כשעה משדה התעופה באתונה' },
    highlightUrl:
      'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTUzMjc0MzU0NTE4OTcw?dmpr=MXd4N3VlNTN3enVjYQ==',
    media: [
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
      {
        src: '/media/venues/private-cove/v2-05.webp',
        alt: { en: 'Shaded stone steps up to a wooden gate', he: 'מדרגות אבן מוצלות שעולות לשער עץ' },
      },
      {
        src: '/media/venues/private-cove/v2-06.webp',
        alt: { en: 'A quiet beach under green cliffs', he: 'חוף שקט מתחת למצוקים ירוקים' },
      },
    ],
  },
  {
    slug: 'amphitheater',
    title: { en: 'The Amphitheater', he: 'האמפיתיאטרון' },
    vibe: {
      en: 'A stone amphitheater and marble ceremony circle overlooking the sea, set within a larger coastal resort with pools and hillside suites.',
      he: 'אמפיתיאטרון אבן ורחבת חופה מעגלית מול הים, בתוך ריזורט חוף רחב ידיים עם בריכות וסוויטות על המדרון.',
    },
    capacity: { en: '60–150 guests', he: '60–150 אורחים' },
    fromAthens: { en: '≈ 1.25 h from Athens Airport', he: 'כשעה ורבע משדה התעופה באתונה' },
    highlightUrl:
      'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTM2NzY1MzI0NTkxNjc1?gwpx=MWVmbHNjdHltZ29sYQ==',
    media: [
      {
        src: '/media/venues/amphitheater/v2-01.webp',
        alt: { en: 'A couple walking to the chuppah on a round marble floor framed by stone arches', he: 'זוג צועד אל החופה על רחבת שיש עגולה מול קשתות אבן' },
      },
      {
        src: '/media/venues/amphitheater/v2-02.webp',
        alt: { en: 'The chuppah and chairs on the marble circle by the sea', he: 'החופה והכיסאות על הרחבה המעגלית מול הים' },
      },
      {
        src: '/media/venues/amphitheater/v2-03.webp',
        alt: { en: 'The stone amphitheater and hillside suites from above', he: 'אמפיתיאטרון האבן והסוויטות על המדרון, צילום מלמעלה' },
      },
      {
        src: '/media/venues/amphitheater/v2-04.webp',
        alt: { en: 'A large pool with umbrellas by the sea', he: 'בריכה גדולה עם שמשיות מול הים' },
      },
      {
        src: '/media/venues/amphitheater/v2-05.webp',
        alt: { en: 'The waterfront below a wooded hill', he: 'קו המים למרגלות גבעה ירוקה' },
      },
      {
        src: '/media/venues/amphitheater/v2-06.webp',
        alt: { en: 'White suites with a private pool on the hillside', he: 'סוויטות לבנות עם בריכה על המדרון' },
      },
      {
        src: '/media/venues/amphitheater/v2-07.webp',
        alt: { en: 'A stone promenade under pine trees along the beach', he: 'טיילת אבן מתחת לאורנים לאורך החוף' },
      },
    ],
  },
]

/** Milliseconds between slides, and the per-card start offset so cards never switch together. */
export const SLIDE_INTERVAL = 5600
export const SLIDE_STAGGER = 1900
