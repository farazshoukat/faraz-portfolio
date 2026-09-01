import type { MetadataRoute } from "next"
import { projects } from "@/lib/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://farazshoukat.dev"

  const workPages = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...workPages,
  ]
}
