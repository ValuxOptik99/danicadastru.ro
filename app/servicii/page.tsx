import type { Metadata } from "next";
import { Home, Hammer, Building2, PencilRuler, Scale, ShieldCheck, Check } from "lucide-react";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Servicii Cadastru, Intabulare și Topografie",
  description:
    "Servicii cadastrale complete organizate pe tipul clientului: proprietari, construire casă, dezvoltatori, arhitecți, notari/avocați, due diligence. Autorizat ANCPI.",
};

const iconMap = { Home, Hammer, Building2, PencilRuler, Scale, ShieldCheck } as const;

const accentClass = {
  cyan: "text-brand-cyan bg-brand-cyan/10",
  violet: "text-brand-violet bg-brand-violet/10",
  pink: "text-brand-pink bg-brand-pink/10",
};

const EXISTING_ROUTES = new Set<string>([
  // new routes will be added here in Prompt #2
]);

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
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              const accent = accentClass[service.accentColor as keyof typeof accentClass];
              const isLive = EXISTING_ROUTES.has(service.slug);

              const cardContent = (
                <div
                  className={cn(
                    "relative grid items-center gap-8 rounded-2xl border border-[#E5E9F2] p-8 card-shadow",
                    i % 2 === 0 ? "lg:grid-cols-[1fr_2fr]" : "lg:grid-cols-[2fr_1fr]"
                  )}
                >
                  {!isLive && (
                    <span className="absolute right-4 top-4 rounded-full bg-navy-ink/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                      În curând
                    </span>
                  )}

                  <div className={cn(i % 2 !== 0 && "lg:order-2")}>
                    <div className={cn("mb-4 flex h-14 w-14 items-center justify-center rounded-2xl", accent)}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mb-3 text-2xl font-bold text-navy-ink">{service.title}</h2>
                    <p className="mb-4 text-text-muted leading-relaxed">{service.description}</p>
                    {isLive ? (
                      <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: "linear-gradient(to right, #D946EF, #EC4899)" }}>
                        Detalii serviciu
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E9F2] px-5 py-2.5 text-sm font-semibold text-text-muted cursor-default">
                        Pagina în pregătire
                      </span>
                    )}
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

              return (
                <div key={service.slug}>
                  {isLive ? (
                    <a href={service.href}>{cardContent}</a>
                  ) : (
                    cardContent
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
