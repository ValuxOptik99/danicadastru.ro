import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageData } from "@/components/services/ServicePageLayout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Certificat de Urbanism — Obținere Rapidă",
  description:
    "Te ajutăm să obții certificatul de urbanism de la primărie pentru construire, dezmembrare, alipire sau alte operațiuni. Ne ocupăm de întocmirea și depunerea documentației. Preț în funcție de localitate.",
  path: "/servicii/certificat-urbanism",
});

const data: ServicePageData = {
  eyebrow: "DOCUMENTAȚII ADMINISTRATIVE",
  h1: "Certificat de Urbanism",
  subtitle:
    "Ai nevoie de un certificat de urbanism pentru construire, dezmembrare, alipire sau alte operațiuni? Te ajutăm cu întocmirea documentației și obținerea certificatului de la primăria competentă. Prețul variază în funcție de localitate și taxele primăriei — solicită o ofertă personalizată.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
    alt: "Certificat de urbanism — documentație administrativă",
  },
  whatsappMessage:
    "Bună! Aș dori o ofertă pentru obținerea unui certificat de urbanism.",

  audienceDescription:
    "Certificatul de urbanism este documentul emis de primărie care stabilește regimul juridic, economic și tehnic al unui teren sau imobil. El precizează ce se poate construi pe un teren, ce condiții trebuie respectate și ce avize sunt necesare. Este primul pas în majoritatea proiectelor de construire sau modificare a unei proprietăți.",
  audienceBullets: [
    "Vrei să construiești o casă sau o clădire (primul pas spre autorizația de construire)",
    "Vrei să dezmembrezi sau să alipești terenuri",
    "Vrei să schimbi destinația unui imobil",
    "Ai nevoie de informații oficiale despre ce se poate construi pe un teren",
    "Pregătești un proiect de investiție și ai nevoie de regimul urbanistic",
  ],

  servicesIntro: "Gestionăm tot procesul pentru tine",
  services: [
    {
      icon: "FileText",
      accent: "cyan",
      title: "Întocmim documentația",
      description:
        "Pregătim toate documentele necesare pentru cererea de certificat de urbanism, inclusiv planurile topografice.",
      bullets: ["Plan de încadrare", "Plan de situație", "Documentație completă"],
    },
    {
      icon: "Building2",
      accent: "violet",
      title: "Depunem la primărie",
      description:
        "Depunem dosarul la primăria competentă și urmărim procesul de emitere.",
      bullets: ["Depunere dosar complet", "Urmărire status", "Comunicare cu autoritățile"],
    },
    {
      icon: "CheckCircle2",
      accent: "pink",
      title: "Obținem certificatul",
      description:
        "Ridicăm certificatul de urbanism emis și ți-l predăm, gata de folosit pentru pasul următor.",
      bullets: ["Ridicare document", "Verificare conformitate", "Predare către client"],
    },
  ],

  processSteps: [
    {
      title: "1. Analizăm cererea ta",
      description:
        "Ne spui ce vrei să faci (construire, dezmembrare, etc.) și analizăm situația terenului.",
    },
    {
      title: "2. Pregătim documentația",
      description:
        "Întocmim planurile topografice și documentele necesare pentru cerere.",
    },
    {
      title: "3. Depunem la primărie",
      description:
        "Depunem dosarul complet la primăria competentă în funcție de localitate.",
    },
    {
      title: "4. Predăm certificatul",
      description:
        "Ridicăm certificatul emis și ți-l predăm, gata pentru pasul următor al proiectului tău.",
    },
  ],

  faqs: [
    {
      question: "Cât costă un certificat de urbanism?",
      answer:
        "Prețul variază în funcție de localitate și de taxele primăriei competente. Fiecare primărie are propriile taxe. Contactează-ne cu detaliile proiectului tău pentru o ofertă personalizată.",
    },
    {
      question: "Cât durează obținerea certificatului de urbanism?",
      answer:
        "Termenul legal de emitere este de până la 30 de zile de la depunerea cererii complete, dar variază în funcție de primărie. Ne ocupăm de întreg procesul.",
    },
    {
      question: "Certificatul de urbanism îmi dă dreptul să construiesc?",
      answer:
        "Nu direct. Certificatul de urbanism stabilește condițiile și ce se poate construi, dar pentru a construi efectiv ai nevoie de autorizație de construire, care se obține ulterior pe baza unui proiect.",
    },
    {
      question: "Cât timp este valabil certificatul de urbanism?",
      answer:
        "Valabilitatea este stabilită de primărie, de regulă între 12 și 24 de luni, în funcție de scopul solicitat și de reglementările locale.",
    },
  ],
};

export default function Page() {
  return <ServicePageLayout {...data} />;
}
