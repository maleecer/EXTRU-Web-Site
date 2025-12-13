'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-orbitron)' }}>
            Get in Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about EXTRU 2026? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 neon-border p-8">
              <div>
                <label htmlFor="name" className="block text-primary text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border-2 border-primary/30 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-primary text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border-2 border-primary/30 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-primary text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border-2 border-primary/30 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full neon-border-green px-6 py-4 text-accent font-bold hover-glow transition uppercase tracking-wider disabled:opacity-50"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="neon-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-primary font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Email
                  </h3>
                  <p className="text-gray-300">info@extru2026.lk</p>
                  <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="neon-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-accent font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Phone
                  </h3>
                  <p className="text-gray-300">+94 25 226 1000</p>
                  <p className="text-gray-400 text-sm mt-1">Mon-Fri, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="neon-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-secondary font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Location
                  </h3>
                  <p className="text-gray-300">Technology Faculty Premises</p>
                  <p className="text-gray-300">Rajarata University of Sri Lanka</p>
                  <p className="text-gray-400 text-sm mt-1">Mihintale, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="neon-border p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-primary font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Event Dates
              </h3>
              <p className="text-white text-xl font-bold mb-2">February 19-21, 2026</p>
              <p className="text-gray-400 text-sm">Mark your calendars! 🗓️</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
