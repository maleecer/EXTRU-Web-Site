'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, Save } from 'lucide-react'

interface MerchandiseItem {
  id: number
  name: string
  price: number
  description: string
  sizes: string[]
  image: string
}

export default function MerchandiseAdmin() {
  const [items, setItems] = useState<MerchandiseItem[]>([
    {
      id: 1,
      name: 'EXTRU 2026 T-Shirt',
      price: 1200,
      description: 'Premium cotton t-shirt with neon print',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      image: '/merch-tshirt.jpg'
    },
    {
      id: 2,
      name: 'EXTRU Hoodie',
      price: 2500,
      description: 'Warm hoodie with embroidered logo',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      image: '/merch-hoodie.jpg'
    }
  ])

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<MerchandiseItem | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)

  const handleEdit = (item: MerchandiseItem) => {
    setEditingId(item.id)
    setEditForm({ ...item })
  }

  const handleSave = () => {
    if (editForm) {
      setItems(items.map(item => item.id === editForm.id ? editForm : item))
      setEditingId(null)
      setEditForm(null)
    }
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter(item => item.id !== id))
    }
  }

  const handleAddNew = () => {
    const newItem: MerchandiseItem = {
      id: Date.now(),
      name: 'New Item',
      price: 1000,
      description: 'Item description',
      sizes: ['S', 'M', 'L', 'XL'],
      image: '/placeholder.jpg'
    }
    setItems([...items, newItem])
    setShowAddForm(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05232e] via-[#001a33] to-[#05232e]">
      {/* Header */}
      <div className="border-b-2 border-primary/30 bg-[#001a33]/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-orbitron)' }}>
                MERCHANDISE MANAGEMENT
              </h1>
              <p className="text-gray-400 mt-1">Add, edit, and manage merchandise items</p>
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
          Add New Item
        </button>

        {/* Items Grid */}
        <div className="grid gap-6">
          {items.map(item => (
            <div
              key={item.id}
              className="bg-[#001a33]/50 border-2 border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              {editingId === item.id && editForm ? (
                // Edit Mode
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Item Name</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Price (LKR)</label>
                      <input
                        type="number"
                        value={editForm.price}
                        onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
                        className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                      />
                    </div>
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

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Available Sizes (comma separated)</label>
                    <input
                      type="text"
                      value={editForm.sizes.join(', ')}
                      onChange={(e) => setEditForm({ ...editForm, sizes: e.target.value.split(',').map(s => s.trim()) })}
                      className="w-full px-4 py-2 bg-black/30 border-2 border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Image URL</label>
                    <input
                      type="text"
                      value={editForm.image}
                      onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
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
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                      {item.name}
                    </h3>
                    <p className="text-accent text-xl font-bold mb-2">LKR {item.price.toLocaleString()}</p>
                    <p className="text-gray-300 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.sizes.map(size => (
                        <span
                          key={size}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-3">Image: {item.image}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-3 bg-blue-500/20 text-blue-400 border-2 border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-all"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
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
    </div>
  )
}
