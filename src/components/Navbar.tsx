import { useEffect, useState } from 'react'
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react'
import { business, primaryWhatsApp } from '../data/site'
import { EmailLink } from './EmailLink'

const socialLinks = [
  { href: business.socials.instagram, label: 'Pistachio Weddings on Instagram', Icon: Instagram },
  { href: business.socials.facebook, label: 'Pistachio Weddings on Facebook', Icon: Facebook },
  { href: business.socials.linkedin, label: 'Pistachio Weddings on LinkedIn', Icon: Linkedin },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Light treatment over the dark hero; charcoal-on-cream once scrolled.
  const onLight = scrolled
  const textColor = onLight ? 'text-charcoal' : 'text-cream'

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-luxe',
        onLight
          ? 'bg-cream/85 shadow-[0_1px_0_0_rgba(45,45,45,0.08)] backdrop-blur-md'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav
        aria-label="Primary"
        className="container-luxe flex items-center justify-between py-4 sm:py-5"
      >
        {/* Wordmark */}
        <a
          href="#top"
          className={`group inline-flex min-h-[44px] flex-col justify-center font-serif leading-none transition-colors duration-300 ${textColor}`}
          aria-label="Pistachio Weddings & Events — home"
        >
          <span className="block text-xl font-medium tracking-tight sm:text-2xl">Pistachio</span>
          <span
            className={`mt-1 block text-[0.58rem] font-sans font-medium uppercase tracking-wider2 transition-colors duration-300 ${
              onLight ? 'text-sage-700' : 'text-cream/80'
            }`}
          >
            Weddings &amp; Events
          </span>
        </a>

        {/* Social + quick CTA */}
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={primaryWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className={`mr-1 hidden text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 hover:text-sage-600 md:inline-block ${textColor}`}
          >
            Plan Your Wedding
          </a>
          <EmailLink
            aria-label={`Email Pistachio Weddings at ${business.email}`}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:text-sage-600 ${
              onLight ? 'text-charcoal hover:bg-sage-50' : 'text-cream hover:bg-white/10'
            }`}
          >
            <Mail className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} aria-hidden="true" />
          </EmailLink>
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:text-sage-600 ${
                onLight ? 'text-charcoal hover:bg-sage-50' : 'text-cream hover:bg-white/10'
              }`}
            >
              <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} aria-hidden="true" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
