import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { useLang } from '../i18n'
import { SECTION, links } from '../data/site'
import { DESKTOP_QUERY, useMediaQuery } from '../lib/motion'
import { PhoneMockup } from './PhoneMockup'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function PortalShowcase() {
  const { t } = useLang()
  const p = t.portal
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const desktop = useMediaQuery(DESKTOP_QUERY)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const depth = desktop && !reduce
  // Subtle 2.5D: phone drifts and tilts slightly against the page as it passes.
  const y = useTransform(scrollYProgress, [0, 1], [depth ? 60 : 0, depth ? -60 : 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [depth ? -3 : 0, depth ? 2 : 0])

  return (
    <section
      ref={ref}
      id={SECTION.portal}
      aria-labelledby="portal-title"
      className="relative overflow-hidden bg-sage-ghost py-24 md:py-36"
    >
      <div className="wrap grid items-center gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6 lg:col-span-5">
          <SectionHeading id="portal-title" eyebrow={p.eyebrow} title={p.title} intro={p.body} />

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[0.98rem] text-ink">
                  <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-bg">
                    <Check className="h-3 w-3" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden items-center gap-3 md:flex">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-forest opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-forest" />
              </span>
              <span className="text-[0.95rem] font-medium text-forest">{p.try}</span>
              <span className="text-[0.9rem] text-muted">· {p.tryHint}</span>
              <ArrowRight className="h-4 w-4 text-forest motion-safe:animate-pulse rtl:-scale-x-100" strokeWidth={1.8} aria-hidden="true" />
            </div>

            <a
              href={links.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 hidden min-h-[44px] items-center gap-1.5 text-[0.92rem] font-medium text-forest md:inline-flex"
            >
              <span className="link">{p.link}</span>
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.6} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="relative md:col-span-6 lg:col-span-6 lg:col-start-7">
          {/* Soft halo behind the phone */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/30 blur-3xl"
          />

          <div className="mb-6 flex items-center justify-center gap-2 md:hidden">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-forest opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-forest" />
            </span>
            <span className="text-[0.95rem] font-medium text-forest">{p.try}</span>
            <span className="text-[0.85rem] text-muted">· {p.tryHint}</span>
          </div>

          <motion.div style={{ y, rotate }} className="relative will-change-transform">
            <PhoneMockup />
          </motion.div>

          <div className="mt-8 flex justify-center md:hidden">
            <a href={links.portal} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              {p.link}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.6} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
