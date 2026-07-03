import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageData } from "@/components/services/ServicePageLayout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cadastru și Intabulare pentru Proprietari",
  description: "Cadastru apartament, casă sau teren. Intabulare, dezmembrare, alipire și actualizări cadastrale. Inginer autorizat ANCPI. Documentații complete pentru vânzare, succesiune sau credit.",
  path: "/servicii/proprietari",
});

const data: ServicePageData = {
  eyebrow: "SERVICII PENTRU PROPRIETARI",
  h1: "Cadastru și Intabulare pentru Apartament, Casă sau Teren",
  subtitle: "Indiferent dacă vrei să vinzi, cumperi, moștenești sau accesezi un credit ipotecar, te ajutăm cu toată documentația cadastrală. Inginer autorizat ANCPI, lucrăm direct cu OCPI.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
    alt: "Apartament modern în România — cadastru pentru proprietari",
  },
  whatsappMessage: "Bună! Sunt proprietar și aș dori o ofertă pentru cadastru.",
  audienceDescription: "Proprietari de imobile care au nevoie de documentație cadastrală pentru orice tip de tranzacție sau actualizare în cartea funciară.",
  audienceBullets: [
    "Vrei să vinzi sau să cumperi un apartament, o casă sau un teren",
    "Ai moștenit un imobil și ai nevoie de partaj succesoral",
    "Vrei să accesezi un credit ipotecar și banca cere intabulare",
    "Ai construit o casă și ai nevoie de înscriere în cartea funciară",
    "Vrei să dezmembrezi un teren în loturi sau să alipești parcele",
  ],
  servicesIntro: "Acoperim toate documentațiile necesare pentru proprietari, de la primul cadastru până la actualizări complexe.",
  services: [
    {
      icon: "Home",
      accent: "cyan",
      title: "Cadastru apartament",
      description: "Întocmim documentația cadastrală completă pentru apartament, inclusiv plan de amplasament și descriere imobil.",
      bullets: ["Schiță de plan", "Descriere imobil", "Înregistrare la OCPI"],
    },
    {
      icon: "Building2",
      accent: "violet",
      title: "Cadastru casă și teren",
      description: "Documentație pentru casă individuală cu teren aferent. Măsurători cu echipamente GNSS de precizie.",
      bullets: ["Ridicare topografică", "Plan parcelar", "Coordonate ștersurate"],
    },
    {
      icon: "FileCheck2",
      accent: "pink",
      title: "Intabulare",
      description: "Înscriere imobil în Cartea Funciară. Pregătim și depunem tot dosarul la OCPI pentru tine.",
      bullets: ["Verificare documente", "Întocmire dosar", "Reprezentare la OCPI"],
    },
    {
      icon: "Scissors",
      accent: "cyan",
      title: "Dezmembrare teren",
      description: "Împărțim un teren în două sau mai multe parcele cu numere cadastrale separate.",
      bullets: ["Plan de dezmembrare", "Întocmire acte", "Înregistrare loturi noi"],
    },
    {
      icon: "Combine",
      accent: "violet",
      title: "Alipire terenuri",
      description: "Unim două sau mai multe parcele într-o singură suprafață cu un singur număr cadastral.",
      bullets: ["Verificare limite", "Documentație alipire", "Actualizare CF"],
    },
    {
      icon: "RefreshCcw",
      accent: "pink",
      title: "Actualizări cadastrale",
      description: "Corectare suprafețe, modificări forme, actualizare construcții existente sau noi.",
      bullets: ["Recalcul suprafețe", "Adăugare construcție", "Rectificări limită"],
    },
  ],
  processSteps: [
    { title: "1. Consultanță gratuită", description: "Ne contactezi pe WhatsApp sau la birou. Discutăm situația ta și îți spunem exact ce ai nevoie." },
    { title: "2. Documente și măsurători", description: "Strângem actele tale (CF, contract, etc.) și mergem la teren pentru măsurători cu GNSS." },
    { title: "3. Întocmire dosar", description: "Procesăm datele și pregătim documentația completă conform cerințelor ANCPI / OCPI." },
    { title: "4. Depunere și înregistrare", description: "Depunem dosarul la OCPI județean și urmărim până la înregistrare. Tu primești toate actele finale." },
  ],
  faqs: [
    { question: "Cât costă un cadastru pentru apartament?", answer: "Costul variază în funcție de complexitate, vechimea blocului și județ. Pentru o ofertă exactă, contactează-ne pe WhatsApp sau la formularul de contact — răspundem în 24 ore." },
    { question: "Cât durează intabularea?", answer: "Termenul oficial OCPI este de 15-30 zile lucrătoare după depunere. Cu dosarul nostru depus corect, încadrarea în acest termen este sigură." },
    { question: "Ce acte am nevoie pentru cadastru?", answer: "Pentru apartament: actul de proprietate (contract vânzare-cumpărare, certificat moștenitor, etc.), copia cărții de identitate, extras CF de informare. Te ghidăm exact prin telefon." },
    { question: "Pot face cadastrul fără să fiu prezent?", answer: "Da, prin procură notarială. Putem prelua tot procesul fără ca tu să te deplasezi, mai puțin semnătura inițială la notariat." },
  ],
};

export default function Page() {
  return <ServicePageLayout {...data} />;
}
