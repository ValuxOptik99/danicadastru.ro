import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, FileText, Inbox, LogOut } from "lucide-react";
import { verifySession } from "@/lib/auth";
import { logout } from "./logout-action";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Admin — DANI Cadastru",
};

const navItems = [
  { href: "/admin",         label: "Dashboard",  Icon: LayoutDashboard },
  { href: "/admin/articole", label: "Articole",   Icon: FileText },
  { href: "/admin/cereri",   label: "Cereri",     Icon: Inbox },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ok = await verifySession();
  if (!ok) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-[#F0F2F7]">
      {/* Sidebar */}
      <aside className="flex w-56 shrink-0 flex-col border-r border-white/10 bg-navy-950">
        <div className="flex h-16 items-center gap-2.5 border-b border-white/10 px-4">
          <Image
            src="/logo/logo_dani.png"
            alt="DANI"
            width={1254}
            height={1254}
            className="h-8 w-auto brightness-0 invert"
          />
          <span className="text-xs font-bold uppercase tracking-wider text-white/60">
            Admin
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 p-3">
          {navItems.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>

        <form action={logout} className="border-t border-white/10 p-3">
          <button
            type="submit"
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-white/50 transition hover:bg-red-500/15 hover:text-red-400"
          >
            <LogOut className="h-4 w-4" />
            Deconectare
          </button>
        </form>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
