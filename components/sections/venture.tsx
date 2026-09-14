import Link from "next/link"
import { ArrowUpRight, Instagram } from "lucide-react"

export function VentureSection() {
  return (
    <section className="venture-section wrap section-space" id="ventures" aria-labelledby="venture-heading">
      <div className="section-title"><div><span className="micro">(04)</span><h2 id="venture-heading">BUILDING SOMETHING OF OUR OWN.</h2></div><p className="micro">// PROJECTS & VENTURES</p></div>
      <article className="venture-card">
        <div className="venture-brand">
          <span className="micro">2026 — PRESENT / CO-FOUNDER</span>
          <h3>FLOWCRAFT<span>®</span></h3>
          <p>Web Development &<br />AI Automation Studio</p>
          <div className="venture-emblem" aria-hidden="true"><div className="venture-orbit">{Array.from({ length: 6 }, (_, i) => <i key={i} style={{ transform: `rotate(${i * 60}deg) translateY(-92px)` }} />)}</div><span>F<span>↗</span></span></div>
          <div className="venture-team micro"><strong>06</strong><span>PEOPLE.<br />ONE SHARED AMBITION.</span></div>
        </div>
        <div className="venture-story">
          <p className="venture-intro">Better websites.<br /><em>Less manual work.</em></p>
          <p>I co-founded Flowcraft alongside full-time studies: a small, distributed studio building and modernizing business websites, and automating the work behind them with AI.</p>
          <div className="venture-deliveries">
            <details open><summary><span className="micro">01 / THE STUDIO WEBSITE</span><span aria-hidden="true">+</span></summary><p>I led development of our Next.js and TypeScript website, including a custom AI voice assistant using Groq Whisper transcription and an LLM for lead capture and appointment booking.</p></details>
            <details><summary><span className="micro">02 / A HEALTHCARE CLIENT</span><span aria-hidden="true">+</span></summary><p>Signed and delivered a clinic engagement in Pakistan: a Maternal & Fetal Risk Prediction System using React, FastAPI, Random Forest, and XGBoost, as part of a larger digitalization plan.</p><Link href="/work/doc-poly-clinic" className="venture-case-link">EXPLORE THE CLINIC PROJECT <ArrowUpRight size={16} /></Link></details>
          </div>
          <p className="venture-note">A side venture with a six-person distributed team, structured alongside studies and without a full-time commitment.</p>
          <div className="venture-links"><a href="https://flowcraft7.vercel.app" target="_blank" rel="noopener noreferrer" className="pill lime">VISIT FLOWCRAFT <ArrowUpRight size={18} /></a><a href="https://www.instagram.com/flowcraft2026/" target="_blank" rel="noopener noreferrer" className="venture-instagram"><Instagram size={18} /> @flowcraft2026 <ArrowUpRight size={15} /></a></div>
        </div>
      </article>
    </section>
  )
}
