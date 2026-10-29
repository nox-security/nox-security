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
  { src: "/images/projects/sheffield-david-malin-ajax-en54-panel.webp", alt: "Ajax EN54 fire alarm panel installed at David Malin Kitchens in Sheffield" },
  { src: "/images/projects/derby-steve-foster-cranes-hikvision-ptz-front.webp", alt: "Hikvision dual-lens PTZ CCTV at Steve Foster Cranes in Derby" },
  { src: "/images/projects/rotherham-scrapyard-hikvision-ptz.webp", alt: "Hikvision PTZ CCTV at a Rotherham scrapyard" },
  { src: "/images/projects/sheffield-industrial-ajax-camera-close-up.webp", alt: "Commercial CCTV installed on a Sheffield industrial unit" },
  { src: "/images/projects/bakewell-residential-ajax-motioncam-closeup.webp", alt: "Ajax MotionCam Outdoor perimeter protection installed at a Bakewell home" },
  { src: "/images/projects/chesterfield-residential-ajax-outdoor-detector.webp", alt: "Ajax perimeter detector at a residential property in Chesterfield" },
]

export default function CaseStudiesPage() {
  return <>
    <PageHero eyebrow="Real NOX projects" title="Fire & Security projects and case studies" intro="Genuine residential, commercial, fire and industrial work using actual NOX photography and confirmed project details. Each case study explains the property, customer requirement, design priorities, installed system, completed outcome and the factors that matter for a similar project." image="/images/projects/bottle-thyme-vehicles.jpg" imageAlt="NOX Fire and Security vehicles supporting a multi-site commercial project">
      <ContactActions primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-hub"/>
    </PageHero>
    <TrustStrip variant="general"/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Project portfolio" title="Filter by property and system type" text="Browse residential, Fire & Compliance, commercial CCTV, intruder, industrial, integrated and takeover work. Every project links to the relevant service, local coverage and quotation route so you can compare work similar to your own property."/><ProjectFilter/></div></section>
    
    <section className="section section-alt"><div className="container"><SectionHeading eyebrow="Real workmanship" title="Equipment, installation and upgrades in the field" text="A focused selection of genuine NOX work used throughout the website where it directly supports the service being described."/><div className="workmanship-gallery">{workmanshipImages.map(image => <figure key={image.src}><img src={image.src} alt={image.alt}/></figure>)}</div></div></section>
    <ConversionPanel title="Planning a similar project?" text="Tell us the property or site type, location, systems involved and approximate scale. NOX will confirm the appropriate residential, commercial or fire survey." primaryLabel="Discuss a Similar Project" serviceCategory="Project enquiry" enquiryType="Installation" sourceLabel="projects-final"/>
  </>
}
