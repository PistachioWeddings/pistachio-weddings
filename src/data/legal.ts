// ---------------------------------------------------------------------------
// Legal policies. ENGLISH ONLY, never translated (payment-provider compliance).
// Wording preserved from the previous site, with the provider-neutral payment
// language from the "Update payment provider references for compliance" commit.
// ---------------------------------------------------------------------------

import type { LegalRoute } from './site'

export type PolicySection = { heading?: string; body?: string[]; list?: string[] }
export type Policy = { title: string; updated: string; sections: PolicySection[] }

const LAST_UPDATED = 'Last updated: 25 June 2026'

export const policies: Record<LegalRoute, Policy> = {
  '/terms': {
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

  '/privacy': {
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

  '/refund': {
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
