'use client'

import { useState } from 'react'

interface PreOrderModalProps {
  isOpen: boolean
  onClose: () => void
  itemName: string
  itemPrice: string
}

export default function PreOrderModal({ isOpen, onClose, itemName, itemPrice }: PreOrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    registerNumber: '',
    size: 'M',
    quantity: 1
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Pre-order submitted:', { ...formData, item: itemName, price: itemPrice })
    alert('Pre-order submitted successfully! We will contact you soon.')
    onClose()
    setFormData({
      name: '',
      email: '',
      phone: '',
      registerNumber: '',
      size: 'M',
      quantity: 1
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative bg-black border-2 border-primary/40 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
        style={{
          boxShadow: '0 0 30px rgba(51, 225, 255, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black border-b border-primary/30 p-6 pb-4">
          <h2 className="text-2xl font-bold text-primary mb-2" style={{
            textShadow: '0 0 20px rgba(51, 225, 255, 0.6)'
          }}>
            Pre-Order {itemName}
          </h2>
          <p className="text-secondary text-lg font-semibold">{itemPrice}</p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-primary/60 hover:text-primary transition text-2xl"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-primary/30 rounded px-4 py-2 text-white focus:border-primary focus:outline-none transition"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-primary/30 rounded px-4 py-2 text-white focus:border-primary focus:outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-primary/30 rounded px-4 py-2 text-white focus:border-primary focus:outline-none transition"
                placeholder="+94 XX XXX XXXX"
              />
            </div>

            {/* Register Number */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Register Number *</label>
              <input
                type="text"
                name="registerNumber"
                value={formData.registerNumber}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-primary/30 rounded px-4 py-2 text-white focus:border-primary focus:outline-none transition"
                placeholder="Enter your register number"
              />
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Size *</label>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-primary/30 rounded px-4 py-2 text-white focus:border-primary focus:outline-none transition"
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                max="10"
                className="w-full bg-black/50 border border-primary/30 rounded px-4 py-2 text-white focus:border-primary focus:outline-none transition"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-primary/40 px-6 py-3 rounded text-primary hover:bg-primary/10 transition font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 neon-border-green px-6 py-3 rounded font-semibold hover-glow transition"
              style={{
                color: '#7CFF72',
                textShadow: '0 0 10px rgba(124, 255, 114, 0.6)',
              }}
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
