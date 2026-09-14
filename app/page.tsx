"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play, Download, Plus, Copy, Check } from "lucide-react"
import { projects } from "@/lib/data/projects"
import { experience, certifications } from "@/lib/data/resume"
import { PortfolioMotion } from "@/components/portfolio-motion"
import { VentureSection } from "@/components/sections/venture"
import "./portfolio.css"

const stack = [
  { name: "WEB & MOBILE", text: "Fast, responsive interfaces for the web and mobile. Built to feel natural, from the first click to the last screen.", tools: ["TYPESCRIPT", "REACT", "NEXT.JS", "REACT NATIVE", "FLUTTER", "DART", "TAILWIND", "REDUX"] },
  { name: "BACKEND", text: "The systems behind the screen. APIs, databases, and integrations that keep your product running.", tools: ["PYTHON", "NODE.JS", "EXPRESS", "FASTAPI", "SQL", "POSTGRESQL", "MONGODB", "SUPABASE", "FIREBASE", "REDIS", "DOCKER", "GIT"] },
  { name: "AI & AUTOMATION", text: "AI that does useful work. Machine learning, retrieval pipelines, and workflows that turn busywork into background work.", tools: ["SCIKIT-LEARN", "TENSORFLOW", "NLP", "LLMS", "RAG", "N8N", "PANDAS", "NUMPY"] },
]
const process = [
  ["UNDERSTAND", "Start with the problem, the people using the product, and what a useful result looks like."],
  ["PLAN", "Map the interface, data, and integrations. Keep the architecture clear and the scope realistic."],
  ["BUILD", "Develop in focused iterations, with working demos and room for feedback along the way."],
  ["HAND OVER", "Check the critical flows, document the system, and make the next step easy to own."],
]

function SectionTitle({ number, title, note }: { number: string; title: string; note: string }) {
  return <div className="section-title"><div><span className="micro">({number})</span><h2>{title}</h2></div><p className="micro">// {note}</p></div>
}

