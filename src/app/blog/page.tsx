import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/section"
import { excerpt, posts } from "@/lib/content"

export const metadata: Metadata = {
  title: "Solar guides",
  description: "Practical solar guides for Chennai homeowners from ZeroEB: bills, sizing, subsidies, rain, and installation quality.",
}

export default function BlogPage() {
  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Blog</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
            Solar without the guesswork.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#3c4d5c]">
            Notes from the Madipakkam office on bills, shade, quotes, and what actually happens on a Chennai terrace.
          </p>
        </Container>
      </section>
      <section className="py-12">
        <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col border border-line">
              <Link href={`/blog/${post.slug}`} className="relative aspect-[4/3] bg-cream">
                <Image src={post.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold tracking-wide text-green uppercase">
                  {post.category} · {post.date}
                </p>
                <h2 className="mt-2 font-serif text-2xl leading-snug text-navy">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{excerpt(post)}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 text-sm font-semibold text-green">
                  Read the article
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </main>
  )
}
