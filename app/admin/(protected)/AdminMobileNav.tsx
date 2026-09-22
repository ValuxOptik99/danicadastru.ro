"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, LogOut } from "lucide-react";
import { navItems } from "./nav-items";
import { AdminNavLinks } from "./AdminNavLinks";
import { logout } from "../logout-action";

export function AdminMobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Block body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const currentLabel =
    navItems.find((item) =>
      item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href)
    )?.label ?? "Admin";

  return (
    <>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-navy-950 px-4 lg:hidden">
        <div className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/logo/logo_dani.png"
            alt="DANI"
            width={1254}
            height={1254}
            className="h-7 w-auto shrink-0 brightness-0 invert"
          />
          <span className="truncate text-sm font-semibold text-white">{currentLabel}</span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Deschide meniul"
          aria-expanded={open}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute bottom-0 left-0 top-0 flex w-full max-w-xs flex-col bg-navy-950 shadow-2xl">
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-4">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo/logo_dani.png"
                  alt="DANI"
                  width={1254}
                  height={1254}
                  className="h-7 w-auto brightness-0 invert"
                />
                <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                  Admin
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Închide meniul"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-3">
              <AdminNavLinks variant="drawer" onNavigate={() => setOpen(false)} />
            </nav>

            <form action={logout} className="shrink-0 border-t border-white/10 p-3">
              <button
                type="submit"
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-3 text-sm text-white/50 transition hover:bg-red-500/15 hover:text-red-400"
              >
                <LogOut className="h-4 w-4" />
                Deconectare
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
