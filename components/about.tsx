'use client'

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-orbitron)' }}>
            About EXTRU 2026
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Sri Lanka's Premier Technology Exhibition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-white text-lg leading-relaxed">
              EXTRU 2026 is Sri Lanka's premier technology exhibition, bringing together <span className="text-primary font-semibold">innovators</span>, <span className="text-primary font-semibold">developers</span>, and <span className="text-primary font-semibold">tech enthusiasts</span> from across the nation. Experience cutting-edge technologies, participate in hands-on workshops, and network with industry leaders in the field of technology and innovation.
            </p>
            
            <p className="text-white text-lg leading-relaxed">
              Hosted at the <span className="text-accent font-semibold">Technology Faculty Premises of Rajarata University of Sri Lanka</span> from <span className="text-accent font-semibold">February 19-21, 2026</span>, EXTRU features contributions from five dynamic departments: ICT, Electronics & Nanotechnology, Mechanical & Transport Technology, Biosystems & Process Technology, and Food & Dairy Technology.
            </p>

            <p className="text-white text-lg leading-relaxed">
              From <span className="text-secondary">AI and machine learning</span> to <span className="text-secondary">robotics</span>, <span className="text-secondary">biotechnology</span>, and <span className="text-secondary">agritech</span>, explore the future of technology across all domains.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-3xl font-bold text-primary mb-1">3</p>
                <p className="text-sm text-gray-400">Days</p>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/30">
                <p className="text-3xl font-bold text-accent mb-1">50+</p>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                <p className="text-3xl font-bold text-secondary mb-1">2000+</p>
                <p className="text-sm text-gray-400">Visitors</p>
              </div>
            </div>
          </div>

          <div className="neon-border-cyan p-8 hover-glow">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 flex items-center justify-center rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-6">🏛️</div>
                <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  Rajarata University
                </h3>
                <p className="text-accent text-sm font-semibold">Faculty of Technology</p>
                <p className="text-gray-400 text-sm mt-4">Mihintale, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
