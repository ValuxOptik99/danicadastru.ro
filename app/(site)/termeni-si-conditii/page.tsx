import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Termeni și Condiții",
    description: "Termenii și condițiile de utilizare a site-ului și serviciilor VIBE DESIGN GLOW SRL (DANI Cadastru).",
    path: "/termeni-si-conditii",
  }),
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Informații generale",
    content: `Prezentul document stabilește termenii și condițiile de utilizare a site-ului web danicadastru.ro, operat de VIBE DESIGN GLOW SRL, cu sediul în Șos. Constanței nr. 19, Mangalia, județul Constanța, înregistrată la Registrul Comerțului cu nr. J2022001411131, CUI 46051134.

Prin accesarea și utilizarea site-ului, acceptați în mod expres acești Termeni și Condiții.`,
  },
  {
    title: "2. Servicii oferite",
    content: `Site-ul prezintă serviciile profesionale de geodezie și cadastru ale Companiei: cadastru și intabulare, topografie inginerească și scanare laser 3D. Informațiile publicate au caracter orientativ și nu constituie o ofertă fermă de contract.

Ofertele definitive se stabilesc în urma consultării tehnice și sunt transmise în scris.`,
  },
  {
    title: "3. Proprietate intelectuală",
    content: `Toate conținuturile site-ului (texte, imagini, logo-uri, grafică, cod sursă) sunt proprietatea VIBE DESIGN GLOW SRL sau sunt utilizate cu licență, și sunt protejate de legislația privind drepturile de autor.

Este interzisă reproducerea, distribuirea sau modificarea acestora fără acordul scris prealabil al Companiei.`,
  },
  {
    title: "4. Formularul de contact și prelucrarea datelor",
    content: `Datele transmise prin formularul de contact sunt utilizate exclusiv pentru a răspunde solicitărilor dvs. și pentru a vă oferi oferte de servicii. Prelucrarea se efectuează conform Politicii noastre de Confidențialitate și în conformitate cu GDPR.`,
  },
  {
    title: "5. Limitarea răspunderii",
    content: `Compania depune toate eforturile pentru a asigura acuratețea informațiilor publicate, dar nu poate garanta că acestea sunt complete, actuale sau fără erori. Site-ul poate fi indisponibil temporar pentru lucrări de mentenanță.

Compania nu este responsabilă pentru daune directe sau indirecte rezultate din utilizarea sau imposibilitatea utilizării site-ului.`,
  },
  {
    title: "6. Link-uri externe",
    content: `Site-ul poate conține link-uri către site-uri terțe (ex. Google Maps, ANCPI, ANPC). Compania nu controlează și nu este responsabilă pentru conținutul acestora.`,
  },
  {
    title: "7. Legea aplicabilă",
    content: `Prezentul acord este guvernat de legislația română. Orice litigiu va fi soluționat de instanțele competente din România, după o prealabilă tentativă de soluționare amiabilă.

Soluționare alternativă a litigiilor: ANPC — www.anpc.ro (SAL) sau ec.europa.eu/consumers/odr (SOL).`,
  },
  {
    title: "8. Modificări",
    content: `Ne rezervăm dreptul de a modifica oricând acești Termeni și Condiții. Modificările intră în vigoare la data publicării pe site. Utilizarea în continuare a site-ului constituie acceptarea noilor termeni.`,
  },
  {
    title: "9. Contact",
    content: `Pentru orice întrebări legate de acești termeni:\n\nVIBE DESIGN GLOW SRL\nȘos. Constanței nr. 19, Mangalia, jud. Constanța\nCUI 46051134 · J2022001411131\nE-mail: cadastru@danicadastru.ro\nTelefon: 0770 55 66 77`,
  },
];

export default function TermeniSiConditii() {
  return (
    <main className="min-h-screen bg-bg-muted pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 lg:px-6">
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-cyan mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-ink mb-3">Termeni și Condiții</h1>
          <p className="text-sm text-text-muted">Ultima actualizare: 14 mai 2026 · VIBE DESIGN GLOW SRL</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E9F2] shadow-[0_4px_24px_rgba(11,20,55,0.06)] p-6 lg:p-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-navy-ink mb-3">{s.title}</h2>
              <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">{s.content}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-muted">
          Întrebări?{" "}
          <a href="mailto:cadastru@danicadastru.ro" className="text-brand-cyan hover:underline">
            cadastru@danicadastru.ro
          </a>
        </p>
      </div>
    </main>
  );
}
