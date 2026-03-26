'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Recap() {
  const stats2026 = [
    { number: '10000+', label: 'Visitors', icon: '' },
    { number: '200+', label: 'Projects Showcased', icon: '' },
    { number: '40+', label: 'Industry Experts', icon: '' },
    { number: '30+', label: 'Workshops', icon: '' }
  ]

  const stats2025 = [
    { number: '5000+', label: 'Attendees', icon: '' },
    { number: '150+', label: 'Projects Showcased', icon: '' },
    { number: '30+', label: 'Industry Experts', icon: '' },
    { number: '20+', label: 'Workshops', icon: '' }
  ]

  const stats2024 = [
    { number: '1800+', label: 'Attendees', icon: '' },
    { number: '100+', label: 'Projects Showcased', icon: '' },
    { number: '25+', label: 'Industry Experts', icon: '' },
    { number: '12+', label: 'Workshops', icon: '' }
  ]

  const memories2026 = [
    {
      title: 'Opening Ceremony',
      description: 'Official inauguration marking the start of EXTRU 2026',
      image: '/Extru-2026/00.jpg'
    },
    {
      title: 'Innovation Showcase',
      description: 'Students demonstrated 200+ innovative projects across all departments',
      image: '/Extru-2026/03.jpg'
    },
    {
      title: 'Tech Workshops',
      description: 'Pre-event workshops to equip students with skills for their projects',
      image: '/Extru-2026/07.jpg'
    },
    {
      title: 'Gaming Zone',
      description: 'Interactive gaming experiences and competitions',
      image: '/Extru-2026/11.jpg'
    },
    {
      title: 'Crafting Expo',
      description: 'Creative handmade creations and craft showcases',
      image: '/Extru-2026/09.jpg'
    },
    {
      title: 'Closing Ceremony',
      description: 'Awards for the most outstanding projects',
      image: '/Extru-2026/05.jpg'
    },
  ]

  const memories = [
    {
      title: 'Opening Ceremony',
      description: 'Grand inauguration with keynote speeches from tech leaders',
      image: '/Extru-2025/00.jpg'
    },
    {
      title: 'Innovation Showcase',
      description: 'Students presented groundbreaking projects across all departments',
      image: '/Extru-2025/03.jpg'
    },
    {
      title: 'Tech Workshops',
      description: 'Hands-on sessions on AI, IoT, Robotics and more',
      image: '/Extru-2025/07.jpeg'
    },
    {
      title: 'Networking Sessions',
      description: 'Industry professionals connecting with students',
      image: '/Extru-2025/11.jpeg'
    },
    {
      title: 'Crafting Expo',
      description: 'Artisan Workshops & Handmade Creations',
      image: '/Extru-2025/09.jpeg'
    },
    {
      title: 'Closing Ceremony',
      description: 'Awards and recognitions for outstanding projects',
      image: '/Extru-2025/05.jpg'
    },
  ]

  const memories2024 = [
    {
      title: 'Opening Ceremony',
      description: 'Kickoff featuring remarks from faculty and industry partners',
      image: '/Extru-2024/01.jpg'
    },
    {
      title: 'Opening Ceremony Dancing Performance',
      description: 'Cultural dance performance to inaugurate the event',
      image: '/Extru-2024/04.jpg'
    },
    {
      title: 'Project Demos',
      description: 'Innovative prototypes showcased by multidisciplinary teams',
      image: '/Extru-2024/02.jpg'
    },
    {
      title: 'Skill Workshops',
      description: 'Hands-on sessions covering trending technologies',
      image: '/Extru-2024/03.jpg'
    },
    {
      title: 'Project Showcase',
      description: 'Students demonstrating their cutting-edge projects',
      image: '/Extru-2024/05.jpg'
    }
  ]

  // Count-up component: animates numbers when entering viewport
  function Counter({ value, duration = 1600 }: { value: string; duration?: number }) {
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      const node = ref.current
      if (!node) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started) {
            setStarted(true)
          }
        },
        { threshold: 0.4 }
      )
      observer.observe(node)
      return () => observer.disconnect()
    }, [started])

    useEffect(() => {
      if (!started) return
      const target = parseInt(value.replace(/[^0-9]/g, ''), 10)
      const startTime = performance.now()

      const animate = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
        const current = Math.floor(target * eased)
        setCount(current)
        if (progress < 1) requestAnimationFrame(animate)
      }

      const raf = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(raf)
    }, [started, value, duration])

    const hasPlus = /\+$/.test(value)

    return (
      <div
        ref={ref}
        className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:text-primary transition-colors"
      >
        {count.toLocaleString()}
        {hasPlus ? '+' : ''}
      </div>
    )
  }

  return (
    <section id="recap" className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ========== EXTRU 2026 Recap ========== */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          EXTRU 2026 Recap
        </h2>
        <div className="h-1 w-32 bg-linear-to-r from-primary to-secondary mx-auto mb-4"></div>
        <p className="text-center text-foreground/70 text-lg mb-16 max-w-3xl mx-auto">
          Relive the incredible moments from this year&apos;s exhibition — March 6-7, 2026
        </p>

        {/* 2026 Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats2026.map((stat, idx) => (
            <div
              key={idx}
              className="neon-border-cyan p-6 text-center hover-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <Counter value={stat.number} />
              <div className="text-foreground/70 text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2026 Memories Gallery */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-10">
            Highlights & Memories
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories2026.map((memory, idx) => (
              <div
                key={idx}
                className="neon-border-cyan group hover-glow transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Image Container */}
                <div className="aspect-video relative overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20">
                  <Image
                    src={memory.image}
                    alt={`EXTRU 2026 ${memory.title} - ${memory.description}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold text-xl mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {memory.title}
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 bg-linear-to-br from-primary/5 to-secondary/5">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {memory.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider between 2026 and 2025 */}
        <div className="my-28 flex items-center gap-4">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>

        {/* ========== EXTRU 2025 Recap ========== */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          EXTRU 2025 Recap
        </h2>
        <div className="h-1 w-32 bg-linear-to-r from-primary to-secondary mx-auto mb-4"></div>
        <p className="text-center text-foreground/70 text-lg mb-16 max-w-3xl mx-auto">
          Relive the incredible moments from the 2025 exhibition
        </p>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats2025.map((stat, idx) => (
            <div
              key={idx}
              className="neon-border-cyan p-6 text-center hover-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <Counter value={stat.number} />
              <div className="text-foreground/70 text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Memories Gallery */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-10">
            Highlights & Memories
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory, idx) => (
              <div
                key={idx}
                className="neon-border-cyan group hover-glow transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Image Container */}
                <div className="aspect-video relative overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20">
                  <Image
                    src={memory.image}
                    alt={`EXTRU 2025 ${memory.title} - ${memory.description}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold text-xl mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {memory.title}
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 bg-linear-to-br from-primary/5 to-secondary/5">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {memory.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== EXTRU 2024 Recap ========== */}
        <div className="mt-28">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
            EXTRU 2024 Recap
          </h2>
          <div className="h-1 w-32 bg-linear-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-center text-foreground/70 text-lg mb-16 max-w-3xl mx-auto">
            Relive the incredible moments from the 2024 exhibition
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats2024.map((stat, idx) => (
              <div
                key={idx}
                className="neon-border-cyan p-6 text-center hover-glow transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <Counter value={stat.number} />
                <div className="text-foreground/70 text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Memories Gallery */}
          <div>
            <h3 className="text-3xl font-bold text-primary text-center mb-10">
              Highlights & Memories
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memories2024.map((memory, idx) => (
                <div
                  key={idx}
                  className="neon-border-cyan group hover-glow transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="aspect-video relative overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20">
                    <Image
                      src={memory.image}
                      alt={`EXTRU 2024 ${memory.title} - ${memory.description}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                    {/* Title on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold text-xl mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        {memory.title}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-linear-to-br from-primary/5 to-secondary/5">
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {memory.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thank You Section */}
        <div className="mt-20 text-center">
          <div className="neon-border-cyan p-8 max-w-3xl mx-auto hover-glow">
            <h3 className="text-3xl font-bold text-accent mb-4">
              Thank You for Being Part of EXTRU!
            </h3>
            <p className="text-white text-lg leading-relaxed mb-6">
              Three incredible editions of EXTRU have brought together thousands of innovators,
              creators and tech enthusiasts. Here&apos;s to many more years of innovation and excellence!
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-foreground/70">
              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span> 3 Successful Editions
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span> 450+ Projects Showcased
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span> 16000+ Total Visitors
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span> Unforgettable Memories
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
