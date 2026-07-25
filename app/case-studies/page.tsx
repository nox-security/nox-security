import type { Metadata } from "next"
import Link from "next/link"
import ProjectFilter from "@/components/project-filter"
import { ContactActions, ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Projects and Case Studies",
  "Explore genuine NOX residential, fire, commercial CCTV, intruder, industrial, integrated and takeover projects across Chesterfield, Sheffield, Derbyshire and nearby areas.",
  "/case-studies",
  { image: "/images/projects/bottle-thyme-vehicles.jpg", imageAlt: "NOX Fire and Security vehicles supporting a multi-site commercial project" },
)

const workmanshipImages = [
  { src: "/images/revisions/commercial-cctv-industrial-building.jpg", alt: "Commercial CCTV installed on an industrial building" },
  { src: "/images/revisions/telesis-en54-fire-hub-normal.jpg", alt: "Ajax EN54 fire alarm control equipment commissioned at an industrial premises" },
  { src: "/images/image-refresh/intruder-outdoor-false-alarm.webp", alt: "Ajax outdoor detector installed for perimeter protection" },
  { src: "/images/revisions/continue-arcade-cctv-live-view.jpg", alt: "Commercial multi-camera CCTV live view at Continue Arcade" },
  { src: "/images/revisions/residential-cctv-installation-engineer.jpg", alt: "NOX engineer installing residential CCTV" },
  { src: "/images/revisions/professional-vigi-cctv-camera.jpg", alt: "Professional VIGI CCTV camera installed by NOX" },
]

export default function CaseStudiesPage() {
  return <>
    <PageHero eyebrow="Real NOX projects" title="Fire & Security projects and case studies" intro="Genuine residential, commercial, fire and industrial work using actual NOX photography and confirmed project details. Each case study explains the property, customer requirement, design priorities, installed system, completed outcome and the factors that matter for a similar project." image="/images/projects/bottle-thyme-vehicles.jpg" imageAlt="NOX Fire and Security vehicles supporting a multi-site commercial project">
      <ContactActions primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-hub"/>
    </PageHero>
    <TrustStrip variant="general"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Project portfolio" title="Filter by property and system type" text="Browse residential, Fire & Compliance, commercial CCTV, intruder, industrial, integrated and takeover work. Every project links to the relevant service, local coverage and quotation route so you can compare work similar to your own property."/><ProjectFilter/></div></section>
    <section className="section project-planning-links"><div className="container split-grid"><div><SectionHeading eyebrow="Plan from real work" title="Use genuine projects to prepare a more accurate survey" text="The strongest quotation starts with the property and the required outcome. Review a relevant case study, then share the site type, entrances, existing equipment, camera or device quantity, known faults and preferred timescale."/><div className="related-links"><Link href="/systems/cctv">CCTV installation and upgrades →</Link><Link href="/systems/fire-safety">Fire alarm installation →</Link><Link href="/systems/intrusion-alarms">Intruder alarm systems →</Link><Link href="/service-plans">Servicing, monitoring and takeovers →</Link></div></div><aside className="dark-panel"><h3>Looking for local project evidence?</h3><p>Use the coverage pages for Chesterfield, Sheffield, Derbyshire, Derby, Buxton, Retford and the surrounding areas, then discuss a project with the NOX team.</p><Link className="button button-light" href="/areas-we-serve">View Areas We Cover</Link></aside></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Real workmanship" title="Equipment, installation and upgrades in the field" text="A focused selection of genuine NOX work used throughout the website where it directly supports the service being described."/><div className="workmanship-gallery">{workmanshipImages.map(image => <figure key={image.src}><img src={image.src} alt={image.alt}/></figure>)}</div></div></section>
    <ConversionPanel title="Planning a similar project?" text="Tell us the property or site type, location, systems involved and approximate scale. NOX will confirm the appropriate residential, commercial or fire survey." primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-final"/>
  </>
}
