import { Reveal } from './Reveal'
import { story } from '../data/site'

// Portrait of the founders (served from /public/images).
const STORY_IMAGE = '/images/our-story.jpg'

export function OurStory() {
  return (
    <section id="story" className="bg-cream py-24 sm:py-32">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image with an offset sage frame for an editorial feel. */}
        <Reveal className="order-1">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-[2px] border border-sage-300 sm:-left-5 sm:-top-5"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sage-100 shadow-soft">
              <img
                src={STORY_IMAGE}
                alt="Raday and Noga, the married couple behind Pistachio Weddings & Events"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal className="order-2" delay={0.1}>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.75rem]">
            We are Raday &amp; Noga
          </h2>
          <p className="mt-7 max-w-prose2 text-base leading-[1.85] text-charcoal-soft sm:text-[1.0625rem]">
            {story}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
