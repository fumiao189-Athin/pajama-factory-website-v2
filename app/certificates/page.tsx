import type { Metadata } from "next";
import { PageHero } from "@/components/Layout";
import { certificates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Certificate, compliance, textile test, audit, private label document, and quality inspection support for B2B pajama manufacturing buyers."
};

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certificates & compliance"
        title="Documentation support for international pajama buyers."
        text="We cooperate with buyer audits, material certifications, testing requests, inspection reports, and private label documentation."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((item) => (
              <article key={item.title} className="rounded-lg border border-cocoa/10 bg-linen/60 p-6">
                <item.icon className="h-7 w-7 text-clay" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-bold text-cocoa">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-lg bg-cocoa p-6 text-white sm:p-8">
            <h2 className="text-2xl font-bold">Have specific compliance requirements?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
              Tell us your destination market and buyer requirements. We will
              confirm available documents, fabric options, and third-party
              testing support before production starts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
