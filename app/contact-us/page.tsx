import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/Layout";
import { site, socialLinks } from "@/lib/site";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

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
        title="Send your pajama project details."
        text="Share product photos, quantity, fabric, size range, logo and packaging requirements. We will reply with practical next steps for sampling or bulk production."
        image="/images/site/factory-office.webp"
      />
      <ContactForm />
      <section className="bg-linen py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm"><Mail className="h-6 w-6 text-clay" /><h2 className="mt-4 text-lg font-bold text-cocoa">Email</h2><a className="mt-3 block text-sm text-ink/75 hover:text-cocoa" href={`mailto:${site.email}`}>{site.email}</a></div>
          <div className="rounded-2xl bg-white p-6 shadow-sm"><Phone className="h-6 w-6 text-clay" /><h2 className="mt-4 text-lg font-bold text-cocoa">Phone / WhatsApp</h2><a className="mt-3 block text-sm text-ink/75 hover:text-cocoa" href={site.whatsapp}>{site.phone}</a></div>
          <div className="rounded-2xl bg-white p-6 shadow-sm"><MessageCircle className="h-6 w-6 text-clay" /><h2 className="mt-4 text-lg font-bold text-cocoa">WeChat</h2><p className="mt-3 text-sm text-ink/75">{site.wechat}</p></div>
          <div className="rounded-2xl bg-white p-6 shadow-sm"><MapPin className="h-6 w-6 text-clay" /><h2 className="mt-4 text-lg font-bold text-cocoa">Location</h2><p className="mt-3 text-sm leading-6 text-ink/75">{site.address}</p></div>
        </div>
        <div className="mx-auto mt-6 flex max-w-7xl flex-wrap gap-2 px-4 sm:px-6 lg:px-8">
          {socialLinks.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-cocoa shadow-sm hover:bg-linen">{item.name}</a>
          ))}
        </div>
      </section>
    </>
  );
}
