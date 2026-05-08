"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"

const techStack = [
  "Python",
  "Next.js",
  "TypeScript",
  "FastAPI",
  "N8N",
  "LangChain",
  "RAG",
  "Machine Learning",
  "TensorFlow",
  "Git",
  "SQL",
  "Docker",
]

const timeline = [
  {
    year: "Nov 2025 - Present",
    title: "N8N Automation Engineer",
    description: "Building automation pipelines at Lean Automation — ~70% reduction in manual tasks, 15+ integrations",
    icon: Briefcase,
  },
  {
    year: "Aug 2025 - Dec 2025",
    title: "AI Engineer Intern",
    description: "Delivered 5+ AI/ML solutions for clients at Developers Hub",
    icon: Briefcase,
  },
  {
    year: "Jan 2025 - Mar 2025",
    title: "AI & Web Dev Intern",
    description: "30+ integrations and 10+ websites built at Delta Technologies",
    icon: Calendar,
  },
  {
    year: "2022 - 2025",
    title: "BSc Computer Science",
    description: "Final Year Project: FarmGuardian — CNN trained on 87,000+ images, 94% accuracy",
    icon: GraduationCap,
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Building the Future with AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about leveraging artificial intelligence and automation to solve real-world problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>Abbottabad, Pakistan</span>
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  {"I'm "}
                  <span className="text-primary font-semibold">Faraz Shoukat</span>, an AI Engineer and Automation
                  Engineer with 2+ years building AI/ML projects and professional experience at Lean Automation and two
                  AI internships.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  My expertise spans Machine Learning algorithms (NLP, CNN, LLM, clustering, model tuning), RAG
                  pipelines, and full-stack development with Next.js. Currently at Lean Automation, I build N8N
                  automation workflows that have reduced manual tasks by ~70% across 15+ integrations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  My FYP — FarmGuardian — is an AI-powered digital farming assistant using a CNN trained on 87,000+
                  images with 94% accuracy and offline inference for low-connectivity environments.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 pb-6 border-b border-border last:border-0 last:pb-0">
                      <span className="text-xs text-primary font-medium">{item.year}</span>
                      <h4 className="text-foreground font-semibold mt-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
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
