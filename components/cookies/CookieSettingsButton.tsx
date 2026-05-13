"use client";

export function CookieSettingsButton({ variant = "link" }: { variant?: "link" | "button" }) {
  const handleClick = () => window.dispatchEvent(new CustomEvent("dani:open-cookie-settings"));

  if (variant === "button") {
    return (
      <button
        onClick={handleClick}
        className="inline-flex rounded-full border border-[#E5E9F2] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-ink transition hover:border-brand-cyan hover:text-brand-cyan"
      >
        Gestionează Preferințele Cookie
      </button>
    );
  }

  return (
    <button onClick={handleClick} className="hover:text-white transition-colors">
      Setări Cookie-uri
    </button>
  );
}
