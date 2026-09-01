"use client"

import { useState, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/cursor"
import { Preloader } from "@/components/preloader"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { WorkSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { AvailabilitySection } from "@/components/sections/availability"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false)

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true)
  }, [])

  return (
    <>
      <CustomCursor />
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Main content fades in after preloader */}
      <div
        style={{
          opacity: preloaderDone ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: preloaderDone ? "auto" : "none",
        }}
      >
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <WorkSection />
          <ExperienceSection />
          <AvailabilitySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
