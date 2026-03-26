'use client'

import { useEffect, useState } from 'react'
import { FaTimes, FaRocket } from 'react-icons/fa'

export default function Extru2027Popup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Show popup after a short delay when page loads
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Trigger entrance animation after mount
      requestAnimationFrame(() => {
        setIsAnimating(true)
      })
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 400)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

      {/* Popup Card */}
      <div
        className={`relative w-[90vw] max-w-lg mx-4 transform transition-all duration-500 ease-out ${
          isAnimating ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Outer glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur-lg opacity-50 animate-pulse"></div>

        {/* Card */}
        <div className="relative bg-[#0a1628] border border-primary/30 rounded-2xl overflow-hidden">
          {/* Animated top border */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary"></div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
          >
            <FaTimes className="text-sm" />
          </button>

          {/* Content */}
          <div className="p-8 md:p-10 text-center">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
              <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
              <div className="absolute bottom-16 left-20 w-1 h-1 bg-secondary/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}></div>
              <div className="absolute bottom-10 right-10 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
            </div>

            {/* Rocket icon */}
            <div className="relative mb-6 inline-flex items-center justify-center">
              <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full border border-primary/30 flex items-center justify-center">
                <FaRocket className="text-2xl text-primary animate-bounce" style={{ animationDuration: '2s' }} />
              </div>
            </div>

            {/* Stay Tuned label */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Stay Tuned</span>
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                EXTRU
              </span>{' '}
              <span className="text-white">2027</span>
            </h2>

            {/* Coming Soon */}
            <p
              className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              Coming Soon
            </p>

            {/* Description */}
            <p className="text-foreground/60 text-sm md:text-base leading-relaxed max-w-sm mx-auto mb-8">
              The journey continues! Get ready for the <span className="text-primary font-semibold">fourth edition</span> of EXTRU — bigger, bolder, and more innovative than ever.
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
              <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
              <span className="text-foreground/30 text-xs font-semibold tracking-widest">2027</span>
              <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40"></div>
            </div>
          </div>

          {/* Bottom gradient accent */}
          <div className="h-1 w-full bg-gradient-to-r from-secondary via-accent to-primary"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  )
}
