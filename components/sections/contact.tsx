"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/farazshoukat",
    username: "@farazshoukat",
    color: "#00e5ff",
    desc: "Open source projects",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/faraz-shoukat-539161289/",
    username: "Faraz Shoukat",
    color: "#a855f7",
    desc: "Professional network",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:farazshoukat1@gmail.com",
    username: "farazshoukat1@gmail.com",
    color: "#6366f1",
    desc: "Direct message",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
      const endpoint = formspreeId
        ? `https://formspree.io/f/${formspreeId}`
        : "https://formspree.io/f/xpwzgknd"

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setSubmitStatus("success")
        setTimeout(() => { setFormState({ name: "", email: "", message: "" }); setSubmitStatus("idle") }, 3000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyles = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "rgba(255,255,255,0.85)",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
  }

  const focusStyles = {
    borderColor: "rgba(0,229,255,0.4)",
    boxShadow: "0 0 0 3px rgba(0,229,255,0.08)",
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent, rgba(0,229,255,0.015) 50%, transparent)" }} />
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-label">Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-4 font-display">
              {"Let's Work "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {"Have a project in mind or want to discuss opportunities? I'd love to hear from you."}
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Info card */}
              <div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.5), transparent)" }} />

                <h3 className="font-semibold font-display mb-5" style={{ color: "rgba(255,255,255,0.9)" }}>Get in Touch</h3>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}>
                    <MapPin className="h-4 w-4" style={{ color: "#00e5ff" }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Location</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Pakistan · Open to Remote</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}>
                    <Mail className="h-4 w-4" style={{ color: "#00e5ff" }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Email</p>
                    <a
                      href="mailto:farazshoukat1@gmail.com"
                      className="text-sm transition-colors hover:text-primary"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      farazshoukat1@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Connect with me</h4>
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${link.color}30`
                      e.currentTarget.style.background = `${link.color}06`
                      e.currentTarget.style.boxShadow = `0 0 20px ${link.color}10`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                      style={{ background: `${link.color}10`, border: `1px solid ${link.color}25` }}
                    >
                      <link.icon className="h-4 w-4" style={{ color: link.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>{link.name}</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{link.username}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" style={{ color: link.color }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)" }} />

                <h3 className="font-semibold font-display mb-6" style={{ color: "rgba(255,255,255,0.9)" }}>Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Name</label>
                    <input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                      style={inputStyles}
                      onFocus={(e) => Object.assign(e.target.style, focusStyles)}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.08)"
                        e.target.style.boxShadow = "none"
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                      style={inputStyles}
                      onFocus={(e) => Object.assign(e.target.style, focusStyles)}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.08)"
                        e.target.style.boxShadow = "none"
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      required
                      disabled={isSubmitting}
                      style={{ ...inputStyles, resize: "none" }}
                      onFocus={(e) => Object.assign(e.target.style, focusStyles)}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.08)"
                        e.target.style.boxShadow = "none"
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 32px rgba(0,229,255,0.35)" } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold font-display text-sm transition-all"
                    style={
                      submitStatus === "success"
                        ? { background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.3)", color: "#00e5ff" }
                        : submitStatus === "error"
                        ? { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444" }
                        : {
                            background: "linear-gradient(135deg, #00e5ff, #6366f1)",
                            color: "#050b18",
                            boxShadow: "0 0 20px rgba(0,229,255,0.2)",
                          }
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Message Sent!
                      </>
                    ) : submitStatus === "error" ? (
                      <>
                        <AlertCircle className="h-4 w-4" />
                        Failed to Send
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
