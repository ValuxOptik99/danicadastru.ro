import type { Metadata } from "next";
import { Suspense } from "react";
import { AncpiSection } from "@/components/sections/AncpiSection";
import { ShieldCheck, Clock, FileCheck2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Obține Cadastru ANCPI - Integrare Oficială",
  description:
    "Verifică și descarcă documentația cadastrală oficial de la ANCPI. Serviciu în curând disponibil pe Vibe Design.",
};

const features = [
  { icon: ShieldCheck, title: "Date oficiale", desc: "Direct din sistemul ANCPI, validate și certificate." },
  { icon: Clock, title: "Procesare rapidă", desc: "24-48 ore de la solicitare până la livrare." },
  { icon: FileCheck2, title: "Documentație completă", desc: "Extrase CF, planuri cadastrale, dosare complete." },
];

export default function ObtineCadastrPage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">INTEGRARE ANCPI</p>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
            Obține Cadastru Direct de la ANCPI
          </h1>
          <p className="mx-auto max-w-xl text-white/60 text-lg">
            Accesează documentația oficială ANCPI pentru imobilul tău rapid și securizat.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-[#E5E9F2] p-6 card-shadow text-center">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl gradient-brand">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-navy-ink mb-2">{title}</h3>
                <p className="text-sm text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <AncpiSection />
      </Suspense>
    </>
  );
}
