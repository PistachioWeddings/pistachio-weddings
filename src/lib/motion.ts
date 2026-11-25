import { useSyncExternalStore } from 'react'

/** Brand easing, cubic-bezier(0.22, 0.61, 0.36, 1). Mirrors `ease-brand` in Tailwind. */
export const EASE = [0.22, 0.61, 0.36, 1] as const

export const DESKTOP_QUERY = '(min-width: 768px)'

/** Live media-query match. Client-only SPA, so the first render already has the right value. */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (notify) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', notify)
      return () => mql.removeEventListener('change', notify)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

/** Smooth-scroll to an in-page section (respects reduced motion via CSS `scroll-behavior`). */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ block: 'start' })
}
