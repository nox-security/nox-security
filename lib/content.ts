export type LinkItem = { href: string; label: string }
export type TextItem = { title: string; text: string }
export type FAQItem = { q: string; a: string }

export type ServicePageData = {
  slug: string
  eyebrow: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  image: string
  imageAlt: string
  problemTitle: string
  problemText: string
  benefits: string[]
  suitableFor: string[]
  process: TextItem[]
  details: TextItem[]
  faq: FAQItem[]
  related: LinkItem[]
  caseStudySlugs: string[]
}

export type PlanPageData = {
  slug: string
  eyebrow: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  image: string
  imageAlt: string
  residentialPrice?: string
  commercialPrice?: string
  priceNote?: string
  included: string[]
  suitableFor: string[]
  process: TextItem[]
  details: TextItem[]
  faq: FAQItem[]
  related: LinkItem[]
}

export const reviewThemes = [
  {
    title: "Verified customer feedback",
    text: "The website points visitors towards NOX's verified review profiles rather than publishing invented names, quotes or project outcomes."
  },
  {
    title: "Clear advice before installation",
    text: "NOX starts with the property, the risks and the customer's priorities, then explains the proposed system in plain English."
  },
  {
    title: "Proper handover and support",
    text: "Every installation includes testing, setup and a clear handover, with monitoring, servicing and future support available where required."
  }
]

export const caseStudies = [
  {
    slug: "buxton-industrial-security",
    title: "Industrial alarm and nine-camera CCTV system",
    location: "Buxton, Derbyshire",
    image: "/images/case-studies/install-2.png",
    alt: "NOX commercial CCTV installation at an industrial site in Buxton",
    summary: "NOX installed an Ajax intruder alarm and a nine-camera CCTV system at an industrial site in Buxton.",
    systems: ["Ajax intruder alarm", "Nine-camera CCTV system", "Industrial premises"]
  },
  {
    slug: "chesterfield-scrapyard-cctv",
    title: "Thirteen-camera commercial CCTV installation",
    location: "Chesterfield, Derbyshire",
    image: "/images/case-studies/install-3.png",
    alt: "8MP AI turret CCTV cameras installed at a Chesterfield scrapyard",
    summary: "A Chesterfield scrapyard was equipped with thirteen 8MP AI turret cameras for wider commercial site coverage.",
    systems: ["Thirteen CCTV cameras", "8MP AI turret cameras", "Commercial yard"]
  },
  {
    slug: "peak-electronic-security",
    title: "Intruder and CCTV installation for Peak Electronic",
    location: "Derbyshire",
    image: "/images/case-studies/install-2.png",
    alt: "Ajax intruder alarm and CCTV installation for Peak Electronic",
    summary: "NOX installed an Ajax intruder system together with nine CCTV cameras for Peak Electronic.",
    systems: ["Ajax intruder system", "Nine CCTV cameras", "Commercial installation"]
  },
  {
    slug: "dronfield-timber-perimeter",
    title: "External detection at a timber site",
    location: "Dronfield, Derbyshire",
    image: "/images/perimeter.jpg",
    alt: "External Ajax detection protecting a timber site in Dronfield",
    summary: "A Dronfield timber site was protected with external Ajax detection and external sirens.",
    systems: ["External Ajax detection", "External sirens", "Perimeter protection"]
  },
  {
    slug: "sheffield-residential-security",
    title: "Residential CCTV and intruder protection",
    location: "Sheffield, South Yorkshire",
    image: "/images/case-studies/install-1.png",
    alt: "Residential CCTV and intruder alarm installation in Sheffield",
    summary: "NOX installed CCTV and intruder alarm protection at a residential property in Sheffield.",
    systems: ["Residential CCTV", "Intruder alarm", "Home security"]
  },
  {
    slug: "chesterfield-residential-ajax",
    title: "Five-camera Ajax CCTV and intruder protection",
    location: "Chesterfield, Derbyshire",
    image: "/images/case-studies/install-1.png",
    alt: "Five Ajax 8MP cameras and intruder protection at a Chesterfield home",
    summary: "A Chesterfield residential property was protected with five Ajax 8MP cameras and an intruder alarm system.",
    systems: ["Five Ajax 8MP cameras", "Intruder protection", "Residential property"]
  },
  {
    slug: "retford-former-bank-cctv",
    title: "Ten-camera CCTV system at a former bank",
    location: "Retford, Nottinghamshire",
    image: "/images/case-studies/install-3.png",
    alt: "Ten-camera commercial CCTV system installed at a former bank in Retford",
    summary: "NOX installed a ten-camera CCTV system at a former bank building in Retford.",
    systems: ["Ten-camera CCTV system", "Commercial property", "Retford installation"]
  },
  {
    slug: "chesterfield-kitchen-showroom",
    title: "Showroom intruder alarm and CCTV",
    location: "Chesterfield, Derbyshire",
    image: "/images/case-studies/install-2.png",
    alt: "Intruder alarm and CCTV installed at a Chesterfield kitchen showroom",
    summary: "A kitchen showroom in Chesterfield received a combined intruder alarm and CCTV installation.",
    systems: ["Intruder alarm", "CCTV system", "Retail showroom"]
  },
  {
    slug: "banana-industries-fire-security",
    title: "Combined intruder and fire protection",
    location: "Derbyshire",
    image: "/images/fire-safety.png",
    alt: "Commercial intruder and fire protection installed for Banana Industries",
    summary: "NOX delivered intruder and fire protection for Banana Industries.",
    systems: ["Intruder protection", "Fire protection", "Commercial premises"]
  },
  {
    slug: "chatsworth-estate-cctv-upgrade",
    title: "Ten-camera CCTV upgrade",
    location: "Chatsworth Estate, Derbyshire",
    image: "/images/case-studies/install-3.png",
    alt: "Ten-camera CCTV upgrade completed at Chatsworth Estate",
    summary: "NOX completed a ten-camera CCTV upgrade at Chatsworth Estate.",
    systems: ["Ten-camera CCTV upgrade", "Existing-system upgrade", "Estate property"]
  }
]

