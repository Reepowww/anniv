import { useState } from 'react'
import { GALLERY } from '../../data/siteData'
import { RevealWrapper, SectionLabel, AmbientGlow, Tag } from '../ui'
import { clsx } from 'clsx'

// Individual memory card with cinematic hover
function MemoryCard({ memory, onClick }) {
  const sizeClasses = {
    large:  'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-2',
    small:  'md:col-span-1 md:row-span-1',
  }
  const aspectClasses = {
    large:  'aspect-[4/3]',
    medium: 'aspect-[3/4]',
    small:  'aspect-square',
  }

  return (
    <div
      className={clsx('group relative cursor-pointer overflow-hidden rounded-2xl', sizeClasses[memory.size])}
      onClick={() => onClick(memory)}
    >
      {/* Photo or placeholder */}
      <div className={clsx(
        'w-full h-full bg-surface border border-border flex items-center justify-center',
        aspectClasses[memory.size],
        'transition-transform duration-700 group-hover:scale-[1.03]'
      )}>
        {memory.image ? (
          <img
            src={memory.image}
            alt={memory.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-hint">
            <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center text-xl">
              📷
            </div>
            <span className="font-mono text-xs">[ {memory.id} ]</span>
            <span className="font-mono text-xs text-hint/60">{memory.title}</span>
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="font-mono text-xs text-hint mb-1">{memory.date}</p>
          <h3 className="font-display text-xl text-cream mb-2">{memory.title}</h3>
          <p className="font-body text-sm text-soft leading-snug line-clamp-3">
            {memory.story}
          </p>
          <div className="flex gap-1 mt-3">
            {memory.tags?.map(tag => (
              <Tag key={tag} variant="muted">{tag}</Tag>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle corner glow on hover */}
      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-rose/30 transition-all duration-500" />
    </div>
  )
}

// Lightbox modal for expanded view
function Lightbox({ memory, onClose }) {
  if (!memory) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-bg/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="soft-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Photo */}
        <div className="aspect-video w-full bg-surface rounded-xl mb-6 overflow-hidden flex items-center justify-center">
          {memory.image ? (
            <img src={memory.image} alt={memory.title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-hint font-mono text-sm">[ add photo: {memory.id} ]</div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <p className="font-mono text-xs text-hint">{memory.date}</p>
          <h3 className="font-display text-3xl text-cream">{memory.title}</h3>
          <p className="font-body text-soft leading-relaxed">{memory.story}</p>
          <div className="flex gap-2 pt-2">
            {memory.tags?.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </div>

        <button
          className="mt-6 font-mono text-xs text-hint hover:text-rose transition-colors"
          onClick={onClose}
        >
          ← back to gallery
        </button>
      </div>
    </div>
  )
}

export default function GallerySection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="section-wrapper relative grain-overlay">
      <AmbientGlow className="left-1/2 top-0" size={700} color="rose" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section header */}
        <RevealWrapper>
          <SectionLabel>{GALLERY.sectionLabel}</SectionLabel>
          <h2 className="section-heading mb-3">{GALLERY.heading}</h2>
          <p className="font-display text-xl text-soft italic mb-16">
            {GALLERY.subheading}
          </p>
        </RevealWrapper>

        {/* Masonry-style grid */}
        <RevealWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {GALLERY.memories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} onClick={setSelected} />
            ))}
          </div>
        </RevealWrapper>

        {/* Instruction hint */}
        <RevealWrapper>
          <p className="font-mono text-xs text-hint text-center mt-8">
            ↑ hover to reveal · click to expand
          </p>
        </RevealWrapper>
      </div>

      {/* Lightbox */}
      <Lightbox memory={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
