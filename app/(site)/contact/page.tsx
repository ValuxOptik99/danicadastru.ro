import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact — Solicită Ofertă Gratuită",
  description:
    "Contactează echipa DANI pentru o ofertă gratuită de cadastru, topografie sau scanare 3D. Răspuns în maxim 24 ore.",
  path: "/contact",
});

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "0770 55 66 77", href: "tel:+40770556677" },
  { icon: Mail, label: "Email", value: "cadastru@danicadastru.ro", href: "mailto:cadastru@danicadastru.ro" },
  { icon: MapPin, label: "Sediu", value: "Șos. Constanței nr. 19, Mangalia", href: "#" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">CONTACT</p>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
            Să vorbim despre proiectul tău
          </h1>
          <p className="mx-auto max-w-xl text-white/60 text-lg">
            Completează formularul sau contactează-ne direct. Un specialist te va răspunde în maxim 24 ore.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/80 hover:border-brand-cyan hover:text-white transition-colors"
              >
                <Icon className="h-4 w-4 text-brand-cyan" />
                {value}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-[600px] bg-white" />}>
        <ContactFormSection />
      </Suspense>
    </>
  );
}
