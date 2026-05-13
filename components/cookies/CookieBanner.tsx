"use client";

import { useState, useEffect, useCallback } from "react";
import { Cookie, Check, ChevronDown } from "lucide-react";

type ConsentState = {
  analytics: boolean;
  marketing: boolean;
  savedAt: number;
};

const STORAGE_KEY = "dani-cookie-consent";
const CONSENT_VALID_DAYS = 365;

function applyGtagConsent(analytics: boolean, marketing: boolean) {
  if (typeof window === "undefined") return;
  const g = (window as unknown as Record<string, unknown>).gtag;
  if (typeof g !== "function") return;
  (g as Function)("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
}

function getSavedConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: ConsentState = JSON.parse(raw);
    const ageMs = Date.now() - parsed.savedAt;
    if (ageMs > CONSENT_VALID_DAYS * 24 * 60 * 60 * 1000) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const saveConsent = useCallback((anal: boolean, mkt: boolean) => {
    const state: ConsentState = { analytics: anal, marketing: mkt, savedAt: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    applyGtagConsent(anal, mkt);
    setVisible(false);
    setExpanded(false);
  }, []);

  useEffect(() => {
    const saved = getSavedConsent();
    if (saved) {
      applyGtagConsent(saved.analytics, saved.marketing);
    } else {
      setVisible(true);
    }

    const handleOpen = () => {
      const saved = getSavedConsent();
      if (saved) {
        setAnalytics(saved.analytics);
        setMarketing(saved.marketing);
      }
      setExpanded(true);
      setVisible(true);
    };
    window.addEventListener("dani:open-cookie-settings", handleOpen);
    return () => window.removeEventListener("dani:open-cookie-settings", handleOpen);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-navy-900 border border-white/10 shadow-2xl text-white overflow-hidden">
        <div className="flex items-start gap-3 p-5 pb-0">
          <Cookie className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cyan" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-white mb-1">Utilizăm cookie-uri</p>
            <p className="text-xs text-white/70 leading-relaxed">
              Folosim cookie-uri pentru a îmbunătăți experiența pe site, a analiza traficul și a personaliza conținutul.{" "}
              <a href="/politica-cookies" className="text-brand-cyan hover:underline">
                Politică Cookies
              </a>
            </p>
          </div>
        </div>

        {expanded && (
          <div className="mt-4 px-5 space-y-1">
            <div className="h-px bg-white/10" />

            <div className="flex items-center justify-between py-2.5">
              <div>
                <p className="text-sm font-medium text-white">Cookie-uri necesare</p>
                <p className="text-xs text-white/50">Obligatorii pentru funcționarea site-ului. Nu pot fi dezactivate.</p>
              </div>
              <div className="flex h-6 w-11 items-center justify-end rounded-full bg-brand-cyan/20 px-1.5">
                <Check className="h-3.5 w-3.5 text-brand-cyan" />
              </div>
            </div>

            <div className="flex items-center justify-between py-2.5">
              <div>
                <p className="text-sm font-medium text-white">Cookie-uri analitice</p>
                <p className="text-xs text-white/50">Ne ajută să înțelegem cum este utilizat site-ul (Google Analytics).</p>
              </div>
              <button
                onClick={() => setAnalytics((v) => !v)}
                className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${analytics ? "bg-brand-cyan" : "bg-white/20"}`}
                aria-checked={analytics}
                role="switch"
                aria-label="Cookie-uri analitice"
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
                    analytics ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2.5">
              <div>
                <p className="text-sm font-medium text-white">Cookie-uri de marketing</p>
                <p className="text-xs text-white/50">Utilizate pentru reclame personalizate și remarketing.</p>
              </div>
              <button
                onClick={() => setMarketing((v) => !v)}
                className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${marketing ? "bg-brand-cyan" : "bg-white/20"}`}
                aria-checked={marketing}
                role="switch"
                aria-label="Cookie-uri de marketing"
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
                    marketing ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="h-px bg-white/10" />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 p-5 pt-4">
          <button
            onClick={() => saveConsent(true, true)}
            className="flex-1 rounded-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(to right, #D946EF, #EC4899)" }}
          >
            Accept Toate
          </button>

          {expanded ? (
            <button
              onClick={() => saveConsent(analytics, marketing)}
              className="flex-1 rounded-full border border-brand-cyan py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-cyan transition hover:bg-brand-cyan/10"
            >
              Salvează Preferințele
            </button>
          ) : (
            <button
              onClick={() => setExpanded(true)}
              className="flex-1 inline-flex items-center justify-center gap-1 rounded-full border border-white/30 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/70 transition hover:border-white/60 hover:text-white"
            >
              Personalizează <ChevronDown className="h-3.5 w-3.5" />
            </button>
          )}

          <button
            onClick={() => saveConsent(false, false)}
            className="flex-1 rounded-full border border-white/20 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/50 transition hover:text-white/80"
          >
            Refuz Opționale
          </button>
        </div>
      </div>
    </div>
  );
}
