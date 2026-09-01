import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getProject, projects } from "@/lib/data/projects"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return {
    metadataBase: new URL("https://farazshoukat.dev"),
    title: `${project.title} — Faraz Shoukat`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Faraz Shoukat`,
      description: project.tagline,
      images: [{ url: project.coverImage }],
    },
  }
}

export default async function WorkCaseStudy({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main
      style={{ background: "var(--ink)", color: "var(--paper)", minHeight: "100vh" }}
    >
      {/* Nav back link */}
      <div
        className="container-wide"
        style={{ paddingTop: "6rem", paddingBottom: "2rem" }}
      >
        <Link
          href="/#work"
          className="nav-link-animated section-label inline-flex items-center gap-2"
          style={{ color: "var(--muted-color)" }}
        >
          ← All work
        </Link>
      </div>

      {/* Hero */}
      <div className="container-wide" style={{ paddingBottom: "4rem" }}>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="tech-tag tech-tag-signal">{project.category}</span>
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            maxWidth: "20ch",
          }}
        >
          {project.title}
        </h1>

        <p
          style={{
            color: "var(--muted-color)",
            fontSize: "1.1rem",
            lineHeight: 1.65,
            maxWidth: "52ch",
            marginBottom: "2.5rem",
          }}
        >
          {project.tagline}
        </p>

        {/* Team credit */}
        {project.teamCredits && (
          <p
            className="font-mono-ui"
            style={{ color: "var(--signal)", opacity: 0.75, marginBottom: "2rem" }}
          >
            {project.teamCredits}
          </p>
        )}

        {/* Links row */}
        {(project.repoUrl || project.demoUrl || project.instagramReel) && (
          <div className="flex flex-wrap gap-3 mb-10">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="work-link-btn"
              >
                ↗ View repo
              </a>
            )}
            {project.instagramReel && (
              <a
                href={project.instagramReel}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "rgba(255,176,32,0.1)",
                  border: "1px solid rgba(255,176,32,0.25)",
                  borderRadius: 8,
                  padding: "0.6rem 1.2rem",
                  fontSize: "0.8rem",
                  color: "var(--signal)",
                  textDecoration: "none",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                ▶ Watch reel (Instagram)
              </a>
            )}
          </div>
        )}
      </div>

      {/* Cover image */}
      <div className="container-wide mb-20">
        <div
          style={{
            position: "relative",
            height: "clamp(240px, 45vw, 520px)",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(236,232,222,0.08)",
          }}
        >
          <Image
            src={project.coverImage}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Case study body */}
      <div className="container-wide pb-24">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left: main content */}
          <div className="md:col-span-8 space-y-14">
            {/* Problem */}
            <div>
              <p className="section-label mb-4">The Problem</p>
              <p style={{ color: "var(--muted-color)", lineHeight: 1.8, fontSize: "1rem" }}>
                {project.problem}
              </p>
            </div>

            {/* What I built */}
            <div>
              <p className="section-label mb-6">What I Built</p>
              <ul className="space-y-4">
                {project.whatIBuilt.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div
                      style={{
                        width: 1,
                        flexShrink: 0,
                        background: "rgba(255,176,32,0.3)",
                        borderRadius: 2,
                        marginTop: 4,
                        alignSelf: "stretch",
                        minHeight: 20,
                      }}
                    />
                    <p style={{ color: "var(--muted-color)", lineHeight: 1.75, fontSize: "0.95rem" }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <p className="section-label mb-4">Outcome</p>
              <p style={{ color: "var(--muted-color)", lineHeight: 1.8, fontSize: "1rem" }}>
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Right: stack sidebar */}
          <div className="md:col-span-4">
            <div
              style={{
                position: "sticky",
                top: "6rem",
                background: "var(--surface)",
                border: "1px solid rgba(236,232,222,0.08)",
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <p className="section-label mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next project */}
        <div
          style={{
            marginTop: "5rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(236,232,222,0.08)",
          }}
        >
          <p className="section-label mb-4">More work</p>
          <div className="flex flex-wrap gap-4">
            {projects
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="nav-link-animated"
                  style={{
                    color: "var(--muted-color)",
                    fontSize: "0.875rem",
                    fontFamily: "Switzer, sans-serif",
                  }}
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
