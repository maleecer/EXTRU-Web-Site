'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, Save } from 'lucide-react'

interface Sponsor {
  id: number
  name: string
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze'
  logo: string
  website: string
  description: string
}

export default function SponsorsAdmin() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([
    {
      id: 1,
      name: 'Tech Corp',
      tier: 'Platinum',
      logo: '/sponsors/tech-corp.png',
      website: 'https://techcorp.com',
      description: 'Leading technology solutions provider'
    },
    {
      id: 2,
      name: 'Innovation Labs',
      tier: 'Gold',
      logo: '/sponsors/innovation-labs.png',
      website: 'https://innovationlabs.com',
      description: 'Research and development excellence'
    },
    {
      id: 3,
      name: 'Digital Solutions',
      tier: 'Silver',
      logo: '/sponsors/digital-solutions.png',
      website: 'https://digitalsolutions.com',
      description: 'Digital transformation experts'
    }
  ])

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Sponsor | null>(null)
  const [isAddMode, setIsAddMode] = useState(false)

  const handleEdit = (sponsor: Sponsor) => {
    setEditingId(sponsor.id)
    setEditForm({ ...sponsor })
    setIsAddMode(false)
  }

  const handleSave = () => {
    if (editForm) {
      if (isAddMode) {
        setSponsors([...sponsors, editForm])
      } else {
        setSponsors(sponsors.map(s => s.id === editForm.id ? editForm : s))
      }
      setEditingId(null)
      setEditForm(null)
      setIsAddMode(false)
    }
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this sponsor?')) {
      setSponsors(sponsors.filter(s => s.id !== id))
    }
  }

  const handleAddNew = () => {
    const newSponsor: Sponsor = {
      id: Date.now(),
      name: 'New Sponsor',
      tier: 'Bronze',
      logo: '/placeholder.png',
      website: 'https://example.com',
      description: 'Sponsor description'
    }
    setEditForm(newSponsor)
    setEditingId(newSponsor.id)
    setIsAddMode(true)
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditForm(null)
    setIsAddMode(false)
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'from-slate-200 to-slate-400'
      case 'Gold': return 'from-yellow-300 to-yellow-600'
      case 'Silver': return 'from-gray-300 to-gray-500'
      case 'Bronze': return 'from-orange-400 to-orange-700'
      default: return 'from-gray-400 to-gray-600'
    }
  }

  const getTierBorder = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'border-slate-400'
      case 'Gold': return 'border-yellow-500'
      case 'Silver': return 'border-gray-400'
      case 'Bronze': return 'border-orange-500'
      default: return 'border-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05232e] via-[#001a33] to-[#05232e]">
      {/* Header */}
      <div className="border-b-2 border-primary/30 bg-[#001a33]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-orbitron)' }}>
                SPONSORS MANAGEMENT
              </h1>
              <p className="text-gray-400 mt-1">Manage sponsor information and tiers</p>
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
          Add New Sponsor
        </button>

        {/* Sponsors by Tier */}
        {['Platinum', 'Gold', 'Silver', 'Bronze'].map(tier => {
          const tierSponsors = sponsors.filter(s => s.tier === tier)
          if (tierSponsors.length === 0) return null

          return (
            <div key={tier} className="mb-12">
              <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${getTierColor(tier)} bg-clip-text text-transparent`} style={{ fontFamily: 'var(--font-orbitron)' }}>
                {tier} Sponsors
              </h2>
              <div className="grid gap-6">
                {tierSponsors.map(sponsor => (
                  <div
                    key={sponsor.id}
                    className={`bg-[#001a33]/50 border-2 ${getTierBorder(sponsor.tier)} rounded-xl p-6 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🏢</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-orbitron)' }}>
                              {sponsor.name}
                            </h3>
                            <p className={`text-sm font-bold bg-gradient-to-r ${getTierColor(sponsor.tier)} bg-clip-text text-transparent`}>
                              {sponsor.tier} Tier
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-2">{sponsor.description}</p>
                        <a 
                          href={sponsor.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors text-sm"
                        >
                          {sponsor.website}
                        </a>
                        <p className="text-gray-500 text-sm mt-2">Logo: {sponsor.logo}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(sponsor)}
                          className="p-3 bg-blue-500/20 text-blue-400 border-2 border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-all"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(sponsor.id)}
                          className="p-3 bg-red-500/20 text-red-400 border-2 border-red-500/50 rounded-lg hover:bg-red-500/30 transition-all"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Add/Edit Popup Modal */}
        {editForm && (isAddMode || editingId) && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={handleCancel}>
            <div className="bg-[#001a33] border-2 border-primary/50 rounded-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(51,225,255,0.5)]" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-orbitron)' }}>
                {isAddMode ? 'ADD NEW SPONSOR' : 'EDIT SPONSOR'}
              </h2>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Sponsor Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Tier</label>
                    <select
                      value={editForm.tier}
                      onChange={(e) => setEditForm({ ...editForm, tier: e.target.value as Sponsor['tier'] })}
                      className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                    >
                      <option value="Platinum">Platinum</option>
                      <option value="Gold">Gold</option>
                      <option value="Silver">Silver</option>
                      <option value="Bronze">Bronze</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Logo URL</label>
                  <input
                    type="text"
                    value={editForm.logo}
                    onChange={(e) => setEditForm({ ...editForm, logo: e.target.value })}
                    className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Website</label>
                  <input
                    type="url"
                    value={editForm.website}
                    onChange={(e) => setEditForm({ ...editForm, website: e.target.value })}
                    className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Description</label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 bg-accent text-black font-bold rounded-lg hover:bg-accent/80 transition-all hover:shadow-[0_0_20px_rgba(124,255,114,0.6)]"
                    style={{ fontFamily: 'var(--font-orbitron)' }}
                  >
                    <Save className="w-5 h-5" />
                    {isAddMode ? 'ADD SPONSOR' : 'SAVE CHANGES'}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-6 py-3 bg-red-500/20 text-red-400 border-2 border-red-500/50 font-bold rounded-lg hover:bg-red-500/30 transition-all"
                    style={{ fontFamily: 'var(--font-orbitron)' }}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
