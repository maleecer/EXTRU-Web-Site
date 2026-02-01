'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Departments() {
  const departments = [
    {
      id: 'ict',
      name: 'ATiT',
      fullName: 'Association of Technology in IT',
      description: 'Software development, cybersecurity, and digital innovation',
      color: 'cyan',
      logo: '/atit-logo.png',
      url: 'https://www.atit-rajarata.edu.lk/'
    },
    {
      id: 'ent',
      name: 'ASEET',
      fullName: 'Association of Electrical and Electronic Technology',
      description: 'Electronics, microprocessors, and nanotechnology advances',
      color: 'cyan',
      logo: '/aseet-logo.png'
    },
    {
      id: 'mtt',
      name: 'AMT',
      fullName: 'Association of Materials Technology',
      description: 'Robotics, automation, and mechanical innovations',
      color: 'green',
      logo: '/amt-logo.png'
    },
    {
      id: 'bpt',
      name: 'RUBIC',
      fullName: 'Rajarata University of Bioprocess & Innovation Community',
      description: 'Biotechnology, environmental tech, and bioengineering',
      color: 'cyan',
      logo: '/rubic-logo.png'
    },
    {
      id: 'fdt',
      name: 'AFRU',
      fullName: 'Association of Food Technology Rajarata University of Sri Lanka',
      description: 'Food innovation, dairy technology, and agritech solutions',
      color: 'cyan',
      logo: '/afru-logo.png'
    },
    {
      id: 'rost',
      name: 'ROST',
      fullName: 'Robotic Society of Technology',
      description: 'Science and technology innovation',
      color: 'cyan',
      logo: '/rost-logo.png'
    },
    {
      id: 'fot',
      name: 'FOT Media',
      fullName: 'Faculty of Technology Media',
      description: 'Media and communication technology',
      color: 'cyan',
      logo: '/fot-media-logo.png'
    }
  ]

  return (
    <section id="departments" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Association
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {departments.slice(0, 4).map((dept) => {
            const CardContent = (
              <>
                <div className="w-32 h-32 mb-4 relative flex items-center justify-center">
                  <Image
                    src={dept.logo}
                    alt={`${dept.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-2 flex-grow justify-center">
                  <h3 className="text-2xl font-bold text-accent text-center">{dept.name}</h3>
                  <p className="text-sm text-primary font-semibold text-center">{dept.fullName}</p>
                </div>
              </>
            )

            return dept.url ? (
              <Link
                key={dept.id}
                href={dept.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-border-cyan p-6 hover-glow h-full transition transform hover:scale-105 flex flex-col items-center justify-between cursor-pointer"
              >
                {CardContent}
              </Link>
            ) : (
              <div key={dept.id} className="neon-border-cyan p-6 hover-glow h-full transition transform hover:scale-105 flex flex-col items-center justify-between">
                {CardContent}
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {departments.slice(4, 7).map((dept) => {
            const CardContent = (
              <>
                <div className="w-32 h-32 mb-4 relative flex items-center justify-center">
                  <Image
                    src={dept.logo}
                    alt={`${dept.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-2 flex-grow justify-center">
                  <h3 className="text-2xl font-bold text-accent text-center">{dept.name}</h3>
                  <p className="text-sm text-primary font-semibold text-center">{dept.fullName}</p>
                </div>
              </>
            )

            return dept.url ? (
              <Link
                key={dept.id}
                href={dept.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-border-cyan p-6 hover-glow h-full transition transform hover:scale-105 flex flex-col items-center justify-between cursor-pointer"
              >
                {CardContent}
              </Link>
            ) : (
              <div key={dept.id} className="neon-border-cyan p-6 hover-glow h-full transition transform hover:scale-105 flex flex-col items-center justify-between">
                {CardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
