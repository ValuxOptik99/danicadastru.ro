export interface County {
  slug: string;
  name: string;
  county: string;
  region: string;
  landmark: string;
  ocpi: string;
}

export const counties: County[] = [
  { slug: "alba-iulia", name: "Alba Iulia", county: "Alba", region: "Transilvania", landmark: "centrul istoric", ocpi: "Alba" },
  { slug: "arad", name: "Arad", county: "Arad", region: "Crișana", landmark: "centrul vechi", ocpi: "Arad" },
  { slug: "pitesti", name: "Pitești", county: "Argeș", region: "Muntenia", landmark: "zona centrală", ocpi: "Argeș" },
  { slug: "bacau", name: "Bacău", county: "Bacău", region: "Moldova", landmark: "centrul civic", ocpi: "Bacău" },
  { slug: "oradea", name: "Oradea", county: "Bihor", region: "Crișana", landmark: "zona Art Nouveau", ocpi: "Bihor" },
  { slug: "bistrita", name: "Bistrița", county: "Bistrița-Năsăud", region: "Transilvania", landmark: "centrul medieval", ocpi: "Bistrița-Năsăud" },
  { slug: "botosani", name: "Botoșani", county: "Botoșani", region: "Moldova", landmark: "centrul istoric", ocpi: "Botoșani" },
  { slug: "brasov", name: "Brașov", county: "Brașov", region: "Transilvania", landmark: "Centrul Vechi", ocpi: "Brașov" },
  { slug: "braila", name: "Brăila", county: "Brăila", region: "Muntenia", landmark: "zona port", ocpi: "Brăila" },
  { slug: "bucuresti", name: "București", county: "București", region: "Muntenia", landmark: "Centrul Vechi", ocpi: "Ilfov - Sector" },
  { slug: "buzau", name: "Buzău", county: "Buzău", region: "Muntenia", landmark: "centrul civic", ocpi: "Buzău" },
  { slug: "resita", name: "Reșița", county: "Caraș-Severin", region: "Banat", landmark: "zona industrială", ocpi: "Caraș-Severin" },
  { slug: "calarasi", name: "Călărași", county: "Călărași", region: "Muntenia", landmark: "zona centrală", ocpi: "Călărași" },
  { slug: "cluj-napoca", name: "Cluj-Napoca", county: "Cluj", region: "Transilvania", landmark: "centrul universitar", ocpi: "Cluj" },
  { slug: "constanta", name: "Constanța", county: "Constanța", region: "Dobrogea", landmark: "zona Peninsulei", ocpi: "Constanța" },
  { slug: "sfantu-gheorghe", name: "Sfântu Gheorghe", county: "Covasna", region: "Transilvania", landmark: "centrul civic", ocpi: "Covasna" },
  { slug: "targoviste", name: "Târgoviște", county: "Dâmbovița", region: "Muntenia", landmark: "Curtea Domnească", ocpi: "Dâmbovița" },
  { slug: "craiova", name: "Craiova", county: "Dolj", region: "Oltenia", landmark: "centrul civic", ocpi: "Dolj" },
  { slug: "galati", name: "Galați", county: "Galați", region: "Moldova", landmark: "zona port", ocpi: "Galați" },
  { slug: "giurgiu", name: "Giurgiu", county: "Giurgiu", region: "Muntenia", landmark: "zona centrală", ocpi: "Giurgiu" },
  { slug: "targu-jiu", name: "Târgu Jiu", county: "Gorj", region: "Oltenia", landmark: "Calea Eroilor", ocpi: "Gorj" },
  { slug: "miercurea-ciuc", name: "Miercurea Ciuc", county: "Harghita", region: "Transilvania", landmark: "centrul civic", ocpi: "Harghita" },
  { slug: "deva", name: "Deva", county: "Hunedoara", region: "Transilvania", landmark: "Cetatea Devei", ocpi: "Hunedoara" },
  { slug: "slobozia", name: "Slobozia", county: "Ialomița", region: "Muntenia", landmark: "zona centrală", ocpi: "Ialomița" },
  { slug: "iasi", name: "Iași", county: "Iași", region: "Moldova", landmark: "centrul universitar", ocpi: "Iași" },
  { slug: "baia-mare", name: "Baia Mare", county: "Maramureș", region: "Transilvania", landmark: "Centrul Vechi", ocpi: "Maramureș" },
  { slug: "drobeta-turnu-severin", name: "Drobeta-Turnu Severin", county: "Mehedinți", region: "Oltenia", landmark: "zona Portilor de Fier", ocpi: "Mehedinți" },
  { slug: "targu-mures", name: "Târgu Mureș", county: "Mureș", region: "Transilvania", landmark: "Piața Trandafirilor", ocpi: "Mureș" },
  { slug: "piatra-neamt", name: "Piatra Neamț", county: "Neamț", region: "Moldova", landmark: "zona centrală", ocpi: "Neamț" },
  { slug: "slatina", name: "Slatina", county: "Olt", region: "Oltenia", landmark: "centrul civic", ocpi: "Olt" },
  { slug: "ploiesti", name: "Ploiești", county: "Prahova", region: "Muntenia", landmark: "zona centrală", ocpi: "Prahova" },
  { slug: "satu-mare", name: "Satu Mare", county: "Satu Mare", region: "Transilvania", landmark: "centrul vechi", ocpi: "Satu Mare" },
  { slug: "zalau", name: "Zalău", county: "Sălaj", region: "Transilvania", landmark: "centrul civic", ocpi: "Sălaj" },
  { slug: "sibiu", name: "Sibiu", county: "Sibiu", region: "Transilvania", landmark: "Piața Mare", ocpi: "Sibiu" },
  { slug: "suceava", name: "Suceava", county: "Suceava", region: "Moldova", landmark: "Cetatea de Scaun", ocpi: "Suceava" },
  { slug: "alexandria", name: "Alexandria", county: "Teleorman", region: "Muntenia", landmark: "centrul civic", ocpi: "Teleorman" },
  { slug: "timisoara", name: "Timișoara", county: "Timiș", region: "Banat", landmark: "Piața Unirii", ocpi: "Timiș" },
  { slug: "tulcea", name: "Tulcea", county: "Tulcea", region: "Dobrogea", landmark: "zona Deltei", ocpi: "Tulcea" },
  { slug: "vaslui", name: "Vaslui", county: "Vaslui", region: "Moldova", landmark: "centrul civic", ocpi: "Vaslui" },
  { slug: "ramnicu-valcea", name: "Râmnicu Vâlcea", county: "Vâlcea", region: "Oltenia", landmark: "centrul civic", ocpi: "Vâlcea" },
  { slug: "focsani", name: "Focșani", county: "Vrancea", region: "Moldova", landmark: "centrul civic", ocpi: "Vrancea" },
  { slug: "buftea", name: "Buftea", county: "Ilfov", region: "Muntenia", landmark: "zona lacului", ocpi: "Ilfov" },
];
