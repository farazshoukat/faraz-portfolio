export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(236,232,222,0.07)",
        padding: "2.5rem 0",
        background: "var(--ink)",
      }}
    >
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.7rem",
              color: "var(--muted-color)",
              letterSpacing: "0.05em",
            }}
          >
            © {year} Faraz Shoukat
          </span>
          <span style={{ color: "rgba(143,140,128,0.3)" }}>—</span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.7rem",
              color: "var(--muted-color)",
              letterSpacing: "0.05em",
              opacity: 0.6,
            }}
          >
            Built with Next.js ♥
          </span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/farazshoukat" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/faraz-shoukat-539161289/" },
            {
              label: "Email",
              href: "mailto:farazshoukat1@gmail.com",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="nav-link-animated"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.7rem",
                color: "var(--muted-color)",
                letterSpacing: "0.05em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
