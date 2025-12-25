'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center relative overflow-hidden cursor-default">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {mounted && [...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto">
                {/* Logo */}
                <div className="mb-12 relative cursor-default">
                    <Image
                        src="/EXTRU LOGO white 1.png"
                        alt="EXTRU Logo"
                        width={180}
                        height={180}
                        className="opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* 404 Hanging Board */}
                <div className="relative mb-6 cursor-default">
                    {/* Rope/Chain */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-12 w-1 h-8 md:h-12 bg-gradient-to-b from-muted-foreground/50 to-muted-foreground/30 rounded-full animate-swing origin-top" />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-12 w-0.5 h-8 md:h-12 bg-muted-foreground/20 rounded-full animate-swing-delayed origin-top" style={{ left: 'calc(50% - 2px)' }} />

                    {/* Hanging Board Container */}
                    <div className="relative animate-swing-board">
                        {/* Board Shadow */}
                        <div className="absolute inset-0 bg-card/40 rounded-2xl blur-2xl transform translate-y-8 scale-95" />

                        {/* Main Board */}
                        <div className="relative bg-gradient-to-br from-card via-card to-card/80 border-4 border-primary/30 rounded-2xl px-8 md:px-16 py-6 md:py-10 shadow-2xl">
                            {/* Board texture overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.05)_49%,rgba(59,130,246,0.05)_51%,transparent_52%)] bg-[size:20px_20px] rounded-2xl opacity-50" />

                            {/* Screws/Bolts at corners */}
                            <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-muted-foreground/30 shadow-inner" />
                            <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-muted-foreground/30 shadow-inner" />
                            <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-muted-foreground/30 shadow-inner" />
                            <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-muted-foreground/30 shadow-inner" />

                            {/* 404 Text */}
                            <h1 className="relative text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent select-none drop-shadow-lg">
                                404
                            </h1>

                            {/* Glow effect */}
                            <div className="absolute inset-0 text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none text-primary/5 blur-3xl -z-10 select-none flex items-center justify-center">
                                404
                            </div>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <div className="space-y-4 mb-12 cursor-default">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Page Not Found
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Oops! The page you're looking for seems to have wandered off into the digital void.
                        Let's get you back on track to explore EXTRU 2026.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center cursor-default">
                    <Link href="/">
                        <Button
                            size="lg"
                            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 cursor-pointer"
                        >
                            <Home className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                            Back to Home
                        </Button>
                    </Link>

                    <Link href="/#about">
                        <Button
                            size="lg"
                            variant="outline"
                            className="group border-2 border-primary/50 hover:border-primary text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                            Learn About EXTRU
                        </Button>
                    </Link>
                </div>

                {/* Additional Links */}
                <div className="mt-12 flex flex-wrap gap-6 justify-center text-sm text-muted-foreground cursor-default">
                    <Link
                        href="/#merchandise"
                        className="hover:text-primary transition-colors duration-300 cursor-pointer hover:underline underline-offset-4"
                    >
                        Merchandise
                    </Link>
                    <Link
                        href="/#departments"
                        className="hover:text-primary transition-colors duration-300 cursor-pointer hover:underline underline-offset-4"
                    >
                        Departments
                    </Link>
                    <Link
                        href="/#schedule"
                        className="hover:text-primary transition-colors duration-300 cursor-pointer hover:underline underline-offset-4"
                    >
                        Schedule
                    </Link>
                    <Link
                        href="/#contact"
                        className="hover:text-primary transition-colors duration-300 cursor-pointer hover:underline underline-offset-4"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Event Info */}
                <div className="mt-16 pt-8 border-t border-border/50 cursor-default">
                    <p className="text-muted-foreground">
                        <span className="text-primary font-semibold">EXTRU 2026</span> • February 20-22, 2026
                    </p>
                    <p className="text-sm text-muted-foreground/80 mt-2">
                        Faculty of Technology, Rajarata University of Sri Lanka
                    </p>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0.5;
          }
          75% {
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes swing {
          0%, 100% {
            transform: translateX(-50%) rotate(0deg);
          }
          25% {
            transform: translateX(-50%) rotate(2deg);
          }
          75% {
            transform: translateX(-50%) rotate(-2deg);
          }
        }

        .animate-swing {
          animation: swing 3s ease-in-out infinite;
        }

        .animate-swing-delayed {
          animation: swing 3s ease-in-out infinite;
          animation-delay: 0.1s;
        }

        @keyframes swing-board {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1.5deg);
          }
          75% {
            transform: rotate(-1.5deg);
          }
        }

        .animate-swing-board {
          animation: swing-board 3s ease-in-out infinite;
          transform-origin: center top;
        }
      `}</style>
        </div>
    )
}
