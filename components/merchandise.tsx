'use client'

import { useState } from 'react'
import PreOrderModal from './pre-order-modal'

export default function Merchandise() {
  const [selectedItem, setSelectedItem] = useState<{ name: string; price: string } | null>(null)

  const items = [
    {
      id: 1,
      name: 'EXTRU 2026 T-Shirt',
      price: 'Rs 1800.00',
      image: '/extru-2026-tshirt-neon.jpg'
    },
    
    {
      id: 2,
      name: 'Wristband',
      price: 'Rs 200.00',
      image: '/wristband.jpg'
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
              <button 
                onClick={() => setSelectedItem({ name: item.name, price: item.price })}
                className="w-full neon-border-green px-4 py-2 text-sm font-semibold text-accent hover-glow transition"
              >
                Pre-Order Now
              </button>
            </div>
          ))}
        </div>

        {/* Pre-Order Modal */}
        <PreOrderModal
          isOpen={selectedItem !== null}
          onClose={() => setSelectedItem(null)}
          itemName={selectedItem?.name || ''}
          itemPrice={selectedItem?.price || ''}
        />
      </div>
    </section>
  )
}
