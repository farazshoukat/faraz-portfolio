"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { MapPin, Briefcase, GraduationCap, Calendar } from "lucide-react"

const techStack = [
  "Python", "Next.js", "TypeScript", "FastAPI", "N8N",
  "LangChain", "RAG", "Machine Learning", "TensorFlow", "Git", "SQL", "Docker",
]

const timeline = [
  {
    year: "Nov 2025 – Present",
    title: "N8N Automation Engineer",
    company: "Lean Automation",
    description: "~70% reduction in manual tasks · 15+ integrations",
    icon: Briefcase,
    color: "#00e5ff",
  },
  {
    year: "Aug – Dec 2025",
    title: "AI Engineer Intern",
    company: "Developers Hub",
    description: "5+ AI/ML solutions delivered end-to-end",
    icon: Briefcase,
    color: "#a855f7",
  },
  {
    year: "Jan – Mar 2025",
    title: "AI & Web Dev Intern",
    company: "Delta Technologies",
    description: "30+ integrations · 10+ websites built",
    icon: Calendar,
    color: "#6366f1",
  },
  {
    year: "2022 – 2025",
    title: "BSc Computer Science",
    company: "University",
    description: "FYP: FarmGuardian — CNN, 87K+ images, 94% accuracy",
    icon: GraduationCap,
    color: "#00e5ff",
  },
]

const statItems = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Integrations Built" },
  { value: 5, suffix: "+", label: "AI Projects" },
  { value: 87, suffix: "K+", label: "Images Trained" },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1400
    const step = (value / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)", transform: "translateY(-50%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5 }}>
              <span className="section-label">About Me</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-4 font-display">
              Building the Future{" "}
              <span className="gradient-text">with AI</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Passionate about leveraging artificial intelligence and automation to solve real-world problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — Bio card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Bio */}
              <div
                className="rounded-2xl p-8 mb-6 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "inset 0 0 40px rgba(0,229,255,0.02)",
                }}
              >
                {/* Left neon accent */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                  style={{ background: "linear-gradient(to bottom, #00e5ff, #a855f7)" }} />

                <div className="flex items-center gap-2 mb-5 pl-4">
                  <MapPin className="h-4 w-4" style={{ color: "#00e5ff" }} />
                  <span className="text-sm" style={{ color: "rgba(0,229,255,0.8)" }}>Abbottabad, Pakistan · Open to Remote</span>
                </div>

                <div className="pl-4">
                  <p className="leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {"I'm "}
                    <span className="font-semibold" style={{ color: "#00e5ff" }}>Faraz Shoukat</span>
                    {", an AI Engineer and Automation Engineer with 2+ years building AI/ML projects and professional experience at Lean Automation and two AI internships."}
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                    My expertise spans Machine Learning algorithms (NLP, CNN, LLM, clustering, model tuning), RAG pipelines, and full-stack development with Next.js. Currently at Lean Automation, I build N8N automation workflows that have reduced manual tasks by ~70% across 15+ integrations.
                  </p>
                  <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    My FYP — FarmGuardian — is an AI-powered digital farming assistant using a CNN trained on 87,000+ images with 94% accuracy and offline inference.
                  </p>
                </div>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {statItems.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: "rgba(0,229,255,0.04)",
                      border: "1px solid rgba(0,229,255,0.1)",
                    }}
                  >
                    <div className="text-2xl font-bold font-display" style={{ color: "#00e5ff" }}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                    </div>
                    <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.04 }}
                      className="skill-badge cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: "rgba(255,255,255,0.35)" }}>Journey</h3>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-px"
                  style={{ background: "linear-gradient(to bottom, rgba(0,229,255,0.4), rgba(168,85,247,0.4), transparent)" }} />

                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.12 }}
                      className="relative flex gap-6"
                    >
                      {/* Icon dot */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center z-10"
                        style={{
                          background: `rgba(${item.color === "#00e5ff" ? "0,229,255" : item.color === "#a855f7" ? "168,85,247" : "99,102,241"},0.1)`,
                          border: `1px solid ${item.color}30`,
                          boxShadow: `0 0 16px ${item.color}20`,
                        }}
                      >
                        <item.icon className="h-4 w-4" style={{ color: item.color }} />
                      </div>

                      {/* Content card */}
                      <div
                        className="flex-1 rounded-xl p-4 group cursor-default transition-all duration-300 hover:border-white/15"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span className="text-xs font-medium" style={{ color: item.color }}>{item.year}</span>
                        <h4 className="font-semibold font-display mt-1 text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>{item.title}</h4>
                        <p className="text-xs mt-0.5 mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>{item.company}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
