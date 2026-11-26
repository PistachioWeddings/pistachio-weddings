// ---------------------------------------------------------------------------
// All bilingual copy (EN default + HE). `en` defines the shape; `he` must match.
// Rules: no hype words (see anti-AI-style), never "minimum" / "starting from"
// (EN or HE), Hebrew written as spoken Hebrew, not translated English.
// ---------------------------------------------------------------------------

import type { Lang } from '../i18n'

/** Weekend story media. Captions are index-aligned with `weekend.days[i].captions`. */
export const weekendMedia: string[][] = [
  ['/media/weekend/welcome-kit.webp', '/media/weekend/pool-guests.webp', '/media/weekend/bouzouki.webp'],
  [
    '/media/weekend/chuppah-drone.webp',
    '/media/weekend/chuppah-sunset.webp',
    '/media/weekend/dinner-trees.webp',
    '/media/weekend/dinner-flowers.webp',
    '/media/weekend/dinner-lights.webp',
    '/media/weekend/party-bride-bw.webp',
    '/media/weekend/party-energy-bw.webp',
  ],
  ['/media/weekend/morning-beach.webp', '/media/weekend/morning-couple.webp'],
]

export const editorialMedia = [
  '/media/editorial/couple-bw-water.webp',
  '/media/editorial/couple-balcony.webp',
  '/media/editorial/bouquet-ring.webp',
  '/media/editorial/couple-bougainvillea.webp',
  '/media/editorial/couple-silhouette.webp',
]

export const aboutMedia = {
  wedding: '/media/about/raday-noga-wedding.webp',
  onsite: '/media/about/raday-noga-onsite.webp',
  production: '/media/about/production-chuppah.webp',
}

/** Demo wedding used by the live phone mockup (ceremony time, Athens). */
export const DEMO_WEDDING_ISO = '2027-06-10T19:00:00+03:00'

