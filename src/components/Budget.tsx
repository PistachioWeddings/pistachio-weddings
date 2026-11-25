import { Check } from 'lucide-react'
import { useLang } from '../i18n'
import { SECTION } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Budget() {
  const { t } = useLang()
  const b = t.budget

  return (
    <section id={SECTION.budget} aria-labelledby="budget-title" className="bg-bg py-24 md:py-36">
      <div className="wrap grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <SectionHeading id="budget-title" eyebrow={b.eyebrow} title={b.title} intro={b.intro} />
          <Reveal delay={0.1} className="mt-10 space-y-5">
            {b.notes.map((note) => (
              <p key={note} className="border-s-2 border-sage ps-4 text-[0.98rem] leading-relaxed text-muted">
                {note}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <div className="rounded-2xl border border-hairline bg-white p-7 shadow-card md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="eyebrow">{b.exampleLabel}</p>
              <p className="text-[0.9rem] text-muted">{b.example}</p>
            </div>

            <p
              dir="ltr"
              className="tabular mt-8 font-serif text-[clamp(2.3rem,3.8vw,3.6rem)] font-medium leading-none text-ink md:whitespace-nowrap rtl:text-right"
            >
              {b.range}
            </p>
            <p className="mt-3 text-[1rem] text-forest">{b.perGuest}</p>

            <div className="my-8 h-px bg-hairline" />

            <p className="text-[0.82rem] font-medium uppercase tracking-[0.14em] text-faint rtl:tracking-normal">
              {b.includesTitle}
            </p>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {b.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-ink">
                  <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage-soft text-forest">
                    <Check className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a href={`#${SECTION.inquiry}`} className="btn-primary mt-10 w-full sm:w-auto">
              {b.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
