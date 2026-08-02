import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Faraz Shoukat | Full Stack Developer & AI/Automation Engineer",
  description:
    "Full Stack Developer & AI/Automation Engineer with experience at Lean Automation & Developers Hub. Building production web applications, LLM/RAG pipelines, and N8N automation workflows using Next.js 14, FastAPI, React, Node.js, and Python.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "N8N Automation",
    "Next.js 14",
    "React",
    "FastAPI",
    "Node.js",
    "TypeScript",
    "LLMs",
    "RAG",
    "Python",
    "Faraz Shoukat",
  ],
  authors: [{ name: "Faraz Shoukat" }],
  creator: "Faraz Shoukat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-website-faraz.vercel.app",
    title: "Faraz Shoukat | Full Stack Developer & AI/Automation Engineer",
    description:
      "Full Stack Developer & AI/Automation Engineer building Next.js web applications, LLM/RAG AI agents, and N8N automation workflows.",
    siteName: "Faraz Shoukat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraz Shoukat | Full Stack Developer & AI/Automation Engineer",
    description:
      "Full Stack Developer & AI/Automation Engineer building Next.js web applications, LLM/RAG AI agents, and N8N automation workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050b18" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
