import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../i18n'
import { SECTION } from '../data/site'
import { aboutMedia } from '../data/content'
import { DESKTOP_QUERY, useMediaQuery } from '../lib/motion'
import { Reveal } from './Reveal'

export function About() {
  const { t } = useLang()
  const a = t.about
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const desktop = useMediaQuery(DESKTOP_QUERY)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const depth = desktop && !reduce
  const overlapY = useTransform(scrollYProgress, [0, 1], [depth ? 70 : 0, depth ? -70 : 0])

  return (
    <section id={SECTION.story} aria-labelledby="story-title" className="bg-bg py-24 md:py-36">
      <div className="wrap grid items-center gap-16 md:grid-cols-12 md:gap-10">
        {/* Layered photos */}
        <div ref={ref} className="relative pb-[22%] md:col-span-6 md:pb-[18%]">
          <Reveal>
            <figure className="w-[78%]">
              <div className="media aspect-[4/5] rounded-[3px]">
                <img src={aboutMedia.wedding} alt={a.alts.wedding} loading="lazy" decoding="async" />
              </div>
              <figcaption className="mt-2.5 text-[0.8rem] text-faint">{a.captions.wedding}</figcaption>
            </figure>
          </Reveal>

          <motion.figure style={{ y: overlapY }} className="absolute bottom-0 end-0 w-[48%] will-change-transform">
            <Reveal delay={0.15}>
              <div className="media aspect-[4/5] rounded-[3px] shadow-up ring-[6px] ring-bg md:ring-8">
                <img src={aboutMedia.onsite} alt={a.alts.onsite} loading="lazy" decoding="async" />
              </div>
              <figcaption className="mt-2.5 text-[0.8rem] text-faint">{a.captions.onsite}</figcaption>
            </Reveal>
          </motion.figure>
        </div>

        {/* Story */}
        <div className="md:col-span-5 md:col-start-8">
          <Reveal>
            <p className="eyebrow">{a.eyebrow}</p>
            <h2 id="story-title" className="mt-5 font-display text-d-1 font-medium text-ink">
              {a.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-7 space-y-5 text-[1.02rem] leading-[1.75] text-muted">
            {a.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="pt-2 font-serif text-[1.7rem] italic text-forest rtl:font-display rtl:text-[1.35rem] rtl:not-italic">
              {a.sign}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <figure>
              <div className="media aspect-[3/2] rounded-[3px]">
                <img src={aboutMedia.production} alt={a.alts.production} loading="lazy" decoding="async" />
              </div>
              <figcaption className="mt-2.5 text-[0.8rem] text-faint">{a.captions.production}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
