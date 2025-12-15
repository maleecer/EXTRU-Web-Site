'use client'

import { useState } from 'react'
import PreOrderModal from './pre-order-modal'

type Item = {
  id: number
  name: string
  price: string
  images: string[]
  inStock?: boolean
}

export default function Merchandise() {
  const [selectedItem, setSelectedItem] = useState<{ name: string; price: string } | null>(null)
  // Grouped items
  const shirts: Item[] = [
    {
      id: 1,
      name: 'EXTRU 2026 T-Shirt',
      price: 'Rs 1800.00',
      images: ['/extru-2026-tshirt-neon.jpg'],
      inStock: true
    }
  ]

  const bangles: Item[] = [
    {
      id: 2,
      name: 'Wristband Blue',
      price: 'Rs 200.00',
      images: ['/Merchandise/Blue.png', '/Merchandise/Blue-side.png'],
      inStock: true
    },
    {
      id: 3,
      name: 'Wristband Red',
      price: 'Rs 200.00',
      images: ['/Merchandise/Red.png', '/Merchandise/Red-side.png'],
      inStock: true
    },
    {
      id: 4,
      name: 'Wristband Black',
      price: 'Rs 200.00',
      images: ['/Merchandise/Black.png', '/Merchandise/Black-side.png'],
      inStock: true
    },
    {
      id: 3,
      name: 'Wristband Blue Mixed',
      price: 'Rs 200.00',
      images: ['/Merchandise/Blue-shade.png', '/Merchandise/Blue-shade-side.png'],
      inStock: true
    },
    {
      id: 4,
      name: 'Wristband Red Mixed',
      price: 'Rs 200.00',
      images: ['/Merchandise/Red-shade.png', '/Merchandise/Red-shade-side.png'],
      inStock: true
    },
  ]

  return (
    <section id="merchandise" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Merchandise
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        {/* Shirts Section */}
        <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-orbitron)' }}>Shirts</h3>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {shirts.map((item) => (
            <div key={item.id} className="neon-border-cyan p-4 hover-glow group">
              {/* Top view (main) */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded overflow-hidden">
                <img
                  src={item.images?.[0] || "/placeholder.svg"}
                  alt={`${item.name} top view`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Side/bottom view (optional) */}
              {item.images && item.images[1] && (
                <div className="mt-3 aspect-video rounded overflow-hidden">
                  <img
                    src={item.images[1]}
                    alt={`${item.name} side view`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-accent">{item.name}</h3>
                  {!item.inStock && (
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-destructive/20 text-destructive border border-destructive/40">
                      Out of Stock
                    </span>
                  )}
                </div>
                <p className="text-primary text-lg font-bold mb-4">{item.price}</p>
                <button
                  onClick={() => {
                    if (!item.inStock) return
                    setSelectedItem({ name: item.name, price: item.price })
                  }}
                  disabled={!item.inStock}
                  aria-disabled={!item.inStock}
                  className={`w-full neon-border-green px-4 py-2 text-sm font-semibold transition ${
                    item.inStock ? 'text-accent hover-glow' : 'text-muted-foreground cursor-not-allowed opacity-60'
                  }`}
                >
                  {item.inStock ? 'Pre-Order Now' : 'Unavailable'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bangles Section */}
        <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-orbitron)' }}>Bangles</h3>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {bangles.map((item) => (
            <div key={item.id} className="neon-border-cyan p-4 hover-glow group">
              {/* Top view (main) */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded overflow-hidden">
                <img
                  src={item.images?.[0] || "/placeholder.svg"}
                  alt={`${item.name} top view`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Side/bottom view (optional) */}
              {item.images && item.images[1] && (
                <div className="mt-3 aspect-video rounded overflow-hidden">
                  <img
                    src={item.images[1]}
                    alt={`${item.name} side view`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-accent">{item.name}</h3>
                  {!item.inStock && (
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-destructive/20 text-destructive border border-destructive/40">
                      Out of Stock
                    </span>
                  )}
                </div>
                <p className="text-primary text-lg font-bold mb-4">{item.price}</p>
                <button
                  onClick={() => {
                    if (!item.inStock) return
                    setSelectedItem({ name: item.name, price: item.price })
                  }}
                  disabled={!item.inStock}
                  aria-disabled={!item.inStock}
                  className={`w-full neon-border-green px-4 py-2 text-sm font-semibold transition ${
                    item.inStock ? 'text-accent hover-glow' : 'text-muted-foreground cursor-not-allowed opacity-60'
                  }`}
                >
                  {item.inStock ? 'Pre-Order Now' : 'Unavailable'}
                </button>
              </div>
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
