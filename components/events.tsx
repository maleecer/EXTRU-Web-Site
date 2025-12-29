'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaChevronRight, FaQrcode, FaFilter, FaThLarge, FaHourglassHalf, FaPlayCircle, FaCheckCircle } from 'react-icons/fa'
import { getEventStatus, getStatusBadgeClasses } from '../lib/date-utils'

interface Event {
  id: string
  title: string
  subtitle?: string
  description: string
  category: string
  date: string
  time: string
  venue: string
  capacity?: string
  image: string
  status?: 'upcoming' | 'ongoing' | 'completed' // Optional - will be auto-calculated from date
  featured?: boolean
}

const events: Event[] = [
  {
    id: '1',
    title: 'Project Documentation Workshop',
    subtitle: 'Workshop',
    description: 'How to Write a Project Report.',
    category: 'ROST',
    date: 'December 28, 2025',
    time: '9:00 AM - 12:00 PM',
    venue: 'L2 Hall',
    capacity: '',
    image: '/Event/rost01.jpg',
    // status will be auto-calculated from date
    featured: true
  }
  // Add more events here
  // Example:
  // {
  //   id: '2',
  //   title: 'Event Title',
  //   subtitle: 'EVENT TYPE',
  //   description: 'Event description',
  //   category: 'ATIT', // Association: ATIT, ASEET, RUBIC, ROST, AMT, AFRU, FOT Media
  //   date: 'Month DD-DD, YYYY',
  //   time: 'HH:MM AM - HH:MM PM',
  //   venue: 'Venue Name',
  //   capacity: '## Participants',
  //   image: '/path/to/image.jpg',
  //   status: 'upcoming', // upcoming, ongoing, completed
  //   featured: false
  // }
]

export default function Events() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const statuses = [
    { value: 'all', label: 'All Events' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'completed', label: 'Completed' }
  ]

  const filteredEvents = events.filter(event => {
    const currentStatus = getEventStatus(event.date)
    const statusMatch = selectedStatus === 'all' || currentStatus === selectedStatus
    return statusMatch
  })

  return (
    <section id="events" className="relative py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Events & Programs
        </h2>
        <div className="h-1 w-32 bg-linear-to-r from-primary to-secondary mx-auto mb-16"></div>

        {/* Status Filter */}
        <div className="mb-12">
          <div className="neon-border-cyan bg-gradient-to-br from-black/60 to-primary/5 backdrop-blur-sm rounded-xl p-6 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/5 to-primary/0"></div>
            
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-accent/30 to-primary/30 rounded-lg flex items-center justify-center border border-accent/40 shadow-lg shadow-accent/20">
                  <FaFilter className="text-accent text-sm" />
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  Filter by Status
                </h3>
              </div>
              <div className="text-xs text-gray-400">
                <span className="text-accent font-bold">{filteredEvents.length}</span> results
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {statuses.map((status) => (
                <button
                  key={status.value}
                  onClick={() => setSelectedStatus(status.value)}
                  className={`relative group px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                    selectedStatus === status.value
                      ? 'bg-gradient-to-r from-accent via-primary to-accent text-white shadow-xl shadow-accent/30 border border-accent/50'
                      : 'bg-black/40 text-gray-400 border border-primary/20 hover:border-primary/40 hover:text-white hover:bg-black/60 hover:shadow-lg hover:shadow-primary/10'
                  }`}
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-sm transition-colors duration-300 ${
                      selectedStatus === status.value ? 'text-white' : 'text-gray-500 group-hover:text-primary'
                    }`}>
                      {status.value === 'all' && <FaThLarge />}
                      {status.value === 'upcoming' && <FaHourglassHalf />}
                      {status.value === 'ongoing' && <FaPlayCircle />}
                      {status.value === 'completed' && <FaCheckCircle />}
                    </span>
                    <span className="uppercase tracking-wide">{status.label}</span>
                  </div>
                  
                  {/* Active Indicator */}
                  {selectedStatus === status.value && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            const currentStatus = getEventStatus(event.date);
            
            return (
            <div key={event.id} className="neon-border-cyan group relative overflow-hidden rounded-lg bg-gradient-to-br from-black/60 to-primary/5 backdrop-blur-sm hover-glow transition transform hover:scale-105 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/5 to-primary/0 group-hover:via-accent/10 transition-all duration-700"></div>
              
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-lg bg-black/40">
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent z-10"></div>
                <Image 
                  src={event.image} 
                  alt={event.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/Extru-2025/1.jpg';
                  }}
                />
                {/* Status Badge - Auto-calculated */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full backdrop-blur-sm font-bold text-xs uppercase tracking-wider border-2 shadow-lg ${getStatusBadgeClasses(currentStatus)}`}>
                    {currentStatus}
                  </div>
                </div>
                {/* Category */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/50 shadow-lg shadow-primary/30">
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
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <FaCalendarAlt className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase">Date</p>
                      <p className="text-white font-semibold text-sm">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-secondary/20">
                      <FaMapMarkerAlt className="text-secondary text-sm" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase">Venue</p>
                      <p className="text-white font-semibold text-sm line-clamp-1">{event.venue}</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  disabled
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 text-gray-400 font-bold transition uppercase tracking-wider relative overflow-hidden text-xs border-2 border-gray-700/50 rounded cursor-not-allowed" 
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                  title="No registration required for this event"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    No Registration Needed
                    <FaChevronRight className="text-xs" />
                  </span>
                </button>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
