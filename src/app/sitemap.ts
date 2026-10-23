import type { MetadataRoute } from "next"
import { areas, posts } from "@/lib/content"
import { site } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solar-installation-chennai",
    "/installation-services",
    "/panel-cleaning",
    "/our-work",
    "/contact",
    "/quote",
    "/blog",
    "/videos",
    "/areas",
  ]
  return [
    ...staticRoutes.map((path) => ({
      url: path ? `${site.url}${path}/` : `${site.url}/`,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...areas.map((area) => ({
      url: `${site.url}/areas/${area.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]
}
