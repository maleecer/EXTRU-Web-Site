'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt, FaPaperPlane, FaGlobe } from 'react-icons/fa'

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
                className="w-full neon-border-green px-6 py-4 text-accent font-bold hover-glow transition uppercase tracking-wider disabled:opacity-50 flex items-center justify-center gap-3 group"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              .icon-float:hover .icon-inner {
                animation: float 2s ease-in-out infinite;
              }
            `}</style>
            
            <div className="neon-border p-6 hover-glow group transition-all duration-300 icon-float relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 group-hover:via-primary/10 transition-all duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/40 via-primary/30 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-primary/50 border border-primary/20 icon-inner">
                  <FaEnvelope className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-primary font-bold text-lg mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Email
                  </h3>
                  <a href="mailto:extru@tec.rjt.ac.lk" className="text-gray-300 hover:text-primary transition-colors font-semibold">extru@tec.rjt.ac.lk</a>
                  <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours ⚡</p>
                </div>
              </div>
            </div>

            <div className="neon-border p-6 hover-glow group transition-all duration-300 icon-float relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-purple-500/0 group-hover:via-purple-500/10 transition-all duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/40 via-purple-500/30 to-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-purple-500/50 border border-purple-400/20 icon-inner">
                  <FaGlobe className="text-2xl text-purple-400 group-hover:text-white transition-colors duration-300 group-hover:rotate-180" style={{ transition: 'all 0.6s ease' }} />
                </div>
                <div>
                  <h3 className="text-purple-400 font-bold text-lg mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Website
                  </h3>
                  <a href="https://extru.edu.lk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors font-semibold">extru.edu.lk</a>
                  <p className="text-gray-400 text-sm mt-1">Visit our official website 🌐</p>
                </div>
              </div>
            </div>

            <div className="neon-border p-6 hover-glow group transition-all duration-300 icon-float relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 group-hover:via-accent/10 transition-all duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/40 via-accent/30 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-accent/50 border border-accent/20 icon-inner">
                  <FaPhoneAlt className="text-2xl text-accent group-hover:text-white transition-colors duration-300 group-hover:rotate-12" />
                </div>
                <div>
                  <h3 className="text-accent font-bold text-lg mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Phone
                  </h3>
                  <a href="tel:+94252261000" className="text-gray-300 hover:text-accent transition-colors font-semibold">+94 25 226 1000</a>
                  <p className="text-gray-400 text-sm mt-1">Mon-Fri, 9:00 AM - 5:00 PM 📞</p>
                </div>
              </div>
            </div>

            <div className="neon-border p-6 hover-glow group transition-all duration-300 icon-float relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/5 to-secondary/0 group-hover:via-secondary/10 transition-all duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-secondary/50 border border-secondary/20 icon-inner">
                  <FaMapMarkerAlt className="text-2xl text-secondary group-hover:text-white transition-colors duration-300 group-hover:-translate-y-1" />
                </div>
                <div>
                  <h3 className="text-secondary font-bold text-lg mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Location
                  </h3>
                  <p className="text-gray-300">Technology Faculty Premises</p>
                  <p className="text-gray-300">Rajarata University of Sri Lanka</p>
                  <p className="text-gray-400 text-sm mt-1">Mihintale, Sri Lanka 📍</p>
                </div>
              </div>
            </div>

            <div className="neon-border p-6 bg-gradient-to-br from-primary/10 to-accent/10 hover-glow group transition-all duration-300 icon-float relative overflow-hidden border-2 border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 group-hover:from-primary/15 group-hover:via-accent/15 group-hover:to-primary/15 transition-all duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/50 via-accent/40 to-accent/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-accent/50 border border-accent/30 icon-inner">
                  <FaCalendarAlt className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-primary font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    Event Dates
                  </h3>
                  <p className="text-white text-xl font-bold mb-2">February 19-21, 2026</p>
                  <p className="text-gray-400 text-sm">Mark your calendars!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
