"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects } from "@/lib/data/projects"

gsap.registerPlugin(ScrollTrigger)

export function WorkSection() {
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
    <section id="work" className="section-pad relative">
      <div className="container-wide" ref={groupRef}>
        <div className="reveal-item flex items-center gap-3 mb-8">
          <span className="section-label">03 — Work</span>
          <div className="divider flex-1" />
        </div>

        <div className="reveal-item flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <h2
            className="section-heading"
            style={{ color: "var(--paper)", maxWidth: "20ch" }}
          >
            Selected projects
          </h2>
          <p
            style={{ color: "var(--muted-color)", fontSize: "0.875rem", maxWidth: "36ch", lineHeight: 1.65 }}
          >
            Production-grade work spanning AI agents, full-stack platforms, and mobile apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="reveal-item">
              <Link
                href={`/work/${project.slug}`}
                data-cursor="View"
                className="project-card block group"
              >
                {/* Image */}
                <div className="project-card-image">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(18,18,16,0.9) 0%, transparent 60%)",
                    }}
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="tech-tag tech-tag-signal">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className="font-display text-xl font-medium"
                      style={{ color: "var(--paper)", letterSpacing: "-0.01em" }}
                    >
                      {project.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="text-signal opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                      style={{ fontSize: "1.1rem", flexShrink: 0 }}
                    >
                      →
                    </span>
                  </div>

                  <p
                    style={{
                      color: "var(--muted-color)",
                      fontSize: "0.85rem",
                      lineHeight: 1.65,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.tagline}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="tech-tag">+{project.techStack.length - 5}</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
