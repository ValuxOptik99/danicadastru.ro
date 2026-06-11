import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageData } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Topografie pentru Arhitecți și Proiectanți | Ridicări, DWG, MDT — DANI Cadastru",
  description: "Ridicări topografice complete, planuri de situație, modele digitale de teren și fișiere DWG/DXF pentru arhitecți și proiectanți. Livrare rapidă, precizie ridicată.",
  alternates: { canonical: "/servicii/arhitecti-proiectanti" },
};

const data: ServicePageData = {
  eyebrow: "SERVICII PENTRU ARHITECȚI",
  h1: "Date Topografice Precise pentru Arhitecți și Proiectanți",
  subtitle: "Livrăm exact ce ai nevoie pentru proiectele tale: ridicări topografice complete, planuri DWG/DXF curate, modele digitale de teren. Înțelegem cum lucrezi și cum vrei datele.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    alt: "Plan arhitectural — date topografice pentru proiectare",
  },
  whatsappMessage: "Bună! Sunt arhitect și aș dori ridicări topografice pentru un proiect.",
  audienceDescription: "Birouri de arhitectură și proiectare care au nevoie de date topografice precise pentru proiectele lor.",
  audienceBullets: [
    "Arhitect care lucrează la proiecte rezidențiale sau publice",
    "Inginer proiectant infrastructură sau construcții civile",
    "Birou de proiectare care preia date topografice frecvent",
    "Constructor care are nevoie de date pentru organizare șantier",
  ],
  servicesIntro: "Date topografice livrate în formatul tău, gata de import.",
  services: [
    {
      icon: "Map",
      accent: "cyan",
      title: "Ridicări topografice complete",
      description: "Plan de situație, ridicare cu detalii naturale și artificiale. Format conform cerințelor proiectului.",
      bullets: ["Coordonate ștersurate", "Detalii planimetrice", "Cote altimetrice"],
    },
    {
      icon: "FileText",
      accent: "violet",
      title: "Fișiere DWG / DXF",
      description: "Livrăm fișiere curate, cu layer-e separate corect, gata de importat în software-ul tău (AutoCAD, ArchiCAD, Revit).",
      bullets: ["Layer-e standardizate", "Compatibil cu majoritatea soft-urilor", "Versiuni recente DWG"],
    },
    {
      icon: "Mountain",
      accent: "pink",
      title: "Modele digitale de teren",
      description: "MDT pentru orice scop: cubatură, drenaje, sistematizare verticală, simulări. Format compatibil cu Civil3D, Bentley, etc.",
      bullets: ["TIN și mesh", "Curbe de nivel ajustabile", "Suprafețe NURBS"],
    },
    {
      icon: "ScanLine",
      accent: "cyan",
      title: "Scanare laser pentru proiecte BIM",
      description: "Pentru proiecte complexe sau renovări: nor de puncte de înaltă densitate, integrabil în workflow-ul BIM.",
      bullets: ["Format E57/RCS", "Integrare Revit", "Modele Scan-to-BIM"],
    },
  ],
  processSteps: [
    { title: "1. Discuție tehnică inițială", description: "Înțelegem cerințele tale exacte: scara, formate, layer-e, precizie." },
    { title: "2. Măsurători pe teren", description: "Echipă specializată, echipamente de înaltă precizie. Lucrăm rapid, fără să întârziem proiectul tău." },
    { title: "3. Procesare date", description: "Curățăm și organizăm datele exact cum ai cerut." },
    { title: "4. Livrare și suport", description: "Primești fișierele finale + suport tehnic dacă apar întrebări la integrare." },
  ],
  faqs: [
    { question: "În ce format livrați ridicarea?", answer: "Standard: DWG (versiune recentă), PDF. La cerere: DXF, SHP, KML, formatele Bentley. Discutăm în brief-ul inițial." },
    { question: "Cât durează o ridicare topografică pentru un teren mediu?", answer: "Pentru un teren de 1000-2000 mp în zonă accesibilă: 2-3 zile lucrătoare de la măsurători la livrare DWG." },
    { question: "Aveți licență de inginer autorizat ANCPI?", answer: "Da, toți inginerii noștri sunt autorizați ANCPI conform Legii 7/1996. Putem semna și ștampila documentațiile oficiale." },
    { question: "Putem lucra direct cu biroul nostru prin platforme de cloud?", answer: "Da, livrăm fișierele prin orice metodă preferați: email, WeTransfer, Dropbox, Google Drive sau direct pe suport fizic." },
  ],
};

export default function Page() {
  return <ServicePageLayout {...data} />;
}
