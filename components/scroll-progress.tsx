"use client"

import { useEffect, useRef } from "react"

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      bar.style.transform = `scaleX(${progress})`
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        height: 2,
        background: "var(--signal)",
        transform: "scaleX(0)",
        transformOrigin: "left",
        boxShadow: "0 0 8px rgba(255,176,32,0.5)",
      }}
      aria-hidden="true"
    />
  )
}
