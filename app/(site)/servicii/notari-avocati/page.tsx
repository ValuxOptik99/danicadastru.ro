import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageData } from "@/components/services/ServicePageLayout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Servicii Cadastrale pentru Notari și Avocați",
  description: "Documentații cadastrale pentru tranzacții notariale, succesiuni, partaje și rectificări de carte funciară. Suport tehnic pentru litigii imobiliare. Livrare rapidă.",
  path: "/servicii/notari-avocati",
});

const data: ServicePageData = {
  eyebrow: "SERVICII PENTRU NOTARI ȘI AVOCAȚI",
  h1: "Documentații Cadastrale pentru Birouri Notariale și Avocați",
  subtitle: "Soluții rapide și sigure pentru tranzacții, succesiuni, partaje și rectificări de carte funciară. Lucrăm direct cu birourile notariale, partenerii avocați și clienții lor.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85",
    alt: "Birou notarial — documentații cadastrale pentru tranzacții",
  },
  whatsappMessage: "Bună! Sunt notar/avocat și am nevoie de documentație cadastrală.",
  audienceDescription: "Birouri notariale și cabinete de avocatură care au nevoie de documentații tehnice pentru instrumentarea dosarelor imobiliare.",
  audienceBullets: [
    "Birou notarial cu volum mare de tranzacții",
    "Avocat cu cabinete în zone metropolitane",
    "Cabinet de avocatură care preia cazuri imobiliare",
    "Specialist în succesiuni și partaje complexe",
  ],
  servicesIntro: "Documentații tehnice precise, livrate la termen, pentru fiecare tip de instrumentare.",
  services: [
    {
      icon: "FileCheck2",
      accent: "cyan",
      title: "Documentații tranzacționale",
      description: "Cadastru și intabulare express pentru tranzacții notariale în derulare. Înțelegem urgența.",
      bullets: ["Termene reduse", "Dosare complete", "Reprezentare OCPI"],
    },
    {
      icon: "Users",
      accent: "violet",
      title: "Succesiuni și partaje",
      description: "Dezmembrări complexe pentru moștenitori multipli. Coordonare cu notarul pe parcursul procesului.",
      bullets: ["Documentație partaj", "Calcul cote-părți", "Înscriere individuală"],
    },
    {
      icon: "FilePen",
      accent: "pink",
      title: "Rectificări CF",
      description: "Corectare suprafețe, limite, vecinătăți sau alte erori istorice din cartea funciară.",
      bullets: ["Identificare erori", "Documentație rectificare", "Reprezentare OCPI"],
    },
    {
      icon: "Gavel",
      accent: "cyan",
      title: "Expertize tehnice pentru litigii",
      description: "Suport tehnic pentru cauze imobiliare aflate în instanță. Măsurători, rapoarte, expertize.",
      bullets: ["Rapoarte tehnice", "Măsurători verificate", "Suport instanță"],
    },
  ],
  processSteps: [
    { title: "1. Solicitarea ta", description: "Ne contactezi cu specificul cazului. Ai parte de discuție directă cu un inginer." },
    { title: "2. Analiză și ofertă", description: "Verificăm rapid situația. Oferta vine în maxim 24 ore." },
    { title: "3. Execuție", description: "Lucrăm pe termen scurt, cu prioritate pentru cazurile cu deadline." },
    { title: "4. Livrare", description: "Documentația ajunge direct la tine sau, dacă vrei, depunem noi la OCPI." },
  ],
  faqs: [
    { question: "Aveți contracte de colaborare pe termen lung?", answer: "Da, multe birouri notariale lucrează în mod recurent cu noi. Putem stabili tarife și termene preferențiale pentru parteneri." },
    { question: "Cât durează un cadastru de urgență pentru o tranzacție?", answer: "Putem face cadastrul în 5-7 zile lucrătoare în loc de termenul standard de 2-3 săptămâni. Pentru tranzacții cu deadline strict, discutăm direct." },
    { question: "Faceți și expertize judiciare?", answer: "Da, putem realiza expertize tehnice extrajudiciare. Pentru expertize judiciare propriu-zise, lucrăm cu experți autorizați partener." },
    { question: "Puteți trimite documentele în format digital semnat electronic?", answer: "Da, documentele pot fi livrate semnate și ștampilate electronic, compatibil cu cerințele ANCPI și ale instanțelor." },
  ],
};

export default function Page() {
  return <ServicePageLayout {...data} />;
}
