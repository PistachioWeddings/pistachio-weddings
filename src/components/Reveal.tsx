import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Stagger delay in seconds. */
  delay?: number
  /** Vertical travel distance in px. */
  y?: number
}

/**
 * Subtle, on-brand entrance: fades + lifts content into place as it scrolls into
 * view, once. Honours prefers-reduced-motion by rendering statically.
 */
export function Reveal({ children, className, delay = 0, y = 18 }: Props) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
