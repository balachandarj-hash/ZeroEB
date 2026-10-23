import type { NextConfig } from "next"

// Project Pages (https://balachandarj-hash.github.io/ZeroEB/) needs this.
// Local dev and a future custom domain at the site root leave it unset.
const basePath = (process.env.PAGES_BASE_PATH || "").replace(/\/$/, "")

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
