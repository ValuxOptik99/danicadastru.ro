export interface Locality {
  slug: string;
  name: string;
  tier: 1 | 2 | 3;
  cluster: string;
}

export interface LocalityCluster {
  slug: string;
  title: string;
  description: string;
  localities: string[];
}

export const localitati: Locality[] = [
  // Tier 1 — money pages
  { slug: "constanta",              name: "Constanța",              tier: 1, cluster: "metropolitan"  },
  { slug: "navodari",               name: "Năvodari",               tier: 1, cluster: "litoral-nord"  },
  { slug: "ovidiu",                 name: "Ovidiu",                 tier: 1, cluster: "metropolitan"  },
  { slug: "valu-lui-traian",        name: "Valu lui Traian",        tier: 1, cluster: "metropolitan"  },
  { slug: "cumpana",                name: "Cumpăna",                tier: 1, cluster: "metropolitan"  },
  { slug: "lumina",                 name: "Lumina",                 tier: 1, cluster: "litoral-nord"  },
  { slug: "agigea",                 name: "Agigea",                 tier: 1, cluster: "metropolitan"  },
  { slug: "eforie",                 name: "Eforie",                 tier: 1, cluster: "litoral-sud"   },
  { slug: "techirghiol",            name: "Techirghiol",            tier: 1, cluster: "litoral-sud"   },
  { slug: "mangalia",               name: "Mangalia",               tier: 1, cluster: "litoral-sud"   },
  { slug: "medgidia",               name: "Medgidia",               tier: 1, cluster: "vest-centru"   },
  { slug: "murfatlar",              name: "Murfatlar",              tier: 1, cluster: "metropolitan"  },
  { slug: "mihail-kogalniceanu",    name: "Mihail Kogălniceanu",    tier: 1, cluster: "vest-centru"   },
  { slug: "tuzla",                  name: "Tuzla",                  tier: 1, cluster: "litoral-sud"   },
  { slug: "costinesti",             name: "Costinești",             tier: 1, cluster: "litoral-sud"   },
  { slug: "corbu",                  name: "Corbu",                  tier: 1, cluster: "litoral-nord"  },
  { slug: "cernavoda",              name: "Cernavodă",              tier: 1, cluster: "nord-judet"    },
  { slug: "harsova",                name: "Hârșova",                tier: 1, cluster: "nord-judet"    },
  { slug: "negru-voda",             name: "Negru Vodă",             tier: 1, cluster: "vest-centru"   },
  { slug: "limanu",                 name: "Limanu",                 tier: 1, cluster: "litoral-sud"   },

  // Tier 2 — extindere
  { slug: "23-august",              name: "23 August",              tier: 2, cluster: "litoral-sud"   },
  { slug: "cobadin",                name: "Cobadin",                tier: 2, cluster: "vest-centru"   },
  { slug: "topraisar",              name: "Topraisar",              tier: 2, cluster: "vest-centru"   },
  { slug: "poarta-alba",            name: "Poarta Albă",            tier: 2, cluster: "metropolitan"  },
  { slug: "castelu",                name: "Castelu",                tier: 2, cluster: "vest-centru"   },
  { slug: "pestera",                name: "Peștera",                tier: 2, cluster: "vest-centru"   },
  { slug: "nicolae-balcescu",       name: "Nicolae Bălcescu",       tier: 2, cluster: "vest-centru"   },
  { slug: "cogealac",               name: "Cogealac",               tier: 2, cluster: "nord-judet"    },
  { slug: "mihai-viteazu",          name: "Mihai Viteazu",          tier: 2, cluster: "nord-judet"    },
  { slug: "istria",                 name: "Istria",                 tier: 2, cluster: "nord-judet"    },
  { slug: "crucea",                 name: "Crucea",                 tier: 2, cluster: "nord-judet"    },
  { slug: "adamclisi",              name: "Adamclisi",              tier: 2, cluster: "vest-centru"   },
  { slug: "baneasa",                name: "Băneasa",                tier: 2, cluster: "vest-centru"   },
  { slug: "ostrov",                 name: "Ostrov",                 tier: 2, cluster: "vest-centru"   },
  { slug: "rasova",                 name: "Rasova",                 tier: 2, cluster: "nord-judet"    },
  { slug: "seimeni",                name: "Seimeni",                tier: 2, cluster: "nord-judet"    },
  { slug: "saligny",                name: "Saligny",                tier: 2, cluster: "nord-judet"    },
  { slug: "pantelimon",             name: "Pantelimon",             tier: 2, cluster: "nord-judet"    },
  { slug: "saraiu",                 name: "Saraiu",                 tier: 2, cluster: "nord-judet"    },

  // Tier 3 — satelit
  { slug: "albesti",                name: "Albești",                tier: 3, cluster: "litoral-sud"   },
  { slug: "cerchezu",               name: "Cerchezu",               tier: 3, cluster: "vest-centru"   },
  { slug: "chirnogeni",             name: "Chirnogeni",             tier: 3, cluster: "vest-centru"   },
  { slug: "comana",                 name: "Comana",                 tier: 3, cluster: "vest-centru"   },
  { slug: "deleni",                 name: "Deleni",                 tier: 3, cluster: "vest-centru"   },
  { slug: "dobromir",               name: "Dobromir",               tier: 3, cluster: "vest-centru"   },
  { slug: "dumbraveni",             name: "Dumbrăveni",             tier: 3, cluster: "vest-centru"   },
  { slug: "fantanele",              name: "Fântânele",              tier: 3, cluster: "nord-judet"    },
  { slug: "garliciu",               name: "Gârliciu",               tier: 3, cluster: "nord-judet"    },
  { slug: "gradina",                name: "Grădina",                tier: 3, cluster: "nord-judet"    },
  { slug: "independenta",           name: "Independența",           tier: 3, cluster: "vest-centru"   },
  { slug: "ion-corvin",             name: "Ion Corvin",             tier: 3, cluster: "vest-centru"   },
  { slug: "lipnita",                name: "Lipnița",                tier: 3, cluster: "vest-centru"   },
  { slug: "mereni",                 name: "Mereni",                 tier: 3, cluster: "vest-centru"   },
  { slug: "oltina",                 name: "Oltina",                 tier: 3, cluster: "vest-centru"   },
  { slug: "silistea",               name: "Siliștea",               tier: 3, cluster: "nord-judet"    },
  { slug: "targusor",               name: "Târgușor",               tier: 3, cluster: "nord-judet"    },
  { slug: "tortoman",               name: "Tortoman",               tier: 3, cluster: "vest-centru"   },
  { slug: "baraganu",               name: "Bărăganu",               tier: 3, cluster: "metropolitan"  },
  { slug: "ciobanu",                name: "Ciobanu",                tier: 3, cluster: "nord-judet"    },
];

