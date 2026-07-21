"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { blogPosts } from "@/lib/blog"

const categories = [
  "All Guides",
  "Fire Alarm Guides",
  "Emergency Lighting Guides",
  "CCTV Guides",
  "Intruder Alarm Guides",
  "Maintenance & Monitoring Guides",
  "Common Questions",
]

function normaliseCategory(category: string) {
  if (categories.includes(category)) return category
  if (category.toLowerCase().includes("fire")) return "Fire Alarm Guides"
  if (category.toLowerCase().includes("cctv")) return "CCTV Guides"
  if (category.toLowerCase().includes("maintenance") || category.toLowerCase().includes("takeover")) return "Maintenance & Monitoring Guides"
  return "Common Questions"
}

export default function GuideFilter() {
  const [active, setActive] = useState("All Guides")
  const list = useMemo(() => active === "All Guides" ? blogPosts : blogPosts.filter(post => normaliseCategory(post.category) === active), [active])

  return <>
    <div className="content-filter" role="group" aria-label="Filter guides by topic">
      {categories.map(category => <button key={category} type="button" className={active === category ? "is-active" : ""} onClick={() => setActive(category)}>{category}</button>)}
    </div>
    <div className="blog-grid">{list.map(post => <article className="blog-card" key={post.slug}><img src={post.image} alt={post.imageAlt}/><div><span className="micro-label">{normaliseCategory(post.category)}</span><h3>{post.title}</h3><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read guide →</Link></div></article>)}</div>
  </>
}
