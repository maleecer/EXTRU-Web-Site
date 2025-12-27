'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(scrollPercent)
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={`fixed left-6 bottom-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex flex-col items-center justify-center bg-black/80 backdrop-blur-md border border-primary/40 hover:border-primary transition-all duration-300 py-4 px-3 rounded-sm overflow-hidden"
        style={{
          boxShadow: '0 0 20px rgba(51, 225, 255, 0.3)',
        }}
      >
        {/* Progress bar - fills from top to bottom */}
        <div 
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 transition-all duration-100 ease-out border-b-2 border-primary/50"
          style={{
            height: `${scrollProgress}%`,
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 10px rgba(59, 130, 246, 0.3)',
          }}
        ></div>

        {/* Vertical text */}
        <div className="flex flex-col items-center gap-1 mb-3 relative z-10">
          <span className="text-white text-sm font-medium tracking-wider writing-vertical">
            Scroll to top
          </span>
        </div>

        {/* Animated arrow */}
        <div className="relative w-6 h-6 flex items-center justify-center z-10">
          <div
            className="absolute w-2 h-2 rounded-full bg-secondary transition-all duration-300 group-hover:animate-bounce"
            style={{
              boxShadow: '0 0 10px rgba(124, 255, 114, 0.8), 0 0 20px rgba(124, 255, 114, 0.5)',
            }}
          ></div>
          <svg
            className="w-6 h-6 text-secondary transition-transform duration-300 group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(124, 255, 114, 0.6))',
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      </button>

      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  )
}
