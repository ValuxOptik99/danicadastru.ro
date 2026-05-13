import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck2, Check, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cadastru & Intabulare - Documentații Complete",
  description:
    "Servicii complete de cadastru și intabulare pentru apartamente, case și terenuri. Înregistrare în Cartea Funciară. Autorizat ANCPI.",
};

const inclusions = [
  "Măsurători topografice la fața locului",
  "Plan de amplasament și delimitare",
  "Memoriu tehnic și calcul suprafețe",
  "Depunere dosar la OCPI",
  "Urmărire procedură înregistrare",
  "Extrase Carte Funciară finale",
  "Dezmembrări & Alipiri parcele",
  "Actualizare informații cadastrale",
];

const steps = [
  { nr: "01", title: "Consultație Inițială", desc: "Analizăm situația imobilului și documentele existente." },
  { nr: "02", title: "Măsurători la Teren", desc: "Deplasăm echipa cu echipamente GNSS de înaltă precizie." },
  { nr: "03", title: "Întocmire Documentație", desc: "Redactăm planul cadastral și memoriul tehnic." },
  { nr: "04", title: "Depunere & Urmărire OCPI", desc: "Depunem dosarul și urmărim procedura până la finalizare." },
];

export default function CadastruIntabularePage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-cyan/20">
              <FileCheck2 className="h-7 w-7 text-brand-cyan" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">SERVICII</p>
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              Cadastru & Intabulare
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Documentații tehnice complete pentru apartamente, case și terenuri. Înregistrare
              în Cartea Funciară cu zero erori, realizată de ingineri autorizați ANCPI Clasa A.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-navy-ink mb-4">Ce este inclus</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {inclusions.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-navy-ink">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-cyan" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-ink mb-6">Procesul nostru</h2>
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div key={step.nr} className="flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full gradient-cta text-xs font-bold text-white">
                        {step.nr}
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-ink">{step.title}</h3>
                        <p className="text-sm text-text-muted">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#E5E9F2] bg-bg-muted p-6 card-shadow">
                <h3 className="font-bold text-navy-ink mb-3">Solicită ofertă gratuită</h3>
                <p className="text-sm text-text-muted mb-4">
                  Completați formularul și un specialist vă va contacta în 24 ore.
                </p>
                <Button asChild size="default" className="w-full mb-3">
                  <Link href="/contact?tipServiciu=cadastru">
                    Solicită Ofertă <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a href="tel:+40770556677" className="flex items-center justify-center gap-2 text-sm font-medium text-navy-ink hover:text-brand-cyan transition-colors">
                  <Phone className="h-4 w-4" />
                  0770 55 66 77
                </a>
              </div>
              <div className="rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-5">
                <p className="text-sm font-semibold text-navy-ink mb-1">⏱ Timp de procesare</p>
                <p className="text-sm text-text-muted">5-10 zile lucrătoare de la depunere</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
