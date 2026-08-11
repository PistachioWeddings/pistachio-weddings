import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Policy } from '../data/site'

type Props = {
  policy: Policy | null
  onClose: () => void
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function LegalModal({ policy, onClose }: Props) {
  const reduceMotion = useReducedMotion()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const lastActive = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!policy) return

    lastActive.current = document.activeElement as HTMLElement | null
    const { body } = document
    const prevOverflow = body.style.overflow
    body.style.overflow = 'hidden'

    const focusTimer = window.setTimeout(() => closeBtnRef.current?.focus(), 20)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return

      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement as HTMLElement

      if (event.shiftKey && (active === first || !dialogRef.current.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
      body.style.overflow = prevOverflow
      lastActive.current?.focus?.()
    }
  }, [policy, onClose])

  return createPortal(
    <AnimatePresence>
      {policy && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <button
            type="button"
            aria-label="Close dialog"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-charcoal/50 backdrop-blur-sm"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${policy.id}-title`}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 26, scale: reduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[88dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-cream shadow-lift sm:rounded-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-charcoal/10 px-6 py-5 sm:px-8">
              <div>
                <h2
                  id={`${policy.id}-title`}
                  className="font-serif text-2xl font-medium text-charcoal"
                >
                  {policy.title}
                </h2>
                <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-charcoal-muted">
                  {policy.updated}
                </p>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-charcoal-soft transition-colors hover:bg-sage-50 hover:text-charcoal"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              {policy.sections.map((section, i) => (
                <div key={i} className={i > 0 ? 'mt-6' : ''}>
                  {section.heading && (
                    <h3 className="font-serif text-lg font-medium text-charcoal">
                      {section.heading}
                    </h3>
                  )}
                  {section.body?.map((paragraph, j) => (
                    <p
                      key={j}
                      className={`text-[0.95rem] leading-[1.8] text-charcoal-soft ${
                        section.heading || j > 0 ? 'mt-2' : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-3 space-y-2">
                      {section.list.map((item, k) => (
                        <li
                          key={k}
                          className="flex gap-3 text-[0.95rem] leading-[1.7] text-charcoal-soft"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
