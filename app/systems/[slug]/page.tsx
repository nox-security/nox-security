import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServiceLanding } from "@/components/marketing"
import { systemPages } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

export function generateStaticParams() {
  return Object.keys(systemPages).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = systemPages[slug]
  if (!page) return {}
  return pageMetadata(page.metaTitle, page.metaDescription, `/systems/${slug}`, { image: page.image, imageAlt: page.imageAlt })
}

export default async function SystemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = systemPages[slug]
  if (!page) notFound()
  return <ServiceLanding data={page}/>
}
