"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, Check,
  Home, Building, Building2, Hammer, PencilRuler, Scale, ShieldCheck,
  FileCheck2, FileSearch, FileText, FilePen,
  Map, Target, Ruler, Award, Mountain,
  ScanLine, Layers, Grid3x3, HardHat,
  Users, Gavel, AlertTriangle, Calculator,
  Scissors, Combine, RefreshCcw,
  Store, CheckCircle2, Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Home, Building, Building2, Hammer, PencilRuler, Scale, ShieldCheck,
  FileCheck2, FileSearch, FileText, FilePen,
  Map, Target, Ruler, Award, Mountain,
  ScanLine, Layers, Grid3x3, HardHat,
  Users, Gavel, AlertTriangle, Calculator,
  Scissors, Combine, RefreshCcw,
  Store, CheckCircle2, Zap,
};

const accentMap = {
  cyan:   { bg: "bg-brand-cyan/10",   icon: "text-brand-cyan",   border: "border-brand-cyan/30"   },
  violet: { bg: "bg-brand-violet/10", icon: "text-brand-violet", border: "border-brand-violet/30" },
  pink:   { bg: "bg-brand-pink/10",   icon: "text-brand-pink",   border: "border-brand-pink/30"   },
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L.057 23.571a.75.75 0 0 0 .921.921l5.726-1.472A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.5-5.248-1.375l-.376-.215-3.898 1.002 1.002-3.898-.215-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export interface ServiceItem {
  icon: string;
  accent: "cyan" | "violet" | "pink";
  title: string;
  description: string;
  bullets: string[];
  href?: string;
}

export interface ServicePageData {
  eyebrow: string;
  h1: string;
  subtitle: string;
  heroImage: { src: string; alt: string };
  whatsappMessage: string;
  audienceDescription: string;
  audienceBullets: string[];
  servicesIntro: string;
  services: ServiceItem[];
  processSteps: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function ServicePageLayout(props: ServicePageData) {
  const {
    eyebrow, h1, subtitle, heroImage, whatsappMessage,
    audienceDescription, audienceBullets,
    servicesIntro, services,
    processSteps,
    faqs,
  } = props;

  const waUrl = `https://wa.me/40770556677?text=${encodeURIComponent(whatsappMessage)}`;

  const ctaButtons = (
    <div className="flex flex-col gap-3 sm:flex-row mt-8">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D946EF] to-[#EC4899] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:brightness-110"
      >
        Solicită Ofertă <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white hover:text-navy-ink"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                {eyebrow}
              </p>
              <h1
                className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                {h1}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 lg:text-lg">
                {subtitle}
              </p>
              {ctaButtons}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PENTRU CINE ── */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl rounded-2xl border border-brand-cyan/30 bg-brand-cyan/5 p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              PENTRU CINE
            </p>
            <p className="mb-5 text-base text-navy-ink leading-relaxed">{audienceDescription}</p>
            <ul className="space-y-2.5">
              {audienceBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-navy-ink">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-cyan" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="bg-bg-muted py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              CE OFERIM
            </p>
            <h2 className="text-2xl font-extrabold text-navy-ink md:text-3xl" style={{ letterSpacing: "-0.02em" }}>
              {servicesIntro}
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon] ?? ShieldCheck;
              const accent = accentMap[svc.accent];
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col rounded-2xl border border-[#E5E9F2] bg-white p-6 card-shadow"
                >
                  <div className={cn("mb-4 flex h-11 w-11 items-center justify-center rounded-xl", accent.bg)}>
                    <Icon className={cn("h-5 w-5", accent.icon)} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-navy-ink">{svc.title}</h3>
                  <p className="mb-4 flex-1 text-sm text-text-muted leading-relaxed">{svc.description}</p>
                  <ul className="space-y-1.5">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-navy-ink">
                        <Check className="h-3.5 w-3.5 flex-shrink-0 text-brand-cyan" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {svc.href && (
                    <Link
                      href={svc.href}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-cyan hover:gap-2 transition-all"
                    >
                      Află mai mult <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              CUM LUCRĂM
            </p>
            <h2 className="text-2xl font-extrabold text-navy-ink md:text-3xl" style={{ letterSpacing: "-0.02em" }}>
              Procesul nostru
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-[#E5E9F2] bg-bg-muted p-6"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-cyan/15">
                  <span className="text-xs font-bold text-brand-cyan">{i + 1}</span>
                </div>
                <h3 className="mb-2 text-sm font-bold text-navy-ink">{step.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-bg-muted py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-2xl">
            <motion.div {...fadeUp} className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                ÎNTREBĂRI FRECVENTE
              </p>
              <h2 className="text-2xl font-extrabold text-navy-ink md:text-3xl" style={{ letterSpacing: "-0.02em" }}>
                Răspunsuri rapide
              </h2>
            </motion.div>

            <motion.div {...fadeUp}>
              <Accordion type="single" collapsible className="rounded-2xl border border-[#E5E9F2] bg-white px-6">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.p {...fadeUp} className="mt-6 text-center text-sm text-text-muted">
              <Link href="/intrebari-frecvente" className="text-brand-cyan hover:underline">
                Vezi toate întrebările frecvente →
              </Link>
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-navy-950 py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2
              className="mb-4 text-3xl font-extrabold text-white md:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Pregătit să începi?
            </h2>
            <p className="mb-8 text-white/70">
              Solicită o consultanță gratuită. Răspundem în maxim 24 ore.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D946EF] to-[#EC4899] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:brightness-110"
              >
                Solicită Ofertă <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white hover:text-navy-ink"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
