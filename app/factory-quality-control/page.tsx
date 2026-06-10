import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Layout";
import { ClipboardCheck, Ruler, Scissors, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Factory & Quality Control",
  description:
    "Factory production and quality-control process for China pajama manufacturing, including fabric inspection, cutting, sewing, finishing, AQL inspection, and packing."
};

const qc = [
  { icon: ShieldCheck, title: "Material Check", text: "Fabric hand feel, color, shade, defects, shrinkage risk, and trim matching are reviewed before production." },
  { icon: Scissors, title: "Cutting Control", text: "Markers, sizes, layers, and panels are checked to reduce measurement variation and fabric waste." },
  { icon: Ruler, title: "Inline Inspection", text: "Sewing quality, measurements, seams, labels, and finishing are checked during production." },
  { icon: ClipboardCheck, title: "Final AQL Inspection", text: "Finished goods are reviewed for workmanship, measurements, packing, carton marks, and appearance." }
];

export default function FactoryQualityControlPage() {
  return (
    <>
      <PageHero
        eyebrow="Factory & quality control"
        title="Stable pajama production with clear inspection checkpoints."
        text="Our process is built for B2B buyers who need dependable quality, consistent sizing, and export-ready packing."
        image="https://images.unsplash.com/photo-1581092921461-7031e5d8a209?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1100&q=80"
              alt="Fabric selection for pajama and garment production"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
              Production management
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
              Factory coordination from fabric arrival to packed cartons.
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/75">
              Pajama production requires consistent fabric performance, clean
              sewing, accurate measurements, and careful packaging. We manage
              each stage with specification sheets, approved samples, inline
              checking, and final inspection.
            </p>
            <div className="mt-8 grid gap-4">
              {qc.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-lg bg-linen p-5">
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-clay" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-cocoa">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
