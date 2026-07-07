import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CityPin } from "./CityPin";
import type { LocalPageData } from "@/lib/data/local-pages";

const ACCENT_CLASSES = {
  cyan:   { icon: "text-brand-cyan",   bg: "bg-brand-cyan/10",   border: "border-brand-cyan/20"   },
  violet: { icon: "text-brand-violet", bg: "bg-brand-violet/10", border: "border-brand-violet/20" },
  pink:   { icon: "text-brand-pink",   bg: "bg-brand-pink/10",   border: "border-brand-pink/20"   },
};

const serviceLinks = [
  { label: "Cadastru și intabulare", href: "/servicii/proprietari" },
  { label: "Dezmembrare și alipire", href: "/servicii/proprietari" },
  { label: "Ridicări topografice", href: "/servicii/construire-casa" },
  { label: "Certificat de edificare", href: "/servicii/certificat-edificare" },
  { label: "Actualizări cadastrale", href: "/servicii/proprietari" },
  { label: "Certificat energetic", href: "/servicii/certificat-energetic" },
];

interface Props {
  data: LocalPageData;
}

export function LocalSeoPage({ data }: Props) {
  const waHref = `https://wa.me/40770556677?text=${encodeURIComponent(data.whatsappMessage)}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `DANI Cadastru — Cadastru ${data.city}`,
    description: data.metaDescription,
    url: `https://danicadastru.ro/${data.slug}`,
    telephone: "+40770556677",
    email: "cadastru@danicadastru.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Șos. Constanței nr. 19",
      addressLocality: "Mangalia",
      addressRegion: "Constanța",
      addressCountry: "RO",
    },
    areaServed: { "@type": "City", name: data.city },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-navy-950 pb-20 pt-32">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-violet/10 blur-3xl" />

        <div className="container relative mx-auto px-4 lg:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-brand-cyan">
                CADASTRU LOCAL · JUDEȚUL CONSTANȚA
              </p>
              <h1
                className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                {(() => {
                  const parts = data.h1.split(data.city);
                  return parts.map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < parts.length - 1 && (
                        <span className="gradient-text">{data.city}</span>
                      )}
                    </span>
                  ));
                })()}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                {data.heroIntro}
              </p>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: "Inginer autorizat ANCPI" },
                  { icon: CheckCircle2, label: "OCPI Constanța" },
                  { icon: Clock, label: "Răspuns rapid" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-cyan" />
                    {label}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Solicită ofertă
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-brand-cyan" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <CityPin city={data.city} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. LOCAL CONTEXT ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full border border-brand-cyan/30 bg-brand-cyan/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-cyan">
              {data.zoneType}
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-navy-ink md:text-3xl" style={{ letterSpacing: "-0.02em" }}>
              Specificul cadastral al {data.city}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {data.localContext}
            </p>
          </div>

          <div className="mt-10 mx-auto max-w-3xl grid gap-2 sm:grid-cols-2">
            {data.propertyTypes.map((pt) => (
              <div key={pt} className="flex items-start gap-2.5 rounded-xl border border-[#E5E9F2] bg-bg-muted px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                <span className="text-sm text-navy-ink">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EMPHASIZED SERVICES ── */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-brand-cyan">
              SERVICII POTRIVITE
            </p>
            <h2 className="text-2xl font-extrabold text-navy-ink md:text-3xl" style={{ letterSpacing: "-0.02em" }}>
              Servicii potrivite pentru {data.city}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {data.emphasizedServices.map((svc) => {
              const ac = ACCENT_CLASSES[svc.accent];
              return (
                <div
                  key={svc.title}
                  className={`rounded-2xl border p-6 bg-white card-shadow ${ac.border}`}
                >
                  <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${ac.bg}`}>
                    <CheckCircle2 className={`h-5 w-5 ${ac.icon}`} />
                  </div>
                  <h3 className="font-bold text-navy-ink">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{svc.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. LOCAL CHALLENGES ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-navy-900 p-8 md:p-10">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-brand-cyan">
                DE REȚINUT PENTRU {data.city.toUpperCase()}
              </p>
              <h2 className="text-xl font-extrabold text-white md:text-2xl" style={{ letterSpacing: "-0.01em" }}>
                Situații frecvente în zonă
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                {data.localChallenges}
              </p>
              <div className="mt-6 rounded-xl border border-brand-cyan/25 bg-brand-cyan/8 px-5 py-4">
                <p className="text-sm leading-relaxed text-white/80">
                  <span className="font-semibold text-brand-cyan">OCPI: </span>
                  {data.ocpiNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES STRIP ── */}
      <section className="py-12 bg-bg-muted">
        <div className="container mx-auto px-4 lg:px-6">
          <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-widest text-brand-cyan">
            TOATE SERVICIILE NOASTRE
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {serviceLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="rounded-full border border-[#E5E9F2] bg-white px-4 py-2 text-xs font-medium text-navy-ink transition hover:border-brand-cyan/40 hover:bg-brand-cyan/5"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-2xl">
            <h2
              className="mb-8 text-2xl font-extrabold text-navy-ink md:text-3xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Despre cadastru în {data.city}
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {data.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-[#E5E9F2] bg-white px-5"
                >
                  <AccordionTrigger className="py-4 text-left text-sm font-semibold text-navy-ink hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-text-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* ── 7. NEIGHBORS ── */}
            {data.neighbors.length > 0 && (
              <div className="mt-12">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-brand-cyan">
                  LOCALITĂȚI ÎNVECINATE
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.neighbors.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/${n.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E9F2] bg-bg-muted px-4 py-2 text-sm font-medium text-navy-ink transition hover:border-brand-violet/40 hover:bg-brand-violet/5"
                    >
                      {n.label}
                      <ArrowRight className="h-3.5 w-3.5 text-text-muted" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ── */}
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,211,238,0.07) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl" style={{ letterSpacing: "-0.02em" }}>
            Ai nevoie de cadastru în {data.city}?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/60">
            Solicită o ofertă personalizată. Răspundem în maxim 24 de ore.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Solicită ofertă
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-brand-cyan" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
