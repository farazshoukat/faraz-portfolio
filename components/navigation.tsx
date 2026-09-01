"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { projects } from "@/lib/data/projects"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Nav overlay open/close animation
  useEffect(() => {
    const overlay = overlayRef.current
    const links = linksRef.current
    if (!overlay || !links) return

    if (isOpen) {
      document.body.classList.add("nav-open")

      // Expand overlay from top-right (hamburger position)
      gsap.to(overlay, {
        clipPath: "circle(150% at calc(100% - 2rem) 2rem)",
        duration: 0.6,
        ease: "power4.inOut",
        pointerEvents: "all",
      })

      // Stagger links in after overlay is ~70% open
      const linkEls = links.querySelectorAll(".nav-overlay-link")
      gsap.fromTo(
        linkEls,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.07,
          delay: 0.3,
        }
      )

      // Hamburger → X morph
      gsap.to(line1Ref.current, { rotate: 45, y: 8, duration: 0.3, ease: "power2.inOut" })
      gsap.to(line2Ref.current, { opacity: 0, x: -10, duration: 0.2 })
      gsap.to(line3Ref.current, { rotate: -45, y: -8, duration: 0.3, ease: "power2.inOut" })
    } else {
      document.body.classList.remove("nav-open")

      gsap.to(overlay, {
        clipPath: "circle(0% at calc(100% - 2rem) 2rem)",
        duration: 0.5,
        ease: "power4.inOut",
        pointerEvents: "none",
      })

      // Hamburger ← X morph
      gsap.to(line1Ref.current, { rotate: 0, y: 0, duration: 0.3, ease: "power2.inOut" })
      gsap.to(line2Ref.current, { opacity: 1, x: 0, duration: 0.3 })
      gsap.to(line3Ref.current, { rotate: 0, y: 0, duration: 0.3, ease: "power2.inOut" })
    }
  }, [isOpen])

  const closeNav = () => setIsOpen(false)

  return (
    <>
      {/* Fixed nav bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={
          isScrolled
            ? {
                backgroundColor: "rgba(18, 18, 16, 0.92)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(236, 232, 222, 0.07)",
              }
            : {}
        }
      >
        <nav className="container-wide h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={closeNav}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "rgba(255, 176, 32, 0.1)",
                border: "1px solid rgba(255, 176, 32, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "var(--signal)",
                letterSpacing: "0.05em",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              className="group-hover:border-signal"
            >
              FS
            </div>
            <span
              className="font-display text-base font-medium"
              style={{ color: "var(--paper)", letterSpacing: "-0.01em" }}
            >
              Faraz Shoukat
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link-animated section-label hover:text-paper transition-colors duration-200"
                style={{ fontSize: "0.75rem" }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            className="relative z-[110] flex flex-col gap-[6px] items-end justify-center w-10 h-10"
          >
            <span
              ref={line1Ref}
              className="block h-[1.5px] w-6 origin-center"
              style={{ background: "var(--paper)", borderRadius: 2 }}
            />
            <span
              ref={line2Ref}
              className="block h-[1.5px] w-4 origin-center"
              style={{ background: "var(--paper)", borderRadius: 2 }}
            />
            <span
              ref={line3Ref}
              className="block h-[1.5px] w-6 origin-center"
              style={{ background: "var(--paper)", borderRadius: 2 }}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen overlay */}
      <div
        ref={overlayRef}
        className="nav-overlay"
        style={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
      >
        <div className="container-wide h-full flex flex-col justify-center">
          <div ref={linksRef} className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.name} style={{ overflow: "hidden" }}>
                <Link
                  href={item.href}
                  onClick={closeNav}
                  className="nav-overlay-link nav-link-animated block"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 400,
                    color: "var(--paper)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    paddingBottom: "0.6rem",
                    display: "block",
                  }}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Project list in overlay */}
          <div className="mt-12 overflow-hidden">
            <div className="nav-overlay-link">
              <p className="section-label mb-3">Selected Work</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {projects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/work/${p.slug}`}
                    onClick={closeNav}
                    className="nav-link-animated"
                    style={{ color: "var(--muted-color)", fontSize: "0.875rem" }}
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social links in overlay */}
          <div className="mt-10 overflow-hidden">
            <div className="nav-overlay-link flex items-center gap-6">
              <a
                href="https://github.com/farazshoukat"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-animated section-label hover:text-paper transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/faraz-shoukat-539161289/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-animated section-label hover:text-paper transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/faraz.work"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-animated section-label hover:text-paper transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
