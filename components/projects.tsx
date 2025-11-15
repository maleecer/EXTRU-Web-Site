'use client'

export default function Projects() {
  const projects = [
    { id: 1, title: 'AI Project 1', category: 'Artificial Intelligence' },
    { id: 2, title: 'Blockchain App', category: 'Web3' },
    { id: 3, title: 'IoT Solution', category: 'Internet of Things' },
    { id: 4, title: 'ML Framework', category: 'Machine Learning' },
    { id: 5, title: 'Cloud Platform', category: 'Cloud Computing' },
    { id: 6, title: 'Cyber Security', category: 'Security' }
  ]

  return (
    <section id="projects" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Featured Projects
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="neon-border group hover-glow p-6 cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded mb-4"></div>
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-accent text-sm mb-4">{project.category}</p>
              <button className="text-primary hover:text-accent transition text-sm font-semibold">
                View More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
