// ---------------------------------------------------------------------------
// Site configuration: switches, contact details and shared media paths.
// Copy lives in content.ts, venue cards in venues.ts, legal text in legal.ts.
// ---------------------------------------------------------------------------

/**
 * Flip to `true` once `/public/media/hero/hero-video.mp4` exists.
 * The poster image stays as the video's `poster` so LCP is unchanged.
 */
export const HERO_VIDEO_ENABLED = false

export const media = {
  heroPoster: '/media/hero/hero-poster.jpg',
  heroVideo: '/media/hero/hero-video.mp4',
}

export type Phone = { label: string; tel: string }

export const business = {
  name: 'Pistachio Weddings',
  legalName: 'Pistachio Weddings LLC',
  address: '1317 EdgeWater Drive Unit 4559, Orlando, Florida, 32804',
  email: 'admin@pistachioweddings.com',
  phones: [
    { label: '+972 54-774-4622', tel: '+972547744622' },
    { label: '+972 50-881-7006', tel: '+972508817006' },
    { label: '+1 929-469-8289', tel: '+19294698289' },
  ] as Phone[],
  currencies: ['EUR', 'USD', 'ILS'] as const,
}

export const links = {
  portal: 'https://portal.pistachioweddings.com',
  instagram: 'https://www.instagram.com/pistachio.weddings/',
  facebook: 'https://www.facebook.com/profile.php?id=61560300757244',
  linkedin: 'https://www.linkedin.com/company/pistachio-weddings/',
}

/** WhatsApp number that receives inquiry-form messages (digits only, no +). */
export const WHATSAPP_NUMBER = '972547744622'

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

/** In-page section anchors (shared by header, footer and CTAs). */
export const SECTION = {
  weekend: 'weekend',
  venues: 'venues',
  budget: 'budget',
  portal: 'portal',
  story: 'story',
  process: 'process',
  faq: 'faq',
  inquiry: 'inquiry',
} as const

/** SPA routes for the English-only legal pages. */
export const LEGAL_ROUTES = ['/terms', '/privacy', '/refund'] as const
export type LegalRoute = (typeof LEGAL_ROUTES)[number]
