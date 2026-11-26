import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLang } from '../i18n'
import { SECTION, links } from '../data/site'
import { EASE, scrollToId } from '../lib/motion'
import { LangToggle } from './LangToggle'
import { Wordmark } from './Wordmark'

export function Header() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    const prev = root.style.overflow
    root.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      root.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const navItems = [
    { id: SECTION.weekend, label: t.nav.weekend },
    { id: SECTION.venues, label: t.nav.venues },
    { id: SECTION.budget, label: t.nav.budget },
    { id: SECTION.story, label: t.nav.story },
    { id: SECTION.faq, label: t.nav.faq },
  ]

  const go = (id: string) => {
    setOpen(false)
    // Wait one frame so the scroll lock is released before scrolling.
    requestAnimationFrame(() => scrollToId(id))
  }

  const solid = scrolled || open
  const tone = solid ? 'dark' : 'light'

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-bg"
      >
        {t.nav.skip}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-500 ease-brand ${
          solid
            ? 'border-b border-hairline bg-bg/90 text-ink backdrop-blur-md supports-[backdrop-filter]:bg-bg/80'
            : 'border-b border-transparent bg-transparent text-white'
        }`}
      >
        <div className="wrap flex h-[var(--header-h)] items-center gap-3 lg:gap-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
              window.scrollTo({ top: 0 })
            }}
            aria-label={t.nav.home}
            className="me-auto inline-flex min-h-[44px] items-center"
          >
            <Wordmark mark={solid ? 'brand' : 'light'} />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex min-h-[44px] items-center px-3 text-[0.88rem] opacity-85 transition-opacity duration-300 hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={links.portal}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center gap-1 px-2 text-[0.82rem] opacity-75 transition-opacity duration-300 hover:opacity-100 md:inline-flex"
          >
            {t.nav.portal}
            <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" strokeWidth={1.6} aria-hidden="true" />
          </a>

          <LangToggle tone={tone} />

          <a
            href={`#${SECTION.inquiry}`}
            className={`hidden !min-h-[44px] !px-5 sm:inline-flex ${solid ? 'btn-primary' : 'btn-light'}`}
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="-me-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.6} /> : <Menu className="h-5 w-5" strokeWidth={1.6} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto bg-bg lg:hidden"
          >
            <nav aria-label="Mobile" className="wrap flex flex-col pb-10 pt-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(item.id)
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.04 * i }}
                  className="flex min-h-[56px] items-center border-b border-hairline font-display text-d-3 text-ink"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href={`#${SECTION.inquiry}`}
                onClick={(e) => {
                  e.preventDefault()
                  go(SECTION.inquiry)
                }}
                className="btn-primary mt-8"
              >
                {t.nav.cta}
              </a>
              <a
                href={links.portal}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-3"
              >
                {t.nav.portal}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.6} aria-hidden="true" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
