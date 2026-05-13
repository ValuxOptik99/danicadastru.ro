import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Check, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Topografie Inginerească - Ridicări & Trasări",
  description:
    "Servicii de topografie inginerească: ridicări topografice, planuri de situație, trasări axe și cote. Echipamente GPS RTK de ultimă generație.",
};

const inclusions = [
  "Ridicări topografice pentru PUZ/PUD",
  "Planuri de situație și amplasament",
  "Trasări axe și cote pe șantier",
  "Monitorizare tasări și deformații",
  "Planuri topografice digitale",
  "Rapoarte de monitorizare",
  "Asistență la autorizații de construire",
  "Măsurători GPS RTK",
];

export default function TopografieInginerascaPage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-violet/20">
              <Compass className="h-7 w-7 text-brand-violet" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">SERVICII</p>
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              Topografie Inginerească
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Asistență topografică pentru șantiere și proiecte de infrastructură. Echipamente GPS RTK
              și stații totale de înaltă precizie pentru măsurători la nivel milimetric.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-ink mb-6">Servicii disponibile</h2>
              <div className="grid gap-3 sm:grid-cols-2 mb-8">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-navy-ink">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-violet" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-navy-900 p-6 text-white">
                <h3 className="font-bold mb-3">Echipamente utilizate</h3>
                <div className="grid gap-2 sm:grid-cols-3 text-sm text-white/70">
                  <div>GPS RTK Leica GS18</div>
                  <div>Stație Totală Trimble</div>
                  <div>Nivel Digital Leica</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#E5E9F2] bg-bg-muted p-6 card-shadow">
                <h3 className="font-bold text-navy-ink mb-3">Solicită ofertă gratuită</h3>
                <Button asChild size="default" className="w-full mb-3">
                  <Link href="/contact?tipServiciu=topografie">
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
