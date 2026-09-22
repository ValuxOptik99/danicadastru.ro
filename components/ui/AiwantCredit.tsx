'use client'

import { useEffect, useId, useRef } from 'react'
import styles from './AiwantCredit.module.css'

// Amplitudinea înclinării, în grade. Peste ~12 devine caricatural.
const MAX_TILT_X = 7
const MAX_TILT_Y = 11

interface AiwantCreditProps {
  /** Fundalul pe care stă butonul. 'dark' = footer-ul site-ului (implicit). */
  tone?: 'dark' | 'light'
  className?: string
}

export default function AiwantCredit({ tone = 'dark', className = '' }: AiwantCreditProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const uid = useId()
  const markGradient = `${uid}-mark`
  const capGradient = `${uid}-cap`

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Înclinarea are sens doar cu mouse, și doar dacă utilizatorul nu a cerut
    // mai puțină mișcare. Pe touch nu există hover, deci nu există nici tilt.
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const calmMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || calmMotion) return

    let frame = 0

    const handleMove = (event: PointerEvent) => {
      // Un singur calcul pe cadru — pointermove se declanșează mult mai des.
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        el.style.setProperty('--tilt-x', `${(-y * MAX_TILT_X).toFixed(2)}deg`)
        el.style.setProperty('--tilt-y', `${(x * MAX_TILT_Y).toFixed(2)}deg`)
        el.style.setProperty('--glare-x', `${((x + 0.5) * 100).toFixed(1)}%`)
      })
    }

    const handleLeave = () => {
      if (frame) {
        cancelAnimationFrame(frame)
        frame = 0
      }
      // Ștergerea proprietăților lasă valorile din CSS să revină, cu tranziție.
      el.style.removeProperty('--tilt-x')
      el.style.removeProperty('--tilt-y')
      el.style.removeProperty('--glare-x')
    }

    el.addEventListener('pointermove', handleMove, { passive: true })
    el.addEventListener('pointerleave', handleLeave)

    return () => {
      el.removeEventListener('pointermove', handleMove)
      el.removeEventListener('pointerleave', handleLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const classes = [styles.root, tone === 'light' && styles.light, className]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      ref={ref}
      href="https://aiwant.ro"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Site realizat cu sprijinul AiWant — se deschide într-o filă nouă"
      className={classes}
    >
      <span className={styles.glare} aria-hidden="true" />
      <span className={styles.rimSweep} aria-hidden="true" />
      <span className={styles.body}>
        <svg className={styles.mark} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id={markGradient} x1="0" y1="0" x2="0.4" y2="1">
              <stop offset="0%" stopColor="#F9E9B4" />
              <stop offset="45%" stopColor="#E8C069" />
              <stop offset="100%" stopColor="#C8912C" />
            </linearGradient>
          </defs>
          <path
            d="M18 11 L82 11 L50 63 Z"
            stroke={`url(#${markGradient})`}
            strokeWidth="9"
            strokeLinejoin="miter"
          />
          <path
            d="M10 41 L50 95 L90 41"
            stroke={`url(#${markGradient})`}
            strokeWidth="9"
            strokeLinejoin="miter"
          />
        </svg>
        <span className={styles.sep} aria-hidden="true" />
        <span className={styles.label}>Site realizat cu sprijinul</span>
      </span>
      <svg
        className={styles.capEdge}
        viewBox="0 0 26 46"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={capGradient} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F9E9B4" />
            <stop offset="40%" stopColor="#EDC873" />
            <stop offset="100%" stopColor="#D8A63F" />
          </linearGradient>
        </defs>
        <path d="M26 0 C26 17, 0 27, 0 46 L26 46 Z" fill={`url(#${capGradient})`} />
      </svg>
      <span className={styles.cap}>AiWant</span>
    </a>
  )
}
