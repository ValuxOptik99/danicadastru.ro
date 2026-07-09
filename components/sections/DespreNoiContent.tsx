"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Ruler,
  SplitSquareHorizontal,
  Map,
  BookOpen,
  Building2,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  Plane,
  FileSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const services = [
  {
    Icon: FileText,
    title: "Cadastru și intabulare",
    desc: "Documentații cadastrale pentru apartamente, case și terenuri, cu depunere și follow-up la OCPI.",
  },
  {
    Icon: BookOpen,
    title: "Prima înscriere în cartea funciară",
    desc: "Înregistrarea imobilelor care nu au fost niciodată intabulate, inclusiv terenuri și construcții vechi.",
  },
  {
    Icon: Building2,
    title: "Actualizare construcții",
    desc: "Actualizarea datelor cadastrale pentru construcții modificate, extinderi sau recepții finale.",
  },
  {
    Icon: SplitSquareHorizontal,
    title: "Dezmembrare și alipire",
    desc: "Divizarea sau comasarea parcelelor cu documentație completă conformă ANCPI.",
  },
  {
    Icon: Map,
    title: "Ridicări topografice",
    desc: "Planuri topografice pentru autorizații de construire, PUZ, PUD și proiecte de investiții.",
  },
  {
    Icon: Ruler,
    title: "Trasări și măsurători",
    desc: "Trasări în teren, relevee construcții și măsurători de precizie pentru șantiere și proiecte tehnice.",
  },
  {
    Icon: Plane,
    title: "Drone și ortofotoplanuri",
    desc: "Măsurători aeriene și ortofotoplanuri de înaltă precizie pentru terenuri mari și proiecte complexe, la cerere.",
  },
  {
    Icon: FileSearch,
    title: "Extrase de carte funciară",
    desc: "Obținem extrase de carte funciară de informare în numele tău, rapid și fără drumuri la OCPI.",
  },
];

const steps = [
  {
    nr: "01",
    title: "Analizăm concret situația",
    desc: "Evaluăm situația fiecărei proprietăți sau lucrări în parte.",
  },
  {
    nr: "02",
    title: "Explicăm clar pașii",
    desc: "Îți spunem exact ce acte sunt necesare și care sunt pașii de urmat.",
  },
  {
    nr: "03",
    title: "Preluăm toată lucrarea",
    desc: "De la măsurători până la documentația finală, ne ocupăm noi.",
  },
  {
    nr: "04",
    title: "Soluții pentru fiecare caz",
    desc: "Căutăm soluții potrivite situației tale, nu variante standard aplicate forțat.",
  },
  {
    nr: "05",
    title: "Lucrăm organizat",
    desc: "Eviți drumurile inutile, întârzierile și blocajele administrative.",
  },
];

const benefits = [
  {
    title: "Experiență practică din 2016",
    desc: "Lucrăm constant în cadastru și topografie de la începuturile noastre, cu experiență acumulată pe lucrări diverse.",
  },
  {
    title: "Aproximativ 3.000 de lucrări realizate",
    desc: "De la documentații uzuale de intabulare până la proiecte tehnice pentru terenuri, construcții și dezvoltări.",
  },
  {
    title: "Servicii complete într-un singur loc",
    desc: "Cadastru, intabulare și topografie — de la analiza inițială a situației până la documentația finală.",
  },
  {
    title: "Suport pentru toate tipurile de lucrări",
    desc: "Lucrări rezidențiale, comerciale și tehnice — pentru persoane fizice, firme, investitori și șantiere.",
  },
  {
    title: "Abordare clară și serioasă",
    desc: "Tratăm fiecare dosar cu atenție, explicăm pașii și livrăm documentația completă și corectă.",
  },
  {
    title: "Implicare reală în fiecare dosar",
    desc: "Nu ne limităm la întocmirea formală — analizăm, verificăm, rezolvăm și comunicăm la fiecare pas.",
  },
  {
    title: "Prezență în județul Constanța și Dobrogea",
    desc: "Activitate constantă în întreg județul Constanța, în toată Dobrogea și, la cerere, în alte zone.",
  },
];

const WA_URL =
  "https://wa.me/40770556677?text=Bun%C4%83!%20Am%20o%20%C3%AEntrebare%20despre%20cadastru.";

