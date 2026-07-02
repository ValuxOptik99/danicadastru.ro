import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      slug: "ce-documente-ai-nevoie-pentru-cadastru-apartament",
      title: "Ce documente ai nevoie pentru cadastrul unui apartament",
      excerpt:
        "Ghid complet cu toate actele necesare pentru întocmirea documentației cadastrale a unui apartament în județul Constanța.",
      category: "Ghiduri",
      published: true,
      metaTitle: "Ce Documente Ai Nevoie pentru Cadastru Apartament — Ghid 2025",
      metaDescription:
        "Lista completă de documente pentru cadastru apartament: act de proprietate, CI, extras CF. Ghid practic DANI Cadastru pentru Constanța și Dobrogea.",
      content: `## Documentele necesare pentru cadastrul unui apartament

Pentru întocmirea documentației cadastrale a unui apartament, ai nevoie de următoarele acte:

### Acte obligatorii

- **Actul de proprietate** — contract de vânzare-cumpărare, contract de donație, certificat de moștenitor sau sentință civilă
- **Copie după cartea de identitate** a proprietarului (toți proprietarii, dacă sunt mai mulți)
- **Extras de carte funciară** de informare (îl putem obține noi, în numele tău)

### Când este necesar cadastrul

Cadastrul unui apartament este necesar în mai multe situații:

1. La **vânzarea** apartamentului — notarul îl solicită obligatoriu
2. Pentru obținerea unui **credit ipotecar** — banca cere documentația actualizată
3. La **succesiune** sau partaj
4. Pentru **actualizarea** informațiilor din cartea funciară

### Cât durează procesul

Termenul standard la OCPI Constanța este de 15-30 de zile lucrătoare de la depunerea dosarului complet. Cu documentația pregătită corect de la început, încadrarea în acest termen este sigură.

### Cum te putem ajuta

La DANI Cadastru ne ocupăm de tot procesul: de la măsurători și întocmirea documentației, până la depunerea la OCPI și obținerea documentelor finale. Contactează-ne pentru o ofertă personalizată.`,
    },
    {
      slug: "diferenta-cadastru-intabulare",
      title: "Care este diferența dintre cadastru și intabulare?",
      excerpt:
        "Mulți proprietari confundă cei doi termeni. Îți explicăm clar ce înseamnă fiecare și de ce ai nevoie de amândouă.",
      category: "Cadastru",
      published: true,
      metaTitle: "Diferența dintre Cadastru și Intabulare — Explicat Simplu",
      metaDescription:
        "Cadastru vs intabulare: ce înseamnă fiecare, de ce ai nevoie de amândouă și cum se leagă. Ghid clar de la specialiștii DANI Cadastru.",
      content: `## Cadastru vs. Intabulare — care e diferența?

Este una dintre cele mai frecvente confuzii în domeniul imobiliar. Deși sunt strâns legate, cadastrul și intabularea sunt două lucruri diferite.

### Ce este cadastrul?

Cadastrul reprezintă **partea tehnică**. Prin cadastru, un imobil (teren sau construcție) este:

- măsurat cu precizie
- identificat prin coordonate
- descris tehnic (suprafață, formă, vecinătăți)
- reprezentat pe un plan de amplasament

Rezultatul este atribuirea unui **număr cadastral** unic.

### Ce este intabularea?

Intabularea reprezintă **partea juridică**. Este procesul prin care dreptul tău de proprietate este **înscris în Cartea Funciară**. Practic, statul recunoaște oficial că tu ești proprietarul acelui imobil.

### De ce ai nevoie de amândouă

Cele două merg mână în mână:

1. Întâi se face **cadastrul** (identificarea tehnică)
2. Apoi se face **intabularea** (înscrierea dreptului de proprietate)

Fără cadastru nu poți face intabularea, iar fără intabulare proprietatea ta nu este complet recunoscută oficial și nu poate fi vândută sau ipotecată.

### Concluzie

Dacă vrei să vinzi, să cumperi sau să ipotechezi un imobil, ai nevoie de ambele. La DANI Cadastru le realizăm pe amândouă, cap-coadă.`,
    },
    {
      slug: "cat-costa-cadastrul-in-2025",
      title: "Cât costă cadastrul: factorii care influențează prețul",
      excerpt:
        "Prețul unui cadastru variază în funcție de mai mulți factori. Îți explicăm ce anume determină costul final.",
      category: "Ghiduri",
      published: true,
      metaTitle: "Cât Costă Cadastrul — Factorii care Influențează Prețul",
      metaDescription:
        "Ce factori influențează prețul unui cadastru: tipul imobilului, suprafața, localitatea, complexitatea. Cere o ofertă personalizată la DANI Cadastru.",
      content: `## De ce variază prețul cadastrului

Nu există un preț fix pentru cadastru, deoarece fiecare lucrare este diferită. Iată factorii principali care influențează costul.

### 1. Tipul imobilului

- **Apartament** — de regulă cel mai simplu și accesibil
- **Casă cu teren** — necesită măsurători mai complexe
- **Teren** — variază în funcție de suprafață și amplasament
- **Construcții comerciale/industriale** — cele mai complexe

### 2. Suprafața

Cu cât suprafața este mai mare, cu atât măsurătorile durează mai mult și implică mai multă muncă de teren.

### 3. Localitatea

Distanța până la imobil și zona (intravilan/extravilan) influențează costul deplasării și complexitatea lucrării.

### 4. Situația juridică

Dacă există **diferențe** între acte și situația reală, suprapuneri sau alte probleme, lucrarea devine mai complexă.

### 5. Urgența

Pentru lucrări urgente, cu termene reduse, se poate aplica un tarif diferit.

### Cum afli prețul exact

Singura modalitate de a afla prețul exact este o **ofertă personalizată**. Trimite-ne detaliile imobilului tău pe WhatsApp sau prin formularul de contact și îți răspundem în maxim 24 de ore.

> La DANI Cadastru oferim consultanță gratuită și oferte transparente, adaptate fiecărei situații.`,
    },
  ];

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }
  console.log(`Seeded ${posts.length} blog posts`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
