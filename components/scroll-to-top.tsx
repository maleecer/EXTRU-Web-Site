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
    
    // Additional smooth scroll for browsers that don't support smooth behavior
    if (!('scrollBehavior' in document.documentElement.style)) {
      const scrollStep = -window.scrollY / (500 / 15)
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep)
        } else {
          clearInterval(scrollInterval)
        }
      }, 15)
    }
  }

  return (
    <div
      className={`fixed left-6 bottom-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative w-14 h-14 bg-gradient-to-br from-[#0a1f3d] via-[#0d1b2a] to-[#000814] border-2 border-primary/50 hover:border-primary rounded-full transition-all duration-300 hover:scale-110 overflow-hidden shadow-xl shadow-primary/30 hover:shadow-primary/60"
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Circular Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary/20"
          />
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary transition-all duration-100"
            strokeDasharray={`${2 * Math.PI * 24}`}
            strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
            strokeLinecap="round"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))',
            }}
          />
        </svg>

        {/* Arrow Icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <svg
            className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300 group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>

        {/* Pulse Effect on Hover */}
        <div className="absolute inset-0 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
      </button>
    </div>
  )
}
