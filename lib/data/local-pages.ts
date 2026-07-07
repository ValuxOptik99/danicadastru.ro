export interface LocalPageData {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  pinX: number;
  pinY: number;
  h1: string;
  heroIntro: string;
  zoneType: string;
  localContext: string;
  propertyTypes: string[];
  localChallenges: string;
  ocpiNote: string;
  emphasizedServices: Array<{ title: string; description: string; accent: "cyan" | "violet" | "pink" }>;
  faqs: Array<{ question: string; answer: string }>;
  neighbors: Array<{ label: string; slug: string }>;
  whatsappMessage: string;
}

export const localPages: LocalPageData[] = [
  {
    slug: "cadastru-constanta",
    city: "Constanța",
    metaTitle: "Cadastru Constanța — Intabulare și Topografie",
    metaDescription: "Servicii de cadastru și intabulare în Constanța: apartamente, case, terenuri, spații comerciale. Inginer autorizat ANCPI. Documentații rapide pentru OCPI Constanța. Cere ofertă.",
    pinX: 362.3, pinY: 242.4,
    h1: "Cadastru și Intabulare în Constanța",
    heroIntro: "Constanța este cel mai dinamic oraș de pe litoralul românesc, cu o piață imobiliară intensă — de la apartamentele din Tomis și Faleză Nord, la vilele din Palazu Mare și spațiile comerciale din centru. Îți oferim documentații cadastrale complete, adaptate specificului fiecărui cartier.",
    zoneType: "Municipiu, reședință de județ",
    localContext: "Ca cel mai mare oraș din Dobrogea, Constanța are o diversitate imobiliară considerabilă: blocuri vechi în zona Tomis și Cet, ansambluri rezidențiale noi în Mamaia Nord și Palazu, case individuale în Compozitori și Viile Noi, plus un sector comercial și industrial semnificativ în zona Portului. Fiecare tip de imobil are particularitățile lui cadastrale.",
    propertyTypes: [
      "Apartamente în blocuri (Tomis, Cet, Faleză Nord)",
      "Ansambluri rezidențiale noi (Mamaia Nord, Palazu)",
      "Case și vile (Palazu Mare, Compozitori, Viile Noi)",
      "Spații comerciale și birouri (centru, bulevarde)",
      "Hale și spații industriale (zona Port)",
    ],
    localChallenges: "În Constanța, cele mai frecvente situații sunt apartamentele din blocurile vechi fără cadastru actualizat și diferențele de suprafață între actele vechi și măsurătorile actuale. La ansamblurile noi, apartamentarea și intabularea individuală sunt esențiale înainte de vânzare.",
    ocpiNote: "Toate documentațiile pentru Constanța se depun la OCPI Constanța, cu care lucrăm constant.",
    emphasizedServices: [
      { title: "Cadastru apartament", description: "Pentru apartamente în toate cartierele — de la blocurile vechi din Tomis la ansamblurile noi.", accent: "cyan" },
      { title: "Apartamentare", description: "Pentru dezvoltatori cu blocuri noi — intabulare individuală a fiecărei unități.", accent: "violet" },
      { title: "Cadastru spații comerciale", description: "Pentru birouri, magazine și spații de pe bulevardele principale.", accent: "pink" },
    ],
    faqs: [
      { question: "Cât durează un cadastru de apartament în Constanța?", answer: "Termenul standard la OCPI Constanța este de 15-30 zile lucrătoare de la depunere. Cu dosarul pregătit corect, încadrarea este sigură." },
      { question: "Faceți cadastru în toate cartierele Constanței?", answer: "Da, acoperim tot orașul: Tomis, Faleză Nord, Mamaia, Palazu, Cet, Centru, Viile Noi, Compozitori și zonele industriale." },
      { question: "Am un apartament vechi în Tomis fără cadastru. Ce fac?", answer: "Foarte frecvent în Constanța. Facem măsurătorile, întocmim documentația și o depunem la OCPI. Te ghidăm prin toți pașii — contactează-ne pentru detalii." },
    ],
    neighbors: [
      { label: "Năvodari", slug: "cadastru-navodari" },
      { label: "Ovidiu", slug: "cadastru-ovidiu" },
      { label: "Agigea", slug: "cadastru-agigea" },
    ],
    whatsappMessage: "Bună! Aș dori o ofertă pentru cadastru în Constanța.",
  },

  {
    slug: "cadastru-navodari",
    city: "Năvodari",
    metaTitle: "Cadastru Năvodari — Intabulare Apartamente și Terenuri",
    metaDescription: "Cadastru și intabulare în Năvodari: apartamente Mamaia Nord, ansambluri noi, terenuri. Inginer autorizat ANCPI. Documentații pentru dezvoltatori și proprietari. Cere ofertă.",
    pinX: 354.2, pinY: 186.4,
    h1: "Cadastru și Intabulare în Năvodari",
    heroIntro: "Năvodari este una dintre cele mai active zone de dezvoltare imobiliară de pe litoral, cu numeroase ansambluri rezidențiale noi în Mamaia Nord. Susținem atât dezvoltatorii cu documentații complete de la autorizație la apartamentare, cât și proprietarii individuali.",
    zoneType: "Oraș, zonă de boom imobiliar",
    localContext: "Năvodari a cunoscut o explozie de construcții rezidențiale în ultimii ani, în special în zona Mamaia Nord, unde au apărut zeci de ansambluri de apartamente destinate atât locuirii permanente cât și investițiilor turistice. Această activitate intensă înseamnă o cerere mare de cadastru pentru construcții noi, apartamentare și intabulare individuală.",
    propertyTypes: [
      "Apartamente în ansambluri noi (Mamaia Nord)",
      "Studiouri și garsoniere de investiție",
      "Terenuri pentru dezvoltare",
      "Case individuale în zona veche",
      "Spații comerciale de sezon",
    ],
    localChallenges: "Specificul Năvodariului este volumul mare de construcții noi care necesită atestat de edificare și apartamentare. Pentru investitorii care cumpără studiouri în ansambluri, intabularea individuală corectă este esențială. Verificăm și situațiile de suprapunere pe terenurile de dezvoltare.",
    ocpiNote: "Documentațiile pentru Năvodari se depun la OCPI Constanța. Avem experiență cu ansamblurile rezidențiale din Mamaia Nord.",
    emphasizedServices: [
      { title: "Apartamentare ansambluri", description: "Pentru dezvoltatorii din Mamaia Nord — intabulare individuală a fiecărui apartament.", accent: "cyan" },
      { title: "Certificat de edificare", description: "Pentru construcțiile noi finalizate, necesar înainte de intabulare.", accent: "violet" },
      { title: "Cadastru teren", description: "Pentru terenurile de dezvoltare — dezmembrări, verificări, documentații.", accent: "pink" },
    ],
    faqs: [
      { question: "Faceți apartamentare pentru ansamblurile din Mamaia Nord?", answer: "Da, este una dintre lucrările noastre frecvente în Năvodari. Realizăm apartamentarea și intabularea individuală pentru fiecare unitate din ansamblu." },
      { question: "Am cumpărat un studio într-un bloc nou în Năvodari. E intabulat?", answer: "Depinde de dezvoltator. Verificăm situația în cartea funciară și, dacă e nevoie, întocmim documentația pentru intabularea individuală. Contactează-ne cu detaliile." },
      { question: "Cât costă cadastrul pentru un apartament în Năvodari?", answer: "Depinde de tipul și suprafața apartamentului. Trimite-ne detaliile pe WhatsApp și primești o ofertă rapidă." },
    ],
    neighbors: [
      { label: "Constanța", slug: "cadastru-constanta" },
      { label: "Ovidiu", slug: "cadastru-ovidiu" },
    ],
    whatsappMessage: "Bună! Aș dori o ofertă pentru cadastru în Năvodari.",
  },

  {
    slug: "cadastru-eforie",
    city: "Eforie",
    metaTitle: "Cadastru Eforie Nord și Sud — Intabulare Vile și Apartamente",
    metaDescription: "Cadastru și intabulare în Eforie Nord și Eforie Sud: vile, apartamente de vacanță, pensiuni, terenuri. Inginer autorizat ANCPI. Cere ofertă personalizată.",
    pinX: 366.3, pinY: 287.1,
    h1: "Cadastru și Intabulare în Eforie",
    heroIntro: "Eforie Nord și Eforie Sud sunt stațiuni cu o piață imobiliară axată pe proprietăți de vacanță — vile, apartamente în regim hotelier, pensiuni și terenuri cu potențial turistic. Documentațiile cadastrale aici au adesea particularități legate de destinația turistică.",
    zoneType: "Oraș-stațiune turistică",
    localContext: "Eforie combină locuirea permanentă cu turismul intens. Multe proprietăți sunt case de vacanță, pensiuni sau apartamente cumpărate ca investiție pentru închiriere sezonieră. Există și un fond construit mai vechi în centrul stațiunii, alături de dezvoltări noi. Terenurile cu deschidere spre mare sau aproape de faleză au valoare ridicată și necesită documentații precise.",
    propertyTypes: [
      "Vile și case de vacanță",
      "Apartamente în regim hotelier",
      "Pensiuni și mini-hoteluri",
      "Terenuri cu potențial turistic",
      "Apartamente în blocuri (centru stațiune)",
    ],
    localChallenges: "În Eforie, atenția se concentrează pe intabularea corectă a proprietăților cu destinație turistică și pe verificarea suprafețelor pentru terenurile de valoare. La pensiuni și structuri de cazare, edificarea și releveele precise sunt esențiale. Ajutăm și la regularizarea construcțiilor extinse fără autorizație inițială.",
    ocpiNote: "Documentațiile pentru Eforie Nord și Eforie Sud se depun la OCPI Constanța.",
    emphasizedServices: [
      { title: "Cadastru vile și case vacanță", description: "Pentru proprietățile de vacanță din Eforie Nord și Sud.", accent: "cyan" },
      { title: "Documentații pensiuni", description: "Relevee și edificare pentru structuri de cazare turistică.", accent: "violet" },
      { title: "Cadastru teren turistic", description: "Verificări și documentații pentru terenurile cu potențial de dezvoltare.", accent: "pink" },
    ],
    faqs: [
      { question: "Fac cadastru pentru o pensiune în Eforie. Ce presupune?", answer: "Pentru o pensiune întocmim releveul construcției, verificăm situația autorizațiilor și, dacă e nevoie, obținem atestatul de edificare pentru intabulare. Contactează-ne pentru o evaluare." },
      { question: "Am o vilă în Eforie Nord fără acte complete. Mă puteți ajuta?", answer: "Da. Analizăm situația juridică, facem măsurătorile și întocmim documentația necesară pentru regularizare și intabulare." },
      { question: "Deserviți atât Eforie Nord cât și Eforie Sud?", answer: "Da, acoperim ambele stațiuni, precum și zona Techirghiol din apropiere." },
    ],
    neighbors: [
      { label: "Constanța", slug: "cadastru-constanta" },
      { label: "23 August", slug: "cadastru-23-august" },
      { label: "Agigea", slug: "cadastru-agigea" },
    ],
    whatsappMessage: "Bună! Aș dori o ofertă pentru cadastru în Eforie.",
  },

  {
    slug: "cadastru-mangalia",
    city: "Mangalia",
    metaTitle: "Cadastru Mangalia — Intabulare și Topografie Local",
    metaDescription: "Cadastru și intabulare în Mangalia și stațiunile din sud (Saturn, Venus, Neptun, Jupiter, Olimp): apartamente, case, terenuri, spații turistice. Birou local. Cere ofertă.",
    pinX: 346.4, pinY: 381.7,
    h1: "Cadastru și Intabulare în Mangalia",
    heroIntro: "Mangalia și stațiunile din jur — Saturn, Venus, Neptun, Jupiter, Olimp — formează o zonă cu specific turistic-rezidențial puternic. Fiind localizați chiar aici, oferim cea mai rapidă intervenție și cunoaștem în detaliu specificul cadastral al zonei.",
    zoneType: "Municipiu de coastă (sediul nostru)",
    localContext: "Mangalia este orașul unde ne avem sediul, ceea ce ne oferă un avantaj de proximitate și cunoaștere locală. Zona include atât fondul urban al municipiului (blocuri, case, spații industriale legate de șantierul naval), cât și stațiunile turistice din nord (Saturn, Venus, Neptun, Jupiter, Olimp) cu vile, hoteluri, pensiuni și apartamente de vacanță. Este una dintre zonele noastre cu cea mai intensă activitate.",
    propertyTypes: [
      "Apartamente și case în municipiul Mangalia",
      "Vile și apartamente în stațiuni (Saturn-Olimp)",
      "Hoteluri și pensiuni turistice",
      "Terenuri cu destinație turistică",
      "Spații comerciale și industriale",
    ],
    localChallenges: "Fiind sediul nostru, cunoaștem foarte bine particularitățile zonei: de la intabularea complexelor turistice din stațiuni, la documentațiile pentru fondul construit al orașului. Rezolvăm frecvent situații de edificare pentru construcții turistice și apartamentări de complexe de vacanță.",
    ocpiNote: "Documentațiile se depun la OCPI Constanța. Fiind localizați în Mangalia, gestionăm rapid întregul proces.",
    emphasizedServices: [
      { title: "Cadastru complet local", description: "Intervenție rapidă în Mangalia și toate stațiunile din jur, fiind localizați aici.", accent: "cyan" },
      { title: "Documentații complexe turistice", description: "Pentru hoteluri, pensiuni și ansambluri de vacanță din Saturn până în Olimp.", accent: "violet" },
      { title: "Intabulare și edificare", description: "Pentru construcții turistice și rezidențiale finalizate.", accent: "pink" },
    ],
    faqs: [
      { question: "Aveți birou în Mangalia?", answer: "Da, sediul nostru este în Mangalia, pe Șos. Constanței nr. 19. Suntem cel mai aproape de tine pentru orice lucrare din zonă." },
      { question: "Deserviți stațiunile Saturn, Venus, Neptun, Jupiter, Olimp?", answer: "Da, acoperim toate stațiunile din nordul Mangaliei, precum și 2 Mai și Vama Veche în sud." },
      { question: "Cât de repede puteți veni la măsurători în Mangalia?", answer: "Fiind localizați aici, putem programa măsurătorile foarte rapid. Contactează-ne pe WhatsApp pentru o programare." },
    ],
    neighbors: [
      { label: "Limanu (2 Mai, Vama Veche)", slug: "cadastru-limanu" },
      { label: "23 August", slug: "cadastru-23-august" },
    ],
    whatsappMessage: "Bună! Aș dori o ofertă pentru cadastru în Mangalia.",
  },

  {
    slug: "cadastru-limanu",
    city: "Limanu",
    metaTitle: "Cadastru Limanu, 2 Mai și Vama Veche — Intabulare Case și Terenuri",
    metaDescription: "Cadastru și intabulare în comuna Limanu, inclusiv 2 Mai și Vama Veche: case de vacanță, pensiuni, terenuri, proprietăți turistice. Inginer autorizat ANCPI. Cere ofertă.",
    pinX: 332.8, pinY: 388.3,
    h1: "Cadastru în Limanu, 2 Mai și Vama Veche",
    heroIntro: "Comuna Limanu cuprinde satele Limanu, 2 Mai, Vama Veche și Hagieni — o zonă cu un caracter turistic aparte, foarte căutată pentru case de vacanță și pensiuni. Oferim documentații cadastrale pentru toate aceste localități din extremul sud al litoralului românesc.",
    zoneType: "Comună turistică (2 Mai, Vama Veche)",
    localContext: "Limanu este una dintre cele mai cunoscute zone turistice ale litoralului, datorită satelor 2 Mai și Vama Veche, apreciate pentru atmosfera lor relaxată. Piața imobiliară aici este dominată de case de vacanță, pensiuni, terenuri cu potențial turistic și tot mai multe construcții noi. Fiind aproape de granița cu Bulgaria și de zona protejată, unele terenuri au reglementări speciale de care ținem cont.",
    propertyTypes: [
      "Case de vacanță (2 Mai, Vama Veche)",
      "Pensiuni și case de oaspeți",
      "Terenuri cu potențial turistic",
      "Loturi de construcție",
      "Case tradiționale în satul Limanu",
    ],
    localChallenges: "În Limanu și 2 Mai / Vama Veche, cele mai frecvente lucrări sunt cadastrul pentru case de vacanță și pensiuni, precum și verificarea terenurilor înainte de cumpărare — esențială într-o zonă cu cerere mare și reglementări specifice de urbanism. Rezolvăm și intabularea construcțiilor turistice finalizate.",
    ocpiNote: "Documentațiile pentru Limanu, 2 Mai și Vama Veche se depun la OCPI Constanța.",
    emphasizedServices: [
      { title: "Cadastru case de vacanță", description: "Pentru proprietățile din 2 Mai, Vama Veche și satul Limanu.", accent: "cyan" },
      { title: "Due diligence teren", description: "Verificarea situației juridice și a limitelor înainte de cumpărare — esențială în zonă.", accent: "violet" },
      { title: "Documentații pensiuni", description: "Relevee, edificare și intabulare pentru structurile de cazare.", accent: "pink" },
    ],
    faqs: [
      { question: "Faceți cadastru în Vama Veche și 2 Mai?", answer: "Da, ambele fac parte din comuna Limanu, pe care o deservim integral, inclusiv satul Limanu și Hagieni." },
      { question: "Vreau să cumpăr un teren în 2 Mai. Puteți verifica situația?", answer: "Da, recomandăm un due diligence înainte de cumpărare: verificăm cartea funciară, limitele reale și eventualele reglementări speciale de urbanism din zonă. Contactează-ne cu detaliile terenului." },
      { question: "Am o pensiune în Vama Veche fără intabulare. Ce fac?", answer: "Întocmim releveul, verificăm autorizațiile și obținem atestatul de edificare pentru intabulare. Te ghidăm prin tot procesul." },
    ],
    neighbors: [
      { label: "Mangalia", slug: "cadastru-mangalia" },
      { label: "23 August", slug: "cadastru-23-august" },
    ],
    whatsappMessage: "Bună! Aș dori o ofertă pentru cadastru în Limanu / 2 Mai / Vama Veche.",
  },

  {
    slug: "cadastru-ovidiu",
    city: "Ovidiu",
    metaTitle: "Cadastru Ovidiu — Intabulare Case, Terenuri, Ansambluri",
    metaDescription: "Cadastru și intabulare în orașul Ovidiu: case, terenuri, ansambluri rezidențiale noi. Zonă metropolitană Constanța. Inginer autorizat ANCPI. Cere ofertă.",
    pinX: 342.2, pinY: 206.0,
    h1: "Cadastru și Intabulare în Ovidiu",
    heroIntro: "Ovidiu este un oraș în plină dezvoltare din zona metropolitană a Constanței, cu un mix de fond construit existent și ansambluri rezidențiale noi. Poziția strategică lângă lacul Siutghiol și aproape de Constanța și Năvodari îl fac atractiv pentru locuire și investiții.",
    zoneType: "Oraș în zona metropolitană Constanța",
    localContext: "Situat între Constanța și Năvodari, Ovidiu beneficiază de dezvoltarea întregii zone metropolitane. Aici găsim atât case și gospodării tradiționale, cât și ansambluri rezidențiale noi și terenuri în curs de dezvoltare. Proximitatea față de lacul Siutghiol și de arterele principale a stimulat construcțiile în ultimii ani.",
    propertyTypes: [
      "Case individuale",
      "Ansambluri rezidențiale noi",
      "Terenuri pentru dezvoltare",
      "Loturi din dezmembrări",
      "Spații mixte rezidențial-comerciale",
    ],
    localChallenges: "În Ovidiu se combină cadastrul pentru fondul construit vechi (case fără documentație actualizată) cu documentațiile pentru construcțiile și ansamblurile noi. Dezmembrările de terenuri și intabularea caselor nou construite sunt frecvente.",
    ocpiNote: "Documentațiile pentru Ovidiu se depun la OCPI Constanța.",
    emphasizedServices: [
      { title: "Cadastru casă", description: "Pentru case noi și existente din Ovidiu — documentație completă.", accent: "cyan" },
      { title: "Dezmembrări și alipiri", description: "Pentru terenurile în dezvoltare din zona metropolitană.", accent: "violet" },
      { title: "Intabulare construcții noi", description: "Edificare și înscriere în cartea funciară pentru construcțiile finalizate.", accent: "pink" },
    ],
    faqs: [
      { question: "Faceți cadastru pentru case vechi în Ovidiu?", answer: "Da. Multe case din Ovidiu nu au cadastru actualizat. Facem măsurătorile și întocmim documentația pentru intabulare. Contactează-ne pentru detalii." },
      { question: "Am un teren în Ovidiu pe care vreau să construiesc. Ce îmi trebuie?", answer: "Ai nevoie de ridicare topografică pentru autorizația de construire. După construcție, urmează edificarea și intabularea. Te ghidăm prin toți pașii." },
      { question: "Cât durează cadastrul în Ovidiu?", answer: "Termenul OCPI Constanța este de 15-30 zile lucrătoare. Depunem dosarul corect pentru încadrarea în termen." },
    ],
    neighbors: [
      { label: "Constanța", slug: "cadastru-constanta" },
      { label: "Năvodari", slug: "cadastru-navodari" },
    ],
    whatsappMessage: "Bună! Aș dori o ofertă pentru cadastru în Ovidiu.",
  },

  {
    slug: "cadastru-23-august",
    city: "23 August",
    metaTitle: "Cadastru 23 August și Olimp — Intabulare Case de Vacanță",
    metaDescription: "Cadastru și intabulare în comuna 23 August, inclusiv stațiunea Olimp: case de vacanță, pensiuni, terenuri turistice, apartamente. Inginer autorizat ANCPI. Cere ofertă.",
    pinX: 351.5, pinY: 342.7,
    h1: "Cadastru și Intabulare în 23 August",
    heroIntro: "Comuna 23 August, care include și stațiunea Olimp, este o zonă turistică de pe litoralul sudic, cu o cerere constantă de proprietăți de vacanță. Oferim documentații cadastrale pentru case, pensiuni, apartamente și terenuri din întreaga zonă.",
    zoneType: "Comună turistică de litoral (Olimp)",
    localContext: "Situată între Neptun-Olimp și Costinești, comuna 23 August combină locuirea permanentă cu turismul de sezon. Include stațiunea Olimp cu hoteluri și apartamente de vacanță, satul 23 August și zona Dulcești. Piața imobiliară este axată pe case de vacanță, terenuri cu deschidere spre mare și dezvoltări turistice, dar are și un fond rezidențial permanent.",
    propertyTypes: [
      "Case de vacanță",
      "Apartamente în stațiunea Olimp",
      "Pensiuni și structuri de cazare",
      "Terenuri cu potențial turistic",
      "Case în satul 23 August",
    ],
    localChallenges: "În 23 August și Olimp, lucrările frecvente sunt cadastrul pentru case de vacanță și apartamente turistice, plus verificarea terenurilor cu potențial de dezvoltare. La structurile de cazare din Olimp, edificarea și intabularea corectă sunt esențiale. Verificăm și diferențele de suprafață la terenurile mai vechi.",
    ocpiNote: "Documentațiile pentru 23 August și Olimp se depun la OCPI Constanța.",
    emphasizedServices: [
      { title: "Cadastru case vacanță", description: "Pentru proprietățile din 23 August și stațiunea Olimp.", accent: "cyan" },
      { title: "Documentații turistice", description: "Relevee și edificare pentru pensiuni și structuri de cazare din Olimp.", accent: "violet" },
      { title: "Cadastru teren", description: "Verificări și documentații pentru terenurile turistice și rezidențiale.", accent: "pink" },
    ],
    faqs: [
      { question: "Deserviți stațiunea Olimp?", answer: "Da, stațiunea Olimp face parte din comuna 23 August, pe care o acoperim integral, inclusiv satul 23 August și zona Dulcești." },
      { question: "Am un apartament în Olimp. Ce cadastru îmi trebuie pentru vânzare?", answer: "Pentru vânzare ai nevoie de cadastru și intabulare actualizate. Verificăm situația în cartea funciară și întocmim ce lipsește. Contactează-ne cu detaliile." },
      { question: "Faceți cadastru pentru terenuri în 23 August?", answer: "Da, pentru terenuri turistice, rezidențiale și pentru cele cu potențial de dezvoltare. Recomandăm și verificarea limitelor înainte de cumpărare." },
    ],
    neighbors: [
      { label: "Mangalia", slug: "cadastru-mangalia" },
      { label: "Eforie", slug: "cadastru-eforie" },
      { label: "Limanu", slug: "cadastru-limanu" },
    ],
    whatsappMessage: "Bună! Aș dori o ofertă pentru cadastru în 23 August / Olimp.",
  },

  {
    slug: "cadastru-agigea",
    city: "Agigea",
    metaTitle: "Cadastru Agigea — Intabulare Case, Terenuri, Spații",
    metaDescription: "Cadastru și intabulare în comuna Agigea: case, terenuri, spații logistice. Zonă cu port și dezvoltare rezidențială lângă Constanța. Inginer ANCPI. Cere ofertă.",
    pinX: 360.9, pinY: 277.6,
    h1: "Cadastru și Intabulare în Agigea",
    heroIntro: "Agigea este o comună cu un profil aparte — combină dezvoltarea rezidențială din apropierea Constanței cu activitatea economică legată de Portul Constanța Sud și zona logistică. Oferim documentații atât pentru locuințe, cât și pentru spații comerciale și industriale.",
    zoneType: "Comună de coastă, lângă Port Constanța Sud",
    localContext: "Situată la sud de Constanța, lângă intrarea în Portul Constanța Sud-Agigea, comuna are o dublă natură: pe de o parte zone rezidențiale în dezvoltare (case și ansambluri), pe de altă parte spații logistice, depozite și terenuri cu destinație economică legate de activitatea portuară. Include și stațiunea Agigea și zona de faleză.",
    propertyTypes: [
      "Case și locuințe individuale",
      "Terenuri rezidențiale în dezvoltare",
      "Spații logistice și depozite (zona port)",
      "Terenuri cu destinație economică",
      "Proprietăți în zona de coastă",
    ],
    localChallenges: "În Agigea, lucrările variază de la cadastrul rezidențial obișnuit la documentații pentru spații logistice și terenuri industriale legate de port. Verificările de suprafață și dezmembrările pentru terenurile economice necesită precizie ridicată.",
    ocpiNote: "Documentațiile pentru Agigea se depun la OCPI Constanța.",
    emphasizedServices: [
      { title: "Cadastru rezidențial", description: "Pentru case și terenuri de locuit din Agigea.", accent: "cyan" },
      { title: "Documentații spații logistice", description: "Pentru depozite și terenuri economice din zona portuară.", accent: "violet" },
      { title: "Cadastru teren și dezmembrări", description: "Pentru terenurile rezidențiale și economice din comună.", accent: "pink" },
    ],
    faqs: [
      { question: "Faceți cadastru pentru spații logistice în Agigea?", answer: "Da, avem experiență cu documentații pentru depozite, hale și terenuri economice, inclusiv în zona portuară. Contactează-ne cu detaliile." },
      { question: "Am o casă în Agigea fără cadastru. Mă ajutați?", answer: "Desigur. Facem măsurătorile și întocmim documentația pentru intabulare. Te ghidăm prin proces." },
      { question: "Deserviți și stațiunea Agigea?", answer: "Da, acoperim toată comuna Agigea, inclusiv zona de coastă și stațiunea." },
    ],
    neighbors: [
      { label: "Constanța", slug: "cadastru-constanta" },
      { label: "Eforie", slug: "cadastru-eforie" },
    ],
    whatsappMessage: "Bună! Aș dori o ofertă pentru cadastru în Agigea.",
  },
];

export function getLocalPage(slug: string) {
  return localPages.find((p) => p.slug === slug);
}
