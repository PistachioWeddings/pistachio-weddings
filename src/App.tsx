import { Suspense, lazy, useEffect, useLayoutEffect, useRef } from 'react'
import { useLang } from './i18n'
import { registerPrefetch, savedScroll, useRouter } from './router'
import { LEGAL_ROUTES, type LegalRoute } from './data/site'
import { Home } from './pages/Home'

const loadLegal = () => import('./pages/LegalPage')
const LegalPage = lazy(loadLegal)
LEGAL_ROUTES.forEach((r) => registerPrefetch(r, loadLegal))

const isLegal = (p: string): p is LegalRoute => (LEGAL_ROUTES as readonly string[]).includes(p)

const TITLES: Record<LegalRoute, string> = {
  '/terms': 'Terms of Service',
  '/privacy': 'Privacy Policy',
  '/refund': 'Refund & Cancellation Policy',
}

export default function App() {
  const { path } = useRouter()
  const { lang, t } = useLang()
  const legal = isLegal(path)

  // Legal pages are always English/LTR; everything else follows the visitor's choice.
  useEffect(() => {
    const effective = legal ? 'en' : lang
    const root = document.documentElement
    root.lang = effective
    root.dir = effective === 'he' ? 'rtl' : 'ltr'
    document.title = legal ? `${TITLES[path as LegalRoute]} | Pistachio Weddings` : t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [legal, lang, path, t])

  // Instant back/forward: the home view stays mounted (hidden) and its scroll is restored.
  const prevPath = useRef(path)
  useLayoutEffect(() => {
    if (prevPath.current === path) return
    prevPath.current = path
    window.scrollTo({ top: savedScroll(path), behavior: 'instant' })
  }, [path])

  // Deep links like /#venues: the section only exists after React renders, so jump once here.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }))
  }, [])

  return (
    <>
      <div hidden={legal}>
        <Home />
      </div>
      {legal && (
        <Suspense fallback={<div className="min-h-screen bg-bg" />}>
          <LegalPage path={path} />
        </Suspense>
      )}
    </>
  )
}
