import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { business, primaryWhatsApp } from '../data/site'

// Destination-wedding hero photography (served from /public/images).
const HERO_IMAGE = '/images/hero.jpg'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Hero() {
  const reduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-sage-900"
    >
      {/* Fixed-attachment background: the image stays pinned to the viewport while
          the page scrolls up over it — a clear parallax as you scroll down. Falls
          back to a normal scrolling background on touch devices (bg-fixed is
          unreliable on iOS) and when reduced motion is preferred. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-cover bg-center ${reduceMotion ? '' : 'md:bg-fixed'}`}
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Legibility overlays. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/35 to-charcoal/70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream/90 to-transparent"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-luxe relative z-10 max-w-3xl py-32 text-cream"
      >
        <motion.p
          variants={item}
          className="text-[0.72rem] font-medium uppercase tracking-wider2 text-cream/85"
        >
          {business.name}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-serif text-[2.3rem] font-medium leading-[1.12] sm:text-6xl sm:leading-[1.08] lg:text-[4.25rem]"
        >
          Boutique Destination Weddings in Greece, Italy &amp; Cyprus.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-base font-light leading-relaxed text-cream/85 sm:text-lg"
        >
          A married couple crafting customized, intimate celebrations in the most unforgettable
          corners of the Mediterranean.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <a
            href={primaryWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Plan Your Dream Wedding
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 ease-luxe group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Quiet scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 sm:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-wider2">Discover</span>
        <span className="h-10 w-px bg-cream/40" />
      </div>
    </section>
  )
}
