import type { Metadata } from "next"
import ProjectFilter from "@/components/project-filter"
import { ContactActions, ConversionPanel, PageHero, ReviewGrid, SectionHeading, TrustStrip } from "@/components/marketing"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Fire & Security Projects and Case Studies",
  "Explore genuine NOX residential, fire, commercial CCTV, intruder, industrial, integrated and takeover projects across Chesterfield, Sheffield, Derbyshire and nearby areas.",
  "/case-studies"
)

const workmanshipImages = [
  { src: "/images/revisions/commercial-cctv-industrial-building.jpg", alt: "Commercial CCTV installed on an industrial building" },
  { src: "/images/revisions/nox-engineer-cctv-wiring.jpg", alt: "NOX engineer wiring and commissioning a CCTV system" },
  { src: "/images/revisions/stonefirst-commercial-installation.jpg", alt: "NOX engineer installing CCTV at an industrial unit" },
  { src: "/images/revisions/professional-vigi-cctv-camera.jpg", alt: "Professional VIGI CCTV camera installed by NOX" },
  { src: "/images/revisions/residential-security-nox-van.jpg", alt: "NOX van outside a residential security installation" },
  { src: "/images/revisions/residential-cctv-installation-engineer.jpg", alt: "NOX engineer installing residential CCTV" },
]

export default function CaseStudiesPage() {
  return <>
    <PageHero eyebrow="Real NOX projects" title="Fire & Security projects and case studies" intro="Genuine residential, commercial, fire and industrial work using actual NOX photography, equipment and confirmed project details. Project pages show what the property required and how the system was approached without invented outcomes." image="/images/revisions/nox-commercial-installation-engineer.jpg" imageAlt="NOX engineer completing a commercial security installation">
      <ContactActions primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-hub"/>
    </PageHero>
    <TrustStrip/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Project portfolio" title="Filter by property and system type" text="Residential, Fire & Compliance, commercial CCTV, intruder, industrial, integrated and takeover examples are grouped by the work delivered rather than by a visible keyword list."/><ProjectFilter/></div></section>
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Real workmanship" title="Equipment, installation and upgrades in the field" text="A focused selection of genuine NOX work used throughout the website where it directly supports the service being described."/><div className="workmanship-gallery">{workmanshipImages.map((image, index) => <figure className={index === 0 || index === 4 ? "workmanship-feature" : ""} key={image.src}><img src={image.src} alt={image.alt}/></figure>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Customer feedback" title="Advice, workmanship, handover and local support"/><ReviewGrid limit={3}/></div></section>
    <ConversionPanel title="Planning a similar project?" text="Tell us the property or site type, location, systems involved and approximate scale. NOX will guide the appropriate residential, commercial or fire survey route." primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-final"/>
  </>
}
