// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Verbatim client-supplied copy (story, FAQs, policies, contact details) lives
// here so it is easy to review and never duplicated across components.
// ---------------------------------------------------------------------------

export type Phone = {
  label: string
  tel: string
  whatsapp?: string
}

export const business = {
  name: 'Pistachio Weddings & Events',
  legalName: 'Pistachio Weddings LLC',
  tagline: 'Boutique Destination Weddings in Greece, Italy & Cyprus',
  address: '1317 EdgeWater Drive Unit 4559, Orlando, Florida, 32804',
  email: 'admin@pistachioweddings.com',
  phones: [
    { label: '+972 50-881-7006', tel: '+972508817006', whatsapp: 'https://wa.me/972508817006' },
    { label: '+972 54-774-4622', tel: '+972547744622' },
    { label: '+1 929-469-8289', tel: '+19294698289' },
  ] as Phone[],
  socials: {
    instagram:
      'https://www.instagram.com/pistachio.weddings?igsh=MWNoNHM4a3Rmcjl1eg%3D%3D&utm_source=qr',
    facebook: 'https://www.facebook.com/profile.php?id=61560300757244&mibextid=wwXIfr',
    linkedin: 'https://www.linkedin.com/company/pistachio-weddings/',
  },
  currencies: ['EUR', 'USD', 'ILS'] as const,
}

// Primary CTA opens a WhatsApp conversation with the main planning line.
export const primaryWhatsApp = business.phones[0].whatsapp as string

export const story =
  'We are Raday and Noga, a married couple producing destination weddings and ' +
  'celebrating love in unforgettable locations. When we were engaged, we went ' +
  'through the same process you are currently experiencing as an engaged couple ' +
  'dreaming to have your wedding overseas. After speaking with various wedding ' +
  'producers, we decided to produce our special day on our own. We fell in love ' +
  'with the process and decided to make this dream a reality for more couples. ' +
  'Our goal at Pistachio Weddings is to craft for you and your loved ones, a ' +
  'customized boutique wedding, one that everyone attending will catch ' +
  'themselves reminiscing years later🩵'

export type Service = { title: string; description: string }

export const services: Service[] = [
  {
    title: 'Bespoke Planning',
    description:
      'Every detail tailored to you — concept, design and timeline crafted around your story, from the first idea to the final toast.',
  },
  {
    title: 'Vendor Management',
    description:
      'A trusted network of premium vendors, fully coordinated and negotiated on your behalf for seamless quality and value.',
  },
  {
    title: 'On-Site Coordination',
    description:
      'Our team is with you on the ground throughout the celebration, so you and your guests simply enjoy the moment.',
  },
]

export type Destination = { name: string; blurb: string; image: string }

export const destinations: Destination[] = [
  {
    name: 'Greece',
    blurb: 'Whitewashed villages, Aegean sunsets and intimate island venues.',
    image: '/images/greece.jpg',
  },
  {
    name: 'Italy',
    blurb: 'Timeless coastlines, sun-drenched terraces and effortless romance.',
    image: '/images/italy.jpg',
  },
  {
    name: 'Cyprus',
    blurb: 'Golden beaches, warm Mediterranean light and exclusive retreats.',
    image: '/images/cyprus.jpg',
  },
]

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: 'Can we have a kosher religious wedding approved by the Rabbinate?',
    answer:
      'Yes. We work with authorized Rabbis approved by the Chief Rabbinate to ensure your marriage is fully recognized in Israel.',
  },
  {
    question: 'What if some of our guests require strictly kosher food?',
    answer:
      'We offer seamless solutions, including fully kosher partner hotels or importing certified kosher catering and wine directly to your wedding dinner.',
  },
  {
    question: 'Are the vendors local or from Israel?',
    answer:
      'We have spent years building a trusted network of premium vendors from both Israel and local destinations, ensuring competitive pricing and top-tier service. Most of our key vendors are Israeli.',
  },
  {
    question: 'Will your production team be present at the wedding?',
    answer:
      'Absolutely. After months of planning together, we are just as excited as you are. Our team accompanies you on-site throughout the entire event.',
  },
  {
    question: 'What is the typical guest count for destination weddings?',
    answer: 'Most destination weddings we produce host between 60 to 150 guests.',
  },
  {
    question: 'How can we book a venue overseas without visiting first?',
    answer:
      'We provide complete transparency through media, virtual walkthroughs, and detailed insights from past events. If you wish to visit, we gladly coordinate a welcome tour with the venue.',
  },
  {
    question: 'How do you select the hotels?',
    answer:
      "We aim for unique, intimate locations and try to match your guest count to the hotel's capacity for an exclusive venue buyout, subject to availability.",
  },
  {
    question: 'What extra amenities do the hotels offer?',
    answer:
      'We intentionally prioritize stunning beachfront properties that feature excellent, all-day on-site restaurants.',
  },
  {
    question: 'What currencies and payment methods do you accept?',
    answer:
      'We securely accept payments via Credit Cards in EUR, USD, and ILS processed through authorized PCI-DSS compliant payment service providers.',
  },
]

// ---------------------------------------------------------------------------
// Legal policies (rendered in accessible modals from the footer).
// The Refund & Cancellation rules are stated verbatim per the brief.
// ---------------------------------------------------------------------------

export type PolicySection = { heading?: string; body?: string[]; list?: string[] }
export type Policy = { id: string; title: string; updated: string; sections: PolicySection[] }

