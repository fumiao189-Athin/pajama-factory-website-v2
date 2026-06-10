import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/Layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Fu Miao E-commerce Co., Ltd. for OEM pajama manufacturing, ODM pajama design, private label service, sampling, and wholesale pajama production."
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Contact Fu Miao E-commerce Co., Ltd."
        text="Send product details, quantity, fabric requirements, and target market. We will reply with practical next steps for sampling or bulk production."
        image="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1600&q=80"
      />
      <ContactForm />
      <section className="bg-linen py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-cocoa">Email</h2>
            <a className="mt-3 block text-sm text-ink/75 hover:text-cocoa" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-cocoa">WhatsApp</h2>
            <a className="mt-3 block text-sm text-ink/75 hover:text-cocoa" href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}>
              {site.whatsapp}
            </a>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-cocoa">WeChat</h2>
            <p className="mt-3 text-sm text-ink/75">{site.wechat}</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-cocoa">Factory Location</h2>
            <p className="mt-3 text-sm text-ink/75">{site.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
