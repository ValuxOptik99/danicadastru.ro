import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageData } from "@/components/services/ServicePageLayout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Certificat de Performanță Energetică (CPE)",
  description:
    "Certificat energetic pentru apartamente, case, spații comerciale și clădiri de orice tip. Necesar la vânzare, închiriere sau recepția construcției. Eliberat de auditor energetic atestat. Cerere ofertă rapidă.",
  path: "/servicii/certificat-energetic",
});

const data: ServicePageData = {
  eyebrow: "DOCUMENTAȚII TEHNICE",
  h1: "Certificat de Performanță Energetică",
  subtitle:
    "Ai nevoie de un certificat energetic pentru vânzarea, închirierea sau recepția unui imobil? Eliberăm certificate de performanță energetică pentru orice tip de spațiu — apartamente, case, birouri sau spații comerciale.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
    alt: "Certificat de performanță energetică pentru clădiri",
  },
  whatsappMessage:
    "Bună! Aș dori o ofertă pentru un certificat de performanță energetică.",

  audienceDescription:
    "Certificatul de performanță energetică (CPE) este documentul care evaluează consumul de energie al unei clădiri și îi atribuie o clasă energetică, de la A (foarte eficient) la G (ineficient). Este obligatoriu prin lege în anumite situații și oferă o imagine clară asupra eficienței energetice a imobilului.",
  audienceBullets: [
    "La vânzarea unui imobil (apartament, casă, spațiu comercial)",
    "La închirierea unei proprietăți",
    "La recepția la terminarea lucrărilor pentru o construcție nouă",
    "Pentru obținerea autorizației de construire (în anumite cazuri)",
    "Pentru accesarea unor programe de finanțare sau reabilitare energetică",
  ],

  servicesIntro: "Certificate energetice pentru orice tip de proprietate",
  services: [
    {
      icon: "Home",
      accent: "cyan",
      title: "Apartamente",
      description:
        "Certificat energetic pentru apartamente în blocuri, necesar la vânzare sau închiriere.",
      bullets: ["Evaluare rapidă", "Clasă energetică oficială", "Valabil 10 ani"],
    },
    {
      icon: "Building",
      accent: "violet",
      title: "Case și vile",
      description:
        "Certificat pentru locuințe individuale, indiferent de suprafață sau vechime.",
      bullets: ["Analiză completă", "Recomandări de eficientizare", "Document oficial"],
    },
    {
      icon: "Store",
      accent: "pink",
      title: "Spații comerciale",
      description:
        "Certificate energetice pentru birouri, magazine, spații de producție și clădiri de orice categorie.",
      bullets: ["Orice tip de spațiu", "Conform legislației", "Eliberare rapidă"],
    },
  ],

  processSteps: [
    {
      title: "1. Ne contactezi",
      description:
        "Ne trimiți detaliile imobilului (tip, suprafață, adresă) pe WhatsApp sau prin formular.",
    },
    {
      title: "2. Evaluarea imobilului",
      description:
        "Un auditor energetic atestat analizează caracteristicile clădirii.",
    },
    {
      title: "3. Întocmirea certificatului",
      description:
        "Calculăm clasa energetică și întocmim certificatul oficial.",
    },
    {
      title: "4. Primești documentul",
      description:
        "Îți livrăm certificatul de performanță energetică, valabil 10 ani.",
    },
  ],

  faqs: [
    {
      question: "Cât costă un certificat energetic?",
      answer:
        "Prețul variază în funcție de tipul și suprafața imobilului. Trimite-ne detaliile pe WhatsApp sau prin formular și primești o ofertă rapidă.",
    },
    {
      question: "Cât timp este valabil certificatul energetic?",
      answer:
        "Certificatul de performanță energetică este valabil 10 ani de la data emiterii, cu condiția să nu se facă modificări majore la clădire.",
    },
    {
      question: "Este obligatoriu certificatul energetic la vânzare?",
      answer:
        "Da, conform legislației în vigoare, certificatul energetic este obligatoriu la vânzarea sau închirierea unui imobil. Notarul îl solicită la tranzacție.",
    },
    {
      question: "Cât durează eliberarea certificatului?",
      answer:
        "În general, certificatul poate fi eliberat în câteva zile lucrătoare de la evaluarea imobilului. Pentru situații urgente, contactează-ne direct.",
    },
  ],
};

export default function Page() {
  return <ServicePageLayout {...data} />;
}
