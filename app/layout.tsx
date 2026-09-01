import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://farazshoukat.dev"),
  title: "Faraz Shoukat — Full-Stack & AI Engineer",
  description:
    "Full-stack engineer building production web applications, AI agents, and automation pipelines. React/Next.js, FastAPI, LangGraph, RAG, and n8n — based in Pakistan, available for freelance.",
  keywords: [
    "Faraz Shoukat",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "FastAPI",
    "LangGraph",
    "RAG",
    "LLM",
    "n8n Automation",
    "React",
    "TypeScript",
    "Python",
    "Pakistan",
    "Freelance",
  ],
  authors: [{ name: "Faraz Shoukat", url: "https://farazshoukat.dev" }],
  creator: "Faraz Shoukat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farazshoukat.dev",
    title: "Faraz Shoukat — Full-Stack & AI Engineer",
    description:
      "Full-stack engineer building production web apps, AI agents, and automation pipelines.",
    siteName: "Faraz Shoukat",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faraz Shoukat — Full-Stack & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraz Shoukat — Full-Stack & AI Engineer",
    description:
      "Full-stack engineer building production web apps, AI agents, and automation pipelines.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: "#121210",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
