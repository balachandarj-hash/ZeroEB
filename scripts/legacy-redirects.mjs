import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"

const root = process.cwd()
const areas = JSON.parse(readFileSync(join(root, "src/content/areas.json"), "utf8"))
const posts = JSON.parse(readFileSync(join(root, "src/content/posts.json"), "utf8"))

const exact = {
  "about.html": "/about/",
  "services.html": "/services/",
  "contact.html": "/contact/",
  "solar-quote.html": "/quote/",
  "panel-cleaning.html": "/panel-cleaning/",
  "installation-services.html": "/installation-services/",
  "our-work.html": "/our-work/",
  "blog.html": "/blog/",
  "videos.html": "/videos/",
  "solar-installation-chennai.html": "/solar-installation-chennai/",
  "solar-panel-installation.html": "/solar-installation-chennai/",
  "solar-panel-and-price.html": "/quote/",
}

const areaPrefixes = [
  "solar-panels-for-your-home-in-",
  "solar-panels-and-prices-in-",
  "solar-panels-and-installation-in-",
  "solar-panel-installation-in-",
  "solar-panel-in-",
  "solar-energy-for-your-home-in-",
  "home-solar-panels-in-",
  "home-solar-installation-in-",
  "home-solar-energy-in-",
  "solar-panel-prices-in-",
  "solar-power-installation-in-",
]

function writeRedirect(relativePath, destination) {
  const file = join(root, "public", relativePath)
  mkdirSync(dirname(file), { recursive: true })
  const absolute = `https://zeroeb.com${destination}`
  writeFileSync(
    file,
    `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="canonical" href="${absolute}">
<meta http-equiv="refresh" content="0; url=${destination}">
<title>Redirecting to ZeroEB</title>
<script>location.replace(${JSON.stringify(destination)})</script>
</head>
<body>
<p><a href="${destination}">Continue to ZeroEB</a></p>
</body>
</html>
`,
  )
}

for (const [file, destination] of Object.entries(exact)) writeRedirect(file, destination)
for (const post of posts) writeRedirect(`blog/${post.slug}.html`, `/blog/${post.slug}/`)
for (const area of areas) {
  for (const prefix of areaPrefixes) {
    writeRedirect(`${prefix}${area.slug}.html`, `/areas/${area.slug}/`)
  }
}
