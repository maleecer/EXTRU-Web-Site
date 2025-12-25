"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa'

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
              <li className="flex items-start gap-3 group hover:text-primary transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-lg text-accent group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:extru@tec.rjt.ac.lk" className="hover:underline hover:text-primary transition-colors">extru@tec.rjt.ac.lk</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group hover:text-primary transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaGlobe className="text-lg text-purple-400 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="font-semibold">Website</p>
                  <a href="https://extru.edu.lk" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-400 transition-colors">extru.edu.lk</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group hover:text-primary transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaPhoneAlt className="text-lg text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+94252261000" className="hover:underline hover:text-primary transition-colors">+94 25 226 1000</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group hover:text-primary transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-lg text-secondary group-hover:text-accent transition-colors" />
                </div>
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
            <div className="flex flex-wrap gap-3">
              <a href="#" className="group w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-600/10 border-2 border-blue-500/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600/40 hover:to-blue-600/20 hover:border-blue-500 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-blue-500/50" aria-label="Facebook">
                <FaFacebookF className="text-xl text-blue-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gradient-to-br from-pink-600/20 to-purple-600/10 border-2 border-pink-500/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-600/40 hover:to-purple-600/20 hover:border-pink-500 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-pink-500/50" aria-label="Instagram">
                <FaInstagram className="text-xl text-pink-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gradient-to-br from-blue-700/20 to-blue-700/10 border-2 border-blue-600/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-700/40 hover:to-blue-700/20 hover:border-blue-600 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-blue-600/50" aria-label="LinkedIn">
                <FaLinkedinIn className="text-xl text-blue-500 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gradient-to-br from-sky-500/20 to-sky-500/10 border-2 border-sky-400/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-sky-500/40 hover:to-sky-500/20 hover:border-sky-400 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-sky-400/50" aria-label="Twitter">
                <FaTwitter className="text-xl text-sky-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 border-2 border-red-500/30 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-red-600/40 hover:to-red-600/20 hover:border-red-500 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-red-500/50" aria-label="YouTube">
                <FaYoutube className="text-xl text-red-500 group-hover:text-white transition-colors" />
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
