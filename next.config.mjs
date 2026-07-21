/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { cpus: 1 },
  async redirects() {
    return [
      { source: '/service-plans/intruder-maintenance', destination: '/service-plans/alarm-maintenance', permanent: true },
      { source: '/service-plans/intruder-monitoring', destination: '/service-plans/alarm-monitoring', permanent: true },
      { source: '/service-plans/emergency-lighting', destination: '/service-plans/emergency-lighting-servicing', permanent: true },
      { source: '/systems/smart-automation', destination: '/systems/intrusion-alarms', permanent: true },
      { source: '/fire-and-intrusion', destination: '/commercial', permanent: true },
      { source: '/commercial/fire-compliance', destination: '/fire-compliance', permanent: true },
      { source: '/areas', destination: '/areas-we-serve', permanent: true },
      { source: '/why-nox', destination: '/about-us', permanent: true }
    ]
  }
}

export default nextConfig
