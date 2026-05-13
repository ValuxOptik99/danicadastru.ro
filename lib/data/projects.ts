export interface Project {
  id: string;
  title: string;
  tag: string;
  tagColor: "cyan" | "magenta" | "violet";
  imageUrl: string;
  imageAlt: string;
  description: string;
  size: "large" | "small";
}

export const projects: Project[] = [
  {
    id: "skyline",
    title: "Ansamblul Rezidențial SkyLine",
    tag: "CADASTRU COMPLEX",
    tagColor: "cyan",
    imageUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    imageAlt: "Ansamblu rezidențial modern - proiect cadastru DANI",
    description:
      "Documentație cadastrală completă pentru un ansamblu de 12 blocuri cu 480 de apartamente. Intabulare individuală și dezmembrare teren.",
    size: "large",
  },
  {
    id: "pod-a7",
    title: "Trasări Pod Autostrada A7",
    tag: "INFRASTRUCTURĂ",
    tagColor: "magenta",
    imageUrl:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
    imageAlt: "Pod autostradă - proiect topografie inginerească DANI",
    description:
      "Trasări de precizie milimetrică pentru infrastructura podului pe Autostrada A7. Monitorizare continuă pe durata construcției.",
    size: "small",
  },
  {
    id: "vibe-hub",
    title: "Vibe Hub Office Center",
    tag: "SCANARE 3D",
    tagColor: "violet",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    imageAlt: "Clădire de birouri modernă - proiect scanare laser 3D DANI",
    description:
      "Scanare laser 3D a unui centru de birouri pe 8 etaje pentru modelare BIM și arhivare digitală. Nor de puncte de 2 miliarde de puncte.",
    size: "small",
  },
];
