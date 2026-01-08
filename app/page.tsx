'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Highlights from '@/components/highlights'
import Recap from '@/components/recap'
import Merchandise from '@/components/merchandise'
import Events from '@/components/events'
import Projects from '@/components/projects'
import Schedule from '@/components/schedule'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import OrganizingCommittee from '@/components/organizing-committee'
import Departments from '@/components/departments'
import Sponsors from '@/components/sponsors'
import ScrollToTop from '@/components/scroll-to-top'
import AnimatedGrid from '@/components/animated-grid'
import PageLoader from '@/components/page-loader'

export default function Home() {
  const [isPageLoading, setIsPageLoading] = useState(true)

  // Listen for the 3D model load event
  useEffect(() => {
    const handleModelLoaded = () => {
      setIsPageLoading(false)
    }

    window.addEventListener('model-loaded', handleModelLoaded)

    // Fallback: hide loader after 5 seconds if model doesn't load
    const fallbackTimer = setTimeout(() => {
      setIsPageLoading(false)
    }, 5000)

    return () => {
      window.removeEventListener('model-loaded', handleModelLoaded)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <>
      <PageLoader isLoading={isPageLoading} />
      <main className="min-h-screen bg-transparent text-foreground flex flex-col items-center relative overflow-hidden">
        {/* Animated Grid Background */}
        <AnimatedGrid />

        <Navbar />
        <div className="w-full relative z-10">
          {/* Hero - No background */}
          <div className="w-full">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Hero />
            </div>
          </div>

          {/* About - Subtle gradient */}
          <div id="about" className="w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="w-full max-w-7xl mx-auto px-4">
              <About />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4">
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Recap */}
          <div id="recap" className="w-full">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Recap />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4">
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Events */}
          <div id="events" className="w-full">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Events />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4">
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Merchandise - Subtle gradient */}
          <div id="merchandise" className="w-full bg-gradient-to-b from-transparent via-accent/5 to-transparent">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Merchandise />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4">
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Departments */}
          <div id="departments" className="w-full">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Departments />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4">
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Sponsors - Subtle gradient */}
          <div id="sponsors" className="w-full bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Sponsors />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4">
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Projects - Subtle gradient */}
          <div id="projects" className="w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Projects />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4">
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Schedule */}
          <div id="schedule" className="w-full">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Schedule />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4">
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Team - Organizing Committee */}
          <div id="team" className="w-full bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
            <div className="w-full max-w-7xl mx-auto px-4">
              <OrganizingCommittee />
            </div>
          </div>

          {/* Contact - Subtle gradient */}
          <div id="contact" className="w-full bg-gradient-to-b from-transparent via-accent/5 to-transparent">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}
