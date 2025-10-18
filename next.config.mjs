/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static HTML for GitHub Pages
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
