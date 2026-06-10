import type { Metadata } from "next";
import { Header, Footer, WhatsAppFloat } from "@/components/Layout";
import {
  organizationSchema,
  serviceSchema,
  site,
  targetKeywords,
  websiteSchema
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.metaTitle,
    template: "%s | Fu Miao E-commerce Co., Ltd."
  },
  description: site.metaDescription,
  keywords: [
    "Fu Miao E-commerce Co Ltd",
    ...targetKeywords,
    "pajama manufacturer China",
    "sleepwear factory China",
    "OEM Pajama Manufacturing",
    "ODM Pajama Design",
    "Private Label Service",
    "custom pajama manufacturer",
    "family matching pajamas wholesale",
    "satin pajama factory",
    "cotton pajamas manufacturer"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.url,
    siteName: site.shortName,
    images: [{ url: site.image, width: 1600, height: 900 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
    images: [site.image]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, serviceSchema])
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
