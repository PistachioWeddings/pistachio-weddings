import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { useLang } from '../i18n'
import { SECTION, business, links, whatsappUrl } from '../data/site'
import { RouteLink } from '../router'
import { BrandIcon } from './icons/BrandIcons'
import { EmailLink } from './EmailLink'
import { Wordmark } from './Wordmark'

export function Footer() {
  const { t } = useLang()
  const f = t.footer
  const year = new Date().getFullYear()

  const explore = [
    { id: SECTION.weekend, label: t.nav.weekend },
    { id: SECTION.venues, label: t.nav.venues },
    { id: SECTION.budget, label: t.nav.budget },
    { id: SECTION.portal, label: t.nav.portal },
    { id: SECTION.story, label: t.nav.story },
    { id: SECTION.faq, label: t.nav.faq },
  ]

  const legal = [
    { to: '/terms', label: f.terms },
    { to: '/privacy', label: f.privacy },
    { to: '/refund', label: f.refund },
  ]

  const heading = 'text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bg/60 rtl:tracking-normal rtl:text-[0.8rem]'
  const item = 'inline-flex min-h-[40px] items-center gap-2.5 text-bg/75 transition-colors hover:text-bg'

  return (
    <footer className="bg-forest-dark text-bg">
      <div className="wrap grid gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-24">
        <div className="md:col-span-4">
          <Wordmark className="text-bg" />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-bg/70">{f.tagline}</p>
          <div className="mt-7 flex items-center gap-2">
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={f.instagram}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-bg/5 transition-colors hover:bg-bg/15"
            >
              <BrandIcon name="instagram" className="h-[18px] w-[18px]" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={f.whatsapp}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-bg/5 transition-colors hover:bg-bg/15"
            >
              <BrandIcon name="whatsapp" className="h-[18px] w-[18px]" />
            </a>
            <a
              href={links.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2 inline-flex min-h-[44px] items-center gap-1.5 text-[0.88rem] text-bg/80 hover:text-bg"
            >
              {t.nav.portal}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.6} aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label={f.explore} className="md:col-span-2">
          <h2 className={heading}>{f.explore}</h2>
          <ul className="mt-4 text-[0.92rem]">
            {explore.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={item}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className={heading}>{f.contact}</h2>
          <address className="mt-4 text-[0.92rem] not-italic">
            <EmailLink className={item}>
              <Mail className="h-4 w-4 shrink-0 text-sage" strokeWidth={1.6} aria-hidden="true" />
              <span dir="ltr">{business.email}</span>
            </EmailLink>
            <ul>
              {business.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className={item}>
                    <Phone className="h-4 w-4 shrink-0 text-sage" strokeWidth={1.6} aria-hidden="true" />
                    <span dir="ltr">{p.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.82rem] leading-relaxed text-bg/55" dir="ltr" lang="en">
              {business.legalName}
              <br />
              {business.address}
            </p>
          </address>
        </div>

        <nav aria-label={f.legal} className="md:col-span-3">
          <h2 className={heading}>{f.legal}</h2>
          <ul className="mt-4 text-[0.92rem]">
            {legal.map((l) => (
              <li key={l.to}>
                <RouteLink to={l.to} className={item}>
                  {l.label}
                </RouteLink>
              </li>
            ))}
          </ul>
          {f.legalNote && <p className="mt-3 text-[0.8rem] text-bg/50">{f.legalNote}</p>}
        </nav>
      </div>

      <div className="border-t border-bg/10">
        <div className="wrap flex flex-col gap-2 py-6 text-[0.78rem] text-bg/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} <span dir="ltr">{business.legalName}</span>. {f.rights}
          </p>
          <p>{f.payments}</p>
        </div>
      </div>
    </footer>
  )
}
