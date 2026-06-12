import type { Metadata } from "next";
import { ServicePageLayout, type ServicePageData } from "@/components/services/ServicePageLayout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Topografie pentru Construire Casă",
  description: "Servicii topografice pentru construirea unei case: ridicare topografică pentru autorizație, trasare casă pe teren, releveu, certificat de edificare. Acoperire în toată România.",
  path: "/servicii/construire-casa",
});

const data: ServicePageData = {
  eyebrow: "SERVICII PENTRU CONSTRUIRE CASĂ",
  h1: "Topografie Completă pentru Construirea Casei Tale",
  subtitle: "De la primul plan de situație pentru autorizația de construire, până la certificatul de edificare la final. Te susținem la fiecare etapă.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    alt: "Casă în construcție — topografie pentru autorizație și trasare",
  },
  whatsappMessage: "Bună! Vreau să construiesc o casă și am nevoie de topografie.",
  audienceDescription: "Persoane fizice și familii care vor să construiască o casă pe terenul propriu și au nevoie de documentațiile tehnice obligatorii.",
  audienceBullets: [
    "Ai un teren și vrei să obții autorizația de construire",
    "Ai nevoie să trasezi exact unde va fi amplasată casa pe teren",
    "Ai finalizat construcția și vrei certificatul de edificare",
    "Trebuie să faci releveul construcției pentru actualizare CF",
  ],
  servicesIntro: "Tot ce ai nevoie topografic de la teren gol până la casa intabulată.",
  services: [
    {
      icon: "Map",
      accent: "cyan",
      title: "Ridicare topografică",
      description: "Plan de situație pentru autorizația de construire, conform cerințelor primăriei și ale arhitectului tău.",
      bullets: ["Coordonate cu GNSS", "Reprezentare la scara 1:500", "Format DWG/PDF"],
    },
    {
      icon: "Target",
      accent: "violet",
      title: "Trasare casă",
      description: "Marcăm pe teren exact unde va fi fundația, conform planului arhitectural. Punem țăruși de referință.",
      bullets: ["Trasare axe", "Verificare cote", "Țăruși de referință"],
    },
    {
      icon: "Ruler",
      accent: "pink",
      title: "Releveu construcție",
      description: "Măsurători detaliate ale construcției existente pentru actualizarea cărții funciare sau pentru proiectele de extindere.",
      bullets: ["Releveu plan și fațade", "Suprafețe utile", "Plan pentru extindere"],
    },
    {
      icon: "Award",
      accent: "cyan",
      title: "Certificat de edificare",
      description: "Documentul tehnic care confirmă că construcția corespunde autorizației. Necesar pentru intabulare finală.",
      bullets: ["Verificare conformitate", "Documentație ANCPI", "Depunere OCPI"],
    },
  ],
  processSteps: [
    { title: "1. Înainte de autorizație", description: "Facem ridicarea topografică a terenului tău. Tu îi dai planul nostru arhitectului — el îți face proiectul." },
    { title: "2. Înainte de a începe construcția", description: "Trasăm pe teren conturul exact al casei, conform planurilor arhitectului." },
    { title: "3. În timpul construcției", description: "Putem verifica cote, axe și abateri în orice moment. Rămânem la dispoziția ta." },
    { title: "4. La final", description: "Întocmim releveul final și certificatul de edificare. Te ajutăm cu intabularea casei noi în CF." },
  ],
  faqs: [
    { question: "Când am nevoie de topografie pentru construirea casei?", answer: "Imediat după ce ai cumpărat terenul. Topografia este unul dintre primele documente pe care le cere arhitectul tău pentru proiectul de autorizație de construire." },
    { question: "Câtă vreme rămân valide țărușii de trasare?", answer: "Dacă terenul nu e perturbat, țărușii rămân valizi nelimitat. Recomandăm verificarea înainte de săparea fundației, mai ales după ploi intense." },
    { question: "Pot construi fără certificat de edificare?", answer: "Poți construi cu autorizație, dar nu poți intabula casa finalizată fără certificat de edificare. Practic, casa rămâne neînregistrată ca imobil." },
    { question: "Cât durează ridicarea topografică?", answer: "Pentru un teren de până la 2000 mp în zonă accesibilă: 2-3 zile lucrătoare de la măsurători la livrarea planului DWG/PDF." },
  ],
};

export default function Page() {
  return <ServicePageLayout {...data} />;
}
