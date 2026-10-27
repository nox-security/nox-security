import type { Metadata } from "next"
import Link from "next/link"
import { ConversionPanel, PageHero, SectionHeading, TrustStrip } from "@/components/marketing"
import { areas } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Areas We Cover | Chesterfield, Sheffield, South Yorkshire, Derbyshire & Derby",
  "Fire alarm installation and servicing, CCTV and intruder systems across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District.",
  "/areas-we-serve",
  { image: "/images/chesterfield-coverage.png", imageAlt: "NOX Fire and Security coverage centred on Chesterfield, Derbyshire and South Yorkshire" },
)

const primary = ["chesterfield", "sheffield", "derbyshire", "derby", "dronfield", "rotherham", "doncaster", "matlock", "bakewell", "buxton"]

const priorityClusters = [
  {
    title: "Chesterfield & North Derbyshire",
    href: "/areas/chesterfield",
    places: "Chesterfield · Dronfield · Wingerworth · Brampton · Hasland · Barlborough",
    text: "Our closest service area for fire alarm installation and servicing, commercial CCTV, intruder alarms, takeovers and ongoing support for homes, industrial units, offices, retail and managed property.",
  },
  {
    title: "Sheffield & South Yorkshire",
    href: "/areas/sheffield",
    places: "Sheffield · Dore · Totley · Ecclesall · Fulwood · Rotherham · Doncaster",
    text: "Residential security for larger homes and driveways alongside fire alarm, CCTV and intruder work for offices, warehouses, hospitality, workshops and commercial premises across South Yorkshire.",
  },
  {
    title: "Derby & Central Derbyshire",
    href: "/areas/derby",
    places: "Derby · Duffield · Littleover · Mickleover · Belper · Ripley",
    text: "Fire and security installation, servicing and maintenance across Derby and central Derbyshire, including residential properties, business parks, industrial premises, retail and leisure sites.",
  },
  {
    title: "Peak District & Derbyshire Dales",
    href: "/areas/derbyshire",
    places: "Bakewell · Baslow · Hathersage · Hope Valley · Matlock · Buxton",
    text: "Fire alarms, CCTV and intruder protection for rural homes, farms, hospitality, estates, workshops and multi-building properties where access, communication range and perimeter coverage need careful planning.",
  },
]

// Established location pages remain live for useful local search and project continuity,
// but are kept outside the main homepage and primary area journey.
const retainedLocationPages = [
  "eckington", "clay-cross", "bolsover", "alfreton", "wirksworth", "belper", "ashbourne", "ripley",
  "retford", "nottinghamshire", "nottingham", "newark-on-trent", "ilkeston", "sutton-in-ashfield", "long-eaton", "darley-dale",
  "baslow", "hope-valley", "ashover", "hathersage",
]

export default function AreasPage() {
  return <>
    <PageHero
      eyebrow="Service areas"
      title="Fire & security coverage from Chesterfield across our core regions"
      intro="NOX provides fire alarm installation and servicing, CCTV, intruder systems and ongoing support across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District. We focus on realistic travel, reliable surveys and long-term support rather than listing every postcode in the Midlands."
      image="/images/chesterfield-coverage.png"
      imageAlt="Map showing NOX Fire and Security coverage around Chesterfield, Derbyshire and South Yorkshire"
    />
    <TrustStrip variant="general"/>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="Core coverage" title="The main areas we serve for fire alarms, CCTV and intruder systems" text="These location pages connect customers to the right installation, servicing and maintenance route while keeping the local search content focused on the regions where NOX regularly works."/>
      <div className="area-grid">{primary.map(slug => {
        const area = areas[slug as keyof typeof areas]
        return <Link className="area-card" href={`/areas/${slug}`} key={slug}><strong>{area.name}</strong><span>{area.county}</span><p>{area.intro}</p></Link>
      })}</div>
    </div></section>

    <section className="section section-alt"><div className="container">
      <SectionHeading eyebrow="Residential, commercial & industrial" title="Local coverage matched to the type of property and work" text="Our service area includes larger residential properties, hospitality, warehouses, offices, workshops, business parks, rural estates and multi-site organisations — with the system scope planned around the property rather than a generic postcode package."/>
      <div className="location-priority-grid">{priorityClusters.map(cluster => <Link className="location-priority-card" href={cluster.href} key={cluster.title}>
        <span>{cluster.places}</span>
        <h3>{cluster.title}</h3>
        <p>{cluster.text}</p>
        <small>Explore the area</small>
      </Link>)}</div>
    </div></section>

    <section className="section"><div className="container split-grid"><div>
      <SectionHeading eyebrow="Outside the core area?" title="Send the postcode and project scope" text="For larger fire alarm, CCTV, industrial security and multi-site projects, NOX can consider work outside the normal survey area where the project scale, access and ongoing support make the travel practical."/>
      <Link className="button button-outline" href="/get-quote?service_category=Area%20Check#quote-form">Check Your Postcode</Link>
    </div><aside className="dark-panel"><h3>Commercial and multi-site projects</h3><p>Larger projects are assessed around system scale, programme, travel and the ongoing support required — not simply the nearest town boundary.</p><Link className="button button-light" href="/commercial">Explore Commercial Security</Link></aside></div></section>

    <section className="section section-alt area-continuity-section"><div className="container">
      <details className="area-continuity-details">
        <summary>More locations within our wider operating area</summary>
        <p>These local pages remain available for customers and previous project coverage without overcrowding the main service-area journey.</p>
        <div>{retainedLocationPages.map(slug => {
          const area = areas[slug as keyof typeof areas]
          return area ? <Link href={`/areas/${slug}`} key={slug}>{area.name}</Link> : null
        })}</div>
      </details>
    </div></section>

    <ConversionPanel primaryLabel="Book a Site Survey"/>
  </>
}