export function DespreNoiContent() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-navy-950 pt-32 pb-20 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(34,211,238,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              DESPRE NOI
            </p>
            <h1
              className="mb-5 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Servicii complete de cadastru, intabulare și topografie
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              DANI Cadastru oferă servicii complete pentru persoane fizice, persoane
              juridice, investitori și dezvoltatori. De la documentații cadastrale pentru
              apartamente, case și terenuri, până la lucrări tehnice complexe. Experiență
              din 2016, autorizați ANCPI categoria A și B.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              "3.000+ lucrări finalizate",
              "Autorizație ANCPI A & B",
              "Activi din 2016",
              "Dobrogea & național",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-medium text-white/80"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                {pill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. CINE SUNTEM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                CINE SUNTEM
              </p>
              <h2 className="mb-5 text-3xl font-extrabold text-navy-ink" style={{ letterSpacing: "-0.02em" }}>
                Cine suntem
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  DANI Cadastru oferă servicii complete de cadastru, intabulare și
                  topografie pentru persoane fizice, persoane juridice, investitori,
                  dezvoltatori și proiecte aflate în execuție. Ne ocupăm de documentații
                  cadastrale pentru apartamente, case, terenuri și construcții, dar și de
                  lucrări tehnice mai complexe, de la ridicări topografice și trasări în
                  teren, până la suport pentru șantiere și investiții imobiliare.
                </p>
                <p>
                  Firma a fost înființată în 2022, însă experiența noastră în domeniu
                  începe din 2016. În toți acești ani am lucrat constant în cadastru și
                  topografie, gestionând lucrări diverse, de la documentații uzuale de
                  intabulare până la proiecte tehnice pentru terenuri, construcții și
                  dezvoltări. Până în prezent, am realizat aproximativ 3.000 de lucrări.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "3.000+", label: "Lucrări finalizate" },
                { value: "2016", label: "Experiență din" },
                { value: "100%", label: "Conforme ANCPI" },
                { value: "Cat. A & B", label: "Autorizare ANCPI" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#E5E9F2] bg-bg-muted p-6 text-center card-shadow"
                >
                  <div className="text-3xl font-extrabold text-navy-ink">{value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CE FACEM */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              CE FACEM
            </p>
            <h2 className="text-3xl font-extrabold text-navy-ink" style={{ letterSpacing: "-0.02em" }}>
              Acoperim tot ce ține de cadastru, intabulare și topografie
            </h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              Astfel încât să poți lucra cu un singur partener, de la analiza inițială a
              situației până la documentația finală.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-[#E5E9F2] bg-white p-6 card-shadow"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl gradient-brand">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-navy-ink mb-2">{title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 text-center text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Ne ocupăm de întreaga lucrare cap-coadă: analizăm situația, verificăm actele
            disponibile, efectuăm măsurătorile, pregătim documentația și gestionăm pașii
            necesari pentru ca dosarul să fie complet și corect.
          </motion.p>
        </div>
      </section>

      {/* 4. CUM LUCRĂM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              CUM LUCRĂM
            </p>
            <h2 className="text-3xl font-extrabold text-navy-ink" style={{ letterSpacing: "-0.02em" }}>
              Un mod de lucru simplu pentru tine, eficient tehnic
            </h2>
            <p className="mt-3 text-text-muted max-w-2xl mx-auto leading-relaxed">
              Nu ne limităm la o simplă măsurătoare sau la întocmirea formală a unui
              dosar, ci tratăm fiecare lucrare ca pe un proces gestionat corect de la
              început până la final.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-[#E5E9F2]" />

            <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {steps.map(({ nr, title, desc }, i) => (
                <motion.div
                  key={nr}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-cyan/30 bg-white shadow-md">
                    <span className="text-xl font-extrabold text-navy-ink">{nr}</span>
                  </div>
                  <h3 className="font-bold text-navy-ink mb-2 text-sm">{title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENȚĂ ȘI AUTORIZĂRI */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 0% 50%, rgba(34,211,238,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                EXPERIENȚĂ ȘI AUTORIZĂRI
              </p>
              <h2
                className="mb-5 text-3xl font-extrabold text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                Experiență și autorizări
              </h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  Experiența acumulată începând cu 2016 ne ajută să înțelegem rapid tipul
                  lucrării, dificultățile și soluțiile potrivite. Am lucrat atât pe
                  documentații uzuale pentru persoane fizice, cât și pe lucrări tehnice,
                  măsurători pentru terenuri și construcții, și proiecte pentru investitori.
                </p>
                <p>
                  Echipa DANI Cadastru include specialiști autorizați, cu autorizări ANCPI
                  categoria A și B — ceea ce ne permite să abordăm atât lucrări standard,
                  cât și proiecte tehnice complexe.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  label: "Autorizație ANCPI",
                  value: "Autorizare ANCPI — Categoria A și B",
                  color: "text-brand-cyan",
                },
                {
                  label: "Activitate",
                  value: "Din 2016 — experiență constantă în cadastru și topografie",
                  color: "text-brand-violet",
                },
                {
                  label: "Echipamente",
                  value: "GPS RTK, Stație Totală Robotizată, Nivelă de Precizie",
                  color: "text-brand-pink",
                },
                {
                  label: "Lucrări realizate",
                  value: "Aproximativ 3.000 de lucrări finalizate",
                  color: "text-brand-cyan",
                },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-brand-cyan shrink-0" />
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                      {label}
                    </div>
                    <div className={`mt-0.5 font-semibold text-sm ${color}`}>{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. UNDE LUCRĂM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                UNDE LUCRĂM
              </p>
              <h2
                className="mb-5 text-3xl font-extrabold text-navy-ink"
                style={{ letterSpacing: "-0.02em" }}
              >
                Unde lucrăm
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Deservim clienți din întreg județul Constanța, cu activitate constantă
                atât în zona Mangaliei și localitățile din jur, cât și în municipiul
                Constanța și zonele limitrofe. Preluăm lucrări în toată Dobrogea, iar în
                funcție de proiect, putem interveni și în afara județului, la cerere.
              </p>
              <Button asChild>
                <Link href="/localitati" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Vezi toate localitățile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-[#E5E9F2] bg-bg-muted p-6 card-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-ink">
                    Dobrogea — zona principală
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Mangalia", "Constanța", "Eforie", "Techirghiol", "Năvodari",
                    "Cernavodă", "Medgidia", "Hârșova",
                    "Saturn", "Venus", "Jupiter", "Neptun", "Olimp", "Vama Veche",
                    "23 August", "Tuzla", "Costinești",
                  ].map((loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center rounded-full border border-brand-cyan/25 bg-white px-3 py-1 text-xs font-medium text-navy-ink"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#E5E9F2] bg-bg-muted p-6 card-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-violet" />
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-ink">
                    Național — la cerere
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["București", "Ilfov", "Tulcea", "Timișoara", "Alte județe"].map(
                    (loc) => (
                      <span
                        key={loc}
                        className="inline-flex items-center rounded-full border border-brand-violet/25 bg-white px-3 py-1 text-xs font-medium text-navy-ink"
                      >
                        {loc}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. DE CE DANI CADASTRU */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              DE CE NOI
            </p>
            <h2
              className="text-3xl font-extrabold text-navy-ink"
              style={{ letterSpacing: "-0.02em" }}
            >
              De ce să lucrezi cu DANI Cadastru
            </h2>
            <p className="mt-3 text-text-muted max-w-2xl mx-auto leading-relaxed">
              Clienții aleg să lucreze cu noi pentru că au nevoie de mai mult decât un
              simplu prestator — au nevoie de o echipă care înțelege lucrarea, explică
              clar ce e de făcut și se ocupă de proces până la capăt.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-[#E5E9F2] bg-white p-6 card-shadow"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full gradient-brand">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-bold text-navy-ink mb-2">{title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(34,211,238,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-6 relative text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              GATA SĂ ÎNCEPEM?
            </p>
            <h2
              className="mb-4 text-3xl font-extrabold text-white md:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Un partener tehnic pentru lucrări făcute corect
            </h2>
            <p className="mb-8 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Fie că ai nevoie de cadastru și intabulare pentru un apartament, de
              documentație pentru o casă sau un teren, de ridicări topografice, trasări
              sau suport pentru șantiere, îți oferim servicii complete și o abordare
              profesionistă, de la primul contact până la finalizarea documentației.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Solicită ofertă gratuită
                </Link>
              </Button>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <Phone className="h-4 w-4" />
                Scrie pe WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
