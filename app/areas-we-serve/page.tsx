import type { Metadata } from "next"
import Link from "next/link"
import { ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { areas } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Areas We Cover | Chesterfield, Sheffield, Derbyshire & Peak District",
  "Premium fire alarm, CCTV and intruder system services from Chesterfield across Derbyshire, Derby, South and West Sheffield and the Peak District.",
  "/areas-we-serve",
  { image: "/images/hero-house.webp", imageAlt: "NOX fire and security service area across Derbyshire and Sheffield" },
)

const primary = ["chesterfield", "sheffield", "derbyshire", "derby", "dronfield", "matlock", "bakewell", "baslow", "hope-valley", "ashover", "hathersage", "buxton"]

const priorityClusters = [
  {
    title: "South & West Sheffield",
    href: "/areas/sheffield",
    places: "Dore · Totley · Ecclesall · Fulwood · Ranmoor",
    text: "Premium residential systems, larger homes, driveways, outbuildings and commercial premises across the parts of Sheffield closest to the NOX core service area.",
  },
  {
    title: "The Peak District",
    href: "/areas/derbyshire",
    places: "Baslow · Bakewell · Hope Valley · Hathersage · Matlock",
    text: "Rural homes, farms, hospitality, estates and detached buildings where careful design, reliable communication and perimeter coverage matter.",
  },
  {
    title: "Derby & Premium Villages",
    href: "/areas/derby",
    places: "Derby · Duffield · Quarndon · Belper",
    text: "Commercial security, fire compliance and premium residential projects across Derby and the surrounding villages that fit the NOX project scope.",
  },
  {
    title: "Chesterfield & North Derbyshire",
    href: "/areas/chesterfield",
    places: "Chesterfield · Ashover · Dronfield · Wingerworth",
    text: "The closest service area for surveys, installations, takeovers, planned maintenance and ongoing support from the NOX Chesterfield base.",
  },
]

// These established pages remain linked for continuity and previous project
// relevance, but are intentionally kept outside the primary growth journey.
const retainedLocationPages = [
  "eckington", "clay-cross", "bolsover", "alfreton", "wirksworth", "belper", "ashbourne", "ripley",
  "mansfield", "rotherham", "doncaster", "retford", "nottinghamshire", "nottingham", "newark-on-trent",
  "ilkeston", "sutton-in-ashfield", "long-eaton", "darley-dale",
]

export default function AreasPage() {
  return <>
    <PageHero
      eyebrow="Core service area"
      title="Built in Chesterfield. Focused across Derbyshire, Sheffield, Derby and the Peak District."
      intro="NOX provides premium residential and commercial fire and security systems across a deliberately focused service area. The priority is dependable surveys, professional delivery and ongoing support—not an unrealistic list of every town in the region."
      image="/images/hero-house.webp"
      imageAlt="Derbyshire property within the NOX Fire and Security service area"
    />
    <TrustStrip variant="general"/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Primary coverage" title="The areas NOX is actively growing across" text="These pages connect local customers to the most relevant systems, projects, guides and enquiry route without repeating one generic location message."/>
      <div className="area-grid">{primary.map(slug => {
        const area = areas[slug as keyof typeof areas]
        return <Link className="area-card" href={`/areas/${slug}`} key={slug}><strong>{area.name}</strong><span>{area.county}</span><p>{area.intro}</p></Link>
      })}</div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Priority corridors" title="Residential, rural and commercial areas matched to the right type of work" text="The location strategy is built around premium homes, farms, rural estates, warehouses, offices, hospitality, retail and multi-site organisations within realistic reach of Chesterfield."/>
      <div className="location-priority-grid">{priorityClusters.map(cluster => <Link className="location-priority-card" href={cluster.href} key={cluster.title}>
        <span>{cluster.places}</span>
        <h3>{cluster.title}</h3>
        <p>{cluster.text}</p>
        <small>Explore the area</small>
      </Link>)}</div>
    </div></section>

    <section className="section"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Not sure about the postcode?" title="Send the location and project details" text="NOX can confirm whether the property sits within the normal survey area and whether the scope is suitable for a home visit, commercial survey, service call or phased project discussion."/>
      <Link className="button button-outline" href="/get-quote?service_category=Area%20Check#quote-form">Check Your Postcode</Link>
    </div><aside className="dark-panel"><h3>Commercial and multi-site projects</h3><p>Larger projects are considered around system scale, access, programme, travel and the ongoing support required—not simply the nearest town boundary.</p><Link className="button button-light" href="/commercial">Explore Commercial Security</Link></aside></div></section>

    <section className="section section-alt area-continuity-section"><div className="container">
      <details className="area-continuity-details">
        <summary>Existing location pages retained for previous project and search continuity</summary>
        <p>These pages remain live so existing links and useful local content are not removed. They are not part of the primary growth strategy.</p>
        <div>{retainedLocationPages.map(slug => {
          const area = areas[slug as keyof typeof areas]
          return area ? <Link href={`/areas/${slug}`} key={slug}>{area.name}</Link> : null
        })}</div>
      </details>
    </div></section>

    <ConversionPanel primaryLabel="Book a Site Survey"/>
  </>
}
