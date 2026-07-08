import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "NOX Fire & Security | CCTV, Alarms & Fire Safety | Chesterfield, Sheffield, Derbyshire",
  description:
    "Professional CCTV installation, intruder alarms, fire safety systems & Professional alarm monitoring. Serving Chesterfield, Sheffield, Matlock, Bakewell, Buxton, Mansfield, Worksop, Nottingham & Derbyshire. Free surveys. Free surveys.",
  keywords:
    "CCTV installation Chesterfield, alarm systems Sheffield, security systems Derbyshire, fire alarms Chesterfield, intruder alarms Sheffield, CCTV Matlock, security Bakewell, CCTV Buxton, alarm installation Mansfield, CCTV Worksop, security systems Nottingham, CCTV Derby, alarm installation Rotherham, CCTV Barnsley, security Doncaster, smart home security, Ajax alarm systems, Hikvision CCTV, fire risk assessment, emergency lighting, monitored alarms Derbyshire, NOX Security",
  generator: 'v0.app',
  icons: {
    icon: '/images/nox-icon.jpg',
  },
  openGraph: {
    title: "NOX Fire & Security | CCTV, Alarms & Fire Safety",
    description: "Professional security systems for homes and businesses across Chesterfield, Sheffield, and Derbyshire. Free site surveys. Free surveys.",
    type: "website",
    locale: "en_GB",
    siteName: "NOX Fire & Security",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOX Fire & Security | CCTV, Alarms & Fire Safety",
    description: "Professional security systems for homes and businesses across Chesterfield, Sheffield, and Derbyshire.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://nox-security.co.uk",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
