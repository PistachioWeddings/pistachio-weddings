import type { MouseEvent, ReactNode } from 'react'
import { business } from '../data/site'

// Gmail's web compose window, pre-addressed. Reliable on desktop even when the
// browser has no OS-level mail handler configured (the common cause of a
// "mailto does nothing" click).
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  business.email,
)}`

const MAILTO = `mailto:${business.email}`

function isMobile() {
  return (
    typeof navigator !== 'undefined' &&
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
  )
}

function handleClick(e: MouseEvent<HTMLAnchorElement>) {
  // Let the browser handle modifier-clicks (open in new tab, etc.) and mobile,
  // where the native mailto href opens the phone's mail app directly.
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
  if (isMobile()) return
  // Desktop: route around a missing mail handler by opening Gmail compose.
  e.preventDefault()
  window.open(GMAIL_COMPOSE, '_blank', 'noopener,noreferrer')
}

type Props = {
  className?: string
  children: ReactNode
  'aria-label'?: string
}

/**
 * Email link that opens Gmail compose on desktop and falls back to the native
 * `mailto:` (the `href`) on mobile / no-JS / right-click. Styling and contents
 * are supplied by the caller so it can match any existing icon or button.
 */
export function EmailLink({ className, children, ...rest }: Props) {
  return (
    <a href={MAILTO} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  )
}
