import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { MapPin, Users } from 'lucide-react'
import { useLang } from '../i18n'
import { SECTION } from '../data/site'
import { SLIDE_INTERVAL, SLIDE_STAGGER, venues, type Venue } from '../data/venues'
import { BrandIcon } from './icons/BrandIcons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Venues() {
  const { t } = useLang()
  return (
    <section id={SECTION.venues} aria-labelledby="venues-title" className="bg-sage-ghost py-24 md:py-36">
      <div className="wrap">
        <SectionHeading id="venues-title" eyebrow={t.venues.eyebrow} title={t.venues.title} intro={t.venues.intro} />

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-8">
          {venues.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.1}>
              <VenueCard venue={v} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex items-center gap-4 md:mt-20">
          <span aria-hidden="true" className="h-px w-10 shrink-0 bg-sage" />
          <p className="max-w-3xl font-display text-[1.2rem] italic leading-relaxed text-muted rtl:not-italic md:text-[1.35rem]">
            {t.venues.beyond}{' '}
            <a href={`#${SECTION.inquiry}`} className="link py-3 text-forest">
              {t.venues.beyondLink}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function VenueCard({ venue, index }: { venue: Venue; index: number }) {
  const { lang, t, isRtl } = useLang()
  const media = venue.media
  const len = media.length

  const [idx, setIdx] = useState(0)
  const [loaded, setLoaded] = useState<number[]>([0, 1])
  const [paused, setPaused] = useState(false)
  const started = useRef(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(stageRef, { margin: '0px 0px -15% 0px' })
  const reduce = useReducedMotion()
  const pointer = useRef<{ x: number; y: number } | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  // Set when the browser refuses or fails to play (e.g. iOS Low Power Mode).
  const [videoBlocked, setVideoBlocked] = useState(false)
  const onVideo = media[idx].type === 'video'
  const videoDrives = onVideo && !reduce && !videoBlocked

  const go = (n: number) => {
    const next = (n + len) % len
    setIdx(next)
    setLoaded((l) => Array.from(new Set([...l, next, (next + 1) % len])))
  }

  // Every visit to the video slide starts from the first frame.
  useEffect(() => {
    const video = videoRef.current
    if (onVideo && video) video.currentTime = 0
  }, [onVideo])

  // Play once while the video slide is showing and on screen; hover doesn't stop it.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (!videoDrives || !inView) {
      video.pause()
      return
    }
    video.muted = true // React doesn't reliably reflect the `muted` attribute.
    video.play().catch((err: DOMException) => {
      if (err.name !== 'AbortError') setVideoBlocked(true)
    })
  }, [videoDrives, inView])

  // Gentle autoplay: only while visible and not hovered. The first tick is offset
  // per card so the three cards never change photos at the same moment. While the
  // video plays, its `onEnded` advances the card instead of this timer.
  useEffect(() => {
    if (!inView || paused || reduce || videoDrives) return
    const delay = started.current ? SLIDE_INTERVAL : SLIDE_INTERVAL / 2 + index * SLIDE_STAGGER
    const timer = window.setTimeout(() => {
      started.current = true
      go(idx + 1)
    }, delay)
    return () => window.clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, inView, paused, reduce, videoDrives, index])

  const onPointerDown = (e: PointerEvent) => {
    pointer.current = { x: e.clientX, y: e.clientY }
  }
  const onPointerUp = (e: PointerEvent) => {
    const start = pointer.current
    pointer.current = null
    if (!start) return
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      // Swipe toward the reading direction's "end" moves forward.
      const forward = isRtl ? dx > 0 : dx < 0
      go(idx + (forward ? 1 : -1))
    } else if (Math.abs(dx) < 8 && Math.abs(dy) < 8) {
      go(idx + 1)
    }
  }

  return (
    <article
      className="group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={venue.title[lang]}
    >
      <div
        ref={stageRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointer.current = null)}
        className="media aspect-[4/5] cursor-pointer select-none rounded-[3px] [touch-action:pan-y]"
      >
        {media.map((m, i) => {
          if (!loaded.includes(i)) return null
          const active = i === idx
          const layer = `transition-[opacity,transform] ease-brand [transition-duration:1400ms,7000ms] ${
            active ? 'z-[1] opacity-100' : 'z-0 opacity-0'
          }`
          return m.type === 'video' ? (
            <video
              key={m.src}
              ref={videoRef}
              src={m.src}
              poster={m.poster}
              aria-label={m.alt[lang]}
              aria-hidden={!active}
              autoPlay={active && inView && !reduce}
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              onEnded={() => active && go(0)}
              onError={() => setVideoBlocked(true)}
              className={layer}
            />
          ) : (
            <img
              key={m.src}
              src={m.src}
              alt={m.alt[lang]}
              aria-hidden={!active}
              loading="lazy"
              decoding="async"
              draggable={false}
              className={`${layer} ${active ? 'scale-[1.05]' : 'scale-100'}`}
            />
          )
        })}

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-black/35 to-transparent" />

        <div className="absolute inset-x-0 bottom-1 z-[3] flex justify-center px-2" dir="ltr">
          {media.map((m, i) => (
            <button
              key={i}
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => e.stopPropagation()}
              onClick={() => go(i)}
              aria-label={`${m.type === 'video' ? t.venues.video : t.venues.photo} ${i + 1} ${t.venues.of} ${len}`}
              aria-current={i === idx}
              className="flex h-11 min-w-0 max-w-9 flex-1 items-center justify-center"
            >
              <span
                className={`block h-[3px] rounded-full bg-white transition-all duration-500 ease-brand ${
                  i === idx ? 'w-5 opacity-100' : 'w-[6px] opacity-60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="pt-6">
        <h3 className="font-display text-d-3 font-medium text-ink">{venue.title[lang]}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{venue.vibe[lang]}</p>

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-hairline-2 pt-5 text-[0.88rem]">
          <div>
            <dt className="flex items-center gap-1.5 text-faint">
              <Users className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
              {t.venues.capacity}
            </dt>
            <dd className="mt-1 text-ink">{venue.capacity[lang]}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-faint">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
              {t.venues.distance}
            </dt>
            <dd className="mt-1 text-ink">{venue.fromAthens[lang]}</dd>
          </div>
        </dl>

        <a
          href={venue.highlightUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-[0.88rem] font-medium text-forest transition-colors hover:text-forest-dark"
        >
          <BrandIcon name="instagram" className="h-4 w-4" />
          <span className="link">{t.venues.highlight}</span>
        </a>
      </div>
    </article>
  )
}
