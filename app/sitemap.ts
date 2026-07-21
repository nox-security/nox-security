import type { MetadataRoute } from "next"
import { areas, caseStudies, planPages, systemPages } from "@/lib/content"
import { blogPosts } from "@/lib/blog"
import { site } from "@/lib/site"
import { landingPageList } from "@/lib/landing"
import { indexableAreaSlugs } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const core = [
    "",
    "/residential",
    "/fire-compliance",
    "/commercial",
    "/commercial/cctv",
    "/commercial/intruder-alarms",
    "/commercial/industrial-warehouse-security",
    "/commercial/yard-perimeter-security",
    "/commercial/multi-site-security",
    "/commercial/integrated-fire-security",
    "/service-plans",
    "/systems",
    "/case-studies",
    "/blog",
    "/services",
    "/areas-we-serve",
    "/about-us",
    "/contact",
    "/get-quote",
    "/reviews",
  ]

  const urls = Array.from(new Set([
    ...core,
    ...Object.keys(systemPages).map(slug => `/systems/${slug}`),
    ...Object.keys(planPages).map(slug => `/service-plans/${slug}`),
    ...Object.keys(areas).filter(slug => indexableAreaSlugs.has(slug)).map(slug => `/areas/${slug}`),
    ...blogPosts.map(post => `/blog/${post.slug}`),
    ...caseStudies.map(project => `/case-studies/${project.slug}`),
    ...landingPageList.map(page => `/services/${page.slug}`),
  ]))

  return urls.map(path => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : ["/residential", "/fire-compliance", "/commercial", "/service-plans"].includes(path) ? 0.9 : 0.7,
  }))
}
