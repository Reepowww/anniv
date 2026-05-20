import { OUR_DATA } from '../../data/siteData'
import { RevealWrapper, SectionLabel, AmbientGlow, TerminalLine } from '../ui'
import { useReveal, useCountUp } from '../../hooks'
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis,
  Tooltip, ResponsiveContainer, Cell, ReferenceLine
} from 'recharts'

// === Animated stat counter card ===
function StatCard({ label, value, suffix, description }) {
  const { ref, isVisible } = useReveal()
  const count = useCountUp(value, isVisible)

  return (
    <div ref={ref} className="soft-card text-center space-y-1">
      <p className="font-mono text-3xl md:text-4xl text-rose font-light">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="font-body text-cream text-sm font-medium">{label}</p>
      <p className="font-mono text-xs text-hint">{description}</p>
    </div>
  )
}

// === Custom tooltip for Recharts ===
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-surface border border-border rounded-lg px-3 py-2 text-xs font-mono">
      <p className="text-cream">{label}</p>
      <p className="text-rose">{payload[0]?.value}</p>
      {payload[0]?.payload?.note && (
        <p className="text-hint italic mt-1">{payload[0].payload.note}</p>
      )}
    </div>
  )
}

// === Nickname word cloud (CSS-based) ===
function NicknameCloud({ nicknames }) {
  const sizeClasses = {
    5: 'text-3xl text-rose',
    4: 'text-2xl text-blush',
    3: 'text-xl text-soft',
    2: 'text-base text-hint',
    1: 'text-sm text-muted',
  }
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center p-6">
      {nicknames.map((n, i) => (
        <span
          key={i}
          className={`font-display italic transition-all duration-300 hover:text-rose cursor-default ${sizeClasses[n.size]}`}
        >
          {n.word}
        </span>
      ))}
    </div>
  )
}

