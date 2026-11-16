import { appendFileSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const postsPath = join(root, "src/content/posts.json")
const queuePath = join(root, "src/content/post-queue.json")

function todayLabel() {
  if (process.env.POST_DATE) return process.env.POST_DATE.trim()
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(new Date())
  const value = (type) => parts.find((part) => part.type === type).value
  return `${value("day")} ${value("month")} ${value("year")}`
}

function output(key, value) {
  const file = process.env.GITHUB_OUTPUT
  if (!file) return
  appendFileSync(file, `${key}=${value}\n`)
}

const date = todayLabel()
const posts = JSON.parse(readFileSync(postsPath, "utf8"))
const queue = JSON.parse(readFileSync(queuePath, "utf8"))

if (posts.some((post) => post.date === date)) {
  console.log(`A post for ${date} is already published.`)
  output("added", "false")
  process.exit(0)
}

const used = new Set(posts.map((post) => post.slug))
const next = queue.find((post) => post && post.slug && !used.has(post.slug))
if (!next) {
  console.log(`No queued post is left for ${date}.`)
  output("added", "false")
  process.exit(0)
}

const words = next.blocks
  .filter((block) => block.type === "p" || block.type === "note")
  .map((block) => block.html.replace(/<[^>]+>/g, " "))
  .join(" ")
  .trim()
  .split(/\s+/)
  .filter(Boolean).length
const post = {
  ...next,
  date,
  minutes: next.minutes || `${Math.max(4, Math.round(words / 180))} min read`,
}

if (process.env.DRY_RUN === "1") {
  console.log(`Would publish ${post.slug} on ${date}.`)
  output("added", "false")
  process.exit(0)
}

posts.unshift(post)
writeFileSync(postsPath, `${JSON.stringify(posts, null, 2)}\n`)
writeFileSync(queuePath, `${JSON.stringify(queue.filter((item) => item.slug !== post.slug), null, 2)}\n`)
console.log(`Published ${post.slug} for ${date}.`)
output("added", "true")
output("slug", post.slug)
output("date", date)
