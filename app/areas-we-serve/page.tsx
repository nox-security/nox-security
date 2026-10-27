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
      title="Chesterfield based. Regional coverage. Wider project capability."
      intro="NOX provides fire alarm installation and servicing, CCTV, intruder systems and ongoing support across Chesterfield, Sheffield, South Yorkshire, Derbyshire, Derby and the Peak District. From our Chesterfield base, we combine dependable regional coverage with the capability to support larger commercial and multi-site projects further afield."
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
      <SectionHeading eyebrow="Wider project coverage" title="Built locally. Equipped for larger projects." text="Our day-to-day work is centred on Chesterfield, Derbyshire, Sheffield and South Yorkshire. For larger commercial, industrial and multi-site requirements, NOX can support projects across a wider UK footprint where one coordinated fire and security partner adds value."/>
      <Link className="button button-outline" href="/get-quote?service_category=Commercial%20Project#quote-form">Discuss a Wider Project</Link>
    </div><aside className="dark-panel"><h3>Commercial and multi-site work</h3><p>Project coverage is considered around system scale, programme, site access and the ongoing support required, giving larger customers one clear route from survey through delivery and maintenance.</p><Link className="button button-light" href="/commercial">Explore Commercial Security</Link></aside></div></section>

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

    <ConversionPanel title="Start your NOX project" text="One enquiry route for local installations, ongoing support and larger commercial or multi-site requirements." primaryLabel="Start Your Enquiry"/>
  </>
}
