import { ORIGIN } from '../../data/siteData'
import { RevealWrapper, SectionLabel, AmbientGlow, TerminalLine, Divider } from '../ui'

export default function OriginSection() {
  return (
    <section id="origin" className="section-wrapper relative grain-overlay">
      <AmbientGlow className="right-0 top-1/2" size={600} color="sage" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Section header */}
        <RevealWrapper>
          <SectionLabel>{ORIGIN.sectionLabel}</SectionLabel>
          <h2 className="section-heading mb-16">{ORIGIN.heading}</h2>
        </RevealWrapper>

        {/* Two-column layout: story left, git log right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* === LEFT: Story paragraphs === */}
          <div className="space-y-8">
            {ORIGIN.paragraphs.map((para, i) => (
              <RevealWrapper key={i} delay={i + 1}>
                <p className="font-display text-xl md:text-2xl text-soft font-light leading-relaxed italic">
                  {para}
                </p>
              </RevealWrapper>
            ))}

            {/* Spark quote */}
            <RevealWrapper delay={4}>
              <div className="border-l-2 border-rose pl-6 mt-12">
                <p className="font-display text-2xl md:text-3xl text-cream italic">
                  "{ORIGIN.sparkQuote}"
                </p>
              </div>
            </RevealWrapper>
          </div>

          {/* === RIGHT: Git commit log === */}
          <RevealWrapper delay={2}>
            <div className="terminal-block">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                {/* Mac-style traffic lights */}
                <div className="w-3 h-3 rounded-full bg-rose/40" />
                <div className="w-3 h-3 rounded-full bg-gold/40" />
                <div className="w-3 h-3 rounded-full bg-sage/40" />
                <span className="font-mono text-xs text-hint ml-2">git log --oneline us.git</span>
              </div>

              <div className="space-y-3">
                {ORIGIN.commitLog.map((commit, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start gap-3">
                      <span className="text-gold font-mono text-xs mt-0.5 shrink-0">
                        {commit.hash}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-xs text-code leading-snug">
                          {commit.message}
                        </p>
                        <p className="font-mono text-xs text-hint mt-0.5">
                          {commit.date}
                        </p>
                      </div>
                    </div>
                    {i < ORIGIN.commitLog.length - 1 && (
                      <div className="ml-[2.5rem] w-px h-3 bg-border mt-1" />
                    )}
                  </div>
                ))}
              </div>

              {/* Final line */}
              <div className="mt-4 pt-3 border-t border-border">
                <TerminalLine prompt=">" color="rose">
                  status: committed ♡
                </TerminalLine>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
