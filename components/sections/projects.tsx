"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ExternalLink, Github, Leaf, Brain, Smartphone, Sparkles, Bot, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

type ProjectCategory = "all" | "ai" | "ml" | "flutter" | "automation"

interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  category: ProjectCategory[]
  image: string
  github?: string
  demo?: string
  icon: React.ElementType
  featured?: boolean
  accentColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "FarmGuardian",
    description:
      "AI-powered digital farming assistant using a CNN trained on 87,000+ images with 94% accuracy across 38 disease classes. Features offline inference for low-connectivity rural environments and real-time disease alerts.",
    techStack: ["Python", "TensorFlow", "CNN", "OpenCV", "Flutter", "FastAPI"],
    category: ["ml", "ai"],
    image: "/plant-disease-detection-ml-system-green-leaves.jpg",
    github: "https://github.com/farazshoukat",
    icon: Leaf,
    featured: true,
    accentColor: "#00e5ff",
  },
  {
    id: 2,
    title: "Maternal-Fetal Risk System",
    description:
      "Two-tier AI predictive architecture for maternal health monitoring. FastAPI backend with a trained Random Forest model, React clinical dashboard, and N8N automation for real-time risk alerts.",
    techStack: ["Python", "FastAPI", "React", "N8N", "Scikit-learn", "Docker"],
    category: ["ai", "ml", "automation"],
    image: "/ai-pathfinding-algorithm-visualization-grid.jpg",
    github: "https://github.com/farazshoukat",
    icon: Brain,
    featured: true,
    accentColor: "#a855f7",
  },
  {
    id: 3,
    title: "Multilingual AI Support Agent",
    description:
      "Production AI customer support agent capable of handling queries in multiple languages using LLM APIs. Built with LangChain, RAG pipelines, and N8N for workflow automation and escalation routing.",
    techStack: ["Python", "LangChain", "RAG", "N8N", "OpenAI API", "FastAPI"],
    category: ["ai", "automation"],
    image: "/flutter-mobile-app-dashboard-clean-ui.jpg",
    github: "https://github.com/farazshoukat",
    icon: Bot,
    accentColor: "#6366f1",
  },
  {
    id: 4,
    title: "AI Portfolio & CV Generator",
    description:
      "Intelligent tool that generates tailored portfolios and CVs using LLM prompting. Takes user data and produces professional documents customized for specific job roles and industries.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel"],
    category: ["ai"],
    image: "/fashion-ai-recommendation-system-stylish-clothes.jpg",
    github: "https://github.com/farazshoukat",
    icon: FileText,
    accentColor: "#00e5ff",
  },
  {
    id: 5,
    title: "Job Copilot",
    description:
      "AI-powered job application assistant that tailors resumes and cover letters to job descriptions. Uses LLM analysis to surface keywords and align experience with recruiter expectations.",
    techStack: ["Python", "LangChain", "Next.js", "Tailwind CSS", "OpenAI API"],
    category: ["ai"],
    image: "/machine-learning-classification-data-visualization.jpg",
    github: "https://github.com/farazshoukat",
    icon: Sparkles,
    featured: true,
    accentColor: "#a855f7",
  },
  {
    id: 6,
    title: "AI Pathfinding Simulation",
    description:
      "Interactive visualization of the A* search algorithm with real-time obstacle placement and path optimization. Demonstrates AI decision-making in complex grid environments.",
    techStack: ["Python", "Pygame", "A* Algorithm", "Heuristics"],
    category: ["ai"],
    image: "/network-topology-diagram-cisco-enterprise.jpg",
    github: "https://github.com/farazshoukat",
    icon: Brain,
    accentColor: "#6366f1",
  },
]

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Machine Learning", value: "ml" },
  { label: "Automation", value: "automation" },
  { label: "Mobile", value: "flutter" },
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
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of production projects showcasing my expertise in AI, LLM pipelines, and automation engineering.
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
                  className="group relative rounded-2xl overflow-hidden"
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

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
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
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3
                      className="text-base font-semibold font-display mb-2 transition-colors duration-300 group-hover:text-primary"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-md"
                          style={{
                            background: `${project.accentColor}0d`,
                            border: `1px solid ${project.accentColor}20`,
                            color: project.accentColor,
                            opacity: 0.85,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span
                          className="px-2 py-0.5 text-xs rounded-md"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
                        >
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
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