export const areas = {
  chesterfield: {
    name: "Chesterfield", county: "Derbyshire",
    intro: "Local alarm, CCTV and fire safety support from NOX's Chesterfield base, covering homes, businesses, yards and larger multi-system sites.",
    focus: "Chesterfield customers can arrange a security survey, installation, system takeover or annual service directly with the local NOX team.",
    commercial: "Commercial support includes CCTV, intruder alarms, fire alarm work, emergency lighting, monitoring and maintenance for shops, offices, garages, industrial units and hospitality venues.",
    nearby: "Hasland, Brimington, Wingerworth, Clay Cross and Staveley"
  },
  sheffield: {
    name: "Sheffield", county: "South Yorkshire",
    intro: "Residential and commercial security systems across Sheffield, from home alarms and driveway CCTV to joined-up protection for offices, retail and industrial premises.",
    focus: "NOX surveys the property first, then designs the alarm, CCTV or fire solution around access points, working areas and the way the site is used.",
    commercial: "Sheffield businesses can combine commercial CCTV, intruder protection, monitoring, servicing and fire safety support through one local contractor.",
    nearby: "Dore, Totley, Ecclesall, Handsworth and surrounding Sheffield districts"
  },
  derbyshire: {
    name: "Derbyshire", county: "Derbyshire",
    intro: "Professional fire and security installation, maintenance and takeovers across Derbyshire's towns, villages, rural properties and commercial sites.",
    focus: "Coverage includes modern alarm systems, CCTV, perimeter protection, fire alarms, emergency lighting and ongoing service plans.",
    commercial: "For larger Derbyshire sites, NOX can coordinate multiple systems, planned servicing and a clearer annual renewal structure.",
    nearby: "Chesterfield, Matlock, Bakewell, Buxton, Dronfield and the Peak District"
  },
  dronfield: {
    name: "Dronfield", county: "Derbyshire",
    intro: "Intruder alarms, CCTV and external detection for homes, outbuildings, commercial premises and timber or yard environments around Dronfield.",
    focus: "NOX can design internal and perimeter protection, app control and suitable camera coverage around the property rather than relying on a fixed kit.",
    commercial: "Commercial options include external detection, sirens, CCTV recording, monitoring, maintenance and takeover of suitable existing systems.",
    nearby: "Coal Aston, Holmesfield, Unstone and the Sheffield border"
  },
  matlock: {
    name: "Matlock", county: "Derbyshire",
    intro: "Tailored CCTV, alarms and fire safety support for homes, hospitality venues, rural properties and businesses around Matlock.",
    focus: "Surveys consider access, terrain, outbuildings, connectivity and the day-to-day use of the property before equipment is selected.",
    commercial: "NOX supports shops, accommodation, offices and operational sites with installation, monitoring, annual servicing and sensible upgrades.",
    nearby: "Matlock Bath, Darley Dale, Tansley and surrounding Peak District villages"
  },
  bakewell: {
    name: "Bakewell", county: "Derbyshire",
    intro: "Discreet, professionally installed alarms, CCTV and fire safety systems for homes, hospitality, retail and commercial properties in Bakewell.",
    focus: "The design can balance appearance, reliable coverage and simple control across older buildings, extensions, outbuildings and busy customer areas.",
    commercial: "Hospitality and retail sites can combine fire alarm servicing, emergency lighting, CCTV, intruder protection and planned support.",
    nearby: "Baslow, Ashford-in-the-Water, Chatsworth and nearby Peak District villages"
  },
  baslow: {
    name: "Baslow", county: "Derbyshire",
    intro: "Home, estate and hospitality security systems around Baslow, including alarms, CCTV, perimeter protection and ongoing support.",
    focus: "NOX designs around the property first, with careful attention to entrances, driveways, outbuildings and the appearance of the finished installation.",
    commercial: "Local hospitality and commercial premises can access fire, emergency lighting, alarm and CCTV services through one team.",
    nearby: "Chatsworth, Calver, Curbar and Bakewell"
  },
  buxton: {
    name: "Buxton", county: "Derbyshire",
    intro: "CCTV, intruder alarms, monitoring and maintenance for Buxton homes, hospitality venues, industrial premises and wider commercial sites.",
    focus: "NOX has delivered combined alarm and nine-camera CCTV work at a Buxton industrial site and supports projects of different sizes across the area.",
    commercial: "Commercial work can include system installation, takeover, fault resolution, planned servicing and coordinated fire and security support.",
    nearby: "Harpur Hill, Fairfield, Dove Holes and the High Peak"
  },
  "hope-valley": {
    name: "Hope Valley", county: "Derbyshire",
    intro: "Security systems for rural homes, holiday properties, hospitality venues, outbuildings and businesses throughout Hope Valley.",
    focus: "Surveys consider long driveways, detached buildings, external approaches and communication range before the system is designed.",
    commercial: "NOX can support hospitality and commercial sites with CCTV, alarms, fire safety, monitoring and maintenance.",
    nearby: "Hope, Castleton, Edale, Bamford and Hathersage"
  },
  hathersage: {
    name: "Hathersage", county: "Derbyshire",
    intro: "Tailored alarms, CCTV and perimeter protection for homes, rural properties, accommodation and businesses in Hathersage.",
    focus: "NOX keeps systems easy to use while planning reliable coverage around entrances, driveways, gardens and detached buildings.",
    commercial: "Business support includes security installation, fire safety services, takeovers and annual maintenance.",
    nearby: "Hope Valley, Bamford, Grindleford and Sheffield"
  },
  "darley-dale": {
    name: "Darley Dale", county: "Derbyshire",
    intro: "Residential and commercial alarm, CCTV and fire safety services around Darley Dale and the wider Matlock area.",
    focus: "Systems can cover homes, garages, workshops, driveways and small business premises with straightforward app and keypad control.",
    commercial: "Commercial customers can add monitoring, planned maintenance, fire alarm servicing and emergency lighting testing.",
    nearby: "Matlock, Rowsley, Two Dales and Bakewell"
  },
  ashover: {
    name: "Ashover", county: "Derbyshire",
    intro: "Security surveys and tailored systems for village homes, rural properties, farms, outbuildings and local businesses around Ashover.",
    focus: "NOX can combine internal protection, external detection and CCTV where the layout and communication range make it suitable.",
    commercial: "Local commercial and rural sites can access takeovers, maintenance, monitoring and upgrades without being forced into a fixed package.",
    nearby: "Kelstedge, Clay Cross, Matlock and Chesterfield"
  },
  mansfield: {
    name: "Mansfield", county: "Nottinghamshire",
    intro: "Residential and commercial CCTV, alarm and fire safety projects across Mansfield and nearby Nottinghamshire areas.",
    focus: "NOX provides surveys, tailored quotations, professional installation and ongoing support for suitable projects outside the core Chesterfield area.",
    commercial: "Shops, offices, garages, yards and industrial units can combine security and fire services through one point of contact.",
    nearby: "Sutton-in-Ashfield, Kirkby-in-Ashfield, Shirebrook and Worksop"
  },
  worksop: {
    name: "Worksop", county: "Nottinghamshire",
    intro: "Professional CCTV, intruder alarms, servicing and system takeovers for homes and businesses around Worksop.",
    focus: "NOX can assess existing equipment, resolve faults and recommend a sensible upgrade route where replacement is not automatically required.",
    commercial: "Commercial services include camera systems, alarms, monitoring, maintenance, fire alarm work and emergency lighting.",
    nearby: "Retford, Barlborough, Clowne and north Nottinghamshire"
  },
  rotherham: {
    name: "Rotherham", county: "South Yorkshire",
    intro: "Security surveys, CCTV and alarm installation for homes, commercial units and industrial sites across Rotherham.",
    focus: "Systems are planned around access points, vehicle areas, boundaries and operating routines, with app control and monitoring options where suitable.",
    commercial: "NOX supports retail, offices, workshops, warehouses and yards with installation, takeovers and annual service plans.",
    nearby: "Wickersley, Maltby, Brinsworth and Sheffield"
  },
  doncaster: {
    name: "Doncaster", county: "South Yorkshire",
    intro: "Commercial and larger residential fire and security projects across Doncaster and surrounding areas.",
    focus: "NOX can provide a clear route from survey and quotation through installation, handover, monitoring and planned maintenance.",
    commercial: "Joined-up commercial support can cover CCTV, intruder alarms, fire alarms, emergency lighting and recurring service arrangements.",
    nearby: "Balby, Bessacarr, Armthorpe and South Yorkshire"
  },
  barnsley: {
    name: "Barnsley", county: "South Yorkshire",
    intro: "Alarm, CCTV and fire safety services for homes, commercial premises and larger operational sites across Barnsley.",
    focus: "NOX designs around the building and the customer requirement, selecting appropriate equipment rather than forcing every site onto one platform.",
    commercial: "Commercial customers can combine installation, monitoring, annual maintenance and fire compliance support.",
    nearby: "Wombwell, Hoyland, Penistone and Sheffield"
  },
  retford: {
    name: "Retford", county: "Nottinghamshire",
    intro: "CCTV, intruder alarm and ongoing service support for residential and commercial properties around Retford.",
    focus: "NOX has completed a ten-camera CCTV installation at a former bank in Retford and supports further suitable projects in the area.",
    commercial: "Commercial options include high-coverage CCTV, alarms, takeovers, maintenance and fire safety services.",
    nearby: "Worksop, Tuxford, Bawtry and north Nottinghamshire"
  },
  nottinghamshire: {
    name: "Nottinghamshire", county: "Nottinghamshire",
    intro: "Larger residential and commercial CCTV, alarm and fire safety projects across Nottinghamshire where the scope suits the NOX service area.",
    focus: "NOX provides direct communication from survey and quotation through to installation and ongoing support.",
    commercial: "Portfolio and multi-system work can combine CCTV, intruder alarms, fire alarms, emergency lighting, monitoring and maintenance.",
    nearby: "Mansfield, Worksop, Retford and surrounding Nottinghamshire areas"
  }
} as const

