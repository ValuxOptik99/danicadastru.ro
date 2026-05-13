"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #8B5CF6 0%, #2563EB 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 lg:px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* ANCPI badge */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1.5">
                <Award className="h-3.5 w-3.5 text-brand-cyan" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                  Autorizat ANCPI
                </span>
              </div>
            </div>

            <h1
              className="mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Excelență în{" "}
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #22D3EE 0%, #8B5CF6 50%, #EC4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Geodezie
              </span>{" "}
              și Cadastru
            </h1>

            <p className="mb-8 max-w-xl text-base text-white/70 md:text-lg leading-relaxed">
              Servicii profesionale de măsurători și documentație tehnică pentru
              casa ta. Precizie milimetrică susținută de tehnologie de ultimă oră.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Solicită o Consultație</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/obtine-cadastru-ancpi">Obține Cadastru</Link>
              </Button>
            </div>

            {/* Decorative quote */}
            <div className="mt-10 flex items-start gap-3">
              <div className="mt-1 h-12 w-0.5 flex-shrink-0 rounded-full bg-brand-cyan" />
              <p className="italic text-sm text-white/50 leading-relaxed">
                &ldquo;Precizia este fundația fiecărui proiect de succes.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=85"
                alt="Inginer topograf cu stație totală - DANI Cadastru"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay left-to-right */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(10,14,39,0.5) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rounded-2xl bg-white p-4 shadow-[0_8px_40px_rgba(11,20,55,0.15)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                Proiecte Finalizate
              </p>
              <p className="text-3xl font-extrabold text-navy-ink">
                2.5k<span className="text-brand-cyan">+</span>
              </p>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 rounded-2xl bg-navy-800/90 backdrop-blur p-3 flex items-center gap-2.5 shadow-xl"
            >
              <div className="h-8 w-8 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">ANCPI Clasa A</p>
                <p className="text-[10px] text-white/60">Autorizat oficial</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
