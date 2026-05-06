"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code, Smartphone, Network, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
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
    skills: [
      { name: "Git/GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Linux", level: 75 },
      { name: "Docker", level: 70 },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning AI/ML, mobile development, and enterprise networking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-xs text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
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