export default function Home() {
  const rail = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [filter, setFilter] = useState("All")
  const [copyStatus, setCopyStatus] = useState("")
  const filteredProjects = projects.filter(p => filter === "All" || p.filters.includes(filter))
  function selectFilter(value: string) {
    setFilter(value)
    setActive(0)
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("farazshoukat1@gmail.com")
      setCopyStatus("Email copied!")
    } catch {
      setCopyStatus("Copy unavailable — use the email link.")
    }
  }
  function showProject(index: number) {
    const container = rail.current
    const card = container?.children[index] as HTMLElement | undefined
    if (container && card) container.scrollTo({ left: card.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })
  }
  return (
    <PortfolioMotion><div className="portfolio" id="top">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className={`ticker ${paused ? "is-paused" : ""}`}>
        <div className="ticker-track" aria-hidden="true">{[0, 1].map(i => <span key={i}>BUILDING FOR THE WEB <b>✳</b> CONNECTING THE DOTS <b>✳</b> FULL-STACK <b>✳</b> AI AGENTS <b>✳</b> AUTOMATING THE BUSYWORK <b>✳</b> </span>)}</div>
        <button aria-label={paused ? "Play banner animation" : "Pause banner animation"} onClick={() => setPaused(!paused)}>{paused ? <Play size={13} /> : <Pause size={13} />}</button>
      </div>
      <header className="portfolio-header wrap">
        <a className="wordmark" href="#top" aria-label="Faraz Shoukat home">FARAZ<span>®</span></a>
        <nav aria-label="Main navigation"><a href="#stack">STACK</a><a href="#work">WORK</a><a href="#ventures">FLOWCRAFT</a><a href="#experience">EXPERIENCE</a></nav>
        <a href="#contact" className="pill lime">SAY HELLO <ArrowRight size={19} /></a>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-meta micro"><span>FARAZ SHOUKAT — FULL-STACK & AI</span><span>ABBOTTABAD, PK · UTC+5</span><span className="availability"><i /> OPEN FOR FREELANCE</span></div>
          <div className="hero-stage">
            <div className="portrait"><Image src="/headshot.jpg" alt="Faraz Shoukat" fill priority sizes="(max-width: 640px) 80vw, 34vw" /><span className="portrait-caption micro">// YOUR NEXT ENGINEERING PARTNER</span></div>
            <h1 id="hero-title"><span>FARAZ</span><span>SHOUKAT</span></h1>
            <div className="dev-stamp" aria-label="Full-stack and AI developer"><span>FULL-STACK</span><strong>DEV</strong><span>+ AI ENGINEER</span></div>
            <div className="hero-actions"><a className="pill lime" href="#contact">DISCUSS A PROJECT <ArrowUpRight size={20} /></a><a className="pill" href="#work">EXPLORE MY WORK <ArrowDown size={18} /></a></div>
          </div>
          <div className="hero-foot micro"><span>WEB APPLICATIONS. INTELLIGENT SYSTEMS. LESS BUSYWORK.</span><a href="/FarazShoukat_Resume.pdf" download>DOWNLOAD RESUME <Download size={14} /></a></div>
        </section>
        <section className="manifesto" id="about">
          <div className="wrap"><p className="micro">// THE WAY I BUILD</p><h2>I BUILD <mark>FRONT.</mark><br />I BUILD <mark>BACK.</mark><br />I CONNECT <mark>IT ALL.</mark></h2><div className="manifesto-bottom"><p>From the interface to the API to the AI agent behind it. I build full-stack applications and automation systems that solve real problems — and care about what happens after the demo.</p><span className="asterisk" aria-hidden="true">✳</span><p>I'm Faraz, a full-stack & AI engineer based in Pakistan with a Computer Science background at COMSATS Abbottabad. From industrial ML at Lean Automation to NLP, RAG, and Flutter apps at Developers Hub, I connect models to the products people use.</p></div></div>
        </section>
        <section className="stack-section wrap section-space" id="stack">
          <SectionTitle number="01" title="WHAT I WORK WITH" note="LANGUAGES & TOOLS" />
          <div className="stack-grid">{stack.map((item, i) => <article className="stack-card" key={item.name}><div className="card-top micro"><span>0{i + 1}</span><span aria-hidden="true">{["</>", "{ }", "✳"][i]}</span></div><h3>{item.name}</h3><p>{item.text}</p><div className="tags">{item.tools.map(t => <span key={t}>{t}</span>)}</div></article>)}</div>
        </section>
        <section className="impact-section" id="impact"><div className="wrap section-space">
          <SectionTitle number="02" title="LESS MANUAL. MORE POSSIBLE." note="FROM MY WORK" />
          <div className="before-after"><div className="before"><span className="micro">BEFORE / THE BOTTLENECK</span><h3>COPY. PASTE.<br />REPEAT.</h3><p>Manual processing, disconnected tools, and follow-ups that depend on someone remembering.</p><span className="flow-label micro">INBOX → SPREADSHEET → ANOTHER SPREADSHEET</span></div><div className="after"><span className="micro">AFTER / THE WORKFLOW</span><h3>CONNECT.<br />AUTOMATE. GO.</h3><p>Connected applications and workflows that move information where it needs to be.</p><span className="flow-label micro">TRIGGER → WORKFLOW → ACTION <ArrowUpRight size={18} /></span></div></div>
          <div className="impact-stats"><div><strong>~65<span>%</span></strong><p>LESS MANUAL TRIAGE</p><span>Support agent · estimated reduction</span></div><div><strong>5<span>+</span></strong><p>AI/ML CLIENT PROJECTS</p><span>Delivered at Developers Hub</span></div><div><strong>91<span>%</span></strong><p>TOMATO LEAF ACCURACY</p><span>FarmGuardian · on-device & offline</span></div></div>
        </div></section>
        <section className="work-section wrap section-space" id="work">
          <SectionTitle number="03" title="SELECTED WORK" note="REAL PROBLEMS. WORKING SYSTEMS." />
          <div className="work-filters" role="group" aria-label="Filter projects">{["All", "Full-Stack", "Machine Learning", "AI & Automation", "Mobile"].map(value => <button key={value} className="filter-button micro" aria-pressed={filter === value} onClick={() => selectFilter(value)}>{value}<span>{projects.filter(p => value === "All" || p.filters.includes(value)).length}</span></button>)}</div>
          <p className="filter-status micro" aria-live="polite">{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} · {filter === "All" ? "the complete selection" : filter}</p>
          <div className="project-rail" key={filter} ref={rail} onScroll={() => { const el = rail.current; if (el) { const width = (el.children[0] as HTMLElement)?.offsetWidth + 24; setActive(Math.min(filteredProjects.length - 1, Math.round(el.scrollLeft / width))) } }}>
            {filteredProjects.map((project, i) => <Link href={`/work/${project.slug}`} className={`work-card work-${i}`} key={project.slug}><div className="work-image"><Image src={project.coverImage} alt={`${project.title} project preview`} fill sizes="(max-width: 640px) 85vw, 55vw" /><span className="project-open" aria-hidden="true"><ArrowUpRight /></span></div><div className="work-copy"><span className="micro">№0{i + 1} — {project.category}</span><h3>{project.title}</h3><p>{project.tagline}</p><span className="micro project-tech">{project.techStack.slice(0, 4).join(" · ")}</span></div></Link>)}
          </div>
          <div className="rail-controls"><span className="micro">SCROLL SIDEWAYS OR PICK A PROJECT →</span><div className="project-dots">{filteredProjects.map((p, i) => <button key={p.slug} aria-label={`Show project ${i + 1}: ${p.title}`} aria-pressed={active === i} onClick={() => showProject(i)} />)}</div><div className="rail-arrows"><button aria-label="Previous project" disabled={active === 0} onClick={() => showProject(active - 1)}><ChevronLeft /></button><button aria-label="Next project" disabled={active === filteredProjects.length - 1} onClick={() => showProject(active + 1)}><ChevronRight /></button></div></div>
        </section>
        <VentureSection />
        <section className="experience-section wrap section-space" id="experience">
          <SectionTitle number="05" title="THE EXPERIENCE BEHIND IT" note="OPEN A ROLE TO EXPLORE" />
          <div className="experience-list">{experience.map((entry, i) => <details key={entry.company} open={i === 0}><summary><span className="micro">{entry.date}</span><h3>{entry.company}</h3><p>{entry.role}</p><Plus aria-hidden="true" /></summary><ul>{entry.details.map(detail => <li key={detail}>{detail}</li>)}</ul></details>)}</div>
          <div className="credentials"><div><span className="micro">// KEEP LEARNING. KEEP BUILDING.</span><h3>CERTIFICATIONS<br />& COURSES</h3><a className="pill" href="/FarazShoukat_Resume.pdf" download>DOWNLOAD MY RESUME <Download size={17} /></a></div><ul>{certifications.map(([date, title]) => <li key={title}><span className="micro">{date}</span><p>{title}</p></li>)}</ul></div>
        </section>
        <section className="process-section" id="process"><div className="wrap section-space"><SectionTitle number="06" title="HOW THE WORK GOES" note="4 STEPS. A CLEAR PATH." /><ol className="process-grid">{process.map(([title, text], i) => <li key={title}><span className="step-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
      </main>
      <footer className="contact-section" id="contact"><div className="wrap"><div className="contact-top micro"><span>// GOT A PROJECT? LET'S MAKE IT WORK.</span><span className="availability"><i /> AVAILABLE FOR FREELANCE</span></div><a className="write-me" href="mailto:farazshoukat1@gmail.com">LET'S TALK <ArrowUpRight aria-hidden="true" /></a><div className="contact-links micro"><a href="mailto:farazshoukat1@gmail.com">FARAZSHOUKAT1@GMAIL.COM ↗</a><a href="https://github.com/farazshoukat" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/faraz-shoukat-539161289/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><button className="copy-email" onClick={copyEmail}>{copyStatus === "Email copied!" ? <Check size={14} /> : <Copy size={14} />} COPY EMAIL</button><span role="status">{copyStatus}</span></div><div className="footer-bottom micro"><span>PAKISTAN · REMOTE WORLDWIDE</span><span>© {new Date().getFullYear()} FARAZ SHOUKAT</span><a href="#top">BACK TO TOP ↑</a></div></div></footer>
    </div></PortfolioMotion>
  )
}
