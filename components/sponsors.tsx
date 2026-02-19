'use client'

import { FaHandshake } from 'react-icons/fa'
import Image from 'next/image'

interface Sponsor {
  id: number
  name: string
  logo: string
  tier: 'emerald' | 'diamond' | 'gold' | 'silver' | 'bronze'
  website?: string
}

export default function Sponsors() {
  const sponsors: Sponsor[] = [
    // Emerald Tier
    {
      id: 1,
      name: 'Lap Mart',
      logo: '/SPONSOR-LOGO/lapmart.jpeg',
      tier: 'gold',
      website: 'https://lapmart.lk/'
    },
    {
      id: 2,
      name: 'WSO2',
      logo: '/SPONSOR-LOGO/WSO2.png',
      tier: 'silver',
      website: 'https://wso2.com'
    },
    {
      id: 3,
      name: 'ATA International PVT LTD',
      //logo: '/SPONSOR-LOGO/ATA.jpg',
      tier: 'bronze',
      website: 'https://www.ataintl.lk/'
    },
  ]

  const tierConfig = {
    emerald: {
      title: 'Emerald Sponsor',
      gradient: 'from-emerald-400 to-green-500',
      glow: 'rgba(16, 185, 129, 0.4)',
      border: 'border-emerald-400/50',
      size: 'w-48 h-24'
    },
    diamond: {
      title: 'Diamond Sponsor',
      gradient: 'from-blue-300 to-purple-400',
      glow: 'rgba(147, 197, 253, 0.4)',
      border: 'border-blue-300/50',
      size: 'w-44 h-22'
    },
    gold: {
      title: 'Gold Sponsor',
      gradient: 'from-yellow-400 to-yellow-600',
      glow: 'rgba(250, 204, 21, 0.4)',
      border: 'border-yellow-400/50',
      size: 'w-40 h-20'
    },
    silver: {
      title: 'Silver Sponsor',
      gradient: 'from-gray-300 to-gray-500',
      glow: 'rgba(209, 213, 219, 0.4)',
      border: 'border-gray-300/50',
      size: 'w-36 h-18'
    },
    bronze: {
      title: 'Bronze Sponsor',
      gradient: 'from-orange-600 to-orange-800',
      glow: 'rgba(234, 88, 12, 0.4)',
      border: 'border-orange-600/50',
      size: 'w-32 h-16'
    }
  }

  const sponsorsByTier = {
    emerald: sponsors.filter(s => s.tier === 'emerald'),
    diamond: sponsors.filter(s => s.tier === 'diamond'),
    gold: sponsors.filter(s => s.tier === 'gold'),
    silver: sponsors.filter(s => s.tier === 'silver'),
    bronze: sponsors.filter(s => s.tier === 'bronze')
  }

  const hasSponsors = sponsors.length > 0

  return (
    <section id="sponsors" className="relative pt-20 pb-0 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Our Sponsors
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        {/* Sponsors Display */}
        <div className="relative mb-12">
          {!hasSponsors ? (
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
            <div className="space-y-16">
              {/* Scrolling Animation Styles */}
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
                  animation: scroll 40s linear infinite;
                  width: fit-content;
                }
                .scroll-container:hover {
                  animation-play-state: paused;
                }
              `}</style>

              {/* Display sponsors by tier */}
              {(Object.entries(sponsorsByTier) as [keyof typeof tierConfig, Sponsor[]][]).map(([tier, tierSponsors]) => {
                if (tierSponsors.length === 0) return null
                
                const config = tierConfig[tier]
                const shouldScroll = tierSponsors.length > 6

                const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => (
                  <div 
                    className={`neon-border-cyan p-6 hover-glow flex items-center justify-center border-2 ${config.border} transition-all duration-300 ${shouldScroll ? 'mx-4 min-w-[280px]' : ''} cursor-pointer`}
                    style={{
                      boxShadow: `0 0 20px ${config.glow}`
                    }}
                    onClick={() => sponsor.website && window.open(sponsor.website, '_blank')}
                  >
                    <div className="text-center flex flex-col items-center">
                      <div className={`relative ${config.size} mb-3`}>
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="font-semibold text-foreground text-lg">{sponsor.name}</p>
                    </div>
                  </div>
                )
                
                return (
                  <div key={tier} className="space-y-6">
                    {/* Tier Title */}
                    <div className="text-center">
                      <h3 
                        className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent inline-block`}
                        style={{
                          filter: `drop-shadow(0 0 15px ${config.glow})`
                        }}
                      >
                        {config.title}
                      </h3>
                    </div>

                    {/* Sponsors Display - Scrolling or Grid */}
                    {shouldScroll ? (
                      <div className="overflow-hidden">
                        <div className="scroll-container">
                          {/* Render sponsors twice for seamless loop */}
                          {[...tierSponsors, ...tierSponsors].map((sponsor, index) => (
                            <SponsorCard key={`${sponsor.id}-${index}`} sponsor={sponsor} />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap justify-center items-center gap-8">
                        {tierSponsors.map((sponsor) => (
                          <SponsorCard key={sponsor.id} sponsor={sponsor} />
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
