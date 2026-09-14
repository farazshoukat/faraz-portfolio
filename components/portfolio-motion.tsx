"use client"

import { useEffect, useRef, type ReactNode } from "react"

/** Progressive enhancement: content stays visible without JavaScript or motion. */
export function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = root.current
    if (!element) return
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const animations = new Set<Animation>()
    let observer: IntersectionObserver | undefined
    let frame = 0

    function updateScroll() {
      frame = 0
      if (!element) return
      const distance = document.documentElement.scrollHeight - window.innerHeight
      element.style.setProperty("--read-progress", String(distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0))
      const venture = element.querySelector<HTMLElement>(".venture-card")
      if (venture && !preference.matches) {
        const progress = (window.innerHeight - venture.getBoundingClientRect().top) / (window.innerHeight + venture.offsetHeight)
        venture.style.setProperty("--venture-turn", `${Math.max(0, Math.min(1, progress)) * 100 - 50}deg`)
      }
    }
    function queueScroll() {
      if (!frame) frame = requestAnimationFrame(updateScroll)
    }
    function configureMotion() {
      observer?.disconnect()
      animations.forEach(animation => animation.cancel())
      animations.clear()
      if (!preference.matches && "IntersectionObserver" in window) {
        observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            observer?.unobserve(entry.target)
            const animation = entry.target.animate(
              [{ opacity: 0, transform: "translateY(28px)" }, { opacity: 1, transform: "translateY(0)" }],
              { duration: 650, easing: "cubic-bezier(.2,.75,.25,1)" },
            )
            animations.add(animation)
            animation.onfinish = () => animations.delete(animation)
          })
        }, { threshold: 0.12 })
        element?.querySelectorAll(".section-title, .stack-card, .before-after, .impact-stats, .venture-card, .credentials, .process-grid li").forEach(item => observer?.observe(item))
      }
      queueScroll()
    }
    configureMotion()
    window.addEventListener("scroll", queueScroll, { passive: true })
    window.addEventListener("resize", queueScroll)
    preference.addEventListener("change", configureMotion)
    const resize = new ResizeObserver(queueScroll)
    resize.observe(element)
    return () => {
      observer?.disconnect()
      resize.disconnect()
      animations.forEach(animation => animation.cancel())
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", queueScroll)
      window.removeEventListener("resize", queueScroll)
      preference.removeEventListener("change", configureMotion)
    }
  }, [])

  return <div ref={root} className="portfolio-motion"><div className="reading-progress" aria-hidden="true" />{children}</div>
}
