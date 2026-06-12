import { MetadataRoute } from "next";
import { counties } from "@/lib/data/counties";

const BASE_URL = "https://danicadastru.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/servicii`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/servicii/proprietari`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/servicii/construire-casa`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/servicii/dezvoltatori`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/servicii/arhitecti-proiectanti`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/servicii/notari-avocati`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/servicii/due-diligence`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/proiecte`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/localitati`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/intrebari-frecvente`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/despre-noi`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/obtine-cadastru-ancpi`, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${BASE_URL}/politica-confidentialitate`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/politica-cookies`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/termeni-si-conditii`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const cityPages = counties.map((county) => ({
    url: `${BASE_URL}/localitati/${county.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...cityPages];
}