const en = {
  meta: {
    title: 'Pistachio Weddings | Three-day destination weddings in Greece',
    description:
      'Raday and Noga plan and produce three-day destination weddings in Greece for 45 to 150 guests, with Italy and Cyprus on request.',
  },
  nav: {
    weekend: 'The weekend',
    venues: 'Venues',
    budget: 'Budget',
    story: 'Our story',
    faq: 'FAQ',
    portal: 'Couple Portal',
    cta: 'Plan with us',
    menu: 'Menu',
    close: 'Close menu',
    skip: 'Skip to content',
    language: 'Language',
    home: 'Pistachio Weddings, back to top',
  },
  hero: {
    eyebrow: 'Destination weddings in Greece',
    title: 'A whole weekend in Greece, with everyone you love.',
    sub: 'We plan and produce three-day weddings for 45 to 150 guests. Venue, vendors, rooms and transfers, with a budget you can read line by line.',
    cta: 'Start planning',
    portal: 'Couple Portal',
    scroll: 'Scroll',
    alt: 'A couple at their wedding by the sea in Greece',
  },
  weekend: {
    eyebrow: 'The weekend',
    title: 'Three days, one long celebration',
    intro:
      'Guests fly in, stay two nights and leave a little sunburnt. Here is how a typical weekend runs.',
    days: [
      {
        label: 'Day 1',
        name: 'Arrival',
        title: 'Everyone lands',
        body: 'Guests check in, find a welcome bag in their room and head down to the pool. In the evening: dinner at a taverna, with live bouzouki.',
        captions: [
          'A welcome bag waiting in every room',
          'Afternoon at the pool, everyone finally together',
          'Taverna night with live bouzouki',
        ],
      },
      {
        label: 'Day 2',
        name: 'The wedding',
        title: 'A chuppah by the sea, dinner under the trees',
        body: 'The ceremony at the water’s edge at golden hour. Then long tables, good wine and a dance floor that stays full until late.',
        captions: [
          'A chuppah at the water’s edge',
          'Vows at golden hour',
          'Long tables under the trees',
          'Florals designed around your colors',
          'Dinner runs late. Nobody minds.',
          'Then the music turns up',
          'And the dance floor stays full',
        ],
      },
      {
        label: 'Day 3',
        name: 'The morning after',
        title: 'A slow morning',
        body: 'Late breakfast, a last swim and time with the people who flew in for you, before everyone heads to the airport.',
        captions: ['Coffee, the sea, no rush', 'One more quiet hour before the flight home'],
      },
    ],
  },
  venues: {
    eyebrow: 'Venues',
    title: 'A taste of our venues',
    intro:
      'Three venues in Greece we have worked with and trust. Each one holds a full weekend: rooms for your guests, a spot for the ceremony and space for the party.',
    capacity: 'Guests',
    distance: 'Getting there',
    highlight: 'See it on Instagram',
    beyond:
      'These are just a few of the venues we work with across Greece — and we also produce in Italy and Cyprus. For more venues and location options, you can',
    beyondLink: 'contact us',
    photo: 'Photo',
    video: 'Video',
    of: 'of',
  },
  budget: {
    eyebrow: 'Budget',
    title: 'What a weekend usually costs',
    intro: 'We would rather talk numbers early. Here is a typical example.',
    exampleLabel: 'A typical weekend',
    example: '60 guests · 2 nights',
    includesTitle: 'What that covers',
    includes: [
      'Wedding evening at the venue',
      'Design and florals',
      'Alcohol',
      'Round-trip airport transfers',
      'Sound and DJ',
      'Photographer',
    ],
    range: '€36,000–€39,000',
    perGuest: 'About €600 per guest',
    notes: [
      'Guests often pay for part or all of their own rooms, so accommodation usually sits outside this number.',
      'We produce smaller and bigger weddings too. The budget follows your guest count and the choices you make.',
    ],
    cta: 'Ask about your numbers',
  },
  portal: {
    eyebrow: 'Couple Portal',
    title: 'Your whole wedding, on your phone',
    body: 'Every couple gets a private portal with the countdown, room list, budget, vendors and RSVPs. It updates as we plan, so nobody has to dig through WhatsApp threads.',
    points: [
      'Every payment and vendor in one place',
      'Who sleeps where, and who pays for what',
      'RSVPs as they come in',
    ],
    try: 'Try it live',
    tryHint: 'Tap the tabs inside the phone',
    link: 'Open the Couple Portal',
  },
  demo: {
    app: 'Pistachio',
    couple: 'Maya & Daniel',
    place: 'Seafront resort, Greece',
    dates: '9–11 June 2027',
    tabs: { countdown: 'Countdown', rooms: 'Rooms', budget: 'Budget', rsvps: 'RSVPs' },
    countdown: {
      title: 'Until the chuppah',
      units: ['days', 'hrs', 'min', 'sec'],
      scheduleTitle: 'The weekend',
      schedule: [
        { day: 'Wed', time: '20:00', what: 'Welcome dinner at the taverna' },
        { day: 'Thu', time: '19:00', what: 'Ceremony on the beach' },
        { day: 'Fri', time: '11:00', what: 'Brunch by the pool' },
      ],
      nextTitle: 'Next up',
      next: [
        { what: 'Final guest count to the venue', when: '1 Apr' },
        { what: 'Menu tasting call', when: '15 Apr' },
      ],
    },
    rooms: {
      title: 'Rooms',
      assigned: 26,
      total: 30,
      summary: 'rooms assigned',
      couple: 'Couple covers',
      guest: 'Guest pays',
      nights: '2 nights',
      list: [
        { who: 'Levi family', type: 'Sea-view family room', payer: 'guest' },
        { who: 'Grandma Rina', type: 'Garden double', payer: 'couple' },
        { who: 'Noam & Shira', type: 'Sea-view double', payer: 'guest' },
        { who: 'Cohen family', type: 'Two-bedroom villa', payer: 'guest' },
        { who: 'Bride’s parents', type: 'Suite with terrace', payer: 'couple' },
      ],
    },
    budget: {
      title: 'Budget & Vendors',
      plannedLabel: 'Planned',
      planned: '€37,400',
      paidLabel: 'Paid so far',
      paid: '€14,960',
      paidPct: 40,
      status: { paid: 'Deposit paid', confirmed: 'Confirmed', quote: 'Quote in' } as Record<string, string>,
      vendors: [
        { name: 'Venue & dinner', amount: '€21,600', status: 'paid' },
        { name: 'Design & florals', amount: '€5,400', status: 'confirmed' },
        { name: 'Photographer', amount: '€3,200', status: 'confirmed' },
        { name: 'Bar package', amount: '€2,900', status: 'confirmed' },
        { name: 'DJ & sound', amount: '€2,400', status: 'paid' },
        { name: 'Airport transfers', amount: '€1,900', status: 'quote' },
      ],
    },
    rsvps: {
      title: 'RSVPs',
      invited: 'of 60 invited',
      counts: { yes: 52, pending: 6, no: 2 },
      labels: { yes: 'Coming', pending: 'Waiting', no: 'Can’t make it' } as Record<string, string>,
      list: [
        { name: 'Tamar & Yoni', party: 2, status: 'yes', note: 'Vegetarian' },
        { name: 'The Abutbuls', party: 4, status: 'yes', note: 'Arriving Tuesday' },
        { name: 'Uncle Moshe', party: 1, status: 'pending', note: '' },
        { name: 'Lior & Gal', party: 2, status: 'yes', note: 'Kosher meal' },
        { name: 'Dana', party: 1, status: 'no', note: '' },
      ],
    },
  },
  about: {
    eyebrow: 'Our story',
    title: 'We planned our own wedding in Greece. Then we kept going.',
    body: [
      'We’re Raday and Noga, a married couple. When we got engaged we knew we wanted to get married abroad, so we did what you’re probably doing now: met with wedding producers, compared offers and tried to picture the whole thing from far away.',
      'In the end we produced our wedding ourselves. Somewhere between the venue visits and the seating chart, we realized we loved the work.',
      'Since then we’ve been doing it for other couples. We find the venue, build the vendor team, handle rooms and transfers, and show you the budget line by line. On the weekend itself we’re both there, from the first welcome drink to the last goodbye.',
    ],
    sign: 'Raday & Noga',
    captions: {
      wedding: 'Our own wedding, Greece',
      onsite: 'At a couple’s chuppah',
      production: 'Setting up on-site',
    },
    alts: {
      wedding: 'Raday and Noga at their own wedding in Greece',
      onsite: 'Raday and Noga at a couple’s chuppah, wearing Pistachio shirts',
      production: 'The Pistachio team setting up a chuppah on-site',
    },
  },
  editorial: {
    eyebrow: 'Moments',
    title: 'Real couples, real weekends',
    alts: [
      'A couple in black and white, standing in the water',
      'A couple on a balcony above the sea',
      'A bouquet and a wedding ring',
      'A couple under bougainvillea',
      'A couple in silhouette at sunset',
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'From the first message to the last dance',
    steps: [
      {
        title: 'A first call',
        body: '20–30 minutes on the phone or Zoom. You tell us what you have in mind, and we tell you honestly what it takes.',
      },
      {
        title: 'Venues and a real budget',
        body: 'We send venue options that fit your guest count, each with a line-by-line budget.',
      },
      {
        title: 'Lock the date',
        body: 'You sign, pay the deposit and get your Couple Portal. The venue and key vendors are booked.',
      },
      {
        title: 'Planning together',
        body: 'Design, menus, music, rooms and transfers. Everything is tracked in the portal and we stay in close touch.',
      },
      {
        title: 'The weekend',
        body: 'We land before you and run all three days on-site. You get to be guests at your own wedding.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions couples ask us',
    items: [
      {
        q: 'How many guests do you work with?',
        a: 'Most of our weddings have 45 to 150 guests. If you’re under or over that, write to us anyway and we’ll tell you honestly whether it makes sense.',
      },
      {
        q: 'How far ahead should we book?',
        a: 'About a year ahead is ideal, especially for June and September weekends. Shorter timelines can work, depending on the venue.',
      },
      {
        q: 'Can we have a kosher wedding recognized by the Rabbinate?',
        a: 'Yes. We work with rabbis authorized by the Chief Rabbinate, so your marriage is recognized in Israel.',
      },
      {
        q: 'Some of our guests need strictly kosher food. Is that possible?',
        a: 'Yes. We can use a fully kosher partner hotel, or bring in certified kosher catering and wine for the wedding dinner.',
      },
      {
        q: 'Are your vendors local or Israeli?',
        a: 'Both. Over the years we’ve built a vendor team in Israel and at each destination. Most of our key vendors are Israeli.',
      },
      {
        q: 'Will you be there on the day?',
        a: 'Yes, for the whole weekend. After months of planning together, we wouldn’t miss it.',
      },
      {
        q: 'Can we book a venue without visiting first?',
        a: 'Most couples do. We send photos, videos, a video walk-through and details from past weddings there. If you want to visit, we’ll set up a tour with the venue.',
      },
      {
        q: 'Do guests pay for their own rooms?',
        a: 'Often, at least in part. Many couples cover the wedding itself and some of the rooms, and guests pay for the rest of their stay. The portal shows exactly who pays for what.',
      },
      {
        q: 'Which currencies and payment methods do you accept?',
        a: 'Credit card payments in EUR, USD and ILS, processed by authorized PCI-DSS compliant payment providers.',
      },
    ],
  },
  inquiry: {
    eyebrow: 'Let’s talk',
    title: 'Tell us a little about your wedding',
    intro:
      'Four quick questions. When you tap the button, WhatsApp opens with your answers ready to send, and one of us replies personally.',
    guests: 'Estimated guests',
    guestOptions: ['Under 60', '60–90', '90–120', '120–150', '150+'],
    when: 'Preferred month or season',
    whenOptions: ['Spring (April–May)', 'June', 'July–August', 'September', 'October', 'Not sure yet'],
    year: 'Year',
    flexible: 'Flexible',
    destination: 'Destination',
    destOptions: ['Greece', 'Italy', 'Cyprus', 'Open to ideas'],
    notes: 'Anything else we should know?',
    notesPlaceholder: 'Kosher food, a specific island, a date that matters to you…',
    choose: 'Choose…',
    submit: 'Continue on WhatsApp',
    privacy: 'Nothing is saved on this site. Your message goes straight to our WhatsApp.',
    orEmail: 'Prefer email?',
    msg: {
      hi: 'Hi Raday & Noga! We’re planning a destination wedding.',
      guests: 'Guests',
      when: 'When',
      destination: 'Destination',
      notes: 'Notes',
      notSet: 'not sure yet',
      sig: '(sent from pistachioweddings.com)',
    },
  },
  footer: {
    tagline: 'Three-day destination weddings in Greece. Italy and Cyprus on request.',
    explore: 'Explore',
    contact: 'Contact',
    legal: 'Legal',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    refund: 'Refund & Cancellation',
    legalNote: '',
    payments: 'Payments in EUR, USD and ILS through authorized payment providers.',
    rights: 'All rights reserved.',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
  },
}

export type SiteContent = typeof en

const he: SiteContent = {
  meta: {
    title: 'Pistachio Weddings | חתונות של שלושה ימים ביוון',
    description:
      'רדאי ונגה מתכננים ומפיקים חתונות יעד של שלושה ימים ביוון, ל-45 עד 150 אורחים. איטליה וקפריסין לפי בקשה.',
  },
  nav: {
    weekend: 'סוף השבוע',
    venues: 'מקומות',
    budget: 'תקציב',
    story: 'עלינו',
    faq: 'שאלות',
    portal: 'פורטל הזוג',
    cta: 'בואו נדבר',
    menu: 'תפריט',
    close: 'סגירת התפריט',
    skip: 'דילוג לתוכן',
    language: 'שפה',
    home: 'Pistachio Weddings, חזרה למעלה',
  },
  hero: {
    eyebrow: 'חתונות יעד ביוון',
    title: 'סוף שבוע שלם ביוון, עם כל מי שאתם אוהבים.',
    sub: 'אנחנו מתכננים ומפיקים חתונות של שלושה ימים, ל-45 עד 150 אורחים. מקום, ספקים, חדרים והסעות, ותקציב שאפשר לקרוא שורה-שורה.',
    cta: 'מתחילים לתכנן',
    portal: 'פורטל הזוג',
    scroll: 'גללו',
    alt: 'זוג בחתונה שלהם מול הים ביוון',
  },
  weekend: {
    eyebrow: 'סוף השבוע',
    title: 'שלושה ימים, חגיגה אחת ארוכה',
    intro: 'האורחים נוחתים, נשארים שני לילות וחוזרים קצת שזופים. ככה נראה סוף שבוע טיפוסי.',
    days: [
      {
        label: 'יום 1',
        name: 'הגעה',
        title: 'כולם נוחתים',
        body: 'האורחים עושים צ׳ק-אין, מוצאים שקית קבלת פנים בחדר ויורדים לבריכה. בערב יוצאים לטברנה, עם בוזוקי חי.',
        captions: [
          'שקית קבלת פנים מחכה בכל חדר',
          'צהריים בבריכה, סוף סוף כולם ביחד',
          'ערב טברנה עם בוזוקי חי',
        ],
      },
      {
        label: 'יום 2',
        name: 'החתונה',
        title: 'חופה מול הים, ארוחה מתחת לעצים',
        body: 'הטקס על קו המים בשעת השקיעה. אחר כך שולחנות ארוכים, יין טוב ורחבה שלא מתרוקנת עד מאוחר.',
        captions: [
          'חופה על קו המים',
          'הנדרים בשעת השקיעה',
          'שולחנות ארוכים מתחת לעצים',
          'פרחים ועיצוב בצבעים שלכם',
          'הארוחה נמשכת. אף אחד לא ממהר.',
          'ואז המוזיקה עולה',
          'והרחבה נשארת מלאה',
        ],
      },
      {
        label: 'יום 3',
        name: 'הבוקר שאחרי',
        title: 'בוקר בלי לחץ',
        body: 'ארוחת בוקר מאוחרת, שחייה אחרונה וזמן עם האנשים שטסו בשבילכם, לפני שכולם יוצאים לשדה.',
        captions: ['קפה, ים ואף אחד לא ממהר', 'עוד שעה שקטה לפני הטיסה הביתה'],
      },
    ],
  },
  venues: {
    eyebrow: 'מקומות',
    title: 'טעימה מהלוקיישנים שלנו',
    intro:
      'שלושה מקומות ביוון שעבדנו בהם ואנחנו סומכים עליהם. כל אחד מתאים לסוף שבוע שלם: חדרים לאורחים, מקום לחופה ומקום למסיבה.',
    capacity: 'אורחים',
    distance: 'הגעה',
    highlight: 'לצפייה באינסטגרם',
    beyond:
      'זו רק טעימה מהלוקיישנים שאנחנו עובדים איתם ברחבי יוון — ואנחנו מפיקים גם באיטליה ובקפריסין. לעוד מלונות ואפשרויות לוקיישן,',
    beyondLink: 'דברו איתנו',
    photo: 'תמונה',
    video: 'סרטון',
    of: 'מתוך',
  },
  budget: {
    eyebrow: 'תקציב',
    title: 'כמה זה עולה בפועל',
    intro: 'אנחנו מעדיפים לדבר על מספרים כבר מההתחלה. הנה דוגמה טיפוסית.',
    exampleLabel: 'סוף שבוע טיפוסי',
    example: '60 אורחים · 2 לילות',
    includesTitle: 'מה זה כולל',
    includes: [
      'ערב החתונה במקום',
      'עיצוב ופרחים',
      'אלכוהול',
      'הסעות הלוך-חזור משדה התעופה',
      'הגברה ו-DJ',
      'צלם',
    ],
    range: '€36,000–€39,000',
    perGuest: 'בערך €600 לאורח',
    notes: [
      'ברוב החתונות האורחים משלמים על חלק מהלינה או על כולה, אז החדרים בדרך כלל לא נכללים בסכום הזה.',
      'אנחנו מפיקים גם חתונות קטנות יותר וגדולות יותר. התקציב זז לפי מספר האורחים והבחירות שלכם.',
    ],
    cta: 'בואו נדבר על המספרים שלכם',
  },
  portal: {
    eyebrow: 'פורטל הזוג',
    title: 'כל החתונה, בטלפון שלכם',
    body: 'כל זוג מקבל פורטל פרטי עם ספירה לאחור, רשימת חדרים, תקציב, ספקים ואישורי הגעה. הכל מתעדכן תוך כדי התכנון, בלי לחפור בקבוצות וואטסאפ.',
    points: [
      'כל התשלומים והספקים במקום אחד',
      'מי ישן איפה ומי משלם על מה',
      'אישורי הגעה מתעדכנים כל הזמן',
    ],
    try: 'נסו ללחוץ',
    tryHint: 'לחצו על הלשוניות בתוך הטלפון',
    link: 'כניסה לפורטל הזוג',
  },
  demo: {
    app: 'Pistachio',
    couple: 'מאיה ודניאל',
    place: 'ריזורט על הים, יוון',
    dates: '9–11 ביוני 2027',
    tabs: { countdown: 'ספירה', rooms: 'חדרים', budget: 'תקציב', rsvps: 'אישורים' },
    countdown: {
      title: 'עד החופה',
      units: ['ימים', 'שעות', 'דקות', 'שניות'],
      scheduleTitle: 'סוף השבוע',
      schedule: [
        { day: 'רביעי', time: '20:00', what: 'ארוחת פתיחה בטברנה' },
        { day: 'חמישי', time: '19:00', what: 'חופה על החוף' },
        { day: 'שישי', time: '11:00', what: 'בראנץ׳ ליד הבריכה' },
      ],
      nextTitle: 'מה הלאה',
      next: [
        { what: 'מספר אורחים סופי למקום', when: '1.4' },
        { what: 'שיחת טעימות לתפריט', when: '15.4' },
      ],
    },
    rooms: {
      title: 'חדרים',
      assigned: 26,
      total: 30,
      summary: 'חדרים שובצו',
      couple: 'על הזוג',
      guest: 'על האורח',
      nights: '2 לילות',
      list: [
        { who: 'משפחת לוי', type: 'חדר משפחה מול הים', payer: 'guest' },
        { who: 'סבתא רינה', type: 'חדר זוגי לגינה', payer: 'couple' },
        { who: 'נועם ושירה', type: 'חדר זוגי מול הים', payer: 'guest' },
        { who: 'משפחת כהן', type: 'וילה עם שני חדרי שינה', payer: 'guest' },
        { who: 'ההורים של הכלה', type: 'סוויטה עם מרפסת', payer: 'couple' },
      ],
    },
    budget: {
      title: 'תקציב וספקים',
      plannedLabel: 'מתוכנן',
      planned: '€37,400',
      paidLabel: 'שולם עד עכשיו',
      paid: '€14,960',
      paidPct: 40,
      status: { paid: 'מקדמה שולמה', confirmed: 'סגור', quote: 'הצעה התקבלה' },
      vendors: [
        { name: 'מקום וארוחת ערב', amount: '€21,600', status: 'paid' },
        { name: 'עיצוב ופרחים', amount: '€5,400', status: 'confirmed' },
        { name: 'צלם', amount: '€3,200', status: 'confirmed' },
        { name: 'חבילת בר', amount: '€2,900', status: 'confirmed' },
        { name: 'DJ והגברה', amount: '€2,400', status: 'paid' },
        { name: 'הסעות משדה התעופה', amount: '€1,900', status: 'quote' },
      ],
    },
    rsvps: {
      title: 'אישורי הגעה',
      invited: 'מתוך 60 מוזמנים',
      counts: { yes: 52, pending: 6, no: 2 },
      labels: { yes: 'מגיעים', pending: 'עוד לא ענו', no: 'לא יגיעו' },
      list: [
        { name: 'תמר ויוני', party: 2, status: 'yes', note: 'צמחונים' },
        { name: 'משפחת אבוטבול', party: 4, status: 'yes', note: 'מגיעים כבר בשלישי' },
        { name: 'דוד משה', party: 1, status: 'pending', note: '' },
        { name: 'ליאור וגל', party: 2, status: 'yes', note: 'ארוחה כשרה' },
        { name: 'דנה', party: 1, status: 'no', note: '' },
      ],
    },
  },
  about: {
    eyebrow: 'עלינו',
    title: 'הפקנו לבד את החתונה שלנו ביוון. ומשם זה התחיל.',
    body: [
      'אנחנו רדאי ונגה, זוג נשוי. כשהתארסנו ידענו שאנחנו רוצים להתחתן בחו״ל, אז עשינו בדיוק מה שאתם כנראה עושים עכשיו: נפגשנו עם מפיקים, השווינו הצעות וניסינו לדמיין את כל העניין מרחוק.',
      'בסוף הפקנו את החתונה לבד. איפשהו בין סיורי המקומות לסידורי ההושבה, הבנו שאנחנו פשוט אוהבים את זה.',
      'מאז אנחנו עושים את זה בשביל זוגות אחרים. מוצאים את המקום, בונים צוות ספקים, מטפלים בחדרים ובהסעות ומראים לכם את התקציב שורה-שורה. ובסוף השבוע עצמו שנינו שם, מהדרינק הראשון ועד הפרידה האחרונה.',
    ],
    sign: 'רדאי ונגה',
    captions: {
      wedding: 'החתונה שלנו, יוון',
      onsite: 'בחופה של זוג שהפקנו',
      production: 'מקימים בשטח',
    },
    alts: {
      wedding: 'רדאי ונגה בחתונה שלהם ביוון',
      onsite: 'רדאי ונגה ליד חופה של זוג, בחולצות של Pistachio',
      production: 'הצוות של Pistachio מקים חופה בשטח',
    },
  },
  editorial: {
    eyebrow: 'רגעים',
    title: 'זוגות אמיתיים, סופי שבוע אמיתיים',
    alts: [
      'זוג בשחור-לבן עומד במים',
      'זוג במרפסת מעל הים',
      'זר כלה וטבעת',
      'זוג מתחת לבוגנוויליה',
      'צללית של זוג בשקיעה',
    ],
  },
  process: {
    eyebrow: 'איך זה עובד',
    title: 'מההודעה הראשונה ועד הריקוד האחרון',
    steps: [
      {
        title: 'שיחה ראשונה',
        body: '20–30 דקות בטלפון או בזום. אתם מספרים מה יש לכם בראש, ואנחנו אומרים בכנות מה זה דורש.',
      },
      {
        title: 'מקומות ותקציב אמיתי',
        body: 'אנחנו שולחים אפשרויות שמתאימות למספר האורחים שלכם, ולכל אחת תקציב מפורט.',
      },
      {
        title: 'סוגרים תאריך',
        body: 'חותמים, משלמים מקדמה ומקבלים את פורטל הזוג. המקום והספקים המרכזיים נסגרים.',
      },
      {
        title: 'מתכננים ביחד',
        body: 'עיצוב, תפריט, מוזיקה, חדרים והסעות. הכל מתועד בפורטל, ואנחנו בקשר צמוד.',
      },
      {
        title: 'סוף השבוע',
        body: 'אנחנו נוחתים לפניכם ומנהלים את שלושת הימים בשטח. אתם פשוט אורחים בחתונה של עצמכם.',
      },
    ],
  },
  faq: {
    eyebrow: 'שאלות',
    title: 'מה זוגות שואלים אותנו',
    items: [
      {
        q: 'לכמה אורחים אתם מפיקים?',
        a: 'רוב החתונות שלנו הן של 45 עד 150 אורחים. אם אתם מתחת או מעל, תכתבו בכל זאת ונגיד לכם בכנות אם זה מתאים.',
      },
      {
        q: 'כמה זמן מראש כדאי לסגור?',
        a: 'בערך שנה מראש זה אידיאלי, במיוחד לסופי שבוע ביוני ובספטמבר. גם לוח זמנים קצר יותר יכול לעבוד, תלוי במקום.',
      },
      {
        q: 'אפשר חתונה כשרה שמוכרת ברבנות?',
        a: 'כן. אנחנו עובדים עם רבנים מורשים מטעם הרבנות הראשית, כך שהנישואים מוכרים בישראל.',
      },
      {
        q: 'לחלק מהאורחים חשוב אוכל כשר למהדרין. זה אפשרי?',
        a: 'כן. אפשר לבחור מלון שותף כשר לגמרי, או להביא לארוחת החתונה קייטרינג ויין עם תעודת כשרות.',
      },
      {
        q: 'הספקים מקומיים או מישראל?',
        a: 'גם וגם. לאורך השנים בנינו צוות ספקים בישראל ובכל יעד. רוב הספקים המרכזיים שלנו ישראלים.',
      },
      {
        q: 'אתם נמצאים בחתונה עצמה?',
        a: 'כן, כל סוף השבוע. אחרי חודשים של תכנון ביחד, אין סיכוי שנפספס.',
      },
      {
        q: 'אפשר לסגור מקום בלי לבקר בו קודם?',
        a: 'רוב הזוגות עושים בדיוק את זה. אנחנו שולחים תמונות, סרטונים, סיור בווידאו ופרטים מחתונות קודמות שם. אם תרצו לבקר, נתאם לכם סיור עם המקום.',
      },
      {
        q: 'האורחים משלמים על החדרים שלהם?',
        a: 'הרבה פעמים כן, לפחות על חלק. הרבה זוגות מכסים את החתונה עצמה וחלק מהחדרים, והאורחים משלמים על שאר הלינה. בפורטל רואים בדיוק מי משלם על מה.',
      },
      {
        q: 'באילו מטבעות ואמצעי תשלום אפשר לשלם?',
        a: 'בכרטיס אשראי, ביורו, בדולר או בשקלים, דרך ספקי תשלום מורשים שעומדים בתקן PCI-DSS.',
      },
    ],
  },
  inquiry: {
    eyebrow: 'בואו נדבר',
    title: 'ספרו לנו קצת על החתונה',
    intro:
      'ארבע שאלות קצרות. כשתלחצו על הכפתור, וואטסאפ ייפתח עם התשובות שלכם מוכנות לשליחה, ואחד מאיתנו יחזור אליכם אישית.',
    guests: 'כמה אורחים בערך?',
    guestOptions: ['פחות מ-60', '60–90', '90–120', '120–150', '150+'],
    when: 'חודש או עונה',
    whenOptions: ['אביב (אפריל–מאי)', 'יוני', 'יולי–אוגוסט', 'ספטמבר', 'אוקטובר', 'עוד לא יודעים'],
    year: 'שנה',
    flexible: 'גמיש',
    destination: 'יעד',
    destOptions: ['יוון', 'איטליה', 'קפריסין', 'פתוחים לרעיונות'],
    notes: 'עוד משהו שחשוב לכם?',
    notesPlaceholder: 'אוכל כשר, אי מסוים, תאריך עם משמעות…',
    choose: 'בחרו…',
    submit: 'ממשיכים בוואטסאפ',
    privacy: 'שום דבר לא נשמר באתר. ההודעה עוברת ישר לוואטסאפ שלנו.',
    orEmail: 'מעדיפים מייל?',
    msg: {
      hi: 'היי רדאי ונגה! אנחנו מתכננים חתונה בחו״ל.',
      guests: 'מספר אורחים',
      when: 'מתי',
      destination: 'יעד',
      notes: 'עוד משהו',
      notSet: 'עוד לא יודעים',
      sig: '(נשלח מהאתר)',
    },
  },
  footer: {
    tagline: 'חתונות של שלושה ימים ביוון. איטליה וקפריסין לפי בקשה.',
    explore: 'באתר',
    contact: 'יצירת קשר',
    legal: 'מסמכים',
    terms: 'תנאי שימוש',
    privacy: 'מדיניות פרטיות',
    refund: 'ביטולים והחזרים',
    legalNote: 'המסמכים המשפטיים זמינים באנגלית בלבד.',
    payments: 'תשלומים ביורו, בדולר ובשקלים דרך ספקי תשלום מורשים.',
    rights: 'כל הזכויות שמורות.',
    whatsapp: 'וואטסאפ',
    instagram: 'אינסטגרם',
  },
}

export const content: Record<Lang, SiteContent> = { en, he }
