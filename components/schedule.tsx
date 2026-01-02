'use client'

export default function Schedule() {
  const events = [
    { 
      day: 'Day 1', 
      date: 'March 6, 2026', 
      dayName: 'Friday',
      events: [
        { time: '08:00 AM', title: 'Coming Soon', description: '' },
        { time: '09:00 AM', title: 'Coming Soon', description: '' },
        { time: '10:30 AM', title: 'Coming Soon', description: '' },
        { time: '12:00 PM', title: 'Coming Soon', description: '' },
        { time: '01:00 PM', title: 'Coming Soon', description: '' },
        { time: '02:30 PM', title: 'Coming Soon', description: '' },
        { time: '04:00 PM', title: 'Coming Soon', description: '' },
        { time: '05:30 PM', title: 'Coming Soon', description: '' }
      ]
    },
    { 
      day: 'Day 2', 
      date: 'March 7, 2026',
      dayName: 'Saturday',
      events: [
        { time: '08:30 AM', title: 'Coming Soon', description: '' },
        { time: '09:00 AM', title: 'Coming Soon', description: '' },
        { time: '10:30 AM', title: 'Coming Soon', description: '' },
        { time: '12:00 PM', title: 'Coming Soon', description: '' },
        { time: '01:00 PM', title: 'Coming Soon', description: '' },
        { time: '02:30 PM', title: 'Coming Soon', description: '' },
        { time: '04:00 PM', title: 'Coming Soon', description: '' },
        { time: '06:00 PM', title: 'Coming Soon', description: '' }
      ]
    }
  ]

  return (
    <section id="schedule" className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Event Schedule
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((day, idx) => (
            <div key={idx} className="neon-border-cyan hover-glow transition-all duration-300 hover:scale-105">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 border-b border-primary/30">
                <h3 className="text-3xl font-bold text-primary mb-1">{day.day}</h3>
                <p className="text-accent text-lg font-semibold">{day.dayName}</p>
                <p className="text-foreground/70 text-sm">{day.date}</p>
              </div>
              
              {/* Events List */}
              <div className="p-6 space-y-4">
                {day.events.map((event, i) => (
                  <div key={i} className="group relative pl-6 pb-4 border-l-2 border-primary/30 hover:border-accent transition-colors">
                    {/* Timeline dot */}
                    <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-primary group-hover:bg-accent transition-colors shadow-[0_0_8px_rgba(51,225,255,0.6)] group-hover:shadow-[0_0_12px_rgba(124,255,114,0.8)]"></div>
                    
                    {/* Time badge */}
                    <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2 border border-primary/30">
                      {event.time}
                    </div>
                    
                    {/* Event details */}
                    <h4 className="text-white font-bold text-base mb-1 group-hover:text-accent transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-foreground/60 text-xs leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
