import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageData } from "@/components/services/ServicePageLayout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Due Diligence Cadastral — Verificare Imobil Înainte de Cumpărare",
  description: "Verificăm complet situația tehnică și juridică a unui imobil înainte de cumpărare. Carte funciară, suprapuneri, limite reale, riscuri tehnice. Pentru investitori prudenți.",
  path: "/servicii/due-diligence",
});

const data: ServicePageData = {
  eyebrow: "CONSULTANȚĂ ȘI VERIFICĂRI",
  h1: "Due Diligence Cadastral — Cumpără cu Încredere",
  subtitle: "Verificăm aprofundat situația tehnică și juridică a unui imobil înainte ca tu să semnezi. Carte funciară, limite reale, suprapuneri, riscuri. Esențial pentru investiții.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
    alt: "Verificare documente imobil — due diligence cadastral",
  },
  whatsappMessage: "Bună! Aș dori un due diligence cadastral pentru un imobil.",
  audienceDescription: "Investitori, cumpărători și fonduri care vor să cunoască situația reală a unui imobil înainte de achiziție.",
  audienceBullets: [
    "Investitor care evaluează achiziții imobiliare",
    "Cumpărător de teren sau imobil cu valoare ridicată",
    "Fond de investiții care verifică portofolii",
    "Persoană prudentă care vrea liniște înainte de semnătură",
  ],
  servicesIntro: "Verificări complete înainte de semnătură, pentru o achiziție fără surprize.",
  services: [
    {
      icon: "FileSearch",
      accent: "cyan",
      title: "Verificare carte funciară",
      description: "Analizăm toate înscrierile, sarcinile, ipotecile și eventualele litigii în derulare.",
      bullets: ["Istoric proprietate", "Sarcini active", "Notări și sechestre"],
    },
    {
      icon: "AlertTriangle",
      accent: "violet",
      title: "Identificare suprapuneri",
      description: "Verificăm pe teren dacă limitele cadastrale corespund realității. Multe surprize apar aici.",
      bullets: ["Suprapuneri cu vecini", "Limite reale vs declarate", "Construcții neînregistrate"],
    },
    {
      icon: "Calculator",
      accent: "pink",
      title: "Verificare suprafețe",
      description: "Suprafața reală poate diferi de cea din acte. Te ferim de surprize la negociere sau la revânzare.",
      bullets: ["Măsurători de control", "Calcul exact suprafață", "Comparație cu acte"],
    },
    {
      icon: "ShieldCheck",
      accent: "cyan",
      title: "Raport de riscuri",
      description: "Raport scris, structurat, cu toate riscurile identificate și recomandările noastre. Util la negociere.",
      bullets: ["Riscuri tehnice", "Riscuri juridice", "Estimare costuri remediere"],
    },
  ],
  processSteps: [
    { title: "1. Brief inițial", description: "Ne dai detaliile imobilului. Estimăm timpul și costul." },
    { title: "2. Verificare documente", description: "Analizăm CF, contractele de proprietate, planurile cadastrale existente." },
    { title: "3. Verificare pe teren", description: "Mergem la fața locului, măsurăm, verificăm limite și construcții." },
    { title: "4. Raport final", description: "Primești un raport complet, scris, cu toate concluziile și recomandările." },
  ],
  faqs: [
    { question: "Cât costă un due diligence?", answer: "Variază în funcție de complexitate. Pentru un apartament: cost moderat. Pentru un ansamblu sau teren mare: cost proporțional cu volumul muncii. Ofertă personalizată în 24 ore." },
    { question: "Cât durează un due diligence complet?", answer: "Standard: 5-10 zile lucrătoare. Urgent: 2-3 zile, în funcție de disponibilitate." },
    { question: "Raportul poate fi folosit în negociere?", answer: "Da. Mulți clienți obțin reduceri semnificative la preț pe baza problemelor identificate în raportul nostru." },
    { question: "Ce se întâmplă dacă se găsesc probleme grave?", answer: "Vă informăm imediat, în scris, cu detalii clare. Vă ajutăm să evaluați dacă tranzacția mai merită și care sunt costurile de remediere." },
  ],
};

export default function Page() {
  return <ServicePageLayout {...data} />;
}
