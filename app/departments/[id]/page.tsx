'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function DepartmentPage() {
  const params = useParams()
  const departmentId = params.id as string

  const departments: Record<string, any> = {
    ict: {
      name: 'ICT',
      fullName: 'Information & Communication Technology',
      description: 'Explore the forefront of digital innovation and cybersecurity',
      highlights: [
        'Artificial Intelligence & Machine Learning',
        'Cybersecurity Solutions',
        'Web Development & Cloud Computing',
        'Mobile App Development',
        'Data Science & Analytics'
      ],
      projects: [
        { title: 'AI-Powered Chatbot', description: 'Advanced conversational AI system' },
        { title: 'Blockchain Security', description: 'Distributed ledger applications' },
        { title: 'Cloud Infrastructure', description: 'Scalable cloud solutions' },
        { title: 'IoT Integration', description: 'Connected device ecosystem' }
      ]
    },
    ent: {
      name: 'ENT',
      fullName: 'Electronics & Nanotechnology',
      description: 'Cutting-edge electronics and nanotechnology innovations',
      highlights: [
        'Microprocessor Design',
        'Nanotechnology Applications',
        'Power Electronics',
        'Embedded Systems',
        'Semiconductor Technology'
      ],
      projects: [
        { title: 'Smart Circuits', description: 'Advanced microcontroller systems' },
        { title: 'Nano Materials', description: 'Revolutionary nano-scale applications' },
        { title: 'Energy Harvesting', description: 'Efficient power generation' },
        { title: 'Quantum Computing', description: 'Next-gen computing architecture' }
      ]
    },
    mtt: {
      name: 'MTT',
      fullName: 'Mechanical & Transport Technology',
      description: 'Robotics, automation, and mechanical innovations',
      highlights: [
        'Robotics & Automation',
        'Mechanical Design',
        'Autonomous Vehicles',
        'Precision Engineering',
        'Industrial IoT'
      ],
      projects: [
        { title: 'Autonomous Robot', description: 'Self-navigating robotic system' },
        { title: 'Drone Technology', description: 'Aerial vehicle innovations' },
        { title: 'Smart Machinery', description: 'Intelligent manufacturing systems' },
        { title: 'Prosthetics', description: 'Advanced assistive devices' }
      ]
    },
    bpt: {
      name: 'BPT',
      fullName: 'Biosystems & Process Technology',
      description: 'Biotechnology and bioengineering solutions',
      highlights: [
        'Genetic Engineering',
        'Bioprocess Technology',
        'Environmental Solutions',
        'Medical Devices',
        'Sustainable Biotech'
      ],
      projects: [
        { title: 'Gene Therapy', description: 'Advanced genetic treatments' },
        { title: 'Biofuel Production', description: 'Renewable energy solutions' },
        { title: 'Water Purification', description: 'Environmental biotechnology' },
        { title: 'Biomedical Sensors', description: 'Health monitoring devices' }
      ]
    },
    fdt: {
      name: 'FDT',
      fullName: 'Food & Dairy Technology',
      description: 'Food innovation and agricultural technology',
      highlights: [
        'Food Processing Innovation',
        'Dairy Technology',
        'Sustainable Agriculture',
        'Food Safety Systems',
        'Agritech Solutions'
      ],
      projects: [
        { title: 'Smart Farming', description: 'IoT-enabled agricultural systems' },
        { title: 'Food Preservation', description: 'Advanced preservation techniques' },
        { title: 'Dairy Innovation', description: 'Modern dairy processing' },
        { title: 'Sustainable Packaging', description: 'Eco-friendly food packaging' }
      ]
    }
  }

  const dept = departments[departmentId]

  if (!dept) {
    return (
      <main className="min-h-screen bg-background text-foreground grid-bg">
        <Navbar />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-primary">Department Not Found</h1>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground grid-bg">
      <Navbar />

      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-primary hover:text-accent transition mb-8 inline-flex items-center gap-2">
            ← Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2 neon-text">
            {dept.name}
          </h1>
          <p className="text-2xl text-accent font-semibold mb-4">{dept.fullName}</p>
          <p className="text-foreground/80 text-lg mb-12 max-w-3xl">{dept.description}</p>

          {/* Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dept.highlights.map((highlight, idx) => (
                <div key={idx} className="neon-border-cyan p-4 flex items-start gap-3 hover-glow">
                  <span className="text-accent text-xl">•</span>
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dept.projects.map((project, idx) => (
                <div key={idx} className="neon-border-cyan p-6 hover-glow">
                  <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
                  <p className="text-foreground/70">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-foreground/60 mb-4">Interested in this department?</p>
            <button className="neon-border-green px-8 py-3 text-accent font-semibold hover-glow">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
