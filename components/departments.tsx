'use client'

export default function Departments() {
  const departments = [
    {
      id: 'ict',
      name: 'ICT',
      fullName: 'Information & Communication Technology',
      description: 'Software development, cybersecurity, and digital innovation',
      color: 'cyan',
      icon: '💻'
    },
    {
      id: 'ent',
      name: 'ENT',
      fullName: 'Electronics & Nanotechnology',
      description: 'Electronics, microprocessors, and nanotechnology advances',
      color: 'cyan',
      icon: '⚡'
    },
    {
      id: 'mtt',
      name: 'MTT',
      fullName: 'Mechanical & Transport Technology',
      description: 'Robotics, automation, and mechanical innovations',
      color: 'green',
      icon: '🔧'
    },
    {
      id: 'bpt',
      name: 'BPT',
      fullName: 'Biosystems & Process Technology',
      description: 'Biotechnology, environmental tech, and bioengineering',
      color: 'cyan',
      icon: '🧬'
    },
    {
      id: 'fdt',
      name: 'FDT',
      fullName: 'Food & Dairy Technology',
      description: 'Food innovation, dairy technology, and agritech solutions',
      color: 'cyan',
      icon: '🍽️'
    }
  ]

  return (
    <section id="departments" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Departments
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {departments.map((dept) => (
            <div key={dept.id} className="neon-border-cyan p-6 hover-glow h-full transition transform hover:scale-105">
              <div className="text-4xl mb-3">{dept.icon}</div>
              <h3 className="text-2xl font-bold text-accent mb-1">{dept.name}</h3>
              <p className="text-sm text-primary font-semibold mb-3">{dept.fullName}</p>
              <p className="text-foreground/70 text-xs line-clamp-2">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
