/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { cpus: 1 },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'nox-security.co.uk' }],
        destination: 'https://www.nox-security.co.uk/:path*',
        permanent: true,
      },
      { source: '/service-plans/intruder-maintenance', destination: '/service-plans/alarm-maintenance', permanent: true },
      { source: '/service-plans/intruder-monitoring', destination: '/service-plans/alarm-monitoring', permanent: true },
      { source: '/service-plans/emergency-lighting', destination: '/service-plans/emergency-lighting-servicing', permanent: true },
      { source: '/systems/smart-automation', destination: '/systems/intrusion-alarms', permanent: true },
      { source: '/fire-and-intrusion', destination: '/commercial', permanent: true },
      { source: '/commercial/fire-compliance', destination: '/fire-compliance', permanent: true },
      { source: '/areas', destination: '/areas-we-serve', permanent: true },
      { source: '/why-nox', destination: '/about-us', permanent: true },
    ]
  },
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }]
  },
}

export default nextConfig
