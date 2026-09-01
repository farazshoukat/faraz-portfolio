"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const groupRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const items = groupRef.current?.querySelectorAll(".reveal-item")
        if (!items?.length) return
        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: groupRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      })
    }, groupRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-wide" ref={groupRef}>
        <div className="reveal-item flex items-center gap-3 mb-8">
          <span className="section-label">06 — Contact</span>
          <div className="divider flex-1" />
        </div>

        <div className="max-w-3xl">
          <h2
            className="reveal-item section-heading mb-6"
            style={{
              color: "var(--paper)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Have a project in mind?{" "}
            <em style={{ color: "var(--signal)" }}>Let's talk.</em>
          </h2>

          <p
            className="reveal-item"
            style={{
              color: "var(--muted-color)",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "3rem",
              maxWidth: "48ch",
            }}
          >
            Whether it's a full build, an AI integration, or just scoping a problem — 
            drop me an email and I'll get back to you within 24 hours.
          </p>

          {/* Big email link */}
          <div className="reveal-item mb-10">
            <a
              ref={emailRef}
              id="contact-email"
              href="mailto:farazshoukat1@gmail.com"
              className="email-link"
              style={{
                fontFamily: "var(--font-fraunces), Fraunces, serif",
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "var(--paper)",
              }}
            >
              farazshoukat1@gmail.com
            </a>
          </div>

          {/* Social + timezone */}
          <div className="reveal-item flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/farazshoukat"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-animated section-label hover:text-paper transition-colors"
              style={{ fontSize: "0.72rem" }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/faraz-shoukat-539161289/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-animated section-label hover:text-paper transition-colors"
              style={{ fontSize: "0.72rem" }}
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/faraz.work"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-animated section-label hover:text-paper transition-colors"
              style={{ fontSize: "0.72rem" }}
            >
              Instagram
            </a>
            <span className="divider w-px h-4 mx-1" style={{ width: 1, height: 16 }} />
            <span className="section-label" style={{ opacity: 0.6 }}>
              UTC+5 — Pakistan Standard Time
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
