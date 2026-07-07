import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Politică de Confidențialitate",
    description: "Politica de confidențialitate VIBE DESIGN GLOW SRL — modul în care colectăm, utilizăm și protejăm datele dumneavoastră personale.",
    path: "/politica-confidentialitate",
  }),
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Identitatea operatorului",
    content: `Datele dumneavoastră personale sunt prelucrate de VIBE DESIGN GLOW SRL, cu sediul în Șos. Constanței nr. 19, Mangalia, județul Constanța, înregistrată la Registrul Comerțului cu nr. J2022001411131, CUI 46051134 (denumită în continuare "Compania", "noi").

Contact responsabil date: cadastru@danicadastru.ro | 0770 55 66 77`,
  },
  {
    title: "2. Ce date colectăm",
    content: `Colectăm următoarele categorii de date:

• Date de identificare: nume și prenume
• Date de contact: adresă de e-mail, număr de telefon
• Date despre proprietate: localitate, tip serviciu solicitat, detalii comunicate în mesaj
• Date tehnice: adresă IP, tip browser, pagini accesate, durată sesiune (prin cookie-uri analitice, cu consimțământul dvs.)
• Date de marketing: comportament navigare, interacțiuni cu reclame (cu consimțământul dvs.)`,
  },
  {
    title: "3. Scopurile și temeiul legal al prelucrării",
    content: `Prelucrăm datele dvs. pentru:

• Răspuns la solicitările trimise prin formularul de contact — temei: executarea unui contract sau măsuri precontractuale (art. 6 alin. 1 lit. b GDPR)
• Comunicări comerciale referitoare la serviciile noastre — temei: consimțământul dvs. (art. 6 alin. 1 lit. a GDPR)
• Îmbunătățirea site-ului și analiza traficului — temei: consimțământul dvs. (cookie-uri analitice)
• Reclame personalizate — temei: consimțământul dvs. (cookie-uri de marketing)
• Respectarea obligațiilor legale — temei: obligație legală (art. 6 alin. 1 lit. c GDPR)`,
  },
  {
    title: "4. Durata stocării",
    content: `Păstrăm datele dvs.:

• Datele din formularul de contact: maxim 3 ani de la ultima interacțiune
• Date de facturare/contractuale: 10 ani conform legislației fiscale
• Date cookie analitice/marketing: conform setărilor din Politica Cookies (maxim 2 ani)

La expirarea termenului, datele sunt șterse sau anonimizate.`,
  },
  {
    title: "5. Destinatarii datelor",
    content: `Datele pot fi transmise următorilor destinatari:

• Furnizori de servicii IT și hosting (procesatori autorizați, cu clauze contractuale GDPR)
• Google LLC — prin Google Analytics și Google Ads (cu consimțământul dvs. pentru cookie-uri analitice/marketing), în baza Clauzelor Contractuale Standard ale UE
• Autorități publice, când legea o impune

Nu vindem datele dvs. unor terți.`,
  },
  {
    title: "6. Transferuri internaționale",
    content: `Unii furnizori (ex. Google) pot prelucra date în afara Spațiului Economic European. Aceste transferuri sunt protejate prin Clauzele Contractuale Standard aprobate de Comisia Europeană și/sau prin decizii de adecvare.`,
  },
  {
    title: "7. Drepturile dvs.",
    content: `Conform GDPR, beneficiați de:

• Dreptul de acces — să solicitați o copie a datelor prelucrate
• Dreptul la rectificare — corectarea datelor inexacte
• Dreptul la ștergere („dreptul de a fi uitat")
• Dreptul la restricționarea prelucrării
• Dreptul la portabilitatea datelor
• Dreptul de opoziție — în special față de prelucrarea în scop de marketing direct
• Dreptul de a retrage consimțământul oricând, fără a afecta legalitatea prelucrărilor anterioare
• Dreptul de a depune plângere la ANSPDCP (www.dataprotection.ro)

Pentru exercitarea drepturilor, scrieți la: cadastru@danicadastru.ro`,
  },
  {
    title: "8. Securitatea datelor",
    content: `Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor: conexiuni HTTPS, acces restricționat, politici interne de securitate și audituri periodice.`,
  },
  {
    title: "9. Cookie-uri",
    content: `Pentru detalii complete privind cookie-urile utilizate, consultați Politica noastră de Cookie-uri.`,
    link: { href: "/politica-cookies", label: "Politică Cookie-uri →" },
  },
  {
    title: "10. Modificări ale politicii",
    content: `Ne rezervăm dreptul de a actualiza această politică. Versiunea actualizată va fi publicată pe site cu data revizuirii. Continuarea utilizării site-ului după publicare constituie acceptarea modificărilor.`,
  },
];

export default function PoliticaConfidentialitate() {
  return (
    <main className="min-h-screen bg-bg-muted pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 lg:px-6">
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-cyan mb-3">GDPR · Protecția Datelor</p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-ink mb-3">Politică de Confidențialitate</h1>
          <p className="text-sm text-text-muted">Ultima actualizare: 14 mai 2026 · VIBE DESIGN GLOW SRL</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E9F2] shadow-[0_4px_24px_rgba(11,20,55,0.06)] p-6 lg:p-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-navy-ink mb-3">{s.title}</h2>
              <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">{s.content}</p>
              {s.link && (
                <Link href={s.link.href} className="mt-2 inline-block text-sm text-brand-cyan hover:underline">
                  {s.link.label}
                </Link>
              )}
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
