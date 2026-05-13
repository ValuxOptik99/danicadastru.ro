export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  bullets: string[];
  icon: string;
  accentColor: string;
  href: string;
}

export const services: Service[] = [
  {
    slug: "cadastru-intabulare",
    title: "Cadastru & Intabulare",
    shortTitle: "Cadastru",
    description:
      "Documentații tehnice complete pentru apartamente, case și terenuri. Înregistrare în cartea funciară cu zero erori.",
    bullets: [
      "Dosare complete pentru Cartea Funciară",
      "Dezmembrări & Alipiri",
      "Actualizări informații cadastrale",
      "Intabulare apartament / casă / teren",
    ],
    icon: "FileCheck2",
    accentColor: "cyan",
    href: "/servicii/cadastru-intabulare",
  },
  {
    slug: "topografie-ingineresca",
    title: "Topografie Inginerească",
    shortTitle: "Topografie",
    description:
      "Asistență topografică pentru șantiere și proiecte de infrastructură. Trasări axe, cote și monitorizare tasări.",
    bullets: [
      "Ridicări topografice",
      "Planuri de situație",
      "Trasări axe și cote",
      "Monitorizare tasări",
    ],
    icon: "Compass",
    accentColor: "violet",
    href: "/servicii/topografie-ingineresca",
  },
  {
    slug: "scanare-laser-3d",
    title: "Scanare Laser 3D",
    shortTitle: "Scanare 3D",
    description:
      "Captarea realității cu nor de puncte de înaltă densitate pentru modelare BIM și restaurări istorice.",
    bullets: [
      "Modele Digital Twin",
      "Arhivare digitală 3D",
      "Modelare BIM",
      "Restaurări istorice",
    ],
    icon: "ScanLine",
    accentColor: "pink",
    href: "/servicii/scanare-laser-3d",
  },
];
