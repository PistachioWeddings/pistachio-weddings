import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { useLang } from '../i18n'
import { SECTION } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(0)
  const base = useId()

  return (
    <section id={SECTION.faq} aria-labelledby="faq-title" className="bg-bg py-24 md:py-32">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-[calc(var(--header-h)+2rem)]">
            <SectionHeading id="faq-title" eyebrow={t.faq.eyebrow} title={t.faq.title} />
          </div>
        </div>

        <Reveal className="md:col-span-7 md:col-start-6">
          <ul className="border-t border-hairline-2">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i
              const btn = `${base}-q${i}`
              const panel = `${base}-a${i}`
              return (
                <li key={item.q} className="border-b border-hairline-2">
                  <h3>
                    <button
                      id={btn}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panel}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex min-h-[64px] w-full items-center justify-between gap-6 py-5 text-start text-[1.05rem] font-medium text-ink transition-colors hover:text-forest"
                    >
                      {item.q}
                      <Plus
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className={`h-5 w-5 shrink-0 text-forest transition-transform duration-500 ease-brand ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panel}
                    role="region"
                    aria-labelledby={btn}
                    className={`grid transition-[grid-template-rows] duration-500 ease-brand ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 pe-10 text-[0.98rem] leading-relaxed text-muted">{item.a}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
