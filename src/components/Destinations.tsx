import { Reveal } from './Reveal'
import { destinations } from '../data/site'

export function Destinations() {
  return (
    <section id="destinations" className="bg-cream py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Where We Create</p>
          <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.75rem]">
            Three Mediterranean shores
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
            Sun-drenched coastlines and intimate venues, each chosen for its quiet sense of occasion.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {destinations.map((place, i) => (
            <Reveal key={place.name} delay={i * 0.1}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-[3px] bg-sage-100 shadow-card">
                <img
                  src={place.image}
                  alt={`Destination weddings in ${place.name}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-7 text-cream">
                  <h3 className="font-serif text-2xl font-medium">{place.name}</h3>
                  <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-cream/85">
                    {place.blurb}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
