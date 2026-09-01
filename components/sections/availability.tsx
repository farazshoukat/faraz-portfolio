"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AvailabilitySection() {
  const groupRef = useRef<HTMLDivElement>(null)

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
    <section
      id="availability"
      className="section-pad relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-wide" ref={groupRef}>
        <div className="reveal-item flex items-center gap-3 mb-8">
          <span className="section-label">05 — Availability</span>
          <div className="divider flex-1" />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            {/* Status pill */}
            <div className="reveal-item availability-pill mb-8 inline-flex">
              <span className="signal-dot-pulse" />
              Available for freelance work
            </div>

            <h2
              className="reveal-item section-heading mb-8"
              style={{ color: "var(--paper)" }}
            >
              Open to new projects —{" "}
              <em style={{ color: "var(--signal)" }}>let's build something</em>
            </h2>

            <ul className="reveal-item space-y-4">
              {[
                {
                  title: "Fast response",
                  desc: "Replies within 24 hours. Time-zone aware — I'm UTC+5 (Pakistan Standard Time), which overlaps well with EU mornings and US evenings.",
                },
                {
                  title: "Regular updates",
                  desc: "Weekly async updates minimum. I track everything in writing — no surprises, no black-box development.",
                },
                {
                  title: "Clean handoff",
                  desc: "Documented code, environment setup instructions, and a walkthrough call. You own everything you paid for, fully.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div
                    className="w-1 rounded-full flex-shrink-0 mt-1"
                    style={{ background: "var(--signal)", height: "calc(100% - 4px)", minHeight: 40 }}
                  />
                  <div>
                    <p
                      className="font-display font-medium mb-1"
                      style={{ color: "var(--paper)" }}
                    >
                      {item.title}
                    </p>
                    <p style={{ color: "var(--muted-color)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 reveal-item">
            <div
              className="rounded-xl p-8"
              style={{
                background: "var(--ink)",
                border: "1px solid rgba(255,176,32,0.15)",
              }}
            >
              <p className="section-label mb-3">Rates & scope</p>
              <h3
                className="font-display text-2xl font-medium mb-4"
                style={{ color: "var(--paper)" }}
              >
                Project-based or hourly
              </h3>
              <p style={{ color: "var(--muted-color)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Small integrations, full-stack builds, AI pipelines — I'm flexible on
                structure. Fixed-price for scoped work; hourly for exploratory or ongoing.
              </p>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "var(--signal)",
                  color: "var(--ink)",
                  borderRadius: 8,
                  padding: "0.75rem 1.5rem",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  fontFamily: "Switzer, sans-serif",
                  textDecoration: "none",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 24px rgba(255,176,32,0.4)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow = "none")
                }
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
