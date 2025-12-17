'use client'

import Image from 'next/image'

export default function Recap() {
  const stats2025 = [
    { number: '5000+', label: 'Attendees', icon: '👥' },
    { number: '100+', label: 'Projects Showcased', icon: '🚀' },
    { number: '30+', label: 'Industry Experts', icon: '🎤' },
    { number: '20+', label: 'Workshops', icon: '🛠️' }
  ]

  const stats2024 = [
    { number: '1800+', label: 'Attendees', icon: '👥' },
    { number: '45+', label: 'Projects Showcased', icon: '🚀' },
    { number: '25+', label: 'Industry Experts', icon: '🎤' },
    { number: '12+', label: 'Workshops', icon: '🛠️' }
  ]

  const memories = [
    { 
      title: 'Opening Ceremony',
      description: 'Grand inauguration with keynote speeches from tech leaders',
      image: '/Extru-2025/00.jpg'
    },
    { 
      title: 'Innovation Showcase',
      description: 'Students presented groundbreaking projects across all departments',
      image: '/Extru-2025/03.jpg'
    },
    { 
      title: 'Tech Workshops',
      description: 'Hands-on sessions on AI, IoT, Robotics and more',
      image: '/Extru-2025/07.jpeg'
    },
    { 
      title: 'Networking Sessions',
      description: 'Industry professionals connecting with students',
      image: '/Extru-2025/11.jpeg'
    },
    { 
      title: 'Cultural Night',
      description: 'Vibrant performances and entertainment',
      image: '/Extru-2025/09.jpeg'
    },
    { 
      title: 'Closing Ceremony',
      description: 'Awards and recognitions for outstanding projects',
      image: '/Extru-2025/05.jpg'
    },
  ]

  const memories2024 = [
    { 
      title: 'Opening Ceremony',
      description: 'Kickoff featuring remarks from faculty and industry partners',
      image: '/Extru-2024/01.jpg'
    },
    { 
      title: 'Opening Ceremony Dancing Performance',
      description: 'Cultural dance performance to inaugurate the event',
      image: '/Extru-2024/04.jpg'
    },
    { 
      title: 'Project Demos',
      description: 'Innovative prototypes showcased by multidisciplinary teams',
      image: '/Extru-2024/02.jpg'
    },
    { 
      title: 'Skill Workshops',
      description: 'Hands-on sessions covering trending technologies',
      image: '/Extru-2024/03.jpg'
    },
    { 
      title: 'Project Showcase',
      description: 'Students demonstrating their cutting-edge projects',
      image: '/Extru-2024/05.jpg'
    }
  ]

  return (
    <section id="recap" className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          EXTRU 2025 Recap
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
        <p className="text-center text-foreground/70 text-lg mb-16 max-w-3xl mx-auto">
          Relive the incredible moments from last year's exhibition
        </p>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats2025.map((stat, idx) => (
            <div 
              key={idx}
              className="neon-border-cyan p-6 text-center hover-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                {stat.number}
              </div>
              <div className="text-foreground/70 text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Memories Gallery */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-10">
            Highlights & Memories
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory, idx) => (
              <div 
                key={idx}
                className="neon-border-cyan group hover-glow transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Image Container */}
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Image 
                    src={memory.image}
                    alt="Extru 2025"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold text-xl mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {memory.title}
                    </h4>
                  </div>
                </div>
                
                {/* Description */}
                <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {memory.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2024 Recap */}
        <div className="mt-28">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
            EXTRU 2024 Recap
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-center text-foreground/70 text-lg mb-16 max-w-3xl mx-auto">
            Relive the incredible moments from the 2024 exhibition
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats2024.map((stat, idx) => (
              <div 
                key={idx}
                className="neon-border-cyan p-6 text-center hover-glow transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                <div className="text-foreground/70 text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Memories Gallery */}
          <div>
            <h3 className="text-3xl font-bold text-primary text-center mb-10">
              Highlights & Memories
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memories2024.map((memory, idx) => (
                <div 
                  key={idx}
                  className="neon-border-cyan group hover-glow transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Image 
                      src={memory.image}
                      alt="Extru 2024"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    
                    {/* Title on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold text-xl mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        {memory.title}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {memory.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Looking Forward */}
        <div className="mt-20 text-center">
          <div className="neon-border-cyan p-8 max-w-3xl mx-auto hover-glow">
            <h3 className="text-3xl font-bold text-accent mb-4">
              🎉 EXTRU 2026 Will Be Even Bigger!
            </h3>
            <p className="text-white text-lg leading-relaxed mb-6">
              Building on last year's success, EXTRU 2026 promises more innovation, 
              more networking opportunities, and more unforgettable experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-foreground/70">
              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span> More Projects
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span> Bigger Prizes
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span> More Workshops
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span> Better Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
