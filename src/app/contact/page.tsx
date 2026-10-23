import type { Metadata } from "next"
import { EnquiryForm } from "@/components/enquiry-form"
import { Container } from "@/components/section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, email, or visit ZeroEB in Madipakkam for a solar site visit, quote, or panel-cleaning appointment.",
}

export default function ContactPage() {
  const map = `https://www.openstreetmap.org/export/embed.html?bbox=80.186%2C12.968%2C80.196%2C12.976&layer=mapnik&marker=${site.address.lat}%2C${site.address.lng}`

  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Contact</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
            We’re ready when you are.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#3c4d5c]">
            For a site visit, a quote, or a short solar question, contact the ZeroEB team in Madipakkam.
          </p>
        </Container>
      </section>
      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-green uppercase">Call</p>
              <ul className="mt-2 space-y-1">
                {site.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a className="text-lg font-semibold text-navy" href={`tel:${phone.tel}`}>{phone.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-green uppercase">Email</p>
              <a className="mt-2 block font-semibold text-navy" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-green uppercase">Visit</p>
              <p className="mt-2 text-sm leading-relaxed">{site.address.line}</p>
              <p className="mt-2 text-sm text-muted-foreground">{site.hours}</p>
            </div>
            <iframe
              title="ZeroEB office on Medavakkam Main Road"
              src={map}
              className="h-64 w-full border border-line"
            />
          </div>
          <div className="border border-line p-6">
            <h2 className="font-serif text-3xl text-navy">Send an enquiry</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">We reply by phone. The form does not place an order.</p>
            <EnquiryForm
              source="contact"
              submitLabel="Send enquiry"
              fields={[
                [
                  { name: "name", label: "Your name", required: true, placeholder: "Name" },
                  { name: "phone", label: "Phone number", type: "tel", required: true, placeholder: "+91 98765 43210" },
                ],
                { name: "email", label: "Email address", type: "email", placeholder: "Email address" },
                { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us about your home or electricity bill" },
              ]}
            />
          </div>
        </Container>
      </section>
    </main>
  )
}
