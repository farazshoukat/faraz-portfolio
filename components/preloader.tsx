"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only show preloader on first visit per session
    const hasLoaded = sessionStorage.getItem("portfolioLoaded")
    if (hasLoaded) {
      onComplete()
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("portfolioLoaded", "1")
        onComplete()
      },
    })

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
      .to(textRef.current, { opacity: 1, duration: 0.4 }, "+=0.2")
      .to(textRef.current, { opacity: 0, y: -8, duration: 0.3, ease: "power2.in" }, "+=0.1")
      .to(
        overlayRef.current,
        { opacity: 0, duration: 0.4, ease: "power2.inOut" },
        "-=0.1"
      )
  }, [onComplete])

  return (
    <div ref={overlayRef} className="preloader" aria-hidden="true">
      <div ref={textRef} className="preloader-text">
        FS
      </div>
    </div>
  )
}
