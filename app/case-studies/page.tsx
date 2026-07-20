import type { Metadata } from "next"
import { CaseStudyDetails, ConversionPanel, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "NOX Fire & Security Case Studies | Chesterfield & Derbyshire",
  "Explore factual NOX alarm, CCTV, perimeter and fire installation examples across Chesterfield, Derby, Buxton, Dronfield, Sheffield, Retford and Derbyshire.",
  "/case-studies"
)


const workmanshipImages = [
  { src: "/images/revisions/commercial-cctv-industrial-building.jpg", alt: "Commercial CCTV camera installed on an industrial building" },
  { src: "/images/revisions/nox-engineer-cctv-wiring.jpg", alt: "NOX engineer wiring and commissioning a CCTV system" },
  { src: "/images/revisions/stonefirst-commercial-installation.jpg", alt: "NOX engineer installing CCTV at the Stonefirst commercial premises" },
  { src: "/images/revisions/professional-vigi-cctv-camera.jpg", alt: "Professional VIGI CCTV camera installed by NOX" },
  { src: "/images/revisions/residential-security-nox-van.jpg", alt: "NOX Fire and Security van outside a residential installation" },
  { src: "/images/revisions/residential-cctv-installation-engineer.jpg", alt: "NOX engineer installing residential CCTV on brickwork" },
  { src: "/images/revisions/ajax-video-doorbell-installed.jpg", alt: "Ajax video doorbell installed by NOX" },
  { src: "/images/revisions/nox-commercial-cctv-installation.jpg", alt: "NOX commercial CCTV installation at an industrial unit" },
  { src: "/images/revisions/residential-vigi-cctv-pair.jpg", alt: "Two professional VIGI CCTV cameras installed at a home" },
  { src: "/images/revisions/cctv-system-takeover-upgrade.jpg", alt: "Engineer removing older CCTV cameras during a takeover and upgrade" }
]

export default function CaseStudiesPage() {
  return <>
    <PageHero eyebrow="Real NOX installations" title="Fire and security projects designed around real properties" intro="Residential and commercial examples covering CCTV, intruder alarms, perimeter protection, fire systems and upgrades. Every project below uses confirmed locations and installation scopes without invented outcomes." image="/images/revisions/nox-commercial-installation-engineer.jpg" imageAlt="Montage of real NOX CCTV installations and monitoring displays"/>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Project portfolio" title="The property and requirement come before the equipment" text="Each project is presented with the confirmed requirement, NOX delivery and installed systems. No customer names, results or technical claims have been added beyond the available project facts."/><CaseStudyDetails/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="More real NOX workmanship" title="Installation, upgrades and equipment in the field" text="A broader selection of genuine residential and commercial work, used across the website to keep the imagery relevant to the service being described."/><div className="workmanship-gallery">{workmanshipImages.map((image, index) => <figure className={index === 0 || index === 5 ? "workmanship-feature" : ""} key={image.src}><img src={image.src} alt={image.alt}/></figure>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer reviews" title="The same focus on advice, workmanship and handover"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Planning a similar project?" text="Tell us whether the property is residential or commercial, what systems are involved and the approximate project scale. We will guide the next step."/>
  </>
}