const LAST_UPDATED = 'Last updated: 25 June 2026'

export const policies: Record<'terms' | 'privacy' | 'refund', Policy> = {
  terms: {
    id: 'terms',
    title: 'Terms of Service',
    updated: LAST_UPDATED,
    sections: [
      {
        body: [
          'These Terms of Service ("Terms") govern the wedding and event planning, production and coordination services provided by Pistachio Weddings LLC ("Pistachio Weddings", "we", "us" or "our") to clients ("you"). By engaging our services or making a payment, you agree to these Terms together with any signed proposal or contract, which together form the complete agreement between us.',
        ],
      },
      {
        heading: '1. Our Services',
        body: [
          'We provide bespoke destination wedding planning, vendor management and on-site coordination in Greece, Italy, Cyprus and other agreed locations. The specific scope, deliverables and pricing for your event are defined in your individual written proposal or contract. Weddings are quoted individually; there is no fixed package price.',
        ],
      },
      {
        heading: '2. Bookings & Payments',
        body: [
          'A signed contract and the initial deposit/retainer are required to reserve your date and begin work. Payments are processed securely through authorized PCI-DSS compliant payment service providers in EUR, USD or ILS. We do not store your full card details. The payment schedule and the treatment of deposits are set out in our Refund & Cancellation Policy, which forms part of these Terms.',
        ],
      },
      {
        heading: '3. Third-Party Vendors',
        body: [
          'Many elements of your event are delivered by independent third-party vendors (venues, hotels, caterers, photographers, officiants and others). While we carefully select and coordinate these partners, each vendor remains responsible for its own services and is subject to its own terms, deposits and cancellation conditions, which may flow through to you.',
        ],
      },
      {
        heading: '4. Client Responsibilities',
        body: [
          'You agree to provide accurate information, respond to planning requests in a timely manner, and ensure that you and your guests hold valid travel documentation and comply with the laws and requirements of the destination country. You are responsible for your guests’ conduct during the event.',
        ],
      },
      {
        heading: '5. Force Majeure',
        body: [
          'Neither party shall be liable for failure or delay caused by events beyond its reasonable control, including natural disasters, extreme weather, war, civil unrest, strikes, epidemics, pandemics, or governmental restrictions. The financial treatment of such events is described in our Refund & Cancellation Policy.',
        ],
      },
      {
        heading: '6. Limitation of Liability',
        body: [
          'To the maximum extent permitted by law, our total liability arising from our services shall not exceed the total planning fees actually paid to us. We are not liable for the acts, omissions or independent failures of third-party vendors.',
        ],
      },
      {
        heading: '7. Governing Law',
        body: [
          'These Terms are governed by the laws of the State of Florida, USA, without regard to its conflict-of-laws principles. We may update these Terms from time to time; the version in effect at the time of your contract applies to your event.',
        ],
      },
      {
        heading: 'Contact',
        body: [
          'Questions about these Terms can be sent to admin@pistachioweddings.com or to Pistachio Weddings LLC, 1317 EdgeWater Drive Unit 4559, Orlando, Florida, 32804.',
        ],
      },
    ],
  },

  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    updated: LAST_UPDATED,
    sections: [
      {
        body: [
          'This Privacy Policy explains how Pistachio Weddings LLC collects, uses and protects your personal information. We respect your privacy and are committed to keeping your data secure.',
        ],
      },
      {
        heading: 'Information We Collect',
        body: [
          'We only collect information you choose to share with us — such as your name, email address, phone number and the details of your event — when you contact us by email, WhatsApp, phone or social media. We do not collect more than we need to plan your wedding.',
        ],
      },
      {
        heading: 'How We Use Your Information',
        list: [
          'To respond to your enquiries and provide our planning services.',
          'To coordinate with the vendors and venues involved in your event.',
          'To process payments and meet our legal and accounting obligations.',
        ],
      },
      {
        heading: 'Payments & Security',
        body: [
          'Payments are processed securely by authorized PCI-DSS compliant payment providers. Your full card details are handled directly by our payment gateway providers and are never stored on our servers. We never sell, rent or trade your personal information to third parties.',
        ],
      },
      {
        heading: 'Data Retention & Your Rights',
        body: [
          'We retain your information only for as long as necessary to provide our services and comply with the law. You may request access to, correction of, or deletion of your personal data at any time by emailing admin@pistachioweddings.com.',
        ],
      },
    ],
  },

  refund: {
    id: 'refund',
    title: 'Refund & Cancellation Policy',
    updated: LAST_UPDATED,
    sections: [
      {
        body: [
          'Because destination weddings require us to commit to venues, hotels and vendors well in advance and on your behalf, the following terms apply to all bookings. These terms form part of our Terms of Service and your signed contract.',
        ],
      },
      {
        heading: 'Deposits & Retainer Fees',
        body: ['All deposits/retainer fees paid are strictly non-refundable.'],
      },
      {
        heading: 'Payment Schedule',
        body: ['The standard payment schedule is split into 4 installments:'],
        list: [
          'Upon contract signing',
          '3 months prior to the event',
          '1 month prior to the event',
          'The final balance on the day of the event',
        ],
      },
      {
        heading: 'Force Majeure',
        body: [
          'In the event of a Force Majeure preventing the client or their guests from attending, and subject to third-party vendor terms, payments made up to that date will be preserved as a voucher for the following season, minus a 30% administrative and non-recoverable vendor fee.',
        ],
      },
    ],
  },
}
