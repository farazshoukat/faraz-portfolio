import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Faraz Shoukat | AI & Automation Engineer",
  description:
    "AI Engineer and N8N Automation Engineer with professional experience at Lean Automation. Building AI-powered web applications, LLM pipelines, and automation workflows using Next.js, Python, and N8N.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "N8N Automation",
    "Next.js",
    "TypeScript",
    "LLM",
    "RAG",
    "Python",
    "FastAPI",
    "Faraz Shoukat",
  ],
  authors: [{ name: "Faraz Shoukat" }],
  creator: "Faraz Shoukat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-website-faraz.vercel.app",
    title: "Faraz Shoukat | AI & Automation Engineer",
    description:
      "AI Engineer and N8N Automation Engineer building AI-powered apps, LLM pipelines, and automation workflows.",
    siteName: "Faraz Shoukat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraz Shoukat | AI & Automation Engineer",
    description:
      "AI Engineer and N8N Automation Engineer building AI-powered apps, LLM pipelines, and automation workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
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
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
