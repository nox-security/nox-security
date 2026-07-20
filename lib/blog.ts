export type BlogSection = { heading: string; paragraphs: string[]; points?: string[] }

export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  excerpt: string
  image: string
  imageAlt: string
  sections: BlogSection[]
  related: { href: string; label: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-security-systems-be-serviced",
    title: "How often should an alarm or CCTV system be serviced?",
    metaTitle: "How Often Should Security Systems Be Serviced?",
    metaDescription: "A practical guide to alarm and CCTV maintenance, system health checks and annual servicing for homes and businesses across Derbyshire.",
    category: "Maintenance",
    excerpt: "Why regular servicing matters, what an engineer should check and how annual support helps prevent avoidable faults.",
    image: "/images/editorial/blog-servicing.jpg",
    imageAlt: "Real NOX alarm and CCTV servicing work on an existing system",
    sections: [
      {
        heading: "Servicing keeps the system useful, not just switched on",
        paragraphs: [
          "An alarm or CCTV system can appear to be working while batteries, camera views, recording health or remote access are beginning to deteriorate. Planned servicing gives an engineer the opportunity to test the system properly rather than waiting for a fault to become obvious.",
          "The right service frequency depends on the system, property and any specific insurer, manufacturer or site requirements. For many customers, an annual engineer visit provides a sensible starting point."
        ]
      },
      {
        heading: "What a professional service may include",
        paragraphs: ["The exact scope should be confirmed in the quotation or service agreement."],
        points: ["Device and communication testing", "Battery and power-supply checks", "Sensor and camera cleaning", "Recorder and hard-drive health checks", "Playback and remote-viewing tests", "Firmware and system-status review", "Service records and identified defects"]
      },
      {
        heading: "Aftercare should be clear from the beginning",
        paragraphs: [
          "NOX introduces monitoring, maintenance and takeover support after the installation scope is understood. Customers can choose the level of aftercare that makes sense without being forced into an unnecessary package.",
          "Existing systems can also be inspected before a maintenance plan is agreed, particularly where access details, faults or equipment history are unclear."
        ]
      }
    ],
    related: [{ href: "/service-plans", label: "View Service Plans" }, { href: "/get-quote", label: "Request a Maintenance Quote" }]
  },
  {
    slug: "choosing-cctv-for-home-or-business",
    title: "Choosing CCTV for a home or business",
    metaTitle: "Choosing CCTV for Homes and Businesses | NOX Guide",
    metaDescription: "Learn what to consider when planning CCTV coverage, camera positions, night viewing, recording and remote access for residential and commercial properties.",
    category: "CCTV",
    excerpt: "Camera count is only one part of the decision. Useful CCTV starts with views, lighting, recording and how the footage will be used.",
    image: "/images/cctv-systems.png",
    imageAlt: "Professional CCTV camera used for residential and commercial security",
    sections: [
      {
        heading: "Start with what each camera needs to achieve",
        paragraphs: [
          "A good CCTV design is not simply a collection of cameras around a building. Each view should have a clear purpose, such as an entrance, driveway, vehicle route, yard, stock area or side access.",
          "The survey should also consider mounting height, lighting, cable routes, network availability and the level of detail expected from recorded footage."
        ]
      },
      {
        heading: "Residential and commercial priorities are different",
        paragraphs: [
          "At home, the system normally needs to be discreet, easy to use and focused on entrances, vehicles and outbuildings. Commercial sites may need higher camera counts, longer recording periods, wider yards, multiple users and clearer event searching.",
          "NOX works with Ajax CCTV, Hikvision ColourVu and other suitable professional systems, selecting equipment around the property rather than assuming one platform fits every site."
        ]
      },
      {
        heading: "Plan for maintenance and future access",
        paragraphs: [
          "Camera cleaning, recorder health, playback and remote access should remain easy to check after installation. A service plan can keep these areas under review and provide a clearer route for support if equipment or access changes later."
        ]
      }
    ],
    related: [{ href: "/systems/cctv", label: "Explore CCTV Systems" }, { href: "/commercial/cctv", label: "Commercial CCTV" }, { href: "/get-quote", label: "Request a CCTV Quote" }]
  },
  {
    slug: "taking-over-an-existing-security-system",
    title: "Can an existing alarm or CCTV system be taken over?",
    metaTitle: "Security-System Takeovers, Repairs and Upgrades",
    metaDescription: "A guide to taking over existing alarm, CCTV and fire systems, including inspection, access recovery, fault review, servicing and phased upgrades.",
    category: "Takeovers & upgrades",
    excerpt: "Existing equipment does not always need replacing. A proper inspection can identify what can be retained, repaired or upgraded.",
    image: "/images/revisions/intruder-maintenance-system-takeover.jpg",
    imageAlt: "Existing wired security panel inspected during a NOX takeover assessment",
    sections: [
      {
        heading: "A takeover begins with understanding what is already there",
        paragraphs: [
          "Properties often change ownership, lose installer support or inherit systems with missing passwords, unknown faults or outdated remote access. The first step is to identify the equipment, condition, access and available documentation.",
          "Some systems can be serviced and retained. Others may need repairs, recorder replacement, new communication options or a phased upgrade."
        ]
      },
      {
        heading: "What NOX can review",
        paragraphs: ["The exact work depends on the system and whether compatible access can be obtained."],
        points: ["Alarm panel and device condition", "CCTV cameras, recorder and storage", "Remote app and user access", "Power, batteries and communication paths", "Known faults and missing records", "Practical repair or upgrade options"]
      },
      {
        heading: "Avoid replacing equipment without a reason",
        paragraphs: [
          "NOX aims to explain what can reasonably stay, what needs attention and what would genuinely improve the system. Replacement is recommended where it is necessary or provides clear value, not simply because the equipment was installed by another company."
        ]
      }
    ],
    related: [{ href: "/service-plans", label: "Maintenance and Takeover Support" }, { href: "/get-quote", label: "Discuss an Existing System" }]
  },
  {
    slug: "fire-alarm-servicing-and-emergency-lighting",
    title: "Fire alarm servicing and emergency lighting: keeping annual support organised",
    metaTitle: "Fire Alarm Servicing & Emergency Lighting Guide",
    metaDescription: "A practical guide to coordinating fire alarm servicing, emergency lighting testing, records and remedial work for commercial properties.",
    category: "Fire safety",
    excerpt: "Commercial fire-safety support is easier to manage when servicing, records, defects and renewal dates are clearly coordinated.",
    image: "/images/fire-servicing.jpeg",
    imageAlt: "Commercial fire alarm servicing and emergency lighting support",
    sections: [
      {
        heading: "Installation is only the beginning",
        paragraphs: [
          "Fire alarms and emergency lighting require ongoing attention after installation. The appropriate schedule and scope depend on the building, equipment, use and relevant requirements, so visits should be planned around the actual property rather than a generic package.",
          "Clear records and defect reporting help the responsible person understand what was tested and what action remains."
        ]
      },
      {
        heading: "Coordinated visits can simplify support",
        paragraphs: [
          "Where practical, businesses can coordinate fire alarm servicing and emergency lighting work under one annual arrangement. Other agreed services, such as extinguisher servicing or fire risk assessment support, can be planned separately or brought into a wider compliance package.",
          "Any remedial work, replacement equipment or additional visits should be stated clearly rather than hidden inside a vague service promise."
        ]
      },
      {
        heading: "Local follow-up matters",
        paragraphs: [
          "NOX provides a direct local point of contact for planned servicing, identified defects and future work across Chesterfield, Sheffield and Derbyshire."
        ]
      }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Fire Alarm Servicing" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency Lighting Servicing" }, { href: "/get-quote", label: "Request Fire-Service Pricing" }]
  }
]

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug)
}
