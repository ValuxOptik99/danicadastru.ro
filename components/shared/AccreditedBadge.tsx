import { cn } from "@/lib/utils";

interface AccreditedBadgeProps {
  className?: string;
  dark?: boolean;
}

export function AccreditedBadge({ className, dark = false }: AccreditedBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest transition-colors",
        dark
          ? "border-brand-cyan/40 text-brand-cyan"
          : "border-brand-cyan/40 text-brand-cyan",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
      Autorizat ANCPI
    </span>
  );
}
