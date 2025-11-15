'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Grid lines with stronger visibility */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(51, 225, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(51, 225, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        {/* Main Title with stronger glow and animation */}
        <h1 
          className={`text-7xl md:text-9xl font-bold mb-8 tracking-wider transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            color: '#33E1FF',
            textShadow: '0 0 40px rgba(51, 225, 255, 1), 0 0 80px rgba(51, 225, 255, 0.8), 0 0 120px rgba(51, 225, 255, 0.6), 0 0 160px rgba(51, 225, 255, 0.4)',
            fontWeight: '700',
            letterSpacing: '0.15em',
            animation: 'neonPulse 3s ease-in-out infinite, float 6s ease-in-out infinite'
          }}
        >
          <div>
            {'EXTRU'.split('').map((char, index) => (
              <span
                key={index}
                style={{
                  display: 'inline-block',
                  animation: `letterFloat 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div>
            {'2026'.split('').map((char, index) => (
              <span
                key={index}
                style={{
                  display: 'inline-block',
                  animation: `letterFloat 3s ease-in-out infinite`,
                  animationDelay: `${(index + 5) * 0.1}s`
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </h1>

        <style jsx>{`
          @keyframes neonPulse {
            0%, 100% {
              text-shadow: 0 0 40px rgba(51, 225, 255, 1), 
                           0 0 80px rgba(51, 225, 255, 0.8), 
                           0 0 120px rgba(51, 225, 255, 0.6), 
                           0 0 160px rgba(51, 225, 255, 0.4);
            }
            50% {
              text-shadow: 0 0 50px rgba(51, 225, 255, 1), 
                           0 0 100px rgba(51, 225, 255, 0.9), 
                           0 0 150px rgba(51, 225, 255, 0.7), 
                           0 0 200px rgba(51, 225, 255, 0.5);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes letterFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `}</style>

        <p className="text-base md:text-xl mb-12 font-light tracking-wide transition-all duration-1000 delay-300" 
           style={{ 
             color: '#7d99b3',
             opacity: isVisible ? 1 : 0,
             transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
           }}>
          February 19–21, 2026 | Technology Faculty Premises, RUSL
        </p>

        {/* CTA Button */}
        <button 
          className={`neon-border-green px-10 md:px-14 py-3.5 text-base md:text-lg font-semibold hover-glow inline-block rounded-sm transition-all duration-1000 delay-500 bg-transparent ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            color: '#7CFF72',
            textShadow: '0 0 15px rgba(124, 255, 114, 0.6)',
            border: '2px solid rgba(124, 255, 114, 0.9)',
            boxShadow: '0 0 20px rgba(124, 255, 114, 0.7), inset 0 0 15px rgba(124, 255, 114, 0.2)'
          }}
        >
          Explore Exhibits
        </button>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  )
}
