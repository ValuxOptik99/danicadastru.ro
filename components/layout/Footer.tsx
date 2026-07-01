import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";

const zoneDeservite = [
  "Constanța",
  "Mangalia",
  "Năvodari",
  "Medgidia",
  "Eforie",
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/logo_dani.png"
                alt="DANI"
                width={1254}
                height={1254}
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
              <Image src="/logo/logo_dani_scris.png" alt="DANI" width={891} height={306} className="h-6 w-auto brightness-0 invert opacity-90" />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Servicii complete de cadastru, intabulare și topografie. Inginer autorizat ANCPI cu sediul în Mangalia, jud. Constanța. Acoperire în toată Dobrogea și, la cerere, la nivel național.
            </p>
            <ul className="mb-6 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-cyan" />
                <span>Șos. Constanței nr. 19, Mangalia, Constanța</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-cyan" />
                <a href="tel:+40770556677" className="hover:text-white transition-colors">0770 55 66 77</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-cyan" />
                <a href="mailto:office@danicadastru.ro" className="hover:text-white transition-colors">office@danicadastru.ro</a>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-transparent hover:text-white transition-all duration-200 hover:[background:linear-gradient(135deg,#2563EB_0%,#22D3EE_35%,#8B5CF6_70%,#EC4899_100%)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Companie */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Companie
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Despre Noi", href: "/despre-noi" },
                { label: "Echipa", href: "/despre-noi#echipa" },
                { label: "Cariere", href: "/despre-noi#cariere" },
                { label: "Întrebări Frecvente", href: "/intrebari-frecvente" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicii */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Servicii
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Pentru Proprietari",   href: "/servicii/proprietari" },
                { label: "Construire Casă",       href: "/servicii/construire-casa" },
                { label: "Dezvoltatori",          href: "/servicii/dezvoltatori" },
                { label: "Arhitecți",             href: "/servicii/arhitecti-proiectanti" },
                { label: "Notari & Avocați",      href: "/servicii/notari-avocati" },
                { label: "Due Diligence",         href: "/servicii/due-diligence" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone Deservite */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Zone Deservite
            </h3>
            <ul className="space-y-2.5">
              {zoneDeservite.map((city) => (
                <li key={city}>
                  <Link
                    href="/localitati"
                    className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-brand-cyan flex-shrink-0" />
                    {city}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/localitati"
                  className="text-sm text-brand-cyan hover:text-brand-cyan/80 transition-colors"
                >
                  Toate localitățile →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ANPC badges */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
            <Image src="/logo/anpc-sal.png" alt="ANPC SAL" width={530} height={136} className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            <Image src="/logo/anpc-sol.png" alt="ANPC SOL" width={516} height={144} className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-center md:text-left">
            <p>© 2026 VIBE DESIGN GLOW SRL · CUI 46051134 · J2022001411131</p>
            <p className="text-white/40 mt-0.5">Toate drepturile rezervate. Firmă Acreditată ANCPI.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
            <Link href="/politica-confidentialitate" className="hover:text-white transition-colors">
              Confidențialitate
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/politica-cookies" className="hover:text-white transition-colors">
              Cookie-uri
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/termeni-si-conditii" className="hover:text-white transition-colors">
              Termeni
            </Link>
            <span className="text-white/20">·</span>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
