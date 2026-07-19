import type { MetadataRoute } from "next"
import { areas, planPages, systemPages } from "@/lib/content"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const core = [
    "", "/systems", "/service-plans", "/commercial", "/commercial/cctv", "/commercial/intruder-alarms", "/commercial/fire-compliance",
    "/areas-we-serve", "/about-us", "/contact", "/get-quote", "/book-security-survey", "/case-studies", "/reviews",
    "/privacy-policy", "/terms-conditions", "/cookie-policy"
  ]
  const urls = [
    ...core,
    ...Object.keys(systemPages).map(slug => `/systems/${slug}`),
    ...Object.keys(planPages).map(slug => `/service-plans/${slug}`),
    ...Object.keys(areas).map(slug => `/areas/${slug}`)
  ]
  return urls.map((path, index) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : index < 15 ? 0.85 : 0.7
  }))
}
