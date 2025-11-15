'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/30 py-12 px-4 md:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="flex items-center justify-center gap-8">
            <Image src="/extru-logo.svg" alt="EXTRU Logo" width={80} height={80} className="h-20 w-auto filter drop-shadow-lg" style={{filter: 'drop-shadow(0 0 15px rgba(51, 225, 255, 0.6))'}} />
            <div className="hidden sm:block border-l-2 border-primary/30 h-20"></div>
            <Image src="/placeholder-logo.svg" alt="RUSL Logo" width={80} height={80} className="h-20 w-auto filter drop-shadow-lg" style={{filter: 'drop-shadow(0 0 15px rgba(51, 225, 255, 0.6))'}} />
          </div>

          <div className="text-center">
            <p className="text-primary font-semibold text-lg">EXTRU 2026 | Rajarata University of Sri Lanka</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li><a href="#" className="hover:text-primary transition">Home</a></li>
              <li><a href="#" className="hover:text-primary transition">About</a></li>
              <li><a href="#" className="hover:text-primary transition">Schedule</a></li>
              <li><a href="#" className="hover:text-primary transition">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li>Email: info@extru2026.com</li>
              <li>Phone: +94 XXX XXX XXXX</li>
              <li>Location: RUSL</li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:text-accent transition">Twitter</a>
              <a href="#" className="text-primary hover:text-accent transition">Facebook</a>
              <a href="#" className="text-primary hover:text-accent transition">LinkedIn</a>
            </div>
          </div>

          <div className="hidden md:block"></div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-foreground/40 text-sm">
            <p>&copy; 2026 EXTRU. All rights reserved.</p>
          </div>
          <div className="text-foreground/40 text-sm">
            <p>EXTRU 2026 | Rajarata University of Sri Lanka</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
