import Image from "next/image"
import Link from "next/link"
import { EnquiryForm } from "@/components/enquiry-form"
import { Container, SectionHeading } from "@/components/section"
import { areas, posts, work } from "@/lib/content"
import { faqs, reviews, site } from "@/lib/site"

const featured = ["madipakkam", "medavakkam", "velachery", "adyar", "tambaram", "anna-nagar", "porur", "sholinganallur"]

const steps = [
  { n: "01", title: "Connect", text: "Tell us about your home and the electricity bill." },
  { n: "02", title: "Site visit", text: "We measure roof space, shade, and the path the cables can take." },
  { n: "03", title: "Proposal", text: "A clear plant recommendation, written after the terrace is seen." },
  { n: "04", title: "Installation", text: "The same local team installs, tests, and commissions the plant." },
]

export default function HomePage() {
  const places = featured
    .map((slug) => areas.find((area) => area.slug === slug))
    .filter((area) => area !== undefined)

  return (
    <main>
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">
              Chennai & Madipakkam
            </p>
            <h1 className="mt-3 max-w-[14ch] font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.08] font-semibold tracking-tight text-navy">
              Solar installation in Chennai.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3c4d5c]">
              ZeroEB designs and installs rooftop solar for Chennai homes, so you can generate power and take control of the electricity bill. The first visit is free.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/quote" className="inline-flex h-12 items-center bg-navy px-5 text-sm font-semibold text-white hover:bg-green">
                Free consultation
              </Link>
              <a href={`tel:${site.phones[0].tel}`} className="inline-flex h-12 items-center border border-[#b8c4d0] bg-white px-5 text-sm font-semibold text-navy hover:border-navy">
                Call {site.phones[0].display}
              </a>
            </div>
            <p className="mt-6 text-sm font-semibold text-navy">25+ year panel performance warranty · No-obligation site assessment</p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy">
              <Image
                src="/media/residential-solar-terrace-hero.jpg"
                alt="Rooftop solar array on a residential terrace in Chennai"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
            <p className="absolute bottom-4 left-4 bg-navy/90 px-3 py-2 text-xs font-semibold tracking-wide text-white">
              Powering homes across Chennai & Madipakkam
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid gap-8 py-12 md:grid-cols-3">
          {[
            ["Lower monthly bills", "Generate your own electricity and depend less on rising grid costs."],
            ["Built for your roof", "Every system is designed around the home’s consumption, space, and shade."],
            ["A local team after switch-on", "The Madipakkam crew that surveys the terrace is the crew you can call later."],
          ].map(([title, text]) => (
            <div key={title}>
              <h2 className="font-serif text-2xl text-navy">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="From first look to first light"
            title="Simple solar for a Chennai home."
            lede="A full plant, labour-only fitting if you already bought the equipment, and care after the system is live."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["/solar-installation-chennai", "Rooftop solar installation", "Grid-tied plants designed for Chennai residences, including the subsidy paperwork for eligible homes."],
              ["/installation-services", "Labour-only installation", "From ₹3,000 per kW when the panels and inverter are already yours. Civil work through commissioning."],
              ["/panel-cleaning", "Cleaning & maintenance", "Panel cleaning priced per kW, and an annual contract that saves 25% on every visit."],
            ].map(([href, title, text]) => (
              <Link key={href} href={href} className="border border-line p-6 hover:border-navy">
                <h3 className="text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <p className="mt-4 text-sm font-semibold text-green">See this service</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white md:py-20">
        <Container>
          <SectionHeading
            eyebrow="How a plant gets built"
            title="Four steps, and the figure comes after the roof is seen."
            light
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="font-serif text-3xl text-gold">{step.n}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Subsidy"
              title="Up to ₹78,000 for eligible homes."
              lede="We help with the application and supporting documents. The amount and the approval follow the current government scheme. It is a separate line, not a discount already baked into a quote."
            />
            <Link href="/blog/ndcr-vs-dcr-solar-panels" className="mt-6 inline-block text-sm font-semibold text-green underline underline-offset-4">
              Why DCR modules matter for that subsidy
            </Link>
          </div>
          <div className="border border-line bg-cream p-6 md:p-8">
            <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Get a free solar quote</p>
            <h2 className="mt-2 font-serif text-3xl text-navy">Tell us about the bill.</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">We will call you. Nothing is ordered from this form.</p>
            <EnquiryForm
              source="quote"
              submitLabel="Get my free quote"
              note="No spam. Your information stays with ZeroEB."
              fields={[
                { name: "name", label: "Your name", required: true, placeholder: "Name" },
                { name: "phone", label: "Phone number", type: "tel", required: true, placeholder: "+91 98765 43210" },
                { name: "location", label: "Your area", required: true, placeholder: "e.g. Madipakkam" },
                { name: "message", label: "Electricity bill", type: "textarea", required: true, placeholder: "Approximate monthly bill or your question" },
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-cream py-16">
        <Container>
          <SectionHeading
            eyebrow="Google reviews"
            title="5.0 from 40 reviews at Zero EB, Madipakkam."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure key={review.name} className="bg-white p-5">
                <p className="text-gold" aria-label="5 stars">★★★★★</p>
                <blockquote className="mt-3 text-sm leading-relaxed text-ink">“{review.text}”</blockquote>
                <figcaption className="mt-4 text-xs font-bold tracking-wide text-navy uppercase">{review.name}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Our work" title="Roofs we have already finished." />
            <Link href="/our-work" className="text-sm font-semibold text-green">All projects</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {work.slice(0, 8).map((photo) => (
              <div key={photo.src} className="relative aspect-[4/5] overflow-hidden bg-cream">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 768px) 25vw, 50vw" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container>
          <SectionHeading
            eyebrow="Where we work"
            title="From the Madipakkam office, across Chennai."
            lede="South Chennai is closest. The same team also installs in Anna Nagar, Porur, Ambattur, and along OMR."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {places.map((place) => (
              <Link key={place.slug} href={`/areas/${place.slug}`} className="border border-line bg-white px-3 py-2 text-sm font-semibold text-navy hover:border-navy">
                {place.name}
              </Link>
            ))}
            <Link href="/areas" className="px-3 py-2 text-sm font-semibold text-green">
              All {areas.length} localities
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Questions" title="Before you book the visit." />
            <div className="mt-6 divide-y divide-line border-y border-line">
              {faqs.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <span className="text-gold group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Guides" title="Read this before you compare quotes." />
            <ul className="mt-6 space-y-4">
              {posts.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <p className="text-xs font-bold tracking-wide text-green uppercase">{post.category} · {post.date}</p>
                    <p className="mt-1 font-semibold text-navy group-hover:text-green">{post.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  )
}
