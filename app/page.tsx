'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Highlights from '@/components/highlights'
import Merchandise from '@/components/merchandise'
import Projects from '@/components/projects'
import Schedule from '@/components/schedule'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import OrganizingCommittee from '@/components/organizing-committee'
import Departments from '@/components/departments'
import Sponsors from '@/components/sponsors'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-foreground flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4">
        <Hero />
        <About />
        <Highlights />
        <Merchandise />
        <Departments />
        <Sponsors />
        <OrganizingCommittee />
        <Projects />
        <Schedule />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
