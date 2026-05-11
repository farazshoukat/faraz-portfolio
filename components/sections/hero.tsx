"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download, MessageSquare, FolderOpen, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const roles = ["AI Engineer", "ML Engineer", "Full Stack Developer", "Automation Engineer"]

const stats = [
  { value: "2+", label: "Years Exp" },
  { value: "15+", label: "Integrations" },
  { value: "94%", label: "CNN Accuracy" },
  { value: "5+", label: "AI Projects" },
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(isDeleting ? fullText.slice(0, displayText.length - 1) : fullText.slice(0, displayText.length + 1))
        },
        isDeleting ? 55 : 80,
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  // Canvas particle grid
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    let animFrameId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,229,255,${p.opacity})`
        ctx.fill()

        for (const q of particles) {
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0,229,255,${0.04 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animFrameId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Canvas particle network */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60 z-0" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(0,229,255,0.07)",
                border: "1px solid rgba(0,229,255,0.2)",
                color: "#00e5ff",
              }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#00e5ff" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#00e5ff" }} />
              </span>
              Available for opportunities
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-display"
            style={{ lineHeight: 1.1 }}
          >
            {"Hi, I'm "}
            <span className="gradient-text">Faraz Shoukat</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="h-14 md:h-16 mb-6 flex items-center justify-center"
          >
            <p className="text-2xl md:text-4xl font-light font-display" style={{ color: "rgba(255,255,255,0.7)" }}>
              <span style={{ color: "#00e5ff", fontWeight: 500 }}>{displayText}</span>
              <span className="cursor-blink ml-0.5" style={{ color: "#00e5ff", fontWeight: 100 }}>|</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            I build AI-powered web applications and automation pipelines using Next.js, LLMs, and N8N.{" "}
            <span style={{ color: "rgba(255,255,255,0.7)" }}>Based in Pakistan.</span>
          </motion.p>

          {/* Stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(0,229,255,0.05)",
                  border: "1px solid rgba(0,229,255,0.12)",
                }}
              >
                <span className="text-lg font-bold font-display" style={{ color: "#00e5ff" }}>{stat.value}</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(0,229,255,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold font-display text-sm transition-all"
                style={{
                  background: "linear-gradient(135deg, #00e5ff, #6366f1)",
                  color: "#050b18",
                  boxShadow: "0 0 24px rgba(0,229,255,0.25)",
                }}
              >
                <FolderOpen className="h-4 w-4" />
                View Projects
              </motion.button>
            </Link>

            <Link href="#chatbot">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(168,85,247,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold font-display text-sm transition-all"
                style={{
                  background: "rgba(168,85,247,0.1)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#a855f7",
                }}
              >
                <Zap className="h-4 w-4" />
                Ask My AI
              </motion.button>
            </Link>

            <a href="/faraz-shoukat-cv.pdf" download>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold font-display text-sm transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Download className="h-4 w-4" />
                Download CV
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <Link href="#about">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(0,229,255,0.4)" }}>Scroll</span>
              <ArrowDown className="h-4 w-4" style={{ color: "rgba(0,229,255,0.5)" }} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
