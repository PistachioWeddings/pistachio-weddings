import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from './Reveal'
import { faqs } from '../data/site'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-cream-warm py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Good to Know</p>
          <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.75rem]">
            Questions, answered
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
            From kosher ceremonies to guest counts — the details couples ask us most.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <dl>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              const triggerId = `faq-trigger-${i}`
              const panelId = `faq-panel-${i}`
              return (
                <div key={i} className="border-t border-charcoal/10 last:border-b">
                  <dt>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left [touch-action:manipulation]"
                    >
                      <span className="font-serif text-lg leading-snug text-charcoal transition-colors duration-200 group-hover:text-sage-800 sm:text-xl">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sage-300 text-sage-700 transition-colors duration-200 group-hover:border-sage-600 group-hover:bg-sage-600 group-hover:text-cream"
                      >
                        <Plus
                          className={`h-4 w-4 transition-transform duration-300 ease-luxe ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                          strokeWidth={1.75}
                        />
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={panelId}
                    className={`grid transition-all duration-300 ease-luxe ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        aria-hidden={!isOpen}
                        className="max-w-prose2 pb-7 pr-6 text-[0.95rem] leading-[1.8] text-charcoal-soft sm:pr-12"
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </dd>
                </div>
              )
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
