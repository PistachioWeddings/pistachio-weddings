import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useLang } from '../i18n'
import { SECTION } from '../data/site'
import { weekendMedia, type SiteContent } from '../data/content'
import { DESKTOP_QUERY, EASE, useMediaQuery } from '../lib/motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Day = SiteContent['weekend']['days'][number]

export function Weekend() {
  const { t } = useLang()
  const desktop = useMediaQuery(DESKTOP_QUERY)
  const reduce = useReducedMotion()
  const sticky = desktop && !reduce

  return (
    <section id={SECTION.weekend} aria-labelledby="weekend-title" className="relative bg-bg">
      <div className="wrap pb-6 pt-24 md:pb-10 md:pt-36">
        <SectionHeading id="weekend-title" eyebrow={t.weekend.eyebrow} title={t.weekend.title} intro={t.weekend.intro} />
      </div>

      {t.weekend.days.map((day, i) =>
        sticky ? (
          <StickyChapter key={i} day={day} media={weekendMedia[i]} index={i} />
        ) : (
          <StackedChapter key={i} day={day} media={weekendMedia[i]} index={i} />
        ),
      )}
    </section>
  )
}

/* ------------------------------------------------------------------------ */
/* Desktop: pinned stage, frames layer in as the visitor scrolls.            */
/* ------------------------------------------------------------------------ */

function StickyChapter({ day, media, index }: { day: Day; media: string[]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const n = media.length
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))))
  })

  const cardY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="relative" style={{ height: `${90 + n * 60}vh` }}>
      <div className="sticky top-0 flex h-screen items-center pt-[var(--header-h)]">
        <div className="wrap grid grid-cols-12 items-center gap-10 lg:gap-14">
          {/* Copy */}
          <div className="col-span-5">
            <p className="font-serif text-[5.5rem] font-medium italic leading-none text-sage" dir="ltr">
              0{index + 1}
            </p>
            <p className="eyebrow mt-4">
              {day.label} · {day.name}
            </p>
            <h3 className="mt-4 font-display text-d-2 font-medium text-ink">{day.title}</h3>
            <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted">{day.body}</p>

            <div className="relative mt-9 ps-5">
              <div aria-hidden="true" className="absolute inset-y-0 start-0 w-px bg-hairline-2" />
              <motion.div
                aria-hidden="true"
                style={{ scaleY: bar }}
                className="absolute inset-y-0 start-0 w-px origin-top bg-forest"
              />
              <ol className="space-y-2.5">
                {day.captions.map((c, j) => (
                  <li
                    key={j}
                    className={`text-[0.92rem] transition-colors duration-500 ease-brand ${
                      j === active ? 'text-ink' : j < active ? 'text-muted' : 'text-faint'
                    }`}
                  >
                    {c}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Stage */}
          <div className="relative col-span-7 flex justify-center">
            <div
              className="media relative aspect-[4/5] max-w-full rounded-[3px] shadow-up"
              style={{ height: 'min(74vh, 760px)' }}
            >
              {media.map((src, j) => (
                <Frame key={src} src={src} alt={day.captions[j]} i={j} n={n} progress={scrollYProgress} />
              ))}
            </div>

            {/* Floating caption card: moves at its own speed for a little depth. */}
            <motion.div
              style={{ y: cardY }}
              className="absolute bottom-10 start-0 z-10 w-64 rounded-xl border border-hairline bg-bg/95 p-5 shadow-up backdrop-blur lg:-start-4"
            >
              <p className="tabular text-eyebrow font-medium uppercase text-faint" dir="ltr">
                {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
              </p>
              <div className="relative mt-2 min-h-[3rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={active}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="font-display text-[1.25rem] leading-snug text-ink"
                  >
                    {day.captions[active]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Frame({
  src,
  alt,
  i,
  n,
  progress,
}: {
  src: string
  alt: string
  i: number
  n: number
  progress: MotionValue<number>
}) {
  const start = i / n
  const end = (i + 1) / n
  const lead = 0.45 / n // how early the next frame starts to rise in
  // Each frame rises and settles over the previous one (later frames sit on top).
  const opacity = useTransform(progress, [start - lead, start], i === 0 ? [1, 1] : [0, 1])
  const y = useTransform(progress, [start - lead, start], i === 0 ? ['0%', '0%'] : ['7%', '0%'])
  const scale = useTransform(progress, [Math.max(0, start - lead), end], [1.12, 1])

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 overflow-hidden will-change-transform">
      <motion.img
        src={src}
        alt={alt}
        loading={i === 0 ? 'eager' : 'lazy'}
        decoding="async"
        style={{ scale }}
        className="h-full w-full object-cover"
      />
    </motion.div>
  )
}

/* ------------------------------------------------------------------------ */
/* Mobile (and reduced motion): stacked, fast fade-ins. No pinning.          */
/* ------------------------------------------------------------------------ */

function StackedChapter({ day, media, index }: { day: Day; media: string[]; index: number }) {
  const rest = media.length - 1
  return (
    <div className="wrap py-12 md:py-20">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-[3.5rem] font-medium italic leading-none text-sage" dir="ltr">
            0{index + 1}
          </span>
          <span className="eyebrow">
            {day.label} · {day.name}
          </span>
        </div>
        <h3 className="mt-4 font-display text-d-2 font-medium text-ink">{day.title}</h3>
        <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-muted">{day.body}</p>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-3 md:gap-5">
        {media.map((src, j) => {
          const full = j === 0 || (rest % 2 === 1 && j === media.length - 1)
          const aspect = j === 0 ? 'aspect-[4/5]' : full ? 'aspect-[4/3]' : 'aspect-[3/4]'
          return (
            <Reveal key={src} className={full ? 'col-span-2' : ''} delay={full ? 0 : (j % 2) * 0.08}>
              <figure>
                <div className={`media rounded-[3px] ${aspect}`}>
                  <img src={src} alt={day.captions[j]} loading="lazy" decoding="async" />
                </div>
                <figcaption className="mt-2.5 text-[0.85rem] leading-snug text-muted">{day.captions[j]}</figcaption>
              </figure>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
