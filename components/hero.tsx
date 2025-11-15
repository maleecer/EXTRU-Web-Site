'use client'

import { useEffect, useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'EXTRU'
  const [typedYear, setTypedYear] = useState('')
  const fullYear = '2026'
  const [showFinalCursor, setShowFinalCursor] = useState(false)
  const [showInitialCursor, setShowInitialCursor] = useState(true)

  useEffect(() => {
    setIsVisible(true)

    // Show initial cursor for 1500ms before typing starts
    const initialTimer = setTimeout(() => {
      setShowInitialCursor(false)
      
      // Typing animation for EXTRU
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          // Start typing year after EXTRU is done
          let yearIndex = 0
          const yearInterval = setInterval(() => {
            if (yearIndex <= fullYear.length) {
              setTypedYear(fullYear.slice(0, yearIndex))
              yearIndex++
            } else {
              clearInterval(yearInterval)
              // Show final cursor after typing is complete
              setShowFinalCursor(true)
            }
          }, 80)
        }
      }, 100)
    }, 1500)

    return () => {
      clearTimeout(initialTimer)
    }
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-10 overflow-hidden">
      {/* Robot Image - Absolute positioned within home section */}
      <div className="absolute top-20 right-0 lg:-right-20 bottom-0 z-5 hidden lg:flex lg:items-center">
        <div className={`relative w-full max-w-[600px] h-full max-h-[calc(100vh-5rem)] aspect-square transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}>
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(51, 225, 255, 0.2) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'pulse 4s ease-in-out infinite'
            }}
          ></div>
          <Image
            src="/robot.png"
            alt="EXTRU 2026 Robot"
            width={500}
            height={500}
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(51, 225, 255, 0.5))',
              animation: 'robotFloat 6s ease-in-out infinite, robotMove 8s ease-in-out infinite'
            }}
            priority
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="text-center lg:text-left lg:max-w-3xl">
          {/* Main Title with stronger glow and animation */}
          <h1 
            className={`text-6xl md:text-8xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-wider transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              color: '#33E1FF',
              textShadow: `
                1px 1px 0 #0099cc,
                2px 2px 0 #0099cc,
                3px 3px 0 #0088bb,
                4px 4px 0 #0088bb,
                5px 5px 0 #0077aa,
                6px 6px 0 #0077aa,
                7px 7px 0 #006699,
                8px 8px 0 #006699,
                9px 9px 0 #005588,
                10px 10px 0 #005588,
                11px 11px 0 #004477,
                12px 12px 0 #004477,
                0 0 40px rgba(51, 225, 255, 1),
                0 0 80px rgba(51, 225, 255, 0.8),
                0 0 120px rgba(51, 225, 255, 0.6)
              `,
              fontWeight: '900',
              letterSpacing: '0.15em',
              animation: 'neonPulse 3s ease-in-out infinite, float 6s ease-in-out infinite'
            }}
          >
            <div>
              {showInitialCursor && typedText.length === 0 && (
                <span className="typing-cursor" style={{
                  display: 'inline-block',
                  animation: 'blink 0.7s infinite',
                  marginLeft: '4px'
                }}>|</span>
              )}
              {typedText.split('').map((char, index) => (
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
              {typedText.length < fullText.length && !showInitialCursor && (
                <span className="typing-cursor" style={{
                  display: 'inline-block',
                  animation: 'blink 0.7s infinite',
                  marginLeft: '4px'
                }}>|</span>
              )}
            </div>
            <div>
              {typedYear.split('').map((char, index) => (
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
              {typedText.length === fullText.length && typedYear.length < fullYear.length && (
                <span className="typing-cursor" style={{
                  display: 'inline-block',
                  animation: 'blink 0.7s infinite',
                  marginLeft: '4px'
                }}>|</span>
              )}
              {showFinalCursor && (
                <span className="typing-cursor" style={{
                  display: 'inline-block',
                  animation: 'blink 0.7s infinite, cursorGlow 1.4s ease-in-out infinite',
                  marginLeft: '8px',
                  textShadow: '0 0 20px rgba(51, 225, 255, 1), 0 0 40px rgba(51, 225, 255, 0.8)'
                }}>|</span>
              )}
            </div>
          </h1>

          {/* Event Info Section */}
          <div className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {/* Organized By */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-primary/60 text-xs uppercase tracking-wider font-bold">Organized By</div>
              <FaUniversity className="text-primary text-2xl mb-2" style={{
                filter: 'drop-shadow(0 0 8px rgba(51, 225, 255, 0.6))'
              }} />
              <h3 className="text-sm md:text-base font-bold text-white">
                Faculty of Technology<br />RUSL
              </h3>
            </div>

            {/* Event Date */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-accent/60 text-xs uppercase tracking-wider font-bold">Event Date</div>
              <FaCalendarAlt className="text-accent text-2xl mb-2" style={{
                filter: 'drop-shadow(0 0 8px rgba(124, 255, 114, 0.6))'
              }} />
              <h3 className="text-sm md:text-base font-bold text-white">
                February 19-21<br />2026
              </h3>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-accent/60 text-xs uppercase tracking-wider font-bold">Location</div>
              <FaMapMarkerAlt className="text-accent text-2xl mb-2" style={{
                filter: 'drop-shadow(0 0 8px rgba(124, 255, 114, 0.6))'
              }} />
              <h3 className="text-sm md:text-base font-bold text-white">
                Technology Faculty<br />Premises
              </h3>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            className={`mt-10 neon-border-green cta-exhibits px-10 md:px-14 py-3.5 text-base md:text-lg font-semibold hover-glow inline-block rounded-sm transition-all duration-1000 delay-900 bg-transparent ${
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
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        @keyframes cursorGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(51, 225, 255, 1), 0 0 40px rgba(51, 225, 255, 0.8);
            transform: scaleY(1);
          }
          50% {
            text-shadow: 0 0 30px rgba(51, 225, 255, 1), 0 0 60px rgba(51, 225, 255, 1), 0 0 90px rgba(51, 225, 255, 0.6);
            transform: scaleY(1.1);
          }
        }

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

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes robotFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(3deg);
          }
          50% {
            transform: translateY(-10px) rotate(0deg);
          }
          75% {
            transform: translateY(-20px) rotate(-3deg);
          }
        }

        @keyframes robotMove {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(10px) translateY(-15px);
          }
          50% {
            transform: translateX(-5px) translateY(-25px);
          }
          75% {
            transform: translateX(10px) translateY(-15px);
          }
        }
      `}</style>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  )
}
