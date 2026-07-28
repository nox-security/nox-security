import type { MetadataRoute } from "next"
import { areas, caseStudies, planPages, systemPages } from "@/lib/content"
import { blogPosts } from "@/lib/blog"
import { site } from "@/lib/site"
import { landingPageList } from "@/lib/landing"

export default function sitemap(): MetadataRoute.Sitemap {
  const releaseDate = new Date("2026-07-28T00:00:00.000Z")
  const core = [
    "",
    "/residential",
    "/fire-compliance",
    "/fire-compliance/multi-site-fire-alarm-systems",
    "/fire-compliance/integrated-fire-cctv-systems",
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
    "/ajax-authorised-installer",
    "/about-us",
    "/contact",
    "/get-quote",
    "/reviews",
  ]

  const urls = Array.from(new Set([
    ...core,
    ...Object.keys(systemPages).map(slug => `/systems/${slug}`),
    ...Object.keys(planPages).filter(slug => slug !== "residential-security-packages").map(slug => `/service-plans/${slug}`),
    ...Object.keys(areas).map(slug => `/areas/${slug}`),
    ...blogPosts.map(post => `/blog/${post.slug}`),
    ...caseStudies.map(project => `/case-studies/${project.slug}`),
    ...landingPageList.map(page => `/services/${page.slug}`),
  ]))

  const priorityRoutes = new Set([
    "/systems/cctv",
    "/systems/home-cctv",
    "/commercial/cctv",
    "/services/cctv-installation-chesterfield",
    "/services/commercial-cctv-sheffield",
    "/services/cctv-installation-derbyshire",
    "/fire-compliance",
    "/fire-compliance/multi-site-fire-alarm-systems",
    "/fire-compliance/integrated-fire-cctv-systems",
    "/systems/fire-safety",
    "/service-plans/fire-alarm-servicing",
    "/services/fire-alarm-installation-chesterfield",
    "/services/fire-alarm-servicing-chesterfield",
    "/systems/intrusion-alarms",
    "/services/intruder-alarm-installation-chesterfield",
    "/ajax-authorised-installer",
  ])

  return urls.map(path => ({
    url: `${site.url}${path}`,
    lastModified: releaseDate,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : priorityRoutes.has(path) ? 0.9 : ["/residential", "/commercial", "/service-plans"].includes(path) ? 0.8 : 0.7,
  }))
}
