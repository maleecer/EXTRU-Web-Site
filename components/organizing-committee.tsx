'use client'

export default function OrganizingCommittee() {
  const members = [
    { id: 1, number: '1' },
    { id: 2, number: '2' },
    { id: 3, number: '3' },
    { id: 4, number: '4' },
    { id: 5, number: '5' },
    { id: 6, number: '6' }
  ]

  return (
    <section id="committee" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Organizing Committee
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-6 gap-6">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="neon-border-cyan w-32 h-40 flex items-center justify-center mb-4 hover-glow">
                <div className="text-6xl text-primary/40">
                  👤
                </div>
              </div>
              <p className="text-center text-accent font-bold text-lg">Member {member.number}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
