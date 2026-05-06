import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Faraz Shoukat | AI & ML Engineer",
  description:
    "AI Engineer, Machine Learning Engineer, Flutter Developer, and Computer Networks Specialist with 3+ years of experience building intelligent applications and solutions.",
  keywords: ["AI Engineer", "Machine Learning", "Flutter Developer", "Computer Networks", "Python", "Faraz Shoukat"],
  authors: [{ name: "Faraz Shoukat" }],
  creator: "Faraz Shoukat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farazshoukat.dev",
    title: "Faraz Shoukat | AI & ML Engineer",
    description: "AI Engineer, Machine Learning Engineer, Flutter Developer, and Computer Networks Specialist",
    siteName: "Faraz Shoukat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraz Shoukat | AI & ML Engineer",
    description: "AI Engineer, Machine Learning Engineer, Flutter Developer, and Computer Networks Specialist",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
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
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
