import type { Metadata } from "next"
import { EnquiryForm } from "@/components/enquiry-form"
import { Container } from "@/components/section"

export const metadata: Metadata = {
  title: "Free solar quote",
  description: "Request a free rooftop solar quote from ZeroEB in Madipakkam. Tell us your area and your electricity bill.",
}

export default function QuotePage() {
  return (
    <main>
      <section className="bg-cream">
        <Container className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Free quote</p>
            <h1 className="mt-3 font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.12] text-navy">
              A figure after the roof is seen.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#3c4d5c]">
              Tell us the area and a rough monthly bill. We will call to arrange a free visit. A payback year is not printed until someone has stood on the terrace.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              <li>Bring a recent EB bill, and a year of statements if you have them.</li>
              <li>Eligible homes can receive up to ₹78,000 in subsidy, subject to scheme rules.</li>
              <li>If you already own the equipment, say so. Labour starts at ₹3,000 per kW.</li>
            </ul>
          </div>
          <div className="border border-line bg-white p-6">
            <EnquiryForm
              source="quote"
              submitLabel="Get my free quote"
              note="No spam. Your information stays with ZeroEB."
              fields={[
                { name: "name", label: "Your name", required: true, placeholder: "Name" },
                { name: "phone", label: "Phone number", type: "tel", required: true, placeholder: "+91 98765 43210" },
                { name: "location", label: "Your area", required: true, placeholder: "e.g. Madipakkam" },
                { name: "message", label: "Tell us about your electricity bill", type: "textarea", required: true, placeholder: "Approximate monthly bill or your question" },
              ]}
            />
          </div>
        </Container>
      </section>
    </main>
  )
}
