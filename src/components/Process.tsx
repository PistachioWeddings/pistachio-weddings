import { useLang } from '../i18n'
import { SECTION } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Process() {
  const { t } = useLang()
  const p = t.process
  return (
    <section id={SECTION.process} aria-labelledby="process-title" className="bg-bg pb-12 pt-24 md:pb-16 md:pt-36">
      <div className="wrap">
        <SectionHeading id="process-title" eyebrow={p.eyebrow} title={p.title} />
        <ol className="mt-14 grid gap-0 md:mt-20 md:grid-cols-5 md:gap-6">
          {p.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal
                delay={i * 0.07}
                className="relative border-s border-hairline-2 pb-10 ps-6 md:border-s-0 md:border-t md:pb-0 md:ps-0 md:pt-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute -start-[4.5px] top-1 h-2 w-2 rounded-full bg-forest md:-top-[4.5px] md:start-0"
                />
                <p className="font-serif text-[2.6rem] font-medium italic leading-none text-sage" dir="ltr">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-[1.08rem] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
