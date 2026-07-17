import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/Layout";
import { customers, site, strengths } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Fu Miao E-commerce Co., Ltd., a China-based pajama manufacturer offering OEM/ODM custom sleepwear and private label production for global buyers."
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Fu Miao"
        title="A practical pajama factory partner for long-term B2B buyers."
        text="We support global sleepwear brands, wholesalers and e-commerce sellers with custom pajama development, sampling, quality control and private label production."
        image="/images/site/factory-exterior.webp"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="relative min-h-[460px] overflow-hidden rounded-3xl bg-linen shadow-soft">
            <Image src="/images/site/factory-office.webp" alt="Fu Miao sales and merchandising office" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Company profile</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">{site.name}</h2>
            <p className="mt-5 text-base leading-8 text-ink/75">{site.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-linen p-5"><p className="text-3xl font-bold text-cocoa">{site.experience}</p><p className="mt-1 text-sm text-ink/65">manufacturing experience</p></div>
              <div className="rounded-2xl bg-linen p-5"><p className="text-3xl font-bold text-cocoa">{site.moq}</p><p className="mt-1 text-sm text-ink/65">MOQ for custom programs</p></div>
              <div className="rounded-2xl bg-linen p-5"><p className="text-3xl font-bold text-cocoa">{site.sampleTime}</p><p className="mt-1 text-sm text-ink/65">sample lead time</p></div>
              <div className="rounded-2xl bg-linen p-5"><p className="text-3xl font-bold text-cocoa">{site.bulkLeadTime}</p><p className="mt-1 text-sm text-ink/65">bulk production lead time</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <item.icon className="h-8 w-8 text-clay" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-bold text-cocoa">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-cocoa p-8 text-white">
            <h2 className="text-2xl font-bold">Who we serve</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {customers.map((customer) => (
                <span key={customer} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">{customer}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm compact />
    </>
  );
}
