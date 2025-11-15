'use client'

import Link from 'next/link'

export default function Merchandise() {
  const items = [
    {
      id: 1,
      name: 'EXTRU 2026 T-Shirt',
      price: '$15',
      image: '/extru-2026-tshirt-neon.jpg'
    },
    {
      id: 2,
      name: 'Hoodie',
      price: '$35',
      image: '/extru-2026-hoodie-tech.jpg'
    },
    {
      id: 3,
      name: 'Sticker Pack',
      price: '$5',
      image: '/tech-stickers-neon.jpg'
    },
    {
      id: 4,
      name: 'Cap',
      price: '$12',
      image: '/extru-2026-cap.jpg'
    }
  ]

  return (
    <section id="merchandise" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Merchandise
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {items.map((item) => (
            <div key={item.id} className="neon-border-cyan p-4 hover-glow group">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded mb-4 overflow-hidden">
                <img 
                  src={item.image || "/placeholder.svg"} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-accent mb-2">{item.name}</h3>
              <p className="text-primary text-lg font-bold mb-4">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/merchandise">
            <button className="neon-border-green px-12 py-4 text-lg font-semibold text-accent hover-glow inline-block">
              Pre-Order Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
