export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  bullets: string[];
  icon: string;
  accentColor: string;
  href: string;
  audience: string;
}

export const services: Service[] = [
  {
    slug: "proprietari",
    title: "Pentru Proprietari",
    shortTitle: "Proprietari",
    description:
      "Cadastru și intabulare pentru apartament, casă sau teren. Documentații complete pentru vânzare, cumpărare, succesiune sau credit ipotecar.",
    bullets: [
      "Cadastru apartament, casă, teren",
      "Dezmembrare și alipire terenuri",
      "Trasare și identificare limite",
      "Actualizări cadastrale",
    ],
    icon: "Home",
    accentColor: "cyan",
    href: "/servicii/proprietari",
    audience: "proprietari de imobile",
  },
  {
    slug: "construire-casa",
    title: "Pentru Construirea unei Case",
    shortTitle: "Construire Casă",
    description:
      "Ridicări topografice pentru autorizația de construire, trasare casă în teren, releveu și certificat de edificare. Susținem tot procesul de la teren la finalizare.",
    bullets: [
      "Ridicare topografică pentru autorizație",
      "Trasare casă pe teren",
      "Releveu construcție",
      "Certificat de edificare",
    ],
    icon: "Hammer",
    accentColor: "violet",
    href: "/servicii/construire-casa",
    audience: "viitori proprietari care construiesc",
  },
  {
    slug: "dezvoltatori",
    title: "Pentru Dezvoltatori",
    shortTitle: "Dezvoltatori",
    description:
      "Parcelări, lotizări, apartamentare și topografie completă de șantier. Inclusiv scanare laser 3D pentru proiecte BIM și digital twin.",
    bullets: [
      "Parcelări și lotizări",
      "Apartamentare și reapartamentare",
      "Topografie șantier (trasări, cote, monitorizare)",
      "Scanare laser 3D și modele BIM",
    ],
    icon: "Building2",
    accentColor: "pink",
    href: "/servicii/dezvoltatori",
    audience: "dezvoltatori imobiliari și constructori",
  },
  {
    slug: "arhitecti-proiectanti",
    title: "Pentru Arhitecți și Proiectanți",
    shortTitle: "Arhitecți",
    description:
      "Ridicări topografice complete, planuri de situație și modele digitale de teren. Livrăm fișiere DWG/DXF gata de import în software-ul tău.",
    bullets: [
      "Ridicări topografice complete",
      "Planuri de situație",
      "Fișiere DWG / DXF",
      "Modele digitale de teren (MDT)",
    ],
    icon: "PencilRuler",
    accentColor: "cyan",
    href: "/servicii/arhitecti-proiectanti",
    audience: "arhitecți, proiectanți, ingineri",
  },
  {
    slug: "notari-avocati",
    title: "Pentru Notari și Avocați",
    shortTitle: "Notari & Avocați",
    description:
      "Documentații pentru vânzări, donații, succesiuni, partaje și rectificări de carte funciară. Verificări tehnice pentru litigii și expertize.",
    bullets: [
      "Documentații pentru tranzacții notariale",
      "Succesiuni și partaje",
      "Rectificări de carte funciară",
      "Verificări tehnice pentru litigii",
    ],
    icon: "Scale",
    accentColor: "violet",
    href: "/servicii/notari-avocati",
    audience: "notari publici și avocați",
  },
  {
    slug: "due-diligence",
    title: "Consultanță și Verificări",
    shortTitle: "Due Diligence",
    description:
      "Due diligence cadastral înainte de cumpărare. Verificăm cartea funciară, suprapuneri, limite reale și riscuri tehnice. Esențial pentru investitori.",
    bullets: [
      "Verificare situație cadastrală",
      "Analiză carte funciară",
      "Identificare suprapuneri și conflicte",
      "Audit pre-achiziție pentru investitori",
    ],
    icon: "ShieldCheck",
    accentColor: "pink",
    href: "/servicii/due-diligence",
    audience: "investitori și cumpărători prudenți",
  },
];
