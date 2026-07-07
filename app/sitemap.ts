import type { MetadataRoute } from 'next'

const BASE_URL = 'https://nox-security.co.uk'

const areas = [
  "Chesterfield", "Sheffield", "Dronfield", "Eckington", "Clay Cross", "Bolsover", 
  "Matlock", "Darley Dale", "Rowsley", "Wirksworth", "Bakewell", "Baslow", 
  "Ashford in the Water", "Hassop", "Tideswell", "Buxton", "Hathersage", 
  "Hope Valley", "Derbyshire", "North Yorkshire", "South Yorkshire", 
  "Nottinghamshire", "Mansfield", "Worksop", "Rotherham", "Doncaster"
].map(name => name.toLowerCase().replace(/ /g, '-'))

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/get-quote`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/service-plans`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/areas-we-serve`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // System pages
    {
      url: `${BASE_URL}/systems/intrusion-alarms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/systems/cctv`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/systems/fire-safety`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Legal pages
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-conditions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookie-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Area pages (high priority for local SEO)
  const areaPages: MetadataRoute.Sitemap = areas.map((slug) => ({
    url: `${BASE_URL}/areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...corePages, ...areaPages]
}
