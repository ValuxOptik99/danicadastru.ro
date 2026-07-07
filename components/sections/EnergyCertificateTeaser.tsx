"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileCheck2 } from "lucide-react";

export function EnergyCertificateTeaser() {
  return (
    <section className="section-padding bg-bg-muted">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-[#E5E9F2] bg-navy-950 shadow-[0_20px_60px_rgba(11,20,55,0.15)]"
        >
          {/* Decorative gradient glows */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl" />

          <div className="relative grid items-center gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
            {/* LEFT — content */}
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white lg:text-4xl">
                Certificat de{" "}
                <span className="bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-pink bg-clip-text text-transparent">
                  Performanță Energetică
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
                Ai nevoie de un certificat energetic pentru vânzare, închiriere sau recepția
                unei construcții? Îl eliberăm pentru orice tip de spațiu — apartamente, case,
                birouri sau spații comerciale.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  "Pentru orice tip de spațiu sau clădire",
                  "Eliberat de auditor energetic atestat",
                  "Valabil 10 ani, conform legislației",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-cyan" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/servicii/certificat-energetic"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D946EF] to-[#EC4899] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:brightness-110"
                >
                  Află mai multe
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT — energy class visual */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                  <FileCheck2 className="h-4 w-4 text-brand-cyan" />
                  Clasă Energetică
                </div>
                <div className="space-y-1.5">
                  {[
                    { label: "A", w: "100%", color: "bg-green-500" },
                    { label: "B", w: "88%",  color: "bg-lime-500" },
                    { label: "C", w: "76%",  color: "bg-yellow-500" },
                    { label: "D", w: "64%",  color: "bg-amber-500" },
                    { label: "E", w: "52%",  color: "bg-orange-500" },
                    { label: "F", w: "40%",  color: "bg-red-500" },
                    { label: "G", w: "28%",  color: "bg-red-700" },
                  ].map((row, i) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-4 text-xs font-bold text-white/80">{row.label}</span>
                      <div className="h-6 flex-1 overflow-hidden rounded">
                        <div
                          className={`h-full rounded ${row.color}`}
                          style={{ width: row.w }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs text-white/50">
                  De la eficient (A) la ineficient (G)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
