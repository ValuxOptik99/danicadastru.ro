import type { Metadata } from "next";
import Link from "next/link";
import { ScanLine, Check, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Scanare Laser 3D - Digital Twin & BIM",
  description:
    "Servicii de scanare laser 3D pentru modelare BIM, arhivare digitală și restaurări istorice. Nor de puncte de înaltă densitate.",
};

const inclusions = [
  "Scanare laser 3D de înaltă densitate",
  "Nor de puncte georeferențiat",
  "Modele Digital Twin",
  "Modelare BIM (Revit, ArchiCAD)",
  "Arhivare digitală 3D",
  "Planuri as-built",
  "Ortofotoplanuri și secțiuni",
  "Documentare patrimoniu construit",
];

export default function ScanareLaser3DPage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-pink/20">
              <ScanLine className="h-7 w-7 text-brand-pink" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">SERVICII</p>
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              Scanare Laser 3D
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Captarea realității cu nor de puncte de înaltă densitate pentru modelare BIM,
              Digital Twin și restaurări istorice. Precizie de ±2mm la distanță de 10m.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-ink mb-6">Ce includem</h2>
              <div className="grid gap-3 sm:grid-cols-2 mb-8">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-navy-ink">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-pink" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Precizie", value: "±2mm" },
                  { label: "Densitate puncte", value: "2B+" },
                  { label: "Format livrare", value: "RCP, E57, LAS" },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl bg-bg-muted p-4 text-center">
                    <p className="text-2xl font-bold text-navy-ink">{value}</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#E5E9F2] bg-bg-muted p-6 card-shadow">
                <h3 className="font-bold text-navy-ink mb-3">Solicită ofertă gratuită</h3>
                <Button asChild size="default" className="w-full mb-3">
                  <Link href="/contact?tipServiciu=scanare-3d">
                    Solicită Ofertă <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a href="tel:+40770556677" className="flex items-center justify-center gap-2 text-sm font-medium text-navy-ink hover:text-brand-cyan transition-colors">
                  <Phone className="h-4 w-4" />
                  0770 55 66 77
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
