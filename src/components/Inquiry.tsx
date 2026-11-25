import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../i18n'
import { SECTION, business, whatsappUrl } from '../data/site'
import { BrandIcon } from './icons/BrandIcons'
import { EmailLink } from './EmailLink'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** Upcoming wedding years: this year only while there is still most of a season left. */
function yearOptions(flexible: string) {
  const now = new Date()
  const y = now.getFullYear()
  const years = now.getMonth() < 5 ? [y, y + 1, y + 2] : [y + 1, y + 2]
  return [...years.map(String), flexible]
}

export function Inquiry() {
  const { t } = useLang()
  const q = t.inquiry
  const [guests, setGuests] = useState<number | null>(null)
  const [when, setWhen] = useState('')
  const [year, setYear] = useState('')
  const [dest, setDest] = useState<number | null>(null)
  const [notes, setNotes] = useState('')
  const years = useMemo(() => yearOptions(q.flexible), [q.flexible])

  const buildMessage = () => {
    const m = q.msg
    const whenText = [when !== '' ? q.whenOptions[Number(when)] : '', year !== '' ? years[Number(year)] : '']
      .filter(Boolean)
      .join(' ')
    const lines = [
      m.hi,
      '',
      `• ${m.guests}: ${guests !== null ? q.guestOptions[guests] : m.notSet}`,
      `• ${m.when}: ${whenText || m.notSet}`,
      `• ${m.destination}: ${dest !== null ? q.destOptions[dest] : m.notSet}`,
    ]
    if (notes.trim()) lines.push(`• ${m.notes}: ${notes.trim()}`)
    lines.push('', m.sig)
    return lines.join('\n')
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const url = whatsappUrl(buildMessage())
    const win = window.open(url, '_blank')
    if (win) win.opener = null
    else window.location.href = url
  }

  return (
    <section id={SECTION.inquiry} aria-labelledby="inquiry-title" className="bg-sage-ghost py-24 md:py-36">
      <div className="wrap grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <SectionHeading id="inquiry-title" eyebrow={q.eyebrow} title={q.title} intro={q.intro} />
        </div>

        <Reveal delay={0.1} className="md:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-hairline bg-white p-6 shadow-card sm:p-8 md:p-10"
          >
            <fieldset>
              <legend className="text-[0.92rem] font-medium text-ink">{q.guests}</legend>
              <ChipGroup name="guests" options={q.guestOptions} value={guests} onChange={setGuests} />
            </fieldset>

            <div className="mt-8 grid gap-5 sm:grid-cols-[1fr_auto]">
              <label className="block">
                <span className="text-[0.92rem] font-medium text-ink">{q.when}</span>
                <SelectWrap>
                <select value={when} onChange={(e) => setWhen(e.target.value)} className="field appearance-none pe-10">
                  <option value="">{q.choose}</option>
                  {q.whenOptions.map((o, i) => (
                    <option key={o} value={i}>
                      {o}
                    </option>
                  ))}
                </select>
                </SelectWrap>
              </label>
              <label className="block sm:w-40">
                <span className="text-[0.92rem] font-medium text-ink">{q.year}</span>
                <SelectWrap>
                <select value={year} onChange={(e) => setYear(e.target.value)} className="field appearance-none pe-10">
                  <option value="">{q.choose}</option>
                  {years.map((o, i) => (
                    <option key={o} value={i}>
                      {o}
                    </option>
                  ))}
                </select>
                </SelectWrap>
              </label>
            </div>

            <fieldset className="mt-8">
              <legend className="text-[0.92rem] font-medium text-ink">{q.destination}</legend>
              <ChipGroup name="destination" options={q.destOptions} value={dest} onChange={setDest} />
            </fieldset>

            <label className="mt-8 block">
              <span className="text-[0.92rem] font-medium text-ink">{q.notes}</span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                maxLength={600}
                placeholder={q.notesPlaceholder}
                className="field mt-3 resize-none py-3 leading-relaxed"
              />
            </label>

            <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
              <BrandIcon name="whatsapp" className="h-5 w-5" />
              {q.submit}
            </button>

            <p className="mt-5 text-[0.82rem] leading-relaxed text-faint">
              {q.privacy}{' '}
              <span className="whitespace-nowrap">
                {q.orEmail}{' '}
                <EmailLink className="link text-muted">
                  <span dir="ltr">{business.email}</span>
                </EmailLink>
              </span>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function SelectWrap({ children }: { children: ReactNode }) {
  return (
    <div className="relative mt-3">
      {children}
      <ChevronDown
        aria-hidden="true"
        strokeWidth={1.6}
        className="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
      />
    </div>
  )
}

function ChipGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string
  options: string[]
  value: number | null
  onChange: (i: number) => void
}) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o, i) => (
        <label key={o} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={i}
            checked={value === i}
            onChange={() => onChange(i)}
            className="peer sr-only"
          />
          <span className="inline-flex min-h-[44px] items-center rounded-full border border-hairline-2 bg-inset px-4 text-[0.9rem] text-ink transition-colors duration-200 ease-brand hover:border-forest peer-checked:border-forest peer-checked:bg-forest peer-checked:text-bg peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest">
            <bdi>{o}</bdi>
          </span>
        </label>
      ))}
    </div>
  )
}
