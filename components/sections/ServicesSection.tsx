"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Hammer, Building2, PencilRuler, Scale, ShieldCheck, Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const iconMap = {
  Home,
  Hammer,
  Building2,
  PencilRuler,
  Scale,
  ShieldCheck,
} as const;

const accentMap = {
  cyan: {
    bg: "bg-brand-cyan/10",
    icon: "text-brand-cyan",
  },
  violet: {
    bg: "bg-brand-violet/10",
    icon: "text-brand-violet",
  },
  pink: {
    bg: "bg-brand-pink/10",
    icon: "text-brand-pink",
  },
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading
          eyebrow="SERVICIILE NOASTRE"
          title="Soluții Cadastrale pentru Fiecare Etapă"
          subtitle="De la primul cadastru până la dezvoltări complexe — oferim documentațiile potrivite pentru proprietari, constructori, dezvoltatori și profesioniști."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const accent = accentMap[service.accentColor as keyof typeof accentMap];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-full"
              >
                <Link href={service.href} className="group block h-full">
                  <div className="relative flex h-full flex-col rounded-2xl border-2 border-[#E5E9F2] bg-white p-6 card-shadow transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-cyan group-hover:shadow-[0_8px_40px_rgba(11,20,55,0.12)]">

                    {/* Icon */}
                    <div className={cn("mb-5 flex h-12 w-12 items-center justify-center rounded-xl", accent.bg)}>
                      <Icon className={cn("h-6 w-6", accent.icon)} />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-navy-ink">{service.title}</h3>
                    <p className="mb-4 text-sm text-text-muted leading-relaxed">{service.description}</p>

                    <ul className="mb-6 flex-1 space-y-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm text-navy-ink">
                          <Check className="h-4 w-4 flex-shrink-0 text-brand-cyan" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-brand-cyan group-hover:gap-2.5 transition-all">
                      Află mai mult <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
