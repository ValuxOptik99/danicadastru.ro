import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageData } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Servicii Cadastrale pentru Dezvoltatori Imobiliari | DANI Cadastru",
  description: "Parcelări, lotizări, apartamentare, topografie șantier și scanare laser 3D pentru dezvoltatori. Suport tehnic complet de la achiziție teren la livrare. Inginer autorizat ANCPI.",
  alternates: { canonical: "/servicii/dezvoltatori" },
};

const data: ServicePageData = {
  eyebrow: "SERVICII PENTRU DEZVOLTATORI",
  h1: "Suport Tehnic Complet pentru Dezvoltatori Imobiliari",
  subtitle: "De la due diligence la achiziție, parcelare, autorizație, șantier și apartamentare finală — îți acoperim toate etapele cu o singură echipă.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85",
    alt: "Ansamblu rezidențial — servicii cadastrale pentru dezvoltatori",
  },
  whatsappMessage: "Bună! Sunt dezvoltator și aș dori o ofertă pentru un proiect.",
  audienceDescription: "Dezvoltatori imobiliari, fonduri de investiții, constructori și antreprenori care derulează proiecte rezidențiale sau comerciale.",
  audienceBullets: [
    "Achiziționezi terenuri și ai nevoie de due diligence cadastral",
    "Trebuie să parcelezi un teren mare în loturi de vânzare",
    "Ai un ansamblu rezidențial și vrei apartamentare individuală",
    "Construiești și ai nevoie de topografie continuă de șantier",
    "Vrei modelare BIM cu scanare laser 3D pentru proiecte complexe",
  ],
  servicesIntro: "Suport tehnic complet pentru toate fazele unui proiect imobiliar.",
  services: [
    {
      icon: "Grid3x3",
      accent: "cyan",
      title: "Parcelări și lotizări",
      description: "Împărțim terenuri mari în loturi vandabile, cu acces, drumuri și utilități. Conformă cu PUG-ul local.",
      bullets: ["Plan parcelar", "Verificare urbanism", "Documentații separate pe lot"],
    },
    {
      icon: "Building2",
      accent: "violet",
      title: "Apartamentare",
      description: "Documentații cadastrale individuale pentru fiecare apartament dintr-un ansamblu rezidențial.",
      bullets: ["Plan releveu apartamente", "Cote părți comune", "Înscriere CF individuală"],
    },
    {
      icon: "HardHat",
      accent: "pink",
      title: "Topografie șantier",
      description: "Trasare axe, monitorizare tasări, verificări cote și controale geometrice pe parcursul execuției.",
      bullets: ["Trasare clădiri", "Monitorizare deformări", "Verificare la fiecare cotă"],
    },
    {
      icon: "ScanLine",
      accent: "cyan",
      title: "Scanare laser 3D",
      description: "Captură de nor de puncte de înaltă densitate pentru modele BIM și digital twin. Util pentru renovări și clădiri complexe.",
      bullets: ["Nor de puncte LIDAR", "Model 3D editabil", "Integrare BIM"],
    },
    {
      icon: "FileSearch",
      accent: "violet",
      title: "Due diligence cadastral",
      description: "Verificare aprofundată a situației juridice și tehnice înainte de achiziția unui teren sau ansamblu.",
      bullets: ["Verificare CF", "Identificare suprapuneri", "Raport de riscuri"],
    },
    {
      icon: "Layers",
      accent: "pink",
      title: "Modele digitale de teren",
      description: "MDT și MNT pentru proiectanți, livrate în format DWG sau format propriu software-ului tău.",
      bullets: ["Modele mesh / TIN", "Curbe de nivel", "Volume excavare"],
    },
  ],
  processSteps: [
    { title: "1. Pre-achiziție", description: "Due diligence cadastral complet înainte de a semna." },
    { title: "2. Pregătire proiect", description: "Parcelare, ridicări topografice, fișiere DWG pentru arhitect." },
    { title: "3. În timpul execuției", description: "Trasări, verificări, monitorizare. Echipă dedicată proiectului." },
    { title: "4. La finalizare", description: "Apartamentare, certificate de edificare, intabulare individuală." },
  ],
  faqs: [
    { question: "Faceți contracte cadru cu dezvoltatori?", answer: "Da, oferim contracte cadru cu tarife preferențiale pentru parteneri pe termen lung. Discutăm direct la primul proiect." },
    { question: "Cât durează apartamentarea unui bloc de 30 apartamente?", answer: "Procesul nostru durează 4-6 săptămâni de la primirea documentelor complete. Termenul OCPI de înregistrare se adaugă peste." },
    { question: "Aveți echipament de scanare laser 3D propriu?", answer: "Da, lucrăm cu scanere terestre de înaltă precizie. Putem livra nori de puncte și modele 3D editabile în diverse formate (DWG, REVIT, RCS, E57)." },
    { question: "Puteți asigura topograf permanent pe șantier?", answer: "Da, pentru proiecte mari oferim prezență periodică sau permanentă pe șantier, în funcție de necesități și graficul de execuție." },
  ],
};

export default function Page() {
  return <ServicePageLayout {...data} />;
}
