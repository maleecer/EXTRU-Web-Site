'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaArrowRight, FaQrcode, FaChevronRight } from 'react-icons/fa'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import AnimatedGrid from '@/components/animated-grid'

interface Event {
  id: string
  title: string
  subtitle?: string
  description: string
  category: string
  date: string
  time: string
  location: string
  venue: string
  capacity?: string
  image: string
  registrationLink?: string
  status: 'upcoming' | 'ongoing' | 'completed'
  featured?: boolean
  organizer?: string
}

const events: Event[] = [
  {
    id: '1',
    title: 'Analyzing Civil Engineering Aspects of Catastrophic Historical Disasters',
    subtitle: 'CIVIL ENGINEERING BOOT CAMP',
    description: 'Visit FMAQ ART FORUM - The miraculous opportunity of course in civil learning on analyzing Civil Engineering Aspects of Catastrophic Historical Disasters.',
    category: 'Civil Engineering',
    date: 'EXMO 2023',
    time: '9:00 AM - 5:00 PM',
    location: 'Technology Faculty',
    venue: 'Main Auditorium, RUSL',
    capacity: '200 Students',
    image: '/events/civil-bootcamp.jpg',
    registrationLink: '#',
    status: 'completed',
    featured: true,
    organizer: 'Department of Civil Engineering'
  },
  {
    id: '2',
    title: 'EXTRU 2026 - Annual Technology Exhibition',
    subtitle: 'TECHNOLOGY SHOWCASE',
    description: 'The biggest technology exhibition of the year featuring innovative projects, workshops, and demonstrations from all departments of the Faculty of Technology.',
    category: 'Exhibition',
    date: 'March 6-7, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'Technology Faculty',
    venue: 'Faculty of Technology Premises',
    capacity: '5000+ Visitors',
    image: '/Extru-2025/1.jpg',
    registrationLink: '#',
    status: 'upcoming',
    featured: true,
    organizer: 'Faculty of Technology'
  },
  {
    id: '3',
    title: 'Robotics Workshop 2026',
    subtitle: 'HANDS-ON WORKSHOP',
    description: 'Learn the fundamentals of robotics, automation, and AI. Build your own robot and participate in exciting challenges.',
    category: 'Mechatronics',
    date: 'January 15-16, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Technology Faculty',
    venue: 'Mechatronics Lab',
    capacity: '50 Participants',
    image: '/events/robotics.jpg',
    registrationLink: '#',
    status: 'upcoming',
    organizer: 'Department of Mechatronics'
  },
  {
    id: '4',
    title: 'Web Development Bootcamp',
    subtitle: 'CODING BOOTCAMP',
    description: 'Intensive 3-day bootcamp covering modern web technologies including React, Next.js, and Node.js. Build real-world projects.',
    category: 'Information Technology',
    date: 'January 20-22, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Technology Faculty',
    venue: 'IT Lab Complex',
    capacity: '100 Participants',
    image: '/events/webdev.jpg',
    registrationLink: '#',
    status: 'upcoming',
    organizer: 'Department of IT'
  },
  {
    id: '5',
    title: 'Sustainable Engineering Symposium',
    subtitle: 'RESEARCH SYMPOSIUM',
    description: 'International symposium on sustainable engineering practices, renewable energy, and green technology innovations.',
    category: 'Engineering',
    date: 'February 5-6, 2026',
    time: '8:00 AM - 6:00 PM',
    location: 'Technology Faculty',
    venue: 'Main Conference Hall',
    capacity: '300 Attendees',
    image: '/events/symposium.jpg',
    registrationLink: '#',
    status: 'upcoming',
    organizer: 'Faculty of Technology'
  },
  {
    id: '6',
    title: 'AI & Machine Learning Hackathon',
    subtitle: '24-HOUR HACKATHON',
    description: 'Compete in teams to solve real-world problems using AI and Machine Learning. Amazing prizes and networking opportunities.',
    category: 'Information Technology',
    date: 'February 10-11, 2026',
    time: '24 Hours',
    location: 'Technology Faculty',
    venue: 'Innovation Hub',
    capacity: '150 Participants',
    image: '/events/hackathon.jpg',
    registrationLink: '#',
    status: 'upcoming',
    organizer: 'Tech Innovation Club'
  }
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(events.map(e => e.category)))]
  const statuses = [
    { value: 'all', label: 'All Events' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'completed', label: 'Past Events' }
  ]

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory
    const statusMatch = selectedStatus === 'all' || event.status === selectedStatus
    return categoryMatch && statusMatch
  })

  const featuredEvent = events.find(e => e.featured && e.status === 'upcoming')

  return (
    <main className="min-h-screen bg-transparent text-foreground flex flex-col items-center relative overflow-hidden">
      <AnimatedGrid />
      <Navbar />
      
      <div className="w-full relative z-10 pt-20">
        {/* Hero Section */}
        <div className="w-full py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block relative mb-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Events & Programs
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-40 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover exciting events, workshops, and programs at EXTRU 2026.
              
            </p>
          </div>
        </div>

        {/* Featured Event - Large Card */}
        {featuredEvent && (
          <div className="w-full px-4 md:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Featured Event
              </h2>
              <div className="neon-border group relative overflow-hidden bg-gradient-to-br from-black/60 to-primary/10 backdrop-blur-sm hover-glow transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-secondary/10 transition-all duration-700"></div>
                <div className="grid md:grid-cols-2 gap-0 relative z-10">
                  {/* Image Section */}
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10"></div>
                    <Image 
                      src={featuredEvent.image} 
                      alt={featuredEvent.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/Extru-2025/1.jpg';
                      }}
                    />
                    {/* Status Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-accent shadow-xl shadow-accent/50">
                        <span className="text-white font-bold text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-orbitron)' }}>
                          {featuredEvent.status}
                        </span>
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-20 left-6 z-20">
                      <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/50">
                        <span className="text-white font-semibold text-xs uppercase">
                          {featuredEvent.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      {featuredEvent.subtitle && (
                        <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 border-l-4 border-primary px-4 py-2 mb-4">
                          <span className="text-primary font-bold text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-orbitron)' }}>
                            {featuredEvent.subtitle}
                          </span>
                        </div>
                      )}
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-orbitron)' }}>
                        {featuredEvent.title}
                      </h3>
                      <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                        {featuredEvent.description}
                      </p>

                      {/* Event Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                            <FaCalendarAlt className="text-primary" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Date</p>
                            <p className="text-white font-semibold">{featuredEvent.date}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-accent/20">
                            <FaClock className="text-accent" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Time</p>
                            <p className="text-white font-semibold">{featuredEvent.time}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-secondary/20">
                            <FaMapMarkerAlt className="text-secondary" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Venue</p>
                            <p className="text-white font-semibold">{featuredEvent.venue}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                            <FaUsers className="text-purple-400" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Capacity</p>
                            <p className="text-white font-semibold">{featuredEvent.capacity}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="neon-border-green flex-1 px-8 py-4 bg-gradient-to-r from-accent/20 to-accent/10 text-accent font-bold hover-glow transition uppercase tracking-wider group/btn relative overflow-hidden" style={{ fontFamily: 'var(--font-orbitron)' }}>
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          Register Now
                          <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-accent/0 group-hover/btn:bg-accent/10 transition-all duration-300"></div>
                      </button>
                      <button className="neon-border px-8 py-4 bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-bold hover-glow transition uppercase tracking-wider group/btn relative overflow-hidden" style={{ fontFamily: 'var(--font-orbitron)' }}>
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          <FaQrcode />
                          QR Code
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters Section */}
        <div className="w-full px-4 md:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="neon-border p-6 bg-black/40 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="text-primary font-bold text-sm uppercase tracking-wider mb-3 block" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Filter by Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                          selectedCategory === cat
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/50 scale-105'
                            : 'bg-black/50 text-gray-400 border border-gray-700 hover:border-primary hover:text-primary'
                        }`}
                      >
                        {cat === 'all' ? 'All Categories' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="text-accent font-bold text-sm uppercase tracking-wider mb-3 block" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Filter by Status
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {statuses.map((status) => (
                      <button
                        key={status.value}
                        onClick={() => setSelectedStatus(status.value)}
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                          selectedStatus === status.value
                            ? 'bg-gradient-to-r from-accent to-secondary text-white shadow-lg shadow-accent/50 scale-105'
                            : 'bg-black/50 text-gray-400 border border-gray-700 hover:border-accent hover:text-accent'
                        }`}
                      >
                        {status.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="w-full px-4 md:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              {selectedStatus === 'all' ? 'All Events' : statuses.find(s => s.value === selectedStatus)?.label}
              <span className="text-gray-500 text-xl ml-2">({filteredEvents.length})</span>
            </h2>

            {filteredEvents.length === 0 ? (
              <div className="neon-border p-16 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCalendarAlt className="text-4xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-400 mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  No Events Found
                </h3>
                <p className="text-gray-500">Try adjusting your filters to see more events.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="neon-border group relative overflow-hidden bg-gradient-to-br from-black/60 to-primary/5 backdrop-blur-sm hover-glow transition-all duration-500 flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/5 to-primary/0 group-hover:via-accent/10 transition-all duration-700"></div>
                    
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent z-10"></div>
                      <Image 
                        src={event.image} 
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/Extru-2025/1.jpg';
                        }}
                      />
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className={`px-3 py-1 rounded-full backdrop-blur-sm font-bold text-xs uppercase tracking-wider border-2 shadow-lg ${
                          event.status === 'upcoming' ? 'bg-accent/90 border-accent text-white' :
                          event.status === 'ongoing' ? 'bg-green-500/90 border-green-400 text-white' :
                          'bg-gray-600/90 border-gray-500 text-gray-200'
                        }`}>
                          {event.status}
                        </div>
                      </div>
                      {/* Category */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/50">
                          <span className="text-white font-semibold text-xs">{event.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col relative z-10">
                      {event.subtitle && (
                        <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 border-l-4 border-primary px-3 py-1 mb-3 self-start">
                          <span className="text-primary font-bold text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-orbitron)' }}>
                            {event.subtitle}
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                        {event.description}
                      </p>

                      {/* Event Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FaCalendarAlt className="text-primary text-sm" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs uppercase">Date</p>
                            <p className="text-white font-semibold text-sm">{event.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FaMapMarkerAlt className="text-secondary text-sm" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs uppercase">Venue</p>
                            <p className="text-white font-semibold text-sm">{event.venue}</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full neon-border-green px-6 py-3 bg-gradient-to-r from-accent/20 to-accent/10 text-accent font-bold hover-glow transition uppercase tracking-wider group/btn relative overflow-hidden text-sm" style={{ fontFamily: 'var(--font-orbitron)' }}>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          View Details
                          <FaChevronRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-accent/0 group-hover/btn:bg-accent/10 transition-all duration-300"></div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
