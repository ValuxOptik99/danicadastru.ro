"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";

const GRADIENT_STYLE = {
  background: "linear-gradient(135deg, #22D3EE 0%, #8B5CF6 50%, #EC4899 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L.057 23.571a.75.75 0 0 0 .921.921l5.726-1.472A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.5-5.248-1.375l-.376-.215-3.898 1.002 1.002-3.898-.215-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center px-6 py-20 lg:px-12 lg:py-28 xl:px-20"
        >
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1.5"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Autorizat ANCPI
            </span>
          </motion.div>

          {/* H1 */}
          <h1
            className="mt-6 text-4xl font-extrabold leading-[1.1] text-white lg:text-5xl xl:text-6xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span style={GRADIENT_STYLE}>Cadastru</span>,{" "}
            <span style={GRADIENT_STYLE}>Intabulare</span> și{" "}
            <span style={GRADIENT_STYLE}>Topografie</span>
            <span className="block mt-2 text-white">Rapid, Corect și Fără Bătăi de Cap</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 lg:text-lg">
            Obții documentația necesară pentru vânzare, cumpărare, construire, succesiune sau dezvoltare imobiliară. Inginer autorizat ANCPI, consultanță gratuită, răspuns rapid pe WhatsApp.
          </p>

          {/* Trust bullets */}
          <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-cyan" />
              Inginer autorizat ANCPI
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-cyan" />
              Consultanță gratuită
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-cyan" />
              Gestionăm relația cu OCPI
            </li>
          </ul>

          {/* CTA row */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D946EF] to-[#EC4899] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:brightness-110"
            >
              Solicită Ofertă
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/40770556677?text=Bun%C4%83!%20A%C8%99%20dori%20o%20ofert%C4%83%20pentru%20servicii%20de%20cadastru."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white hover:text-navy-ink"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Trimite Actele pe WhatsApp
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Image with overlays */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative min-h-[500px] lg:min-h-0 lg:aspect-[1122/1260]"
        >
          <Image
            src="/images/hero.png"
            alt="Inginer topograf folosind stație totală pe șantier"
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          {/* Left-edge blend overlay */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent" />
          {/* Bottom gradient for quote legibility */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/80 to-transparent" />
          {/* Quote */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center gap-3">
            <span className="h-6 w-[2px] flex-shrink-0 bg-brand-cyan" />
            <p className="text-sm italic text-white/90">
              &ldquo;Documentații complete pentru fiecare etapă a proiectului tău.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
