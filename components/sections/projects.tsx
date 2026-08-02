"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ExternalLink, Github, Leaf, Brain, Sparkles, Bot, FileText, Trophy } from "lucide-react"

type ProjectCategory = "all" | "ai" | "ml" | "flutter" | "automation"

interface Project {
  id: number
  title: string
  subtitle?: string
  description: string
  techStack: string[]
  category: ProjectCategory[]
  image: string
  github?: string
  demo?: string
  icon: React.ElementType
  featured?: boolean
  award?: string
  accentColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "FarmGuardian",
    subtitle: "AI Crop Disease Detection & Farm Assistant (FYP)",
    description:
      "Offline-first mobile app for Punjab farmers with on-device TFLite disease detection (EfficientNet-B0, 91% accuracy), Random Forest yield prediction across 5 crops with cure recommendations, crop planning, mandi price tracking & full Urdu localization.",
    techStack: ["React Native", "TFLite", "EfficientNet-B0", "Random Forest", "Supabase", "i18next"],
    category: ["ml", "ai", "flutter"],
    image: "/plant-disease-detection-ml-system-green-leaves.jpg",
    github: "https://github.com/farazshoukat",
    icon: Leaf,
    featured: true,
    award: "🏆 3rd Place & 1st Place (People's Choice) FYP Spring 2026",
    accentColor: "#00e5ff",
  },
  {
    id: 2,
    title: "Job Copilot",
    subtitle: "AI Resume Tailor & Cover Letter Generator",
    description:
      "Full-stack AI web app that ingests resume PDF and job description, rewrites bullet points to match ATS keywords, and auto-generates a tailored cover letter within 60s. Architected FastAPI backend with Groq LLM inference and Supabase session management.",
    techStack: ["FastAPI", "Next.js 14", "TypeScript", "Groq LLM", "Supabase", "Vercel"],
    category: ["ai"],
    image: "/machine-learning-classification-data-visualization.jpg",
    github: "https://github.com/farazshoukat",
    icon: Sparkles,
    featured: true,
    accentColor: "#a855f7",
  },
  {
    id: 3,
    title: "Multilingual AI Support Agent",
    subtitle: "Automated Ticket Escalation & Language Routing",
    description:
      "End-to-end AI customer support system detecting query language, intent classification, and routing tickets using Groq LLM backbone. Integrated N8N automation workflows for ticket escalation notifications, cutting manual triage effort by ~65%.",
    techStack: ["FastAPI", "React", "Groq LLM", "Supabase", "N8N", "Python"],
    category: ["ai", "automation"],
    image: "/flutter-mobile-app-dashboard-clean-ui.jpg",
    github: "https://github.com/farazshoukat",
    icon: Bot,
    featured: true,
    accentColor: "#6366f1",
  },
  {
    id: 4,
    title: "AI Portfolio & CV Generator",
    subtitle: "Automated Profile Scraping & PDF Render",
    description:
      "Engineered an AI-powered tool converting GitHub profile URL and LinkedIn PDF into a fully deployed live portfolio site plus downloadable ATS-optimized CV PDF in under 60 seconds with WeasyPrint server-side rendering & automated Vercel pipeline.",
    techStack: ["FastAPI", "React", "Groq LLM", "Supabase", "WeasyPrint", "Vercel"],
    category: ["ai"],
    image: "/fashion-ai-recommendation-system-stylish-clothes.jpg",
    github: "https://github.com/farazshoukat",
    icon: FileText,
    accentColor: "#00e5ff",
  },
  {
    id: 5,
    title: "Maternal-Fetal Risk System",
    subtitle: "AI Clinical Risk Assessment Platform",
    description:
      "Two-tier AI clinical dashboard & API assessing maternal risk and fetal distress from CTG data, comparing Random Forest & XGBoost models. React/Vite frontend with longitudinal vitals, FastAPI backend with heuristic fallbacks, model interpretability & fairness audits.",
    techStack: ["React", "FastAPI", "Scikit-learn", "XGBoost", "Pandas", "Vite"],
    category: ["ai", "ml"],
    image: "/ai-pathfinding-algorithm-visualization-grid.jpg",
    github: "https://github.com/farazshoukat",
    icon: Brain,
    featured: true,
    accentColor: "#a855f7",
  },
]

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "AI & LLMs", value: "ai" },
  { label: "Machine Learning", value: "ml" },
  { label: "Automation & N8N", value: "automation" },
  { label: "Mobile Apps", value: "flutter" },
]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent, rgba(168,85,247,0.02) 50%, transparent)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-4 font-display">
              Key{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production-grade applications spanning AI/ML predictive models, LLM agents, FastAPI backends, and N8N workflow automations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value
              return (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(168,85,247,0.15))",
                          border: "1px solid rgba(0,229,255,0.35)",
                          color: "#00e5ff",
                          boxShadow: "0 0 16px rgba(0,229,255,0.15)",
                        }
                      : {
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.5)",
                        }
                  }
                >
                  {filter.label}
                </motion.button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -20 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative rounded-2xl overflow-hidden flex flex-col justify-between"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {/* Hover border glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                    style={{ border: `1px solid ${project.accentColor}30`, boxShadow: `inset 0 0 30px ${project.accentColor}05` }}
                  />

                  <div>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to top, rgba(5,11,24,0.95) 0%, ${project.accentColor}15 50%, transparent 100%)`,
                        }}
                      />

                      {/* Icon */}
                      <div
                        className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: "rgba(5,11,24,0.8)",
                          backdropFilter: "blur(8px)",
                          border: `1px solid ${project.accentColor}30`,
                          boxShadow: `0 0 16px ${project.accentColor}20`,
                        }}
                      >
                        <project.icon className="h-5 w-5" style={{ color: project.accentColor }} />
                      </div>

                      {/* Featured / Award badge */}
                      <div className="absolute top-4 right-4 flex flex-col gap-1 items-end">
                        {project.featured && (
                          <span
                            className="px-2.5 py-1 text-xs font-semibold rounded-full"
                            style={{
                              background: "linear-gradient(135deg, #00e5ff20, #a855f720)",
                              border: "1px solid rgba(0,229,255,0.3)",
                              color: "#00e5ff",
                            }}
                          >
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {project.award && (
                        <div className="flex items-center gap-1.5 mb-2 px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{ background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.25)", color: "#ffd700" }}>
                          <Trophy className="h-3.5 w-3.5 flex-shrink-0" />
                          <span>{project.award}</span>
                        </div>
                      )}

                      <h3
                        className="text-base font-semibold font-display mb-1 transition-colors duration-300 group-hover:text-primary"
                        style={{ color: "rgba(255,255,255,0.9)" }}
                      >
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-medium mb-3" style={{ color: project.accentColor }}>
                          {project.subtitle}
                        </p>
                      )}
                      <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech & Action Buttons at bottom */}
                  <div className="p-5 pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-md"
                          style={{
                            background: `${project.accentColor}0d`,
                            border: `1px solid ${project.accentColor}20`,
                            color: project.accentColor,
                            opacity: 0.9,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.6)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = `${project.accentColor}40`
                            e.currentTarget.style.color = project.accentColor
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
                            e.currentTarget.style.color = "rgba(255,255,255,0.6)"
                          }}
                        >
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} demo`}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                          style={{
                            background: `${project.accentColor}15`,
                            border: `1px solid ${project.accentColor}30`,
                            color: project.accentColor,
                          }}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
