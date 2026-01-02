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
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-white text-lg leading-relaxed">
              <span className="text-primary font-bold text-xl">EXTRU 2026</span> is the <span className="text-primary font-semibold">third edition</span> of the Faculty of Technology's prestigious <span className="text-accent font-semibold">Innovation and Technology Exhibition</span>, proudly organized by the <span className="text-accent font-semibold">Faculty of Technology, Rajarata University of Sri Lanka</span>.
            </p>
            
            <p className="text-white text-lg leading-relaxed">
              Following the great success of <span className="text-primary font-semibold">EXTRU 2024</span> and <span className="text-primary font-semibold">EXTRU 2025</span>, the exhibition returns in <span className="text-accent font-semibold">March 2026</span>, featuring <span className="text-secondary">new ideas</span>, <span className="text-secondary">modern innovations</span>, and <span className="text-secondary">national-level collaborations</span>.
            </p>

            <p className="text-white text-lg leading-relaxed">
              The exhibition aims to showcase the <span className="text-primary font-semibold">creativity</span>, <span className="text-primary font-semibold">talent</span>, and <span className="text-primary font-semibold">practical knowledge</span> of both undergraduate and postgraduate students. It will bring together <span className="text-accent">industries</span>, <span className="text-accent">academics</span>, <span className="text-accent">schools</span>, and <span className="text-accent">government organizations</span> to exchange ideas, share expertise, and inspire future innovation.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-3xl font-bold text-primary mb-1">2</p>
                <p className="text-sm text-gray-400">Days</p>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/30">
                <p className="text-3xl font-bold text-accent mb-1">200+</p>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                <p className="text-3xl font-bold text-secondary mb-1">7000+</p>
                <p className="text-sm text-gray-400">Visitors</p>
              </div>
            </div>
          </div>

          <div className="neon-border-cyan p-8 hover-glow">
            <div
              className="w-full aspect-square flex items-center justify-center rounded-lg relative overflow-hidden bg-center bg-cover"
              style={{ backgroundImage: "url('/faculty-pic.png')" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-black/40 via-black/20 to-black/40"></div>
              <div className="relative z-10 text-center">
                {/* <div className="text-6xl mb-6">🏛️</div> */}
                {/* <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  Rajarata University
                </h3>
                <p className="text-accent text-sm font-semibold">Faculty of Technology</p>
                <p className="text-gray-400 text-sm mt-4">Mihintale, Sri Lanka</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
