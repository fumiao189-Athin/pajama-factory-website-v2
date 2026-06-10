import Image from "next/image";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { customers, products, services, site, strengths } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cocoa text-white">
        <Image src={site.image} alt="Fashion textile production and sleepwear manufacturing" fill priority className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa via-cocoa/75 to-cocoa/25" />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              OEM / ODM Sleepwear Factory in Shenzhen
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              A China pajama manufacturing partner with {site.experience} of
              experience, helping pajama brands, wholesalers, distributors,
              importers, and e-commerce sellers develop export-ready sleepwear.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact-us" variant="light">Request a Quote</Button>
              <Button href="/products" variant="secondary">View Products</Button>
            </div>
          </div>
          <div className="hidden rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur md:block">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
              Built for B2B buyers
            </p>
            <div className="mt-5 grid gap-3">
              <div className="flex items-center gap-3 rounded-md bg-white/90 px-4 py-3 text-sm font-semibold text-cocoa">
                <CheckCircle2 className="h-5 w-5 text-sage" aria-hidden="true" />
                {site.experience} Experience
              </div>
              {customers.map((customer) => (
                <div key={customer} className="flex items-center gap-3 rounded-md bg-white/90 px-4 py-3 text-sm font-semibold text-cocoa">
                  <CheckCircle2 className="h-5 w-5 text-sage" aria-hidden="true" />
                  {customer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {services.map((service) => (
            <div key={service} className="rounded-lg border border-cocoa/10 bg-linen/60 p-6">
              <CheckCircle2 className="h-6 w-6 text-clay" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-bold text-cocoa">{service}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                Dedicated B2B support from concept, sample, label, packaging,
                bulk production, inspection, and shipment coordination.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-linen py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
              Sleepwear categories
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
              Pajama production for every channel.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-lg border border-cocoa/10 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-cocoa">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{product.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
              Factory partner
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
              Practical manufacturing support from concept to shipment.
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/75">
              From new private label collections to repeat wholesale programs,
              Fu Miao focuses on stable quality, clear communication, and
              reliable production planning for international pajama buyers.
            </p>
            <div className="mt-8">
              <Button href="/oem-odm-service">Explore OEM/ODM</Button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                <item.icon className="h-7 w-7 text-clay" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-cocoa">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
