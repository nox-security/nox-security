import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CaseStudyGrid, ConversionPanel, FeatureGrid, JsonLd, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

type Product = { name: string; text: string; image: string; alt: string }

type CommercialPage = {
  title: string
  eyebrow: string
  intro: string
  metaTitle: string
  metaDescription: string
  image: string
  alt: string
  items: readonly { title: string; text: string }[]
  aftercare: string
  cases: readonly string[]
  products?: readonly Product[]
}

const pages: Record<string, CommercialPage> = {
  cctv: {
    title: "Commercial CCTV planned around the site",
    eyebrow: "Commercial CCTV Sheffield and Derbyshire",
    intro: "Professional CCTV for shops, showrooms, offices, warehouses, yards, garages, industrial units and larger multi-camera sites.",
    metaTitle: "Commercial CCTV Sheffield | CCTV Installation Derbyshire",
    metaDescription: "Commercial CCTV installation across Sheffield, Chesterfield and Derbyshire, including high-resolution cameras, NVR recording, smart detection, remote viewing and maintenance.",
    image: "/images/revisions/commercial-cctv-industrial-building.jpg",
    alt: "Commercial CCTV camera installed by NOX at an industrial property",
    items: [
      { title: "Coverage with a purpose", text: "Each camera is planned around an entrance, vehicle route, yard, working area, stock location or evidence requirement." },
      { title: "Recording and playback", text: "Recorder capacity, storage, search, remote viewing and network requirements are considered from the start." },
      { title: "Scalable systems", text: "NOX supports smaller business systems and larger camera counts using Ajax CCTV, Hikvision ColourVu and other suitable professional equipment." },
      { title: "Maintenance and takeovers", text: "Existing coax and IP systems can be assessed for faults, recorder upgrades, access recovery and annual service." }
    ],
    aftercare: "Annual CCTV servicing can include camera cleaning, recorder and hard-drive checks, playback testing, firmware review and remote-access checks.",
    cases: ["continue-arcade-commercial-cctv-derby","chesterfield-scrapyard-cctv","buxton-industrial-security","retford-former-bank-cctv"]
  },
  "intruder-alarms": {
    title: "Commercial intruder alarms for premises, yards and working sites",
    eyebrow: "Commercial alarm installation",
    intro: "Internal, external and perimeter protection designed around the site, operating routine, staff use and agreed monitoring requirement.",
    metaTitle: "Commercial Intruder Alarms Chesterfield & Sheffield",
    metaDescription: "Commercial intruder alarm installation across Chesterfield, Sheffield and Derbyshire, with Ajax alarms, perimeter detection, app control, monitoring, maintenance and takeovers.",
    image: "/images/resent-installation/8F92B8AB-DE21-4FF1-B93F-EC455580264F.png",
    alt: "NOX external alarm sounder installed at a commercial premises",
    items: [
      { title: "Internal protection", text: "Door, movement and area protection configured around access points and how the premises is occupied." },
      { title: "External detection", text: "Yards, approaches and perimeter areas can be considered where the survey and site conditions make it suitable." },
      { title: "Control and verification", text: "Keypads, fobs, app access and photo verification can be configured around agreed users and response procedures." },
      { title: "Monitoring and service", text: "Professional monitoring, keyholder contact, maintenance, fault resolution and suitable takeovers are available." }
    ],
    aftercare: "Commercial alarm support can combine monitoring, engineer servicing, system-health checks, batteries, device testing and future fault support where included in the agreed plan.",
    cases: ["dronfield-timber-perimeter","peak-electronic-security","buxton-industrial-security","banana-industries-fire-security"]
  },
  "fire-compliance": {
    title: "Commercial fire alarm systems and coordinated compliance support",
    eyebrow: "Commercial Fire systems · Ajax EN54 · Servicing",
    intro: "Modern Ajax EN54 and suitable traditional fire alarm systems, routine servicing, emergency lighting and coordinated annual support for commercial premises and property portfolios.",
    metaTitle: "Commercial Fire Alarm Systems & Servicing Chesterfield",
    metaDescription: "Commercial Ajax EN54 fire alarm systems, fire alarm servicing, emergency lighting testing and coordinated compliance support across Chesterfield, Sheffield and Derbyshire.",
    image: "/images/revisions/ajax-en54-fire-control-panel.jpg",
    alt: "Ajax EN54 Fire Hub installed at a commercial premises",
    items: [
      { title: "System design around the premises", text: "The building, occupancy, escape arrangements, risks, zones and property requirements inform the proposed fire-alarm arrangement." },
      { title: "Ajax EN54 and traditional systems", text: "NOX can install modern Ajax EN54 equipment and service suitable conventional, addressable and established wireless fire systems." },
      { title: "Servicing and records", text: "Routine visits can include panel checks, detector and sounder testing, battery review, logbook information, defect reporting and separate remedial quotations." },
      { title: "Coordinated annual support", text: "Fire alarm servicing, emergency lighting and other agreed services can be brought into a clearer annual schedule and renewal structure." }
    ],
    aftercare: "Fire alarm servicing, emergency lighting and other agreed fire-safety services can be coordinated under a clearer annual arrangement, with defects and remedial work stated separately.",
    cases: ["telesis-hitachi-fire-intruder-system","banana-industries-fire-security"],
    products: [
      { name: "Ajax EN54 Fire Hub Jeweller", text: "Touchscreen control and indicating equipment at the centre of a suitable Ajax EN54 fire-alarm design, configured around the premises and required zones.", image: "/images/EN54FireHub.jpeg", alt: "Ajax EN54 Fire Hub Jeweller touchscreen panel" },
      { name: "EN54 manual call points", text: "Manual activation devices positioned as part of the designed fire-alarm arrangement and included in routine testing and service records.", image: "/images/ManualCallPointFireAlarm.jpeg", alt: "Commercial fire alarm manual call point" },
      { name: "Ajax EN54 detection devices", text: "Wireless fire detection devices selected around the rooms, risks and fire-alarm design. The precise detector type and location follow the survey and specification.", image: "/images/ajax-en54-fire.webp", alt: "Ajax EN54 wireless fire detection devices" },
      { name: "FireProtect family", text: "Ajax FireProtect devices can support suitable property applications outside the commercial EN54 line. NOX keeps the product range and compliance route clear during the survey.", image: "/images/FireProtect.jpeg", alt: "Ajax FireProtect fire detector" },
      { name: "FireProtect Plus", text: "Additional Ajax fire-detection options are selected only where their sensing capabilities and application suit the property requirement.", image: "/images/FireProtectPlus.jpeg", alt: "Ajax FireProtect Plus detector" },
      { name: "Traditional panel servicing", text: "NOX also supports suitable conventional, addressable and established wireless systems, so servicing is not limited to new Ajax installations.", image: "/images/FireAlaramServicingImage.jpeg", alt: "Engineer servicing a traditional commercial fire alarm panel" }
    ]
  }
}

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
  return <>
    <JsonLd data={schema}/>
    <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} image={page.image} imageAlt={page.alt}/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Commercial system design" title="The site, risk and operating routine come first"/><FeatureGrid columns={4} items={[...page.items]}/></div></section>
    {page.products && <section className="section section-alt commercial-product-section"><div className="container"><SectionHeading eyebrow="Ajax and professional fire equipment" title="A clearer look at the commercial fire-system options" text="Products are shown as part of the wider system design. The final panel, detection, call points, warning devices and servicing scope follow the property survey and relevant requirements."/><div className="commercial-product-grid">{page.products.map(product => <article key={product.name}><div><img src={product.image} alt={product.alt}/></div><h3>{product.name}</h3><p>{product.text}</p></article>)}</div></div></section>}
    <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Ongoing support" title="Keep the system useful after installation" text={page.aftercare}/><div className="related-links"><Link href="/service-plans">Service Plans →</Link><Link href="/service-plans/fire-alarm-servicing">Fire Alarm Servicing →</Link><Link href="/service-plans/fire-compliance">Fire Compliance Package →</Link><Link href="/get-quote">Request Your Free Survey →</Link></div></div><aside className="dark-panel"><h3>One commercial enquiry route</h3><p>Tell us the property type, systems involved, approximate scale and whether the work is a new installation, service, repair or takeover.</p><Link className="button button-light" href="/get-quote#quote-form">Request a Commercial Survey</Link></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="NOX project examples" title="Real commercial installations"/><CaseStudyGrid slugs={[...page.cases]}/></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Commercial customers value clear advice and proper workmanship"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Discuss your commercial site" text="Use one enquiry for installation, servicing, monitoring, Fire support or an existing-system takeover."/>
  </>
}
