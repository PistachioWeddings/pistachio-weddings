import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { content, type SiteContent } from './data/content'

export type Lang = 'en' | 'he'

const STORAGE_KEY = 'pw-lang'

/**
 * English is the default for every new visit. A choice of Hebrew is kept only for
 * the current tab session (sessionStorage), so a reload keeps it but a fresh visit
 * from Instagram starts in English. `?lang=he` opens directly in Hebrew (for campaigns).
 */
function initialLang(): Lang {
  try {
    const param = new URLSearchParams(window.location.search).get('lang')
    if (param === 'he' || param === 'en') return param
    const saved = window.sessionStorage.getItem(STORAGE_KEY)
    if (saved === 'he') return 'he'
  } catch {
    /* storage blocked: fall through to English */
  }
  return 'en'
}

type LangState = { lang: Lang; setLang: (l: Lang) => void; t: SiteContent; isRtl: boolean }

const LangContext = createContext<LangState | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      window.sessionStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo(
    () => ({ lang, setLang, t: content[lang], isRtl: lang === 'he' }),
    [lang, setLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
