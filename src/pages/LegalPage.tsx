import { ArrowLeft } from 'lucide-react'
import { policies } from '../data/legal'
import { business, LEGAL_ROUTES, type LegalRoute } from '../data/site'
import { RouteLink } from '../router'
import { EmailLink } from '../components/EmailLink'
import { Wordmark } from '../components/Wordmark'

/** English-only legal page (always LTR, regardless of the visitor's site language). */
export default function LegalPage({ path }: { path: LegalRoute }) {
  const policy = policies[path]

  return (
    <div lang="en" dir="ltr" className="min-h-screen bg-bg">
      <header className="sticky top-0 z-40 border-b border-hairline bg-bg/90 backdrop-blur-md">
        <div className="wrap flex h-[var(--header-h)] items-center justify-between">
          <RouteLink to="/" className="inline-flex min-h-[44px] items-center text-ink" aria-label="Pistachio Weddings home">
            <Wordmark />
          </RouteLink>
          <RouteLink
            to="/"
            className="inline-flex min-h-[44px] items-center gap-2 text-[0.88rem] text-muted transition-colors hover:text-forest"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
            Back to site
          </RouteLink>
        </div>
      </header>

      <main id="main" className="wrap max-w-3xl py-16 md:py-24">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-tight text-ink">
          {policy.title}
        </h1>
        <p className="mt-3 text-[0.88rem] text-faint">{policy.updated}</p>

        <div className="mt-12 space-y-10">
          {policy.sections.map((s, i) => (
            <section key={i}>
              {s.heading && <h2 className="text-[1.15rem] font-semibold text-ink">{s.heading}</h2>}
              {s.body?.map((p) => (
                <p key={p} className="mt-3 text-[1rem] leading-[1.75] text-muted">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-3 list-disc space-y-1.5 ps-5 text-[1rem] leading-relaxed text-muted marker:text-sage">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <nav aria-label="Legal" className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-8 text-[0.9rem]">
          {LEGAL_ROUTES.filter((r) => r !== path).map((r) => (
            <RouteLink key={r} to={r} className="link inline-flex min-h-[44px] items-center text-muted">
              {policies[r].title}
            </RouteLink>
          ))}
        </nav>
      </main>

      <footer className="border-t border-hairline bg-sage-ghost">
        <div className="wrap max-w-3xl py-8 text-[0.82rem] leading-relaxed text-muted">
          <p className="font-medium text-ink">{business.legalName}</p>
          <p>{business.address}</p>
          <p>
            <EmailLink className="link">{business.email}</EmailLink>
            {' · '}
            {business.phones.map((p, i) => (
              <span key={p.tel}>
                {i > 0 && ' · '}
                <a href={`tel:${p.tel}`} className="link">
                  {p.label}
                </a>
              </span>
            ))}
          </p>
          <p className="mt-3 text-faint">© {new Date().getFullYear()} {business.legalName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
