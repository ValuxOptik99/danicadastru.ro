export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQCategory {
  slug: string;
  title: string;
  icon: string;
  description: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    slug: "general",
    title: "Cadastru și Intabulare — Noțiuni Generale",
    icon: "BookOpen",
    description: "Definiții esențiale și răspunsuri la întrebările fundamentale despre cadastru, intabulare și carte funciară.",
    items: [
      { id: 1, question: "Ce este cadastrul și de ce este important?", answer: "Cadastrul identifică, măsoară și înregistrează oficial un imobil. Este esențial pentru tranzacții, succesiuni, donații și obținerea finanțărilor bancare." },
      { id: 2, question: "Ce este intabularea?", answer: "Intabularea reprezintă înscrierea dreptului de proprietate în Cartea Funciară." },
      { id: 3, question: "Care este diferența dintre cadastru și intabulare?", answer: "Cadastrul descrie tehnic proprietatea, iar intabularea înregistrează dreptul de proprietate." },
      { id: 12, question: "Ce este extrasul de carte funciară?", answer: "Document oficial care conține situația juridică și tehnică a imobilului." },
      { id: 13, question: "Ce este numărul cadastral?", answer: "Identificatorul unic atribuit unui imobil în sistemul cadastral." },
      { id: 14, question: "Ce este Cartea Funciară?", answer: "Registrul oficial care conține informațiile juridice ale unui imobil." },
      { id: 32, question: "Cine poate realiza lucrări cadastrale?", answer: "Persoane autorizate în domeniul cadastrului și topografiei, conform Legii 7/1996. DANI Cadastru lucrează doar cu ingineri autorizați ANCPI." },
      { id: 33, question: "Ce este topografia?", answer: "Ramura care se ocupă cu măsurarea și reprezentarea terenurilor." },
      { id: 34, question: "Care este diferența dintre topografie și cadastru?", answer: "Topografia măsoară terenul, cadastrul îl înregistrează oficial." },
      { id: 39, question: "Ce este planul de amplasament și delimitare?", answer: "Documentul care indică poziția și limitele proprietății." },
      { id: 40, question: "Ce este releveul unei construcții?", answer: "Reprezentarea tehnică a construcției existente." },
      { id: 45, question: "Ce beneficii oferă cadastrul?", answer: "Siguranță juridică, tranzacții rapide și evidențe clare." },
      { id: 46, question: "Ce beneficii oferă intabularea?", answer: "Protejarea dreptului de proprietate și acces la tranzacții." },
      { id: 47, question: "Ce este cadastrul sistematic?", answer: "Programul național de înregistrare gratuită a proprietăților în anumite zone." },
    ],
  },
  {
    slug: "preturi-durate",
    title: "Prețuri și Durate",
    icon: "Wallet",
    description: "Costuri orientative și termene pentru fiecare tip de lucrare cadastrală.",
    items: [
      { id: 4, question: "Cât costă cadastrul pentru o casă?", answer: "Costul depinde de localitate, suprafață și complexitatea documentației. Sună-ne la 0770 55 66 77 sau scrie-ne pe WhatsApp pentru o ofertă personalizată." },
      { id: 5, question: "Cât costă cadastrul pentru un teren?", answer: "Prețul este influențat de dimensiunea terenului, amplasament și situația juridică. Contactează DANI Cadastru pentru a afla care este procedura și prețul." },
      { id: 6, question: "Cât durează cadastrul?", answer: "De regulă între câteva zile și câteva săptămâni, în funcție de complexitatea documentației și de timpul de procesare al OCPI județean." },
      { id: 7, question: "Cât durează intabularea?", answer: "Termenul depinde de procedura aleasă și de timpul de procesare al OCPI. Standard: 15-30 zile lucrătoare după depunerea dosarului complet." },
      { id: 42, question: "Cât costă intabularea unui apartament?", answer: "Costul variază în funcție de situație și taxe. Scrie-ne pe WhatsApp la 0770 55 66 77 pentru un răspuns rapid în funcție de lucrarea ta." },
    ],
  },
  {
    slug: "documente",
    title: "Documente și Acte Necesare",
    icon: "FileText",
    description: "Ce acte ai nevoie pentru fiecare procedură și cum obții documente oficiale.",
    items: [
      { id: 8, question: "Ce documente sunt necesare pentru cadastru?", answer: "Actul de proprietate, cartea de identitate și alte documente specifice lucrării respective. DANI Cadastru îți va oferi toate detaliile după ce îi prezinți situația ta." },
      { id: 11, question: "Cum verific dacă proprietatea este intabulată?", answer: "Prin solicitarea unui extras de carte funciară de la OCPI sau prin notar." },
      { id: 25, question: "Ce acte sunt necesare pentru intabularea unei construcții noi?", answer: "Autorizația de construire, procesul-verbal de recepție, atestatul de edificare al construcției, certificat de atestare fiscală și documentația cadastrală, întocmită de DANI Cadastru." },
      { id: 35, question: "Am pierdut actele proprietății. Ce fac?", answer: "Documentele pot fi recuperate prin instituții și arhive competente. DANI Cadastru se poate ocupa să îți obțină un duplicat. Contactează-ne pe WhatsApp sau sună la 0770 55 66 77." },
      { id: 48, question: "Cum verific numărul cadastral?", answer: "Prin documentele cadastrale sau extrasul de carte funciară." },
      { id: 50, question: "Cum obțin un extras de Carte Funciară?", answer: "Te prezinți la biroul de cadastru din orașul tău pentru a solicita, sau ne contactezi pe noi și solicităm extrasul în numele tău — în doar câteva minute îl ai în format digital." },
    ],
  },
  {
    slug: "vanzare-cumparare-credit",
    title: "Vânzare, Cumpărare și Credit Ipotecar",
    icon: "Banknote",
    description: "Răspunsuri la cele mai frecvente întrebări legate de tranzacții și finanțări bancare.",
    items: [
      { id: 9, question: "Pot vinde un imobil fără cadastru?", answer: "În majoritatea situațiilor nu, deoarece notarul solicită documentația cadastrală." },
      { id: 10, question: "Pot vinde un imobil fără intabulare?", answer: "În general nu, deoarece este necesară înscrierea în Cartea Funciară." },
      { id: 30, question: "Pot obține credit ipotecar fără cadastru?", answer: "De regulă, nu. Majoritatea băncilor cer cadastru actualizat ca parte din dosarul de credit." },
      { id: 31, question: "Pot obține credit ipotecar fără intabulare?", answer: "Majoritatea băncilor solicită intabularea ca garanție pentru credit." },
      { id: 41, question: "Este obligatoriu cadastrul pentru apartamente?", answer: "Da, în majoritatea tranzacțiilor de vânzare-cumpărare sau de credit ipotecar." },
    ],
  },
  {
    slug: "tipuri-imobile",
    title: "Tipuri de Imobile",
    icon: "Home",
    description: "Particularități pentru case, terenuri intravilane/extravilane, apartamente, anexe.",
    items: [
      { id: 19, question: "Pot face cadastru pentru teren extravilan?", answer: "Da, procedura este similară cu cea pentru alte terenuri." },
      { id: 20, question: "Pot face cadastru pentru teren agricol?", answer: "Da, este recomandat pentru tranzacții, subvenții APIA și moșteniri." },
      { id: 24, question: "Cum înscriu o casă nou construită în Cartea Funciară?", answer: "Prin întocmirea documentației cadastrale și intabulare. Doar o persoană autorizată ANCPI te poate ajuta." },
      { id: 43, question: "Pot intabula o construcție veche?", answer: "Da, dacă sunt îndeplinite condițiile legale. Procesul implică ridicare topografică actualizată și verificare documente." },
      { id: 44, question: "Pot intabula o anexă gospodărească?", answer: "Da, prin documentația corespunzătoare." },
    ],
  },
  {
    slug: "dezmembrari-alipiri",
    title: "Dezmembrări, Alipiri și Actualizări",
    icon: "Split",
    description: "Cum împarți sau unești parcele, când e necesar și cum se corectează diferențele de suprafață.",
    items: [
      { id: 15, question: "Ce este dezmembrarea unui teren?", answer: "Împărțirea unui teren în mai multe loturi distincte, fiecare cu numărul cadastral propriu." },
      { id: 16, question: "Ce este alipirea terenurilor?", answer: "Unirea mai multor parcele într-un singur imobil cu un singur număr cadastral." },
      { id: 17, question: "Când este necesară dezmembrarea?", answer: "La vânzarea unei porțiuni de teren, succesiuni cu moștenitori multipli sau dezvoltări imobiliare." },
      { id: 18, question: "Când este necesară alipirea?", answer: "Pentru simplificarea evidențelor și proiecte de dezvoltare pe suprafețe extinse." },
      { id: 26, question: "Ce este actualizarea cadastrală?", answer: "Modificarea informațiilor cadastrale după schimbări ale imobilului." },
      { id: 27, question: "Când trebuie actualizat cadastrul?", answer: "După extinderi, demolări sau modificări de suprafață ale construcției sau terenului." },
      { id: 28, question: "De ce există diferențe între suprafața din acte și cea măsurată?", answer: "Din cauza metodelor vechi de măsurare și a erorilor istorice acumulate în decenii." },
      { id: 29, question: "Cum se corectează diferențele de suprafață?", answer: "Prin documentații cadastrale conforme legislației, depuse la OCPI cu măsurători actualizate." },
      { id: 49, question: "Pot face dezmembrare și vânzare simultan?", answer: "Da, în anumite condiții procedurale. Procesul poate fi coordonat cu notarul pentru a se finaliza în paralel." },
    ],
  },
  {
    slug: "succesiuni-donatii",
    title: "Succesiuni, Donații și Moșteniri",
    icon: "Users",
    description: "Cadastru pentru transmiterea proprietății între generații sau între persoane.",
    items: [
      { id: 21, question: "Este obligatoriu cadastrul pentru succesiune?", answer: "În multe cazuri este necesar pentru identificarea exactă a bunurilor, mai ales când există moștenitori multipli sau cota-părți." },
      { id: 22, question: "Pot realiza cadastrul după moștenire?", answer: "Da, după clarificarea situației succesorale la notar." },
      { id: 23, question: "Este necesar cadastrul pentru donație?", answer: "Da, în majoritatea cazurilor — notarul îl solicită ca parte din dosarul de donație." },
    ],
  },
  {
    slug: "situatii-speciale",
    title: "Situații Speciale și Probleme",
    icon: "AlertCircle",
    description: "Litigii cu vecinii, cadastru fără proprietar prezent și alte cazuri sensibile.",
    items: [
      { id: 37, question: "Ce se întâmplă dacă vecinul contestă limitele terenului?", answer: "Se efectuează măsurători și verificări documentare. Dacă diferendul persistă, poate fi necesară expertiză tehnică sau intervenția instanței." },
      { id: 38, question: "Pot face cadastru fără prezența proprietarului?", answer: "În anumite situații, prin împuternicire notarială. Procesul poate fi gestionat integral fără ca proprietarul să se deplaseze." },
    ],
  },
  {
    slug: "alegerea-firmei",
    title: "Cum Alegi Firma de Cadastru",
    icon: "ShieldCheck",
    description: "Ce să verifici și de ce contează experiența atunci când îți alegi inginerul autorizat.",
    items: [
      { id: 36, question: "Cum aleg o firmă de cadastru?", answer: "Verifică experiența, autorizările și recenziile clienților. Atenție mare cu cine lucrezi — un preț mai mic nu înseamnă neapărat documentații complete și corecte. La DANI Cadastru am rectificat până în prezent aproximativ 250 de documentații cadastrale realizate greșit de către alte persoane autorizate." },
      { id: 51, question: "De ce să colaborez cu DANI Cadastru?", answer: "Pentru documentații corecte și complete, timp economisit și reducerea riscurilor administrative. Inginer autorizat ANCPI, sediu în Mangalia, acoperire în toată România, răspuns rapid pe WhatsApp." },
    ],
  },
];
