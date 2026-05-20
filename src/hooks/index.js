import { useEffect, useRef, useState, useCallback } from 'react'

// ============================================================
//  useReveal — triggers a CSS class when element enters viewport
//  Usage: const { ref, isVisible } = useReveal()
// ============================================================
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once revealed, stop observing
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: options.threshold || 0.15, ...options }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// ============================================================
//  useScrollProgress — tracks overall page scroll 0→1
//  Used to unlock the letter section
// ============================================================
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}

// ============================================================
//  useCountUp — animates a number from 0 to target
//  Usage: const count = useCountUp(365, isVisible)
// ============================================================
export function useCountUp(target, isVisible, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isVisible, target, duration])

  return count
}

// ============================================================
//  useTypewriter — returns text character by character
//  Usage: const { text, isDone } = useTypewriter(lines, delay)
// ============================================================
export function useTypewriter(lines, charDelay = 45, lineDelay = 600) {
  const [displayed, setDisplayed] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsDone(true)
      return
    }
    if (currentChar < lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[currentLine] = (next[currentLine] || '') + lines[currentLine][currentChar]
          return next
        })
        setCurrentChar(c => c + 1)
      }, charDelay)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, lineDelay)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar, lines, charDelay, lineDelay])

  return { lines: displayed, isDone }
}

// ============================================================
//  useParallax — returns a Y offset based on scroll position
//  Usage: const offsetY = useParallax(ref, 0.3)
// ============================================================
export function useParallax(ref, speed = 0.2) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const update = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      setOffset((center - viewCenter) * speed)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [ref, speed])

  return offset
}
