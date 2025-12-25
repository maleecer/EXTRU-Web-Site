"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative w-full bg-[#001a33] border-t-2 border-primary/40 mt-20 z-10" style={{
      boxShadow: '0 -4px 30px rgba(51, 225, 255, 0.2)'
    }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section - Logos */}
        <div className="flex flex-col items-center gap-6 mb-12 pb-8 border-b border-primary/20">
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <div className="relative">
              <Image 
                src="/EXTRU LOGO white 1.png" 
                alt="EXTRU 2026 - Faculty of Technology RUSL Annual Exhibition" 
                width={120} 
                height={72} 
                className="h-16 md:h-20 w-auto" 
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(51, 225, 255, 0.6))'
                }} 
              />
            </div>
            <div className="h-20 w-px bg-linear-to-b from-transparent via-primary/60 to-transparent"></div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1" style={{
                textShadow: '0 0 20px rgba(51, 225, 255, 0.8)',
                fontFamily: 'var(--font-orbitron)'
              }}>
                EXTRU 2026
              </h3>
              <p className="text-sm text-primary/80 font-semibold">Faculty of Technology, RUSL</p>
              <p className="text-xs text-accent mt-1">February 20-22, 2026</p>
            </div>
          </div>
        </div>

        {/* Middle Section - Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-bold mb-4 text-lg" style={{
              textShadow: '0 0 10px rgba(51, 225, 255, 0.5)',
              fontFamily: 'var(--font-orbitron)'
            }}>Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-300 text-sm">
              <li>
                <Link
                  href="/#home"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('home')
                    }
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('about')
                    }
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#recap"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('recap')
                    }
                  }}
                >
                  Recap
                </Link>
              </li>
              <li>
                <Link
                  href="/#merchandise"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('merchandise')
                    }
                  }}
                >
                  Merchandise
                </Link>
              </li>
              <li>
                <Link
                  href="/#schedule"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('schedule')
                    }
                  }}
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('projects')
                    }
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection('contact')
                    }
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary font-bold mb-4 text-lg" style={{
              textShadow: '0 0 10px rgba(51, 225, 255, 0.5)',
              fontFamily: 'var(--font-orbitron)'
            }}>Contact Us</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3 hover:text-primary transition-colors">
                <span className="text-accent text-lg">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:extru@tec.rjt.ac.lk" className="hover:underline">extru@tec.rjt.ac.lk</a>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:text-primary transition-colors">
                <span className="text-accent text-lg">📞</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+94252261000" className="hover:underline">+94 25 226 1000</a>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:text-primary transition-colors">
                <span className="text-accent text-lg">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Technology Faculty</p>
                  <p>Mihintale, Sri Lanka</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-primary font-bold mb-4 text-lg" style={{
              textShadow: '0 0 10px rgba(51, 225, 255, 0.5)',
              fontFamily: 'var(--font-orbitron)'
            }}>Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="group w-12 h-12 bg-primary/10 border-2 border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="group w-12 h-12 bg-accent/10 border-2 border-accent/30 rounded-lg flex items-center justify-center hover:bg-accent/20 hover:border-accent hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <svg className="w-6 h-6 text-accent group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="group w-12 h-12 bg-secondary/10 border-2 border-secondary/30 rounded-lg flex items-center justify-center hover:bg-secondary/20 hover:border-secondary hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-primary/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            &copy; 2026 EXTRU. All rights reserved. | Built with ❤️ by Tech Team
          </p>
          <p className="text-center md:text-right">
            <span className="text-accent font-semibold">Rajarata University of Sri Lanka</span> | Faculty of Technology
          </p>
        </div>
      </div>
    </footer>
  )
}
