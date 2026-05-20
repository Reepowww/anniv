import { useState, useEffect } from 'react'
import { LETTER, NAMES } from '../../data/siteData'
import { AmbientGlow, SectionLabel, TerminalLine, BlinkingCursor } from '../ui'
import { clsx } from 'clsx'

// The actual letter content
function LetterContent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Stagger the reveal for a cinematic feel
    const t = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(t)
  }, [])

  const paragraphs = LETTER.body.split('\n\n').filter(p => p.trim())

  return (
    <div className={clsx(
      'max-w-2xl mx-auto transition-all duration-1000',
      visible ? 'opacity-100' : 'opacity-0'
    )}>

      {/* Letter header */}
      <div className="mb-12">
        <p className="font-display text-4xl md:text-5xl text-cream italic mb-2">
          {LETTER.openingLine}
        </p>
        <div className="w-16 h-px bg-rose mt-4" />
      </div>

      {/* Letter paragraphs — staggered reveal */}
      <div className="space-y-8">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="font-display text-xl md:text-2xl text-soft font-light leading-relaxed"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`,
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Signature */}
      <div
        className="mt-16 pt-8 border-t border-border/50"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 1s ease 1.5s',
        }}
      >
        <p className="font-display text-2xl text-cream italic whitespace-pre-line">
          {LETTER.signature}
        </p>
      </div>

      {/* Terminal close — the very last thing on the page */}
      <div
        className="mt-16"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 1s ease 2s',
        }}
      >
        <div className="terminal-block inline-block">
          <div className="flex items-center gap-2">
            <TerminalLine prompt="$" color="hint">
              {LETTER.terminalClose}
            </TerminalLine>
            <BlinkingCursor />
          </div>
        </div>
      </div>

      {/* Hearts ambient */}
      <div className="mt-24 flex justify-center">
        <p className="font-display text-6xl text-rose/20 select-none">♡</p>
      </div>
    </div>
  )
}

// Locked state — shown until user has scrolled enough
function LockedState({ progress, threshold }) {
  const pct = Math.round((progress / threshold) * 100)

  return (
    <div className="max-w-md mx-auto text-center space-y-8">
      {/* Lock icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full border border-rose/30 flex items-center justify-center animate-glow-pulse">
          <span className="text-2xl">♡</span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-display text-3xl text-cream italic">
          Almost there.
        </h3>
        <p className="font-body text-soft text-sm">
          Keep scrolling through our story. The letter unlocks when you've seen it all.
        </p>
      </div>

      {/* Progress to unlock */}
      <div className="space-y-2">
        <div className="w-full h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose to-gold transition-all duration-300"
            style={{ width: `${Math.min(pct, 100)}%` }}
          />
        </div>
        <p className="font-mono text-xs text-hint">{Math.min(pct, 100)}% of the journey seen</p>
      </div>
    </div>
  )
}

export default function LetterSection({ scrollProgress }) {
  // Unlock threshold: 0.88 = user must scroll through 88% of the page
  const UNLOCK_THRESHOLD = 0.88
  const [unlocked, setUnlocked] = useState(false)
  const [justUnlocked, setJustUnlocked] = useState(false)

  useEffect(() => {
    if (!unlocked && scrollProgress >= UNLOCK_THRESHOLD) {
      setUnlocked(true)
      setJustUnlocked(true)
      const t = setTimeout(() => setJustUnlocked(false), 2000)
      return () => clearTimeout(t)
    }
  }, [scrollProgress, unlocked])

  return (
    <section id="letter" className="section-wrapper relative grain-overlay">
      {/* Stronger glow for the final section */}
      <AmbientGlow className="left-1/2 top-1/2" size={900} color="rose" />
      <AmbientGlow className="left-1/4 bottom-0" size={400} color="gold" />

      <div className="relative z-10">

        {/* Section label (always visible) */}
        <div className="text-center mb-16">
          <SectionLabel>{LETTER.sectionLabel}</SectionLabel>
        </div>

        {/* Unlock flash overlay */}
        {justUnlocked && (
          <div
            className="fixed inset-0 z-40 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(232,165,152,0.15) 0%, transparent 70%)',
              animation: 'fadeIn 0.5s ease forwards',
            }}
          />
        )}

        {/* Conditional render */}
        {unlocked ? (
          <LetterContent />
        ) : (
          <LockedState progress={scrollProgress} threshold={UNLOCK_THRESHOLD} />
        )}
      </div>
    </section>
  )
}
