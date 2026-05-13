"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, FileCheck2, Compass, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Servicii",
    href: "/servicii",
    dropdown: [
      { label: "Cadastru & Intabulare", href: "/servicii/cadastru-intabulare", icon: FileCheck2 },
      { label: "Topografie Inginerească", href: "/servicii/topografie-ingineresca", icon: Compass },
      { label: "Scanare Laser 3D", href: "/servicii/scanare-laser-3d", icon: ScanLine },
    ],
  },
  { label: "Proiecte", href: "/proiecte" },
  { label: "Localități", href: "/localitati" },
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              src="/logo/VDlogo.png"
              alt="Vibe Design Logo"
              width={1001}
              height={751}
              className="h-12 w-auto"
              priority
            />
            <div className="flex flex-col gap-0.5">
              <span
                className={cn(
                  "text-2xl font-bold leading-none tracking-tight transition-colors",
                  scrolled ? "text-navy-ink" : "text-white"
                )}
              >
                Vibe Design
              </span>
              <span
                className={cn(
                  "text-xs font-medium tracking-wide transition-colors",
                  scrolled ? "text-text-muted" : "text-white/60"
                )}
              >
                Cadastru și Intabulare
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
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
                    className={cn(
                      "absolute top-full left-0 mt-2 w-64 rounded-2xl border border-[#E5E9F2] bg-white shadow-xl p-2 transition-all duration-200 origin-top",
                      servicesOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    )}
                  >
                    {link.dropdown.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-ink hover:bg-bg-muted transition-colors"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-cyan/10">
                            <Icon className="h-4 w-4 text-brand-cyan" />
                          </div>
                          {item.label}
                        </Link>
                      );
                    })}
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

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild size="default">
              <Link href="/contact">Solicită Ofertă</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-navy-ink hover:bg-bg-muted" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Deschide meniul"
          >
            <Menu className="h-6 w-6" />
          </button>
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
                <Image src="/logo/VDlogo.png" alt="Vibe Design" width={1001} height={751} className="h-9 w-auto" />
                <span className="font-bold text-navy-ink">Vibe Design</span>
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
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-text-muted mt-2 mb-1">
                      {link.label}
                    </p>
                    {link.dropdown.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy-ink hover:bg-bg-muted"
                        >
                          <Icon className="h-4 w-4 text-brand-cyan" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-navy-ink hover:bg-bg-muted"
                  >
                    {link.label}
                  </Link>
                )
              )}
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
