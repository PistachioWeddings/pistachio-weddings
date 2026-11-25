import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE } from '../lib/motion'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  /** Initial vertical offset in px. Opacity + transform only, so it stays on the GPU. */
  y?: number
}

/** Fade/translate in once when scrolled into view. No scroll-jacking, safe on mobile. */
export function Reveal({ children, className, delay = 0, y = 22 }: Props) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
