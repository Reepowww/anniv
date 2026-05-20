import { clsx } from 'clsx'

// Thin full-width separator with optional label
export function SectionTransition({ label, variant = 'default' }) {
  return (
    <div className="relative w-full flex items-center justify-center py-8 px-6 md:px-24">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {label && (
        <span className="absolute bg-bg px-4 font-mono text-xs text-hint">
          {label}
        </span>
      )}
    </div>
  )
}

// Ambient scene break — just vertical breathing room + glow
export function SceneBreak({ className = '' }) {
  return (
    <div className={clsx('relative h-32 flex items-center justify-center overflow-hidden', className)}>
      <div
        className="absolute w-1 h-1 rounded-full bg-rose opacity-30 animate-ping"
        style={{ animationDuration: '3s' }}
      />
    </div>
  )
}
