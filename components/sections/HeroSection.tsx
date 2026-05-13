"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

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
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Autoritate Tehnică
            </span>
          </div>

          {/* H1 */}
          <h1
            className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Excelență în Geodezie și Cadastru
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Servicii profesionale de măsurători și documentație tehnică pentru
            casa ta. Precizie milimetrică susținută de tehnologie de ultimă oră.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(to right, #D946EF, #EC4899)" }}
            >
              Solicită Ofertă
            </Link>
            <Link
              href="/servicii"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-navy-ink"
            >
              Serviciile Noastre
            </Link>
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
              &ldquo;Precizia este fundația fiecărui proiect de succes.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
