'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface PageLoaderProps {
    isLoading: boolean
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
    const [shouldRender, setShouldRender] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        if (!isLoading) {
            setFadeOut(true)
            const timer = setTimeout(() => {
                setShouldRender(false)
            }, 500) // Match animation duration
            return () => clearTimeout(timer)
        }
    }, [isLoading])

    if (!shouldRender) return null

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Logo */}
            <div className="relative z-10 mb-8">
                <Image
                    src="/EXTRU LOGO white 1.png"
                    alt="EXTRU 2026"
                    width={150}
                    height={90}
                    className="animate-pulse"
                    style={{
                        filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 50px rgba(59, 130, 246, 0.4))'
                    }}
                    priority
                />
            </div>

            {/* Spinning loader */}
            <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-accent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-secondary animate-spin" style={{ animationDuration: '1.5s' }}></div>
                <div className="absolute inset-6 rounded-full border-4 border-transparent border-t-primary/60 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
            </div>

            {/* Loading text */}
            <div className="text-center relative z-10">
                <p
                    className="text-lg font-bold text-primary mb-2"
                    style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                    LOADING
                </p>
                <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
            </div>

            {/* Tagline */}
            <p className="absolute bottom-8 text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-poppins)' }}>
                Faculty of Technology RUSL
            </p>
        </div>
    )
}
