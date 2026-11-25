import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n'
import { HERO_VIDEO_ENABLED, SECTION, links, media } from '../data/site'
import { DESKTOP_QUERY, EASE, useMediaQuery } from '../lib/motion'

// React 18 doesn't type `fetchpriority` yet; pass it through as a raw attribute.
const highPriority = { fetchpriority: 'high' } as Record<string, string>

export function Hero() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const desktop = useMediaQuery(DESKTOP_QUERY)
  const { scrollY } = useScroll()
  const parallax = desktop && !reduce
  const y = useTransform(scrollY, [0, 900], [0, parallax ? 180 : 0])
  const fade = useTransform(scrollY, [0, 500], [1, parallax ? 0 : 1])

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease: EASE, delay },
        }

  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] overflow-hidden bg-ink text-white">
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        {HERO_VIDEO_ENABLED ? (
          <video
            className="h-full w-full object-cover"
            src={media.heroVideo}
            poster={media.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <img
            src={media.heroPoster}
            alt={t.hero.alt}
            width={1440}
            height={810}
            decoding="async"
            {...highPriority}
            className="h-full w-full origin-center object-cover motion-safe:animate-ken-burns"
          />
        )}
      </motion.div>

      {/* Legibility: soft top band for the header, deeper base for the copy. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#1b2119]/85 via-[#1b2119]/25 to-transparent" />

      <motion.div style={{ opacity: fade }} className="relative flex h-full items-end">
        <div className="wrap pb-[max(4.5rem,env(safe-area-inset-bottom))] md:pb-24">
          <motion.p {...enter(0.1)} className="text-eyebrow font-medium uppercase text-white/80">
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            {...enter(0.2)}
            className="mt-5 max-w-[16ch] font-display text-d-hero font-medium text-white"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p {...enter(0.35)} className="mt-6 max-w-xl text-[1.02rem] font-light leading-relaxed text-white/85 md:text-[1.1rem]">
            {t.hero.sub}
          </motion.p>
          <motion.div {...enter(0.5)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href={`#${SECTION.inquiry}`} className="btn bg-white text-ink hover:bg-sage-soft">
              {t.hero.cta}
            </a>
            <a href={links.portal} target="_blank" rel="noopener noreferrer" className="btn-light">
              {t.hero.portal}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.6} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <a
        href={`#${SECTION.weekend}`}
        aria-label={t.hero.scroll}
        className="absolute bottom-6 end-5 hidden h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-white hover:text-white md:end-12 md:flex"
      >
        <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" strokeWidth={1.5} aria-hidden="true" />
      </a>
    </section>
  )
}
