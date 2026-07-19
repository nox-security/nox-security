import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, JsonLd, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

const pages = {
  cctv: {
    title: "Commercial CCTV planned around the site",
    eyebrow: "Commercial CCTV Sheffield and Derbyshire",
    intro: "Professional CCTV for shops, showrooms, offices, warehouses, yards, garages, industrial units and larger multi-camera sites.",
    metaTitle: "Commercial CCTV Sheffield | CCTV Installation Derbyshire",
    metaDescription: "Commercial CCTV installation across Sheffield, Chesterfield and Derbyshire, including high-resolution cameras, NVR recording, smart detection, remote viewing and maintenance.",
    image: "/images/case-studies/install-3.png",
    alt: "Commercial AI CCTV turret cameras installed by NOX",
    items: [
      { title: "Coverage with a purpose", text: "Each camera is planned around an entrance, vehicle route, yard, working area or evidence requirement." },
      { title: "Recording and playback", text: "Recorder capacity, storage, search, remote viewing and network requirements are considered from the start." },
      { title: "Scalable systems", text: "NOX supports smaller business systems and larger camera counts using Ajax CCTV, Hikvision ColourVu and other suitable professional equipment." },
      { title: "Maintenance and takeovers", text: "Existing coax and IP systems can be assessed for faults, recorder upgrades, access recovery and annual service." }
    ],
    cases: ["chesterfield-scrapyard-cctv","buxton-industrial-security","retford-former-bank-cctv","chatsworth-estate-cctv-upgrade"]
  },
  "intruder-alarms": {
    title: "Commercial intruder alarms for premises, yards and working sites",
    eyebrow: "Commercial alarm installation",
    intro: "Internal, external and perimeter protection designed around the site, operating routine, staff use and agreed monitoring requirement.",
    metaTitle: "Commercial Intruder Alarms Chesterfield & Sheffield",
    metaDescription: "Commercial intruder alarm installation across Chesterfield, Sheffield and Derbyshire, with Ajax alarms, perimeter detection, app control, monitoring, maintenance and takeovers.",
    image: "/images/intrusion-alarms.png",
    alt: "Ajax commercial intruder alarm equipment installed by NOX",
    items: [
      { title: "Internal protection", text: "Door, movement and area protection configured around access points and how the premises is occupied." },
      { title: "External detection", text: "Yards, approaches and perimeter areas can be considered where the survey and site conditions make it suitable." },
      { title: "Control and verification", text: "Keypads, fobs, app access and photo verification can be configured around the agreed users and response process." },
      { title: "Monitoring and service", text: "Professional monitoring, keyholder contact, maintenance, fault resolution and suitable takeovers are available." }
    ],
    cases: ["dronfield-timber-perimeter","peak-electronic-security","buxton-industrial-security","banana-industries-fire-security"]
  },
  "fire-compliance": {
    title: "Commercial fire safety and coordinated annual compliance support",
    eyebrow: "Commercial fire and compliance",
    intro: "Fire alarm installation and servicing, emergency lighting, fire risk assessment support and annual packages for single sites and property portfolios.",
    metaTitle: "Commercial Fire & Security Systems | Fire Compliance Chesterfield",
    metaDescription: "Commercial fire alarm servicing, emergency lighting testing and coordinated compliance support across Chesterfield, Sheffield and Derbyshire.",
    image: "/images/fire-safety.png",
    alt: "Commercial fire alarm and emergency lighting services from NOX",
    items: [
      { title: "Fire alarm systems", text: "Installation, servicing, system takeovers, fault reporting and agreed remedial work." },
      { title: "Emergency lighting", text: "Installation, testing, fitting checks, records and separate remedial quotations." },
      { title: "Risk assessment support", text: "Arrange an assessment and keep any later installation or remedial work clearly separated." },
      { title: "Annual packages", text: "Coordinate agreed services, visit schedules, records and one renewal date where practical." }
    ],
    cases: ["banana-industries-fire-security"]
  }
} as const

type Slug = keyof typeof pages

export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = pages[slug as Slug]
  if (!page) return {}
  return pageMetadata(page.metaTitle, page.metaDescription, `/commercial/${slug}`)
}

export default async function CommercialServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = pages[slug as Slug]
  if (!page) notFound()
  const schema = { "@context":"https://schema.org", "@type":"Service", name: page.title, description: page.intro, provider:{"@type":"LocalBusiness",name:site.name,url:site.url}, areaServed:["Chesterfield","Sheffield","Derbyshire"], url:`${site.url}/commercial/${slug}` }
  return <><JsonLd data={schema}/><PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.image} imageAlt={page.alt}/><TrustStrip/><section className="section"><div className="container"><SectionHeading eyebrow="Commercial system design" title="The site, risk and operating routine come first"/><FeatureGrid columns={4} items={[...page.items]}/></div></section><section className="section section-alt"><div className="container"><SectionHeading eyebrow="NOX project examples" title="Real commercial installations"/><CaseStudyGrid slugs={[...page.cases]}/></div></section><section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Ongoing support" title="Move from installation into monitoring, maintenance or compliance support" text="The optional annual support is introduced clearly after the system scope is understood, without forcing it into every quotation."/><ReviewGrid/></div><aside className="dark-panel"><h3>Related routes</h3><div className="related-links"><Link href="/service-plans">Service plans →</Link><Link href="/case-studies">Case studies →</Link><Link href="/areas-we-serve">Coverage areas →</Link></div></aside></div></section><ConversionPanel/></>
}
