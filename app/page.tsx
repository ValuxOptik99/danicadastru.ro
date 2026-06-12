import { Suspense } from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LocationsTeaserSection } from "@/components/sections/LocationsTeaserSection";
import { AncpiSection } from "@/components/sections/AncpiSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Cadastru, Intabulare și Topografie",
    description:
      "Servicii complete de cadastru, intabulare și topografie. Inginer autorizat ANCPI. Cadastru apartament, casă, teren, dezmembrare, alipire, topografie șantier. Consultanță gratuită. Răspuns rapid pe WhatsApp.",
    path: "/",
  }),
  keywords: [
    "cadastru",
    "intabulare",
    "cadastru apartament",
    "cadastru casă",
    "cadastru teren",
    "dezmembrare teren",
    "alipire teren",
    "ridicare topografică",
    "topografie pentru construcții",
    "trasare casă",
    "certificat de edificare",
    "apartamentare bloc",
    "servicii cadastrale",
    "inginer cadastru",
    "topograf autorizat",
    "DANI Cadastru",
    "Mangalia",
    "Constanța",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <ProjectsSection />
      <LocationsTeaserSection />
      <AncpiSection />
      <Suspense fallback={null}>
        <ContactFormSection />
      </Suspense>
    </>
  );
}
