"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export function AncpiSection() {
  const [notifyEmail, setNotifyEmail] = useState("");

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    setNotifyEmail("");
    toast({
      title: "Mulțumim!",
      description: "Te vom anunța când funcționalitatea devine disponibilă.",
      variant: "success",
    });
  };

  return (
    <section className="section-padding relative overflow-hidden bg-navy-900">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #22D3EE, transparent)" }} />

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              INTEGRARE ANCPI
            </p>
            <h2
              className="mb-5 text-3xl font-bold text-white md:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Obține-ți Cadastrul Direct de la ANCPI
            </h2>
            <p className="mb-6 text-white/60 leading-relaxed">
              Verifică, descarcă și solicită documentația cadastrală pentru imobilul tău,
              integrat cu sistemul oficial ANCPI. Rapid, sigur, oficial.
            </p>
            <ul className="space-y-3">
              {[
                "Date oficiale verificate",
                "Procesare în 24-48 ore",
                "Plată securizată",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <ShieldCheck className="h-4 w-4 flex-shrink-0 text-brand-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Coming soon card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white">Caută imobilul tău</h3>
                  <span className="rounded-full gradient-cta px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    ÎN CURÂND
                  </span>
                </div>
                <div className="relative">
                  <Input
                    placeholder="Introduceți numărul cărții funciare sau adresa"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-brand-cyan pr-12"
                    disabled
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                </div>
                <Button disabled className="mt-3 w-full opacity-40 cursor-not-allowed" size="default">
                  Caută în ANCPI
                </Button>
                <p className="mt-3 text-xs text-white/40 text-center">
                  Funcționalitate în dezvoltare.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="mb-3 text-sm font-medium text-white">
                  Lasă-ne emailul pentru notificare la lansare:
                </p>
                <form onSubmit={handleNotify} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="email@tău.ro"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus-visible:ring-brand-cyan"
                  />
                  <Button type="submit" size="sm" className="flex-shrink-0 gap-1.5">
                    <Bell className="h-3.5 w-3.5" />
                    Anunță-mă
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