export const systemPages: Record<string, ServicePageData> = {
  "intrusion-alarms": {
    slug: "intrusion-alarms",
    eyebrow: "Intruder alarm installation",
    title: "Intruder alarms designed around the property",
    metaTitle: "Intruder Alarm Installation Chesterfield | Ajax Alarm Installer",
    metaDescription: "Tailored intruder alarm installation in Chesterfield, Sheffield and Derbyshire. Ajax wireless alarms, external detection, app control, monitoring, maintenance and takeovers.",
    intro: "Professional wired, wireless and hybrid intruder alarm systems for homes and businesses across Chesterfield, Sheffield and Derbyshire. Ajax is our preferred smart platform, but the property and risk come first.",
    image: "/images/intrusion-alarms.png",
    imageAlt: "Black Ajax wireless intruder alarm equipment installed by NOX in Chesterfield",
    problemTitle: "A useful alarm must protect the right areas and remain simple to live with",
    problemText: "NOX assesses entrances, movement routes, outbuildings, external approaches and how the property is occupied. The final design can include door protection, internal and external detection, perimeter devices, keypads, fobs, app control and photo verification where suitable.",
    benefits: ["Ajax wireless alarm options", "Wired and hybrid solutions where appropriate", "Internal and external detection", "Perimeter and outbuilding protection", "App, keypad and fob control", "Photo verification where suitable", "Professional monitoring options", "Maintenance and system takeovers"],
    suitableFor: ["Homes and driveways", "Garages and outbuildings", "Landlords and HMOs", "Retail and offices", "Warehouses and industrial units", "Hospitality and multi-site businesses"],
    process: [
      { title: "Security survey", text: "We assess entry points, property use, risks and the way you want to control the alarm." },
      { title: "Clear design and quotation", text: "Equipment, installation and optional monitoring or maintenance are explained without forcing a fixed package." },
      { title: "Professional installation", text: "Devices are positioned carefully, the system is tested fully and the working area is left clean and tidy." },
      { title: "Handover and support", text: "We set up users, app access and operating modes, then remain available for servicing, monitoring and future changes." }
    ],
    details: [
      { title: "Residential protection", text: "Night mode, pet-aware layouts, driveway approaches, garages and detached outbuildings can be considered as part of one clear design." },
      { title: "Commercial alarms", text: "Area control, staff access, opening and closing routines and visual verification can be considered for shops, offices and operational sites." },
      { title: "Monitoring and maintenance", text: "Professional alarm monitoring, keyholder contact, health checks, battery checks, firmware updates and annual service records are available." },
      { title: "Existing-system takeovers", text: "Suitable existing systems can be inspected, faulted, serviced and upgraded only where the condition and compatibility make sense." }
    ],
    faq: [
      { q: "Do you only install Ajax alarms?", a: "Ajax is NOX's preferred smart security platform, but the property, existing equipment and customer requirement are assessed before the correct system is recommended." },
      { q: "Can I book a survey without completing an enquiry form?", a: "Yes. The Book a Free Security Survey route opens the live booking calendar directly." },
      { q: "Can an alarm cover garages and outbuildings?", a: "Yes, subject to survey, layout and reliable communication range. Internal, external and perimeter protection can be combined where suitable." },
      { q: "Do I have to take monitoring?", a: "No. Monitoring and annual maintenance are optional services and are explained separately in the quotation." }
    ],
    related: [{ href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }, { href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" }, { href: "/commercial/intruder-alarms", label: "Commercial intruder alarms" }],
    caseStudySlugs: ["dronfield-timber-perimeter", "peak-electronic-security", "sheffield-residential-security"]
  },
  cctv: {
    slug: "cctv",
    eyebrow: "CCTV installation",
    title: "CCTV designed to capture useful detail",
    metaTitle: "CCTV Installation Chesterfield & Derbyshire | Commercial CCTV Sheffield",
    metaDescription: "Professional CCTV installation in Chesterfield, Sheffield and Derbyshire. Ajax CCTV, Hikvision ColourVu, NVR recording, smart detection, remote viewing and maintenance.",
    intro: "High-resolution CCTV for homes, businesses, yards, industrial sites and rural properties. NOX plans every view around entrances, vehicles, boundaries, working areas and the evidence the customer may actually need.",
    image: "/images/cctv-systems.png",
    imageAlt: "Professional black CCTV camera supplied for a Chesterfield property",
    problemTitle: "More cameras do not automatically create better coverage",
    problemText: "Camera height, lens choice, lighting, overlap, recording quality and playback all matter. We plan the system around the scene each camera must cover, then configure recording, remote viewing and smart detection properly.",
    benefits: ["Ajax CCTV systems", "Hikvision ColourVu and other professional options", "NVR and PoE recording", "High-resolution camera choices", "Full-colour night viewing options", "Smart human and vehicle detection", "Secure remote viewing", "CCTV maintenance and takeovers"],
    suitableFor: ["Homes and driveways", "Retail and showrooms", "Hospitality venues", "Garages and yards", "Warehouses and industrial sites", "Rural and multi-site properties"],
    process: [
      { title: "Coverage survey", text: "We review views, lighting, mounting positions, cable routes, recording needs and remote access." },
      { title: "Camera plan", text: "The quotation explains what each camera is intended to capture rather than simply listing equipment." },
      { title: "Clean installation", text: "Cables are routed carefully, cameras are aligned properly and the recorder is configured for useful playback." },
      { title: "Handover", text: "We demonstrate live view, playback, event search, notifications and secure remote access." }
    ],
    details: [
      { title: "Residential CCTV", text: "Driveways, entrances, side access and outbuildings can be covered with a system that remains straightforward to use." },
      { title: "Commercial CCTV", text: "Larger camera counts, yards, stock areas, vehicle movements and multiple access points can be coordinated through a suitable recorder and network." },
      { title: "Maintenance", text: "Annual service options can include camera cleaning, recorder and hard-drive health checks, playback tests, firmware and remote-viewing checks." },
      { title: "Takeovers and upgrades", text: "Existing coax, IP and networked CCTV can be assessed for repair, remote-access recovery, recorder replacement or phased upgrade." }
    ],
    faq: [
      { q: "Do you install Ajax CCTV and Hikvision?", a: "Yes. NOX works with Ajax CCTV, Hikvision ColourVu and other professional systems, selecting equipment around the site and required coverage." },
      { q: "Can I view the cameras remotely?", a: "Remote viewing can be configured where a suitable internet connection and secure app access are available." },
      { q: "Can you take over an existing CCTV system?", a: "Yes. We can inspect suitable existing systems, test cameras and recording, resolve faults and recommend sensible upgrades." },
      { q: "Do commercial systems need a survey?", a: "A survey is strongly recommended for commercial CCTV so views, lighting, cabling, recorder capacity and storage requirements can be assessed properly." }
    ],
    related: [{ href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" }, { href: "/commercial/cctv", label: "Commercial CCTV" }, { href: "/case-studies", label: "CCTV case studies" }],
    caseStudySlugs: ["chesterfield-scrapyard-cctv", "buxton-industrial-security", "chatsworth-estate-cctv-upgrade"]
  },
  "fire-safety": {
    slug: "fire-safety",
    eyebrow: "Fire alarm installation and servicing",
    title: "Fire safety systems with the property requirements in mind",
    metaTitle: "Fire Alarm Installation & Servicing Chesterfield",
    metaDescription: "Fire alarm installation and fire alarm servicing in Chesterfield, Sheffield and Derbyshire, plus emergency lighting, risk assessments and commercial compliance support.",
    intro: "NOX supports commercial premises, landlords, HMOs and suitable residential properties with fire alarm installation, servicing, system takeovers and coordinated fire safety support.",
    image: "/images/fire-safety.png",
    imageAlt: "Commercial fire alarm equipment for installation and servicing in Chesterfield",
    problemTitle: "Fire systems need clear design, testing, records and ongoing attention",
    problemText: "The correct approach depends on the building, use, occupancy, existing equipment and relevant requirements. NOX keeps installation, servicing and defect reporting clear, with emergency lighting and risk assessment support available where needed.",
    benefits: ["Fire alarm installation", "Fire alarm servicing", "Wireless and wired options", "Existing-system takeovers", "Fault resolution and remedial work", "Emergency lighting support", "Fire risk assessments", "Commercial fire compliance packages"],
    suitableFor: ["Shops and retail", "Offices", "Warehouses and industrial units", "Hospitality", "HMOs and landlords", "Multi-site property portfolios"],
    process: [
      { title: "Assess the building", text: "We review the property type, occupancy, existing records, system condition and the stated project requirement." },
      { title: "Define the work", text: "The quotation separates installation, service, defects, takeover work and optional ongoing support clearly." },
      { title: "Complete and test", text: "Installation or servicing is completed with the relevant standards and property requirements in mind." },
      { title: "Document and support", text: "Records and defect information are issued for the work completed, with recurring servicing available." }
    ],
    details: [
      { title: "Installation", text: "New fire alarm work is designed around the property type, use and the agreed specification rather than a generic package." },
      { title: "Servicing", text: "Existing systems can be inspected and serviced, with device testing, panel checks and defects recorded for the work completed." },
      { title: "Takeovers", text: "NOX can assess suitable existing fire alarm systems and create a clearer route for service, remedial work and future maintenance." },
      { title: "Joined-up compliance support", text: "Commercial customers can coordinate fire alarm servicing, emergency lighting, extinguisher servicing and fire risk assessment support where included in the agreed package." }
    ],
    faq: [
      { q: "Do you service existing fire alarms?", a: "Yes. NOX can inspect and service many existing systems, subject to access, condition, documentation and compatibility." },
      { q: "Can fire servicing be combined with emergency lighting?", a: "Yes. Commercial packages can coordinate fire alarm servicing and emergency lighting, with other agreed fire safety services added where required." },
      { q: "Do you provide service records?", a: "Records, test information and identified defects are issued for the work completed." },
      { q: "Do you make blanket compliance guarantees?", a: "No. Work is described against the agreed scope, relevant standards and property requirements. Any limitations or defects are recorded clearly." }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" }, { href: "/systems/emergency-lighting", label: "Emergency lighting" }, { href: "/systems/fire-risk-assessment", label: "Fire risk assessments" }],
    caseStudySlugs: ["banana-industries-fire-security", "chesterfield-kitchen-showroom"]
  },
  "emergency-lighting": {
    slug: "emergency-lighting",
    eyebrow: "Emergency lighting",
    title: "Emergency lighting installation and testing for commercial premises",
    metaTitle: "Emergency Lighting Testing Derbyshire | Installation & Servicing",
    metaDescription: "Emergency lighting installation, testing and servicing across Chesterfield, Sheffield and Derbyshire for commercial premises, landlords and multi-site portfolios.",
    intro: "NOX installs, tests and services emergency lighting for commercial premises, landlords, HMOs and larger property portfolios, with clear records and defect reporting.",
    image: "/images/emergency-lighting.jpeg",
    imageAlt: "Emergency lighting fitting for installation and testing in Derbyshire",
    problemTitle: "Emergency lighting needs planned testing, clear records and prompt defect attention",
    problemText: "NOX can assess existing fittings, complete agreed tests, identify defects and plan remedial or replacement work. Visits can be coordinated with other fire safety services where useful.",
    benefits: ["Emergency lighting installation", "Routine testing and servicing", "Fitting condition checks", "Battery and operation checks", "Defect reporting", "Remedial and replacement work", "Multi-site coordination", "Combined fire service visits"],
    suitableFor: ["Retail", "Offices", "Warehouses", "Hospitality", "HMOs and landlords", "Property portfolios"],
    process: [
      { title: "Site and asset review", text: "We confirm the premises, number and type of fittings, access requirements and available records." },
      { title: "Testing or installation scope", text: "The planned work and any exclusions are stated clearly before attendance." },
      { title: "Engineer visit", text: "Fittings are installed or tested against the agreed scope, with defects and access limitations recorded." },
      { title: "Records and next steps", text: "Documentation is issued and any repair, replacement or recurring service recommendation is explained." }
    ],
    details: [
      { title: "New installations", text: "Emergency lighting can be installed as part of wider fire safety work or as a focused project." },
      { title: "Existing-system testing", text: "Suitable existing fittings can be inspected and tested, with failed or damaged assets identified." },
      { title: "Annual planning", text: "Commercial customers can place emergency lighting into a coordinated annual servicing schedule." },
      { title: "Portfolio support", text: "Multi-site visits can be grouped to simplify access, records and renewal dates where the package allows." }
    ],
    faq: [
      { q: "Do you test existing emergency lighting?", a: "Yes. NOX can test suitable existing emergency lighting systems and record identified defects." },
      { q: "Can failed fittings be replaced?", a: "Repair or replacement work can be quoted after testing or included in an agreed remedial scope." },
      { q: "Can visits be combined with fire alarm servicing?", a: "Yes, where practical and included in the quotation, visits can be coordinated with fire alarm servicing and other agreed fire safety work." }
    ],
    related: [{ href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" }, { href: "/service-plans/fire-compliance", label: "Fire compliance packages" }, { href: "/systems/fire-safety", label: "Fire alarm systems" }],
    caseStudySlugs: ["banana-industries-fire-security"]
  },
  "fire-risk-assessment": {
    slug: "fire-risk-assessment",
    eyebrow: "Fire risk assessments",
    title: "Fire risk assessment support for commercial and rented properties",
    metaTitle: "Fire Risk Assessment Chesterfield & Derbyshire",
    metaDescription: "Arrange a fire risk assessment in Chesterfield, Sheffield and Derbyshire for commercial premises, landlords, HMOs and property portfolios.",
    intro: "Arrange fire risk assessment support for commercial premises, landlords, HMOs and multi-site properties, with findings and priorities presented clearly.",
    image: "/images/fire-servicing.jpeg",
    imageAlt: "Fire safety inspection and risk assessment support in Chesterfield",
    problemTitle: "A useful assessment should make responsibilities and priorities clearer",
    problemText: "The assessment should reflect the building, occupancy, activities and available fire safety arrangements. NOX coordinates the service and can separately support relevant fire alarm, emergency lighting and remedial work where required.",
    benefits: ["Commercial premises", "Landlords and HMOs", "Hospitality", "Warehouses and industrial units", "Multi-site portfolios", "Clear findings and priorities", "Separate remedial quotations", "Ongoing fire service options"],
    suitableFor: ["Shops", "Offices", "Hospitality", "HMOs", "Industrial premises", "Property portfolios"],
    process: [
      { title: "Confirm the property", text: "We gather the property type, use, occupancy and available documentation before arranging the assessment." },
      { title: "Site assessment", text: "The assessor reviews the premises and the relevant fire safety arrangements within the agreed scope." },
      { title: "Report", text: "Findings, risks and recommended actions are recorded in the assessment documentation." },
      { title: "Support", text: "Where required, NOX can quote separately for relevant fire alarm, emergency lighting or remedial work." }
    ],
    details: [
      { title: "Independent starting point", text: "The assessment helps the responsible person understand the building risks and priorities before deciding what work is required." },
      { title: "Clear separation of scope", text: "Assessment findings and any later installation or remedial quotation remain clearly separated." },
      { title: "Commercial coordination", text: "For business customers, the assessment can sit alongside planned fire alarm and emergency lighting service arrangements." }
    ],
    faq: [
      { q: "Who is a fire risk assessment suitable for?", a: "It is commonly required for commercial premises, landlords, HMOs, hospitality sites and other non-domestic or shared properties." },
      { q: "Does the assessment include remedial work?", a: "No. Any installation, repair or remedial work is quoted separately after the findings are known." },
      { q: "Can NOX help with actions identified in the report?", a: "NOX can support relevant fire alarm, emergency lighting and agreed fire safety work within its service scope." }
    ],
    related: [{ href: "/systems/fire-safety", label: "Fire alarm systems" }, { href: "/systems/emergency-lighting", label: "Emergency lighting" }, { href: "/service-plans/fire-compliance", label: "Fire compliance packages" }],
    caseStudySlugs: ["banana-industries-fire-security"]
  }
}

export const planPages: Record<string, PlanPageData> = {
  "alarm-maintenance": {
    slug: "alarm-maintenance",
    eyebrow: "Alarm maintenance",
    title: "Annual intruder alarm servicing and system health checks",
    metaTitle: "Alarm Maintenance Chesterfield | Annual Intruder Alarm Service",
    metaDescription: "Annual alarm maintenance in Chesterfield, Sheffield and Derbyshire. Engineer servicing, device tests, battery checks, cleaning, firmware updates and service records.",
    intro: "Keep a NOX installation or suitable existing intruder alarm healthy, current and ready to use with planned annual engineer servicing.",
    image: "/images/maintenance.png",
    imageAlt: "NOX engineer completing intruder alarm maintenance in Chesterfield",
    residentialPrice: "£225 per year",
    commercialPrice: "From £295 per year",
    priceNote: "Final commercial pricing depends on system size, access, device count and condition.",
    included: ["Annual engineer service", "Full system health check", "Device testing", "Sensor cleaning", "Battery health checks", "Firmware updates where supported", "Service record or certificate", "Defect and recommendation reporting"],
    suitableFor: ["NOX-installed alarms", "Suitable existing systems", "Homes and landlords", "Retail and offices", "Warehouses and industrial sites", "Commercial portfolios"],
    process: [
      { title: "Confirm the system", text: "We record the panel, approximate device count, site type and any known faults." },
      { title: "Engineer service", text: "The agreed devices and system functions are tested, cleaned and reviewed." },
      { title: "Report", text: "The completed service and any identified defects or recommendations are documented." },
      { title: "Renewal", text: "The next annual service can be scheduled under one clear renewal date." }
    ],
    details: [
      { title: "Residential servicing", text: "A straightforward annual health check for the alarm, devices, batteries, app connection and operating modes." },
      { title: "Commercial servicing", text: "Pricing scales around the panel, device count, site access and operating requirements." },
      { title: "Takeover inspection", text: "Suitable existing systems may require an initial inspection or remedial work before ongoing maintenance begins." }
    ],
    faq: [
      { q: "Can you service an alarm you did not install?", a: "Often yes, subject to the system make, condition, access and compatibility. An initial inspection may be required." },
      { q: "Are replacement batteries and parts included?", a: "Unless specifically stated in the quotation, replacement parts, batteries and remedial work are charged separately." },
      { q: "Can maintenance be combined with monitoring?", a: "Yes. Monitoring and maintenance can be combined within a confirmed annual package." }
    ],
    related: [{ href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }, { href: "/service-plans/total-security", label: "Total Security Package" }, { href: "/systems/intrusion-alarms", label: "New intruder alarms" }]
  },
  "alarm-monitoring": {
    slug: "alarm-monitoring",
    eyebrow: "Professional alarm monitoring",
    title: "Alarm monitoring with keyholder contact and agreed escalation",
    metaTitle: "Alarm Monitoring Derbyshire | Professional Keyholder Contact",
    metaDescription: "Professional alarm monitoring across Chesterfield, Sheffield and Derbyshire, including alarm handling, keyholder contact and agreed escalation procedures.",
    intro: "Add professional alarm handling to a suitable intruder alarm, with keyholder contact, system supervision and visual or image verification where available.",
    image: "/images/monitoring.png",
    imageAlt: "Professional intruder alarm monitoring service for Derbyshire properties",
    residentialPrice: "£595 per year",
    commercialPrice: "From £695 per year",
    priceNote: "Compatibility, signalling equipment and the agreed monitoring setup are confirmed before activation.",
    included: ["Professional alarm monitoring", "Alarm signalling", "Keyholder contact", "System supervision where supported", "Visual or image verification where available", "Agreed escalation procedures", "Monitoring setup and testing", "Annual renewal"],
    suitableFor: ["Homes", "Landlords", "Retail and offices", "Warehouses", "Industrial sites", "Commercial portfolios"],
    process: [
      { title: "Compatibility check", text: "We confirm the alarm, signalling route, keyholders and the monitoring requirement." },
      { title: "Setup", text: "The monitoring account and agreed contacts are configured and checked." },
      { title: "Testing", text: "Signals and agreed procedures are tested before the service is treated as active." },
      { title: "Ongoing review", text: "Keyholder and contact details should be kept current and can be reviewed at service or renewal." }
    ],
    details: [
      { title: "Keyholder contact", text: "When the agreed alarm event is received, the monitoring process follows the confirmed keyholder and escalation instructions." },
      { title: "Verification where available", text: "Compatible systems may support image or visual information that assists with alarm handling." },
      { title: "Clear service boundaries", text: "The written setup confirms the alarm handling, keyholder contacts and agreed escalation procedure without making unsupported response guarantees." }
    ],
    faq: [
      { q: "What happens when an alarm signal is received?", a: "The agreed monitoring process covers professional alarm handling, keyholder contact and the confirmed escalation procedure." },
      { q: "Can an existing alarm be monitored?", a: "Possibly. The system and signalling route must first be checked for compatibility and condition." },
      { q: "Is maintenance included?", a: "Maintenance is separate unless the confirmed package specifically includes it." }
    ],
    related: [{ href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" }, { href: "/service-plans/total-security", label: "Total Security Package" }, { href: "/systems/intrusion-alarms", label: "Intruder alarm installation" }]
  },
  "cctv-maintenance": {
    slug: "cctv-maintenance",
    eyebrow: "CCTV maintenance",
    title: "Planned CCTV servicing for reliable recording and playback",
    metaTitle: "CCTV Maintenance Chesterfield | Camera & Recorder Servicing",
    metaDescription: "Annual CCTV maintenance in Chesterfield, Sheffield and Derbyshire. Camera cleaning, recorder and hard-drive checks, playback tests, firmware and remote-viewing checks.",
    intro: "Keep cameras clean, recording healthy and remote access working with an annual CCTV maintenance visit for NOX installations and suitable existing systems.",
    image: "/images/cctv-systems.png",
    imageAlt: "Professional CCTV camera being maintained in Chesterfield",
    residentialPrice: "£225 per year",
    commercialPrice: "From £295 per year",
    priceNote: "Final commercial pricing depends on camera count, access, recorder configuration and site size.",
    included: ["Annual engineer maintenance", "Camera cleaning", "Recorder health check", "Hard-drive health review", "Playback test", "Firmware updates where supported", "Remote-viewing check", "Service report"],
    suitableFor: ["Home CCTV", "Retail and hospitality", "Showrooms", "Garages and yards", "Industrial CCTV", "Multi-camera commercial sites"],
    process: [
      { title: "System review", text: "We confirm camera count, recorder, access method and any known faults." },
      { title: "Maintenance visit", text: "Cameras, recording, playback and remote access are checked within the agreed scope." },
      { title: "Defect report", text: "Problems with cameras, cabling, storage or remote access are recorded clearly." },
      { title: "Repair or renewal", text: "Any remedial work is quoted separately and the next service date can be planned." }
    ],
    details: [
      { title: "Image quality", text: "Dirty lenses, movement, glare and changed surroundings can reduce the usefulness of an otherwise working camera." },
      { title: "Recording health", text: "Recorder and storage checks help identify issues before footage is needed." },
      { title: "Existing-system takeover", text: "Suitable coax and IP systems can be inspected for service, remote access recovery and sensible upgrades." }
    ],
    faq: [
      { q: "Can you service CCTV installed by another company?", a: "Often yes, subject to access, credentials, system condition and compatibility." },
      { q: "Are replacement hard drives included?", a: "No, unless specifically included in the written quotation. Parts and repair work are normally separate." },
      { q: "Is residential CCTV monitoring included?", a: "Residential CCTV monitoring is not listed as a standard separate product. Any specialist option would need to be specifically confirmed in writing." }
    ],
    related: [{ href: "/systems/cctv", label: "CCTV installation" }, { href: "/service-plans/total-security", label: "Total Security Package" }, { href: "/case-studies", label: "CCTV case studies" }]
  },
  "fire-alarm-servicing": {
    slug: "fire-alarm-servicing",
    eyebrow: "Fire alarm servicing",
    title: "Planned fire alarm servicing with clear records and defects",
    metaTitle: "Fire Alarm Servicing Chesterfield | Commercial Fire Maintenance",
    metaDescription: "Fire alarm servicing in Chesterfield, Sheffield and Derbyshire for commercial premises, landlords and portfolios, with test records and defect reporting.",
    intro: "Routine fire alarm servicing for commercial premises, landlords, HMOs and larger portfolios, with the agreed system checks and findings documented clearly.",
    image: "/images/fire-servicing.jpeg",
    imageAlt: "Engineer servicing a commercial fire alarm system in Chesterfield",
    priceNote: "Pricing is quoted to the property, system type, device quantity, service frequency and access requirements.",
    included: ["Panel and system checks", "Device testing within the agreed scope", "Sounder and function checks", "Logbook and record review where available", "Defect reporting", "Service records", "Remedial quotation where requested", "Planned renewal scheduling"],
    suitableFor: ["Retail", "Offices", "Hospitality", "Warehouses", "HMOs and landlords", "Property portfolios"],
    process: [
      { title: "System information", text: "We gather panel, device, site and existing service information before quotation." },
      { title: "Planned visit", text: "Access, testing and any disruption considerations are agreed in advance." },
      { title: "Service and test", text: "The system is serviced against the agreed scope with relevant requirements in mind." },
      { title: "Records and defects", text: "Completed work, limitations and identified defects are documented." }
    ],
    details: [
      { title: "Existing systems", text: "NOX can service many existing fire alarms, subject to panel access, condition, compatibility and available records." },
      { title: "Remedial work", text: "Defects and recommended actions are separated from the service and quoted clearly where requested." },
      { title: "Combined visits", text: "Fire alarm servicing can be coordinated with emergency lighting and other agreed fire safety work." }
    ],
    faq: [
      { q: "How much does fire alarm servicing cost?", a: "It is quoted to the property, system type, device quantity, service frequency and access requirements." },
      { q: "Can you take over an existing fire alarm?", a: "Yes, subject to an inspection of the system, documentation, access and condition." },
      { q: "Are repairs included?", a: "Repairs, parts and remedial work are separate unless specifically included in the written quotation." }
    ],
    related: [{ href: "/systems/fire-safety", label: "Fire alarm systems" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" }, { href: "/service-plans/fire-compliance", label: "Fire compliance package" }]
  },
  "emergency-lighting-servicing": {
    slug: "emergency-lighting-servicing",
    eyebrow: "Emergency lighting servicing",
    title: "Emergency lighting testing and planned maintenance",
    metaTitle: "Emergency Lighting Servicing Derbyshire | Testing & Records",
    metaDescription: "Emergency lighting servicing and testing across Chesterfield, Sheffield and Derbyshire with fitting checks, test records, defect reporting and remedial quotations.",
    intro: "Planned emergency lighting testing for commercial premises, landlords, HMOs and multi-site properties, with defects and required follow-up recorded clearly.",
    image: "/images/emergency-lighting.jpeg",
    imageAlt: "Emergency lighting testing at a Derbyshire commercial property",
    priceNote: "Pricing is quoted to fitting quantities, site access, required testing and service frequency.",
    included: ["Fitting condition checks", "Functional testing", "Battery operation checks", "Identification of failed fittings", "Test records", "Defect reporting", "Remedial quotations", "Planned renewal scheduling"],
    suitableFor: ["Retail", "Offices", "Hospitality", "Warehouses", "HMOs", "Property portfolios"],
    process: [
      { title: "Asset information", text: "We confirm approximate fitting quantities, site access and available records." },
      { title: "Testing plan", text: "The required visit and testing scope are agreed before attendance." },
      { title: "Engineer service", text: "Fittings are checked and tested within the agreed scope." },
      { title: "Report and remedials", text: "Defects are recorded and any repair or replacement work is quoted separately." }
    ],
    details: [
      { title: "Clear asset records", text: "Consistent records make it easier to see failed fittings, completed remedials and upcoming service dates." },
      { title: "Coordinated attendance", text: "Emergency lighting visits can be grouped with fire alarm service work where practical." },
      { title: "Portfolio servicing", text: "Multi-site schedules can reduce administration and support a clearer annual renewal structure." }
    ],
    faq: [
      { q: "Are replacement fittings included?", a: "Replacement fittings and remedial work are separate unless specifically included in the quotation." },
      { q: "Can you test emergency lighting at several sites?", a: "Yes. Multi-site visits can be coordinated around access and the agreed service schedule." },
      { q: "Can this be combined with fire alarm servicing?", a: "Yes, where practical and confirmed in the package." }
    ],
    related: [{ href: "/systems/emergency-lighting", label: "Emergency lighting installation" }, { href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" }, { href: "/service-plans/fire-compliance", label: "Fire compliance package" }]
  },
  "total-security": {
    slug: "total-security",
    eyebrow: "Total Security Package",
    title: "One annual package for alarm monitoring, servicing and CCTV maintenance",
    metaTitle: "Total Security Package | Alarm Monitoring & CCTV Maintenance",
    metaDescription: "A coordinated annual security package for residential and commercial customers across Chesterfield and Derbyshire, with monitoring, servicing and one renewal date.",
    intro: "Bring the agreed intruder alarm monitoring, alarm maintenance and CCTV maintenance services under one annual arrangement with one point of contact.",
    image: "/images/monitoring.png",
    imageAlt: "Coordinated alarm monitoring and CCTV maintenance package from NOX",
    residentialPrice: "From £795 per year",
    priceNote: "The exact included services, system eligibility and price are confirmed in writing. Commercial packages are quoted to site.",
    included: ["Agreed intruder alarm servicing", "Agreed professional alarm monitoring", "Agreed CCTV maintenance", "Annual system review", "One renewal date", "One point of contact", "Priority support where stated in the agreement", "Discounted labour or preferential repair pricing only where written into the package"],
    suitableFor: ["Homes with alarm and CCTV", "Landlords", "Retail", "Offices", "Commercial premises", "Customers wanting one renewal date"],
    process: [
      { title: "Review the systems", text: "We confirm the alarm, CCTV, monitoring compatibility and current system condition." },
      { title: "Confirm the package", text: "The included services, exclusions, renewal price and any initial takeover work are stated in writing." },
      { title: "Activate and service", text: "Monitoring and maintenance are set up and the annual service schedule is confirmed." },
      { title: "Annual review", text: "Systems, contacts and future support requirements can be reviewed at renewal." }
    ],
    details: [
      { title: "One point of contact", text: "The package reduces separate renewal dates and fragmented support across the agreed security systems." },
      { title: "Clear boundaries", text: "Replacement parts, repairs and specialist services remain excluded unless the written agreement specifically includes them." },
      { title: "Commercial packages", text: "Commercial arrangements are tailored around system size, camera count, monitoring and site access." }
    ],
    faq: [
      { q: "What is included in the £795 package?", a: "It is a starting price. The exact combination of alarm servicing, professional monitoring and CCTV maintenance is confirmed in the written quotation for the property." },
      { q: "Is CCTV monitoring included?", a: "Residential CCTV monitoring is not presented as a standard separate product. Any specialist option must be specifically confirmed in writing." },
      { q: "Are all repairs included?", a: "No. Repairs, replacement equipment and parts are separate unless the agreement specifically states otherwise." }
    ],
    related: [{ href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" }, { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" }, { href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" }]
  },
  "fire-compliance": {
    slug: "fire-compliance",
    eyebrow: "Fire Compliance Package",
    title: "Coordinated fire alarm, emergency lighting and compliance support",
    metaTitle: "Fire Compliance Package Chesterfield | Commercial Annual Servicing",
    metaDescription: "Tailored fire compliance packages across Chesterfield, Sheffield and Derbyshire, coordinating fire alarm servicing, emergency lighting and agreed fire safety services.",
    intro: "Bring agreed fire alarm servicing, emergency lighting, extinguisher servicing and fire risk assessment support into a clearer commercial service arrangement.",
    image: "/images/fire-safety.png",
    imageAlt: "Commercial fire alarm and emergency lighting compliance package",
    priceNote: "Packages are quoted to the property portfolio, system quantities, visit frequency and included services.",
    included: ["Agreed fire alarm servicing", "Agreed emergency lighting servicing", "Fire extinguisher servicing where included", "Fire risk assessment support where included", "Digital service records", "Defect reporting", "One renewal date where agreed", "Coordinated engineer scheduling"],
    suitableFor: ["Retail", "Offices", "Hospitality", "Warehouses", "Landlords and HMOs", "Multi-site portfolios"],
    process: [
      { title: "Asset schedule", text: "We gather the sites, systems, device or fitting quantities, service frequencies and available records." },
      { title: "Package design", text: "The included services, visit schedule, exclusions and annual cost are presented clearly." },
      { title: "Coordinated servicing", text: "Visits are planned to reduce disruption and keep documentation consistent." },
      { title: "Renewal and defects", text: "Outstanding defects, completed remedials and the next annual schedule can be reviewed together." }
    ],
    details: [
      { title: "Single-site support", text: "Smaller commercial premises can combine the key annual fire safety services they actually need." },
      { title: "Portfolio management", text: "Larger customers can coordinate service dates, reporting and one point of communication across several sites." },
      { title: "Transparent scope", text: "The package lists exactly which services are included. Repairs, parts and unlisted work remain separate." }
    ],
    faq: [
      { q: "Is every fire service automatically included?", a: "No. The package only includes the services and frequencies confirmed in the written quotation." },
      { q: "Can several sites share one renewal date?", a: "Yes, where agreed and operationally practical, multi-site servicing can be placed under one coordinated renewal structure." },
      { q: "Are repairs included in the annual price?", a: "Not unless specifically stated. Defects, parts and remedial work are normally quoted separately." }
    ],
    related: [{ href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" }, { href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" }, { href: "/systems/fire-risk-assessment", label: "Fire risk assessment" }]
  }
}
