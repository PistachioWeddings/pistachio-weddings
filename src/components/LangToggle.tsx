import { useLang, type Lang } from '../i18n'

const OPTIONS: { id: Lang; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'he', label: 'עברית' },
]

/** Always-visible EN | עברית switch. Each option is a 44px touch target. */
export function LangToggle({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const { lang, setLang, t } = useLang()
  const base = tone === 'light' ? 'text-white' : 'text-ink'

  return (
    <div role="group" aria-label={t.nav.language} className={`flex items-center ${base}`} dir="ltr">
      {OPTIONS.map((o, i) => (
        <span key={o.id} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="h-3.5 w-px bg-current opacity-30" />
          )}
          <button
            type="button"
            lang={o.id}
            aria-pressed={lang === o.id}
            onClick={() => setLang(o.id)}
            className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-2 text-[0.8rem] transition-opacity duration-300 ease-brand ${
              o.id === 'en' ? 'tracking-[0.14em]' : ''
            } ${lang === o.id ? 'font-semibold opacity-100' : 'font-normal opacity-60 hover:opacity-100'}`}
          >
            <span className={lang === o.id ? 'border-b border-current pb-0.5' : 'pb-0.5'}>{o.label}</span>
          </button>
        </span>
      ))}
    </div>
  )
}
