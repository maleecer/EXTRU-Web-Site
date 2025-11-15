'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projectsByAssociation = [
    {
      association: 'ATiT',
      logo: '/atit-logo.png',
      color: 'cyan',
      projects: [
        { 
          id: 1, 
          title: 'AI-Powered Chatbot', 
          description: 'Intelligent customer service automation using NLP', 
          image: '/placeholder.jpg',
          fullDescription: 'An advanced AI-powered chatbot that uses Natural Language Processing to understand and respond to customer queries. Built with modern machine learning frameworks, it provides 24/7 automated support with high accuracy.',
          technologies: ['Python', 'TensorFlow', 'NLTK', 'React'],
          team: ['Student 1', 'Student 2', 'Student 3'],
          year: '2026'
        },
        { 
          id: 2, 
          title: 'Blockchain Voting System', 
          description: 'Secure and transparent digital voting platform', 
          image: '/placeholder.jpg',
          fullDescription: 'A decentralized voting system built on blockchain technology ensuring transparency, security, and immutability of votes. Features include voter authentication, real-time results, and complete audit trails.',
          technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Node.js'],
          team: ['Student 4', 'Student 5', 'Student 6'],
          year: '2026'
        },
        { 
          id: 3, 
          title: 'Cybersecurity Dashboard', 
          description: 'Real-time threat detection and monitoring', 
          image: '/placeholder.jpg',
          fullDescription: 'A comprehensive cybersecurity monitoring dashboard that provides real-time threat detection, network analysis, and security alerts. Includes machine learning models for anomaly detection.',
          technologies: ['Python', 'Splunk', 'ELK Stack', 'React'],
          team: ['Student 7', 'Student 8'],
          year: '2026'
        }
      ]
    },
    {
      association: 'ASEET',
      logo: '/aseet-logo.png',
      color: 'cyan',
      projects: [
        { 
          id: 4, 
          title: 'IoT Smart Home', 
          description: 'Automated home control with sensors and microcontrollers', 
          image: '/placeholder.jpg',
          fullDescription: 'An integrated IoT system for home automation featuring smart lighting, temperature control, security monitoring, and energy management. Controlled via mobile app with voice command support.',
          technologies: ['Arduino', 'ESP32', 'MQTT', 'Flutter'],
          team: ['Student 9', 'Student 10', 'Student 11'],
          year: '2026'
        },
        { 
          id: 5, 
          title: 'Nano-sensor Array', 
          description: 'Advanced nanotechnology for environmental monitoring', 
          image: '/placeholder.jpg',
          fullDescription: 'A network of nano-scale sensors for detecting environmental pollutants with high precision. Capable of real-time air quality monitoring and hazardous substance detection.',
          technologies: ['Nanotechnology', 'C++', 'LoRaWAN', 'Python'],
          team: ['Student 12', 'Student 13'],
          year: '2026'
        },
        { 
          id: 6, 
          title: 'Solar Power Optimizer', 
          description: 'Maximum power point tracking system', 
          image: '/placeholder.jpg',
          fullDescription: 'An intelligent solar power optimization system using MPPT algorithms to maximize energy harvest from solar panels. Features weather prediction integration and battery management.',
          technologies: ['Embedded C', 'Arduino', 'MPPT', 'IoT'],
          team: ['Student 14', 'Student 15'],
          year: '2026'
        }
      ]
    },
    {
      association: 'AMT',
      logo: '/amt-logo.png',
      color: 'green',
      projects: [
        { 
          id: 7, 
          title: 'Autonomous Robot', 
          description: 'Self-navigating robot for industrial automation', 
          image: '/placeholder.jpg',
          fullDescription: 'A fully autonomous mobile robot designed for industrial environments. Features SLAM navigation, obstacle avoidance, and automated task execution for warehouse and manufacturing operations.',
          technologies: ['ROS', 'Python', 'LiDAR', 'Computer Vision'],
          team: ['Student 16', 'Student 17', 'Student 18'],
          year: '2026'
        },
        { 
          id: 8, 
          title: 'Smart Irrigation System', 
          description: 'Water conservation through automated agriculture', 
          image: '/placeholder.jpg',
          fullDescription: 'An intelligent irrigation system that optimizes water usage based on soil moisture, weather forecasts, and crop requirements. Reduces water consumption by up to 40% while improving crop yields.',
          technologies: ['IoT', 'Sensors', 'Machine Learning', 'Mobile App'],
          team: ['Student 19', 'Student 20'],
          year: '2026'
        },
        { 
          id: 9, 
          title: '3D Printed Prosthetics', 
          description: 'Affordable prosthetic limbs using additive manufacturing', 
          image: '/placeholder.jpg',
          fullDescription: 'Custom-designed prosthetic limbs created using 3D printing technology. Significantly reduces cost while maintaining functionality and comfort. Includes modular design for easy customization.',
          technologies: ['CAD', '3D Printing', 'Biomechanics', 'Materials Science'],
          team: ['Student 21', 'Student 22'],
          year: '2026'
        }
      ]
    },
    {
      association: 'RUBIC',
      logo: '/rubic-logo.png',
      color: 'cyan',
      projects: [
        { 
          id: 10, 
          title: 'Bio-plastic Production', 
          description: 'Eco-friendly plastic from agricultural waste', 
          image: '/placeholder.jpg',
          fullDescription: 'Sustainable bio-plastic production from agricultural waste materials. Biodegradable and environmentally friendly alternative to conventional plastics with similar mechanical properties.',
          technologies: ['Biotechnology', 'Fermentation', 'Chemical Engineering'],
          team: ['Student 23', 'Student 24', 'Student 25'],
          year: '2026'
        },
        { 
          id: 11, 
          title: 'DNA Sequencing Tool', 
          description: 'Low-cost genetic analysis platform', 
          image: '/placeholder.jpg',
          fullDescription: 'An affordable DNA sequencing platform designed for educational and research purposes. Makes genetic analysis accessible with simplified workflow and automated data analysis.',
          technologies: ['Molecular Biology', 'Bioinformatics', 'Python', 'Lab Equipment'],
          team: ['Student 26', 'Student 27'],
          year: '2026'
        },
        { 
          id: 12, 
          title: 'Enzyme Bioreactor', 
          description: 'Industrial enzyme production optimization', 
          image: '/placeholder.jpg',
          fullDescription: 'Optimized bioreactor system for large-scale enzyme production. Features automated control of pH, temperature, and nutrient supply for maximum enzyme yield and quality.',
          technologies: ['Bioprocess Engineering', 'Automation', 'Sensors', 'Control Systems'],
          team: ['Student 28', 'Student 29'],
          year: '2026'
        }
      ]
    },
    {
      association: 'AFRU',
      logo: '/afru-logo.png',
      color: 'cyan',
      projects: [
        { 
          id: 13, 
          title: 'Food Safety Detector', 
          description: 'Rapid contamination detection system', 
          image: '/placeholder.jpg',
          fullDescription: 'A portable device for rapid detection of food contaminants and pathogens. Provides results in minutes using biosensor technology, ensuring food safety at every stage of the supply chain.',
          technologies: ['Biosensors', 'Microbiology', 'Electronics', 'Mobile App'],
          team: ['Student 30', 'Student 31'],
          year: '2026'
        },
        { 
          id: 14, 
          title: 'Smart Dairy Monitor', 
          description: 'Real-time milk quality analysis', 
          image: '/placeholder.jpg',
          fullDescription: 'Real-time milk quality monitoring system that analyzes fat content, protein levels, and detects adulterants. IoT-enabled for continuous monitoring throughout the dairy supply chain.',
          technologies: ['IoT', 'Spectroscopy', 'Data Analytics', 'Cloud Computing'],
          team: ['Student 32', 'Student 33'],
          year: '2026'
        },
        { 
          id: 15, 
          title: 'Fruit Ripening Control', 
          description: 'Ethylene-based ripening optimization', 
          image: '/placeholder.jpg',
          fullDescription: 'Automated fruit ripening system using controlled ethylene application. Optimizes ripening time, reduces waste, and ensures consistent quality for commercial fruit distribution.',
          technologies: ['Automation', 'Sensors', 'Control Systems', 'Food Science'],
          team: ['Student 34', 'Student 35'],
          year: '2026'
        }
      ]
    }
  ]

  return (
    <section id="projects" className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Featured Projects
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="space-y-16">
          {projectsByAssociation.map((assoc, idx) => (
            <div key={idx} className="space-y-6">
              {/* Association Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 relative">
                  <Image 
                    src={assoc.logo} 
                    alt={`${assoc.association} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent">{assoc.association}</h3>
                  <div className="h-0.5 w-20 bg-gradient-to-r from-primary to-transparent mt-2"></div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {assoc.projects.map((project) => (
                  <div 
                    key={project.id} 
                    className="neon-border-cyan group hover-glow transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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
              <div className="sticky top-0 bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/30 p-6 flex justify-between items-start backdrop-blur-md">
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
              <div className="border-t border-primary/30 p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
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
