import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/components/section"
import { getPost, posts, relatedPosts } from "@/lib/content"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Article" }
  return {
    title: post.title,
    description: post.description,
    openGraph: { images: [post.image] },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const related = relatedPosts(post.slug)

  return (
    <main>
      <article>
        <Container className="py-12 md:py-16">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="px-2">/</span>
            <Link href="/blog" className="hover:text-navy">Blog</Link>
            <span className="px-2">/</span>
            <span className="text-navy">{post.title}</span>
          </nav>
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-navy">
            {post.title}
          </h1>
          <p className="mt-4 text-sm font-semibold text-green">
            {post.category} · {post.date} · {post.minutes}
          </p>
          <div className="mt-8 max-w-3xl">
            {post.blocks.map((block, index) => {
              if (block.type === "h2") {
                return <h2 key={index} className="mt-10 font-serif text-3xl text-navy">{block.text}</h2>
              }
              if (block.type === "h3") {
                return <h3 key={index} className="mt-6 text-xl font-semibold text-navy">{block.text}</h3>
              }
              if (block.type === "img") {
                return (
                  <div key={index} className="relative my-8 aspect-[4/3] overflow-hidden bg-cream">
                    <Image src={block.src} alt={block.alt} fill className="object-cover" sizes="768px" />
                  </div>
                )
              }
              if (block.type === "note") {
                return (
                  <div
                    key={index}
                    className="rich my-6 border-l-4 border-gold bg-cream px-5 py-4 text-[1.02rem] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                )
              }
              if (block.type === "p") {
                return (
                  <p
                    key={index}
                    className="rich mt-4 text-[1.05rem] leading-relaxed text-ink"
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                )
              }
              return null
            })}
          </div>
        </Container>
      </article>
      <section className="border-t border-line bg-cream py-14">
        <Container>
          <h2 className="font-serif text-3xl text-navy">Related guides</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="bg-white p-5">
                <p className="text-xs font-bold tracking-wide text-green uppercase">{item.category}</p>
                <p className="mt-2 font-semibold text-navy">{item.title}</p>
              </Link>
            ))}
          </div>
          <Link href="/quote" className="mt-8 inline-flex h-11 items-center bg-navy px-5 text-sm font-semibold text-white">
            Get a free quote
          </Link>
        </Container>
      </section>
    </main>
  )
}
