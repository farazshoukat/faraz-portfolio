import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Fraunces, Anton } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" })

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
  metadataBase: new URL("https://farazshoukat.vercel.app"),
  title: "Faraz Shoukat — Full-Stack & AI Engineer",
  description:
    "Full-stack engineer building production web applications, AI agents, and automation pipelines. React/Next.js, FastAPI, machine learning, RAG, and n8n — based in Pakistan, available for freelance.",
  keywords: [
    "Faraz Shoukat",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "FastAPI",
    "Machine Learning",
    "RAG",
    "LLM",
    "n8n Automation",
    "React",
    "TypeScript",
    "Python",
    "Pakistan",
    "Freelance",
  ],
  authors: [{ name: "Faraz Shoukat", url: "https://farazshoukat.vercel.app" }],
  creator: "Faraz Shoukat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farazshoukat.vercel.app",
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
  themeColor: "#fff5eb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable} ${anton.variable}`}>
      <body>

          {children}

        <Analytics />
      </body>
    </html>
  )
}
