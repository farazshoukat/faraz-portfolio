"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/farazshoukat",
    username: "@farazshoukat",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/faraz-shoukat-539161289/",
    username: "Faraz Shoukat",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:farazshoukat1@gmail.com",
    username: "farazshoukat1@gmail.com",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
      const endpoint = formspreeId
        ? `https://formspree.io/f/${formspreeId}`
        : "https://formspree.io/f/xpwzgknd" // fallback placeholder — replace with your own

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setSubmitStatus("success")
        setTimeout(() => {
          setFormState({ name: "", email: "", message: "" })
          setSubmitStatus("idle")
        }, 3000)
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

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{"Let's Work Together"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {"Have a project in mind or want to discuss opportunities? I'd love to hear from you."}
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Location</h4>
                      <p className="text-muted-foreground text-sm">Pakistan (Open to Remote)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <a
                        href="mailto:farazshoukat1@gmail.com"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        farazshoukat1@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h4 className="font-medium text-foreground mb-4">Connect with me</h4>
                  <div className="space-y-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <link.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground">{link.name}</span>
                          <p className="text-xs text-muted-foreground">{link.username}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
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
                  </Button>
                </form>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-primary mt-4 text-center"
                  >
                    {"Thanks for reaching out! I'll get back to you soon."}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
