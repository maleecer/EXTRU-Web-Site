'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, Save } from 'lucide-react'

interface ScheduleEvent {
  id: number
  day: number
  date: string
  dayName: string
  time: string
  title: string
  description: string
}

export default function ScheduleAdmin() {
  const [events, setEvents] = useState<ScheduleEvent[]>([
    {
      id: 1,
      day: 1,
      date: '15th March',
      dayName: 'Friday',
      time: '9:00 AM',
      title: 'Opening Ceremony',
      description: 'Grand opening with keynote speeches'
    },
    {
      id: 2,
      day: 1,
      date: '15th March',
      dayName: 'Friday',
      time: '11:00 AM',
      title: 'Tech Expo Opens',
      description: 'Explore innovative projects and demos'
    },
    {
      id: 3,
      day: 1,
      date: '15th March',
      dayName: 'Friday',
      time: '2:00 PM',
      title: 'Workshop Session 1',
      description: 'Hands-on tech workshops begin'
    },
    {
      id: 4,
      day: 1,
      date: '15th March',
      dayName: 'Friday',
      time: '5:00 PM',
      title: 'Day 1 Networking',
      description: 'Meet industry professionals'
    },
    {
      id: 5,
      day: 2,
      date: '16th March',
      dayName: 'Saturday',
      time: '9:00 AM',
      title: 'Hackathon Begins',
      description: '24-hour coding challenge starts'
    },
    {
      id: 6,
      day: 2,
      date: '16th March',
      dayName: 'Saturday',
      time: '11:00 AM',
      title: 'Guest Lecture',
      description: 'Industry expert keynote session'
    },
    {
      id: 7,
      day: 2,
      date: '16th March',
      dayName: 'Saturday',
      time: '2:00 PM',
      title: 'Project Presentations',
      description: 'Student teams present their work'
    },
    {
      id: 8,
      day: 2,
      date: '16th March',
      dayName: 'Saturday',
      time: '6:00 PM',
      title: 'Cultural Night',
      description: 'Music, dance, and entertainment'
    },
    {
      id: 9,
      day: 3,
      date: '17th March',
      dayName: 'Sunday',
      time: '9:00 AM',
      title: 'Final Judging',
      description: 'Project evaluation and scoring'
    },
    {
      id: 10,
      day: 3,
      date: '17th March',
      dayName: 'Sunday',
      time: '11:00 AM',
      title: 'Panel Discussion',
      description: 'Industry trends and future tech'
    },
    {
      id: 11,
      day: 3,
      date: '17th March',
      dayName: 'Sunday',
      time: '3:00 PM',
      title: 'Award Ceremony',
      description: 'Winners announced and prizes'
    },
    {
      id: 12,
      day: 3,
      date: '17th March',
      dayName: 'Sunday',
      time: '5:00 PM',
      title: 'Closing Ceremony',
      description: 'Farewell and EXTRU 2026 wrap-up'
    }
  ])

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<ScheduleEvent | null>(null)

  const handleEdit = (event: ScheduleEvent) => {
    setEditingId(event.id)
    setEditForm({ ...event })
  }

  const handleSave = () => {
    if (editForm) {
      setEvents(events.map(e => e.id === editForm.id ? editForm : e))
      setEditingId(null)
      setEditForm(null)
    }
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(e => e.id !== id))
    }
  }

  const handleAddNew = () => {
    const newEvent: ScheduleEvent = {
      id: Date.now(),
      day: 1,
      date: '15th March',
      dayName: 'Friday',
      time: '10:00 AM',
      title: 'New Event',
      description: 'Event description'
    }
    setEvents([...events, newEvent])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05232e] via-[#001a33] to-[#05232e]">
      {/* Header */}
      <div className="border-b-2 border-primary/30 bg-[#001a33]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-orbitron)' }}>
                SCHEDULE MANAGEMENT
              </h1>
              <p className="text-gray-400 mt-1">Manage event schedule and timings</p>
            </div>
            <Link 
              href="/admin"
              className="flex items-center gap-2 px-4 py-2 text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add New Button */}
        <button
          onClick={handleAddNew}
          className="mb-8 flex items-center gap-2 px-6 py-3 bg-accent text-black font-bold rounded-lg hover:bg-accent/80 transition-all hover:shadow-[0_0_20px_rgba(124,255,114,0.6)]"
          style={{ fontFamily: 'var(--font-orbitron)' }}
        >
          <Plus className="w-5 h-5" />
          Add New Event
        </button>

        {/* Events by Day */}
        {[1, 2, 3].map(day => {
          const dayEvents = events.filter(e => e.day === day)
          if (dayEvents.length === 0) return null

          const dayInfo = dayEvents[0]

          return (
            <div key={day} className="mb-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  DAY {day}
                </h2>
                <p className="text-xl text-accent">{dayInfo.date} • {dayInfo.dayName}</p>
              </div>
              
              <div className="space-y-4">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    className="bg-[#001a33]/50 border-2 border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-all"
                  >
                    {editingId === event.id && editForm ? (
                      // Edit Mode
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">Day</label>
                            <select
                              value={editForm.day}
                              onChange={(e) => setEditForm({ ...editForm, day: Number(e.target.value) })}
                              className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                            >
                              <option value={1}>Day 1</option>
                              <option value={2}>Day 2</option>
                              <option value={3}>Day 3</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">Date</label>
                            <input
                              type="text"
                              value={editForm.date}
                              onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                              className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">Day Name</label>
                            <input
                              type="text"
                              value={editForm.dayName}
                              onChange={(e) => setEditForm({ ...editForm, dayName: e.target.value })}
                              className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">Time</label>
                            <input
                              type="text"
                              value={editForm.time}
                              onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                              className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">Event Title</label>
                            <input
                              type="text"
                              value={editForm.title}
                              onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                              className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">Description</label>
                          <textarea
                            value={editForm.description}
                            onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                            rows={2}
                            className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                          />
                        </div>

                        <div className="flex gap-4 pt-4">
                          <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-6 py-2 bg-accent text-black font-bold rounded-lg hover:bg-accent/80 transition-all"
                          >
                            <Save className="w-4 h-4" />
                            Save Changes
                          </button>
                          <button
                            onClick={() => {
                              setEditingId(null)
                              setEditForm(null)
                            }}
                            className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-all"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      // View Mode
                      <div className="flex items-start justify-between">
                        <div className="flex gap-6 flex-1">
                          <div className="text-center min-w-[100px]">
                            <div className="bg-primary/10 border-2 border-primary/30 rounded-lg px-4 py-2">
                              <p className="text-primary font-bold text-lg">{event.time}</p>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-orbitron)' }}>
                              {event.title}
                            </h3>
                            <p className="text-gray-300">{event.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEdit(event)}
                            className="p-3 bg-blue-500/20 text-blue-400 border-2 border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-all"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(event.id)}
                            className="p-3 bg-red-500/20 text-red-400 border-2 border-red-500/50 rounded-lg hover:bg-red-500/30 transition-all"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
