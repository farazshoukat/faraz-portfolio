"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
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
    <section id="about" className="section-pad relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent, rgba(27,27,23,0.5) 50%, transparent)" }}
      />

      <div className="container-wide relative z-10">
        <div ref={groupRef} className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">

          {/* Left: text */}
          <div className="md:col-span-7">
            <div className="reveal-item flex items-center gap-3 mb-8">
              <span className="section-label">01 — About</span>
              <div className="divider flex-1" />
            </div>

            <h2
              className="reveal-item section-heading mb-8"
              style={{ color: "var(--paper)" }}
            >
              Engineer by training,<br />
              <em style={{ color: "var(--signal)" }}>builder</em> by disposition.
            </h2>

            <div
              className="reveal-item space-y-5"
              style={{ color: "var(--muted-color)", lineHeight: 1.75, maxWidth: "52ch" }}
            >
              <p>
                I'm a Computer Science student at COMSATS University Islamabad (Abbottabad
                campus, 2022–2026), currently in my final year. I've done two AI engineering
                internships — most recently at Developers Hub Corporation (Aug–Oct 2025) — and
                spent early 2026 as a Junior Software Engineer at Lean Automation, building
                full-stack systems and n8n workflow automations that cut manual effort by ~70%.
              </p>
              <p>
                On the side I run{" "}
                <span style={{ color: "var(--paper)" }}>Flowcraft</span>, an automation and
                AI tooling consultancy, and I take on freelance projects for clients who need
                production-quality systems, not prototype demos. I care about clean handoffs,
                real documentation, and code that works past the demo call.
              </p>
              <p
                className="font-mono-ui"
                style={{ color: "var(--muted-color)", opacity: 0.7, fontSize: "0.72rem" }}
              >
                Currently reading up on cybersecurity — not pivoting, just curious.
              </p>
            </div>
          </div>

          {/* Right: headshot placeholder + quick facts */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Headshot */}
            <div
              className="reveal-item relative w-full aspect-[4/5] rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(236,232,222,0.08)" }}
            >
              <Image
                src="/headshot.jpg"
                alt="Faraz Shoukat — Full-Stack & AI Engineer"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Quick facts */}
            <div
              className="reveal-item grid grid-cols-2 gap-3"
            >
              {[
                { label: "Based in", value: "Abbottabad, PK" },
                { label: "Timezone", value: "UTC+5 (PKT)" },
                { label: "Available", value: "Immediately" },
                { label: "Degree", value: "BS CS — 2026" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg p-4"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid rgba(236,232,222,0.07)",
                  }}
                >
                  <p className="section-label mb-1">{fact.label}</p>
                  <p style={{ color: "var(--paper)", fontSize: "0.875rem", fontWeight: 500 }}>
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
