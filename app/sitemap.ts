import type { MetadataRoute } from "next"
import { areas, planPages, systemPages } from "@/lib/content"
import { blogPosts } from "@/lib/blog"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const core = [
    "", "/residential", "/systems", "/service-plans", "/commercial", "/commercial/cctv", "/commercial/intruder-alarms", "/commercial/fire-compliance",
    "/areas-we-serve", "/about-us", "/contact", "/get-quote", "/case-studies", "/reviews", "/blog",
    "/privacy-policy", "/terms-conditions", "/cookie-policy"
  ]
  const urls = [
    ...core,
    ...Object.keys(systemPages).map(slug => `/systems/${slug}`),
    ...Object.keys(planPages).map(slug => `/service-plans/${slug}`),
    ...Object.keys(areas).map(slug => `/areas/${slug}`),
    ...blogPosts.map(post => `/blog/${post.slug}`)
  ]
  return urls.map((path, index) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : index < 18 ? 0.85 : 0.7
  }))
}
