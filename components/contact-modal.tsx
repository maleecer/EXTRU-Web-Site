'use client'

import { FaEnvelope, FaGlobe, FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll and hide footer
      document.body.style.overflow = 'hidden'
      const footer = document.querySelector('footer')
      if (footer) {
        footer.style.display = 'none'
      }
    } else {
      // Restore body scroll and footer
      document.body.style.overflow = ''
      const footer = document.querySelector('footer')
      if (footer) {
        footer.style.display = ''
      }
    }

    return () => {
      document.body.style.overflow = ''
      const footer = document.querySelector('footer')
      if (footer) {
        footer.style.display = ''
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="relative max-w-3xl w-full pointer-events-auto animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Container */}
          <div className="relative bg-gradient-to-br from-[#0a1f3d] via-[#0d1b2a] to-[#000814] rounded-3xl border-2 border-primary/40 shadow-2xl shadow-primary/20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-gradient-to-br from-red-500/20 to-red-600/20 hover:from-red-500/40 hover:to-red-600/40 border border-red-500/50 hover:border-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 group"
            >
              <FaTimes className="text-red-400 group-hover:text-white transition-colors" />
            </button>

            {/* Content */}
            <div className="relative p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 neon-text" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  Contact Us
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto"></div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Website Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-gradient-to-br from-[#0a2540] via-[#0d1b2a] to-[#000814] rounded-2xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500 p-6 md:p-8">
                    <div className="flex items-center gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg"></div>
                        <div className="relative w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full flex items-center justify-center border-2 border-primary/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <FaGlobe className="text-3xl md:text-4xl text-primary group-hover:rotate-180 transition-transform duration-700" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm text-gray-400 mb-2 uppercase tracking-wider">Website</p>
                        <a 
                          href="https://extru.edu.lk" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block group/link"
                        >
                          <p className="text-xl md:text-2xl font-bold text-white group-hover/link:text-primary transition-colors duration-300 break-all" style={{ fontFamily: 'var(--font-orbitron)' }}>
                            extru.edu.lk
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-gradient-to-br from-[#0a2540] via-[#0d1b2a] to-[#000814] rounded-2xl border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-500 p-6 md:p-8">
                    <div className="flex items-center gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-accent/30 rounded-full blur-lg"></div>
                        <div className="relative w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-accent/40 to-accent/20 rounded-full flex items-center justify-center border-2 border-accent/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <FaEnvelope className="text-3xl md:text-4xl text-accent" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm text-gray-400 mb-2 uppercase tracking-wider">Email</p>
                        <a 
                          href="mailto:extru@tec.rjt.ac.lk"
                          className="block group/link"
                        >
                          <p className="text-lg md:text-xl font-bold text-white group-hover/link:text-accent transition-colors duration-300 break-all" style={{ fontFamily: 'var(--font-orbitron)' }}>
                            extru@tec.rjt.ac.lk
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  )
}
