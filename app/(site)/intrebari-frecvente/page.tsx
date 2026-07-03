import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { faqCategories } from "@/lib/data/faq";
import { FAQPageClient } from "@/components/sections/FAQPageClient";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = buildPageMetadata({
  title: "Întrebări Frecvente despre Cadastru, Intabulare și Topografie",
  description:
    "Răspunsuri la 51 dintre cele mai frecvente întrebări despre cadastru, intabulare, dezmembrare, alipire, carte funciară, prețuri și durate. Ghid complet DANI Cadastru.",
  path: "/intrebari-frecvente",
});

export default function FAQPage() {
  return (
    <>
      <FAQSchema categories={faqCategories} />
      <FAQPageClient categories={faqCategories} />
    </>
  );
}
