import type { Metadata } from "next";
import { Suspense } from "react";
import { LocalitatiContent } from "./LocalitatiContent";

export const metadata: Metadata = {
  title: "Servicii Cadastru în Toate Reședințele de Județ",
  description:
    "Vibe Design oferă servicii de cadastru și intabulare în toate cele 41 de județe ale României. Specialiști ANCPI autorizați, documentație completă.",
  openGraph: {
    title: "Servicii Cadastru în Toată România | Vibe Design",
    description:
      "Servicii de cadastru și intabulare în toate reședințele de județ. Vibe Design operează la nivel național.",
  },
};

export default function LocalitatiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            ACOPERIRE NAȚIONALĂ
          </p>
          <h1
            className="mb-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Servicii de Cadastru în Toate<br />
            <span
              style={{
                background: "linear-gradient(135deg, #22D3EE, #8B5CF6, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Reședințele de Județ
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-white/60 text-base md:text-lg">
            Echipa noastră de ingineri autorizați ANCPI acoperă toate județele
            României, asigurând documentație cadastrală de calitate oriunde vă aflați.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-screen bg-bg-muted" />}>
        <LocalitatiContent />
      </Suspense>
    </>
  );
}
