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
            <ul className="space-y-5 text-gray-300 text-sm">
              <li className="flex items-start gap-4 group hover:text-primary transition-colors">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/50 via-accent/30 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-accent/40 border-2 border-accent/30 relative backdrop-blur-sm">
                    <FaEnvelope className="text-xl text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-accent group-hover:text-white transition-colors mb-1">Email</p>
                  <a href="mailto:extru@tec.rjt.ac.lk" className="hover:underline hover:text-primary transition-colors block group-hover:translate-x-1 transition-transform">extru@tec.rjt.ac.lk</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group hover:text-purple-400 transition-colors">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/50 via-purple-500/30 to-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-purple-500/40 border-2 border-purple-400/30 relative backdrop-blur-sm">
                    <FaGlobe className="text-xl text-white group-hover:scale-110 group-hover:rotate-180 transition-all duration-700" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-purple-400 group-hover:text-white transition-colors mb-1">Website</p>
                  <a href="https://extru.edu.lk" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-300 transition-colors block group-hover:translate-x-1 transition-transform">extru.edu.lk</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group hover:text-primary transition-colors">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/50 via-primary/30 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-primary/40 border-2 border-primary/30 relative backdrop-blur-sm">
                    <FaPhoneAlt className="text-xl text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-primary group-hover:text-white transition-colors mb-1">Phone</p>
                  <a href="tel:+94252261000" className="hover:underline hover:text-accent transition-colors block group-hover:translate-x-1 transition-transform">+94 25 226 1000</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group hover:text-secondary transition-colors">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/50 via-secondary/30 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-secondary/40 border-2 border-secondary/30 relative backdrop-blur-sm">
                    <FaMapMarkerAlt className="text-xl text-white group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-secondary group-hover:text-white transition-colors mb-1">Address</p>
                  <p className="text-gray-300">EXTRU Organizing Committee,</p>
                  <p className="text-gray-300">Faculty of Technology,</p>
                  <p className="text-gray-300">Rajarata University of Sri Lanka,</p>
                  <p className="text-gray-300">Mihintale, Sri Lanka</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-primary font-bold mb-6 text-lg flex items-center gap-2" style={{
              textShadow: '0 0 10px rgba(51, 225, 255, 0.5)',
              fontFamily: 'var(--font-orbitron)'
            }}>
              Follow Us
              <span className="text-xs text-accent"></span>
            </h4>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="group relative w-16 h-16 bg-gradient-to-br from-blue-600/40 via-blue-600/20 to-blue-600/10 border-2 border-blue-500/50 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600/70 hover:to-blue-600/40 hover:border-blue-400 hover:scale-125 hover:-rotate-6 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/70 overflow-hidden backdrop-blur-sm" aria-label="Facebook">
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/30 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <FaFacebookF className="text-2xl text-blue-300 group-hover:text-white transition-all duration-300 relative z-10 group-hover:scale-125" />
              </a>
              <a href="#" className="group relative w-16 h-16 bg-gradient-to-br from-pink-600/40 via-purple-600/30 to-purple-600/10 border-2 border-pink-500/50 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-600/70 hover:via-purple-600/50 hover:to-purple-600/40 hover:border-pink-400 hover:scale-125 hover:rotate-12 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-pink-500/70 overflow-hidden backdrop-blur-sm" aria-label="Instagram">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <FaInstagram className="text-2xl text-pink-300 group-hover:text-white transition-all duration-300 relative z-10 group-hover:scale-125 group-hover:rotate-12" />
              </a>
              <a href="#" className="group relative w-16 h-16 bg-gradient-to-br from-blue-700/40 via-blue-700/20 to-blue-700/10 border-2 border-blue-600/50 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-700/70 hover:to-blue-700/40 hover:border-blue-500 hover:scale-125 hover:-rotate-6 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-600/70 overflow-hidden backdrop-blur-sm" aria-label="LinkedIn">
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/30 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <FaLinkedinIn className="text-2xl text-blue-400 group-hover:text-white transition-all duration-300 relative z-10 group-hover:scale-125" />
              </a>
              <a href="#" className="group relative w-16 h-16 bg-gradient-to-br from-sky-500/40 via-sky-500/20 to-sky-500/10 border-2 border-sky-400/50 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-sky-500/70 hover:to-sky-500/40 hover:border-sky-300 hover:scale-125 hover:rotate-12 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-sky-400/70 overflow-hidden backdrop-blur-sm" aria-label="Twitter">
                <div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/30 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-sky-300/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <FaTwitter className="text-2xl text-sky-300 group-hover:text-white transition-all duration-300 relative z-10 group-hover:scale-125 group-hover:-rotate-12" />
              </a>
              <a href="#" className="group relative w-16 h-16 bg-gradient-to-br from-red-600/40 via-red-600/20 to-red-600/10 border-2 border-red-500/50 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-red-600/70 hover:to-red-600/40 hover:border-red-400 hover:scale-125 hover:-rotate-6 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-red-500/70 overflow-hidden backdrop-blur-sm" aria-label="YouTube">
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/30 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-red-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <FaYoutube className="text-2xl text-red-400 group-hover:text-white transition-all duration-300 relative z-10 group-hover:scale-125" />
              </a>
            </div>
            <p className="text-gray-400 text-xs mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Connect with us on social media
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-primary/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            &copy; 2026 EXTRU. All rights reserved. | Built with ❤️ by EXTRU Organizing Committee 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
