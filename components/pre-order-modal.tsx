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
  const [paymentSlip, setPaymentSlip] = useState<File | null>(null)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Pre-order submitted:', { 
      ...formData, 
      item: itemName, 
      price: itemPrice,
      paymentSlip: paymentSlip?.name 
    })
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
    setPaymentSlip(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentSlip(e.target.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" 
      onClick={onClose}
    >
      <div 
        className="relative bg-black border-2 border-primary/40 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300"
        style={{
          boxShadow: '0 0 30px rgba(51, 225, 255, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black border-b border-primary/30 p-6 pb-4 z-10">
          <h2 className="text-2xl font-bold text-primary mb-2" style={{
            textShadow: '0 0 20px rgba(51, 225, 255, 0.6)'
          }}>
            Pre-Order {itemName}
          </h2>
          <p className="text-secondary text-lg font-semibold">{itemPrice}</p>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onClose()
            }}
            className="absolute top-4 right-4 bg-primary/20 hover:bg-primary/30 border-2 border-primary text-primary hover:text-white transition-all duration-200 text-2xl font-bold w-10 h-10 rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-90 shadow-[0_0_15px_rgba(51,225,255,0.4)] hover:shadow-[0_0_25px_rgba(51,225,255,0.6)]"
            aria-label="Close modal"
          >
            ✕
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

            {/* Payment Slip Upload */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Payment Slip *</label>
              <div className="relative">
                <input
                  type="file"
                  id="payment-slip"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  required
                  className="hidden"
                />
                <label
                  htmlFor="payment-slip"
                  className="w-full bg-black/50 border-2 border-dashed border-primary/30 hover:border-primary rounded px-4 py-8 text-white focus:border-primary transition cursor-pointer flex flex-col items-center justify-center group"
                >
                  <svg className="w-12 h-12 text-primary/50 group-hover:text-primary transition mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  {paymentSlip ? (
                    <div className="text-center">
                      <p className="text-accent font-semibold mb-1">✓ File Selected</p>
                      <p className="text-sm text-foreground/70">{paymentSlip.name}</p>
                      <p className="text-xs text-foreground/50 mt-2">Click to change file</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-primary font-semibold mb-1">Upload Payment Slip</p>
                      <p className="text-xs text-foreground/50">PNG, JPG, or PDF (Max 5MB)</p>
                      <p className="text-xs text-foreground/50 mt-1">Click to browse</p>
                    </div>
                  )}
                </label>
              </div>
              <p className="text-xs text-foreground/60 mt-2">
                📌 Payment Details: Bank Name - Account Number - Amount
              </p>
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
