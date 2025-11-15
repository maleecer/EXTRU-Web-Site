'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ShoppingBag, 
  Award, 
  FolderKanban, 
  Calendar,
  ArrowLeft,
  LogOut
} from 'lucide-react'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - in production, use proper authentication
    if (password === 'extru2026admin') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid password')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#05232e] via-[#001a33] to-[#05232e] flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-[#001a33] border-2 border-primary/30 rounded-lg p-8 shadow-[0_0_30px_rgba(51,225,255,0.3)]">
            <h1 className="text-3xl font-bold text-primary text-center mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              EXTRU 2026
            </h1>
            <p className="text-center text-gray-400 mb-8">Admin Dashboard</p>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              
              <button
                type="submit"
                className="w-full py-3 bg-primary text-black font-bold rounded-lg hover:bg-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,255,114,0.6)]"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                LOGIN
              </button>
            </form>
            
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 mt-6 text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const dashboardCards = [
    {
      title: 'Merchandise',
      description: 'Manage merchandise items, prices, and pre-orders',
      icon: ShoppingBag,
      href: '/admin/merchandise',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/50',
      iconColor: 'text-cyan-400'
    },
    {
      title: 'Sponsors',
      description: 'Update sponsor information and logos',
      icon: Award,
      href: '/admin/sponsors',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/50',
      iconColor: 'text-purple-400'
    },
    {
      title: 'Featured Projects',
      description: 'Add and edit project showcases',
      icon: FolderKanban,
      href: '/admin/projects',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/50',
      iconColor: 'text-green-400'
    },
    {
      title: 'Event Schedule',
      description: 'Manage event dates, times, and details',
      icon: Calendar,
      href: '/admin/schedule',
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/50',
      iconColor: 'text-orange-400'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05232e] via-[#001a33] to-[#05232e]">
      {/* Header */}
      <div className="border-b-2 border-primary/30 bg-[#001a33]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-orbitron)' }}>
                ADMIN DASHBOARD
              </h1>
              <p className="text-gray-400 mt-1">Manage EXTRU 2026 Content</p>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-primary hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Home
              </Link>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 border-2 border-red-500/50 rounded-lg hover:bg-red-500/30 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {dashboardCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className={`group relative bg-gradient-to-br ${card.color} border-2 ${card.borderColor} rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(51,225,255,0.4)]`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 bg-black/30 rounded-lg ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow indicator */}
              <div className="absolute bottom-4 right-4 text-white/50 group-hover:text-accent group-hover:translate-x-2 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#001a33]/50 border-2 border-primary/20 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">8</p>
            <p className="text-gray-400 text-sm">Merchandise Items</p>
          </div>
          <div className="bg-[#001a33]/50 border-2 border-primary/20 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-accent mb-2">12</p>
            <p className="text-gray-400 text-sm">Active Sponsors</p>
          </div>
          <div className="bg-[#001a33]/50 border-2 border-primary/20 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-purple-400 mb-2">15</p>
            <p className="text-gray-400 text-sm">Featured Projects</p>
          </div>
          <div className="bg-[#001a33]/50 border-2 border-primary/20 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-orange-400 mb-2">12</p>
            <p className="text-gray-400 text-sm">Schedule Events</p>
          </div>
        </div>
      </div>
    </div>
  )
}
