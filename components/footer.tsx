"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/farazshoukat", color: "#00e5ff" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/faraz-shoukat-539161289/", color: "#a855f7" },
  { name: "Email", icon: Mail, href: "mailto:farazshoukat1@gmail.com", color: "#6366f1" },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.4), rgba(168,85,247,0.4), transparent)" }} />

      {/* Subtle background */}
      <div className="absolute inset-0"
        style={{ background: "rgba(0,229,255,0.01)" }} />

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold font-display transition-all"
                style={{
                  background: "linear-gradient(135deg, rgba(0,229,255,0.12), rgba(168,85,247,0.12))",
                  border: "1px solid rgba(0,229,255,0.25)",
                  color: "#00e5ff",
                  boxShadow: "0 0 16px rgba(0,229,255,0.1)",
                }}
              >
                FS
              </div>
              <span className="text-lg font-bold font-display" style={{ color: "rgba(255,255,255,0.8)" }}>
                Faraz<span style={{ color: "#00e5ff" }}>.</span>
              </span>
            </Link>
            <p className="text-sm mt-3 max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              AI Engineer & ML Enthusiast building intelligent solutions for the future.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(0,229,255,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${link.color}12`
                  e.currentTarget.style.borderColor = `${link.color}35`
                  e.currentTarget.style.boxShadow = `0 0 16px ${link.color}20`
                  e.currentTarget.style.color = link.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)"
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                }}
              >
                <link.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.25)" }}
        >
          <p>© {new Date().getFullYear()} Faraz Shoukat. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="gradient-text font-semibold">Next.js · Tailwind CSS · Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
