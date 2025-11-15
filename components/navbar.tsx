'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-primary/20 bg-black/90 backdrop-blur-xl relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image 
            src="/extru-logo.svg" 
            alt="EXTRU 2026" 
            width={80}
            height={48}
            className="w-20 h-auto"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(51, 225, 255, 0.6))'
            }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-primary hover:text-accent transition duration-300 text-sm font-medium tracking-wide"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('merchandise')}
            className="text-primary hover:text-accent transition duration-300 text-sm font-medium tracking-wide"
          >
            Merch
          </button>
          <button 
            onClick={() => scrollToSection('schedule')}
            className="text-primary hover:text-accent transition duration-300 text-sm font-medium tracking-wide"
          >
            Schedule
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-primary hover:text-accent transition duration-300 text-sm font-medium tracking-wide"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-primary hover:text-accent transition duration-300 text-sm font-medium tracking-wide"
          >
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden text-primary hover:text-accent transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-primary/20 px-4 py-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection('home')} className="text-primary hover:text-accent transition text-left">Home</button>
          <button onClick={() => scrollToSection('merchandise')} className="text-primary hover:text-accent transition text-left">Merch</button>
          <button onClick={() => scrollToSection('schedule')} className="text-primary hover:text-accent transition text-left">Schedule</button>
          <button onClick={() => scrollToSection('projects')} className="text-primary hover:text-accent transition text-left">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="text-primary hover:text-accent transition text-left">Contact Us</button>
        </div>
      )}

      {/* Neon blue line at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(51, 225, 255, 0.8) 20%, rgba(51, 225, 255, 1) 50%, rgba(51, 225, 255, 0.8) 80%, transparent)',
          boxShadow: '0 0 10px rgba(51, 225, 255, 0.8), 0 0 20px rgba(51, 225, 255, 0.5)',
          animation: 'neonLinePulse 2s ease-in-out infinite'
        }}
      ></div>
      
      <style jsx>{`
        @keyframes neonLinePulse {
          0%, 100% {
            opacity: 0.8;
            box-shadow: 0 0 10px rgba(51, 225, 255, 0.8), 0 0 20px rgba(51, 225, 255, 0.5);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 20px rgba(51, 225, 255, 1), 0 0 40px rgba(51, 225, 255, 0.8);
          }
        }
      `}</style>
    </nav>
  )
}
