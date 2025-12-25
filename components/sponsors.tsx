'use client'

import { useState } from 'react'

export default function Sponsors() {
  const [sponsorImages, setSponsorImages] = useState<string[]>([])
  const [shareMessage, setShareMessage] = useState('')
  const [showForm, setShowForm] = useState(false)

  const sponsors = [
    { id: 1, name: 'Tech Corp', image: '/placeholder.svg?key=sc001' },
    { id: 2, name: 'Innovation Labs', image: '/placeholder.svg?key=sc002' },
    { id: 3, name: 'Digital Solutions', image: '/placeholder.svg?key=sc003' },
    { id: 4, name: 'Future Systems', image: '/placeholder.svg?key=sc004' }
  ]

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        setSponsorImages([...sponsorImages, event.target?.result as string])
      }
      reader.readAsDataURL(file)
    }
  }

  const handleShare = () => {
    if (sponsorImages.length > 0) {
      console.log('Sharing sponsor images:', sponsorImages)
      console.log('Message:', shareMessage)
      alert('Sponsor images shared successfully!')
      setSponsorImages([])
      setShareMessage('')
      setShowForm(false)
    }
  }

  return (
    <section id="sponsors" className="relative pt-20 pb-0 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 neon-text">
          Our Sponsors
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>

        {/* Sponsors Scrolling Animation */}
        <div className="relative overflow-hidden mb-12">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .scroll-container {
              display: flex;
              animation: scroll 20s linear infinite;
              width: fit-content;
            }
            .scroll-container:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="scroll-container">
            {/* Render sponsors twice for seamless loop */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={`${sponsor.id}-${index}`} className="neon-border-cyan p-6 hover-glow flex items-center justify-center h-32 mx-3 min-w-[250px]">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏢</div>
                  <p className="font-semibold text-foreground">{sponsor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowForm(!showForm)}
            className="neon-border-green px-8 py-3 text-accent font-semibold hover-glow inline-block"
          >
            {showForm ? 'Cancel' : 'Share Sponsor Photos'}
          </button>
        </div>

        {/* Share Form */}
        {showForm && (
          <div className="neon-border-cyan p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-accent mb-6">Share Sponsor Pictures</h3>

            <div className="mb-6">
              <label className="block text-foreground mb-2 font-semibold">Upload Images</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-3 bg-background border border-primary/30 rounded text-foreground"
              />
            </div>

            {/* Preview uploaded images */}
            {sponsorImages.length > 0 && (
              <div className="mb-6">
                <p className="text-foreground mb-3 font-semibold">Uploaded Images ({sponsorImages.length})</p>
                <div className="grid grid-cols-3 gap-3">
                  {sponsorImages.map((img, idx) => (
                    <div key={idx} className="relative">
                      <img src={img || "/placeholder.svg"} alt={`Upload ${idx}`} className="w-full h-24 object-cover rounded neon-border" />
                      <button
                        onClick={() => setSponsorImages(sponsorImages.filter((_, i) => i !== idx))}
                        className="absolute top-1 right-1 bg-destructive text-white px-2 py-1 rounded text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-foreground mb-2 font-semibold">Share Message</label>
              <textarea
                value={shareMessage}
                onChange={(e) => setShareMessage(e.target.value)}
                placeholder="Add a message to accompany your sponsor photos..."
                className="w-full p-3 bg-background border border-primary/30 rounded text-foreground placeholder-foreground/50"
                rows={4}
              />
            </div>

            {/* Share button */}
            <button
              onClick={handleShare}
              disabled={sponsorImages.length === 0}
              className={`w-full neon-border-green py-3 text-accent font-semibold ${
                sponsorImages.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover-glow'
              }`}
            >
              Share Now
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
