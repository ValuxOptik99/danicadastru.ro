"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MapPin, Check, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { counties } from "@/lib/data/counties";
import { cn } from "@/lib/utils";

const serviciiDisponibile = [
  "Cadastru apartament",
  "Cadastru casă",
  "Cadastru teren",
  "Intabulare",
  "Dezmembrare",
  "Alipire",
  "Actualizare informații",
  "Plan de amplasament",
];

export function LocalitatiContent() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("oras") ?? counties[0].slug;
  const [selectedSlug, setSelectedSlug] = useState(initialSlug);
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      counties.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.county.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const selectedCity = counties.find((c) => c.slug === selectedSlug) ?? counties[0];

  return (
    <section className="bg-bg-muted py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="lg:w-64 xl:w-72 flex-shrink-0">
            <div className="sticky top-24 rounded-2xl border border-[#E5E9F2] bg-white p-4 card-shadow">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                <Input
                  placeholder="Caută localitate..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="max-h-[calc(100vh-220px)] overflow-y-auto space-y-0.5 pr-1">
                {filtered.map((county) => (
                  <button
                    key={county.slug}
                    onClick={() => setSelectedSlug(county.slug)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition-colors",
                      selectedSlug === county.slug
                        ? "gradient-cta text-white font-semibold"
                        : "text-navy-ink hover:bg-bg-muted"
                    )}
                  >
                    <MapPin className={cn("h-3.5 w-3.5 flex-shrink-0", selectedSlug === county.slug ? "text-white" : "text-brand-cyan")} />
                    <span>{county.name}</span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="py-4 text-center text-sm text-text-muted">
                    Nicio localitate găsită.
                  </p>
                )}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="rounded-2xl border border-[#E5E9F2] bg-white p-6 md:p-8 card-shadow">
              <div className="mb-6 flex flex-wrap items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-cta flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                    {selectedCity.region} · Județul {selectedCity.county}
                  </p>
                  <h2
                    className="text-2xl font-bold text-navy-ink md:text-3xl"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Servicii de Cadastru și Intabulare în {selectedCity.name}
                  </h2>
                </div>
              </div>

              <div className="prose prose-sm max-w-none space-y-4 text-text-muted leading-relaxed mb-6">
                <p>
                  <strong className="text-navy-ink">Vibe Design</strong> oferă servicii complete de cadastru și intabulare în{" "}
                  <strong className="text-navy-ink">{selectedCity.name}</strong>, reședința județului{" "}
                  <strong className="text-navy-ink">{selectedCity.county}</strong>. Echipa noastră de specialiști autorizați ANCPI
                  lucrează direct cu OCPI {selectedCity.ocpi} pentru a asigura procesarea rapidă a documentațiilor tehnice.
                  Indiferent dacă ai nevoie de înregistrare apartament, dezmembrare teren sau actualizare informații cadastrale
                  în {selectedCity.name}, avem expertiza necesară.
                </p>
                <p>
                  Acoperim toate tipurile de imobile: apartamente în zone centrale precum{" "}
                  <em>{selectedCity.landmark}</em>, case individuale, terenuri agricole și extravilane,
                  precum și ansambluri comerciale. Topografii noștri folosesc echipamente GNSS de ultimă generație
                  pentru măsurători cu precizie milimetrică, asigurând documente conforme cu cerințele OCPI{" "}
                  {selectedCity.ocpi}.
                </p>
                <p>
                  Colaborăm cu notari, avocați și primării din {selectedCity.name} pentru a oferi un serviciu
                  integrat — de la prima consultație până la înscrierea în Cartea Funciară. Timpul mediu de procesare
                  în {selectedCity.name} este de 5-10 zile lucrătoare, în funcție de tipul documentației solicitate.
                </p>
              </div>

              <div className="mb-8 rounded-2xl bg-bg-muted p-5">
                <h3 className="mb-4 font-semibold text-navy-ink">
                  Servicii disponibile în {selectedCity.name}:
                </h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {serviciiDisponibile.map((serviciu) => (
                    <div key={serviciu} className="flex items-center gap-2 text-sm text-navy-ink">
                      <Check className="h-4 w-4 flex-shrink-0 text-brand-cyan" />
                      {serviciu}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="default">
                  <Link href={`/contact?oras=${selectedCity.slug}`}>
                    Solicită ofertă pentru {selectedCity.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="default">
                  <Link href="/contact">Contact general</Link>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
