import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../i18n'
import { editorialMedia } from '../data/content'
import { DESKTOP_QUERY, useMediaQuery } from '../lib/motion'
import { Reveal } from './Reveal'

// Natural orientation of each editorial photo (index-aligned with editorialMedia).
const SHAPES = ['aspect-[2/3]', 'aspect-[3/2]', 'aspect-[2/3]', 'aspect-[3/2]', 'aspect-[3/2]']
const OFFSETS = ['md:mt-0', 'md:mt-24', 'md:mt-10', 'md:mt-32', 'md:mt-4']

/**
 * Desktop: one wide strip that drifts sideways as the section passes (plain
 * transform tied to page scroll, nothing pinned). Mobile: native swipe row.
 */
export function Editorial() {
  const { t, isRtl } = useLang()
  const section = useRef<HTMLElement>(null)
  const strip = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const desktop = useMediaQuery(DESKTOP_QUERY)
  const drift = desktop && !reduce
  const [shift, setShift] = useState(0)

  useEffect(() => {
    if (!drift) return
    const measure = () => {
      const el = strip.current
      if (el) setShift(Math.max(0, el.scrollWidth - window.innerWidth + 48))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [drift])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, (v) => (drift ? (isRtl ? 1 : -1) * v * shift : 0))

  return (
    <section ref={section} aria-labelledby="moments-title" className="overflow-hidden bg-sage-ghost py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{t.editorial.eyebrow}</p>
          <h2 id="moments-title" className="mt-5 font-display text-d-1 font-medium text-ink">
            {t.editorial.title}
          </h2>
        </Reveal>
      </div>

      <motion.div
        ref={strip}
        style={{ x }}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 sm:px-8 md:mt-16 md:snap-none md:items-start md:gap-6 md:overflow-visible md:px-12 md:will-change-transform"
      >
        {editorialMedia.map((src, i) => {
          const portrait = SHAPES[i] === 'aspect-[2/3]'
          return (
            <div
              key={src}
              className={`shrink-0 snap-center ${OFFSETS[i]} ${
                portrait ? 'w-[62vw] md:w-[clamp(220px,22vw,320px)]' : 'w-[84vw] md:w-[clamp(360px,38vw,560px)]'
              }`}
            >
              <div className={`media rounded-[3px] ${SHAPES[i]}`}>
                <img src={src} alt={t.editorial.alts[i]} loading="lazy" decoding="async" draggable={false} />
              </div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
