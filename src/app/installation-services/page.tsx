import type { Metadata } from "next"
import { EnquiryForm } from "@/components/enquiry-form"
import { Container, SectionHeading } from "@/components/section"

export const metadata: Metadata = {
  title: "Solar panel installation services in Chennai",
  description:
    "Labour-only solar installation in Chennai from ₹3,000 per kW. Civil work, mounting, wiring, testing, and commissioning when you already own the panels and inverter.",
}

const included = [
  "Civil work for the mounting structure",
  "Mounting structure and solar panel installation",
  "Inverter installation and AC/DC wiring",
  "Earthing and cable management",
  "Electrical safety checks and system testing",
  "Commissioning and site cleanup",
]

const excluded = [
  "Solar panels, inverter, structure materials, and cables",
  "MC4 connectors, MCBs, SPDs, isolators, and other protection devices",
  "Net-meter application and government subsidy processing",
  "Electrical materials and transportation of materials",
]

const scopes = [
  ["Civil work", ["Foundation work for ground-mounted structures", "RCC pedestals where required", "Roof drilling, anchors, and waterproof sealing", "Base preparation, alignment, and levelling"]],
  ["Mounting and panels", ["Assemble rails and clamps", "Align panels and torque fasteners", "String configuration and MC4 connectors", "Verify roof safety"]],
  ["Inverter and electrical", ["Wall mounting with ventilation clearance", "AC/DC termination and cable dressing", "Earthing and lightning connections if the hardware is on site", "Junction box, MCB, and isolator connections"]],
  ["Testing", ["Voltage, polarity, insulation resistance, and earthing tests", "Inverter startup and performance testing", "Mobile monitoring setup where the inverter supports it"]],
]

export default function InstallationPage() {
  return (
    <main>
      <section className="bg-cream">
        <Container className="py-16 md:py-20">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Installation services</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
            Professional solar panel and inverter installation.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3c4d5c]">
            Already purchased the panels and inverter? The team handles civil work for the mounting structure through testing and commissioning.
          </p>
          <p className="mt-4 max-w-2xl text-sm font-semibold text-navy">
            Installation services only. Panels, inverters, cables, and mounting structures are supplied by you unless otherwise agreed. Residential installation from ₹3,000 per kW.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-4 md:grid-cols-2">
          {scopes.map(([title, points]) => (
            <article key={title as string} className="border border-line p-6">
              <h2 className="text-xl font-semibold text-navy">{title as string}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {(points as string[]).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Included" title="What the labour price covers." />
            <ul className="mt-6 space-y-2 text-sm">
              {included.map((item) => (
                <li key={item} className="border-b border-line py-2">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Not included" title="Named before work begins." />
            <ul className="mt-6 space-y-2 text-sm">
              {excluded.map((item) => (
                <li key={item} className="border-b border-line py-2">{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Request a call"
              title="Tell us what you already bought."
              lede="Photographs of the terrace help. They do not replace the visit. Shade, the tank, and the cable path become clear when someone stands on the roof."
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Residential homes, commercial buildings, and industrial sites. The enquiry goes to the ZeroEB installation team.
            </p>
          </div>
          <div className="border border-line p-6">
            <EnquiryForm
              source="installation"
              submitLabel="Request installation quote"
              fields={[
                [
                  { name: "name", label: "Your name", required: true, placeholder: "Name" },
                  { name: "phone", label: "Phone number", type: "tel", required: true, placeholder: "+91 98765 43210" },
                ],
                [
                  { name: "project_type", label: "Project type", type: "select", required: true, options: ["Residential home", "Commercial building", "Industrial project"] },
                  { name: "system_size", label: "System size", required: true, placeholder: "e.g. 5 kW" },
                ],
                { name: "location", label: "Installation location", required: true, placeholder: "Area / city" },
                { name: "message", label: "Project details", type: "textarea", placeholder: "Equipment purchased and site details" },
              ]}
            />
          </div>
        </Container>
      </section>
    </main>
  )
}
