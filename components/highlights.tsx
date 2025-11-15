'use client'

export default function Highlights() {
  const highlights = [
    { 
      title: 'Workshops', 
      icon: '🛠️', 
      description: 'Hands-on technical workshops',
      details: '15+ Interactive Sessions',
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    { 
      title: 'Tech Talks', 
      icon: '🎤', 
      description: 'Expert presentations & insights',
      details: '20+ Industry Leaders',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      title: 'Innovation Showcase', 
      icon: '💡', 
      description: 'Cutting-edge tech displays',
      details: '50+ Projects',
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    { 
      title: 'Competitions', 
      icon: '🏆', 
      description: 'Hackathons & coding challenges',
      details: 'Rs. 500,000+ Prizes',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    { 
      title: 'Networking', 
      icon: '🤝', 
      description: 'Connect with professionals',
      details: '1000+ Attendees',
      color: 'from-red-500/20 to-rose-500/20'
    },
    { 
      title: 'Job Fair', 
      icon: '💼', 
      description: 'Career opportunities',
      details: '30+ Companies',
      color: 'from-indigo-500/20 to-violet-500/20'
    },
    { 
      title: 'Cultural Events', 
      icon: '🎭', 
      description: 'Music, art & entertainment',
      details: 'Live Performances',
      color: 'from-teal-500/20 to-cyan-500/20'
    },
    { 
      title: 'Food Festival', 
      icon: '🍽️', 
      description: 'Culinary experiences',
      details: '20+ Food Stalls',
      color: 'from-amber-500/20 to-yellow-500/20'
    }
  ]

  return (
    <section id="highlights" className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Event Highlights
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
        <p className="text-center text-foreground/70 text-lg mb-16 max-w-3xl mx-auto">
          Experience the best of technology, innovation, and creativity at EXTRU 2026
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="neon-border-cyan hover-glow group transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-br ${item.color} p-6 border-b border-primary/30 flex flex-col items-center text-center`}>
                <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
              
              {/* Card Body */}
              <div className="p-6 space-y-3">
                <p className="text-foreground/70 text-sm leading-relaxed text-center">
                  {item.description}
                </p>
                
                {/* Details Badge */}
                <div className="flex justify-center">
                  <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold px-4 py-2 rounded-full">
                    {item.details}
                  </span>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
