"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageSquare, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Active section tracking
      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass border-b border-white/10"
            : "bg-transparent",
        )}
        style={isScrolled ? {
          boxShadow: "0 0 40px rgba(0,229,255,0.05), inset 0 -1px 0 rgba(0,229,255,0.1)"
        } : {}}
      >
        <nav className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center gap-2">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold font-display"
                style={{
                  background: "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(0,229,255,0.3)",
                  color: "#00e5ff",
                  boxShadow: "0 0 20px rgba(0,229,255,0.15)"
                }}>
                FS
              </div>
            </div>
            <span className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors">
              Faraz<span style={{ color: "#00e5ff" }}>.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(0,229,255,0.08)",
                        border: "1px solid rgba(0,229,255,0.15)",
                      }}
                      transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300 rounded-full" />
                </Link>
              )
            })}
            <Link href="#chatbot" className="ml-3">
              <Button
                variant="default"
                size="sm"
                className="gap-2 font-medium"
                style={{
                  background: "linear-gradient(135deg, #00e5ff, #6366f1)",
                  border: "none",
                  boxShadow: "0 0 20px rgba(0,229,255,0.25)",
                  color: "#050b18",
                  fontWeight: 600,
                }}
              >
                <Zap className="h-3.5 w-3.5" />
                Ask AI
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative"
              style={{ border: "1px solid rgba(0,229,255,0.2)", borderRadius: "10px" }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-20 md:hidden"
            style={{
              background: "rgba(5,11,24,0.97)",
              backdropFilter: "blur(24px)",
            }}
          >
            <nav className="container mx-auto px-4 flex flex-col gap-2 mt-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-medium text-muted-foreground hover:text-foreground transition-all"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="text-primary text-xs">0{i + 1}</span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link href="#chatbot" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full mt-4 gap-2 font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #00e5ff, #6366f1)",
                      color: "#050b18",
                      boxShadow: "0 0 24px rgba(0,229,255,0.3)",
                    }}
                  >
                    <Zap className="h-4 w-4" />
                    Ask Faraz AI
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
