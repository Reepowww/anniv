import { useState } from 'react'
import { TIMELINE } from '../../data/siteData'
import { RevealWrapper, SectionLabel, AmbientGlow, Tag } from '../ui'
import { clsx } from 'clsx'

// Individual timeline card
function TimelineCard({ event, index }) {
  const [expanded, setExpanded] = useState(false)
  const isLeft = index % 2 === 0

  return (
    <RevealWrapper delay={(index % 3)}>
      <div className={clsx(
        'flex items-start gap-8 md:gap-16',
        isLeft ? 'flex-row' : 'flex-row-reverse'
      )}>

        {/* Content card — 45% width on desktop */}
        <div
          className={clsx(
            'soft-card flex-1 max-w-md cursor-pointer',
            expanded && 'border-rose/40'
          )}
          onClick={() => setExpanded(e => !e)}
        >
          {/* Photo placeholder */}
          <div className="w-full aspect-video rounded-lg mb-4 overflow-hidden bg-surface border border-border flex items-center justify-center">
            {event.image ? (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            ) : (
              // Placeholder until you add real photos
              <div className="flex flex-col items-center gap-2 text-hint">
                <span className="text-3xl">{event.emoji}</span>
                <span className="font-mono text-xs">[ add photo ]</span>
              </div>
            )}
          </div>

          {/* Card content */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-hint">{event.date}</span>
              <div className="flex gap-1">
                {event.tags.map(tag => (
                  <Tag key={tag} variant="muted">{tag}</Tag>
                ))}
              </div>
            </div>

            <h3 className="font-display text-2xl text-cream font-light">
              {event.title}
            </h3>
            <p className="font-body text-sm text-hint">{event.caption}</p>

            {/* Expandable story */}
            <div className={clsx(
              'overflow-hidden transition-all duration-500',
              expanded ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
            )}>
              <p className="font-body text-soft text-sm leading-relaxed border-t border-border pt-4">
                {event.story}
              </p>
            </div>

            <p className="font-mono text-xs text-hint mt-2">
              {expanded ? '↑ collapse' : '↓ read more'}
            </p>
          </div>
        </div>

        {/* Center timeline line + dot */}
        <div className="hidden md:flex flex-col items-center shrink-0">
          <div className="w-3 h-3 rounded-full bg-rose border-2 border-rose/50 shadow-[0_0_12px_rgba(232,165,152,0.4)]" />
          <div className="w-px flex-1 bg-gradient-to-b from-rose/40 to-border min-h-[100px]" />
        </div>

        {/* Spacer (opposite side) */}
        <div className="hidden md:block flex-1 max-w-md" />
      </div>
    </RevealWrapper>
  )
}

export default function TimelineSection() {
  return (
    <section id="timeline" className="section-wrapper relative grain-overlay">
      <AmbientGlow className="left-0 top-1/2" size={500} color="gold" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section header */}
        <RevealWrapper>
          <SectionLabel>{TIMELINE.sectionLabel}</SectionLabel>
          <h2 className="section-heading mb-4">{TIMELINE.heading}</h2>
          <p className="font-body text-soft mb-20 max-w-lg">
            {TIMELINE.events.length} moments. Click any card to read the full story.
          </p>
        </RevealWrapper>

        {/* Timeline entries */}
        <div className="space-y-8">
          {TIMELINE.events.map((event, i) => (
            <TimelineCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {/* End of timeline marker */}
        <RevealWrapper>
          <div className="flex flex-col items-center gap-3 mt-16">
            <div className="w-4 h-4 rounded-full bg-rose animate-glow-pulse" />
            <p className="font-mono text-xs text-hint">present day ♡</p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
