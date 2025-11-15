'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Get in Touch
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

        <form className="space-y-6 neon-border p-8">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-background border border-primary/30 text-foreground px-4 py-3 focus:outline-none focus:border-primary/60 transition"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-background border border-primary/30 text-foreground px-4 py-3 focus:outline-none focus:border-primary/60 transition"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-background border border-primary/30 text-foreground px-4 py-3 focus:outline-none focus:border-primary/60 transition resize-none"
            ></textarea>
          </div>

          <button className="w-full neon-border-green px-6 py-3 text-accent font-semibold hover-glow transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
