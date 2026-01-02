'use client'

import { useState } from 'react'
import { FaEnvelope, FaPaperPlane, FaGlobe } from 'react-icons/fa'

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
    <section id="contact" className="relative py-0 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact section content removed */}
      </div>
    </section>
  )
}
