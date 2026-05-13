import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const majorCities = ["București", "Cluj-Napoca", "Timișoara"];

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
                alt="Vibe Design"
                width={1254}
                height={1254}
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
              <span className="text-lg font-bold text-white">Vibe Design</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Expertiză tehnică în geodezie și cadastru. Standarde profesionale în măsurarea spațiului.
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
                <a href="mailto:office@vibe-design.ro" className="hover:text-white transition-colors">office@vibe-design.ro</a>
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
                { label: "Cadastru & Intabulare", href: "/servicii/cadastru-intabulare" },
                { label: "Topografie Inginerească", href: "/servicii/topografie-ingineresca" },
                { label: "Scanare Laser 3D", href: "/servicii/scanare-laser-3d" },
                { label: "Obține Cadastru ANCPI", href: "/obtine-cadastru-ancpi" },
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

          {/* Rețea */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Rețea
            </h3>
            <ul className="space-y-2.5">
              {majorCities.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-brand-cyan flex-shrink-0" />
                  <span className="text-sm">{city}</span>
                </li>
              ))}
              <li>
                <Link
                  href="/localitati"
                  className="text-sm text-brand-cyan hover:text-brand-cyan/80 transition-colors"
                >
                  + Vezi toate localitățile →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center md:text-left">
            © 2026 Vibe Design & Cadastru Authority. Toate drepturile rezervate. Firmă Acreditată ANCPI.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/politica-confidentialitate" className="hover:text-white transition-colors">
              Politică Confidențialitate
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/termeni-si-conditii" className="hover:text-white transition-colors">
              Termeni și Condiții
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/harta-site" className="hover:text-white transition-colors">
              Hartă Site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
