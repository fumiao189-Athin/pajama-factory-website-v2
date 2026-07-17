import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navItems, site, socialLinks } from "@/lib/site";
import { TrackedWhatsAppLink } from "@/components/Tracking";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Fu Miao Pajama Factory home">
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-cocoa/10 bg-linen shadow-sm">
            <Image src={site.logo} alt="FM Pajamas logo" fill className="object-cover" sizes="48px" priority />
          </span>
          <span className="grid leading-tight">
            <span className="text-sm font-bold text-cocoa">{site.brandName}</span>
            <span className="hidden text-xs text-ink/60 sm:inline">Custom Pajama Factory</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink/75 transition hover:text-cocoa">
              {item.label}
            </Link>
          ))}
        </nav>

        <TrackedWhatsAppLink
          className="hidden min-h-11 items-center gap-2 rounded-full bg-[#1FAF64] px-5 text-sm font-semibold text-white transition hover:bg-[#16894e] md:inline-flex"
          label="Header WhatsApp"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </TrackedWhatsAppLink>
      </div>

      <div className="border-t border-cocoa/10 px-4 py-3 lg:hidden">
        <nav className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm font-medium text-ink/75" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 hover:text-cocoa">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-cocoa text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-full bg-linen">
              <Image src={site.logo} alt="FM Pajamas logo" fill className="object-cover" sizes="56px" />
            </span>
            <div>
              <p className="text-lg font-bold">{site.shortName}</p>
              <p className="text-xs text-white/60">{site.name}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
            China-based B2B pajama and loungewear manufacturer supporting
            brands, wholesalers, distributors, importers and e-commerce sellers
            with OEM, ODM and private label production.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/10">
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold">Pages</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <a className="flex items-center gap-2 hover:text-white" href={`tel:${site.phone}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={`mailto:${site.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </a>
            <TrackedWhatsAppLink className="flex items-center gap-2 hover:text-white" label="Footer WhatsApp">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Inquiry
            </TrackedWhatsAppLink>
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {site.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <TrackedWhatsAppLink
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF64] text-white shadow-soft transition hover:scale-105"
      label="Floating WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </TrackedWhatsAppLink>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative isolate min-h-[430px] overflow-hidden bg-cocoa text-white">
      <Image src={image} alt="" fill priority className="object-cover opacity-45" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-cocoa via-cocoa/80 to-cocoa/40" />
      <div className="relative mx-auto flex min-h-[430px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
          {text}
        </p>
      </div>
    </section>
  );
}
