import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/Layout";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore women pajamas, men pajamas, kids pajamas, family matching pajamas, satin pajamas, cotton pajamas, flannel pajamas, and loungewear made by a China factory."
};

const galleryCategories = ["Women", "Men", "Kids", "Family", "Satin"];

function getProductGallery() {
  const productsDirectory = path.join(process.cwd(), "public", "images", "products");
  const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

  if (!fs.existsSync(productsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(productsDirectory)
    .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const lowerName = file.toLowerCase();
      const matchedCategory =
        galleryCategories.find((category) => lowerName.includes(category.toLowerCase())) ||
        "Men";

      return {
        src: `/images/products/${file}`,
        alt: `${matchedCategory} pajama product by Fu Miao E-commerce Co., Ltd.`,
        category: matchedCategory
      };
    });
}

export default function ProductsPage() {
  const galleryImages = getProductGallery();

  return (
    <>
      <PageHero
        eyebrow="Product range"
        title="Custom pajama and loungewear manufacturing for B2B buyers."
        text="Build retail-ready collections with flexible fabrics, trims, colors, sizing, labels, packaging, and order planning."
        image="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1600&q=80"
      />
      {galleryImages.length > 0 && (
        <section className="bg-linen py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
                Product gallery
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
                Pajama styles from our product collection.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-lg border border-cocoa/10 bg-white shadow-sm">
                  <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                      {image.category}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="grid overflow-hidden rounded-lg border border-cocoa/10 bg-white shadow-sm sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-64">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 768px) 25vw, 100vw" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-cocoa">{product.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/70">{product.text}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-ink/75">
                    <li>Custom fabric, color, print, and size range</li>
                    <li>Private label, care label, hangtag, and packaging</li>
                    <li>Sampling and bulk production support</li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-lg bg-linen p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-cocoa">Need a custom pajama style?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/75">
              Send your tech pack, reference photos, fabric idea, or target
              price. We can help translate your concept into a practical
              production plan for your market.
            </p>
            <div className="mt-6">
              <Button href="/contact-us">Request Product Development</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
