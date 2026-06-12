"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search, MessageCircle, ArrowRight,
  BookOpen, Wallet, FileText, Banknote, Home, Split, Users, AlertCircle, ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQCategory } from "@/lib/data/faq";

const iconMap = {
  BookOpen, Wallet, FileText, Banknote, Home, Split, Users, AlertCircle, ShieldCheck,
} as const;

const WA_URL =
  "https://wa.me/40770556677?text=Bun%C4%83!%20Am%20o%20%C3%AEntrebare%20despre%20cadastru.";

export function FAQPageClient({ categories }: { categories: FAQCategory[] }) {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query, categories]);

  const totalQuestions = categories.reduce((sum, c) => sum + c.items.length, 0);
  const filteredTotal = filteredCategories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 text-white">
        <div className="container mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-brand-cyan">
              ÎNTREBĂRI FRECVENTE
            </div>
            <h1 className="text-3xl font-bold leading-tight lg:text-5xl">
              Răspunsuri la cele mai frecvente întrebări despre{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #22D3EE, #8B5CF6, #EC4899)" }}
              >
                cadastru și intabulare
              </span>
            </h1>
            <p className="mt-5 text-base text-white/75 lg:text-lg">
              Ghid complet cu {totalQuestions} întrebări organizate pe categorii. Dacă nu găsești
              răspunsul aici, scrie-ne pe WhatsApp.
            </p>

            {/* Search bar */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Caută o întrebare... (ex. preț cadastru, intabulare apartament)"
                  className="w-full rounded-full border border-white/15 bg-white/5 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-white/40 backdrop-blur-sm focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/30"
                  aria-label="Caută în întrebări frecvente"
                />
              </div>
              {query && (
                <p className="mt-3 text-sm text-white/60">
                  {filteredTotal} rezultate găsite
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-bg-muted py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[260px,1fr]">

            {/* Sticky sidebar — desktop only */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
                  Categorii
                </div>
                <nav aria-label="Categorii FAQ">
                  <ul className="space-y-0.5">
                    {categories.map((cat) => {
                      const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? BookOpen;
                      const isActive = filteredCategories.some((fc) => fc.slug === cat.slug);
                      return (
                        <li key={cat.slug}>
                          <a
                            href={`#${cat.slug}`}
                            className={`flex items-start gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                              isActive
                                ? "text-navy-ink hover:bg-white"
                                : "pointer-events-none text-text-muted opacity-40"
                            }`}
                          >
                            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                            <span className="leading-snug">{cat.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* FAQ content */}
            <div className="min-w-0">
              {filteredCategories.length === 0 ? (
                <div className="rounded-2xl border border-[#E5E9F2] bg-white p-10 text-center">
                  <p className="text-text-muted">
                    Nu am găsit întrebări care să conțină &ldquo;
                    <span className="font-medium text-navy-ink">{query}</span>&rdquo;.
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    Încearcă alți termeni sau{" "}
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-cyan underline"
                    >
                      scrie-ne pe WhatsApp
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <div className="space-y-12">
                  {filteredCategories.map((cat) => {
                    const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? BookOpen;
                    return (
                      <motion.div
                        key={cat.slug}
                        id={cat.slug}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4 }}
                        className="scroll-mt-24"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10">
                            <Icon className="h-5 w-5 text-brand-cyan" />
                          </div>
                          <h2 className="text-xl font-bold text-navy-ink lg:text-2xl">
                            {cat.title}
                          </h2>
                        </div>
                        <p className="mb-5 text-sm text-text-muted">{cat.description}</p>

                        <Accordion type="multiple" className="space-y-2">
                          {cat.items.map((item) => (
                            <AccordionItem
                              key={item.id}
                              value={`q-${item.id}`}
                              className="overflow-hidden rounded-xl border border-[#E5E9F2] bg-white shadow-[0_2px_8px_rgba(11,20,55,0.04)] transition-shadow data-[state=open]:shadow-[0_4px_16px_rgba(11,20,55,0.08)]"
                            >
                              <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold text-navy-ink hover:text-brand-cyan hover:no-underline [&[data-state=open]]:text-brand-violet">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent className="px-5 pb-5 pt-0 text-sm leading-relaxed text-text-muted">
                                {item.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy-950 text-white">
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center lg:px-6 lg:py-20">
          <h2 className="text-2xl font-bold lg:text-3xl">Nu ai găsit ce căutai?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/75">
            Scrie-ne direct pe WhatsApp și răspundem rapid cu un răspuns personalizat situației tale.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:brightness-110"
              style={{ background: "linear-gradient(to right, #D946EF, #EC4899)" }}
            >
              <MessageCircle className="h-4 w-4" />
              Întreabă pe WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-navy-ink"
            >
              Formular de Contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
