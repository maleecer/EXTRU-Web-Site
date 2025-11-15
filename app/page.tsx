'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Highlights from '@/components/highlights'
import Recap from '@/components/recap'
import Merchandise from '@/components/merchandise'
import Projects from '@/components/projects'
import Schedule from '@/components/schedule'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import OrganizingCommittee from '@/components/organizing-committee'
import Departments from '@/components/departments'
import Sponsors from '@/components/sponsors'
import ScrollToTop from '@/components/scroll-to-top'
import AnimatedGrid from '@/components/animated-grid'

export default function Home() {
  return (
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

        {/* Divider Line */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-4">
            <div className="section-divider"></div>
          </div>
        </div>

        {/* About - Purple accent */}
        <div className="w-full bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
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

        {/* Recap - Orange accent */}
        <div className="w-full bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
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

        {/* Merchandise - Green accent */}
        <div className="w-full bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
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

        {/* Departments - Blue accent */}
        <div className="w-full bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
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

        {/* Sponsors - Yellow accent */}
        <div className="w-full bg-gradient-to-b from-transparent via-yellow-950/10 to-transparent">
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

        {/* Organizing Committee - Pink accent */}
        <div className="w-full bg-gradient-to-b from-transparent via-pink-950/10 to-transparent">
          <div className="w-full max-w-7xl mx-auto px-4">
            <OrganizingCommittee />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-4">
            <div className="section-divider"></div>
          </div>
        </div>

        {/* Projects - Indigo accent */}
        <div className="w-full bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
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

        {/* Schedule - Orange accent */}
        <div className="w-full bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
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

        {/* Contact - Teal accent */}
        <div className="w-full bg-gradient-to-b from-transparent via-teal-950/10 to-transparent">
          <div className="w-full max-w-7xl mx-auto px-4">
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
