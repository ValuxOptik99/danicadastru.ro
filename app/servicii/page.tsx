import type { Metadata } from "next";
import Link from "next/link";
import { Home, Hammer, Building2, PencilRuler, Scale, ShieldCheck, Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Servicii Cadastrale și Topografice",
  description: "Cadastru, intabulare, topografie și scanare 3D pentru proprietari, dezvoltatori, arhitecți, notari și investitori. Inginer autorizat ANCPI. Acoperire națională.",
  path: "/servicii",
});

const iconMap = { Home, Hammer, Building2, PencilRuler, Scale, ShieldCheck } as const;

const accentClass = {
  cyan:   "text-brand-cyan bg-brand-cyan/10",
  violet: "text-brand-violet bg-brand-violet/10",
  pink:   "text-brand-pink bg-brand-pink/10",
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
            Soluții pentru Fiecare Situație
          </h1>
          <p className="mx-auto max-w-xl text-white/60 text-lg">
            Documentațiile potrivite pentru proprietari, constructori, dezvoltatori și profesioniști — de la primul cadastru până la proiecte complexe.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? ShieldCheck;
              const accent = accentClass[service.accentColor as keyof typeof accentClass];
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group block"
                >
                  <div
                    className={cn(
                      "grid items-center gap-8 rounded-2xl border border-[#E5E9F2] p-8 card-shadow transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_40px_rgba(11,20,55,0.12)]",
                      i % 2 === 0 ? "lg:grid-cols-[1fr_2fr]" : "lg:grid-cols-[2fr_1fr]"
                    )}
                  >
                    <div className={cn(i % 2 !== 0 && "lg:order-2")}>
                      <div className={cn("mb-4 flex h-14 w-14 items-center justify-center rounded-2xl", accent)}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className="mb-3 text-2xl font-bold text-navy-ink">{service.title}</h2>
                      <p className="mb-4 text-text-muted leading-relaxed">{service.description}</p>
                      <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D946EF] to-[#EC4899] px-5 py-2.5 text-sm font-semibold text-white transition group-hover:brightness-110">
                        Detalii serviciu <ArrowRight className="h-4 w-4" />
                      </span>
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
