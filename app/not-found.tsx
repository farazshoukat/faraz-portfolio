import Link from "next/link"

export default function NotFound() {
  return (
    <main
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container-wide text-center">
        <p
          className="font-mono-ui mb-4"
          style={{ color: "var(--signal)", fontSize: "0.75rem", letterSpacing: "0.1em" }}
        >
          404
        </p>
        <h1
          className="font-display mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          Page not found.
        </h1>
        <p style={{ color: "var(--muted-color)", marginBottom: "2.5rem" }}>
          That URL doesn't exist. Here's the homepage.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "var(--signal)",
            color: "var(--ink)",
            borderRadius: 8,
            padding: "0.75rem 1.5rem",
            fontWeight: 500,
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          ← Go home
        </Link>
      </div>
    </main>
  )
}
