// Tiny SPA router: History API, hover prefetch and per-route scroll memory.
// The home view stays mounted while a legal page is open (see App.tsx), so
// "back" is instant and lands exactly where the visitor left off.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p) || '/'

const scrollMemory = new Map<string, number>()
const prefetchers = new Map<string, () => Promise<unknown>>()

/** Register a chunk loader to run when a link to `path` is hovered, focused or touched. */
export function registerPrefetch(path: string, load: () => Promise<unknown>) {
  prefetchers.set(path, load)
}

function prefetch(path: string) {
  const load = prefetchers.get(normalize(path))
  if (load) void load()
}

type RouterState = { path: string; navigate: (to: string) => void }
const RouterContext = createContext<RouterState | null>(null)

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname))
  const current = useRef(path)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    const onPop = () => {
      // Scroll has not moved yet (manual restoration), so this is the page we are leaving.
      scrollMemory.set(current.current, window.scrollY)
      current.current = normalize(window.location.pathname)
      setPath(current.current)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to: string) => {
    const next = normalize(to)
    if (next === current.current) return
    scrollMemory.set(current.current, window.scrollY)
    scrollMemory.delete(next)
    window.history.pushState(null, '', next + window.location.search)
    current.current = next
    setPath(next)
  }, [])

  const value = useMemo(() => ({ path, navigate }), [path, navigate])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter must be used inside <RouterProvider>')
  return ctx
}

/** Saved scroll position for a route (0 for a fresh visit). */
export const savedScroll = (path: string) => scrollMemory.get(path) ?? 0

type RouteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }

export function RouteLink({ to, onClick, onMouseEnter, onFocus, onTouchStart, ...rest }: RouteLinkProps) {
  const { navigate } = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      onMouseEnter={(e) => {
        prefetch(to)
        onMouseEnter?.(e)
      }}
      onFocus={(e) => {
        prefetch(to)
        onFocus?.(e)
      }}
      onTouchStart={(e) => {
        prefetch(to)
        onTouchStart?.(e)
      }}
      {...rest}
    />
  )
}
