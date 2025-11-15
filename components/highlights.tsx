'use client'

export default function Highlights() {
  const highlights = [
    { title: 'Workshops', icon: '🛠️', description: 'Hands-on technical workshops' },
    { title: 'Tech Talks', icon: '🎤', description: 'Expert presentations & insights' },
    { title: 'Innovation Showcase', icon: '💡', description: 'Cutting-edge tech displays' },
    { title: 'Competitions', icon: '🏆', description: 'Hackathons & coding challenges' }
  ]

  return (
    <section id="highlights" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Event Highlights
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="neon-border-cyan p-6 hover-glow group">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-accent mb-2">{item.title}</h3>
              <p className="text-foreground/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
