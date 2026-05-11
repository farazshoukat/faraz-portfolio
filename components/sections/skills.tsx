"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code, Smartphone, Network, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    color: "#00e5ff",
    skills: [
      { name: "Naive Bayes", level: 90 },
      { name: "K-Nearest Neighbors", level: 85 },
      { name: "A* Search Algorithm", level: 88 },
      { name: "Clustering", level: 82 },
      { name: "Model Tuning", level: 80 },
      { name: "TensorFlow", level: 75 },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    color: "#a855f7",
    skills: [
      { name: "Python", level: 92 },
      { name: "Dart", level: 85 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "C/C++", level: 75 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "#6366f1",
    skills: [
      { name: "Flutter", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "REST APIs", level: 82 },
      { name: "UI/UX Design", level: 78 },
      { name: "State Management", level: 80 },
    ],
  },
  {
    title: "Networking",
    icon: Network,
    color: "#00e5ff",
    skills: [
      { name: "Cisco IOS", level: 85 },
      { name: "VLANs", level: 88 },
      { name: "OSPF/BGP", level: 82 },
      { name: "STP/VTP", level: 80 },
      { name: "Packet Tracer", level: 90 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "#a855f7",
    skills: [
      { name: "Git/GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Linux", level: 75 },
      { name: "Docker", level: 70 },
    ],
  },
]

function CircularProgress({ level, color, isInView }: { level: number; color: string; isInView: boolean }) {
  const radius = 22
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (level / 100) * circumference

  return (
    <div className="relative flex-shrink-0" style={{ width: 52, height: 52 }}>
      <svg width="52" height="52" className="-rotate-90">
        <circle cx="26" cy="26" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
        <motion.circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{ filter: `drop-shadow(0 0 6px ${color}60)` }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
    </div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent, rgba(0,229,255,0.015) 50%, transparent)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-label">Skills</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-4 font-display">
              Technical{" "}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning AI/ML, mobile development, and enterprise networking.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl p-6 relative overflow-hidden group transition-all"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Top gradient border */}
                <div
                  className="absolute top-0 left-6 right-6 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${category.color}60, transparent)` }}
                />

                {/* Hover glow */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${category.color}10 0%, transparent 70%)` }}
                />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${category.color}12`,
                      border: `1px solid ${category.color}25`,
                      boxShadow: `0 0 16px ${category.color}15`,
                    }}
                  >
                    <category.icon className="h-5 w-5" style={{ color: category.color }} />
                  </div>
                  <h3 className="font-semibold font-display text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.06 }}
                      className="flex items-center gap-3"
                    >
                      <CircularProgress level={skill.level} color={category.color} isInView={isInView} />
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
