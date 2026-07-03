import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { LocalitatiContent } from "./LocalitatiContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Localități Deservite — Cadastru în Județul Constanța și Dobrogea",
  description:
    "DANI Cadastru oferă servicii de cadastru, intabulare și topografie în toate localitățile din județul Constanța: Constanța, Mangalia, Năvodari, Medgidia, Eforie, Techirghiol, Cernavodă și zeci de alte localități din Dobrogea.",
  path: "/localitati",
});

export default function LocalitatiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            ZONE DESERVITE
          </p>
          <h1
            className="mb-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Servicii de Cadastru în{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22D3EE, #8B5CF6, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Județul Constanța și Dobrogea
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-white/60 text-base md:text-lg">
            Baza noastră este în Mangalia. Lucrăm în toate localitățile județului
            Constanța și în Dobrogea, cu deplasare la teren garantată. La cerere,
            realizăm lucrări cadastrale și în alte județe.
          </p>
        </div>
      </section>

      <LocalitatiContent />
    </>
  );
}
