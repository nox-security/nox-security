import type { Metadata } from "next"
import Link from "next/link"
import { ConversionPanel, DualButtons, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { systemPages } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Security Systems Chesterfield | Alarms, CCTV & Fire",
  "Explore tailored intruder alarms, CCTV, fire alarms, emergency lighting and fire risk assessment services across Chesterfield, Sheffield and Derbyshire.",
  "/systems"
)

export default function SystemsPage() {
  return <>
    <PageHero eyebrow="NOX solutions" title="Alarm, CCTV and fire systems designed around the property" intro="Choose the service you need, then request a tailored quote or book a free security survey directly into the calendar." image="/images/intrusion-alarms.png" imageAlt="NOX alarm, CCTV and fire security solutions in Chesterfield"><DualButtons/></PageHero>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Core services" title="Residential and commercial protection through one local team" text="Ajax is our preferred smart security platform, while CCTV and fire equipment are selected around the site, the existing system and the agreed requirement."/><div className="solution-grid systems-index-grid">{Object.values(systemPages).map(page => <article className="solution-card" key={page.slug}><img src={page.image} alt={page.imageAlt}/><div className="solution-card-body"><h2>{page.eyebrow}</h2><p>{page.intro}</p><Link className="text-link" href={`/systems/${page.slug}`}>Explore service →</Link></div></article>)}</div></div></section>
    <section className="section section-alt"><div className="container split-grid"><div><SectionHeading eyebrow="Residential" title="Homes, driveways, garages and outbuildings" text="Intruder alarms, CCTV, perimeter protection, app control, monitoring and annual maintenance designed around daily life."/><Link className="button button-outline" href="/get-quote">Request a Residential Quote</Link></div><aside className="dark-panel"><span className="eyebrow">Commercial</span><h2>Joined-up fire and security.</h2><p>Alarm, CCTV, fire, emergency lighting, monitoring, maintenance and takeovers for shops, offices, warehouses, hospitality and multi-system sites.</p><Link className="button button-light" href="/commercial">Explore Commercial Solutions</Link></aside></div></section>
    <ConversionPanel/>
  </>
}
