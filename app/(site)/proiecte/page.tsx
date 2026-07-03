import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ProiecteGrid } from "./ProiecteGrid";

export const metadata: Metadata = buildPageMetadata({
  title: "Portofoliu Proiecte Cadastru și Topografie",
  description:
    "Peste 3.000 de lucrări finalizate — complex rezidențial, hoteluri, parcuri fotovoltaice, ansambluri premium. Proiecte în Dobrogea și la nivel național.",
  path: "/proiecte",
});

export default function ProiectePage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            PORTOFOLIO
          </p>
          <h1
            className="mb-4 text-4xl font-extrabold text-white md:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Proiectele Noastre
          </h1>
          <p className="mx-auto max-w-xl text-white/60 text-lg">
            Peste 3.000 de lucrări finalizate — preponderent în Dobrogea, cu
            proiecte și în alte județe, la cerere. De la apartamente individuale
            la ansambluri rezidențiale de 186 unități și hoteluri de 5 stele.
          </p>
        </div>
      </section>

      <ProiecteGrid />
    </>
  );
}
