'use client'

export default function Schedule() {
  const events = [
    { day: 'Day 1', date: 'Feb 19', events: ['Opening Ceremony', 'Keynote Talks', 'Workshop Sessions'] },
    { day: 'Day 2', date: 'Feb 20', events: ['Tech Talks', 'Innovation Showcase', 'Competitions'] },
    { day: 'Day 3', date: 'Feb 21', events: ['Final Competitions', 'Awards Ceremony', 'Closing Session'] }
  ]

  return (
    <section id="schedule" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Event Schedule
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((day, idx) => (
            <div key={idx} className="neon-border-blue p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">{day.day}</h3>
              <p className="text-accent mb-4">{day.date}</p>
              <ul className="space-y-3">
                {day.events.map((event, i) => (
                  <li key={i} className="text-foreground/80 text-sm flex items-start gap-3">
                    <span className="text-accent text-lg">•</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
