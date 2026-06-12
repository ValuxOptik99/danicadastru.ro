import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Politică Cookie-uri",
    description: "Politica de utilizare a cookie-urilor pe site-ul DANI Cadastru — ce cookie-uri folosim și cum le gestionezi.",
    path: "/politica-cookies",
  }),
  robots: { index: false, follow: false },
};

const cookieTable = [
  {
    category: "Cookie-uri strict necesare",
    color: "text-brand-cyan",
    description: "Esențiale pentru funcționarea site-ului. Nu pot fi dezactivate.",
    cookies: [
      { name: "dani-cookie-consent", purpose: "Stochează preferințele dvs. de consimțământ pentru cookie-uri", duration: "12 luni", provider: "danicadastru.ro" },
      { name: "dani-loader-shown", purpose: "Previne reafișarea animației de încărcare la navigare", duration: "Sesiune", provider: "danicadastru.ro" },
    ],
  },
  {
    category: "Cookie-uri analitice",
    color: "text-brand-violet",
    description: "Ne ajută să înțelegem cum interacționați cu site-ul. Activate doar cu consimțământul dvs.",
    cookies: [
      { name: "_ga", purpose: "Identifică sesiuni unice Google Analytics", duration: "2 ani", provider: "Google LLC" },
      { name: "_ga_*", purpose: "Stochează starea sesiunii Google Analytics 4", duration: "2 ani", provider: "Google LLC" },
      { name: "_gid", purpose: "Identifică utilizatori în Google Analytics (24h)", duration: "24 ore", provider: "Google LLC" },
    ],
  },
  {
    category: "Cookie-uri de marketing",
    color: "text-brand-pink",
    description: "Utilizate pentru reclame personalizate și remarketing. Activate doar cu consimțământul dvs.",
    cookies: [
      { name: "_gcl_au", purpose: "Google Ads — urmărire conversii și linkuri de referință", duration: "3 luni", provider: "Google LLC" },
      { name: "IDE", purpose: "Google DoubleClick — reclame personalizate", duration: "13 luni", provider: "Google LLC" },
    ],
  },
];

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen bg-bg-muted pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-cyan mb-3">GDPR · Cookie-uri</p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-ink mb-3">Politică Cookie-uri</h1>
          <p className="text-sm text-text-muted">Ultima actualizare: 14 mai 2026 · VIBE DESIGN GLOW SRL</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E9F2] shadow-[0_4px_24px_rgba(11,20,55,0.06)] p-6 lg:p-10 space-y-8">
          <div>
            <h2 className="text-base font-bold text-navy-ink mb-3">Ce sunt cookie-urile?</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul dvs. atunci când vizitați un site web. Ele permit site-ului să rețină anumite informații despre vizita dvs. și preferințele dvs., facilitând o experiență mai personalizată și eficientă.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-navy-ink mb-3">Ce cookie-uri folosim?</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Utilizăm Google Consent Mode v2 — cookie-urile analitice și de marketing sunt blocate implicit până când acordați consimțământul explicit.
            </p>

            <div className="space-y-8">
              {cookieTable.map((cat) => (
                <div key={cat.category}>
                  <h3 className={`text-sm font-bold mb-1 ${cat.color}`}>{cat.category}</h3>
                  <p className="text-xs text-text-muted mb-3">{cat.description}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-[#E5E9F2]">
                          <th className="text-left py-2 pr-4 font-semibold text-navy-ink w-1/4">Nume</th>
                          <th className="text-left py-2 pr-4 font-semibold text-navy-ink">Scop</th>
                          <th className="text-left py-2 pr-4 font-semibold text-navy-ink w-1/6">Durată</th>
                          <th className="text-left py-2 font-semibold text-navy-ink w-1/5">Furnizor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.cookies.map((c) => (
                          <tr key={c.name} className="border-b border-[#E5E9F2] last:border-0">
                            <td className="py-2 pr-4 font-mono text-[10px] text-navy-ink align-top">{c.name}</td>
                            <td className="py-2 pr-4 text-text-muted align-top leading-relaxed">{c.purpose}</td>
                            <td className="py-2 pr-4 text-text-muted align-top">{c.duration}</td>
                            <td className="py-2 text-text-muted align-top">{c.provider}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-navy-ink mb-3">Cum gestionezi cookie-urile?</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Poți modifica preferințele dvs. de cookie-uri oricând folosind butonul de mai jos. De asemenea, poți dezactiva cookie-urile din setările browser-ului, însă unele funcționalități ale site-ului pot fi afectate.
            </p>
            <div className="text-xs text-text-muted space-y-1">
              <p><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline">Google Chrome</a> · <a href="https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline">Firefox</a> · <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline">Safari</a> · <a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline">Microsoft Edge</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-navy-ink mb-3">Modifică preferințele</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Poți reveni oricând asupra deciziei privind cookie-urile folosind butonul de mai jos.
            </p>
            <CookieSettingsButton variant="button" />
          </div>
        </div>
      </div>
    </main>
  );
}
