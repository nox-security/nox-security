import type { Metadata } from "next"
import Link from "next/link"
import GHLForm from "@/components/ghl-form"
import { FeatureGrid, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata, site } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Get a Free Fire & Security Quote | NOX Chesterfield",
  "Use one NOX enquiry form for residential and commercial alarms, CCTV, fire safety, monitoring, maintenance, system takeovers and annual service packages.",
  "/get-quote"
)

export default function QuotePage() {
  return <>
    <PageHero eyebrow="One clear enquiry route" title="Get a free, tailored fire and security quote" intro="Tell us about the property and what you need. We will review the details, ask any necessary questions and arrange a site survey where the system needs to be designed on location."><div className="contact-cards"><a href={site.phoneHref}>Call {site.phone}</a><a href={site.whatsapp}>WhatsApp the NOX team</a><a href={`mailto:${site.email}`}>{site.email}</a></div></PageHero>
    <TrustStrip/>

    <section className="section"><div className="container"><SectionHeading eyebrow="Choose the right starting point" title="Residential and commercial enquiries use the same simple form"/><div className="commercial-band quote-choice-band"><div><span className="eyebrow">Residential</span><h2>Tell us what you want to protect.</h2><p>Homes, driveways, garages, outbuildings, alarms, CCTV, perimeter protection, monitoring, maintenance or an existing system.</p><div className="sector-tags"><span>Home alarm</span><span>CCTV</span><span>External protection</span><span>Aftercare</span></div><Link className="button button-dark" href="#quote-form">Residential Quote</Link></div><div><span className="eyebrow">Commercial</span><h2>Describe the site and the systems involved.</h2><p>Shops, offices, warehouses, industrial units, yards, hospitality, HMOs, multi-site security, fire systems and annual support.</p><div className="sector-tags"><span>Alarm</span><span>CCTV</span><span>Fire</span><span>Compliance</span><span>Multi-site</span></div><Link className="button button-light" href="#quote-form">Commercial Quote</Link></div></div></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="What the enquiry can cover" title="Installation, servicing and existing-system support"/><FeatureGrid columns={4} items={[
      { title:"New installation", text:"Intruder alarms, CCTV, fire alarms, emergency lighting and joined-up residential or commercial systems." },
      { title:"Monitoring and service plans", text:"Alarm monitoring, annual maintenance, CCTV servicing and fire or compliance packages." },
      { title:"Takeovers and faults", text:"Existing alarms, CCTV and fire systems that need inspection, lost-access support, repairs or upgrades." },
      { title:"Larger commercial projects", text:"Higher camera counts, yards, industrial premises, portfolios and multi-system sites." }
    ]}/></div></section>

    <section id="quote-form" className="embed-section"><div className="container embed-grid"><div className="embed-intro"><span className="eyebrow">Website enquiry</span><h2>One form for every NOX enquiry.</h2><p>Include the postcode, whether the property is residential or commercial, the services involved and any existing equipment or known faults.</p><p>You do not need to decide whether a survey is required. We will review the information and arrange the correct next step.</p><div className="contact-assurance"><strong>Designed around the property.</strong><span>The quotation follows the property and requirement, not a fixed package.</span></div></div><GHLForm/></div></section>

    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Customer confidence" title="Real feedback from NOX customers"/><ReviewGrid limit={3}/></div></section>
  </>
}
