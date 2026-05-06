"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/farazshoukat" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/farazshoukat" },
  { name: "Email", icon: Mail, href: "mailto:faraz@example.com" },
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
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="text-xl font-bold text-foreground">
              <span className="text-primary">F</span>araz
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              AI Engineer & ML Enthusiast building intelligent solutions for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Faraz Shoukat. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> using Next.js, Tailwind CSS & Framer
            Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
