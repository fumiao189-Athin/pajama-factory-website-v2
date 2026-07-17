import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/Layout";
import { productGallery, products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Pajamas Products",
  description:
    "Explore custom women pajamas, men pajamas, plus size pajamas, sleep dresses, robes, family matching pajamas and loungewear for OEM/ODM private label production."
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product range"
        title="Custom pajama collections for brands, wholesalers and online sellers."
        text="From cotton sets and satin pajamas to plus-size sleepwear, robes, sleep dresses and family matching programs, we support custom OEM/ODM production and private label packaging."
        image="/images/site/women-pajamas-blue-set.webp"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-2xl border border-cocoa/10 bg-linen/60 shadow-sm">
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width:1024px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-cocoa">{product.name}</h2>
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
        </div>
      </section>

      <section className="bg-linen py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Product gallery</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">Lifestyle and product presentation for global markets.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productGallery.map((src, index) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm">
                <Image src={src} alt={`Custom pajama product ${index + 1}`} fill className="object-cover" sizes="(min-width:1024px) 25vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm compact />
    </>
  );
}
