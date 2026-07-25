import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PlanLanding } from "@/components/marketing"
import { planPages } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export function generateStaticParams() {
  return Object.keys(planPages).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = planPages[slug]
  if (!page) return {}
  return pageMetadata(page.metaTitle, page.metaDescription, `/service-plans/${slug}`, { image: page.image, imageAlt: page.imageAlt })
}

export default async function PlanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = planPages[slug]
  if (!page) notFound()
  return <PlanLanding data={page}/>
}
