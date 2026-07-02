"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Home, Hammer, Building2, PencilRuler, Scale, ShieldCheck, FileCheck2, Zap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const servicesMenu = [
  { href: "/servicii/proprietari",           label: "Pentru Proprietari",    Icon: Home        },
  { href: "/servicii/construire-casa",        label: "Construire Casă",       Icon: Hammer      },
  { href: "/servicii/dezvoltatori",           label: "Dezvoltatori",          Icon: Building2   },
  { href: "/servicii/arhitecti-proiectanti",  label: "Arhitecți",             Icon: PencilRuler },
  { href: "/servicii/notari-avocati",         label: "Notari & Avocați",      Icon: Scale       },
  { href: "/servicii/due-diligence",          label: "Due Diligence",         Icon: ShieldCheck },
];

const certificatesMenu = [
  { href: "/servicii/certificat-edificare",  label: "Certificat Edificare",  Icon: FileCheck2  },
  { href: "/servicii/certificat-energetic",  label: "Certificat Energetic",  Icon: Zap         },
  { href: "/servicii/certificat-urbanism",   label: "Certificat Urbanism",   Icon: FileText    },
];

const navLinks = [
  { label: "Servicii", href: "/servicii", hasDropdown: true },
  { label: "Proiecte",  href: "/proiecte" },
  { label: "Localități", href: "/localitati" },
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "Întrebări Frecvente", href: "/intrebari-frecvente" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 250);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(11,20,55,0.08)] border-b border-[#E5E9F2]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-18 items-center justify-between px-4 py-3 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/logo_dani.png"
              alt="DANI Logo"
              width={1254}
              height={1254}
              className={cn("h-16 w-auto transition-all", scrolled ? "" : "brightness-0 invert")}
              priority
            />
            <Image
              src="/logo/logo_dani_scris.png"
              alt="DANI"
              width={891}
              height={306}
              className={cn("h-12 w-auto transition-all", scrolled ? "" : "brightness-0 invert")}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      scrolled
                        ? "text-navy-ink hover:bg-bg-muted"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>

                  <div
                    onMouseEnter={openServices}
                    onMouseLeave={closeServices}
                    className={cn(
                      "absolute top-full left-0 pt-2 w-[540px] transition-all duration-200 origin-top",
                      servicesOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    )}
                  >
                  <div className="rounded-2xl border border-[#E5E9F2] bg-white shadow-xl p-3">
                    <div className="grid grid-cols-2 gap-x-2">
                      {/* Left column — persona services */}
                      <div>
                        <p className="px-3 pb-1 pt-1 text-[9px] font-bold uppercase tracking-widest text-text-muted">
                          Servicii
                        </p>
                        {servicesMenu.map(({ href, label, Icon }) => (
                          <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-navy-ink hover:bg-bg-muted transition-colors"
                          >
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10">
                              <Icon className="h-3.5 w-3.5 text-brand-cyan" />
                            </div>
                            {label}
                          </Link>
                        ))}
                      </div>

                      {/* Right column — certificates */}
                      <div className="border-l border-[#E5E9F2] pl-2">
                        <p className="px-3 pb-1 pt-1 text-[9px] font-bold uppercase tracking-widest text-text-muted">
                          Certificate & Documentații
                        </p>
                        {certificatesMenu.map(({ href, label, Icon }) => (
                          <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-navy-ink hover:bg-bg-muted transition-colors"
                          >
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-violet/10">
                              <Icon className="h-3.5 w-3.5 text-brand-violet" />
                            </div>
                            {label}
                          </Link>
                        ))}
                        <div className="mx-3 my-1.5 h-px bg-[#E5E9F2]" />
                        <Link
                          href="/servicii"
                          className="flex items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-wider text-brand-cyan hover:bg-brand-cyan/5 transition-colors"
                        >
                          Toate serviciile →
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    scrolled
                      ? "text-navy-ink hover:bg-bg-muted"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + phone — desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0770556677"
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                scrolled ? "text-navy-ink hover:text-brand-violet" : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="h-4 w-4 text-brand-cyan" />
              0770 55 66 77
            </a>
            <Button asChild size="default">
              <Link href="/contact">Solicită Ofertă</Link>
            </Button>
          </div>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:0770556677"
              aria-label="Sună la 0770 55 66 77"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                scrolled ? "bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan/20" : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              className={cn(
                "p-2 rounded-lg transition-colors",
                scrolled ? "text-navy-ink hover:bg-bg-muted" : "text-white hover:bg-white/10"
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Deschide meniul"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#E5E9F2]">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Image src="/logo/logo_dani.png" alt="DANI" width={1254} height={1254} className="h-9 w-auto" />
                <Image src="/logo/logo_dani_scris.png" alt="DANI" width={891} height={306} className="h-6 w-auto" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-bg-muted text-navy-ink"
                aria-label="Închide meniul"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {/* Services section */}
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-text-muted mt-2 mb-1">
                Servicii
              </p>
              {servicesMenu.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-ink hover:bg-bg-muted"
                >
                  <Icon className="h-4 w-4 text-brand-cyan" />
                  {label}
                </Link>
              ))}
              <div className="my-2 h-px bg-[#E5E9F2]" />

              {/* Certificates section */}
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
                Certificate & Documentații
              </p>
              {certificatesMenu.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-ink hover:bg-bg-muted"
                >
                  <Icon className="h-4 w-4 text-brand-violet" />
                  {label}
                </Link>
              ))}
              <Link
                href="/servicii"
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-3 py-2 text-xs font-semibold text-brand-cyan hover:bg-brand-cyan/5 rounded-xl"
              >
                Toate serviciile →
              </Link>

              <div className="my-2 h-px bg-[#E5E9F2]" />

              {/* Other nav links */}
              {navLinks.filter((l) => !l.hasDropdown).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-navy-ink hover:bg-bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-[#E5E9F2]">
              <Button asChild size="default" className="w-full">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Solicită Ofertă
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
