import { redirect } from "next/navigation";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { verifySession } from "@/lib/auth";
import { logout } from "../logout-action";
import { AdminNavLinks } from "./AdminNavLinks";
import { AdminMobileNav } from "./AdminMobileNav";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ok = await verifySession();
  if (!ok) redirect("/admin/login");

  return (
    <div className="flex min-h-screen flex-col bg-[#F0F2F7] lg:flex-row">
      {/* Sidebar — desktop only */}
      <aside className="hidden w-56 shrink-0 flex-col border-r border-white/10 bg-navy-950 lg:flex">
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

        <nav className="flex-1 p-3">
          <AdminNavLinks variant="sidebar" />
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

      {/* Top bar + drawer — mobile/tablet only */}
      <AdminMobileNav />

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
