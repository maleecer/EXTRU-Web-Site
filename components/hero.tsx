"use client";

import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import dynamic from "next/dynamic";

// Dynamically import the 3D model component (client-side only)
const Robot3DModel = dynamic(() => import("@/components/robot-3d-model"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "EXTRU";
  const [typedYear, setTypedYear] = useState("");
  const fullYear = "2026";
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const [showInitialCursor, setShowInitialCursor] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Show initial cursor for 1500ms before typing starts
    const initialTimer = setTimeout(() => {
      setShowInitialCursor(false);

      // Typing animation for EXTRU
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Start typing year after EXTRU is done
          let yearIndex = 0;
          const yearInterval = setInterval(() => {
            if (yearIndex <= fullYear.length) {
              setTypedYear(fullYear.slice(0, yearIndex));
              yearIndex++;
            } else {
              clearInterval(yearInterval);
              // Show final cursor after typing is complete
              setShowFinalCursor(true);
            }
          }, 80);
        }
      }, 100);
    }, 1500);

    return () => {
      clearTimeout(initialTimer);
    };
  }, []);

  // Calculate days remaining to Feb 20, 2026 (local time)
  useEffect(() => {
    const calculateDays = () => {
      const target = new Date(2026, 1, 20, 0, 0, 0); // Feb is month index 1
      const now = new Date();
      const diffMs = target.getTime() - now.getTime();
      const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      setDaysRemaining(days > 0 ? days : 0);
    };

    calculateDays();
    const id = setInterval(calculateDays, 60 * 1000); // refresh every minute
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-10 overflow-visible"
    >
      {/* 3D Robot Model - Absolute positioned within home section */}
      <div className="absolute top-1/2 right-4 xl:right-8 -translate-y-1/2 z-20 hidden lg:block">
        <div
          className={`relative w-[450px] xl:w-[550px] h-[450px] xl:h-[550px] transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
        >
          {/* Professional Holographic Effect - Behind the model */}
          <div
            className="absolute inset-0 rounded-full border border-primary/20 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
              boxShadow:
                "0 0 60px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(59, 130, 246, 0.1)",
              animation: "pulse 4s ease-in-out infinite",
            }}
          ></div>

          {/* Rotating Rings - Behind the model */}
          <div className="absolute inset-10 rounded-full border border-dashed border-primary/15 animate-[spin_20s_linear_infinite] pointer-events-none z-0"></div>
          <div className="absolute inset-20 rounded-full border border-dotted border-secondary/15 animate-[spin_15s_linear_infinite_reverse] pointer-events-none z-0"></div>

          {/* 3D Model - Interactive layer on top */}
          <div className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing">
            <Robot3DModel modelPath="/robot.glb" />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="text-center lg:text-left lg:max-w-3xl">
          {/* Main Title with professional styling */}
          <h1
            className={`text-6xl md:text-8xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-wider transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
            style={{
              fontFamily: "var(--font-poppins)",
              color: "var(--primary)",
              textShadow: `
                0 0 20px rgba(59, 130, 246, 0.6),
                0 0 40px rgba(59, 130, 246, 0.4),
                0 2px 4px rgba(0, 0, 0, 0.5)
              `,
              fontWeight: "800",
              letterSpacing: "0.1em",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            {/* Hidden text for SEO crawlers */}
            <span className="sr-only">EXTRU 2026 - Annual Technology Exhibition at Faculty of Technology RUSL</span>
            <div>
              {showInitialCursor && typedText.length === 0 && (
                <span
                  className="typing-cursor text-primary"
                  style={{
                    display: "inline-block",
                    animation: "blink 0.7s infinite",
                    marginLeft: "4px",
                  }}
                >
                  |
                </span>
              )}
              {typedText.split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    animation: `letterFloat 3s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {char}
                </span>
              ))}
              {typedText.length < fullText.length && !showInitialCursor && (
                <span
                  className="typing-cursor text-primary"
                  style={{
                    display: "inline-block",
                    animation: "blink 0.7s infinite",
                    marginLeft: "4px",
                  }}
                >
                  |
                </span>
              )}
            </div>
            <div>
              {typedYear.split("").map((char, index) => (
                <span
                  key={index}
                  className="text-secondary"
                  style={{
                    display: "inline-block",
                    animation: `letterFloat 3s ease-in-out infinite`,
                    animationDelay: `${(index + 5) * 0.1}s`,
                    textShadow:
                      "0 0 20px rgba(96, 165, 250, 0.7), 0 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {char}
                </span>
              ))}
              {typedText.length === fullText.length &&
                typedYear.length < fullYear.length && (
                  <span
                    className="typing-cursor text-secondary"
                    style={{
                      display: "inline-block",
                      animation: "blink 0.7s infinite",
                      marginLeft: "4px",
                    }}
                  >
                    |
                  </span>
                )}
              {showFinalCursor && (
                <span
                  className="typing-cursor text-secondary"
                  style={{
                    display: "inline-block",
                    animation:
                      "blink 0.7s infinite, cursorGlow 1.4s ease-in-out infinite",
                    marginLeft: "8px",
                  }}
                >
                  |
                </span>
              )}
            </div>
          </h1>

          {/* Event Info Section vikum*/}
          <div
            className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
              }`}
          >
            {/* Organized By */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/5 transition-all border border-transparent hover:border-primary/30 group backdrop-blur-sm">
              <div
                className="mb-3 text-primary/80 text-xs uppercase tracking-wider font-semibold group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Organized By
              </div>
              <FaUniversity
                className="text-primary text-3xl mb-3 group-hover:scale-110 transition-transform"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))",
                }}
              />
              <h3
                className="text-sm md:text-base font-semibold text-foreground group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Faculty of Technology
                <br />
                RUSL
              </h3>
            </div>

            {/* Event Date */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-accent/5 transition-all border border-transparent hover:border-accent/30 group backdrop-blur-sm">
              <div
                className="mb-3 text-accent/80 text-xs uppercase tracking-wider font-semibold group-hover:text-accent transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Exhibition Date
              </div>
              <FaCalendarAlt
                className="text-accent text-3xl mb-3 group-hover:scale-110 transition-transform"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.6))",
                }}
              />
              <h3
                className="text-sm md:text-base font-semibold text-foreground group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                February 20-22
                <br />
                2026
              </h3>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-secondary/5 transition-all border border-transparent hover:border-secondary/30 group backdrop-blur-sm">
              <div
                className="mb-3 text-secondary/80 text-xs uppercase tracking-wider font-semibold group-hover:text-secondary transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Venue
              </div>
              <FaMapMarkerAlt
                className="text-secondary text-3xl mb-3 group-hover:scale-110 transition-transform"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(96, 165, 250, 0.6))",
                }}
              />
              <h3
                className="text-sm md:text-base font-semibold text-foreground group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                New Faculty Complex
                <br />
                Faculty of Technology
              </h3>
            </div>
          </div>

          {/* Days Countdown (replaces CTA button) */}
          <div
            className={`mt-12 inline-flex items-center justify-center md:justify-start transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            aria-live="polite"
          >
            <div
              className="px-8 py-5 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm shadow-lg"
              style={{ boxShadow: "0 0 30px rgba(59, 130, 246, 0.25)" }}
            >
              <div
                className="text-xs uppercase tracking-wider font-semibold mb-1 text-primary/80"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Days to go
              </div>
              <div className="flex items-baseline gap-3">
                <span
                  className="text-5xl md:text-6xl font-extrabold text-primary"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {daysRemaining ?? "--"}
                </span>
                <span className="text-sm md:text-base text-foreground/80">
                  until Feb 20, 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes cursorGlow {
          0%,
          100% {
            text-shadow: 0 0 10px var(--secondary);
            transform: scaleY(1);
          }
          50% {
            text-shadow: 0 0 20px var(--secondary), 0 0 30px var(--secondary);
            transform: scaleY(1.1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes letterFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes robotFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(2deg);
          }
          50% {
            transform: translateY(-5px) rotate(0deg);
          }
          75% {
            transform: translateY(-15px) rotate(-2deg);
          }
        }

        @keyframes robotMove {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-10px);
          }
        }
      `}</style>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  );
}
