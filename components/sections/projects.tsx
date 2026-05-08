"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { ExternalLink, Github, Leaf, Brain, Smartphone, Sparkles, Bot, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of production projects showcasing my expertise in AI, LLM pipelines, and automation
              engineering.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "rounded-full transition-all",
                  activeFilter === filter.value ? "" : "bg-transparent hover:bg-secondary",
                )}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn(
                    "group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg",
                    project.featured && "md:col-span-2 lg:col-span-1",
                  )}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="outline" size="sm" className="gap-1.5 bg-transparent" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="gap-1.5" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} demo`}>
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
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
