import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// A wrapper that converts vertical wheel into smooth horizontal scrolling
export default function HorizontalScroller({ children }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onWheel = (e) => {
      // Prevent vertical scroll, map to horizontal
      e.preventDefault()
      el.scrollTo({ left: el.scrollLeft + e.deltaY + e.deltaX, behavior: 'smooth' })
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    document.body.style.overflow = 'hidden'
    return () => {
      el.removeEventListener('wheel', onWheel)
      document.body.style.overflow = ''
    }
  }, [])

  // Small parallax background gradient reacting to scroll
  const { scrollXProgress } = useScroll({ container: containerRef })
  const bgX = useTransform(scrollXProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="relative h-screen w-screen overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-pink-50 opacity-80"
        style={{ backgroundPositionX: bgX, backgroundSize: '200% 100%' }}
      />
      <div className="relative flex h-screen items-stretch" style={{ width: `${React.Children.count(children)}00vw` }}>
        {React.Children.map(children, (child, i) => (
          <section className="snap-start h-full w-screen shrink-0 relative" key={i}>
            {child}
          </section>
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 bg-white/60 backdrop-blur rounded-full px-4 py-1 shadow">
        Scroll to explore →
      </div>
    </div>
  )
}
