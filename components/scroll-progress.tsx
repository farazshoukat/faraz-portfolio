"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00e5ff, #a855f7, #6366f1)",
        boxShadow: "0 0 12px rgba(0,229,255,0.6), 0 0 24px rgba(168,85,247,0.3)",
      }}
    />
  )
}
