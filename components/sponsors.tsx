'use client'

import { FaHandshake } from 'react-icons/fa'

export default function Sponsors() {
  const sponsors: any[] = []

  return (
    <section id="sponsors" className="relative pt-20 pb-0 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Our Sponsors
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        {/* Sponsors Display */}
        <div className="relative mb-12">
          {sponsors.length === 0 ? (
            <div className="neon-border-cyan p-12 hover-glow flex flex-col items-center justify-center min-h-[200px] max-w-2xl mx-auto">
              <div className="text-center">
                <FaHandshake className="text-6xl text-primary/80 mx-auto mb-4" style={{
                  filter: 'drop-shadow(0 0 20px rgba(51, 225, 255, 0.4))'
                }} />
                <h3 className="text-2xl font-bold text-primary mb-3" style={{
                  textShadow: '0 0 15px rgba(51, 225, 255, 0.5)'
                }}>
                  Currently No Sponsors
                </h3>
                <p className="text-foreground/80 text-lg mb-2">
                  Looking for partners to make EXTRU 2025 even bigger!
                </p>
                <p className="text-accent font-semibold" style={{
                  textShadow: '0 0 10px rgba(124, 255, 114, 0.4)'
                }}>
                  Want to sponsor? Contact us today!
                </p>
              </div>
            </div>
          ) : (
            <>
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .scroll-container {
                  display: flex;
                  animation: scroll 20s linear infinite;
                  width: fit-content;
                }
                .scroll-container:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="overflow-hidden">
                <div className="scroll-container">
                  {/* Render sponsors twice for seamless loop */}
                  {[...sponsors, ...sponsors].map((sponsor, index) => (
                    <div key={`${sponsor.id}-${index}`} className="neon-border-cyan p-6 hover-glow flex items-center justify-center h-32 mx-3 min-w-[250px]">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🏢</div>
                        <p className="font-semibold text-foreground">{sponsor.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
