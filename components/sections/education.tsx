"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Award, BookOpen, ExternalLink, BadgeCheck } from "lucide-react"

const education = {
  degree: {
    title: "Bachelor of Science in Computer Science",
    institution: "COMSATS University Islamabad — Abbottabad Campus",
    period: "Sep 2022 – Aug 2026",
    description:
      "Focused on Artificial Intelligence, Machine Learning, and Software Engineering. FYP: FarmGuardian — AI Crop Disease Detection & Farm Assistant (Won 3rd Place & 1st Place People's Choice at FYP Competition Spring 2026).",
    highlights: ["AI & ML Focus", "Software Engineering", "FYP Award Winner"],
  },
}

const certifications = [
  {
    title: "Foundation: Introduction to LangChain — Python",
    issuer: "LangChain Academy",
    date: "Apr 2026",
    link: "#",
    color: "#00e5ff",
  },
  {
    title: "Generative AI Architectures (LLM, Prompt, RAG & VectorDB)",
    issuer: "Udemy",
    date: "2025",
    link: "#",
    color: "#a855f7",
  },
  {
    title: "Automate Everything: N8N Automation",
    issuer: "Udemy",
    date: "2025",
    link: "#",
    color: "#6366f1",
  },
  {
    title: "Machine Learning A to Z: Hands-On Python & R",
    issuer: "Udemy",
    date: "2025",
    link: "#",
    color: "#00e5ff",
  },
  {
    title: "N8N AI Agents by AdaptifyAI",
    issuer: "Udemy",
    date: "2024",
    link: "#",
    color: "#a855f7",
  },
]

const courses = [
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Machine Learning",
  "Database Systems",
  "Software Engineering",
  "Operating Systems",
  "Mobile App Development",
  "Discrete Mathematics",
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
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
          <div className="text-center mb-16">
            <span className="section-label">Education</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-4 font-display">
              Academic{" "}
              <span className="gradient-text">Background</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My formal degree at COMSATS University Abbottabad and industry certifications in AI, LLMs, and N8N automation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Degree Card — spans 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div>
                {/* Gradient border top */}
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, #00e5ff60, #a855f760, transparent)" }} />

                {/* Glow orb in corner */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)" }} />

                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(0,229,255,0.08)",
                      border: "1px solid rgba(0,229,255,0.2)",
                      boxShadow: "0 0 24px rgba(0,229,255,0.1)",
                    }}
                  >
                    <GraduationCap className="h-8 w-8" style={{ color: "#00e5ff" }} />
                  </div>
                  <div>
                    <span className="text-sm font-medium" style={{ color: "#00e5ff" }}>{education.degree.period}</span>
                    <h3 className="text-xl font-bold font-display mt-1" style={{ color: "rgba(255,255,255,0.95)" }}>
                      {education.degree.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{education.degree.institution}</p>
                  </div>
                </div>

                <p className="leading-relaxed mb-6 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {education.degree.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {education.degree.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1.5 text-sm font-medium rounded-full"
                      style={{
                        background: "rgba(0,229,255,0.07)",
                        border: "1px solid rgba(0,229,255,0.2)",
                        color: "#00e5ff",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Relevant Courses */}
              <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-4 w-4" style={{ color: "#a855f7" }} />
                  <h4 className="font-medium text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, i) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="px-2.5 py-1 text-xs rounded-lg"
                      style={{
                        background: "rgba(168,85,247,0.06)",
                        border: "1px solid rgba(168,85,247,0.15)",
                        color: "rgba(168,85,247,0.85)",
                      }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-6 h-fit"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-5 w-5" style={{ color: "#a855f7" }} />
                <h3 className="font-semibold font-display" style={{ color: "rgba(255,255,255,0.85)" }}>Certifications & Courses</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="group flex items-start gap-3"
                  >
                    <div
                      className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}25` }}
                    >
                      <BadgeCheck className="h-3.5 w-3.5" style={{ color: cert.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-1">
                        <h4
                          className="text-xs font-medium leading-snug transition-colors"
                          style={{ color: "rgba(255,255,255,0.85)" }}
                        >
                          {cert.title}
                        </h4>
                      </div>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
