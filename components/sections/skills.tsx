"use client"

const row1Skills = [
  "React", "Next.js", "Node.js", "FastAPI", "Python",
  "React", "Next.js", "Node.js", "FastAPI", "Python",
]

const row2Skills = [
  "Flutter", "React Native", "LangGraph", "RAG / LLMs", "n8n", "TypeScript",
  "Flutter", "React Native", "LangGraph", "RAG / LLMs", "n8n", "TypeScript",
]

const Dot = () => (
  <span
    aria-hidden="true"
    style={{
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: "var(--signal)",
      opacity: 0.5,
      display: "inline-block",
      flexShrink: 0,
    }}
  />
)

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--surface)" }}
      />

      <div className="relative z-10">
        <div className="container-wide mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label">02 — Skills</span>
            <div className="divider flex-1" />
          </div>
          <h2
            className="section-heading"
            style={{ color: "var(--paper)", maxWidth: "20ch" }}
          >
            The stack I ship with
          </h2>
        </div>

        {/* Row 1 — left */}
        <div className="marquee-outer mb-4">
          <div className="marquee-track">
            {row1Skills.map((skill, i) => (
              <div key={i} className="marquee-item">
                <Dot />
                <span
                  className="font-mono-ui"
                  style={{ color: "var(--muted-color)", fontSize: "0.85rem" }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right (reverse) */}
        <div className="marquee-outer">
          <div className="marquee-track reverse">
            {row2Skills.map((skill, i) => (
              <div key={i} className="marquee-item">
                <Dot />
                <span
                  className="font-mono-ui"
                  style={{ color: "var(--muted-color)", fontSize: "0.85rem" }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <div className="container-wide mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Full-Stack Web",
                desc: "React/Next.js frontends, Node.js & FastAPI backends, Supabase/Postgres.",
              },
              {
                title: "AI & LLM Integration",
                desc: "RAG pipelines, multi-agent systems (LangGraph), NLP, Groq & OpenAI.",
              },
              {
                title: "Workflow Automation",
                desc: "n8n workflows connecting APIs, databases, Slack, and calendar systems.",
              },
              {
                title: "Mobile Apps",
                desc: "React Native & Flutter — offline-first, with on-device ML where needed.",
              },
            ].map((s) => (
              <div
                key={s.title}
                id={s.title === "Full-Stack Web" ? "services" : undefined}
                className="rounded-xl p-6"
                style={{
                  background: "var(--ink)",
                  border: "1px solid rgba(236,232,222,0.07)",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,176,32,0.2)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(236,232,222,0.07)")
                }
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mb-4"
                  style={{ background: "var(--signal)" }}
                />
                <h3
                  className="font-display text-base font-medium mb-2"
                  style={{ color: "var(--paper)" }}
                >
                  {s.title}
                </h3>
                <p className="section-label leading-relaxed" style={{ fontSize: "0.72rem", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
