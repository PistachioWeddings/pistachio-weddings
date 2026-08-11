import { Sparkles, Handshake, Compass } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'
import { services } from '../data/site'

const ICONS: Record<string, LucideIcon> = {
  'Bespoke Planning': Sparkles,
  'Vendor Management': Handshake,
  'On-Site Coordination': Compass,
}

export function Services() {
  return (
    <section id="services" className="bg-cream-warm py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">What We Offer</p>
          <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.75rem]">
            Thoughtfully produced, from first idea to final toast
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
            Three pillars of care that turn a destination dream into an effortless celebration.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.title] ?? Sparkles
            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <article className="group h-full rounded-[3px] border border-charcoal/5 bg-cream p-8 shadow-card transition-transform duration-300 ease-luxe hover:-translate-y-1">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-700 transition-colors duration-300 group-hover:bg-sage-600 group-hover:text-cream">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-medium">{service.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal-soft">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