export default function OurDataSection() {
  const chartColors = {
    rose:  '#e8a598',
    sage:  '#8aaa8c',
    gold:  '#c9a96e',
    code:  '#7b9ea8',
    muted: '#3a3a52',
    soft:  '#b8b0a0',
    cream: '#f0ebe0',
    bg:    '#0c0c10',
  }

  return (
    <section id="data" className="section-wrapper relative grain-overlay">
      <AmbientGlow className="right-1/4 top-0" size={500} color="code" />
      <AmbientGlow className="left-0 bottom-1/3" size={400} color="gold" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-24">

        {/* Section header */}
        <RevealWrapper>
          <SectionLabel>{OUR_DATA.sectionLabel}</SectionLabel>
          <h2 className="section-heading mb-3">{OUR_DATA.heading}</h2>
          <p className="font-mono text-sm text-hint">{OUR_DATA.subheading}</p>
        </RevealWrapper>

        {/* === BIG STATS GRID === */}
        <div>
          <RevealWrapper>
            <TerminalLine className="mb-6" prompt="$">
              stats.describe()
            </TerminalLine>
          </RevealWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {OUR_DATA.stats.slice(0, 3).map((stat, i) => (
              <RevealWrapper key={i} delay={(i % 3) + 1}>
                <StatCard {...stat} />
              </RevealWrapper>
            ))}
          </div>
          <div className="relative mt-4">
            <div className="mx-auto h-px w-20 bg-border/50" />
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:justify-center md:items-start">
              {OUR_DATA.stats.slice(3).map((stat, i) => (
                <RevealWrapper key={i} delay={(i % 3) + 1}>
                  <div className="mx-auto md:w-[280px]">
                    <StatCard {...stat} />
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>

        {/* === HAPPINESS INDEX LINE CHART === */}
        <RevealWrapper>
          <div className="soft-card">
            <TerminalLine className="mb-1" prompt="#">
              relationship_happiness_index.plot()
            </TerminalLine>
            <p className="font-mono text-xs text-hint mb-6">
              n=13 months · self-reported · units: happiness/month · hover to see annotations
            </p>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={OUR_DATA.happinessIndex} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <XAxis
                  dataKey="month"
                  tick={{ fill: chartColors.hint, fontSize: 11, fontFamily: 'JetBrains Mono' }}
                  axisLine={{ stroke: chartColors.muted }}
                  tickLine={false}
                />
                <YAxis
                  domain={[6, 10.5]}
                  tick={{ fill: chartColors.hint, fontSize: 11, fontFamily: 'JetBrains Mono' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine y={10} stroke={chartColors.rose} strokeDasharray="3 3" strokeOpacity={0.4} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={chartColors.rose}
                  strokeWidth={2}
                  dot={{ fill: chartColors.rose, strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, fill: chartColors.rose }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="font-mono text-xs text-hint text-right mt-2">
              → trend: consistently above baseline ♡
            </p>
          </div>
        </RevealWrapper>

        {/* === TIME DISTRIBUTION BAR CHART === */}
        <RevealWrapper>
          <div className="soft-card">
            <TerminalLine className="mb-1" prompt="#">
              time_allocation.groupby('activity').sum()
            </TerminalLine>
            <p className="font-mono text-xs text-hint mb-6">
              % of shared time · fiscal year {new Date().getFullYear() - 1}–{new Date().getFullYear()}
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={OUR_DATA.timeDistribution} layout="vertical" margin={{ left: 20, right: 20 }}>
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={140}
                  tick={{ fill: chartColors.soft, fontSize: 11, fontFamily: 'JetBrains Mono' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(v) => [`${v}%`, 'time']}
                  contentStyle={{
                    background: '#13131a', border: '1px solid #1e1e2e',
                    borderRadius: 8, fontFamily: 'JetBrains Mono', fontSize: 12,
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {OUR_DATA.timeDistribution.map((entry, i) => (
                    <Cell key={i} fill={entry.color} fillOpacity={0.8} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </RevealWrapper>

        {/* === FUNNY METRICS TABLE === */}
        <RevealWrapper>
          <div className="terminal-block overflow-x-auto">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-rose/40" />
              <div className="w-3 h-3 rounded-full bg-gold/40" />
              <div className="w-3 h-3 rounded-full bg-sage/40" />
              <span className="font-mono text-xs text-hint ml-2">
                us_dataset.head(10)  # selected metrics
              </span>
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="font-mono text-hint pb-2 pr-8">metric</th>
                  <th className="font-mono text-hint pb-2 pr-8">value</th>
                  <th className="font-mono text-hint pb-2">unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {OUR_DATA.funnyMetrics.map((row, i) => (
                  <tr key={i} className="group">
                    <td className="font-mono text-code py-2 pr-8 group-hover:text-cream transition-colors">
                      {row.metric}
                    </td>
                    <td className="font-mono text-rose py-2 pr-8">{row.value}</td>
                    <td className="font-mono text-hint py-2">{row.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealWrapper>

        {/* === TOP SONGS === */}
        <RevealWrapper>
          <div className="soft-card">
            <TerminalLine className="mb-6" prompt="#">
              shared_playlist.top(5)
            </TerminalLine>
            <div className="space-y-3">
              {OUR_DATA.topSongs.map((song) => (
                <div key={song.rank} className="flex items-center gap-4 group">
                  <span className="font-mono text-xs text-muted w-4">{song.rank}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-cream text-sm truncate group-hover:text-rose transition-colors">
                      {song.title}
                    </p>
                    <p className="font-mono text-xs text-hint">{song.artist}</p>
                  </div>
                  <span className="font-mono text-xs text-hint italic shrink-0">
                    {song.context}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* === NICKNAMES === */}
        <RevealWrapper>
          <div className="soft-card">
            <TerminalLine className="mb-4" prompt="#">
              nicknames.value_counts()
            </TerminalLine>
            <NicknameCloud nicknames={OUR_DATA.nicknames} />
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
