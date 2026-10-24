"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { caseStudies } from "@/lib/content"

const categories = ["All Projects", "Residential", "Fire & Compliance", "Commercial CCTV", "Commercial Intruder", "Industrial & Warehousing", "Integrated Systems", "Servicing & Takeovers"]

function projectCategory(category: string, slug: string, systems: string[]) {
  const value = `${category} ${slug} ${systems.join(" ")}`.toLowerCase()
  if (value.includes("residential") || value.includes("home") || value.includes("eufy")) return "Residential"
  if (value.includes("fire") && (value.includes("intruder") || value.includes("cctv"))) return "Integrated Systems"
  if (value.includes("fire")) return "Fire & Compliance"
  if (value.includes("takeover") || value.includes("upgrade") || value.includes("estate")) return "Servicing & Takeovers"
  if (value.includes("industrial") || value.includes("warehouse") || value.includes("scrapyard") || value.includes("perimeter")) return "Industrial & Warehousing"
  if (value.includes("intruder") || value.includes("alarm")) return "Commercial Intruder"
  return "Commercial CCTV"
}

export default function ProjectFilter() {
  const [active, setActive] = useState("All Projects")
  const list = useMemo(() => active === "All Projects" ? caseStudies : caseStudies.filter(project => projectCategory(project.category, project.slug, project.systems) === active), [active])

  return <>
    <div className="content-filter" role="group" aria-label="Filter projects by category">
      {categories.map(category => <button key={category} type="button" className={active === category ? "is-active" : ""} onClick={() => setActive(category)}>{category}</button>)}
    </div>
    <div className="case-grid project-filter-grid">{list.map(project => <article className="case-card" key={project.slug}><img src={project.image} alt={project.alt}/><div className="case-card-body"><span className="micro-label">{projectCategory(project.category, project.slug, project.systems)} · {project.location}</span><h3>{project.title}</h3><p>{project.story ?? project.summary}</p><div className="case-scope"><strong>Delivered by NOX</strong><span>{project.systems.join(" · ")}</span></div><Link href={`/case-studies/${project.slug}`}>Read the project story →</Link></div></article>)}</div>
  </>
}
