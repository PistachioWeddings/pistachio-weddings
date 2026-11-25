import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BedDouble, Hourglass, UserCheck, Wallet } from 'lucide-react'
import { useLang } from '../i18n'
import { DEMO_WEDDING_ISO, type SiteContent } from '../data/content'
import { EASE } from '../lib/motion'

type Demo = SiteContent['demo']
type Tab = 'countdown' | 'rooms' | 'budget' | 'rsvps'

const TABS: { id: Tab; Icon: typeof Hourglass }[] = [
  { id: 'countdown', Icon: Hourglass },
  { id: 'rooms', Icon: BedDouble },
  { id: 'budget', Icon: Wallet },
  { id: 'rsvps', Icon: UserCheck },
]

/**
 * Live, interactive iPhone-style mockup of the Couple Portal, built in React
 * with the pistachio-portal v5 palette. Fully bilingual (follows site language).
 */
export function PhoneMockup() {
  const { t, isRtl } = useLang()
  const d = t.demo
  const [tab, setTab] = useState<Tab>('countdown')

  return (
    <div className="relative mx-auto w-[292px] sm:w-[318px]">
      {/* Side buttons */}
      <span aria-hidden="true" className="absolute -left-[3px] top-[112px] h-8 w-[3px] rounded-l bg-bezel" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[160px] h-14 w-[3px] rounded-l bg-bezel" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[226px] h-14 w-[3px] rounded-l bg-bezel" />
      <span aria-hidden="true" className="absolute -right-[3px] top-[180px] h-20 w-[3px] rounded-r bg-bezel" />

      <div className="relative rounded-[3.1rem] bg-bezel p-[10px] shadow-phone ring-1 ring-white/10">
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className="relative flex aspect-[9/19.3] flex-col overflow-hidden rounded-[2.45rem] bg-bg font-sans text-ink"
        >
          {/* Status bar + Dynamic Island */}
          <div className="relative flex h-11 shrink-0 items-center justify-between px-7 pt-1 text-[0.72rem] font-semibold" dir="ltr">
            <span className="tabular">9:41</span>
            <span aria-hidden="true" className="absolute left-1/2 top-[9px] h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
            <StatusIcons />
          </div>

          {/* App header */}
          <div className="shrink-0 border-b border-hairline px-5 pb-3 pt-2">
            <p className="font-serif text-[1.05rem] font-semibold leading-none text-forest" dir="ltr">
              {d.app}
            </p>
            <p className="mt-1.5 text-[0.95rem] font-semibold leading-tight">{d.couple}</p>
            <p className="text-[0.7rem] text-muted">
              {d.place} · {d.dates}
            </p>
          </div>

          {/* Screen */}
          <div className="no-scrollbar relative flex-1 overflow-y-auto overscroll-contain px-4 pb-4 pt-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: EASE }}
                role="tabpanel"
                id={`demo-panel-${tab}`}
                aria-labelledby={`demo-tab-${tab}`}
              >
                {tab === 'countdown' && <CountdownTab d={d} />}
                {tab === 'rooms' && <RoomsTab d={d} />}
                {tab === 'budget' && <BudgetTab d={d} />}
                {tab === 'rsvps' && <RsvpTab d={d} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tab bar */}
          <div role="tablist" aria-label={t.portal.eyebrow} className="grid shrink-0 grid-cols-4 border-t border-hairline bg-white/90 px-2 pb-5 pt-1 backdrop-blur">
            {TABS.map(({ id, Icon }) => {
              const active = tab === id
              return (
                <button
                  key={id}
                  id={`demo-tab-${id}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`demo-panel-${id}`}
                  onClick={() => setTab(id)}
                  className={`relative flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-xl text-[0.64rem] font-medium transition-colors duration-300 ease-brand ${
                    active ? 'text-forest' : 'text-faint hover:text-muted'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="demo-tab-pill"
                      transition={{ duration: 0.35, ease: EASE }}
                      className="absolute inset-x-1.5 inset-y-1 -z-0 rounded-xl bg-sage-soft"
                    />
                  )}
                  <Icon className="relative h-[18px] w-[18px]" strokeWidth={active ? 2 : 1.6} aria-hidden="true" />
                  <span className="relative">{d.tabs[id]}</span>
                </button>
              )
            })}
          </div>

          {/* Home indicator */}
          <span aria-hidden="true" className="absolute bottom-[7px] left-1/2 h-[4px] w-[108px] -translate-x-1/2 rounded-full bg-ink/80" />
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------------- */

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-hairline bg-white p-3.5 shadow-card ${className}`}>{children}</div>
}

function ScreenTitle({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-faint rtl:tracking-normal">{children}</p>
}

function useCountdown(iso: string) {
  const target = (() => {
    const tgt = new Date(iso)
    const now = new Date()
    while (tgt.getTime() < now.getTime()) tgt.setFullYear(tgt.getFullYear() + 1)
    return tgt.getTime()
  })()
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])
  const diff = Math.max(0, target - now)
  const s = Math.floor(diff / 1000)
  return [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60]
}

function CountdownTab({ d }: { d: Demo }) {
  const c = d.countdown
  const parts = useCountdown(DEMO_WEDDING_ISO)
  return (
    <div className="space-y-3">
      <div className="rounded-2xl bg-forest p-4 text-bg shadow-up">
        <p className="text-[0.7rem] font-medium text-bg/75">{c.title}</p>
        <div className="mt-2 grid grid-cols-4 gap-1.5" dir="ltr">
          {parts.map((v, i) => (
            <div key={i} className="rounded-xl bg-white/10 py-2 text-center">
              <p className="tabular font-serif text-[1.6rem] font-semibold leading-none">
                {i === 0 ? v : String(v).padStart(2, '0')}
              </p>
              <p className="mt-1 text-[0.58rem] uppercase tracking-wider text-bg/70">{c.units[i]}</p>
            </div>
          ))}
        </div>
      </div>

      <Card>
        <ScreenTitle>{c.scheduleTitle}</ScreenTitle>
        <ul className="space-y-2.5">
          {c.schedule.map((s) => (
            <li key={s.what} className="flex items-center gap-3 text-[0.78rem]">
              <span className="w-11 shrink-0 text-[0.68rem] font-medium text-faint">{s.day}</span>
              <span className="tabular w-10 shrink-0 font-semibold text-forest" dir="ltr">
                {s.time}
              </span>
              <span className="leading-tight">{s.what}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <ScreenTitle>{c.nextTitle}</ScreenTitle>
        <ul className="space-y-2">
          {c.next.map((n) => (
            <li key={n.what} className="flex items-center justify-between gap-2 text-[0.78rem]">
              <span className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 shrink-0 rounded-[5px] border border-hairline-2 bg-inset" />
                {n.what}
              </span>
              <span className="shrink-0 rounded-full bg-sage-soft px-2 py-0.5 text-[0.65rem] font-medium text-forest">
                {n.when}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

function Progress({ pct }: { pct: number }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-sage-soft">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="h-full rounded-full bg-forest"
      />
    </div>
  )
}

function RoomsTab({ d }: { d: Demo }) {
  const r = d.rooms
  return (
    <div className="space-y-3">
      <Card>
        <div className="flex items-baseline justify-between">
          <p className="text-[0.9rem] font-semibold">{r.title}</p>
          <p className="tabular text-[0.75rem] text-muted">
            <span className="font-semibold text-ink">{r.assigned}</span>/{r.total} {r.summary}
          </p>
        </div>
        <div className="mt-3">
          <Progress pct={Math.round((r.assigned / r.total) * 100)} />
        </div>
      </Card>
      <ul className="space-y-2">
        {r.list.map((room) => (
          <li key={room.who}>
            <Card className="flex items-center justify-between gap-2 !py-3">
              <div className="min-w-0">
                <p className="truncate text-[0.8rem] font-semibold">{room.who}</p>
                <p className="truncate text-[0.7rem] text-muted">
                  {room.type} · {r.nights}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[0.62rem] font-medium ${
                  room.payer === 'couple' ? 'bg-forest text-bg' : 'bg-sage-soft text-forest'
                }`}
              >
                {room.payer === 'couple' ? r.couple : r.guest}
              </span>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

const STATUS_STYLE: Record<string, string> = {
  paid: 'bg-forest text-bg',
  confirmed: 'bg-sage-soft text-forest',
  quote: 'bg-inset text-muted border border-hairline-2',
}

function BudgetTab({ d }: { d: Demo }) {
  const b = d.budget
  return (
    <div className="space-y-3">
      <Card>
        <p className="text-[0.9rem] font-semibold">{b.title}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-inset p-2.5">
            <p className="text-[0.62rem] text-muted">{b.plannedLabel}</p>
            <p className="tabular text-[1.02rem] font-semibold" dir="ltr">
              {b.planned}
            </p>
          </div>
          <div className="rounded-xl bg-inset p-2.5">
            <p className="text-[0.62rem] text-muted">{b.paidLabel}</p>
            <p className="tabular text-[1.02rem] font-semibold text-forest" dir="ltr">
              {b.paid}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <Progress pct={b.paidPct} />
        </div>
      </Card>
      <Card className="!p-0">
        <ul className="divide-y divide-hairline">
          {b.vendors.map((v) => (
            <li key={v.name} className="flex items-center justify-between gap-2 px-3.5 py-2.5">
              <div className="min-w-0">
                <p className="truncate text-[0.78rem] font-medium">{v.name}</p>
                <span className={`mt-0.5 inline-block rounded-full px-1.5 py-[1px] text-[0.58rem] font-medium ${STATUS_STYLE[v.status]}`}>
                  {b.status[v.status]}
                </span>
              </div>
              <p className="tabular shrink-0 text-[0.8rem] font-semibold" dir="ltr">
                {v.amount}
              </p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

const RSVP_DOT: Record<string, string> = { yes: 'bg-forest', pending: 'bg-sage', no: 'bg-hairline-2' }

function RsvpTab({ d }: { d: Demo }) {
  const r = d.rsvps
  const keys = ['yes', 'pending', 'no'] as const
  return (
    <div className="space-y-3">
      <Card>
        <div className="flex items-baseline justify-between">
          <p className="text-[0.9rem] font-semibold">{r.title}</p>
          <p className="text-[0.7rem] text-muted">{r.invited}</p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {keys.map((k) => (
            <div key={k} className="rounded-xl bg-inset p-2 text-center">
              <p className="tabular font-serif text-[1.5rem] font-semibold leading-none text-ink">{r.counts[k]}</p>
              <p className="mt-1 flex items-center justify-center gap-1 text-[0.6rem] text-muted">
                <span className={`h-1.5 w-1.5 rounded-full ${RSVP_DOT[k]}`} />
                {r.labels[k]}
              </p>
            </div>
          ))}
        </div>
      </Card>
      <Card className="!p-0">
        <ul className="divide-y divide-hairline">
          {r.list.map((g) => (
            <li key={g.name} className="flex items-center justify-between gap-2 px-3.5 py-2.5">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-soft text-[0.7rem] font-semibold text-forest">
                  {g.name.replace(/^(The |משפחת |דוד )/, '').charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[0.78rem] font-medium">
                    {g.name} <span className="tabular text-faint">· {g.party}</span>
                  </p>
                  {g.note && <p className="truncate text-[0.66rem] text-muted">{g.note}</p>}
                </div>
              </div>
              <span className="flex shrink-0 items-center gap-1 text-[0.64rem] text-muted">
                <span className={`h-1.5 w-1.5 rounded-full ${RSVP_DOT[g.status]}`} />
                {r.labels[g.status]}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

function StatusIcons() {
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
        <rect x="0" y="7" width="3" height="4" rx="1" />
        <rect x="4.5" y="5" width="3" height="6" rx="1" />
        <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
        <rect x="13.5" y="0" width="3" height="11" rx="1" />
      </svg>
      <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
        <path d="M7.5 2.2c2.1 0 4 .8 5.4 2.1l1.1-1.1A9.2 9.2 0 0 0 7.5.6 9.2 9.2 0 0 0 1 3.2l1.1 1.1a7.6 7.6 0 0 1 5.4-2.1Zm0 3.2c1.2 0 2.3.5 3.1 1.2l1.1-1.1a6 6 0 0 0-8.4 0l1.1 1.1c.8-.7 1.9-1.2 3.1-1.2Zm0 3.1c-.5 0-.9.2-1.2.5L7.5 10l1.2-1c-.3-.3-.7-.5-1.2-.5Z" />
      </svg>
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
        <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" opacity=".4" />
        <rect x="2" y="2" width="18" height="8" rx="2" fill="currentColor" />
        <rect x="23" y="4" width="1.5" height="4" rx=".75" fill="currentColor" opacity=".5" />
      </svg>
    </span>
  )
}
