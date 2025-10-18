/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'CalculatorDeluxe999'

const nextConfig = {
  // Export estático para GitHub Pages
  output: 'export',
  // Rutas y assets servidos bajo /<repo> en Pages de proyecto
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
