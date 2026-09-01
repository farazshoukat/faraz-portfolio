"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const entries = [
  {
    role: "Founder",
    company: "Flowcraft",
    period: "2025 — present",
    description:
      "AI tooling and automation consultancy. Building custom LLM integrations, n8n workflows, and full-stack systems for clients who need production results, not demos.",
  },
  {
    role: "Junior Software Engineer — Full-Stack & N8N Automation",
    company: "Lean Automation",
    period: "Jan 2026 — Apr 2026",
    description:
      "Built and maintained full-stack web applications and n8n automation workflows. Delivered ~70% reduction in manual processing time across 15+ integrations for client pipelines.",
  },
  {
    role: "AI Engineer Intern",
    company: "Developers Hub Corporation",
    period: "Aug 2025 — Oct 2025",
    description:
      "Built AI features including NLP pipelines, LLM integrations, and a multilingual customer support agent with automated ticket routing.",
  },
  {
    role: "BS Computer Science",
    company: "COMSATS University Islamabad — Abbottabad",
    period: "2022 — 2026",
    description:
      "Final year student. Focus on AI/ML, software engineering. Final Year Project (FarmGuardian) won 3rd Place and People's Choice at COMSATS FYP Spring 2026.",
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        // Draw timeline line on scroll
        gsap.to(lineRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        })

        // Fade in each entry as it crosses viewport center
        const entryEls = sectionRef.current?.querySelectorAll(".timeline-entry")
        const dotEls = sectionRef.current?.querySelectorAll(".timeline-dot-el")

        entryEls?.forEach((entry, i) => {
          gsap.from(entry, {
            x: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })

          // Dot goes amber when entry enters view
          ScrollTrigger.create({
            trigger: entry,
            start: "top center",
            onEnter: () => {
              const dot = dotEls?.[i] as HTMLElement
              if (dot) {
                dot.style.borderColor = "var(--signal)"
                dot.style.backgroundColor = "var(--signal)"
              }
            },
          })
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="section-pad relative">
      <div className="container-wide">
        <div className="flex items-center gap-3 mb-8">
          <span className="section-label">04 — Experience</span>
          <div className="divider flex-1" />
        </div>

        <h2
          className="section-heading mb-14"
          style={{ color: "var(--paper)", maxWidth: "20ch" }}
        >
          Where I've worked
        </h2>

        <div ref={sectionRef} className="timeline-track relative pl-8">
          {/* Vertical line */}
          <div ref={lineRef} className="timeline-line" style={{ transform: "scaleY(0)" }} />

          <div className="flex flex-col gap-14">
            {entries.map((entry, i) => (
              <div key={i} className="timeline-entry relative">
                {/* Dot */}
                <div
                  className="timeline-dot timeline-dot-el"
                  style={{ top: 4 }}
                />

                <div>
                  <p
                    className="font-mono-ui mb-1"
                    style={{ color: "var(--signal)", opacity: 0.7 }}
                  >
                    {entry.period}
                  </p>
                  <h3
                    className="font-display text-lg font-medium mb-0.5"
                    style={{ color: "var(--paper)" }}
                  >
                    {entry.role}
                  </h3>
                  <p
                    className="section-label mb-4"
                    style={{ color: "var(--signal)", letterSpacing: "0.04em" }}
                  >
                    {entry.company}
                  </p>
                  <p style={{ color: "var(--muted-color)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "52ch" }}>
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
