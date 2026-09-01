"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollCueRef = useRef<HTMLDivElement>(null)
  const badge1Ref = useRef<HTMLButtonElement>(null)
  const badge2Ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const heading = headingRef.current
        if (!heading) return

        // Split heading into lines
        const split = SplitText.create(heading, {
          type: "lines",
          mask: "lines",
        })

        const tl = gsap.timeline({ delay: 0.3 })

        // 1. Heading lines reveal from behind mask
        tl.from(split.lines, {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.08,
        })

        // 2. Subhead fades up
        tl.from(
          subRef.current,
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )

        // 3. CTAs fade/scale in
        tl.from(
          ctaRef.current,
          { y: 16, opacity: 0, duration: 0.5, ease: "power3.out" },
          "-=0.2"
        )

        // 4. Scroll cue fades in and loops
        tl.from(
          scrollCueRef.current,
          { opacity: 0, duration: 0.5 },
          "-=0.1"
        )
      })

      // Magnetic buttons
      const setupMagnetic = (el: HTMLElement | null) => {
        if (!el) return
        const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" })
        const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" })
        el.addEventListener("mousemove", (e) => {
          const r = el.getBoundingClientRect()
          xTo((e.clientX - r.left - r.width / 2) * 0.35)
          yTo((e.clientY - r.top - r.height / 2) * 0.35)
        })
        el.addEventListener("mouseleave", () => {
          xTo(0)
          yTo(0)
        })
      }

      setupMagnetic(badge1Ref.current)
      setupMagnetic(badge2Ref.current)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-16"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,176,32,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Warm glow top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,176,32,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Availability pill */}
        <div className="availability-pill mb-10 inline-flex">
          <span className="signal-dot-pulse" />
          Available for freelance — UTC+5
        </div>

        {/* Main heading — left-aligned */}
        <h1
          ref={headingRef}
          className="hero-heading mb-8"
          style={{ maxWidth: "14ch", color: "var(--paper)" }}
        >
          Full-stack builds,{" "}
          <em style={{ color: "var(--signal)", fontStyle: "italic" }}>
            AI systems
          </em>{" "}
          that ship.
        </h1>

        {/* Subhead */}
        <p
          ref={subRef}
          style={{
            color: "var(--muted-color)",
            fontSize: "1.125rem",
            lineHeight: 1.65,
            maxWidth: "52ch",
            marginBottom: "3rem",
          }}
        >
          I design and build production web apps, automation, and LLM-powered
          tools for clients who need more than a demo. React/Next.js, FastAPI,
          LangGraph, n8n — based in Pakistan.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <Link href="#work">
            <button
              ref={badge1Ref}
              id="hero-cta-work"
              className="magnetic"
              data-cursor="View"
              style={{
                background: "var(--signal)",
                color: "var(--ink)",
                border: "none",
                borderRadius: 8,
                padding: "0.875rem 1.75rem",
                fontFamily: "Switzer, sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                letterSpacing: "0.01em",
                cursor: "none",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 32px rgba(255,176,32,0.4)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
              }}
            >
              View my work
            </button>
          </Link>

          <Link href="#contact">
            <button
              ref={badge2Ref}
              id="hero-cta-contact"
              className="magnetic"
              style={{
                background: "transparent",
                color: "var(--paper)",
                border: "1px solid rgba(236,232,222,0.2)",
                borderRadius: 8,
                padding: "0.875rem 1.75rem",
                fontFamily: "Switzer, sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                cursor: "none",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(236,232,222,0.5)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(236,232,222,0.2)"
              }}
            >
              Let's talk
            </button>
          </Link>
        </div>

        {/* Scroll cue */}
        <div
          ref={scrollCueRef}
          className="scroll-cue mt-20"
          style={{ opacity: 0 }}
        >
          <p className="section-label mb-2">Scroll</p>
          <div className="scroll-cue-line" />
        </div>
      </div>
    </section>
  )
}
