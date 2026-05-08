"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Code, Users } from "lucide-react"

const experiences = [
  {
    period: "Nov 2025 - Present",
    title: "N8N Automation Engineer",
    company: "Lean Automation",
    description:
      "Building intelligent automation pipelines and integrations for clients. Designing and deploying N8N workflows that streamline business processes end-to-end.",
    achievements: ["~70% reduction in manual tasks", "15+ integrations built", "End-to-end automation"],
    icon: Briefcase,
  },
  {
    period: "Aug 2025 - Dec 2025",
    title: "AI Engineer Intern",
    company: "Developers Hub",
    description:
      "Built AI/ML solutions and applications for clients. Delivered end-to-end solutions from requirements gathering to deployment.",
    achievements: ["5+ projects delivered", "Cross-platform apps", "Client satisfaction"],
    icon: Code,
  },
  {
    period: "Jan 2025 - Mar 2025",
    title: "AI Integration & Web Development Intern",
    company: "Delta Technologies",
    description:
      "Integrated AI components into client applications by implementing machine learning models, optimizing data pipelines, and supporting AI-driven features. Collaborated on model testing, deployment, and performance evaluation.",
    achievements: ["30+ integrations", "10+ websites built", "Positive reviews"],
    icon: Users,
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Professional Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional experience building AI solutions and automation pipelines.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-[7px] md:-translate-x-2 top-1 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      } max-w-lg`}
                    >
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <exp.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className={index % 2 === 0 ? "md:text-right" : ""}>
                          <span className="text-xs text-primary font-medium">{exp.period}</span>
                          <h3 className="font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>

                      <p
                        className={`text-muted-foreground text-sm leading-relaxed mb-4 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
