'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function MerchandisePage() {
  const [cart, setCart] = useState<any[]>([])

  const products = [
    { id: 1, name: 'EXTRU 2026 T-Shirt', price: 15, sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: '/extru-2026-tshirt-neon.jpg' },
    { id: 2, name: 'Hoodie', price: 35, sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: '/extru-2026-hoodie-tech.jpg' },
    { id: 3, name: 'Sticker Pack', price: 5, sizes: ['One Size'], image: '/tech-stickers-neon.jpg' },
    { id: 4, name: 'Cap', price: 12, sizes: ['One Size'], image: '/extru-2026-cap.jpg' },
    { id: 5, name: 'Water Bottle', price: 20, sizes: ['One Size'], image: '/extru-2026-water-bottle.jpg' },
    { id: 6, name: 'Tote Bag', price: 18, sizes: ['One Size'], image: '/extru-2026-tote-bag.jpg' }
  ]

  const addToCart = (product: any, size: string) => {
    setCart([...cart, { ...product, selectedSize: size }])
  }

  return (
    <main className="min-h-screen bg-background text-foreground grid-bg">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2 neon-text">
            EXTRU 2026 Merchandise
          </h1>
          <p className="text-foreground/60 text-lg mb-12">
            Secure your official EXTRU 2026 merchandise before the event!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="neon-border-cyan p-6 hover-glow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded mb-4 overflow-hidden">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-2">{product.name}</h3>
                <p className="text-primary text-xl font-bold mb-4">${product.price}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-foreground/60 mb-2">Sizes:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => addToCart(product, size)}
                        className="neon-border-cyan px-3 py-1 text-sm hover:bg-primary/20 transition"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => addToCart(product, product.sizes[0])}
                  className="w-full neon-border-green py-2 text-accent font-semibold hover-glow"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <div className="mt-12 p-6 neon-border-cyan">
              <h2 className="text-2xl font-bold text-primary mb-4">Cart ({cart.length})</h2>
              <div className="space-y-2">
                {cart.map((item, idx) => (
                  <p key={idx} className="text-foreground">
                    {item.name} ({item.selectedSize}) - ${item.price}
                  </p>
                ))}
              </div>
              <p className="text-lg font-bold text-accent mt-4">
                Total: ${cart.reduce((sum, item) => sum + item.price, 0)}
              </p>
              <button className="neon-border-green px-8 py-3 text-accent font-semibold mt-4 hover-glow">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
