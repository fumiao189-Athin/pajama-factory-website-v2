import type { MetadataRoute } from "next";
import { navItems, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const extraPages = ["/privacy-policy", "/terms-of-use"];
  const pages = [...navItems.map((item) => item.href), ...extraPages];

  return pages.map((href) => {
    const isHome = href === "/";
    const isProducts = href === "/products";
    return {
      url: `${site.url}${isHome ? "" : href}`,
      lastModified: new Date(),
      changeFrequency: isHome || isProducts ? "weekly" : "monthly",
      priority: isHome ? 1 : isProducts ? 0.9 : 0.7
    };
  });
}
