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
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Get in Touch
        </h2>
        <div className="h-1 w-32 bg-linear-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {/* Contact Cards - Top Row */}
          <div className="neon-border-cyan p-6 rounded-lg hover-glow group transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
              <FaEnvelope className="text-3xl text-primary" />
            </div>
            <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              Email Us
            </h4>
            <a href="mailto:extru@tec.rjt.ac.lk" className="text-gray-300 hover:text-primary transition-colors text-sm break-all">extru@tec.rjt.ac.lk</a>
          </div>

          <div className="neon-border-cyan p-6 rounded-lg hover-glow group transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
              <FaPhoneAlt className="text-3xl text-accent" />
            </div>
            <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              Call Us
            </h4>
            <a href="tel:+94252261000" className="text-gray-300 hover:text-accent transition-colors text-sm">+94 25 226 1000</a>
          </div>

          <div className="neon-border-cyan p-6 rounded-lg hover-glow group transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
              <FaGlobe className="text-3xl text-secondary" />
            </div>
            <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              Visit Website
            </h4>
            <a href="https://extru.edu.lk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors text-sm">extru.edu.lk</a>
          </div>

          <div className="neon-border-cyan p-6 rounded-lg hover-glow group transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
              <FaMapMarkerAlt className="text-3xl text-purple-400" />
            </div>
            <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              Our Location
            </h4>
            <p className="text-gray-300 text-sm">Mihintale, Sri Lanka</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form - Full Width */}
          <div className="neon-border-cyan p-8 rounded-lg hover-glow">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center" style={{ fontFamily: 'var(--font-orbitron)' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-primary/20 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-primary/20 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-primary/20 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 px-6 py-3 text-white font-bold rounded-lg transition-all duration-300 uppercase tracking-wider disabled:opacity-50 flex items-center justify-center gap-3 group shadow-lg shadow-primary/20 hover:shadow-primary/40"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