export const clusters: LocalityCluster[] = [
  {
    slug: "litoral-sud",
    title: "Sudul Litoralului",
    description: "Cadastru și topografie în stațiunile și localitățile din sudul litoralului Mării Negre.",
    localities: ["Eforie", "Techirghiol", "Tuzla", "Costinești", "23 August", "Mangalia", "Limanu", "Albești"],
  },
  {
    slug: "litoral-nord",
    title: "Litoralul de Nord",
    description: "Servicii cadastrale în zona Năvodari–Corbu și localitățile din nordul litoralului.",
    localities: ["Năvodari", "Corbu", "Lumina", "Ovidiu"],
  },
  {
    slug: "metropolitan",
    title: "Zona Metropolitană Constanța",
    description: "Documentații cadastrale în Constanța și localitățile din imediata apropiere.",
    localities: ["Constanța", "Agigea", "Cumpăna", "Valu lui Traian", "Ovidiu", "Murfatlar", "Poarta Albă", "Lumina", "Bărăganu"],
  },
  {
    slug: "vest-centru",
    title: "Vestul și Centrul Județului",
    description: "Cadastru pentru terenuri, construcții și exploatații agricole în interiorul județului.",
    localities: ["Medgidia", "Castelu", "Peștera", "Cobadin", "Topraisar", "Nicolae Bălcescu", "Mihail Kogălniceanu", "Negru Vodă", "Adamclisi", "Băneasa", "Ostrov"],
  },
  {
    slug: "nord-judet",
    title: "Nordul Județului",
    description: "Servicii cadastrale și topografice în nordul județului Constanța, spre Dunăre.",
    localities: ["Cernavodă", "Hârșova", "Crucea", "Cogealac", "Istria", "Mihai Viteazu", "Pantelimon", "Saraiu", "Seimeni", "Saligny", "Rasova"],
  },
];

export function getLocalityLabel(slug?: string | null): string {
  if (!slug) return "—";
  if (slug === "alta-localitate") return "Altă localitate";
  return localitati.find((l) => l.slug === slug)?.name ?? slug;
}
