import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Layout";
import { certificates } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Certificates & Compliance Support",
  description:
    "Certificate, compliance, textile test, audit, private label document, and quality inspection support for B2B pajama manufacturing buyers."
};

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certificates & compliance"
        title="Documentation and testing support for international pajama buyers."
        text="We cooperate with buyer audits, material certification requests, textile testing, inspection reports and private label documentation."
        image="/images/site/certificates-wall.webp"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative min-h-[460px] overflow-hidden rounded-3xl bg-linen shadow-soft">
            <Image src="/images/site/certificates-wall.webp" alt="Certificate and compliance display" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {certificates.map((item) => (
              <article key={item.title} className="rounded-2xl border border-cocoa/10 bg-linen/60 p-6">
                <item.icon className="h-7 w-7 text-clay" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-bold text-cocoa">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-linen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-cocoa p-8 text-white">
            <h2 className="text-2xl font-bold">Have specific compliance requirements?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
              Tell us your destination market and buyer requirements. We will
              confirm available documents, fabric options and third-party testing
              support before production starts. We do not claim a certificate is
              available unless it can be verified for the specific material or order.
            </p>
          </div>
        </div>
      </section>
      <ContactForm compact />
    </>
  );
}
