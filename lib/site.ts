import {
  Award,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  Globe,
  Handshake,
  Mail,
  MessageCircle,
  PackageCheck,
  PenTool,
  Phone,
  Ruler,
  Scissors,
  Search,
  Shirt,
  Truck,
  Users
} from "lucide-react";

export const site = {
  name: "Fu Miao E-commerce Co., Ltd.",
  shortName: "Fu Miao Pajama Factory",
  metaTitle:
    "Pajama Manufacturer China | Custom & Private Label Pajamas Supplier",
  metaDescription:
    "Fu Miao E-commerce Co., Ltd. is a pajama manufacturer and sleepwear manufacturer in China offering custom pajamas, private label pajamas, OEM pajama manufacturing, and ODM pajama factory services.",
  description:
    "Fu Miao E-commerce Co., Ltd. is a China pajama manufacturing partner with 15+ years of experience in OEM pajama manufacturing, ODM pajama design, and private label service.",
  url: "https://www.fumiao-pajama.com",
  email: "fumiao189@gmail.com",
  phone: "+86 17520452787",
  whatsapp: "+86 17520452787",
  wechat: "+86 17520452787",
  experience: "15+ Years",
  address:
    "Unit B502, Tower A1, Bairui Da Building, Banxuegang Avenue, Vanke City Community, Bantian Subdistrict, Longgang District, Shenzhen, Guangdong Province, China",
  image:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80"
};

export const services = [
  "OEM Pajama Manufacturing",
  "ODM Pajama Design",
  "Private Label Service"
];

export const targetKeywords = [
  "pajama manufacturer",
  "custom pajamas",
  "private label pajamas",
  "OEM pajama manufacturer",
  "ODM pajama factory",
  "sleepwear manufacturer",
  "pajama supplier China"
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/oem-odm-service", label: "OEM/ODM Service" },
  { href: "/factory-quality-control", label: "Factory & QC" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact-us", label: "Contact Us" }
];

export const customers = [
  "Pajama Brands",
  "Wholesalers",
  "Distributors",
  "Importers",
  "E-commerce Sellers"
];

export const products = [
  {
    name: "Women Pajamas",
    text: "Elegant sleepwear sets, robes, camisoles, and loungewear for retail and private label collections.",
    image:
      "https://images.unsplash.com/photo-1532781909635-49b43e18b72b?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Men Pajamas",
    text: "Comfortable woven and knit pajama sets with clean finishing, accurate sizing, and brand-ready packaging.",
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Kids Pajamas",
    text: "Soft, safe, and practical sleepwear for children, with thoughtful construction and compliant materials.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Family Matching Pajamas",
    text: "Coordinated family collections for holiday campaigns, online shops, and seasonal wholesale programs.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Satin Pajamas",
    text: "Smooth satin pieces with a premium hand feel, refined piping, custom colors, and elegant presentation.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Cotton Pajamas",
    text: "Breathable cotton sleepwear for everyday comfort, from classic button sets to relaxed modern silhouettes.",
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Flannel Pajamas",
    text: "Warm brushed fabric pajamas for winter ranges, gifting programs, and cozy family sleepwear collections.",
    image:
      "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Loungewear",
    text: "Relaxed homewear sets, joggers, tops, robes, and capsule collections for lifestyle sleepwear brands.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"
  }
];

export const strengths = [
  { icon: Factory, title: "15+ Years Manufacturing Experience", text: "Fu Miao supports long-term pajama programs with practical production planning, sampling, sewing, finishing, inspection, and packing." },
  { icon: Scissors, title: "Fashion Sleepwear Expertise", text: "Our team understands textile hand feel, fit, trims, wash performance, and commercial pajama styling for international markets." },
  { icon: ClipboardCheck, title: "Quality-Control Workflow", text: "Inline checks, final AQL inspection, measurement review, and packing checks help protect buyer expectations." },
  { icon: Globe, title: "Export-Ready Support", text: "We support pajama brands, wholesalers, distributors, importers, and e-commerce sellers with labeling, cartons, documents, and shipping coordination." }
];

export const oemSteps = [
  { icon: MessageCircle, title: "Inquiry & Brief", text: "Share target market, product type, fabric idea, quantity, packaging needs, and timeline." },
  { icon: PenTool, title: "Design Development", text: "We support tech packs, size charts, trims, color matching, print placement, and construction details." },
  { icon: Ruler, title: "Sampling", text: "Fit samples, photo samples, pre-production samples, and revised samples are arranged before bulk approval." },
  { icon: Boxes, title: "Bulk Production", text: "Materials, cutting, sewing, finishing, and packing are managed against the confirmed specification." },
  { icon: PackageCheck, title: "Inspection", text: "Measurements, workmanship, labels, packing, and appearance are checked before shipment." },
  { icon: Truck, title: "Shipment", text: "We coordinate cartons, export paperwork, and handover to your appointed forwarder or shipping partner." }
];

export const certificates = [
  { icon: BadgeCheck, title: "OEKO-TEX Materials", text: "Support for certified fabrics and trims upon request for safer textile sourcing." },
  { icon: Award, title: "BSCI / Social Compliance", text: "Factory social compliance documentation can be prepared for qualified buyer programs." },
  { icon: Search, title: "AQL Inspection Reports", text: "Quality reports cover measurements, workmanship, packing, and product appearance." },
  { icon: Shirt, title: "Fabric Test Support", text: "Color fastness, shrinkage, pilling, composition, and other tests can be arranged with labs." },
  { icon: Handshake, title: "Private Label Documents", text: "Brand labels, care labels, carton marks, barcode stickers, and hangtags can be customized." },
  { icon: Users, title: "Buyer Audit Cooperation", text: "We cooperate with customer audits and third-party quality-control visits." }
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  image: site.image,
  description: site.metaDescription,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Unit B502, Tower A1, Bairui Da Building, Banxuegang Avenue, Vanke City Community, Bantian Subdistrict",
    addressLocality: "Shenzhen",
    addressRegion: "Guangdong Province",
    addressCountry: "CN"
  },
  areaServed: "Worldwide",
  foundingDate: "2009",
  knowsAbout: targetKeywords,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.whatsapp,
      contactType: "sales",
      availableLanguage: ["English", "Chinese"],
      areaServed: "Worldwide"
    }
  ],
  sameAs: [`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.metaDescription,
  publisher: {
    "@id": `${site.url}/#organization`
  },
  inLanguage: "en"
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.url}/#pajama-manufacturing-service`,
  name: "Pajama Manufacturing, Custom Pajamas, and Private Label Pajamas",
  description: site.metaDescription,
  provider: {
    "@id": `${site.url}/#organization`
  },
  areaServed: "Worldwide",
  serviceType: [
    "pajama manufacturer",
    "custom pajamas",
    "private label pajamas",
    "OEM pajama manufacturer",
    "ODM pajama factory",
    "sleepwear manufacturer",
    "pajama supplier China"
  ],
  offers: {
    "@type": "OfferCatalog",
    name: "Pajama Manufacturing Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service
      }
    }))
  }
};
