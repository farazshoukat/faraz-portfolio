"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Send, Trash2, Bot, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

// Predefined Q&A about Faraz
const qaDatabase: Record<string, string> = {
  // Skills & Technologies
  skills:
    "I specialize in Machine Learning (NLP, CNN, LLM, clustering, model tuning), Python for ML and data analysis, mobile development, and Ai Engineering(e.g. N8N Automation,AutoGPT,RAG etc). I'm always expanding my toolkit!",
  python:
    "Python is my primary language for AI/ML work. I use it extensively with libraries like TensorFlow, Scikit-learn, NumPy, Pandas, and Matplotlib for building and training models, data analysis, and creating visualizations.",
  flutter:
    "I develop cross-platform mobile apps using Flutter and Dart. I'm experienced with Firebase integration for authentication, real-time databases, and cloud storage. I follow clean architecture patterns and use Provider for state management.",
  networking:
    "I have strong expertise in Computer Networks, including Cisco IOS configuration, VLANs, inter-VLAN routing, OSPF, BGP, STP, and VTP. I've designed and implemented enterprise-level network topologies using Packet Tracer.",
  ml: "My Machine Learning expertise includes classification algorithms (Naive Bayes, KNN, Decision Trees), clustering, model tuning, and deep learning with CNNs. My FYP on Plant Disease Detection achieved 94% accuracy across 38 disease classes.",

  // Projects
  projects:
    "My key projects include: 1) Plant Disease Detection using ML (94% accuracy CNN), 2) AI Pathfinding Simulation with A* algorithm, 3) Flutter Firebase CRUD apps, 4) Enterprise Network Labs with Cisco, and 5) Fashion AI Stylist concept project. Each showcases different aspects of my technical abilities.",
  fyp: "My Final Year Project is a Plant Disease Detection system using Machine Learning. It uses Convolutional Neural Networks trained on leaf images to identify diseases across 38 classes with 94% accuracy. Built with Python, TensorFlow, OpenCV, and Flask.",
  "plant disease":
    "The Plant Disease Detection project is my FYP. It analyzes leaf images using CNNs to identify plant diseases. The model was trained on thousands of images and achieves 94% accuracy. It can identify 38 different disease types and healthy plant states.",

  // Experience & Background
  experience:
    "I have 3+ years of combined academic and freelance experience. I've led my FYP on Plant Disease Detection, worked as a freelance developer building AI/ML solutions and Flutter apps, assisted in university networking labs, and mentored junior students.",
  education:
    "I'm pursuing a BS in Computer Science with specialization in AI & ML and Network Administration. I've completed certifications in Machine Learning from Coursera/Stanford, Cisco CCNA Fundamentals, TensorFlow Developer Certificate, and Flutter Development.",
  freelance:
    "As a freelancer, I build AI/ML solutions and Flutter mobile applications. I handle end-to-end development from requirements gathering to deployment, focusing on delivering quality solutions that solve real problems for my clients.",

  // Career & Goals
  goals:
    "My career goal is to become a leading AI Engineer, developing intelligent systems that solve real-world problems. I'm particularly interested in computer vision, healthcare AI, and making AI accessible to everyone.",
  hire: "I'm currently available for opportunities! I'm looking for roles in AI/ML Engineering, Software Development, or Mobile Development. I bring strong technical skills, a passion for learning, and a track record of delivering quality projects.",
  contact:
    "You can reach me through the contact form on this website, connect with me on LinkedIn, or check out my projects on GitHub. I'm always open to discussing new opportunities and collaborations!",

  // Personal
  location: "I'm based in Pakistan and open to both remote opportunities and relocation for the right role.",
  about:
    "I'm Faraz Shoukat, an AI Engineer and Machine Learning enthusiast. I love turning complex problems into elegant solutions using AI, mobile development, and networking technologies. When I'm not coding, I enjoy mentoring others and exploring new technologies.",
}

function findBestMatch(query: string): string {
  const lowerQuery = query.toLowerCase()

  // Direct keyword matching
  for (const [key, value] of Object.entries(qaDatabase)) {
    if (lowerQuery.includes(key)) {
      return value
    }
  }

  // Pattern matching for common questions
  if (lowerQuery.includes("who") && (lowerQuery.includes("you") || lowerQuery.includes("faraz"))) {
    return qaDatabase.about
  }
  if (
    lowerQuery.includes("work") ||
    lowerQuery.includes("job") ||
    lowerQuery.includes("hire") ||
    lowerQuery.includes("available")
  ) {
    return qaDatabase.hire
  }
  if (lowerQuery.includes("reach") || lowerQuery.includes("email") || lowerQuery.includes("connect")) {
    return qaDatabase.contact
  }
  if (lowerQuery.includes("where") || lowerQuery.includes("based") || lowerQuery.includes("live")) {
    return qaDatabase.location
  }
  if (
    lowerQuery.includes("study") ||
    lowerQuery.includes("degree") ||
    lowerQuery.includes("university") ||
    lowerQuery.includes("certificate")
  ) {
    return qaDatabase.education
  }
  if (
    lowerQuery.includes("build") ||
    lowerQuery.includes("made") ||
    lowerQuery.includes("created") ||
    lowerQuery.includes("work on")
  ) {
    return qaDatabase.projects
  }
  if (lowerQuery.includes("can do") || lowerQuery.includes("good at") || lowerQuery.includes("know")) {
    return qaDatabase.skills
  }
  if (
    lowerQuery.includes("want") ||
    lowerQuery.includes("future") ||
    lowerQuery.includes("aspire") ||
    lowerQuery.includes("dream")
  ) {
    return qaDatabase.goals
  }

  // Default response
  return "That's a great question! I can tell you about Faraz's skills (ML, Python, Flutter, Networking), projects (Plant Disease Detection, AI Pathfinding, Flutter apps), experience, education, or career goals. What would you like to know more about?"
}

const suggestedQuestions = [
  "What are your main skills?",
  "Tell me about your projects",
  "What's your FYP about?",
  "Are you available for hire?",
]

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm Faraz AI, your virtual assistant. Ask me anything about Faraz's skills, projects, experience, or career goals. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 500))

    const response = findBestMatch(input)
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
    }

    setIsTyping(false)
    setMessages((prev) => [...prev, assistantMessage])
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hi! I'm Faraz AI, your virtual assistant. Ask me anything about Faraz's skills, projects, experience, or career goals. How can I help you today?",
      },
    ])
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <section id="chatbot" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">AI Assistant</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Ask Faraz AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about my skills, projects, or experience? Chat with my AI assistant for instant answers.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              {/* Chat Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Faraz AI</h3>
                    <p className="text-xs text-muted-foreground">Always here to help</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClearChat}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages Container */}
              <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={cn("flex gap-3", message.role === "user" ? "flex-row-reverse" : "flex-row")}
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                          message.role === "user" ? "bg-primary" : "bg-primary/10",
                        )}
                      >
                        {message.role === "user" ? (
                          <User className="h-4 w-4 text-primary-foreground" />
                        ) : (
                          <Bot className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground rounded-tr-sm"
                            : "bg-muted text-foreground rounded-tl-sm",
                        )}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                      <div className="flex gap-1">
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                          className="w-2 h-2 bg-primary/50 rounded-full"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                          className="w-2 h-2 bg-primary/50 rounded-full"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                          className="w-2 h-2 bg-primary/50 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {messages.length <= 1 && (
                <div className="px-4 pb-4">
                  <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-border bg-muted/30">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSend()
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about Faraz..."
                    className="flex-1 bg-background"
                    disabled={isTyping}
                  />
                  <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
