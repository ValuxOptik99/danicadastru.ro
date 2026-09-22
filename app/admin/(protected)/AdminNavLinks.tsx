"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "./nav-items";

interface Props {
  variant?: "sidebar" | "drawer";
  onNavigate?: () => void;
}

export function AdminNavLinks({ variant = "sidebar", onNavigate }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-0.5">
      {navItems.map(({ href, label, Icon }) => {
        const active = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-2.5 rounded-xl text-sm transition",
              variant === "drawer" ? "px-3 py-3" : "px-3 py-2",
              active
                ? "bg-white/10 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        );
      })}
    </div>
  );
}
