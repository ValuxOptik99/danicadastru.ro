"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileCheck2, Compass, ScanLine, Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const iconMap = {
  FileCheck2,
  Compass,
  ScanLine,
} as const;

const accentMap = {
  cyan: {
    bg: "bg-brand-cyan/10",
    icon: "text-brand-cyan",
    border: "from-brand-cyan to-brand-blue",
  },
  violet: {
    bg: "bg-brand-violet/10",
    icon: "text-brand-violet",
    border: "from-brand-violet to-brand-blue",
  },
  pink: {
    bg: "bg-brand-pink/10",
    icon: "text-brand-pink",
    border: "from-brand-magenta to-brand-pink",
  },
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading
          eyebrow="SERVICIILE NOASTRE"
          title="Servicii Specializate"
          subtitle="Soluții geodezice integrate pentru dezvoltatori imobiliari, arhitecți și proprietari privați."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const accent = accentMap[service.accentColor as keyof typeof accentMap];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="relative h-full rounded-2xl border border-[#E5E9F2] bg-white p-6 card-shadow transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_40px_rgba(11,20,55,0.12)] overflow-hidden">
                    {/* Hover border gradient */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, #2563EB, #22D3EE, #8B5CF6, #EC4899) border-box`,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className={cn(
                        "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
                        accent.bg
                      )}
                    >
                      <Icon className={cn("h-6 w-6", accent.icon)} />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-navy-ink">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-text-muted leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm text-navy-ink">
                          <Check className="h-4 w-4 flex-shrink-0 text-brand-cyan" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-cyan group-hover:gap-2.5 transition-all">
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
