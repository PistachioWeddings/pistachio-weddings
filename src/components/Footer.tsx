import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { BrandIcon } from './icons/BrandIcons'
import { EmailLink } from './EmailLink'
import { LegalModal } from './LegalModal'
import { business, policies, primaryWhatsApp } from '../data/site'
import type { Policy } from '../data/site'

const exploreLinks = [
  { href: '#story', label: 'Our Story' },
  { href: '#services', label: 'What We Offer' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#faq', label: 'FAQs' },
]

const legalLinks: { key: keyof typeof policies; label: string }[] = [
  { key: 'terms', label: 'Terms of Service' },
  { key: 'privacy', label: 'Privacy Policy' },
  { key: 'refund', label: 'Refund & Cancellation Policy' },
]

const socialLinks = [
  { name: 'instagram' as const, href: business.socials.instagram, label: 'Instagram' },
  { name: 'facebook' as const, href: business.socials.facebook, label: 'Facebook' },
  { name: 'linkedin' as const, href: business.socials.linkedin, label: 'LinkedIn' },
]

export function Footer() {
  const [openPolicy, setOpenPolicy] = useState<Policy | null>(null)
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-charcoal text-cream">
      {/* Conversion CTA */}
      <div className="border-b border-cream/10">
        <div className="container-luxe py-20 text-center sm:py-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-wider2 text-sage-300">
            Begin Your Journey
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl font-medium leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Let’s plan something unforgettable
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-cream/70">
            Tell us about your day — the people, the place, the feeling. We’ll take care of the rest.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={primaryWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-cream px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-charcoal transition-colors duration-200 ease-luxe hover:bg-sage-100 [touch-action:manipulation]"
            >
              <BrandIcon name="whatsapp" className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <EmailLink className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-cream/30 px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-200 ease-luxe hover:border-cream/70 [touch-action:manipulation]">
              <Mail className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              Email Us
            </EmailLink>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-[0.8rem] leading-relaxed text-cream/60">
            Every wedding is individually quoted. Secure deposits and payments are processed through
            authorized payment providers in EUR, USD &amp; ILS.
          </p>
        </div>
      </div>

      {/* Detail columns */}
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand + socials */}
        <div className="lg:pr-6">
          <div className="font-serif leading-none">
            <span className="block text-2xl font-medium">Pistachio</span>
            <span className="mt-1.5 block font-sans text-[0.58rem] font-medium uppercase tracking-wider2 text-sage-300">
              Weddings &amp; Events
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            Boutique destination weddings in Greece, Italy &amp; Cyprus.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <EmailLink
              aria-label={`Email Pistachio Weddings at ${business.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/5 text-cream transition-colors duration-200 hover:bg-cream/10"
            >
              <Mail className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} aria-hidden="true" />
            </EmailLink>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pistachio Weddings on ${social.label}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/5 transition-colors duration-200 hover:bg-cream/10"
              >
                <BrandIcon name={social.name} className="h-[1.15rem] w-[1.15rem]" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact / business details */}
        <div>
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-wider2 text-cream/80">
            Contact
          </h3>
          <address className="mt-5 space-y-4 not-italic text-sm leading-relaxed text-cream/65">
            <p>
              <span className="block font-medium text-cream/90">{business.legalName}</span>
              {business.address}
            </p>
            <EmailLink className="link-underline flex items-center gap-2.5 text-cream/65 hover:text-cream">
              <Mail className="h-4 w-4 shrink-0 text-sage-300" strokeWidth={1.6} aria-hidden="true" />
              {business.email}
            </EmailLink>
            <ul className="space-y-2.5">
              {business.phones.map((phone) => (
                <li key={phone.tel} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a
                    href={`tel:${phone.tel}`}
                    className="link-underline flex items-center gap-2.5 text-cream/65 hover:text-cream"
                  >
                    <Phone
                      className="h-4 w-4 shrink-0 text-sage-300"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    {phone.label}
                  </a>
                  {phone.whatsapp && (
                    <a
                      href={phone.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-cream/5 px-2.5 py-1 text-[0.7rem] font-medium text-cream/80 transition-colors hover:bg-cream/10"
                      aria-label="Chat on WhatsApp"
                    >
                      <BrandIcon name="whatsapp" className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </address>
        </div>

        {/* Explore */}
        <nav aria-label="Footer" className="text-sm">
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-wider2 text-cream/80">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline text-cream/65 hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal (modals) */}
        <div className="text-sm">
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-wider2 text-cream/80">
            Legal
          </h3>
          <ul className="mt-5 space-y-3">
            {legalLinks.map((link) => (
              <li key={link.key}>
                <button
                  type="button"
                  onClick={() => setOpenPolicy(policies[link.key])}
                  className="link-underline text-left text-cream/65 hover:text-cream"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-center text-[0.72rem] text-cream/50 sm:flex-row sm:text-left">
          <p>© {year} {business.legalName}. All rights reserved.</p>
          <p>Secure payments · EUR · USD · ILS</p>
        </div>
      </div>

      <LegalModal policy={openPolicy} onClose={() => setOpenPolicy(null)} />
    </footer>
  )
}
