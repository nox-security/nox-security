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
  imagePosition?: string
  sections: BlogSection[]
  related: { href: string; label: string }[]
  faq?: { q: string; a: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-security-systems-be-serviced",
    title: "How often should an alarm or CCTV system be serviced?",
    metaTitle: "How Often Should Security Systems Be Serviced?",
    metaDescription: "A practical guide to alarm and CCTV maintenance, system health checks and annual servicing for homes and businesses across Derbyshire.",
    category: "Maintenance",
    excerpt: "Why regular servicing matters, what an engineer should check and how annual support helps prevent avoidable faults.",
    image: "/images/v4-10/servicing-monitoring-hero.jpeg",
    imageAlt: "NOX Fire and Security van outside a commercial servicing and monitoring visit",
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
    related: [{ href: "/service-plans", label: "View Existing System Support" }, { href: "/get-quote", label: "Request a Maintenance Quote" }]
  },
  {
    slug: "choosing-cctv-for-home-or-business",
    title: "Choosing CCTV for a home or business",
    metaTitle: "Choosing CCTV for Homes and Businesses | NOX Guide",
    metaDescription: "Learn what to consider when planning CCTV coverage, camera positions, night viewing, recording and remote access for residential and commercial properties.",
    category: "CCTV",
    excerpt: "Camera count is only one part of the decision. Useful CCTV starts with views, lighting, recording and how the footage will be used.",
    image: "/images/revisions/property-cctv-overview.jpg",
    imageAlt: "Professional CCTV overview image showing camera coverage for residential and commercial properties",
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
          "Camera cleaning, recorder health, playback and remote access should remain easy to check after installation. A service plan can keep these areas under review and make support easier if equipment or access changes later."
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
    image: "/images/v4-10/fire-alarm-servicing.jpeg",
    imageAlt: "Commercial fire alarm control panel inspected during planned servicing",
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
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Fire Alarm Servicing" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency Lighting Servicing" }, { href: "/get-quote", label: "Request a Fire Service Quote" }]
  },
  {
    slug: "how-often-should-a-commercial-fire-alarm-be-serviced",
    title: "How often should a commercial fire alarm be serviced?",
    metaTitle: "How Often Should a Commercial Fire Alarm Be Serviced?",
    metaDescription: "A practical guide to commercial fire alarm service frequency, what affects the schedule, records, defects and how NOX supports premises across Derbyshire.",
    category: "Fire Alarm Guides",
    excerpt: "Commercial fire alarms normally need planned professional servicing at intervals suited to the system, premises and applicable requirements, with records and defects kept clear.",
    image: "/images/revisions/ajax-en54-fire-control-panel.jpg",
    imageAlt: "Commercial fire alarm control equipment serviced by NOX",
    sections: [
      { heading: "The direct answer", paragraphs: ["A commercial fire alarm should be placed on a planned servicing schedule rather than checked only when a fault appears. The exact interval must reflect the system, building, fire-safety arrangements and applicable guidance, so the responsible person should confirm the required schedule for the premises.", "For many commercial systems, professional inspection and servicing is arranged at least twice a year, although more frequent attention may be appropriate where the premises, system risk, insurer, fire strategy or fault history requires it. This guide is general information rather than a substitute for the site’s own fire-safety assessment."] },
      { heading: "What affects the service frequency", paragraphs: ["A small straightforward premises and a larger multi-building site do not create the same service workload. The panel type, zones, device quantity, occupancy, environmental conditions, previous defects and whether the system has been altered all matter."], points: ["System type and device quantity", "Building use and occupancy", "Fault or false-alarm history", "Dust, heat, moisture or industrial conditions", "Changes to layout or fire strategy", "Manufacturer and applicable standard requirements", "Multi-site or portfolio arrangements"] },
      { heading: "What a planned service should leave behind", paragraphs: ["The visit should do more than silence an active fault. The responsible person needs a clear record of what was inspected or tested, any access limitations, identified defects and the recommended remedial route.", "Repairs, replacement devices and additional investigation are normally separate from the routine service unless the written agreement states otherwise. Keeping those boundaries clear makes budgeting and responsibility easier."] },
      { heading: "Common mistakes", paragraphs: ["Common problems include relying on weekly user tests as a replacement for professional servicing, missing service dates after a change of provider, leaving intermittent faults unresolved and having no clear device or zone information.", "A new maintenance company should review available records, panel access, system condition and parts support before accepting the ongoing scope. Where information is missing, an initial takeover inspection may be needed."] },
      { heading: "What NOX provides", paragraphs: ["NOX services suitable conventional, addressable, established wireless and Ajax EN54 fire alarm systems across Chesterfield, Sheffield and Derbyshire. The quotation can include planned servicing, takeover assessment, defect reporting and coordination with emergency-lighting visits where practical."], points: ["Single commercial premises", "Landlords and HMOs", "Warehouses and industrial units", "Hospitality and retail", "Multi-site service planning"] }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Arrange Fire Alarm Servicing" }, { href: "/services/fire-alarm-repairs-takeovers", label: "Fire Alarm Repairs & Takeovers" }, { href: "/case-studies/telesis-hitachi-fire-intruder-system", label: "Telesis Hitachi project" }]
  },
  {
    slug: "what-is-included-in-a-fire-alarm-service",
    title: "What is included in a fire alarm service?",
    metaTitle: "What Is Included in a Commercial Fire Alarm Service?",
    metaDescription: "Learn what a commercial fire alarm service may include, how the scope is agreed, what records should be produced and how defects are handled.",
    category: "Fire Alarm Guides",
    excerpt: "A fire alarm service should have a defined inspection and testing scope, clear records, identified defects and a separate route for remedial work.",
    image: "/images/revisions/fire-alarm-maintenance-panel.jpg",
    imageAlt: "Commercial fire alarm panel maintained during a service visit",
    sections: [
      { heading: "The direct answer", paragraphs: ["A commercial fire alarm service normally includes inspection and testing of agreed parts of the system, a review of panel indications and records, checks on power and warning functions, and documentation of defects or limitations. The exact scope depends on the system, device quantities, access and the service schedule.", "A responsible quotation should state what is included rather than promising a vague complete check without knowing the premises."] },
      { heading: "Typical service activities", paragraphs: ["The engineer works to the agreed schedule and records the system condition available at the time of attendance."], points: ["Control panel status and event review", "Mains and standby power checks", "Testing of agreed detection and manual devices", "Sounder and visual-warning checks", "Zone, loop or device indication", "Communication or signalling checks where included", "Review of available logbook and previous defects", "Service record and remedial recommendations"] },
      { heading: "What may not be included", paragraphs: ["Replacement devices, batteries, cable repairs, access equipment, out-of-hours attendance, specialist interfaces and extended fault investigation are not automatically included in every routine service.", "Where a defect is found, the engineer should explain whether it requires immediate action, further investigation, a repair quotation or planned replacement. The customer should not have to guess what the service report means."] },
      { heading: "Preparing the premises", paragraphs: ["Access to the panel, devices, records, keys and relevant areas helps the visit run properly. Staff should know that testing may activate warning devices, and any operational restrictions should be agreed before attendance.", "For a takeover, photographs of the panel, approximate device quantities, previous certificates and a list of known faults can help NOX confirm the correct first visit."] },
      { heading: "Related fire support", paragraphs: ["Fire alarm servicing is often easier to manage alongside emergency-lighting testing, defect remedials and a clear annual renewal plan. The services remain separate, but visits and records can be coordinated where practical."] }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Fire Alarm Servicing" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency Lighting Testing" }, { href: "/service-plans/fire-compliance", label: "Fire Compliance Plans" }]
  },
  {
    slug: "can-a-new-company-take-over-an-existing-fire-alarm",
    title: "Can a new company take over an existing fire alarm?",
    metaTitle: "Can a New Company Take Over an Existing Fire Alarm?",
    metaDescription: "What to expect when changing fire alarm maintenance provider, including access, records, faults, parts availability, inspection and remedial work.",
    category: "Fire Alarm Guides",
    excerpt: "Often yes, but a responsible takeover depends on system access, condition, documentation, compatibility and available parts.",
    image: "/images/v4-12-3/fire-alarm-repairs-takeovers.jpg",
    imageAlt: "Fire alarm interface and control equipment assessed during a takeover and repair visit",
    imagePosition: "center 56%",
    sections: [
      { heading: "The direct answer", paragraphs: ["A new company can often take over servicing of an existing fire alarm, but it should not accept responsibility blindly. The first step is an assessment of the panel, devices, access, records, faults and whether the equipment can still be supported.", "A takeover is not the same as saying every existing defect is included in an annual service price. The initial condition and any required remedials should be recorded separately."] },
      { heading: "Information that helps", paragraphs: ["The more accurate the existing information, the easier it is to plan the assessment."], points: ["Panel manufacturer and model", "Approximate zones or loops", "Device and sounder quantities", "Engineer or user access available", "Previous service certificates", "Fire safety logbook", "Known faults, disabled devices or false alarms", "Drawings, cause-and-effect or interface information where relevant"] },
      { heading: "What the assessment considers", paragraphs: ["The engineer needs to decide whether the system can be accessed, tested, repaired and maintained with reasonable confidence. Missing codes, obsolete panels, undocumented alterations, damaged wiring and unavailable parts can change the route.", "The outcome may be straightforward takeover, takeover after remedials, a phased upgrade or replacement. A clear recommendation should explain why each option is being proposed."] },
      { heading: "Changing provider without losing records", paragraphs: ["Keep copies of existing certificates, logbooks, drawings, fault history and any open remedial quotations. The responsible person remains better informed when records move with the building rather than staying with the previous provider.", "Where a system serves several buildings or sites, create an asset list and renewal schedule before the transfer so important dates are not missed."] },
      { heading: "How NOX handles takeovers", paragraphs: ["NOX asks for available system information first, then confirms whether a takeover assessment is required. Suitable systems can move into planned servicing after access, condition and outstanding defects are understood.", "For premises in Chesterfield and across Derbyshire, photographs of the panel, the site address, building use, approximate device quantities and the latest service record are normally enough to establish the correct first step. Larger, altered or poorly documented systems are more likely to need an on-site takeover inspection before a maintenance quotation is finalised."] },
      { heading: "What should be confirmed before changing fire alarm company?", paragraphs: ["Confirm who holds the panel and engineer access details, where the fire alarm logbook and previous certificates are kept, whether any faults or disabled devices remain open, and when the next planned service is due. The new provider should explain the initial assessment, recurring service scope, exclusions and remedial route in writing.", "Changing provider should not interrupt weekly user testing, record keeping or the building's existing fire-safety arrangements. The responsible person remains responsible for making sure defects and overdue actions are addressed through the appropriate route."] }
    ],
    faq: [
      { q: "Can NOX take over an existing fire alarm in Chesterfield or Derbyshire?", a: "Often yes. NOX first checks the panel type, access, system condition, records, known faults and parts support, then confirms whether the system can move directly into servicing or needs a takeover inspection and remedial work." },
      { q: "Do I need the previous fire alarm company’s permission to change provider?", a: "The building manager or responsible person can appoint a different competent provider, but system access details, records, contracts and any monitoring arrangements should be checked before the transfer." },
      { q: "Will a takeover service include existing faults?", a: "Not automatically. Existing faults, missing devices, access problems and repairs should be identified and quoted separately from the recurring service scope unless the written quotation states otherwise." }
    ],
    related: [{ href: "/services/fire-alarm-repairs-takeovers", label: "Fire Alarm Repairs & Takeovers" }, { href: "/service-plans/fire-alarm-servicing", label: "Fire Alarm Servicing" }, { href: "/case-studies/telesis-hitachi-fire-intruder-system", label: "Industrial fire project" }]
  },
  {
    slug: "conventional-versus-addressable-fire-alarm-systems",
    title: "Conventional versus addressable fire alarm systems",
    metaTitle: "Conventional vs Addressable Fire Alarm Systems",
    metaDescription: "A practical comparison of conventional and addressable commercial fire alarms, including indication, scale, cabling, expansion, maintenance and project decisions.",
    category: "Fire Alarm Guides",
    excerpt: "Both system types can be appropriate. The right choice depends on building complexity, required information, expansion and the complete fire-safety design.",
    image: "/images/revisions/ajax-en54-fire-control-panel.jpg",
    imageAlt: "Modern commercial fire alarm control equipment",
    sections: [
      { heading: "The direct answer", paragraphs: ["A conventional fire alarm identifies the affected zone, while an addressable system can identify individual devices or more precise events. That does not automatically make one correct for every building.", "The property size, layout, use, fire strategy, information requirement, cabling, future changes and budget should decide the system rather than a product preference alone."] },
      { heading: "Conventional systems", paragraphs: ["Conventional systems can suit smaller or straightforward premises where clear zonal indication meets the requirement. Devices are arranged on circuits associated with zones, and the panel identifies the zone in alarm or fault."], points: ["Straightforward zonal indication", "Can suit smaller premises", "Established equipment choices", "May be practical for replacement of some existing conventional systems", "Fault finding can require more circuit investigation"] },
      { heading: "Addressable systems", paragraphs: ["Addressable systems communicate with individual devices and can provide clearer identification. They can be useful for larger or more complex buildings, several areas, detailed event information and future expansion."], points: ["Individual device identification", "Flexible programming and event information", "Can suit larger or complex sites", "Potentially easier location of alarms and faults", "Design, programming and interfaces require careful documentation"] },
      { heading: "Wireless does not mean a third fire-alarm category", paragraphs: ["Wireless describes the communication method, not the complete fire-alarm design. Suitable wireless EN54 systems may reduce disruption or cabling on appropriate projects, but device coverage, radio design, power, interfaces and the building requirement still need to be addressed."] },
      { heading: "Questions to answer before choosing", paragraphs: ["Ask what information the responsible person needs during an event, how the building may change, what records exist, how installation work affects operations and how the system will be serviced later. NOX can compare suitable conventional, addressable and wireless options after a site review."] }
    ],
    related: [{ href: "/systems/fire-safety", label: "Fire Alarm Installation" }, { href: "/blog/what-information-is-needed-for-a-fire-alarm-quote", label: "Information needed for a quote" }, { href: "/fire-compliance", label: "Fire & Compliance" }]
  },
  {
    slug: "what-information-is-needed-for-a-fire-alarm-quote",
    title: "What information is needed for a fire alarm quote?",
    metaTitle: "What Information Is Needed for a Fire Alarm Quote?",
    metaDescription: "The site, building, system and access information that helps produce a clearer commercial fire alarm installation or servicing quotation.",
    category: "Fire Alarm Guides",
    excerpt: "Property use, plans, fire information, existing equipment, device quantities, faults and access all help NOX define the correct survey and quotation route.",
    image: "/images/image-refresh/fire-risk-assessment.webp",
    imageAlt: "Fire action information and manual call point reviewed when preparing a fire alarm quotation",
    imagePosition: "center 54%",
    sections: [
      { heading: "The direct answer", paragraphs: ["A useful fire alarm quotation needs enough information to define whether the enquiry is a new installation, replacement, service, repair or takeover. The building use, approximate size, existing panel, available fire information and known faults are the best starting points.", "A site survey is normally required for a designed installation, but accurate information beforehand reduces wasted visits and helps the right engineer prepare."] },
      { heading: "For a new installation", paragraphs: ["Provide the address, property type, number of floors or buildings, operating hours, current construction stage and any available fire-risk assessment, strategy, plans or specification."], points: ["Building use and occupancy", "Floor plans and escape routes", "Fire strategy or risk-assessment information", "Existing or proposed compartments and zones", "Ceiling types and access", "Other trades and project programme", "Need for conventional, addressable or wireless comparison", "Required handover date"] },
      { heading: "For servicing or takeover", paragraphs: ["Photographs of the panel and labels, approximate device quantities, previous certificates, the logbook, known faults and available access details help define the first visit.", "Do not hide faults to obtain a lower annual service quotation. The system condition and any remedial work should be separated from the recurring service agreement."] },
      { heading: "For emergency lighting", paragraphs: ["Include approximate fitting quantities, monthly or annual test requirement, previous records, failed fittings, access height, opening hours and whether replacement or new installation is required."] },
      { heading: "What happens next", paragraphs: ["NOX reviews the information and confirms whether a survey, takeover inspection, service visit or remote quotation stage is appropriate. The final quotation should state the system scope, exclusions, documentation and future maintenance route clearly.", "For commercial premises in Chesterfield and across Derbyshire, sending clear panel photographs and basic building information first can help separate a new installation enquiry from a service, repair or takeover request. A designed installation will still normally need the premises to be surveyed before the final equipment and labour scope is agreed."] },
      { heading: "A useful fire alarm quote should be clear about the whole project", paragraphs: ["The quotation should identify the system type being proposed, the areas or buildings covered, the control equipment, detection and warning devices, installation assumptions, access requirements, commissioning, handover information and any exclusions.", "Where an existing alarm is being altered or replaced, the proposal should also explain what equipment will remain, what will be removed, how faults or undocumented wiring will be handled and whether temporary arrangements or phased work may be required."], points: ["New installation, replacement, servicing or takeover route", "Building use, floors, zones and operating conditions", "Panel, detector, call-point, sounder and visual-warning scope", "Access equipment, ceilings, cable routes and working hours", "Testing, commissioning, records and user handover", "Ongoing servicing and separately quoted remedial work"] }
    ],
    faq: [
      { q: "Can I get a fire alarm quote from photographs?", a: "Photographs and system information can establish the likely route, but a new designed installation or complex alteration will normally need a site survey before the final quotation is confirmed." },
      { q: "What photographs should I send for a fire alarm quote?", a: "Send the control panel and labels, any fault display, a representative detector, call point and sounder, the fire alarm logbook or latest certificate, and photographs showing the type and scale of the premises." },
      { q: "Does NOX provide fire alarm quotations in Chesterfield and Derbyshire?", a: "Yes. NOX handles commercial fire alarm installation, servicing, repairs and suitable takeovers across Chesterfield, Derbyshire and surrounding areas, with the first step based on the building and existing system information." }
    ],
    related: [{ href: "/systems/fire-safety", label: "Request a Fire Alarm Quote" }, { href: "/service-plans/fire-alarm-servicing", label: "Arrange Fire Alarm Servicing" }, { href: "/systems/emergency-lighting", label: "Emergency Lighting Installation" }]
  },
  {
    slug: "how-often-should-emergency-lighting-be-tested",
    title: "How often should emergency lighting be tested?",
    metaTitle: "How Often Should Emergency Lighting Be Tested?",
    metaDescription: "A practical guide to routine emergency-lighting checks, annual duration testing, records, failed fittings and commercial servicing.",
    category: "Emergency Lighting Guides",
    excerpt: "Emergency lighting needs routine functional checks and periodic full-duration testing, with records and failed fittings dealt with clearly.",
    image: "/images/v4-12-3/emergency-lighting-testing-servicing.jpg",
    imageAlt: "Illuminated emergency exit sign checked during testing",
    sections: [
      { heading: "The direct answer", paragraphs: ["Emergency lighting should be checked routinely and receive a periodic full-duration test in line with the premises’ applicable requirements and maintenance plan. A common arrangement includes short monthly functional checks and an annual test for the full rated duration, often three hours.", "The responsible person should confirm the correct regime for the building and keep records of checks, failures and completed remedials."] },
      { heading: "Monthly functional checks", paragraphs: ["A short functional test checks that fittings change to emergency operation and that obvious damage or failure is identified. It is not the same as proving that batteries can sustain the full rated duration."], points: ["Check fittings illuminate in emergency mode", "Record failed lamps or indicators", "Look for damage or obstruction", "Confirm signs remain visible", "Record the date and result", "Arrange repair without waiting for the annual test"] },
      { heading: "Annual duration testing", paragraphs: ["The annual test places greater demand on the batteries and confirms whether fittings can operate for the required duration. The test should be planned so the building is not left without effective emergency lighting while batteries recharge.", "Large or operational sites may need phased testing, temporary controls or out-of-hours attendance."] },
      { heading: "What happens when a fitting fails", paragraphs: ["The failure should be recorded with its location and type. The responsible person then needs a repair or replacement route, followed by confirmation that the remedial work has restored the fitting.", "Repeated battery failures, obsolete fittings and missing asset information may make a planned replacement programme more sensible than isolated reactive visits."] },
      { heading: "Combining visits", paragraphs: ["NOX can coordinate emergency-lighting testing with fire-alarm servicing where practical. Each service remains clearly scoped, but shared access, records and renewal planning can reduce administration."] }
    ],
    related: [{ href: "/service-plans/emergency-lighting-servicing", label: "Book Emergency Lighting Testing" }, { href: "/systems/emergency-lighting", label: "Emergency Lighting Installation" }, { href: "/service-plans/fire-compliance", label: "Fire Compliance Plans" }]
  },
  {
    slug: "what-is-a-three-hour-emergency-lighting-test",
    title: "What is a three-hour emergency-lighting test?",
    metaTitle: "What Is a Three-Hour Emergency Lighting Test?",
    metaDescription: "Learn what a three-hour emergency-lighting duration test checks, how it is planned, what failures mean and why recharge time matters.",
    category: "Emergency Lighting Guides",
    excerpt: "A full-duration test checks whether emergency fittings can continue operating for their rated period, commonly three hours, rather than only switching on briefly.",
    image: "/images/v4-12-3/emergency-lighting-testing-servicing.jpg",
    imageAlt: "Emergency lighting fitting operating during a duration test",
    sections: [
      { heading: "The direct answer", paragraphs: ["A three-hour emergency-lighting test simulates a mains failure and checks whether applicable fittings continue operating for their full rated duration. It is more demanding than a short monthly function test and is intended to reveal weak batteries or fittings that cannot sustain emergency operation.", "The exact test and duration must match the system and premises requirements, but three hours is common in many UK commercial applications."] },
      { heading: "How the test is planned", paragraphs: ["Testing should be scheduled around building use because fittings need time to recharge afterwards. The responsible person should consider occupation, natural light, temporary controls and whether the test needs to be phased."], points: ["Confirm the asset list and test scope", "Plan safe timing and access", "Simulate loss of normal supply", "Observe fittings during the duration", "Record failures and locations", "Allow recharge and confirm remedial priorities"] },
      { heading: "What a failure can mean", paragraphs: ["A fitting may fail to illuminate, stop before the end of the test, show battery or charge faults, have damaged diffusers or provide poor output. The report should distinguish the observed failure from the recommended repair or replacement.", "Replacement fittings and electrical remedials are normally separate from the test unless the quotation specifically includes them."] },
      { heading: "Why records matter", paragraphs: ["Records show what was tested, when, for how long, which fittings failed and whether remedials were completed. Without that chain, the responsible person cannot easily prove the current condition or plan replacements."] },
      { heading: "NOX support", paragraphs: ["NOX provides emergency-lighting testing, failed-fitting reports, replacement quotations and new installations across Chesterfield, Sheffield and Derbyshire. Visits can be coordinated with fire-alarm servicing where suitable."] }
    ],
    related: [{ href: "/service-plans/emergency-lighting-servicing", label: "Emergency Lighting Testing & Servicing" }, { href: "/systems/emergency-lighting", label: "Emergency Lighting Installation" }, { href: "/blog/how-often-should-emergency-lighting-be-tested", label: "Testing frequency guide" }]
  },
  {
    slug: "how-many-cameras-does-a-commercial-site-need",
    title: "How many CCTV cameras does a commercial site need?",
    metaTitle: "How Many CCTV Cameras Does a Commercial Site Need?",
    metaDescription: "How to calculate useful CCTV coverage for shops, warehouses, offices, yards and industrial sites based on views, evidence, recording and operations.",
    category: "CCTV Guides",
    excerpt: "The right number comes from the required views and evidence, not a standard package. Entrances, stock, vehicles, yards and blind spots must be mapped first.",
    image: "/images/revisions/property-cctv-overview.jpg",
    imageAlt: "Multi-camera CCTV display covering several areas of a site",
    sections: [
      { heading: "The direct answer", paragraphs: ["A commercial site needs enough cameras to achieve defined views, not a predetermined number based only on floor area. One camera may provide a general overview while another is needed for faces, vehicle detail, tills, stock or a gate.", "The survey should list each required outcome and then choose the minimum useful camera positions without creating blind spots or excessive overlapping footage."] },
      { heading: "Map the critical views", paragraphs: ["Start with entrances, exits, customer areas, cash handling, stock, loading bays, vehicle routes, yards, machinery and isolated corridors. Decide whether each view needs overview, recognition or more detailed identification."], points: ["Public and staff entrances", "Vehicle gates and parking", "Tills and transaction areas", "Stock, tools and valuable equipment", "Loading and delivery routes", "Yards and external boundaries", "Stairs, corridors and restricted rooms", "Remote buildings and blind sides"] },
      { heading: "Camera count affects the recorder", paragraphs: ["More cameras and higher resolution increase storage, bandwidth and playback workload. Recording duration, frame rate, movement levels and retention policy need to be calculated together.", "A larger system also needs clear naming, user permissions and a practical way to find incidents rather than simply displaying many thumbnails."] },
      { heading: "Night and operational conditions", paragraphs: ["Lighting, vehicle headlights, reflections, weather, mounting height and changing stock layouts can alter the usefulness of a view. A daytime photograph alone is not enough to design every position.", "Access equipment, production areas and trading hours also affect the installation cost and programme."] },
      { heading: "NOX commercial CCTV surveys", paragraphs: ["NOX plans commercial CCTV across retail, hospitality, offices, warehouses, yards and industrial sites. The proposal sets out camera purposes, recorder and storage, remote access and maintenance rather than presenting a camera count without context."] }
    ],
    related: [{ href: "/commercial/cctv", label: "Plan a CCTV System" }, { href: "/commercial/industrial-warehouse-security", label: "Industrial & Warehouse Security" }, { href: "/case-studies/continue-arcade-commercial-cctv-derby", label: "Continue Arcade CCTV project" }]
  },
  {
    slug: "how-many-cctv-cameras-does-a-house-need",
    title: "How many CCTV cameras does a house need?",
    metaTitle: "How Many CCTV Cameras Does a House Need?",
    metaDescription: "Plan residential CCTV around driveways, doors, gardens, garages and outbuildings, with practical guidance on camera positions and recording.",
    category: "CCTV Guides",
    excerpt: "Most homes need views based on entrances, driveway, side access, rear garden and outbuildings. The correct number follows the property layout and required detail.",
    image: "/images/revisions/residential-vigi-cctv-pair.jpg",
    imageAlt: "Two residential CCTV cameras installed by NOX",
    sections: [
      { heading: "The direct answer", paragraphs: ["There is no standard camera count for every home. A small property with one clear entrance may need fewer views than a detached house with a drive, side access, rear garden, garage and outbuildings.", "The survey should decide what each camera must show and whether the customer needs live alerts, continuous recording, detailed vehicle views or general awareness."] },
      { heading: "Common residential views", paragraphs: ["Many designs start with the front approach and then address routes that are not visible from the street."], points: ["Front door and approach", "Driveway and parked vehicles", "Side gate or alley", "Rear doors and patio", "Garden and boundary approaches", "Garage doors", "Detached outbuildings", "Long or gated driveways"] },
      { heading: "One camera cannot always do two jobs", paragraphs: ["A wide camera may show the whole drive but provide less detail at the gate. A close entrance view may capture faces but not the vehicle area. Position, lens, distance and lighting should match the purpose.", "Mounting cameras too high can create impressive overviews while losing useful facial detail. Appearance matters, but the view must still work."] },
      { heading: "Recorder-based versus smart cameras", paragraphs: ["A professional recorder-based system can provide consistent multi-camera recording and playback. Smart cameras, doorbells and floodlight products can suit customers prioritising app convenience, alerts and a lower-disruption installation.", "NOX explains the difference without describing smart security as a budget substitute."] },
      { heading: "Privacy and future maintenance", paragraphs: ["Camera views should focus on the property requirement and avoid unnecessary coverage of neighbouring areas. The customer should also be able to access playback, manage users and maintain clean, useful camera views after installation."] }
    ],
    related: [{ href: "/systems/home-cctv", label: "Get a Home CCTV Recommendation" }, { href: "/systems/smart-home-cctv", label: "Smart Security" }, { href: "/case-studies/chesterfield-home-ajax-cctv-intruder", label: "Chesterfield home project" }]
  },
  {
    slug: "how-often-should-cctv-be-maintained",
    title: "How often should CCTV be maintained?",
    metaTitle: "How Often Should CCTV Be Maintained?",
    metaDescription: "A guide to CCTV maintenance frequency, camera cleaning, recorder and storage health, playback, remote access and system upgrades.",
    category: "Maintenance & Monitoring Guides",
    excerpt: "CCTV should be checked regularly enough to keep views, recording, storage and remote access useful. Annual professional maintenance is a common starting point.",
    image: "/images/revisions/nox-engineer-cctv-wiring.jpg",
    imageAlt: "NOX engineer maintaining and wiring a CCTV system",
    sections: [
      { heading: "The direct answer", paragraphs: ["Many home and commercial CCTV systems benefit from at least an annual professional maintenance visit, with more frequent checks for exposed, dirty, critical or high-use sites. Users should also review live views and playback between visits rather than assuming recording is healthy because the cameras appear online.", "The right frequency depends on camera environment, site risk, recorder condition, access and the customer’s evidence requirement."] },
      { heading: "What maintenance should check", paragraphs: ["A useful visit checks the complete route from camera image to stored footage and user access."], points: ["Camera cleanliness and physical condition", "Day and night image quality", "Camera position and obstruction", "Recorder status and storage health", "Correct date and time", "Playback and export", "Remote viewing and users", "Network or communication issues", "Firmware where supported and appropriate", "Outstanding faults and upgrade options"] },
      { heading: "Why systems fail quietly", paragraphs: ["Hard drives can degrade, cameras can move, spider webs can obscure night images, app accounts can be lost and time settings can drift without creating an obvious alarm. A live picture today does not prove that useful footage was stored last week.", "Businesses should also check whether camera names, retention and user access still match the way the premises operates."] },
      { heading: "Maintenance versus upgrade", paragraphs: ["Maintenance confirms and preserves the current system. It does not turn unsuitable old cameras into high-detail evidence or add storage that the recorder cannot support.", "Where the equipment is outdated, a service report can identify recorder replacement, selective camera upgrades, storage changes or a phased migration rather than assuming a full replacement is required."] },
      { heading: "NOX CCTV maintenance", paragraphs: ["NOX supports suitable analogue, hybrid, IP, Ajax, Hikvision and other professional CCTV systems across Chesterfield, Sheffield and Derbyshire, subject to access and compatibility. Commercial and multi-site scopes are quoted to the camera count and site requirements."] }
    ],
    related: [{ href: "/service-plans/cctv-maintenance", label: "Get a CCTV Maintenance Quote" }, { href: "/services/repairs-upgrades", label: "CCTV Repairs & Upgrades" }, { href: "/commercial/cctv", label: "Commercial CCTV" }]
  },
  {
    slug: "how-much-does-an-ajax-alarm-cost",
    title: "How much does an Ajax alarm cost?",
    metaTitle: "How Much Does an Ajax Alarm Cost? | NOX Guide",
    metaDescription: "Understand what affects the cost of an Ajax alarm, including doors, MotionCam, keypads, sirens, perimeter protection, garages, monitoring and installation.",
    category: "Intruder Alarm Guides",
    excerpt: "Ajax alarm cost depends on the property, device quantities, external areas, controls, communication and ongoing support—not a single fixed kit price.",
    image: "/images/revisions/ajax-intruder-alarm-workbench.jpg",
    imageAlt: "Ajax alarm devices prepared for installation by NOX",
    sections: [
      { heading: "The direct answer", paragraphs: ["The cost of an Ajax alarm depends on the property and the protection required. A simple home with a few access points is different from a larger property with several floors, garages, gates, outbuildings, perimeter detection and multiple users.", "NOX does not publish an invented universal starting price because device quantity, communication, installation access and the chosen support route materially change the quotation."] },
      { heading: "What affects the installation price", paragraphs: ["The survey identifies which layers are useful and where they should be positioned."], points: ["Hub and communication option", "Number of protected doors and windows", "MotionProtect or MotionCam devices", "Keypads, tags and user controls", "Internal and external sirens", "Perimeter or outdoor detection", "Garages and separate buildings", "Range extension or signal design", "Installation time and access", "Integration with CCTV or video doorbell"] },
      { heading: "Monitoring and servicing are separate", paragraphs: ["Professional monitoring and annual maintenance are recurring services and should be shown separately from the equipment and installation cost. App notifications alone are not the same as professional monitoring.", "The customer can decide whether ongoing support is needed after the system and property requirement are understood."] },
      { heading: "Why a survey matters", paragraphs: ["A fixed kit can look cheaper but may omit important doors, external areas or useful controls. It can also include devices that do not match how the family uses the home.", "A property-led survey produces a clearer system, better device placement and a quotation that explains what each item contributes."] },
      { heading: "Get an Ajax alarm quotation", paragraphs: ["NOX installs Ajax alarms across Chesterfield, Sheffield and Derbyshire for normal family homes, larger properties and suitable commercial premises. Share the property type, postcode, doors, garages, outbuildings and any existing alarm to start the conversation."] }
    ],
    related: [{ href: "/systems/intrusion-alarms", label: "Plan My Ajax Alarm" }, { href: "/systems/garages-outbuildings", label: "Garages & Outbuildings" }, { href: "/service-plans/alarm-monitoring", label: "Alarm Monitoring" }]
  },
  {
    slug: "can-an-alarm-protect-a-garage-or-outbuilding",
    title: "Can an alarm protect a garage or outbuilding?",
    metaTitle: "Can an Alarm Protect a Garage or Outbuilding?",
    metaDescription: "How Ajax alarms, CCTV and perimeter protection can cover detached garages, workshops, gates and outbuildings, including range, power and network factors.",
    category: "Intruder Alarm Guides",
    excerpt: "Often yes, but distance, construction, communication, power and how the building is used must be assessed before equipment is selected.",
    image: "/images/image-refresh/garages-outbuildings-engineer.webp",
    imageAlt: "NOX engineer installing security at a residential outbuilding",
    sections: [
      { heading: "The direct answer", paragraphs: ["A modern alarm can often protect a detached garage, workshop or outbuilding, but the solution depends on distance, construction, radio conditions, power, access and the value or activity inside the space.", "The design may combine door protection, movement detection, MotionCam, a separate siren, CCTV or perimeter detection rather than relying on one device."] },
      { heading: "Range and construction", paragraphs: ["Brick, metal cladding, insulated panels, stone walls and several buildings can affect communication. The survey should test or plan range rather than assuming the open-air distance shown in product literature will apply at every property.", "Where cameras are included, network and power routes may be different from the alarm communication route."] },
      { heading: "Choosing the protection", paragraphs: ["A frequently used garage may need a different arming arrangement from a storage shed that remains secured most of the time."], points: ["Door contact on the main access", "Movement or photo-verification inside", "External detection around the approach", "CCTV for vehicles and identification", "Local or external siren", "Separate keypad, tag or app control", "Night mode or independent arming area"] },
      { heading: "Gates and driveways", paragraphs: ["Longer approaches can use CCTV, suitable external detection or both. Vehicles, pets, wildlife, vegetation, public paths and delivery routes must be considered to reduce unwanted alerts."] },
      { heading: "NOX property surveys", paragraphs: ["NOX designs garage, gate and outbuilding protection across Chesterfield, Sheffield, Derbyshire and nearby rural areas. Larger properties can be planned as one system or delivered in sensible phases."] }
    ],
    related: [{ href: "/systems/garages-outbuildings", label: "Protect a Garage or Outbuilding" }, { href: "/systems/perimeter-protection", label: "Perimeter Protection" }, { href: "/systems/home-cctv", label: "Home CCTV" }]
  },
  {
    slug: "app-alerts-versus-professional-alarm-monitoring",
    title: "App alerts versus professional alarm monitoring",
    metaTitle: "App Alerts vs Professional Alarm Monitoring",
    metaDescription: "Understand the difference between alarm app notifications and professional monitoring, including signalling, keyholders, supervision, maintenance and suitable systems.",
    category: "Maintenance & Monitoring Guides",
    excerpt: "An app notification goes to the user. Professional monitoring sends agreed alarm events through a monitored signalling route with a defined keyholder process.",
    image: "/images/v4-13-2/alarm-monitoring-operator.jpg",
    imageAlt: "Professional security monitoring operator reviewing alarm events",
    sections: [
      { heading: "The direct answer", paragraphs: ["An app alert notifies the people logged into the system. Professional monitoring sends agreed events through a monitored signalling route so an alarm receiving centre can follow the confirmed contact or keyholder process.", "Neither option should be described with vague promises. The customer needs to know which events are transmitted, who is contacted, what supervision is provided and what happens when contacts cannot be reached."] },
      { heading: "App notifications", paragraphs: ["App control is useful for arming, event history, user management and direct alerts. Its effectiveness depends on the user’s phone, data connection, notification settings, availability and willingness to respond.", "It can suit customers who want direct control, but it is not the same service as a monitored signalling route."] },
      { heading: "Professional monitoring", paragraphs: ["A suitable maintained system communicates with the monitoring route and sends agreed alarm events. Keyholder details and the response process are recorded as part of the service."], points: ["Alarm event signalling", "Keyholder contact process", "System or communication supervision where included", "Defined contact records", "Maintenance and compatibility requirements", "Clear renewal and service scope"] },
      { heading: "What monitoring does not automatically mean", paragraphs: ["Professional monitoring follows the signalling, keyholder and escalation arrangements agreed for the individual system. It should not be treated as a guarantee that somebody will attend every activation."] },
      { heading: "Choosing the route", paragraphs: ["Consider who needs to know about an alarm, whether phones can be unavailable, who holds keys, how quickly contacts change and whether the property is residential, commercial or multi-site.", "NOX can assess monitoring compatibility for new Ajax systems and suitable existing alarms, subject to maintenance, communication and takeover requirements."] }
    ],
    related: [{ href: "/service-plans/alarm-monitoring", label: "Request a Monitoring Quote" }, { href: "/service-plans/alarm-maintenance", label: "Intruder Alarm Servicing" }, { href: "/systems/intrusion-alarms", label: "Ajax Intruder Alarms" }]
  }

]


