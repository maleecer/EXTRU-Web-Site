'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
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
        className="group relative flex flex-col items-center justify-center bg-black/80 backdrop-blur-md border border-primary/40 hover:border-primary transition-all duration-300 py-4 px-3 rounded-sm"
        style={{
          boxShadow: '0 0 20px rgba(51, 225, 255, 0.3)',
        }}
      >
        {/* Vertical text */}
        <div className="flex flex-col items-center gap-1 mb-3">
          <span className="text-white text-sm font-medium tracking-wider writing-vertical">
            Scroll to top
          </span>
        </div>

        {/* Animated arrow */}
        <div className="relative w-6 h-6 flex items-center justify-center">
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
