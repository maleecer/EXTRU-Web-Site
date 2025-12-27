'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaChevronRight, FaQrcode } from 'react-icons/fa'

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
  status: 'upcoming' | 'ongoing' | 'completed'
  featured?: boolean
}

const events: Event[] = [
  {
    id: '1',
    title: 'Project Documentation Workshop',
    subtitle: 'Workshop',
    description: 'How to Write a Project Report.',
    category: 'ROST',
    date: 'December 28, 2026',
    time: '9:00 AM - 12:00 PM',
    venue: '',
    capacity: '',
    image: '/Event/rost01.jpg',
    status: 'upcoming',
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
  return (
    <section id="events" className="relative py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Events & Programs
        </h2>
        <div className="h-1 w-32 bg-linear-to-r from-primary to-secondary mx-auto mb-16"></div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="neon-border-cyan group relative overflow-hidden rounded-lg bg-gradient-to-br from-black/60 to-primary/5 backdrop-blur-sm hover-glow transition transform hover:scale-105 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/5 to-primary/0 group-hover:via-accent/10 transition-all duration-700"></div>
              
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-lg">
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
                    event.status === 'upcoming' ? 'bg-accent/90 border-accent text-white shadow-accent/50' :
                    event.status === 'ongoing' ? 'bg-green-500/90 border-green-400 text-white shadow-green-500/50' :
                    'bg-gray-600/90 border-gray-500 text-gray-200 shadow-gray-600/50'
                  }`}>
                    {event.status}
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
                <button className="neon-border-green w-full px-4 py-3 bg-gradient-to-r from-accent/20 to-accent/10 text-accent font-bold hover-glow transition uppercase tracking-wider group/btn relative overflow-hidden text-xs" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Register
                    <FaChevronRight className="group-hover/btn:translate-x-1 transition-transform duration-300 text-xs" />
                  </span>
                  <div className="absolute inset-0 bg-accent/0 group-hover/btn:bg-accent/10 transition-all duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
