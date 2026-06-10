import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Layout";
import { Button } from "@/components/Button";
import { services, site, strengths } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fu Miao E-commerce Co., Ltd., a China pajama factory with 15+ years of B2B sleepwear manufacturing experience."
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Fu Miao E-commerce Co., Ltd. supports global pajama buyers."
        text="With 15+ years of sleepwear experience, we provide OEM pajama manufacturing, ODM pajama design, and private label service from Shenzhen, China."
        image="https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
              China sleepwear factory
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
              Professional production for pajamas, loungewear, and private label sleepwear.
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/75">
              {site.name} serves pajama brands, wholesalers, distributors,
              importers, and e-commerce sellers who need a dependable
              manufacturing partner in China. Our work covers women pajamas,
              men pajamas, kids pajamas, family matching pajamas, satin
              pajamas, cotton pajamas, flannel pajamas, and loungewear.
            </p>
            <p className="mt-4 text-base leading-8 text-ink/75">
              For {site.experience}, our role has been to make development and
              production easier: clarify the specification, recommend suitable
              fabrics, make samples, control workmanship, inspect finished
              goods, and prepare shipment details for export.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {services.map((service) => (
                <span key={service} className="rounded-md bg-linen px-4 py-2 text-sm font-semibold text-cocoa">
                  {service}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1100&q=80"
              alt="Textile and garment production workspace"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="bg-linen py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                <item.icon className="h-7 w-7 text-clay" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-cocoa">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact-us">Talk to Fu Miao</Button>
          </div>
        </div>
      </section>
    </>
  );
}
