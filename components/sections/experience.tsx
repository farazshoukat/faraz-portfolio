"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Code, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    period: "Jan 2026 – Apr 2026",
    title: "Junior Software Engineer (Full Stack & N8N Automation)",
    company: "Lean Automation",
    type: "Full-time",
    description:
      "Developed production web apps with Next.js 14 & TypeScript for industrial IoT clients. Built N8N automation workflows across 15+ services (reducing manual tasks by ~70%), contributed to Node.js microservices for 1,000s of active users, and architected LLM/RAG AI agent pipelines.",
    achievements: [
      "~70% manual operational task reduction via N8N",
      "Next.js 14, TypeScript & Tailwind UIs for IoT",
      "Node.js microservices serving 1,000s of daily active users",
      "LLM & RAG AI agent pipelines for productivity",
    ],
    icon: Briefcase,
    color: "#00e5ff",
  },
  {
    period: "Aug 2025 – Oct 2025",
    title: "AI Engineer Intern",
    company: "Developers Hub Corporation — Islamabad, Pakistan",
    type: "Internship",
    description:
      "Delivered 5+ end-to-end AI/ML client projects spanning NLP, LLMs, and RAG QA systems in an agile setup. Integrated production ML data pipelines from ingestion to deployment and developed cross-platform mobile apps with Flutter & Firebase.",
    achievements: [
      "5+ end-to-end AI/ML client projects delivered",
      "NLP, LLM & RAG QA architecture implementation",
      "End-to-end ML data ingestion & model deployment",
      "Flutter & Firebase cross-platform mobile apps",
    ],
    icon: Code,
    color: "#a855f7",
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
              A track record of engineering full-stack Web apps, AI/ML solutions, and enterprise N8N automations.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Animated vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(0,229,255,0.5), rgba(168,85,247,0.5), transparent)" }} />

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

                      <div className="grid sm:grid-cols-2 gap-2">
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
