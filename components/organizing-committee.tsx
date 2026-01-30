'use client'

import Image from 'next/image'
import { FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
import ContactModal from './contact-modal'

export default function OrganizingCommittee() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const team = [
    {
      name: 'Vikum Kalhara',
      role: 'Project Chair',
      email: 'vikum@extru.edu.lk',
      phone: '+94 77 189 90 76',
      image: ''
    },
    {
      name: 'Vidula Deneth',
      role: 'Project Secretary',
      email: 'vidula@extru.edu.lk',
      phone: '+94 70 467 63 30',
      image: ''
    },
    {
      name: 'Divantha Ambrose',
      role: 'Head of Marketing',
      email: 'divantha@extru.edu.lk',
      phone: '+94 77 208 14 95',
      image: ''
    },
    {
      name: 'Anuhas Kalupahana',
      role: 'Publicity Team Head',
      email: 'anuhas@extru.edu.lk',
      phone: '+94 71 277 6269',
      image: ''
    }
  ]

  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      <section id="committee" className="relative py-24 px-4 md:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
            Meet Our Team
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Main Card Container */}
                <div className="relative bg-gradient-to-br from-[#0a1f3d] via-[#0d1b2a] to-[#000814] rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 p-6">

                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
                  </div>

                  {/* Decorative Top Section */}
                  <div className="relative mb-4 pt-2">
                    {/* Role Badge */}
                    <div className="inline-block">
                      <div className="relative group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-sm opacity-30"></div>
                        <div className="relative bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 backdrop-blur-sm px-4 py-1.5 rounded-full border-2 border-primary/50 hover:border-primary shadow-xl transition-all duration-300">
                          <p className="text-[10px] font-bold text-white uppercase tracking-wider drop-shadow-lg">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name Section */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-orbitron)' }}>
                      {member.name}
                    </h3>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="relative space-y-2">
                    {/* Email Button */}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 hover:border-accent hover:from-accent/20 hover:to-accent/10 transition-all duration-300 group/link"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/30 group-hover/link:shadow-accent/50 group-hover/link:scale-110 transition-all duration-300">
                        <FaEnvelope className="text-white text-xs" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide">Email</p>
                        <p className="text-xs text-gray-200 truncate group-hover/link:text-white transition-colors">
                          {member.email}
                        </p>
                      </div>
                    </a>

                    {/* Phone Button */}
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 hover:border-primary hover:from-primary/20 hover:to-primary/10 transition-all duration-300 group/link"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 group-hover/link:shadow-primary/50 group-hover/link:scale-110 transition-all duration-300">
                        <FaPhoneAlt className="text-white text-xs" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide">Phone</p>
                        <p className="text-xs text-gray-200 group-hover/link:text-white transition-colors">
                          {member.phone}
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Bottom Gradient Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* External Glow Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:to-accent/20 blur-xl rounded-3xl transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Contact Us Button - Bottom */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 border-2 border-primary/50 hover:border-primary rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <FaPaperPlane className="text-primary text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Contact Us
              </span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
