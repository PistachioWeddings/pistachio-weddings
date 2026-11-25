import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: string
  intro?: ReactNode
  align?: 'start' | 'center'
  className?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, intro, align = 'start', className = '', id }: Props) {
  const center = align === 'center'
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      <p className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2 id={id} className="mt-5 font-display text-d-1 font-medium text-ink">
        {title}
      </h2>
      {intro && <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  )
}