blogPosts.push(
  {
    slug: "what-is-perimeter-protection",
    title: "What is perimeter protection?",
    metaTitle: "What Is Perimeter Protection for Homes and Businesses?",
    metaDescription: "Learn how perimeter protection can detect activity around gates, driveways, yards, gardens and outbuildings before an intruder reaches the main building.",
    category: "Intruder Alarm Guides",
    excerpt: "Perimeter protection uses carefully positioned external detection, cameras or both to identify activity around the property before entry to the main building.",
    image: "/images/v4-12-6/perimeter-main-white-devices.png",
    imageAlt: "External perimeter protection installed around a property",
    sections: [
      { heading: "The direct answer", paragraphs: ["Perimeter protection is security placed around the approach to a property rather than only inside the building. It can use suitable outdoor detectors, camera verification, CCTV, gate contacts and external warning devices to identify activity around driveways, yards, gardens, garages or outbuildings.", "The design has to match the site. Public footpaths, pets, wildlife, planting, vehicles, weather and normal staff or family movement all affect where devices should be positioned."] },
      { heading: "Where it is useful", paragraphs: ["Perimeter protection is particularly useful where the customer wants an earlier warning or where the main risk sits away from the building."], points: ["Driveways and vehicle approaches", "Gates and side access", "Detached garages and workshops", "Commercial yards and compounds", "Rural properties and outbuildings", "Loading areas and external stock"] },
      { heading: "Detection and CCTV serve different purposes", paragraphs: ["External alarm detection can create an immediate event, while CCTV helps the user or monitoring route understand what happened. Combining both can provide earlier warning and better visual context, but only where the system is designed to avoid unnecessary alerts.", "A camera alone is not automatically perimeter protection, and an outdoor detector does not replace the evidence and overview a well-positioned CCTV system can provide."] },
      { heading: "What affects the design", paragraphs: ["The survey should consider range, mounting height, masking, crossing routes, lighting, network coverage, communication paths and whether areas need to be armed independently."], points: ["Property boundaries and approach routes", "Normal movement around the site", "Pets, wildlife and vegetation", "Device communication range", "Camera views and night image quality", "Separate areas, schedules or user access"] },
      { heading: "How NOX approaches perimeter projects", paragraphs: ["NOX surveys larger homes, industrial units, yards and rural properties across Chesterfield, Sheffield and Derbyshire. The system can be designed as part of an Ajax intruder alarm, CCTV installation or combined fire and security project, with ongoing maintenance discussed from the start."] }
    ],
    related: [{ href: "/systems/perimeter-protection", label: "Perimeter Protection Systems" }, { href: "/commercial/yard-perimeter-security", label: "Yard & Perimeter Security" }, { href: "/systems/garages-outbuildings", label: "Garages & Outbuildings" }]
  },
  {
    slug: "when-should-emergency-lighting-fittings-be-replaced",
    title: "When should emergency-lighting fittings be replaced?",
    metaTitle: "When Should Emergency Lighting Fittings Be Replaced?",
    metaDescription: "A practical guide to failed emergency lights, battery condition, obsolete fittings, repeated defects and when repair or replacement is the sensible route.",
    category: "Emergency Lighting Guides",
    excerpt: "Emergency-lighting fittings should be repaired or replaced when they fail testing, cannot provide the required duration or are no longer economical or supportable.",
    image: "/images/v4-12-3/emergency-lighting-testing-servicing.jpg",
    imageAlt: "Emergency exit lighting inspected during a service visit",
    sections: [
      { heading: "The direct answer", paragraphs: ["An emergency-lighting fitting should be replaced when it fails its functional or duration test and cannot be restored reliably, when the battery or control gear is no longer economical to repair, or when the fitting is unsuitable for the escape route and premises requirements.", "Replacement decisions should be based on recorded test results and the condition of the installation rather than age alone."] },
      { heading: "Signs replacement may be needed", paragraphs: ["Some defects are simple, while repeated or widespread failures can indicate that a planned upgrade is more sensible."], points: ["The fitting does not illuminate on loss of normal supply", "The battery cannot sustain the required duration", "The indicator or charging circuit shows a fault", "The diffuser, enclosure or mounting is damaged", "Replacement batteries or parts are unavailable", "Light output or position is no longer suitable", "Repeated failures create excessive remedial cost"] },
      { heading: "Battery replacement versus a new fitting", paragraphs: ["A battery replacement can be appropriate where the fitting is otherwise serviceable and the correct part is available. A complete fitting may be better where the unit is obsolete, damaged, inefficient or difficult to maintain.", "The engineer should record the defect and explain the available route rather than replacing equipment without a clear reason."] },
      { heading: "Plan remedials around the premises", paragraphs: ["Emergency-lighting remedials may need access equipment, isolation, out-of-hours work or temporary controls. On larger sites, failed fittings can be grouped into a planned remedial visit after the test report has been reviewed."] },
      { heading: "NOX installation and servicing", paragraphs: ["NOX installs, tests and services emergency lighting across Chesterfield, Sheffield and Derbyshire. Fire-alarm and emergency-lighting visits can be coordinated where practical, while reports and remedial quotations remain clear and separate."] }
    ],
    related: [{ href: "/systems/emergency-lighting", label: "Emergency Lighting Installation" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency Lighting Testing & Servicing" }, { href: "/service-plans/fire-compliance", label: "Fire Compliance Plans" }]
  },
  {
    slug: "can-fire-alarm-and-emergency-lighting-visits-be-combined",
    title: "Can fire-alarm and emergency-lighting visits be combined?",
    metaTitle: "Can Fire Alarm and Emergency Lighting Visits Be Combined?",
    metaDescription: "Learn when fire-alarm servicing and emergency-lighting testing can be coordinated, what remains separate and how combined annual planning can reduce disruption.",
    category: "Fire Alarm Guides",
    excerpt: "The visits can often be coordinated for convenience, but each system still needs its own agreed scope, testing, records and remedial route.",
    image: "/images/revisions/fire-safety-logbook.jpg",
    imageAlt: "Fire safety records used to coordinate fire alarm and emergency lighting visits",
    sections: [
      { heading: "The direct answer", paragraphs: ["Fire-alarm servicing and emergency-lighting testing can often be scheduled during the same attendance where the site, access and test durations allow it. Combining the visit can reduce disruption and simplify annual planning, but the two systems still require separate inspection scopes, records and defect reporting."] },
      { heading: "What can be coordinated", paragraphs: ["The practical benefits normally come from arranging access, staff notifications and site induction once."], points: ["Shared appointment and site access", "Coordinated asset and renewal records", "Single annual planning conversation", "Grouped remedial quotation where useful", "Reduced disruption for multi-site customers"] },
      { heading: "What remains separate", paragraphs: ["A fire-alarm service does not automatically include emergency-lighting testing, and an emergency-lighting duration test does not verify the fire alarm. Each service needs a defined scope, competent testing and its own findings.", "Long-duration emergency-lighting tests may need a different time window because the premises must remain safe after the test and batteries need time to recharge."] },
      { heading: "When separate visits may be better", paragraphs: ["Separate attendance may be more practical where systems are extensive, access is restricted, out-of-hours work is needed, or the emergency-lighting duration test would interfere with normal operation."] },
      { heading: "How NOX plans combined support", paragraphs: ["NOX can review the fire alarm, emergency lighting, known defects and site access before proposing a schedule. This is particularly useful for commercial premises and multi-site customers wanting one point of contact without hiding the separate responsibilities of each service."] }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Arrange Fire Alarm Servicing" }, { href: "/service-plans/emergency-lighting-servicing", label: "Book Emergency Lighting Testing" }, { href: "/service-plans/fire-compliance", label: "Fire Compliance Plans" }]
  }
)


blogPosts.push({
  slug: "how-often-should-an-intruder-alarm-be-serviced",
  title: "How often should an intruder alarm be serviced?",
  metaTitle: "How Often Should an Intruder Alarm Be Serviced?",
  metaDescription: "Learn how often a wired, wireless or hybrid intruder alarm should be serviced and what an annual system health check should include.",
  category: "Intruder Alarm Guides",
  excerpt: "A planned annual service is a sensible starting point for many intruder alarms, subject to the system, monitoring route, premises and applicable requirements.",
  image: "/images/revisions/intruder-maintenance-system-takeover.jpg",
  imageAlt: "Engineer servicing an existing intruder alarm system",
  sections: [
    { heading: "The direct answer", paragraphs: ["Many residential and commercial intruder alarms are placed on an annual servicing schedule, although the correct frequency depends on the system, premises, monitoring arrangement, manufacturer guidance and any agreed requirements.", "A service should be planned before faults, flat batteries or communication problems become obvious. A monitored or higher-use commercial system may require a more structured schedule than a straightforward app-controlled home alarm."] },
    { heading: "What an intruder alarm service may include", paragraphs: ["The scope should be confirmed in the quotation or maintenance agreement."], points: ["Control equipment and event-history review", "Detector, contact and panic-device testing", "Internal and external sounder checks", "Battery and power-supply condition", "Communication and app connection", "Monitoring signalling where included", "Firmware review where supported", "Service record and identified defects"] },
    { heading: "Existing wired, wireless and hybrid systems", paragraphs: ["NOX can assess suitable systems installed by another company as well as equipment installed by NOX. The first visit may need to establish access, device quantities, known faults, parts support and the true condition of the system before an ongoing plan is agreed."] },
    { heading: "Monitoring and maintenance", paragraphs: ["Professional monitoring normally depends on a suitable maintained system and a working communication route. App notifications and professional monitoring are different services, so the engineer should confirm exactly what is being tested and supported."] },
    { heading: "When not to wait for the next service", paragraphs: ["Arrange attention sooner where the panel reports a fault, devices repeatedly lose connection, batteries are low, a siren does not operate, users cannot arm the system, monitoring communication fails or building work has changed the protected areas."] },
    { heading: "NOX servicing across the local area", paragraphs: ["NOX services suitable wired, wireless and hybrid intruder alarms across Chesterfield, Sheffield and Derbyshire. Customers can also request a system takeover, repair, upgrade or monitoring assessment where the existing arrangement is unclear."] }
  ],
  related: [{ href: "/service-plans/alarm-maintenance", label: "Arrange an Alarm Service" }, { href: "/services/security-system-takeover", label: "Security System Takeovers" }, { href: "/service-plans/alarm-monitoring", label: "Alarm Monitoring" }]
})


const guideFaqs: Record<string, { q: string; a: string }[]> = {
  "how-often-should-a-commercial-fire-alarm-be-serviced": [
    { q: "Can weekly fire alarm tests replace professional servicing?", a: "No. Routine user tests and professional inspection or servicing serve different purposes and both should follow the premises' agreed fire-safety arrangements." },
    { q: "Can several sites share a servicing schedule?", a: "Yes, where access and system information are available, visits and renewals can be coordinated across a portfolio." },
  ],
  "what-is-included-in-a-fire-alarm-service": [
    { q: "Are replacement parts included in a fire alarm service?", a: "Not automatically. Parts and remedial work are normally quoted separately unless the written service agreement includes them." },
    { q: "Will the service produce a record?", a: "A professional visit should leave clear documentation of the agreed checks, limitations and identified defects." },
  ],
  "can-a-new-company-take-over-an-existing-fire-alarm": [
    { q: "What if the engineer code is missing?", a: "Access options depend on the panel and manufacturer. The assessment may identify a recovery route, remedial work or the need for panel replacement." },
    { q: "Does a takeover include existing faults?", a: "Existing faults should be recorded and dealt with separately from the recurring service scope." },
  ],
  "conventional-versus-addressable-fire-alarm-systems": [
    { q: "Is an addressable system always better?", a: "No. It can provide more detailed information, but the correct system depends on the building, fire strategy, scale and required indication." },
    { q: "Can a wireless fire alarm be addressable?", a: "Wireless describes the communication method. The complete system design and indication still need to meet the project's requirements." },
  ],
  "what-information-is-needed-for-a-fire-alarm-quote": [
    { q: "Can NOX quote from photographs alone?", a: "Photographs help identify the starting point, but a designed installation normally requires a site survey and relevant building information." },
    { q: "What if no drawings are available?", a: "A survey can still begin, but missing information may need to be created or clarified before the final design is confirmed." },
  ],
  "how-often-should-emergency-lighting-be-tested": [
    { q: "Can monthly checks be completed by site staff?", a: "The responsible person should define a competent routine for the premises and keep records. Professional support is still needed for the agreed servicing and duration testing route." },
    { q: "Should failed fittings wait until the annual test?", a: "No. Obvious failures should be recorded and repaired promptly rather than left until the next scheduled test." },
  ],
  "what-is-a-three-hour-emergency-lighting-test": [
    { q: "Does every fitting need a three-hour test?", a: "The test must match the rated system and premises requirements. Three hours is common, but the correct scope should be confirmed for the property." },
    { q: "Can the test be done while the building is occupied?", a: "It may need phasing, temporary controls or out-of-hours planning so the premises is not left without effective emergency lighting." },
  ],
  "how-many-cameras-does-a-commercial-site-need": [
    { q: "Can one camera cover a whole warehouse?", a: "It may provide an overview, but detailed entrances, faces, vehicles, stock or loading areas usually require additional purpose-specific views." },
    { q: "Does a higher camera count always mean better security?", a: "No. Position, lens, lighting, storage and the ability to find footage matter more than quantity alone." },
  ],
  "how-many-cctv-cameras-does-a-house-need": [
    { q: "Is four cameras enough for every house?", a: "No. The property layout, entrances, side access, garage and desired detail determine the useful number." },
    { q: "Can a doorbell replace a driveway camera?", a: "A doorbell provides a close entrance view. It may not provide the wider vehicle or approach coverage required for the driveway." },
  ],
  "how-often-should-cctv-be-maintained": [
    { q: "Can the customer check CCTV between services?", a: "Yes. Regular live-view and playback checks help identify obvious issues before the planned engineer visit." },
    { q: "Does maintenance include a new hard drive?", a: "Not automatically. Failed or unsuitable storage is normally reported and quoted separately." },
  ],
  "how-much-does-an-ajax-alarm-cost": [
    { q: "Can NOX quote an Ajax alarm without a survey?", a: "Basic information can establish a likely route, but a survey is the best way to confirm device quantities, range and external areas." },
    { q: "Is monitoring included in the alarm price?", a: "Monitoring and annual servicing are recurring services and should be shown separately unless a written quotation states otherwise." },
  ],
  "can-an-alarm-protect-a-garage-or-outbuilding": [
    { q: "Does the outbuilding need internet?", a: "Not always for alarm devices, but CCTV and app-connected equipment may need network or another communication route." },
    { q: "Can the outbuilding be armed separately?", a: "Suitable systems can use areas or partitions, subject to the final design and user requirements." },
  ],
  "how-often-should-an-intruder-alarm-be-serviced": [
    { q: "Is an annual service always required?", a: "The correct schedule depends on the system, premises, monitoring arrangement and applicable requirements. Annual servicing is a common starting point, but the agreed scope should be confirmed for the site." },
    { q: "Can NOX service an alarm installed by another company?", a: "Often yes, subject to system access, condition, parts support and an initial takeover assessment where required." },
  ],
  "what-is-perimeter-protection": [
    { q: "Can perimeter protection work with pets?", a: "Potentially, but the survey must consider the animals, routes and device settings. No outdoor detector should be assumed immune to every source of movement." },
    { q: "Can perimeter areas be armed separately?", a: "Suitable systems can use areas, schedules or separate controls, subject to the final design and customer requirements." },
  ],
  "when-should-emergency-lighting-fittings-be-replaced": [
    { q: "Does a failed duration test always mean a new fitting?", a: "Not always. A compatible battery or repair may restore a serviceable fitting, but obsolete or repeatedly failing equipment may be better replaced." },
    { q: "Can failed fittings be grouped into one remedial visit?", a: "Yes, where the premises remains appropriately protected and the defects have been assessed and prioritised." },
  ],
  "can-fire-alarm-and-emergency-lighting-visits-be-combined": [
    { q: "Will the customer receive separate records?", a: "Yes. The services can be coordinated while keeping each system's checks, findings and remedials clearly documented." },
    { q: "Can the same arrangement cover several sites?", a: "Yes, subject to system information, access and a realistic schedule for each premises." },
  ],
  "app-alerts-versus-professional-alarm-monitoring": [
    { q: "Does professional monitoring guarantee attendance?", a: "No. The exact signalling, keyholder and escalation process must be agreed for the individual system, and attendance should not be assumed." },
    { q: "Can an existing alarm be monitored?", a: "Potentially, subject to compatibility, communication equipment, maintenance and a takeover assessment." },
  ],
}

for (const post of blogPosts) {
  post.faq = guideFaqs[post.slug] ?? post.faq
}

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug)
}
