import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/Layout";
import { oemSteps, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "OEM/ODM Pajama Service",
  description:
    "OEM/ODM pajama manufacturing service including custom design, fabric sourcing, sampling, logo labels, packaging, quality control and bulk production."
};

export default function OemOdmServicePage() {
  return (
    <>
      <PageHero
        eyebrow="OEM / ODM service"
        title="From reference idea to private label pajama production."
        text="We help buyers turn pictures, samples, tech packs and brand concepts into practical sleepwear products ready for wholesale or retail sale."
        image="/images/site/quality-cutting-table.webp"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {oemSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-cocoa/10 bg-linen/60 p-6">
                <div className="flex items-center justify-between">
                  <step.icon className="h-8 w-8 text-clay" aria-hidden="true" />
                  <span className="text-sm font-bold text-cocoa/40">0{index + 1}</span>
                </div>
                <h2 className="mt-5 text-lg font-bold text-cocoa">{step.title}</h2>
                <p className="mt-2 text-sm leading-7 text-ink/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative min-h-[480px] overflow-hidden rounded-3xl bg-white shadow-soft">
            <Image src="/images/site/women-pajamas-red-satin.webp" alt="Private label satin pajama customization" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Customization support</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">Flexible custom details for your brand.</h2>
            <p className="mt-5 text-base leading-8 text-ink/75">MOQ starts from {site.moq}. We support customer photos, samples, artwork, logos, hangtags, wash labels, packaging and size requirements.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-cocoa shadow-sm">{service}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm compact />
    </>
  );
}
