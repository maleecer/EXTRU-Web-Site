'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [expandedAssoc, setExpandedAssoc] = useState<Record<string, boolean>>({})

  const projectsByAssociation = [
    {
      association: 'ATiT',
      logo: '/atit-logo.png',
      color: 'cyan',
      projects: [
        { 
          id: 1, 
          title: 'Smart House Automation System', 
          description: 'IoT-based home automation for energy efficiency', 
          image: '/ATIT/Smart house.jpg',
          fullDescription: 'Home automation system that integrates IoT devices to control lighting, temperature, and security. Features energy-efficient algorithms and remote access via mobile app.',
          technologies: ['Arduino', 'Sensors', 'Mobile App'],
          team: ['Student 6',],
          year: '2025'
        },
        { 
          id: 2, 
          title: 'Automated Trafic Light System', 
          description: 'Traffic signal system using computer vision', 
          image: '/ATIT/Automated Color Light System.jpg',
          fullDescription: 'Color light system that adjusts signals based on real-time traffic and pedestrian data using computer vision techniques.',
          technologies: ['Image Processing', 'Python', 'Microcontrollers','Ultrasonic Sensors','PIR Sensors'],
          team: ['Student 6',],
          year: '2025'
        },
        { 
          id: 3, 
          title: 'Arduino CNC Drawing Machine', 
          description: 'A low-cost, Arduino-based CNC drawing machine that automatically draws images, patterns, and text on paper with high accuracy.', 
          image: '/ATIT/01.jpg',
          fullDescription: '',
          technologies: [''],
          team: ['Student 6',],
          year: '2025'
        },
        
        { 
          id: 4, 
          title: '', 
          description: '', 
          image: '/ATIT/02.jpg',
          fullDescription: '',
          technologies: [''],
          team: ['Student 6',],
          year: '2025'
        },
        { 
          id: 5, 
          title: '', 
          description: '', 
          image: '/ATIT/03.jpg',
          fullDescription: '',
          technologies: [''],
          team: ['Student 6',],
          year: '2025'
        },
        { 
          id: 6, 
          title: '', 
          description: '', 
          image: '/ATIT/04.jpg',
          fullDescription: '',
          technologies: [''],
          team: ['Student 6',],
          year: '2025'
        },
      ]
    },
    {
      association: 'ASEET',
      logo: '/aseet-logo.png',
      color: 'cyan',
      projects: [
        { 
          id: 20, 
          title: '', 
          description: '', 
          image: '/ASEET/01.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 21, 
          title: '', 
          description: '', 
          image: '/ASEET/02.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 22, 
          title: '', 
          description: '', 
          image: '/ASEET/03.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 23, 
          title: '', 
          description: '', 
          image: '/ASEET/04.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 24, 
          title: '', 
          description: '', 
          image: '/ASEET/05.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 25, 
          title: '', 
          description: '', 
          image: '/ASEET/06.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 26, 
          title: '', 
          description: '', 
          image: '/ASEET/07.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 27, 
          title: '', 
          description: '', 
          image: '/ASEET/08.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 28, 
          title: '', 
          description: '', 
          image: '/ASEET/09.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 29, 
          title: '', 
          description: '', 
          image: '/ASEET/10.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
        { 
          id: 30, 
          title: '', 
          description: '', 
          image: '/ASEET/11.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 9',],
          year: '2025'
        },
      ]
    },
    {
      association: 'AMT',
      logo: '/amt-logo.png',
      color: 'green',
      projects: [
        { 
          id: 40, 
          title: '', 
          description: '', 
          image: 'AMT/01.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 16',],
          year: '2025'
        },
        { 
          id: 41, 
          title: '', 
          description: '', 
          image: 'AMT/02.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 16',],
          year: '2025'
        },
        { 
          id: 42, 
          title: '', 
          description: '', 
          image: 'AMT/03.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 16',],
          year: '2025'
        },
        { 
          id: 43, 
          title: '', 
          description: '', 
          image: 'AMT/04.jpg',
          fullDescription: '',
          technologies: ['', '', '', ''],
          team: ['Student 16',],
          year: '2025'
        },
      ]
    },
    {
      association: 'RUBIC',
      logo: '/rubic-logo.png',
      color: 'cyan',
      projects: [
        { 
          id: 60, 
          title: '', 
          description: '', 
          image: '/RUBIC/01.jpg',
          fullDescription: '',
          technologies: ['', '', ''],
          team: ['Student 23',],
          year: '2025'
        },
        { 
          id: 61, 
          title: '', 
          description: '', 
          image: '/RUBIC/02.jpg',
          fullDescription: '',
          technologies: ['', '', ''],
          team: ['Student 23',],
          year: '2025'
        },
        { 
          id: 62, 
          title: '', 
          description: '', 
          image: '/RUBIC/03.jpg',
          fullDescription: '',
          technologies: ['', '', ''],
          team: ['Student 23',],
          year: '2025'
        },
        { 
          id: 63, 
          title: '', 
          description: '', 
          image: '/RUBIC/04.jpg',
          fullDescription: '',
          technologies: ['', '', ''],
          team: ['Student 23',],
          year: '2025'
        },
        { 
          id: 64, 
          title: '', 
          description: '', 
          image: '/RUBIC/05.jpg',
          fullDescription: '',
          technologies: ['', '', ''],
          team: ['Student 23',],
          year: '2025'
        },
        { 
          id: 65, 
          title: '', 
          description: '', 
          image: '/RUBIC/06.jpg',
          fullDescription: '',
          technologies: ['', '', ''],
          team: ['Student 23',],
          year: '2025'
        },
        { 
          id: 66, 
          title: '', 
          description: '', 
          image: '/RUBIC/07.jpg',
          fullDescription: '',
          technologies: ['', '', ''],
          team: ['Student 23',],
          year: '2025'
        },
      ]
    },
    {
      association: 'AFRU',
      logo: '/afru-logo.png',
      color: 'cyan',
      projects: [
        { 
          id: 80, 
          title: 'Nutran Rice', 
          description: 'Rice enriched with additional nutrients for better health', 
          image: '/AFRU/Nutran Rice.jpeg',
          fullDescription: 'Rice fortified with essential vitamins and minerals to enhance nutritional value. Developed using advanced agricultural techniques to support better health outcomes in communities reliant on rice as a staple food.',
          technologies: ['Food Science', '',],
          team: ['Student 5'],
          year: '2025'
        },
        { 
          id: 81, 
          title: 'Coco masala hot sauce', 
          description: 'Hot sauce made from diferent types of fruits', 
          image: '/AFRU/Coco masala hot sauce.jpeg',
          fullDescription: 'Hot sauce crafted from a blend of tropical fruits and spices, delivering a unique flavor profile. Perfect for adding a spicy kick to any dish while enjoying the natural sweetness of fruits.',
          technologies: ['Food Science', ''],
          team: ['Student 5'],
          year: '2025'
        },
        { 
          id: 82, 
          title: 'Green cob plate', 
          description: 'Plates made from corn cobs as an eco-friendly alternative to plastic', 
          image: '/AFRU/Green cob plate.jpeg',
          fullDescription: 'Eco-friendly plates manufactured from corn cobs, providing a sustainable alternative to single-use plastics. These biodegradable plates are sturdy, compostable, and perfect for eco-conscious consumers.',
          technologies: ['', 'Food Science'],
          team: ['Student 5'],
          year: '2025'
        },
        { 
          id: 83, 
          title: '', 
          description: '', 
          image: '/AFRU/01.jpg',
          fullDescription: '',
          technologies: ['', 'Food Science'],
          team: ['Student 5'],
          year: '2025'
        },
        { 
          id: 84, 
          title: '', 
          description: '', 
          image: '/AFRU/02.jpg',
          fullDescription: '',
          technologies: ['', 'Food Science'],
          team: ['Student 5'],
          year: '2025'
        },
      ]
    },{
      association: 'ROST',
      logo: '/rost-logo.png',
      color: 'cyan',
      projects: [
        { 
          id: 60, 
          title: '', 
          description: '', 
          image: '/ROST/01.jpg',
          fullDescription: '',
          technologies: ['', '', ''],
          team: ['Student 23',],
          year: '2025'
        },
        { 
          id: 61, 
          title: '', 
          description: '', 
          image: '/ROST/02.jpg',
          fullDescription: '',
          technologies: ['', '', ''],
          team: ['Student 23',],
          year: '2025'
        },
      ]
    }
  ]

  return (
    <section id="projects" className="relative pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Featured Projects
        </h2>
        <div className="h-1 w-32 bg-linear-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="space-y-16">
          {projectsByAssociation.map((assoc, idx) => (
            <div key={idx} className="space-y-6">
              {/* Association Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 relative">
                  <Image 
                    src={assoc.logo} 
                    alt="EXTRU"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent">{assoc.association}</h3>
                  <div className="h-0.5 w-20 bg-linear-to-r from-primary to-transparent mt-2"></div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {(expandedAssoc[assoc.association] ? assoc.projects : assoc.projects.slice(0, 6)).map((project) => (
                  <div 
                    key={project.id} 
                    className="neon-border-cyan group hover-glow transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image */}
                    <div className="aspect-video bg-linear-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-semibold">View Details →</span>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* See more / See less */}
              {assoc.projects.length > 6 && (
                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      setExpandedAssoc((prev) => ({
                        ...prev,
                        [assoc.association]: !prev[assoc.association],
                      }))
                    }
                    className="mt-2 px-5 py-2 neon-border-cyan text-accent hover-glow font-semibold"
                  >
                    {expandedAssoc[assoc.association] ? 'See less' : 'See more'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-[#05232e] border-2 border-primary/50 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_30px_rgba(51,225,255,0.3)] animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-linear-to-r from-primary/20 to-secondary/20 border-b border-primary/30 p-6 flex justify-between items-start backdrop-blur-md">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-accent text-sm">{selectedProject.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-primary hover:text-accent transition-colors text-3xl leading-none ml-4"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="aspect-video relative rounded-lg overflow-hidden border border-primary/30">
                  <Image 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Full Description */}
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">About This Project</h4>
                  <p className="text-white leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, idx: number) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">Team Members</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.team.map((member: string, idx: number) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-sm">
                          {member.charAt(0)}
                        </div>
                        <span className="text-white text-sm font-medium">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div className="flex items-center gap-2 text-foreground/70">
                  <span className="text-sm">📅</span>
                  <span className="text-sm">Project Year: <span className="text-accent font-semibold">{selectedProject.year}</span></span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-primary/30 p-6 bg-linear-to-r from-primary/10 to-secondary/10">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(51,225,255,0.5)]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
