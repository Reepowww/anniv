import { useScrollProgress } from './hooks'
import { ProgressBar, SectionNav } from './components/ui'
import { SectionTransition, SceneBreak } from './components/layout/Transitions'

import LandingSection  from './components/sections/Landing'
import OriginSection   from './components/sections/Origin'
import TimelineSection from './components/sections/Timeline'
import OurDataSection  from './components/sections/OurData'
import GallerySection  from './components/sections/Gallery'
import LetterSection   from './components/sections/Letter'

// Navigation dot labels (matches section IDs above)
const NAV_SECTIONS = [
  { id: 'landing',  label: 'start' },
  { id: 'origin',   label: 'origin' },
  { id: 'timeline', label: 'timeline' },
  { id: 'data',     label: 'our data' },
  { id: 'gallery',  label: 'gallery' },
  { id: 'letter',   label: 'letter ♡' },
]

export default function App() {
  const scrollProgress = useScrollProgress()

  // Determine active nav section (simple approximation)
  const activeSection = Math.floor(scrollProgress * NAV_SECTIONS.length)

  return (
    <>
      {/* === GLOBAL UI === */}
      <ProgressBar progress={scrollProgress} />
      <SectionNav sections={NAV_SECTIONS} active={Math.min(activeSection, NAV_SECTIONS.length - 1)} />

      {/* === MAIN CONTENT === */}
      <main>
        <LandingSection />

        <SectionTransition label="· · ·" />

        <OriginSection />

        <SceneBreak />

        <TimelineSection />

        <SectionTransition label="· · ·" />

        <OurDataSection />

        <SceneBreak />

        <GallerySection />

        <SectionTransition label="· · ·" />

        {/* Letter receives scroll progress to manage unlock */}
        <LetterSection scrollProgress={scrollProgress} />
      </main>
    </>
  )
}
