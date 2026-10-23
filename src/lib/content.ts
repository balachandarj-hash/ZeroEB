import areasJson from "@/content/areas.json"
import postsJson from "@/content/posts.json"
import videosJson from "@/content/videos.json"
import workJson from "@/content/work.json"

export type Block =
  | { type: "p"; html: string }
  | { type: "note"; html: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "img"; src: string; alt: string }

export type Post = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  minutes: string
  image: string
  blocks: Block[]
}

export type Area = {
  slug: string
  name: string
  headline: string
  paragraphs: string[]
}

export type WorkPhoto = { src: string; alt: string }
export type Video = { id: string; title: string; url: string }

export const posts: Post[] = (postsJson as Post[])
  .slice()
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

export const areas: Area[] = (areasJson as Area[]).slice().sort((a, b) => a.name.localeCompare(b.name))

export const work: WorkPhoto[] = workJson as WorkPhoto[]

export const videos: Video[] = videosJson as Video[]

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug)
}

export function relatedPosts(slug: string, count = 3) {
  const current = getPost(slug)
  if (!current) return posts.slice(0, count)
  const same = posts.filter((post) => post.slug !== slug && post.category === current.category)
  const rest = posts.filter((post) => post.slug !== slug && post.category !== current.category)
  return [...same, ...rest].slice(0, count)
}

export function excerpt(post: Post, length = 180) {
  const first = post.blocks.find((block) => block.type === "p")
  const text = first && first.type === "p" ? first.html.replace(/<[^>]+>/g, "") : post.description
  if (text.length <= length) return text
  return `${text.slice(0, length).replace(/\s+\S*$/, "")}…`
}
