import type { Metadata } from "next"
import Link from "next/link"
import { ConversionPanel, DualButtons, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { systemPages } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Security Systems Chesterfield | Alarms, CCTV & Fire",
  "Explore tailored intruder alarms, CCTV, fire alarms, emergency lighting and fire risk assessment services across Chesterfield, Sheffield and Derbyshire.",
  "/systems"
)

export default function SystemsPage() {
  return <>
    <PageHero eyebrow="NOX solutions" title="Alarm, CCTV and Fire systems designed around the property" intro="Choose the service you need and use one clear enquiry route. NOX will review the property and arrange a survey where the system needs to be designed on site." image="/images/editorial/ajax-technology.jpg" imageAlt="Ajax alarm, perimeter, video and control products used by NOX"><DualButtons/></PageHero>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Core services" title="Residential and commercial protection through one local team" text="Ajax is the preferred smart security platform for many projects, while CCTV and Fire equipment are selected around the site, the existing system and the agreed requirement."/><div className="solution-grid systems-index-grid">{Object.values(systemPages).map(page => <article className="solution-card" key={page.slug}><img src={page.image} alt={page.imageAlt}/><div className="solution-card-body"><h2>{page.eyebrow}</h2><p>{page.intro}</p><Link className="text-link" href={`/systems/${page.slug}`}>Explore service →</Link></div></article>)}</div></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Residential" title="Homes, driveways, garages and outbuildings" text="Intruder alarms, CCTV, perimeter protection, app control, monitoring and annual maintenance designed around daily life."/><Link className="button button-outline" href="/residential">Explore Residential Solutions</Link></div><aside className="dark-panel"><span className="eyebrow">Commercial</span><h2>Joined-up fire and security.</h2><p>Alarm, CCTV, fire, emergency lighting, monitoring, maintenance and takeovers for shops, offices, warehouses, hospitality and multi-system sites.</p><Link className="button button-light" href="/commercial">Explore Commercial Solutions</Link></aside></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="Professional advice, installation and aftercare"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel/>
  </>
}
