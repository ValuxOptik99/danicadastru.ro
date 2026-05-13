import { Suspense } from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LocationsTeaserSection } from "@/components/sections/LocationsTeaserSection";
import { AncpiSection } from "@/components/sections/AncpiSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "DANI - Servicii Cadastru & Topografie | Autorizat ANCPI",
  description:
    "Servicii profesionale de cadastru, intabulare, topografie inginerească și scanare laser 3D în toată România. Autorizat ANCPI.",
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
