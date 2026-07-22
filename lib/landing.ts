export type LocalLandingPage = {
  slug: string
  eyebrow: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  image: string
  imageAlt: string
  location: string
  audience: "Residential" | "Commercial" | "Residential & Commercial"
  serviceType: string
  problemTitle: string
  problemText: string
  included: string[]
  process: { title: string; text: string }[]
  faq: { q: string; a: string }[]
  related: { href: string; label: string }[]
  caseStudySlugs: string[]
  searchKeywords: string[]
}

export const localLandingPages: Record<string, LocalLandingPage> = {
  "cctv-installation-chesterfield": {
    slug: "cctv-installation-chesterfield",
    eyebrow: "CCTV installation Chesterfield",
    title: "Professional CCTV installation for homes and businesses in Chesterfield",
    metaTitle: "CCTV Installation Chesterfield | Residential & Commercial CCTV",
    metaDescription: "Professional CCTV installation in Chesterfield for homes, shops, hospitality, offices and industrial sites, with recording, remote viewing, maintenance and takeover support.",
    intro: "NOX designs CCTV around the property, the areas that matter and the way footage needs to be viewed or recorded. Systems can use Ajax, Hikvision ColourVu or another suitable professional platform following a survey.",
    image: "/images/projects/bottle-thyme-monitor-wide.jpg",
    imageAlt: "Commercial CCTV live-view system installed by NOX in Chesterfield",
    location: "Chesterfield",
    audience: "Residential & Commercial",
    serviceType: "CCTV installation",
    problemTitle: "Useful CCTV starts with coverage, recording and image quality",
    problemText: "Camera count alone does not define a good system. Position, lighting, lens choice, recording capacity, remote access and the property layout all influence whether the footage will be useful when it is needed.",
    included: ["Property-led camera design", "Professional camera installation", "NVR or DVR recording where required", "Remote viewing setup", "Playback and user handover", "Maintenance and takeover options"],
    process: [
      { title: "Survey", text: "We identify entrances, vehicles, boundaries, working areas, blind spots and the recording requirement." },
      { title: "Design", text: "The quotation sets out camera positions, platform, recorder, storage and viewing options." },
      { title: "Installation", text: "Cameras and cabling are installed carefully, configured and tested in realistic conditions." },
      { title: "Handover", text: "Live view, playback, app access and maintenance options are explained clearly." }
    ],
    faq: [
      { q: "What CCTV systems do you install in Chesterfield?", a: "NOX installs professional Ajax, Hikvision ColourVu and other suitable CCTV systems. The platform is selected around the property, image requirement, recording and budget." },
      { q: "Can you upgrade an existing CCTV system?", a: "Often yes. We can inspect suitable analogue, hybrid or IP systems and advise whether repair, recorder replacement, selective camera upgrades or a new system is the sensible route." },
      { q: "Do you provide CCTV maintenance?", a: "Yes. Annual CCTV maintenance can include camera cleaning, image checks, recorder and hard-drive review, playback tests and remote-viewing support." }
    ],
    related: [
      { href: "/systems/cctv", label: "CCTV systems" },
      { href: "/commercial/cctv", label: "Commercial CCTV" },
      { href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" },
      { href: "/areas/chesterfield", label: "Security services in Chesterfield" }
    ],
    caseStudySlugs: ["bottle-and-thyme-commercial-cctv-chesterfield", "chesterfield-scrapyard-cctv", "chesterfield-home-ajax-cctv-intruder"],
    searchKeywords: ["CCTV installation Chesterfield", "CCTV installer Chesterfield", "home CCTV Chesterfield", "commercial CCTV Chesterfield"]
  },
  "intruder-alarm-installation-chesterfield": {
    slug: "intruder-alarm-installation-chesterfield",
    eyebrow: "Intruder alarm installation Chesterfield",
    title: "Intruder alarms designed around your Chesterfield property",
    metaTitle: "Intruder Alarm Installation Chesterfield | Ajax Alarm Systems",
    metaDescription: "Professional intruder alarm installation in Chesterfield with Ajax MotionCam, door protection, keypads, sirens, app control, monitoring and maintenance.",
    intro: "NOX installs modern intruder alarms for family homes, larger properties and businesses across Chesterfield. Every system begins with the access points, routines and risks rather than a fixed equipment kit.",
    image: "/images/projects/chesterfield-home-keypad.jpg",
    imageAlt: "Ajax keypad installed as part of a Chesterfield intruder alarm system",
    location: "Chesterfield",
    audience: "Residential & Commercial",
    serviceType: "Intruder alarm installation",
    problemTitle: "A good alarm needs the right layers of detection and control",
    problemText: "Door protection, internal movement detection, photo verification, external warning devices and user controls should reflect how the property is occupied and secured during the day and night.",
    included: ["Ajax wireless and hybrid options", "MotionCam photo verification where suitable", "DoorProtect and internal detection", "Keypads, tags and app control", "External warning sirens", "Monitoring and annual maintenance options"],
    process: [
      { title: "Property survey", text: "We assess entry routes, vulnerable areas, bedrooms, garages, outbuildings and daily use." },
      { title: "Tailored design", text: "Devices are selected and positioned around the real property requirement." },
      { title: "Clean installation", text: "The system is fitted, tested and configured by the NOX team." },
      { title: "Support", text: "Users, night mode, notifications, monitoring and servicing are explained at handover." }
    ],
    faq: [
      { q: "Do you install Ajax alarms in Chesterfield?", a: "Yes. NOX is an Ajax Authorised Installation Company and uses Ajax as its preferred smart intruder platform while still designing around the property first." },
      { q: "Can the alarm protect garages and outbuildings?", a: "Often yes, subject to distance, construction, signal coverage and the wider system design." },
      { q: "Can I add monitoring later?", a: "Monitoring can be added to a compatible system after the required checks, setup and keyholder details are confirmed." }
    ],
    related: [
      { href: "/systems/intrusion-alarms", label: "Ajax intruder alarms" },
      { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" },
      { href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" },
      { href: "/areas/chesterfield", label: "Chesterfield security systems" }
    ],
    caseStudySlugs: ["chesterfield-home-ajax-cctv-intruder", "peak-electronic-security", "sheffield-residential-security"],
    searchKeywords: ["intruder alarm installation Chesterfield", "house alarm Chesterfield", "wireless alarm Chesterfield", "Ajax alarm Chesterfield"]
  },
  "ajax-alarm-installer-chesterfield": {
    slug: "ajax-alarm-installer-chesterfield",
    eyebrow: "Ajax alarm installer Chesterfield",
    title: "Ajax alarm installation, configuration and aftercare in Chesterfield",
    metaTitle: "Ajax Alarm Installer Chesterfield | Authorised Ajax Installation",
    metaDescription: "Ajax alarm installer in Chesterfield for MotionCam, DoorProtect, KeyPad TouchScreen, sirens, app control, monitoring, maintenance and system upgrades.",
    intro: "Ajax is NOX's preferred residential intruder platform because it supports flexible detection, visual verification, simple user control and future expansion. The equipment is selected around the property rather than sold as a standard kit.",
    image: "/images/2Motioncam.jpg",
    imageAlt: "Ajax MotionCam detectors used in professionally designed alarm systems",
    location: "Chesterfield",
    audience: "Residential",
    serviceType: "Ajax alarm installation",
    problemTitle: "The Ajax platform is strongest when it is designed and configured properly",
    problemText: "Hub choice, device placement, user permissions, night mode, photo verification, sirens and communication paths should be planned as one system and tested before handover.",
    included: ["Ajax hub selection", "MotionCam and MotionProtect", "DoorProtect devices", "KeyPad TouchScreen and KeyPad Plus", "StreetSiren and internal sirens", "App setup, monitoring and maintenance"],
    process: [
      { title: "Understand the property", text: "The survey records entry points, rooms, routines, pets, garages and external areas." },
      { title: "Select the platform", text: "The correct hub, detectors, controls and communication options are chosen." },
      { title: "Configure the system", text: "Users, groups, night mode, notifications and scenarios are tested." },
      { title: "Plan aftercare", text: "Monitoring, annual servicing and future additions can be introduced after handover." }
    ],
    faq: [
      { q: "Is Ajax suitable for ordinary family homes?", a: "Yes. Ajax can be designed for a normal semi-detached or family home as well as larger properties. The system size follows the property and requirement." },
      { q: "What does MotionCam do?", a: "MotionCam combines motion detection with photo verification on compatible systems, allowing authorised users or a monitoring service to receive visual context after selected alarm events." },
      { q: "Can Ajax be expanded later?", a: "Yes, subject to hub capacity, compatibility, signal coverage and the final design. Additional detectors, controls, video devices and automation can be considered later." }
    ],
    related: [
      { href: "/systems/intrusion-alarms", label: "Explore Ajax alarm systems" },
      { href: "/residential", label: "Residential security design" },
      { href: "/service-plans/total-security", label: "Total Security Package" },
      { href: "/case-studies/chesterfield-home-ajax-cctv-intruder", label: "Chesterfield Ajax case study" }
    ],
    caseStudySlugs: ["chesterfield-home-ajax-cctv-intruder", "sheffield-residential-security", "dronfield-timber-perimeter"],
    searchKeywords: ["Ajax alarm installer Chesterfield", "Ajax authorised installer Chesterfield", "Ajax MotionCam Chesterfield", "Ajax security system Derbyshire"]
  },
  "security-systems-chesterfield": {
    slug: "security-systems-chesterfield",
    eyebrow: "Security systems Chesterfield",
    title: "Residential and commercial security systems from one Chesterfield team",
    metaTitle: "Security Systems Chesterfield | Alarms, CCTV, Fire & Maintenance",
    metaDescription: "Security systems in Chesterfield including Ajax alarms, professional CCTV, commercial fire alarms, monitoring, maintenance, takeovers and compliance support.",
    intro: "NOX provides one local route for new alarm, CCTV and commercial fire-system projects, followed by monitoring, maintenance or compliance support where required.",
    image: "/images/projects/bottle-thyme-vehicles.jpg",
    imageAlt: "NOX Fire and Security vehicles outside a Chesterfield commercial project",
    location: "Chesterfield",
    audience: "Residential & Commercial",
    serviceType: "Fire and security systems",
    problemTitle: "Different properties need different combinations of systems",
    problemText: "A home may need an Ajax alarm and driveway CCTV. A business may need CCTV, intruder detection, a fire alarm and emergency lighting. NOX separates the new-system design from the ongoing support package so the scope stays clear.",
    included: ["Residential Ajax alarms", "Residential and commercial CCTV", "Commercial fire alarm systems", "Emergency lighting and fire-risk support", "Monitoring and annual servicing", "Takeovers, repairs and phased upgrades"],
    process: [
      { title: "Choose the route", text: "Residential or commercial requirements are identified first." },
      { title: "Survey the property", text: "The building, existing systems and operational needs are reviewed." },
      { title: "Install and hand over", text: "The agreed systems are fitted, tested and explained." },
      { title: "Add ongoing support", text: "The customer can move into the relevant monitoring, maintenance or compliance package." }
    ],
    faq: [
      { q: "Do you cover both homes and businesses?", a: "Yes. Residential work focuses on intruder alarms, CCTV and smart-home security. Commercial work includes CCTV, intruder alarms, fire alarms, emergency lighting and compliance support." },
      { q: "Can all systems be maintained by NOX?", a: "NOX can maintain its own installations and many suitable existing systems, subject to an initial review, access and parts availability." },
      { q: "Do you provide one annual package?", a: "Eligible services can be coordinated under a Total Security or Fire Compliance package where the written scope confirms what is included." }
    ],
    related: [
      { href: "/residential", label: "Residential security" },
      { href: "/commercial", label: "Commercial Fire & Security" },
      { href: "/service-plans", label: "Service plans" },
      { href: "/case-studies", label: "Real NOX projects" }
    ],
    caseStudySlugs: ["bottle-and-thyme-commercial-cctv-chesterfield", "chesterfield-home-ajax-cctv-intruder", "tan-station-fire-security-brimington"],
    searchKeywords: ["security systems Chesterfield", "security company Chesterfield", "fire and security Chesterfield", "CCTV and alarms Chesterfield"]
  },
  "commercial-cctv-sheffield": {
    slug: "commercial-cctv-sheffield",
    eyebrow: "Commercial CCTV Sheffield",
    title: "Commercial CCTV systems for Sheffield businesses and operational sites",
    metaTitle: "Commercial CCTV Sheffield | Business CCTV Installation & Maintenance",
    metaDescription: "Commercial CCTV installation and maintenance in Sheffield for offices, retail, warehouses, industrial units, yards, hospitality and multi-site businesses.",
    intro: "NOX designs commercial CCTV around entrances, valuable areas, staff use, vehicles, yards and the recording requirement, with remote viewing and annual maintenance available after installation.",
    image: "/images/resent-installation/AC7202A2-6B69-47F4-AD11-55CECD9E6C27.jpeg",
    imageAlt: "Commercial CCTV installation completed by NOX for a Sheffield business",
    location: "Sheffield",
    audience: "Commercial",
    serviceType: "Commercial CCTV",
    problemTitle: "Commercial CCTV must work around the site, staff and operating hours",
    problemText: "Coverage should be planned around real risks and practical review. Camera placement, permissions, storage, playback and remote access need to remain manageable after the installation team leaves.",
    included: ["Commercial camera design", "Internal and external coverage", "NVR recording and storage planning", "Remote viewing", "Playback and user training", "Annual maintenance and takeover support"],
    process: [
      { title: "Site survey", text: "We assess entrances, customer or staff areas, stock, yards, vehicles and existing cabling." },
      { title: "System design", text: "Camera type, positions, recorder, storage and user access are defined." },
      { title: "Installation", text: "The system is installed, configured and tested around the working premises." },
      { title: "Ongoing support", text: "Maintenance, faults, user changes and future expansion can remain with NOX." }
    ],
    faq: [
      { q: "Can CCTV be installed around a working Sheffield business?", a: "Yes. Access, trading hours, staff areas and disruption can be considered during planning and scheduling." },
      { q: "Can you take over an existing CCTV system?", a: "Often yes, subject to recorder access, camera condition, cabling and compatibility. An inspection confirms the sensible route." },
      { q: "Can commercial CCTV be serviced annually?", a: "Yes. Maintenance can cover camera cleaning, image checks, recording, hard-drive health, playback and remote access." }
    ],
    related: [
      { href: "/commercial/cctv", label: "Commercial CCTV systems" },
      { href: "/service-plans/cctv-maintenance", label: "Commercial CCTV maintenance" },
      { href: "/areas/sheffield", label: "Sheffield Fire & Security" },
      { href: "/commercial", label: "Commercial system design" }
    ],
    caseStudySlugs: ["peak-electronic-security", "sheffield-residential-security", "retford-former-bank-cctv"],
    searchKeywords: ["commercial CCTV Sheffield", "business CCTV Sheffield", "CCTV installer Sheffield", "warehouse CCTV Sheffield"]
  },
  "cctv-installation-derbyshire": {
    slug: "cctv-installation-derbyshire",
    eyebrow: "CCTV installation Derbyshire",
    title: "Professional CCTV systems across Derbyshire",
    metaTitle: "CCTV Installation Derbyshire | Home & Commercial CCTV Systems",
    metaDescription: "Professional CCTV installation across Derbyshire for homes, hospitality, retail, offices, yards and industrial sites, with recording, remote viewing and maintenance.",
    intro: "NOX provides residential and commercial CCTV across Derbyshire, combining real project experience with camera design, recording, app access and long-term support.",
    image: "/images/resent-installation/0AED4F55-020E-40A5-8823-5BC499AA2015.png",
    imageAlt: "Professional CCTV camera installed by NOX in Derbyshire",
    location: "Derbyshire",
    audience: "Residential & Commercial",
    serviceType: "CCTV installation",
    problemTitle: "The county includes very different property types and coverage requirements",
    problemText: "A town-centre hospitality venue, a rural home, an industrial yard and a multi-building estate need different camera positions, recording capacities and maintenance arrangements.",
    included: ["Home and commercial CCTV", "Ajax and Hikvision options", "ColourVu and professional night performance", "NVR or hybrid recording", "Remote viewing and playback", "Annual servicing and phased upgrades"],
    process: [
      { title: "Understand the site", text: "The survey records property type, access, coverage priorities and existing equipment." },
      { title: "Select the system", text: "The camera platform, recorder, storage and network requirements are defined." },
      { title: "Install and test", text: "Views, recording and remote access are commissioned around real use." },
      { title: "Maintain", text: "NOX can provide annual servicing and future additions where required." }
    ],
    faq: [
      { q: "Which Derbyshire areas do you cover?", a: "Core areas include Chesterfield, Dronfield, Matlock, Bakewell, Baslow, Buxton, Hope Valley, Hathersage, Darley Dale, Ashover and surrounding locations." },
      { q: "Do you install CCTV on rural properties?", a: "Yes, subject to access, power, network availability, distances and the property survey." },
      { q: "Can a system be delivered in phases?", a: "Yes. Larger sites can be planned so priority areas are completed first and compatible additions follow later." }
    ],
    related: [
      { href: "/systems/cctv", label: "CCTV system design" },
      { href: "/areas/derbyshire", label: "Derbyshire coverage" },
      { href: "/service-plans/cctv-maintenance", label: "CCTV servicing" },
      { href: "/case-studies/chatsworth-estate-cctv-upgrade", label: "Chatsworth Estate CCTV case study" }
    ],
    caseStudySlugs: ["chatsworth-estate-cctv-upgrade", "buxton-industrial-security", "bottle-and-thyme-commercial-cctv-chesterfield"],
    searchKeywords: ["CCTV installation Derbyshire", "CCTV installer Derbyshire", "home CCTV Derbyshire", "commercial CCTV Derbyshire"]
  },
  "alarm-maintenance-chesterfield": {
    slug: "alarm-maintenance-chesterfield",
    eyebrow: "Alarm maintenance Chesterfield",
    title: "Annual alarm servicing for new and traditional systems in Chesterfield",
    metaTitle: "Alarm Maintenance Chesterfield | Annual Intruder Alarm Servicing",
    metaDescription: "Annual alarm maintenance in Chesterfield for Ajax and suitable traditional wired, wireless and hybrid systems, including testing, cleaning, batteries and service records.",
    intro: "NOX services its own alarm installations and many suitable existing systems. Planned maintenance helps identify battery, device, communication and condition issues before they become larger faults.",
    image: "/images/editorial/home-maintenance.jpg",
    imageAlt: "Alarm panels inspected during a NOX maintenance and takeover visit",
    location: "Chesterfield",
    audience: "Residential & Commercial",
    serviceType: "Alarm maintenance",
    problemTitle: "An alarm can appear normal while condition is beginning to deteriorate",
    problemText: "Battery health, device communication, siren operation, user settings and supported firmware should be reviewed periodically rather than waiting for a failure.",
    included: ["Annual engineer service", "System health check", "Device testing", "Sensor cleaning", "Battery review", "Firmware updates where supported", "Service record and defect reporting"],
    process: [
      { title: "System details", text: "We confirm the panel, device count, property type and known faults." },
      { title: "Service visit", text: "The agreed devices and functions are tested and reviewed." },
      { title: "Report", text: "Defects and recommendations are documented clearly." },
      { title: "Renewal", text: "The next service date can be planned under a clear annual renewal." }
    ],
    faq: [
      { q: "Can you service an alarm installed by another company?", a: "Often yes. The make, condition, access and parts availability are reviewed first, and an initial inspection may be required." },
      { q: "Are replacement parts included?", a: "Parts, batteries and repairs are separate unless the written quotation or package specifically includes them." },
      { q: "Can servicing be combined with monitoring?", a: "Yes. Compatible systems can move into monitoring and a wider Total Security Package where the scope is confirmed." }
    ],
    related: [
      { href: "/service-plans/alarm-maintenance", label: "Alarm maintenance plan" },
      { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring" },
      { href: "/service-plans/total-security", label: "Total Security Package" },
      { href: "/areas/chesterfield", label: "Chesterfield coverage" }
    ],
    caseStudySlugs: ["chesterfield-home-ajax-cctv-intruder", "peak-electronic-security"],
    searchKeywords: ["alarm maintenance Chesterfield", "alarm service Chesterfield", "intruder alarm servicing Chesterfield", "Ajax alarm maintenance Chesterfield"]
  },
  "alarm-monitoring-derbyshire": {
    slug: "alarm-monitoring-derbyshire",
    eyebrow: "Alarm monitoring Derbyshire",
    title: "Professional alarm monitoring and keyholder contact across Derbyshire",
    metaTitle: "Alarm Monitoring Derbyshire | Professional Alarm Handling",
    metaDescription: "Professional alarm monitoring across Derbyshire with alarm handling, keyholder contact, available image verification and agreed escalation procedures.",
    intro: "NOX can connect suitable residential and commercial intruder alarms to professional monitoring with keyholder contact and agreed escalation procedures.",
    image: "/images/editorial/home-monitoring.jpg",
    imageAlt: "NOX installed security equipment supporting professional alarm monitoring",
    location: "Derbyshire",
    audience: "Residential & Commercial",
    serviceType: "Alarm monitoring",
    problemTitle: "Monitoring should be set up around the system and the people who need to be contacted",
    problemText: "Compatibility, signalling, keyholders, user details and the agreed procedure are checked before the service is activated. Visual or image verification is used where the selected system supports it.",
    included: ["Professional alarm handling", "Keyholder contact", "System supervision where supported", "Image or visual verification where available", "Agreed escalation procedures", "Setup, testing and annual renewal"],
    process: [
      { title: "Compatibility check", text: "The alarm, signalling route and monitoring requirement are reviewed." },
      { title: "Keyholder setup", text: "The agreed contacts and instructions are confirmed." },
      { title: "Signal testing", text: "Signals and procedures are tested before activation." },
      { title: "Ongoing review", text: "Contact details and system condition can be reviewed at service and renewal." }
    ],
    faq: [
      { q: "Can an existing alarm be monitored?", a: "Possibly. Compatibility, signalling and system condition must be checked first." },
      { q: "Does monitoring include maintenance?", a: "Maintenance is separate unless a confirmed package includes both services." },
      { q: "What happens when an alarm signal is received?", a: "The professional monitoring process follows the confirmed keyholder and agreed escalation instructions." }
    ],
    related: [
      { href: "/service-plans/alarm-monitoring", label: "Alarm monitoring plan" },
      { href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" },
      { href: "/systems/intrusion-alarms", label: "Intruder alarm systems" },
      { href: "/areas/derbyshire", label: "Derbyshire security services" }
    ],
    caseStudySlugs: ["chesterfield-home-ajax-cctv-intruder", "dronfield-timber-perimeter"],
    searchKeywords: ["alarm monitoring Derbyshire", "monitored alarm Derbyshire", "professional alarm monitoring", "keyholder alarm monitoring"]
  },
  "fire-alarm-installation-chesterfield": {
    slug: "fire-alarm-installation-chesterfield",
    eyebrow: "Fire alarm installation Chesterfield",
    title: "Commercial fire alarm systems designed around the Chesterfield premises",
    metaTitle: "Fire Alarm Installation Chesterfield | Commercial Fire Systems",
    metaDescription: "Commercial fire alarm installation in Chesterfield using Ajax EN54 and suitable traditional systems, with servicing, emergency lighting and compliance packages.",
    intro: "NOX installs commercial fire alarm systems for shops, hospitality, offices, landlords, HMOs, industrial premises and other suitable buildings, with ongoing servicing planned from the start.",
    image: "/images/projects/tan-station-fire-first-fix.jpg",
    imageAlt: "Fire alarm first-fix work completed by NOX at a Chesterfield commercial project",
    location: "Chesterfield",
    audience: "Commercial",
    serviceType: "Fire alarm installation",
    problemTitle: "The fire system must reflect the building, use and available fire-safety information",
    problemText: "Device type, zoning, manual activation, warning coverage, panel position, records and the service route are considered together rather than treating installation and maintenance as separate afterthoughts.",
    included: ["Commercial fire alarm design", "Ajax EN54 or suitable traditional systems", "Fire Hub and detection devices where appropriate", "Manual call points and warning devices", "Commissioning and handover", "Servicing and compliance-package options"],
    process: [
      { title: "Information review", text: "Available fire-risk information, building use and existing records are reviewed." },
      { title: "System design", text: "The panel, detection, manual call points, warning devices and zones are specified." },
      { title: "Installation and commissioning", text: "The system is installed, tested and handed over with clear records." },
      { title: "Ongoing servicing", text: "Routine inspection, testing, defect reporting and emergency-lighting support can follow." }
    ],
    faq: [
      { q: "What type of commercial fire alarms do you install?", a: "NOX supports Ajax EN54 and suitable conventional, addressable or established wireless commercial fire systems depending on the premises and project requirements." },
      { q: "Can servicing be included from the start?", a: "Yes. The installation can be followed by a clear annual servicing or Fire Compliance Package quotation." },
      { q: "Do you also provide emergency lighting?", a: "Yes. Emergency-lighting installation and testing can be coordinated as a separate confirmed scope." }
    ],
    related: [
      { href: "/commercial/fire-compliance", label: "Commercial fire alarm systems" },
      { href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" },
      { href: "/service-plans/fire-compliance", label: "Fire Compliance Package" },
      { href: "/systems/emergency-lighting", label: "Emergency lighting" }
    ],
    caseStudySlugs: ["tan-station-fire-security-brimington", "banana-industries-fire-security"],
    searchKeywords: ["fire alarm installation Chesterfield", "commercial fire alarms Chesterfield", "Ajax EN54 Chesterfield", "fire alarm company Chesterfield"]
  },
  "fire-alarm-servicing-chesterfield": {
    slug: "fire-alarm-servicing-chesterfield",
    eyebrow: "Fire alarm servicing Chesterfield",
    title: "Planned commercial fire alarm servicing in Chesterfield",
    metaTitle: "Fire Alarm Servicing Chesterfield | Commercial Fire Maintenance",
    metaDescription: "Commercial fire alarm servicing in Chesterfield for Ajax EN54 and suitable conventional, addressable and wireless systems, with records and defect reporting.",
    intro: "NOX provides planned fire alarm servicing for modern Ajax EN54 systems and suitable traditional commercial systems, with clear records, identified defects and separately quoted remedial work.",
    image: "/images/FireAlaramServicingImage.jpeg",
    imageAlt: "Commercial fire alarm equipment prepared for servicing by NOX",
    location: "Chesterfield",
    audience: "Commercial",
    serviceType: "Fire alarm servicing",
    problemTitle: "Servicing keeps the condition, records and next actions visible",
    problemText: "Routine testing helps identify device, panel, battery, warning or documentation issues and gives the responsible person a clearer route for remedial work and the next planned visit.",
    included: ["Planned engineer visits", "Panel and device testing", "Warning-device checks", "Battery and fault review", "Service records", "Defect and recommendation reporting", "Takeover inspections where required"],
    process: [
      { title: "System review", text: "The panel, approximate device count, records and known issues are confirmed." },
      { title: "Service visit", text: "The agreed system functions and devices are tested and recorded." },
      { title: "Defect reporting", text: "Identified issues and recommendations are set out clearly." },
      { title: "Renewal planning", text: "The next visit and any coordinated emergency-lighting work can be scheduled." }
    ],
    faq: [
      { q: "Can you service a fire alarm you did not install?", a: "Often yes, subject to system type, condition, access, records and parts availability. An initial takeover inspection may be needed." },
      { q: "Are repairs included in servicing?", a: "Repairs, parts and remedial work are separate unless the written agreement states otherwise." },
      { q: "Can fire alarm and emergency-lighting visits be coordinated?", a: "Yes. Suitable services can be planned together under a confirmed Fire Compliance Package scope." }
    ],
    related: [
      { href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing plan" },
      { href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" },
      { href: "/service-plans/fire-compliance", label: "Fire Compliance Package" },
      { href: "/commercial/fire-compliance", label: "New fire alarm installation" }
    ],
    caseStudySlugs: ["tan-station-fire-security-brimington", "banana-industries-fire-security"],
    searchKeywords: ["fire alarm servicing Chesterfield", "fire alarm maintenance Chesterfield", "commercial fire alarm service", "fire compliance Chesterfield"]
  },
  "emergency-lighting-testing-derbyshire": {
    slug: "emergency-lighting-testing-derbyshire",
    eyebrow: "Emergency lighting testing Derbyshire",
    title: "Emergency lighting installation and testing across Derbyshire",
    metaTitle: "Emergency Lighting Testing Derbyshire | Installation & Servicing",
    metaDescription: "Emergency lighting installation, testing and servicing across Derbyshire for commercial premises, landlords, HMOs, hospitality and multi-site properties.",
    intro: "NOX supports emergency-lighting installation and planned testing across Derbyshire, with routes into fire alarm servicing and a coordinated Fire Compliance Package.",
    image: "/images/EmergencyLighting.jpeg",
    imageAlt: "Emergency lighting fitting for commercial installation and testing",
    location: "Derbyshire",
    audience: "Commercial",
    serviceType: "Emergency lighting testing",
    problemTitle: "Emergency lighting should be maintained as part of the wider fire-safety arrangement",
    problemText: "Fitting condition, operation, records, access and any identified defects should remain visible rather than being left until a failure or property change exposes a problem.",
    included: ["Emergency-lighting installation", "Planned functional testing", "Fitting and battery review", "Service records", "Defect reporting", "Coordination with fire alarm servicing"],
    process: [
      { title: "Site information", text: "The property type, fitting quantity, access and available records are confirmed." },
      { title: "Testing or installation", text: "The agreed work is completed and documented." },
      { title: "Defect review", text: "Failed or damaged fittings and recommendations are identified." },
      { title: "Ongoing package", text: "The next visit can be coordinated with other confirmed fire-safety services." }
    ],
    faq: [
      { q: "Who needs emergency lighting testing?", a: "It is commonly relevant to commercial premises, shared buildings, landlords, HMOs, hospitality sites and other properties where emergency escape lighting is provided." },
      { q: "Can you replace failed fittings?", a: "Yes, where agreed. Replacement fittings and remedial work are quoted separately unless included in the written scope." },
      { q: "Can this be combined with fire alarm servicing?", a: "Yes. The visits can be coordinated under a confirmed Fire Compliance Package where appropriate." }
    ],
    related: [
      { href: "/systems/emergency-lighting", label: "Emergency lighting systems" },
      { href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting servicing" },
      { href: "/service-plans/fire-compliance", label: "Fire Compliance Package" },
      { href: "/areas/derbyshire", label: "Derbyshire coverage" }
    ],
    caseStudySlugs: ["tan-station-fire-security-brimington", "banana-industries-fire-security"],
    searchKeywords: ["emergency lighting testing Derbyshire", "emergency lighting service Derbyshire", "commercial emergency lighting", "emergency lighting inspection"]
  },
  "fire-risk-assessment-chesterfield": {
    slug: "fire-risk-assessment-chesterfield",
    eyebrow: "Fire risk assessment Chesterfield",
    title: "Fire risk assessment support for Chesterfield businesses and landlords",
    metaTitle: "Fire Risk Assessment Chesterfield | Business, Landlord & HMO Support",
    metaDescription: "Fire risk assessment support in Chesterfield for commercial premises, landlords, HMOs and hospitality, with follow-on fire alarm and emergency-lighting services.",
    intro: "NOX can coordinate a suitable fire risk assessment route and then support relevant fire alarm, emergency-lighting or agreed remedial work as a separate quotation.",
    image: "/images/projects/tan-station-exterior.jpg",
    imageAlt: "Commercial premises in Chesterfield requiring coordinated fire-safety planning",
    location: "Chesterfield",
    audience: "Commercial",
    serviceType: "Fire risk assessment",
    problemTitle: "The assessment should inform the work rather than being treated as a sales document",
    problemText: "The responsible person needs a clear view of the building risks and priorities before deciding which installation, repair or maintenance work is required.",
    included: ["Suitable assessment route", "Building and occupancy review", "Clear findings and priorities", "Separate remedial quotations", "Fire alarm support", "Emergency-lighting support"],
    process: [
      { title: "Confirm the property", text: "The building use, occupancy, known changes and existing information are reviewed." },
      { title: "Assessment route", text: "A suitable assessment is arranged for the property and scope." },
      { title: "Review the findings", text: "The responsible person receives clear priorities and actions." },
      { title: "Separate remedial work", text: "Relevant fire alarm or emergency-lighting work can then be quoted separately." }
    ],
    faq: [
      { q: "Who is a fire risk assessment suitable for?", a: "It is commonly relevant to commercial premises, landlords, HMOs, hospitality sites and other non-domestic or shared properties." },
      { q: "Does the assessment include installation work?", a: "No. Any installation, repair or remedial work is quoted separately after the findings are known." },
      { q: "Can NOX help with actions in the report?", a: "NOX can support relevant fire alarm, emergency-lighting and agreed fire-safety work within its service scope." }
    ],
    related: [
      { href: "/systems/fire-risk-assessment", label: "Fire risk assessment service" },
      { href: "/commercial/fire-compliance", label: "Commercial fire systems" },
      { href: "/systems/emergency-lighting", label: "Emergency lighting" },
      { href: "/areas/chesterfield", label: "Chesterfield coverage" }
    ],
    caseStudySlugs: ["tan-station-fire-security-brimington", "banana-industries-fire-security"],
    searchKeywords: ["fire risk assessment Chesterfield", "commercial fire risk assessment", "landlord fire risk assessment Chesterfield", "HMO fire risk assessment Chesterfield"]
  },
  "security-system-takeover": {
    slug: "security-system-takeover",
    eyebrow: "Security-system takeover",
    title: "Takeover, repair and upgrade routes for existing alarm and CCTV systems",
    metaTitle: "Security System Takeover | Alarm & CCTV Repairs and Upgrades",
    metaDescription: "Security-system takeover inspections for existing alarms and CCTV, including access recovery, faults, maintenance, recorder upgrades and phased replacement.",
    intro: "An existing alarm or CCTV system does not always need to be replaced. NOX can inspect suitable systems, identify faults and access issues, and recommend servicing, repair, selective upgrades or replacement only where it makes sense.",
    image: "/images/revisions/intruder-maintenance-system-takeover.jpg",
    imageAlt: "Existing alarm and CCTV equipment reviewed during a NOX takeover inspection",
    location: "Chesterfield, Sheffield & Derbyshire",
    audience: "Residential & Commercial",
    serviceType: "Security-system takeover",
    problemTitle: "A takeover needs evidence about condition, access and compatibility",
    problemText: "The system make, age, programming access, device condition, cabling, recorder, app accounts and parts availability all influence whether maintenance or repair is practical.",
    included: ["Initial system inspection", "Panel or recorder review", "Known-fault assessment", "Access and compatibility checks", "Repair or upgrade recommendations", "Ongoing maintenance options"],
    process: [
      { title: "Send system details", text: "Share the make, approximate device or camera count, known faults and any available access information." },
      { title: "Inspection", text: "The system condition, access and compatibility are checked." },
      { title: "Clear options", text: "NOX explains whether service, repair, partial upgrade or replacement is sensible." },
      { title: "Ongoing support", text: "A maintainable system can move into the relevant annual plan." }
    ],
    faq: [
      { q: "Can you take over an alarm installed by another company?", a: "Often yes, subject to the make, condition, access, compatibility and parts availability." },
      { q: "Can old CCTV cameras work with a new recorder?", a: "Sometimes. The camera technology, resolution, cabling and recorder compatibility need to be checked first." },
      { q: "Will you recommend replacement automatically?", a: "No. The aim is to identify the most sensible route based on condition, supportability, faults and the customer's requirement." }
    ],
    related: [
      { href: "/service-plans/alarm-maintenance", label: "Alarm maintenance" },
      { href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" },
      { href: "/blog/taking-over-an-existing-security-system", label: "Read the takeover guide" },
      { href: "/get-quote#quote-form", label: "Request a takeover inspection" }
    ],
    caseStudySlugs: ["retford-former-bank-cctv", "chatsworth-estate-cctv-upgrade", "chesterfield-kitchen-showroom"],
    searchKeywords: ["security system takeover", "alarm takeover service", "CCTV takeover", "existing alarm repair"]
  },
  "commercial-fire-security-systems": {
    slug: "commercial-fire-security-systems",
    eyebrow: "Commercial Fire & Security systems",
    title: "Joined-up Fire, CCTV and intruder support for commercial premises",
    metaTitle: "Commercial Fire & Security Systems | Installation & Service Plans",
    metaDescription: "Commercial fire alarms, CCTV, intruder systems, emergency lighting, monitoring, maintenance and compliance packages across Chesterfield, Sheffield and Derbyshire.",
    intro: "NOX supports commercial premises from new fire, CCTV and intruder installations through to ongoing servicing, monitoring, emergency lighting and coordinated compliance packages.",
    image: "/images/projects/tan-station-exterior.jpg",
    imageAlt: "Commercial Fire and Security project completed by NOX in Brimington",
    location: "Chesterfield, Sheffield & Derbyshire",
    audience: "Commercial",
    serviceType: "Commercial Fire and Security systems",
    problemTitle: "Commercial customers need a clear route from installation into ongoing support",
    problemText: "The systems may be different, but the customer benefits when surveys, records, service dates, identified defects and future upgrades remain connected through one local team.",
    included: ["Commercial fire alarm installation", "Commercial CCTV", "Commercial intruder alarms", "Emergency lighting", "Fire alarm and CCTV servicing", "Monitoring and compliance packages"],
    process: [
      { title: "Site survey", text: "The premises, existing systems, occupancy and operational requirement are reviewed." },
      { title: "System design", text: "The new installation or takeover scope is set out clearly by system." },
      { title: "Installation and handover", text: "The agreed systems are commissioned and users are supported." },
      { title: "Annual support", text: "Eligible services can move into focused plans or a coordinated package." }
    ],
    faq: [
      { q: "Can NOX manage more than one system at the same site?", a: "Yes. Fire, CCTV, intruder and emergency-lighting services can be coordinated while each system's scope remains clear." },
      { q: "Do you support multi-site businesses?", a: "Yes, for suitable projects. Engineer visits, records and renewal planning can be coordinated across a portfolio." },
      { q: "Are compliance packages fixed price?", a: "Pricing is confirmed to the site, system quantities and included services. Standard prices are shown only where they have been approved." }
    ],
    related: [
      { href: "/commercial", label: "Commercial system design" },
      { href: "/commercial/fire-compliance", label: "Commercial fire systems" },
      { href: "/service-plans/fire-compliance", label: "Fire Compliance Package" },
      { href: "/service-plans", label: "All service plans" }
    ],
    caseStudySlugs: ["bottle-and-thyme-commercial-cctv-chesterfield", "tan-station-fire-security-brimington", "retford-former-bank-cctv", "buxton-industrial-security"],
    searchKeywords: ["commercial fire and security systems", "commercial security company", "fire CCTV intruder systems", "commercial compliance packages"]
  },
  "fire-alarm-repairs-takeovers": {
    slug: "fire-alarm-repairs-takeovers",
    eyebrow: "Fire alarm repairs and takeovers",
    title: "Assessment, repair and takeover support for existing fire alarm systems",
    metaTitle: "Fire Alarm Repairs & Takeovers Chesterfield | NOX",
    metaDescription: "Fire alarm repair and takeover assessments across Chesterfield, Sheffield and Derbyshire, including faults, access, records, parts availability, remedials and ongoing maintenance.",
    intro: "NOX can assess suitable existing fire alarm systems where the history is unclear, faults are present or the customer wants to move maintenance from another provider. Acceptance depends on system condition, access, records, compatibility and parts availability.",
    image: "/images/revisions/telesis-en54-fire-hub-alarm.jpg",
    imageAlt: "Fire alarm control hub tested during a repair and takeover assessment",
    location: "Chesterfield, Sheffield & Derbyshire",
    audience: "Commercial",
    serviceType: "Fire alarm repairs and takeovers",
    problemTitle: "A takeover starts with understanding what is installed and what can be supported safely",
    problemText: "Panel make, programming access, device types, zone information, service history, known faults, disabled equipment, documentation and parts availability all affect the route. NOX will separate the initial assessment, required remedials and future service agreement clearly.",
    included: ["Existing-system assessment", "Panel, zones and fault-history review", "Access and documentation checks", "Device and warning-circuit assessment", "Repair or replacement options", "Remedial quotation", "Maintenance takeover route", "Emergency-lighting coordination where relevant"],
    process: [
      { title: "Send available information", text: "Share the panel make, property type, approximate devices, known faults, service history and photographs where available." },
      { title: "Takeover assessment", text: "An engineer reviews access, condition, records, faults and whether the system is supportable." },
      { title: "Repair or remedial plan", text: "Immediate faults, missing information, unsupported equipment and recommended work are explained separately." },
      { title: "Ongoing maintenance", text: "A suitable system can move into a planned service schedule once the accepted condition and scope are clear." }
    ],
    faq: [
      { q: "Can NOX take over any fire alarm system?", a: "No company can responsibly accept every system without assessment. Condition, access, documentation, compatibility and parts availability must be reviewed first." },
      { q: "What if the engineer code is missing?", a: "The available access and manufacturer route need to be checked. In some cases access can be recovered; in others a panel or system change may be required." },
      { q: "Are fire alarm repairs included in a service?", a: "Testing and servicing identify defects. Parts, additional labour and remedial work are normally quoted separately unless the written agreement says otherwise." },
      { q: "Can you repair a system that shows intermittent faults?", a: "NOX can investigate the reported condition, event history, circuits and devices, but the required time and parts depend on the fault and system supportability." },
      { q: "Can emergency lighting be reviewed at the same visit?", a: "It can be coordinated where the quotation includes both services and the site information is available." }
    ],
    related: [
      { href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" },
      { href: "/systems/fire-safety", label: "Fire alarm installation" },
      { href: "/service-plans/fire-compliance", label: "Fire Compliance Plans" },
      { href: "/blog/can-a-new-company-take-over-an-existing-fire-alarm", label: "Read the fire-alarm takeover guide" }
    ],
    caseStudySlugs: ["telesis-hitachi-fire-intruder-system", "tan-station-fire-security-brimington", "banana-industries-fire-security"],
    searchKeywords: ["fire alarm takeover", "fire alarm repair Chesterfield", "fire alarm faults", "existing fire alarm maintenance"]
  },
  "fire-extinguisher-servicing": {
    slug: "fire-extinguisher-servicing",
    eyebrow: "Fire extinguisher servicing",
    title: "Fire extinguisher servicing coordinated with wider fire-safety support",
    metaTitle: "Fire Extinguisher Servicing Chesterfield & Derbyshire | NOX",
    metaDescription: "Fire extinguisher servicing for commercial premises across Chesterfield, Sheffield and Derbyshire, with asset records, defect reporting and coordinated fire-compliance planning.",
    intro: "NOX can coordinate fire extinguisher servicing as a focused requirement or within a wider fire-compliance arrangement. The service scope, asset quantities, premises and any replacement or remedial requirements are confirmed before attendance.",
    image: "/images/fire-servicing.jpeg",
    imageAlt: "Engineer carrying out commercial fire extinguisher servicing",
    location: "Chesterfield, Sheffield & Derbyshire",
    audience: "Commercial",
    serviceType: "Fire extinguisher servicing",
    problemTitle: "Extinguisher servicing needs accurate asset information and clear responsibility for replacements",
    problemText: "The number, type, location, condition and history of extinguishers affect the visit. Replacement equipment, missing assets, signage or other remedials should be reported and priced clearly rather than hidden inside a vague annual package.",
    included: ["Asset quantity confirmation", "Inspection and service of agreed extinguishers", "Condition and location checks", "Service labels and records", "Defect and replacement reporting", "Remedial quotation where required", "Single-site or portfolio planning", "Coordination with other fire services where agreed"],
    process: [
      { title: "Asset information", text: "Provide the site, approximate extinguisher quantities and any available service records." },
      { title: "Confirmed scope", text: "The visit, assets, exclusions and treatment of replacements are agreed in writing." },
      { title: "Service attendance", text: "The agreed extinguishers are inspected and serviced, with failed or missing assets recorded." },
      { title: "Records and next date", text: "Documentation, identified remedials and the next planned service date are provided clearly." }
    ],
    faq: [
      { q: "Can extinguisher servicing be combined with fire alarm servicing?", a: "Yes, where the package and engineer scheduling are confirmed in advance." },
      { q: "Are replacement extinguishers included?", a: "Not automatically. Replacement equipment is normally quoted separately unless specifically included in the written scope." },
      { q: "Can you service extinguishers across several sites?", a: "Yes, suitable multi-site visits can be coordinated around access, asset information and the agreed renewal schedule." },
      { q: "Do you provide a record after servicing?", a: "Yes, the agreed service should leave clear asset and defect information for the responsible person." }
    ],
    related: [
      { href: "/service-plans/fire-compliance", label: "Fire Compliance Plans" },
      { href: "/service-plans/fire-alarm-servicing", label: "Fire alarm servicing" },
      { href: "/service-plans/emergency-lighting-servicing", label: "Emergency lighting testing" },
      { href: "/systems/fire-risk-assessment", label: "Fire risk assessments" }
    ],
    caseStudySlugs: ["telesis-hitachi-fire-intruder-system", "tan-station-fire-security-brimington"],
    searchKeywords: ["fire extinguisher servicing Chesterfield", "commercial extinguisher servicing", "fire compliance servicing"]
  },
  "repairs-upgrades": {
    slug: "repairs-upgrades",
    eyebrow: "Fire and security repairs and upgrades",
    title: "Fault assessment, repairs and sensible upgrades for existing systems",
    metaTitle: "Alarm, CCTV & Fire System Repairs and Upgrades | NOX",
    metaDescription: "Assessment, repairs and upgrades for suitable alarm, CCTV and fire systems across Chesterfield, Sheffield and Derbyshire, including faults, access, recorder upgrades and phased replacement.",
    intro: "NOX can investigate suitable alarm, CCTV and fire-system faults, recover practical access where possible and explain whether repair, selective upgrade or replacement is the sensible route. Existing equipment is not replaced simply because another company installed it.",
    image: "/images/revisions/nox-engineer-cctv-wiring.jpg",
    imageAlt: "NOX engineer repairing and upgrading CCTV cabling and equipment",
    location: "Chesterfield, Sheffield & Derbyshire",
    audience: "Residential & Commercial",
    serviceType: "Security and fire system repairs and upgrades",
    problemTitle: "The correct repair route depends on fault evidence, access and parts support",
    problemText: "Intermittent faults, failed batteries, damaged devices, lost app access, recorder problems, storage issues and unsupported equipment all require a different approach. An initial inspection prevents unnecessary replacement and unrealistic promises.",
    included: ["Fault and event-history review", "Panel or recorder assessment", "Device, camera and communication checks", "Access and account review", "Repair feasibility", "Selective equipment upgrades", "Phased replacement planning", "Maintenance options after repair"],
    process: [
      { title: "Describe the fault", text: "Send the system make, symptoms, photographs, recent changes and any available access or records." },
      { title: "Engineer assessment", text: "The condition, fault evidence, access, cabling and compatibility are inspected." },
      { title: "Clear recommendation", text: "Repair, partial upgrade and replacement options are separated with the reasons for each route." },
      { title: "Future support", text: "Once stable and supportable, the system can move into the relevant servicing or maintenance plan." }
    ],
    faq: [
      { q: "Do you repair systems installed by another company?", a: "Often yes, subject to make, condition, access, compatibility and parts availability." },
      { q: "Can an old CCTV recorder be upgraded without replacing every camera?", a: "Sometimes. Camera technology, cabling, resolution and recorder compatibility must be checked first." },
      { q: "Can you fix lost app access?", a: "The account ownership, installer access, platform and device condition determine whether access can be restored or reconfigured." },
      { q: "Will you always recommend a complete replacement?", a: "No. NOX explains what can be retained and where repair or partial upgrade provides a reliable route." },
      { q: "Can repair work be followed by annual maintenance?", a: "Yes, where the system is supportable and the accepted condition is clear after remedial work." }
    ],
    related: [
      { href: "/services/security-system-takeover", label: "Security system takeovers" },
      { href: "/service-plans/alarm-maintenance", label: "Intruder alarm servicing" },
      { href: "/service-plans/cctv-maintenance", label: "CCTV maintenance" },
      { href: "/services/fire-alarm-repairs-takeovers", label: "Fire alarm repairs and takeovers" }
    ],
    caseStudySlugs: ["retford-former-bank-cctv", "chatsworth-estate-cctv-upgrade", "chesterfield-kitchen-showroom"],
    searchKeywords: ["alarm repairs Chesterfield", "CCTV repairs Chesterfield", "security system upgrades", "fire alarm repairs"]
  }

}

export const landingPageList = Object.values(localLandingPages)
