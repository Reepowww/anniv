import { useState, useEffect, useRef } from 'react'
import { LANDING, NAMES, DATES } from '../../data/siteData'
import { useTypewriter } from '../../hooks'
import { AmbientGlow, BlinkingCursor } from '../ui'
import { differenceInDays, parseISO } from 'date-fns'

export default function LandingSection() {
  const daysTogether = differenceInDays(new Date(), parseISO(DATES.anniversary))
  const { lines, isDone } = useTypewriter(LANDING.typewriterLines, 38, 500)
  const [showCinematic, setShowCinematic] = useState(false)
  
  // Create a reference to keep track of our audio player instance
  const audioRef = useRef(null)

 // 1. Audio Logic: Sets up the music player safely
  useEffect(() => {
    // Vite's safe way to check if the site is running live on the internet
    const isProd = import.meta.env.PROD; 
    const audioPath = isProd ? '/anniv/audio/bg-music.mp3' : '/audio/bg-music.mp3';

    const audio = new Audio(audioPath);
    audio.volume = 0.20; // Soft ambient volume at 20%
    audio.loop = true;   // Keeps looping seamlessly
    audioRef.current = audio;
    
    // Play music function triggered by user activity
    const handleStartAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Audio autoplay prevented or file loading:", err);
        });
      }
      // Detach listeners immediately so they only execute on the very first touch
      document.removeEventListener('click', handleStartAudio);
      document.removeEventListener('keydown', handleStartAudio);
      document.removeEventListener('touchstart', handleStartAudio);
    };

    // Add listeners across the document to capture the initial engagement
    document.addEventListener('click', handleStartAudio);
    document.addEventListener('keydown', handleStartAudio);
    document.addEventListener('touchstart', handleStartAudio);

    // Tear down component player and listeners if unmounted
    return () => {
      document.removeEventListener('click', handleStartAudio);
      document.removeEventListener('keydown', handleStartAudio);
      document.removeEventListener('touchstart', handleStartAudio);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // After typewriter finishes, fade into cinematic headline
  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => setShowCinematic(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [isDone])

  return (
    <section
      id="landing"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay"
    >
      {/* === AMBIENT BACKGROUND GLOW === */}
      <AmbientGlow className="left-1/2 top-1/3" size={800} color="rose" />
      <AmbientGlow className="left-1/4 bottom-1/4" size={400} color="sage" />

      {/* === SUBTLE BACKGROUND PATTERN === */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #f0ebe0 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-rose/10 via-transparent to-transparent" />

      {/* === TERMINAL BLOCK === */}
      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="terminal-block space-y-2 mb-12"
          style={{
            opacity: 1,
            animation: 'fadeUp 0.6s ease forwards',
          }}
        >
          {lines.map((line, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-hint select-none">
                {line?.startsWith('>') ? '' : ''}
              </span>
              <span className={
                line?.startsWith('>') ? 'text-rose' :
                line?.includes('100%') ? 'text-sage' :
                'text-code'
              }>
                {line}
              </span>
            </div>
          ))}
          {/* Blinking cursor at the end of current line */}
          {!isDone && <BlinkingCursor className="ml-1" />}
        </div>

        {/* === CINEMATIC HEADLINE (fades in after terminal) === */}
        <div
          className="text-center space-y-6"
          style={{
            opacity: showCinematic ? 1 : 0,
            transform: showCinematic ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1.2s ease, transform 1.2s ease',
          }}
        >
          <h1 className="section-heading text-center">
            {LANDING.headline}
          </h1>
          <p className="font-body text-soft max-w-md mx-auto leading-relaxed text-base">
            {LANDING.subheadline}
          </p>

          {/* Days counter badge */}
          <div className="inline-flex items-center gap-3 border border-border rounded-full px-5 py-2 bg-surface/50">
            <span className="font-mono text-xs text-hint">days_together =</span>
            <span className="font-mono text-rose font-medium">{daysTogether}</span>
          </div>

          {/* Scroll nudge */}
          <div className="pt-8 flex flex-col items-center gap-2 animate-float">
            <p className="font-mono text-xs text-hint tracking-widest">
              {LANDING.ambientText}
            </p>
            <div className="w-px h-12 bg-gradient-to-b from-hint to-transparent" />
          </div>
        </div>
      </div>

      {/* === CORNER DECORATION === */}
      <div className="absolute bottom-8 left-8 font-mono text-xs text-muted opacity-40">
        v1.0.0 — {NAMES.combined}
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-xs text-muted opacity-40">
        {new Date().getFullYear()}
      </div>
    </section>
  )
}