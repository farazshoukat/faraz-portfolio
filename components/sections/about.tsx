"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"

const techStack = [
  "Python",
  "Machine Learning",
  "TensorFlow",
  "Flutter",
  "Firebase",
  "Dart",
  "Cisco",
  "Git",
  "SQL",
  "NumPy",
  "Pandas",
  "Scikit-learn",
]

const timeline = [
  {
    year: "2022 - Present",
    title: "Final Year Student & Freelancer",
    description: "Building AI/ML solutions and Flutter applications",
    icon: GraduationCap,
  },
  {
    year: "2023 - 2024",
    title: "Final Year Project",
    description: "Plant Disease Detection using Machine Learning",
    icon: Briefcase,
  },
  {
    year: "2022 - 2025",
    title: "Academic Excellence",
    description: "Strong foundation in CS, Networks & AI",
    icon: Calendar,
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
              Passionate about leveraging artificial intelligence and machine learning to solve real-world problems.
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
                  <span>Pakistan</span>
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  {"I'm "}
                  <span className="text-primary font-semibold">Faraz Shoukat</span>, an AI Engineer and Machine Learning
                  enthusiast with 3+ years of combined academic and freelance experience. I specialize in building
                  intelligent systems that make a difference.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  My expertise spans across Machine Learning algorithms (Naive Bayes, KNN, A*, clustering), mobile
                  development with Flutter & Firebase, and Computer Networks (Cisco, VLANs, OSPF, BGP). I love turning
                  complex problems into elegant solutions.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Currently working on my final year project - a Plant Disease Detection system using Machine Learning -
                  while actively taking on freelance projects and mentoring peers.
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
