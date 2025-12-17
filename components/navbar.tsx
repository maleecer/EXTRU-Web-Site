"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "recap",
        "merchandise",
        "departments",
        "sponsors",
        "organizing-committee",
        "projects",
        "schedule",
        "contact",
      ];
      const scrollPosition = window.scrollY + 150; // Adjust offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            return;
          }
        }
      }

      // Default to home if at top
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          aria-label="Scroll to home"
        >
          <span className="logo-wrap rounded-md p-1">
            <Image
              src="/EXTRU LOGO white 1.png"
              alt="EXTRU 2026 Logo - Annual Technology Exhibition"
              width={80}
              height={48}
              className="logo-img w-20 h-auto animate-pulse-glow"
              style={{
                filter:
                  "drop-shadow(0 0 15px rgba(59, 130, 246, 0.7)) drop-shadow(0 0 25px rgba(59, 130, 246, 0.3))",
              }}
            />
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            "home",
            "about",
            "recap",
            "merchandise",
            "projects",
            "schedule",
            "contact",
          ].map((section) => (
            <button
              key={section}
              id={`nav-${section}`}
              onClick={() => scrollToSection(section)}
              className={`transition-all duration-300 text-sm font-semibold tracking-wide uppercase hover:scale-105 hover:text-primary relative ${
                activeSection === section
                  ? "text-primary scale-105"
                  : "text-muted-foreground"
              }`}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {section}
              {activeSection === section && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              )}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-primary hover:text-accent transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden glass-panel border-t border-primary/20 px-4 py-4 flex flex-col gap-3">
          {[
            "home",
            "about",
            "recap",
            "merchandise",
            "projects",
            "schedule",
            "contact",
          ].map((section) => (
            <button
              key={`mobile-${section}`}
              id={`nav-mobile-${section}`}
              onClick={() => scrollToSection(section)}
              className={`transition-all duration-300 text-left font-semibold tracking-wide uppercase hover:translate-x-2 hover:text-primary py-2 ${
                activeSection === section
                  ? "text-primary translate-x-1"
                  : "text-muted-foreground"
              }`}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {section}
            </button>
          ))}
        </div>
      )}{" "}
      {/* Professional accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6) 20%, rgba(59, 130, 246, 0.9) 50%, rgba(59, 130, 246, 0.6) 80%, transparent)",
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
          animation: "accentLinePulse 3s ease-in-out infinite",
        }}
      ></div>
      <style jsx>{`
        @keyframes accentLinePulse {
          0%,
          100% {
            opacity: 0.7;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.8))
              drop-shadow(0 0 20px rgba(59, 130, 246, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 1))
              drop-shadow(0 0 32px rgba(59, 130, 246, 0.6));
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        /* Neon static halo behind logo (no animation) */
        .logo-wrap {
          position: relative;
          display: inline-block;
          border-radius: 0.5rem; /* matches rounded-md */
          padding: 4px; /* space so the halo sits outside the image */
          /* keep layout neutral; visual glow comes from ::before */
        }

        .logo-wrap::before {
          content: "";
          position: absolute;
          inset: -8px; /* controls thickness of halo */
          border-radius: inherit;
          z-index: -1; /* place behind the image */
          pointer-events: none;
          /* subtle neon halo using gradient + blur */
          background: radial-gradient(
            circle at 30% 40%,
            rgba(0, 240, 255, 0.95) 0%,
            rgba(0, 240, 255, 0.55) 25%,
            rgba(0, 240, 255, 0.18) 45%,
            rgba(0, 240, 255, 0.06) 60%,
            transparent 70%
          );
          filter: blur(6px);
          opacity: 0.95;
        }

        .logo-img {
          display: block;
          border-radius: 0.375rem; /* slightly smaller to fit inside the halo */
          position: relative;
          z-index: 1; /* ensure image sits above the halo */
        }
      `}</style>
    </nav>
  );
}
