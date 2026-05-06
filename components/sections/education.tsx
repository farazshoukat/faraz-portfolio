"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const education = {
  degree: {
    title: "Bachelor of Science in Computer Science",
    institution: "University of Pakistan",
    period: "2021 - 2025",
    description:
      "Focused on Artificial Intelligence, Machine Learning, and Computer Networks. Final Year Project: Plant Disease Detection using ML.",
    highlights: ["AI & ML Specialization", "Network Administration", "Software Engineering"],
  },
}

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera / Stanford",
    date: "2024",
    link: "#",
  },
  {
    title: "Cisco CCNA Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "2023",
    link: "#",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    link: "#",
  },
  {
    title: "Flutter Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    link: "#",
  },
]

const courses = [
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Networks",
  "Database Systems",
  "Software Engineering",
  "Operating Systems",
  "Mobile App Development",
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Education</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Academic Background</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My educational foundation and professional certifications in technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Degree Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 bg-card rounded-2xl p-8 border border-border"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">{education.degree.period}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1">{education.degree.title}</h3>
                  <p className="text-muted-foreground">{education.degree.institution}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{education.degree.description}</p>

              <div className="flex flex-wrap gap-2">
                {education.degree.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Relevant Courses */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h4 className="font-medium text-foreground">Relevant Courses</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span key={course} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border h-fit"
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                    {index < certifications.length - 1 && <div className="mt-4 border-b border-border" />}
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
