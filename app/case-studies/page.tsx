import type { Metadata } from "next"
import ProjectFilter from "@/components/project-filter"
import { ContactActions, ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Projects and Case Studies",
  "Explore genuine NOX residential, fire, commercial CCTV, intruder, industrial, integrated and takeover projects across Chesterfield, Sheffield, Derbyshire and nearby areas.",
  "/case-studies"
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
    <PageHero eyebrow="Real NOX projects" title="Fire & Security projects and case studies" intro="Genuine residential, commercial, fire and industrial work using actual NOX photography, equipment and confirmed project details. Each project explains the property, the requirement, what NOX recommended, the work delivered and the handover." image="/images/revisions/nox-commercial-installation-engineer.jpg" imageAlt="NOX engineer completing a commercial security installation">
      <ContactActions primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-hub"/>
    </PageHero>
    <TrustStrip variant="general"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Project portfolio" title="Filter by property and system type" text="Browse residential, Fire & Compliance, commercial CCTV, intruder, industrial, integrated and takeover work by the service delivered."/><ProjectFilter/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Real workmanship" title="Equipment, installation and upgrades in the field" text="A focused selection of genuine NOX work used throughout the website where it directly supports the service being described."/><div className="workmanship-gallery">{workmanshipImages.map(image => <figure key={image.src}><img src={image.src} alt={image.alt}/></figure>)}</div></div></section>
    <ConversionPanel title="Planning a similar project?" text="Tell us the property or site type, location, systems involved and approximate scale. NOX will confirm the appropriate residential, commercial or fire survey." primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-final"/>
  </>
}
