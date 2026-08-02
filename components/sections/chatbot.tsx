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

// Predefined Q&A about Faraz based on official CV
const qaDatabase: Record<string, string> = {
  skills:
    "I specialize in Full Stack Development (Next.js 14, React, Node.js, Express, FastAPI, TypeScript, Tailwind CSS), AI & ML (LLMs, RAG, Groq, TensorFlow, Scikit-learn, NLP, CNNs), Databases (PostgreSQL, Supabase, MongoDB, Firebase), Mobile (Flutter, Firebase), and N8N Automation (15+ integrations, ~70% task reduction).",
  python:
    "Python is my primary language for AI, ML, and backend development. I use it with FastAPI, LangChain, PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, and OpenCV.",
  flutter:
    "I build cross-platform mobile apps with Flutter and Dart. For my FYP FarmGuardian, I integrated TFLite (EfficientNet-B0) on-device inference with Supabase, Provider state management, and full Urdu localization via i18next.",
  automation:
    "At Lean Automation, I engineered N8N automation workflows integrating 15+ 3rd party services (APIs, webhooks, databases), reducing manual operational tasks by ~70%. I also design AI agent pipelines leveraging LLMs and RAG architectures.",
  ml:
    "My Machine Learning expertise includes LLMs & RAG, Random Forest, XGBoost, CNNs, TFLite, NLP, and model interpretability. My FYP FarmGuardian achieved 91% TFLite accuracy for crop disease detection.",

  projects:
    "My key projects include: 1) FarmGuardian (AI Crop Disease Assistant — 3rd & 1st Place People's Choice FYP Award), 2) Job Copilot (AI Resume Tailor & Cover Letter Generator), 3) Multilingual AI Support Agent (Groq & N8N), 4) AI Portfolio & CV Generator (FastAPI, WeasyPrint), and 5) Maternal-Fetal Risk System (Random Forest & XGBoost).",
  fyp:
    "My FYP is FarmGuardian — an offline-first AI crop disease detection & farming assistant. Built with React Native, TFLite (EfficientNet-B0, 91% accuracy), Random Forest yield prediction, Supabase & Urdu localization. It won 3rd Place & 1st Place (People's Choice) at COMSATS Abbottabad FYP Competition Spring 2026!",
  "farmguardian":
    "FarmGuardian is an AI crop assistant for Punjab farmers featuring on-device TFLite disease detection (91% accuracy), Random Forest yield predictions across 5 crops, mandi price tracking, and full Urdu localization via i18next.",
  "job copilot":
    "Job Copilot is a full-stack AI web app built with FastAPI, Next.js 14, Groq LLM & Supabase that ingests a resume PDF and job description, rewrites resume bullets for ATS matching, and generates a tailored cover letter in <60s.",

  experience:
    "I worked as a Junior Software Engineer (Full Stack & N8N Automation) at Lean Automation (Jan 2026 – Apr 2026), building Next.js 14 UIs for IoT clients and 15+ N8N workflows (~70% task reduction). Previously, I was an AI Engineer Intern at Developers Hub Corporation (Aug 2025 – Oct 2025), delivering 5+ AI/ML projects.",
  education:
    "I am completing my BS in Computer Science at COMSATS University Islamabad — Abbottabad Campus (Sep 2022 – Aug 2026), focusing on AI, ML, and Software Engineering.",
  certifications:
    "My certifications include: Foundation: Introduction to LangChain (Apr 2026), Generative AI Architectures with LLM, Prompt, RAG & VectorDB (Udemy 2025), Automate Everything: N8N Automation (Udemy 2025), Machine Learning A to Z (Udemy 2025), and N8N AI Agents by AdaptifyAI (Udemy 2024).",

  goals:
    "My goal is to innovate at the intersection of Full Stack Engineering, Generative AI, and Automation — building scalable, high-impact products that automate complex workflows and empower users worldwide.",
  hire:
    "I am actively seeking Full Stack Developer, AI/ML Engineer, and Automation Engineer roles! I bring hands-on experience in Next.js 14, FastAPI, LLM/RAG pipelines, and N8N automation.",
  contact:
    "Feel free to email me at farazshoukat1@gmail.com, connect on LinkedIn (linkedin.com/in/faraz-shoukat-), or check out my GitHub (github.com/farazshoukat).",

  location: "I'm based in Abbottabad / Islamabad, Pakistan, and available for remote opportunities worldwide or relocation.",
  about:
    "I'm Faraz Shoukat, a Full Stack Developer & AI Engineer passionate about building intelligent web applications, LLM agents, and automated data pipelines.",
}

function findBestMatch(query: string): string {
  const lowerQuery = query.toLowerCase()

  for (const [key, value] of Object.entries(qaDatabase)) {
    if (lowerQuery.includes(key)) {
      return value
    }
  }

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
    lowerQuery.includes("comsats")
  ) {
    return qaDatabase.education
  }
  if (
    lowerQuery.includes("build") ||
    lowerQuery.includes("made") ||
    lowerQuery.includes("created") ||
    lowerQuery.includes("project")
  ) {
    return qaDatabase.projects
  }
  if (lowerQuery.includes("can do") || lowerQuery.includes("good at") || lowerQuery.includes("skill")) {
    return qaDatabase.skills
  }

  return "I can tell you about Faraz's Full Stack & AI skills (Next.js 14, FastAPI, LLMs, N8N), key projects (FarmGuardian, Job Copilot), experience at Lean Automation, or education at COMSATS Abbottabad. What would you like to know?"
}

const suggestedQuestions = [
  "What are your main skills?",
  "Tell me about your projects",
  "Tell me about FarmGuardian (FYP)",
  "What is your experience?",
]

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm Faraz AI. Ask me anything about Faraz's full-stack skills, AI projects, N8N automation experience, or education at COMSATS Abbottabad!",
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

    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400))

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
          "Hi! I'm Faraz AI. Ask me anything about Faraz's full-stack skills, AI projects, N8N automation experience, or education at COMSATS Abbottabad!",
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
              Have questions about my Full Stack engineering skills, AI projects, or experience? Chat with my AI assistant for instant answers.
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
                    <p className="text-xs text-muted-foreground font-mono">Knowledgeable & Ready</p>
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
