'use client'

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 neon-text">
            About EXTRU 2026
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mb-8"></div>
          
          <p className="text-white text-lg leading-relaxed mb-6">
            EXTRU 2026 is Sri Lanka's premier technology exhibition, bringing together innovators, developers, and tech enthusiasts from across the nation. Experience cutting-edge technologies, participate in hands-on workshops, and network with industry leaders in the field of technology and innovation.
          </p>
          
          <p className="text-white text-lg leading-relaxed mb-6">
            Hosted at the Technology Faculty Premises of Rajarata University of Sri Lanka from February 19-21, 2026, EXTRU features contributions from five dynamic departments: ICT, Electronics & Nanotechnology, Mechanical & Transport Technology, Biosystems & Process Technology, and Food & Dairy Technology.
          </p>

          <p className="text-white text-lg leading-relaxed">
            From AI and machine learning to robotics, biotechnology, and agritech, explore the future of technology across all domains.
          </p>
        </div>

        <div className="neon-border-cyan p-8 aspect-square flex items-center justify-center hover-glow">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <span className="text-primary/40 text-center">
              <p className="text-4xl mb-4">🏛️</p>
              <p>Rajarata University</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
