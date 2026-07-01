import Link from "next/link";
import { MapPin, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { localitati, clusters } from "@/lib/data/localitati";

const serviciiOferte = [
  "Cadastru & Intabulare",
  "Prima înregistrare imobil",
  "Actualizare construcții",
  "Dezmembrare & Alipire",
  "Trasări topografice",
  "Relevee construcții",
  "Planuri topografice",
  "Documentații ANCPI/OCPI",
];

const clusterAccent: Record<string, { dot: string; border: string; bg: string }> = {
  "litoral-sud":   { dot: "bg-brand-cyan",   border: "border-brand-cyan/30",   bg: "bg-brand-cyan/5"   },
  "litoral-nord":  { dot: "bg-brand-cyan",   border: "border-brand-cyan/20",   bg: "bg-brand-cyan/4"   },
  "metropolitan":  { dot: "bg-brand-violet", border: "border-brand-violet/30", bg: "bg-brand-violet/5" },
  "vest-centru":   { dot: "bg-brand-pink",   border: "border-brand-pink/25",   bg: "bg-brand-pink/5"   },
  "nord-judet":    { dot: "bg-brand-violet", border: "border-brand-violet/20", bg: "bg-brand-violet/4" },
};

const WA_URL =
  "https://wa.me/40770556677?text=Bun%C4%83!%20Am%20o%20%C3%AEntrebare%20despre%20cadastru.";

export function LocalitatiContent() {
  const sorted = [...localitati].sort((a, b) =>
    a.name.localeCompare(b.name, "ro")
  );

  return (
    <>
      {/* REGIONAL CLUSTERS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              ZONE REGIONALE
            </p>
            <h2
              className="text-2xl font-extrabold text-navy-ink md:text-3xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Cinci zone de activitate în Dobrogea
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-text-muted">
              Organizăm serviciile pe zone geografice pentru o mai bună acoperire. Indiferent de localitate, un inginer autorizat vine la proprietatea ta.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clusters.map((cluster) => {
              const accent = clusterAccent[cluster.slug] ?? clusterAccent["metropolitan"];
              return (
                <div
                  key={cluster.slug}
                  className={`rounded-2xl border p-5 card-shadow ${accent.border} ${accent.bg}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${accent.dot}`} />
                    <h3 className="font-bold text-navy-ink text-base">{cluster.title}</h3>
                  </div>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">
                    {cluster.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cluster.localities.map((loc) => (
                      <span
                        key={loc}
                        className="inline-flex items-center rounded-full bg-white border border-[#E5E9F2] px-2.5 py-0.5 text-xs font-medium text-navy-ink shadow-sm"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* National card */}
            <div className="rounded-2xl border border-[#E5E9F2] bg-bg-muted p-5 card-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2.5 w-2.5 rounded-full shrink-0 bg-brand-magenta" />
                <h3 className="font-bold text-navy-ink text-base">Proiecte Naționale</h3>
              </div>
              <p className="text-sm text-text-muted mb-4 leading-relaxed">
                La cerere, realizăm lucrări cadastrale și în afara Dobrogei — oriunde în România.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["București", "Ilfov", "Tulcea", "Timișoara", "Alte județe"].map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center rounded-full bg-white border border-[#E5E9F2] px-2.5 py-0.5 text-xs font-medium text-navy-ink shadow-sm"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL ALPHABETICAL LIST */}
      <section className="py-16 bg-bg-muted">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              LISTA COMPLETĂ
            </p>
            <h2
              className="text-2xl font-extrabold text-navy-ink md:text-3xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Toate Localitățile Deservite — Județul Constanța
            </h2>
            <p className="mt-2 text-text-muted">
              {localitati.length} localități din județul Constanța, în ordine alfabetică
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E9F2] bg-white p-6 md:p-8 card-shadow">
            <div className="flex flex-wrap gap-2">
              {sorted.map((loc) => (
                <span
                  key={loc.slug}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E9F2] px-3 py-1.5 text-sm font-medium text-navy-ink hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-colors"
                >
                  <MapPin className="h-3 w-3 text-brand-cyan shrink-0" />
                  {loc.name}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs text-text-muted border-t border-[#E5E9F2] pt-4">
              Localități deservite în județul Constanța: Constanța, Năvodari, Ovidiu, Valu lui Traian, Cumpăna, Lumina, Agigea, Eforie, Techirghiol, Mangalia, Medgidia, Murfatlar, Mihail Kogălniceanu, Tuzla, Costinești, Corbu, Cernavodă, Hârșova, Negru Vodă și alte {localitati.length - 19} localități din Dobrogea.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES REMINDER */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 80% at 0% 50%, rgba(34,211,238,0.06) 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                SERVICII DISPONIBILE
              </p>
              <h2
                className="text-2xl font-extrabold text-white md:text-3xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Aceleași servicii în fiecare localitate
              </h2>
              <p className="mt-3 text-white/60 leading-relaxed">
                Indiferent de localitate, oferim documentație completă conform standardelor ANCPI și OCPI Constanța, semnată de ingineri autorizați clasa A și B.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {serviciiOferte.map((serviciu) => (
                <div key={serviciu} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <Check className="h-4 w-4 shrink-0 text-brand-cyan" />
                  <span className="text-sm font-medium text-white">{serviciu}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2
            className="text-2xl font-extrabold text-navy-ink md:text-3xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Nu găsești localitatea ta?
          </h2>
          <p className="mt-3 mx-auto max-w-lg text-text-muted">
            Contactează-ne — lucrăm în toată Dobrogea și, la cerere, în orice localitate din România.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Solicită ofertă gratuită</Link>
            </Button>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E9F2] bg-bg-muted px-6 py-3 text-sm font-semibold text-navy-ink transition hover:border-brand-cyan/40 hover:bg-brand-cyan/5"
            >
              <Phone className="h-4 w-4 text-brand-cyan" />
              Scrie pe WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
