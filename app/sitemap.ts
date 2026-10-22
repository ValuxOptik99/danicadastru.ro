import { MetadataRoute } from "next";
import { getAllPublishedSlugs } from "@/lib/blog";
import { localPages } from "@/lib/data/local-pages";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

// Bump when the content of lib/data/local-pages.ts changes. A fixed date is
// deliberate: `new Date()` on every request tells Google everything changed
// all the time, and it then ignores lastmod for the whole site.
const LOCAL_PAGES_UPDATED = "2026-07-07";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/servicii`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/servicii/proprietari`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/servicii/construire-casa`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/servicii/dezvoltatori`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/servicii/arhitecti-proiectanti`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/servicii/notari-avocati`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/servicii/due-diligence`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/servicii/certificat-edificare`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/servicii/certificat-energetic`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/servicii/certificat-urbanism`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/proiecte`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/localitati`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/intrebari-frecvente`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/despre-noi`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/obtine-cadastru-ancpi`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/politica-confidentialitate`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/politica-cookies`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/termeni-si-conditii`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const localCadastruPages: MetadataRoute.Sitemap = localPages.map(({ slug }) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: LOCAL_PAGES_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogSlugs = await getAllPublishedSlugs();
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...localCadastruPages, ...blogPages];
}
