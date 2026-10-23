import type { Metadata } from "next"
import Image from "next/image"
import { EnquiryForm } from "@/components/enquiry-form"
import { Container, SectionHeading } from "@/components/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cleaningTiers, maintenanceChecks } from "@/lib/site"

export const metadata: Metadata = {
  title: "Solar panel cleaning in Chennai",
  description:
    "Solar panel cleaning and maintenance in Chennai. Priced per kW, with an annual contract that saves 25% and a full system inspection.",
}

export default function CleaningPage() {
  return (
    <main>
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="text-[0.72rem] font-bold tracking-[0.16em] text-green uppercase">Panel cleaning</p>
            <h1 className="mt-3 font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] text-navy">
              Keep the panels performing.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#3c4d5c]">
              Dust, bird droppings, and everyday buildup cut generation. A careful clean helps Chennai homeowners protect output. An annual maintenance contract is the fuller check, not only a wash.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/media/solar-panel-cleaning-technicians.jpg"
              alt="Technicians cleaning rooftop solar panels"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Price"
            title="Charged by system size."
            lede="The service charge is per kW. An annual maintenance contract saves 25% on every scheduled clean."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cleaningTiers.map((tier) => (
              <div key={tier.size} className="border border-line p-5">
                <p className="text-sm text-muted-foreground">{tier.size}</p>
                <p className="mt-2 font-serif text-3xl text-navy">{tier.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Better output", "Remove the film that keeps sunlight off the cells."],
              ["Careful service", "A practical wash for residential rooftop systems, with a path left on the terrace."],
              ["Easy scheduling", "Pick a date and a slot. We confirm by phone."],
            ].map(([title, text]) => (
              <div key={title}>
                <h2 className="font-semibold text-navy">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Book a visit"
              title="Monday to Saturday."
              lede="Residential solar systems. We confirm the appointment and the service details by phone."
            />
            <div className="mt-8 border border-line bg-white p-6">
              <EnquiryForm
                source="cleaning"
                submitLabel="Request appointment"
                fields={[
                  [
                    { name: "name", label: "Your name", required: true, placeholder: "Name" },
                    { name: "phone", label: "Phone number", type: "tel", required: true, placeholder: "+91 98765 43210" },
                  ],
                  [
                    { name: "preferred_date", label: "Preferred date", type: "date", required: true },
                    { name: "preferred_time", label: "Preferred time", type: "select", required: true, options: ["10:00 AM", "1:00 PM", "4:00 PM"] },
                  ],
                  { name: "address", label: "Service address / area", required: true, placeholder: "House address or locality" },
                  { name: "message", label: "Panel details", type: "textarea", placeholder: "Number of panels or questions" },
                  { name: "annual_maintenance_contract", label: "Annual maintenance contract — 25% off each cleaning visit", type: "checkbox", value: "Yes — Annual Maintenance Contract, 25% discount requested" },
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="AMC" title="What the maintenance visit inspects." />
            <Accordion className="mt-6 bg-white px-4">
              {maintenanceChecks.map((check, index) => (
                <AccordionItem key={check.title} value={`check-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">
                    {index + 1}. {check.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {check.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
    </main>
  )
}
