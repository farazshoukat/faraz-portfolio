"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState("")

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Only activate on devices that support hover
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return

    const xDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "none" })
    const yDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "none" })
    const xRing = gsap.quickTo(ring, "x", { duration: 0.18, ease: "power2.out" })
    const yRing = gsap.quickTo(ring, "y", { duration: 0.18, ease: "power2.out" })

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
    }

    const onEnterLink = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      const cursorLabel = target.getAttribute("data-cursor") || ""
      setLabel(cursorLabel)
      ring.classList.add("cursor-hover")
      gsap.to(dot, { scale: 0, duration: 0.2 })
    }

    const onLeaveLink = () => {
      setLabel("")
      ring.classList.remove("cursor-hover")
      gsap.to(dot, { scale: 1, duration: 0.2 })
    }

    window.addEventListener("mousemove", onMove)

    // Attach to all interactive elements
    const interactives = document.querySelectorAll(
      "a, button, [data-cursor], .project-card, .magnetic"
    )
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink)
      el.addEventListener("mouseleave", onLeaveLink)
    })

    return () => {
      window.removeEventListener("mousemove", onMove)
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink)
        el.removeEventListener("mouseleave", onLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span>{label}</span>
      </div>
    </>
  )
}
