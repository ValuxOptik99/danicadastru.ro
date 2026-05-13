import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck2, Compass, ScanLine, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Servicii Cadastru, Topografie & Scanare 3D",
  description:
    "Servicii geodezice complete: cadastru și intabulare, topografie inginerească, scanare laser 3D. Autorizat ANCPI.",
};

const iconMap = { FileCheck2, Compass, ScanLine } as const;
const accentClass = {
  cyan: "text-brand-cyan bg-brand-cyan/10",
  violet: "text-brand-violet bg-brand-violet/10",
  pink: "text-brand-pink bg-brand-pink/10",
};

export default function ServiciiPage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            CE OFERIM
          </p>
          <h1
            className="mb-4 text-4xl font-extrabold text-white md:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Servicii Specializate
          </h1>
          <p className="mx-auto max-w-xl text-white/60 text-lg">
            Soluții geodezice integrate pentru proprietari privați, arhitecți și dezvoltatori imobiliari.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              const accent = accentClass[service.accentColor as keyof typeof accentClass];
              return (
                <div
                  key={service.slug}
                  className={cn(
                    "grid items-center gap-8 rounded-2xl border border-[#E5E9F2] p-8 card-shadow",
                    i % 2 === 0 ? "lg:grid-cols-[1fr_2fr]" : "lg:grid-cols-[2fr_1fr]"
                  )}
                >
                  <div className={cn(i % 2 !== 0 && "lg:order-2")}>
                    <div className={cn("mb-4 flex h-14 w-14 items-center justify-center rounded-2xl", accent)}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mb-3 text-2xl font-bold text-navy-ink">{service.title}</h2>
                    <p className="mb-4 text-text-muted leading-relaxed">{service.description}</p>
                    <Button asChild size="default">
                      <Link href={service.href}>
                        Detalii serviciu <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={cn(i % 2 !== 0 && "lg:order-1")}>
                    <ul className="space-y-3">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm text-navy-ink">
                          <Check className="h-4 w-4 flex-shrink-0 text-brand-cyan" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
