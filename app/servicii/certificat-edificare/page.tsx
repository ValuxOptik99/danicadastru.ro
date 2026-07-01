import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageData } from "@/components/services/ServicePageLayout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Certificat de Atestare a Edificării Construcției",
  description:
    "Ai o construcție finalizată dar neintabulată? DANI Cadastru se ocupă de tot procesul: măsurători, relevee, documentație tehnică, certificat de edificare de la primărie și intabulare la OCPI. Cap-coadă, fără bătăi de cap.",
  path: "/servicii/certificat-edificare",
});

const data: ServicePageData = {
  eyebrow: "DOCUMENTAȚII CADASTRALE",
  h1: "Certificat de Atestare a Edificării Construcției",
  subtitle:
    "Ai o construcție finalizată și ai făcut recepția la terminarea lucrărilor, dar aceasta nu este încă intabulată în cartea funciară? Ne ocupăm de întregul proces, de la măsurători în teren până la înscrierea construcției în cartea funciară.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    alt: "Construcție finalizată — certificat de edificare și intabulare",
  },
  whatsappMessage:
    "Bună! Am o construcție finalizată și am nevoie de certificat de edificare și intabulare.",

  audienceDescription:
    "Edificarea este procedura prin care o construcție finalizată este recunoscută oficial în acte. Chiar dacă ai finalizat casa sau clădirea și ai făcut recepția la terminarea lucrărilor, aceasta nu apare automat în cartea funciară. Pentru ca imobilul să fie complet «legalizat» din punct de vedere cadastral, este necesară întocmirea unei documentații tehnice și obținerea certificatului de atestare a edificării de la primărie, urmată de intabularea construcției la OCPI.",
  audienceBullets: [
    "Ai construit o casă sau o clădire și ai finalizat lucrările",
    "Ai făcut recepția la terminarea lucrărilor, dar construcția nu apare în cartea funciară",
    "Vrei să vinzi, să ipotechezi sau să actualizezi actele imobilului",
    "Ai o construcție mai veche care nu este încă intabulată corect",
    "Ai nevoie de actualizarea situației juridice a imobilului",
  ],

  servicesIntro:
    "Ne ocupăm de tot procesul, astfel încât tu să nu fie nevoie să te ocupi de drumuri, documente sau proceduri administrative.",
  services: [
    {
      icon: "FileText",
      accent: "cyan",
      title: "Măsurători și relevee",
      description:
        "Venim la fața locului pentru măsurători topografice și realizăm releveele construcției — planuri interioare și exterioare complete.",
      bullets: ["Măsurători topografice la teren", "Relevee interioare și exterioare", "GPS RTK de precizie"],
    },
    {
      icon: "FileSearch",
      accent: "violet",
      title: "Analiză juridică și cadastrală",
      description:
        "Verificăm situația juridică și cadastrală a terenului și a construcției și analizăm toată documentația existentă (autorizație, proces verbal de recepție etc.).",
      bullets: ["Verificare situație juridică teren", "Analiză autorizație de construire", "Verificare proces verbal de recepție"],
    },
    {
      icon: "FilePen",
      accent: "pink",
      title: "Documentație tehnică și certificat edificare",
      description:
        "Întocmim documentația tehnică și depunem dosarul complet la primărie pentru obținerea certificatului de atestare a edificării construcției.",
      bullets: ["Documentație tehnică completă", "Dosar la primărie", "Obținere certificat oficial"],
    },
    {
      icon: "FileCheck2",
      accent: "cyan",
      title: "Intabulare la OCPI",
      description:
        "Întocmim și depunem documentația cadastrală la OCPI Constanța pentru înscrierea construcției în cartea funciară.",
      bullets: ["Documentație cadastrală ANCPI", "Depunere la OCPI", "Înregistrare în cartea funciară"],
    },
  ],

  processSteps: [
    {
      title: "1. Venim la măsurători",
      description:
        "Ne deplasăm la fața locului pentru măsurători topografice și relevee ale construcției.",
    },
    {
      title: "2. Realizăm documentația tehnică",
      description:
        "Întocmim toate planurile și documentația necesară pentru certificatul de edificare.",
    },
    {
      title: "3. Depunem actele",
      description:
        "Depunem dosarul la primărie și obținem certificatul de atestare a edificării.",
    },
    {
      title: "4. Urmărim până la intabulare",
      description:
        "Depunem documentația cadastrală la OCPI și urmărim procesul până la înscrierea în cartea funciară.",
    },
  ],

  faqs: [
    {
      question: "Ce este certificatul de atestare a edificării?",
      answer:
        "Este documentul oficial emis de primărie care confirmă că o construcție finalizată a fost realizată conform autorizației. Este necesar pentru intabularea construcției în cartea funciară.",
    },
    {
      question: "Cât durează obținerea certificatului de edificare?",
      answer:
        "Depinde de primăria emitentă și de complexitatea documentației. Ne ocupăm de tot procesul și urmărim dosarul până la finalizare. Contactează-ne pentru un termen estimativ.",
    },
    {
      question: "Ce acte îmi trebuie pentru edificare?",
      answer:
        "În principal autorizația de construire și procesul-verbal de recepție la terminarea lucrărilor. Analizăm situația ta și îți spunem exact ce documente sunt necesare.",
    },
    {
      question: "Pot vinde o casă fără certificat de edificare?",
      answer:
        "Nu, dacă construcția nu este intabulată. Fără edificare și intabulare, construcția nu apare oficial în cartea funciară și nu poate fi vândută sau ipotecată.",
    },
    {
      question: "De ce este importantă intabularea construcției?",
      answer:
        "Fără edificare și intabulare, construcția nu este complet înregistrată oficial, ceea ce poate crea probleme în cazul vânzării, succesiunii, creditării sau altor proceduri juridice. Prin finalizarea acestei documentații, imobilul tău este recunoscut oficial și poate fi folosit fără restricții în acte.",
    },
  ],
};

export default function Page() {
  return <ServicePageLayout {...data} />;
}
