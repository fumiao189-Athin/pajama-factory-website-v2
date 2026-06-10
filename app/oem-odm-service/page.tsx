import type { Metadata } from "next";
import { PageHero } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { oemSteps, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "OEM/ODM Service",
  description:
    "Fu Miao E-commerce Co., Ltd. provides OEM pajama manufacturing, ODM pajama design, private label service, fabric sourcing, sampling, quality control, and shipment support."
};

export default function OemOdmServicePage() {
  return (
    <>
      <PageHero
        eyebrow="OEM / ODM service"
        title="OEM pajama manufacturing, ODM pajama design, and private label service."
        text="Fu Miao supports custom sleepwear development for brands and wholesale buyers with practical communication, sample control, and reliable bulk production."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
              Service workflow
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
              Clear steps for custom pajama production.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {oemSteps.map((step) => (
              <article key={step.title} className="rounded-lg border border-cocoa/10 bg-linen/60 p-6">
                <step.icon className="h-7 w-7 text-clay" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-cocoa">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-linen py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[...services, "Fabric Sourcing", "Custom Packaging", "Export Coordination"].map((title) => (
            <div key={title} className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-cocoa">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                We help align materials, trims, labels, presentation, and
                production details with your brand position, target market, and
                selling channel.
              </p>
            </div>
          ))}
        </div>
      </section>
      <ContactForm />
    </>
  );
}
