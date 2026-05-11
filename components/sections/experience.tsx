"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Code, Users, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    period: "Nov 2025 – Present",
    title: "N8N Automation Engineer",
    company: "Lean Automation",
    type: "Full-time",
    description:
      "Building intelligent automation pipelines and integrations for clients. Designing and deploying N8N workflows that streamline business processes end-to-end.",
    achievements: ["~70% reduction in manual tasks", "15+ integrations built", "End-to-end automation"],
    icon: Briefcase,
    color: "#00e5ff",
  },
  {
    period: "Aug – Dec 2025",
    title: "AI Engineer Intern",
    company: "Developers Hub",
    type: "Internship",
    description:
      "Built AI/ML solutions and applications for clients. Delivered end-to-end solutions from requirements gathering to deployment.",
    achievements: ["5+ projects delivered", "Cross-platform apps", "Client satisfaction"],
    icon: Code,
    color: "#a855f7",
  },
  {
    period: "Jan – Mar 2025",
    title: "AI Integration & Web Development Intern",
    company: "Delta Technologies",
    type: "Internship",
    description:
      "Integrated AI components into client applications by implementing machine learning models, optimizing data pipelines, and supporting AI-driven features.",
    achievements: ["30+ integrations", "10+ websites built", "Positive reviews"],
    icon: Users,
    color: "#6366f1",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent, rgba(0,229,255,0.015) 50%, transparent)" }} />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-label">Experience</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-4 font-display">
              Professional{" "}
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional experience building AI solutions and automation pipelines.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Animated vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(0,229,255,0.5), rgba(168,85,247,0.5), rgba(99,102,241,0.3), transparent)" }} />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline node */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${exp.color}12`,
                        border: `1px solid ${exp.color}35`,
                        boxShadow: `0 0 24px ${exp.color}20`,
                      }}
                    >
                      <exp.icon className="h-5 w-5" style={{ color: exp.color }} />
                    </motion.div>
                    {/* Pulsing ring for current job */}
                    {index === 0 && (
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="absolute inset-0 rounded-xl"
                        style={{ border: `1px solid ${exp.color}` }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex-1 rounded-2xl p-6 group relative overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    {/* Left accent border */}
                    <div
                      className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                      style={{ background: `linear-gradient(to bottom, ${exp.color}, ${exp.color}30)` }}
                    />

                    {/* Top glow on hover */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${exp.color}60, transparent)` }}
                    />

                    <div className="pl-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="text-xs font-medium" style={{ color: exp.color }}>{exp.period}</span>
                          <h3 className="text-base font-bold font-display mt-0.5" style={{ color: "rgba(255,255,255,0.9)" }}>{exp.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{exp.company}</p>
                            <span
                              className="px-2 py-0.5 text-xs rounded-full"
                              style={{
                                background: `${exp.color}12`,
                                border: `1px solid ${exp.color}25`,
                                color: exp.color,
                                opacity: 0.8,
                              }}
                            >
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs"
                            style={{
                              background: `${exp.color}08`,
                              border: `1px solid ${exp.color}20`,
                            }}
                          >
                            <CheckCircle2 className="h-3 w-3 flex-shrink-0" style={{ color: exp.color }} />
                            <span style={{ color: "rgba(255,255,255,0.6)" }}>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
