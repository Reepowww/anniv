import { useEffect, useRef } from 'react'
import { useReveal } from '../../hooks'
import { clsx } from 'clsx'

// ============================================================
//  RevealWrapper — wraps children with scroll-in animation
//  Props: delay (0|1|2|3|4), className
// ============================================================
export function RevealWrapper({ children, delay = 0, className = '' }) {
  const { ref, isVisible } = useReveal()
  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        delay === 1 && 'delay-100',
        delay === 2 && 'delay-200',
        delay === 3 && 'delay-300',
        delay === 4 && 'delay-400',
        className
      )}
    >
      {children}
    </div>
  )
}

// ============================================================
//  SectionLabel — small uppercase label above headings
//  e.g. "01 — origin"
// ============================================================
export function SectionLabel({ children }) {
  return (
    <p className="font-mono text-xs tracking-[0.25em] uppercase text-hint mb-4">
      {children}
    </p>
  )
}

// ============================================================
//  AmbientGlow — decorative radial light blob
//  Place absolutely inside a relative container
// ============================================================
export function AmbientGlow({ className = '', color = 'rose', size = 600 }) {
  const colors = {
    rose:  'rgba(232, 165, 152, 0.10)',
    sage:  'rgba(138, 170, 140, 0.10)',
    gold:  'rgba(201, 169, 110, 0.10)',
    code:  'rgba(123, 158, 168, 0.08)',
  }
  return (
    <div
      className={clsx('absolute pointer-events-none rounded-full', className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color] || colors.rose} 0%, transparent 70%)`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

// ============================================================
//  Divider — thin horizontal separator
// ============================================================
export function Divider({ className = '' }) {
  return (
    <div className={clsx('w-full h-px bg-gradient-to-r from-transparent via-border to-transparent', className)} />
  )
}

// ============================================================
//  TerminalLine — styled monospace line for DS sections
//  Props: prompt ('$'|'>'|'#'), children, color
// ============================================================
export function TerminalLine({ prompt = '$', children, color = 'code', className = '' }) {
  const colors = {
    code:  'text-code',
    rose:  'text-rose',
    sage:  'text-sage',
    gold:  'text-gold',
    muted: 'text-muted',
    soft:  'text-soft',
    cream: 'text-cream',
  }
  return (
    <div className={clsx('font-mono text-sm flex gap-3', className)}>
      <span className="text-hint select-none">{prompt}</span>
      <span className={colors[color] || 'text-code'}>{children}</span>
    </div>
  )
}

// ============================================================
//  BlinkingCursor — terminal cursor
// ============================================================
export function BlinkingCursor({ className = '' }) {
  return (
    <span
      className={clsx('inline-block w-2 h-4 bg-rose align-middle', className)}
      style={{ animation: 'blink 1s step-end infinite' }}
    />
  )
}

// ============================================================
//  Tag — small pill label
//  Props: children, variant ('rose'|'sage'|'code'|'gold')
// ============================================================
export function Tag({ children, variant = 'muted' }) {
  const variants = {
    rose:  'bg-rose/10 text-rose border-rose/20',
    sage:  'bg-sage/10 text-sage border-sage/20',
    code:  'bg-code/10 text-code border-code/20',
    gold:  'bg-gold/10 text-gold border-gold/20',
    muted: 'bg-muted/20 text-soft border-border',
  }
  return (
    <span className={clsx(
      'inline-block text-xs font-mono px-2 py-0.5 rounded border',
      variants[variant] || variants.muted
    )}>
      {children}
    </span>
  )
}

// ============================================================
//  ProgressBar — thin progress bar at top of page
// ============================================================
export function ProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-px bg-border">
      <div
        className="h-full bg-gradient-to-r from-rose via-gold to-sage transition-all duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}

// ============================================================
//  SectionNav — subtle fixed nav dots on the right side
// ============================================================
export function SectionNav({ sections, active }) {
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map((section, i) => (
        <button
          key={section.id}
          onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
          title={section.label}
          className="group relative flex items-center justify-end gap-2"
        >
          <span className="font-mono text-xs text-hint opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {section.label}
          </span>
          <div className={clsx(
            'w-1.5 h-1.5 rounded-full transition-all duration-300',
            active === i
              ? 'bg-rose scale-125'
              : 'bg-muted hover:bg-soft'
          )} />
        </button>
      ))}
    </nav>
  )
}
