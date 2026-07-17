import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TrackedQuoteLink, TrackedWhatsAppLink } from "@/components/Tracking";
import { factoryImages, faqs, products, site, strengths } from "@/lib/site";

const stats = [
  { label: "Manufacturing Experience", value: site.experience },
  { label: "MOQ from", value: site.moq },
  { label: "Sample Time", value: site.sampleTime },
  { label: "Bulk Lead Time", value: site.bulkLeadTime }
];

const process = [
  "Send design or sample reference",
  "Confirm fabric, size chart and customization",
  "Sample approval before bulk production",
  "Cutting, sewing, inspection and packing",
  "Export handover and shipment coordination"
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cocoa text-white">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/site/factory-sewing-panoramic.webp" alt="Pajama production workshop" fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa via-cocoa/90 to-cocoa/40" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              {site.shortName}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Custom Pajama Manufacturer in China
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              OEM/ODM sleepwear production, private label packaging, low MOQ
              customization and reliable quality control for global brands,
              wholesalers, distributors and e-commerce sellers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedQuoteLink className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-cocoa transition hover:bg-linen">
                Get a Quotation <ArrowRight className="h-4 w-4" />
              </TrackedQuoteLink>
              <TrackedWhatsAppLink className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1FAF64] px-6 text-sm font-bold text-white transition hover:bg-[#16894e]" label="Homepage hero WhatsApp">
                WhatsApp Inquiry
              </TrackedWhatsAppLink>
            </div>
            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/65">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-[4/5] max-w-[470px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl">
              <Image src="/images/site/women-pajamas-cream-blue.webp" alt="Custom women pajama set" fill className="object-cover p-3" sizes="470px" priority />
            </div>
            <div className="absolute -bottom-8 -left-8 w-56 rounded-2xl bg-white p-5 text-cocoa shadow-soft">
              <p className="text-sm font-semibold">Private label ready</p>
              <p className="mt-2 text-xs leading-5 text-ink/65">Logo, labels, hangtags, wash labels and packaging can be customized.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Product categories</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-5xl">Sleepwear collections for wholesale and private label buyers.</h2>
            <p className="mt-5 text-base leading-8 text-ink/70">Choose from women, men, plus size, sleep dresses, robes, family matching and custom loungewear programs. We support customer designs, samples and reference photos.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-2xl border border-cocoa/10 bg-linen/60 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cocoa">{product.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70">{product.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-cocoa">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cocoa px-6 text-sm font-bold text-white transition hover:bg-ink">
              View Product Range <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-linen py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Why buyers choose us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">A practical factory partner for repeat pajama programs.</h2>
            <p className="mt-5 text-base leading-8 text-ink/70">We focus on realistic production planning, stable quality, clear communication and private-label details that matter to overseas buyers.</p>
            <div className="mt-8 grid gap-3">
              {process.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink/75 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-clay" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <item.icon className="h-8 w-8 text-clay" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-cocoa">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Factory & quality control</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">From fabric preparation to packed cartons.</h2>
              <p className="mt-5 text-base leading-8 text-ink/70">Production checkpoints cover cutting, sewing, measurements, appearance, labeling, packing and final inspection. We help overseas buyers manage quality without being on site.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Factory, title: "Factory coordination" },
                { icon: ShieldCheck, title: "QC checkpoints" },
                { icon: Truck, title: "Export support" }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-linen p-5 text-center">
                  <item.icon className="mx-auto h-7 w-7 text-clay" />
                  <p className="mt-3 text-sm font-bold text-cocoa">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {factoryImages.slice(0, 6).map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-linen shadow-sm">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cocoa py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Customization capability</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Logo, label, fabric, print, packaging and size customization.</h2>
              <p className="mt-5 text-base leading-8 text-white/75">Send us your design, photo, sample or tech pack. We can support small batch custom orders from 100 sets and scale to repeat bulk production after samples are approved.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Custom logo", "Hangtags", "Wash labels", "Private packaging", "Size grading", "Fabric sourcing", "Print artwork", "Sample development"].map((item) => (
                <div key={item} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white/85">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">Common questions from B2B pajama buyers.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.question} className="rounded-2xl border border-cocoa/10 bg-linen/60 p-6">
                <h3 className="font-bold text-cocoa">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
