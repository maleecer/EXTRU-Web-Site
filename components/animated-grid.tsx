'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const gridSize = 40
    let time = 0

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set tech-style grid line style with glow
      ctx.strokeStyle = 'rgba(51, 225, 255, 0.2)'
      ctx.lineWidth = 1.5
      ctx.shadowBlur = 8
      ctx.shadowColor = 'rgba(51, 225, 255, 0.4)'

      // Calculate offsets with circular/spiral motion
      time += 0.3
      const offsetX = time * 2 % gridSize
      const offsetY = time * 2 % gridSize

      // Draw vertical lines
      for (let x = (offsetX % gridSize) - gridSize; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = (offsetY % gridSize) - gridSize; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw intersection dots for tech effect with pulsing
      ctx.shadowBlur = 10 + Math.sin(time * 2) * 3
      ctx.shadowColor = 'rgba(51, 225, 255, 0.6)'
      ctx.fillStyle = 'rgba(51, 225, 255, 0.3)'
      for (let x = (offsetX % gridSize) - gridSize; x < canvas.width + gridSize; x += gridSize) {
        for (let y = (offsetY % gridSize) - gridSize; y < canvas.height + gridSize; y += gridSize) {
          ctx.beginPath()
          ctx.arc(x, y, 1.5 + Math.sin(time * 3) * 0.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
