import { MetadataRoute } from "next";
import { counties } from "@/lib/data/counties";
import { getAllPublishedSlugs } from "@/lib/blog";

const BASE_URL = "https://danicadastru.ro";

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

  const cityPages: MetadataRoute.Sitemap = counties.map((county) => ({
    url: `${BASE_URL}/localitati/${county.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const localCadastruSlugs = [
    "cadastru-constanta",
    "cadastru-navodari",
    "cadastru-eforie",
    "cadastru-mangalia",
    "cadastru-limanu",
    "cadastru-ovidiu",
    "cadastru-23-august",
    "cadastru-agigea",
  ];
  const localCadastruPages: MetadataRoute.Sitemap = localCadastruSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
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

  return [...staticPages, ...cityPages, ...localCadastruPages, ...blogPages];
}
