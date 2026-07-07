"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Ruler,
  SplitSquareHorizontal,
  Map,
  Zap,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const services = [
  {
    Icon: FileText,
    title: "Cadastru & Intabulare",
    desc: "Prima înregistrare, actualizare date, apartamentare — de la A la Z, cu depunere și follow-up la OCPI.",
  },
  {
    Icon: Ruler,
    title: "Topografie Inginerească",
    desc: "Planuri topografice pentru autorizații de construire, PUZ, PUD, trasări, relevee și recepții finale.",
  },
  {
    Icon: SplitSquareHorizontal,
    title: "Dezmembrări & Alipiri",
    desc: "Divizarea sau comasarea parcelelor cu documentație completă conformă ANCPI.",
  },
  {
    Icon: Map,
    title: "Planuri PUZ / PUD",
    desc: "Ridicări topografice de detaliu ca bază cartografică pentru planuri urbanistice zonale și de detaliu.",
  },
  {
    Icon: Zap,
    title: "Parcuri Fotovoltaice",
    desc: "Planuri topografice pentru autorizații de construire — terenuri agricole intravilane și extravilane.",
  },
  {
    Icon: ShieldCheck,
    title: "Consultanță & Due Diligence",
    desc: "Verificarea situației cadastrale înainte de achiziție — evitați surprizele după semnarea contractului.",
  },
];

const steps = [
  {
    nr: "01",
    title: "Consultare gratuită",
    desc: "Ne trimiți actele de proprietate (sau ne spui ce ai). Analizăm situația și estimăm ce lucrare e necesară.",
  },
  {
    nr: "02",
    title: "Ofertă clară",
    desc: "Primești un preț fix, fără costuri ascunse. Știi din start ce plătești și cât durează.",
  },
  {
    nr: "03",
    title: "Deplasare la teren",
    desc: "Venim la proprietatea ta cu echipamente GPS RTK profesionale. Efectuăm măsurătorile necesare.",
  },
  {
    nr: "04",
    title: "Întocmirea documentației",
    desc: "Prelucrăm datele în birou și întocmim documentația conform cerințelor ANCPI și OCPI Constanța.",
  },
  {
    nr: "05",
    title: "Depunere & finalizare",
    desc: "Depunem documentația la OCPI și urmărim dosarul până la înscrierea în Cartea Funciară.",
  },
];

const benefits = [
  {
    title: "Cunoaștere locală profundă",
    desc: "Cunoaștem specificul fiecărei localități din Dobrogea — de la Mangalia la Năvodari — și relațiile directe cu OCPI Constanța.",
  },
  {
    title: "Documentații acceptate din prima",
    desc: "100% din documentațiile depuse la ANCPI au primit aviz favorabil. Nu revenim cu cereri de completare.",
  },
  {
    title: "Comunicare transparentă",
    desc: "Ai un singur interlocutor — inginerul care lucrează la dosarul tău — nu un call center.",
  },
  {
    title: "Fără deplasări inutile",
    desc: "Preluăm și transmitem documentele electronic ori prin curier. Vii la birou doar dacă e strict necesar.",
  },
  {
    title: "Preț fix, fără surprize",
    desc: "Oferta e fermă. Nicio taxă suplimentară ascunsă în contract.",
  },
  {
    title: "Experiență cu proiecte mari",
    desc: "De la apartamente individuale la ansambluri de 186 unități și hoteluri de 5 stele — avem experiența să gestionăm orice scară.",
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
              Experți în cadastru și topografie în inima Dobrogei
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              Autorizați ANCPI clasa A și B, cu peste 3.000 de documentații aprobate
              din 2016. Cunoaștem fiecare parcelă, fiecare primărie și fiecare birou
              OCPI din regiune.
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
                O firmă de cadastru construită pe încredere
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  DANI Cadastru este o firmă specializată în cadastru și topografie
                  inginerească cu sediul în Mangalia, județul Constanța. Înființată în
                  2016 de ingineri autorizați ANCPI, firma a crescut organic prin
                  recomandări — fiecare client mulțumit a adus alți clienți.
                </p>
                <p>
                  De-a lungul anilor ne-am specializat pe nevoile specifice ale
                  Dobrogei: un teritoriu cu particularități juridice, cu terenuri fără
                  cadastru de zeci de ani și cu o piață imobiliară în plină expansiune
                  pe litoral.
                </p>
                <p>
                  Cunoaștem relațiile de lucru cu OCPI Constanța, cu primăriile locale
                  și cu notarii din zonă — ceea ce înseamnă că documentele tale ajung
                  la destinație fără întârzieri inutile.
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
                { value: "2016", label: "An înființare" },
                { value: "100%", label: "Conforme ANCPI" },
                { value: "A & B", label: "Clasă autorizare" },
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
              Servicii complete de la A la Z
            </h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              De la prima consultație până la înscrierea în Cartea Funciară — nu
              externalizam nicio etapă.
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
              Proces simplu, rezultat garantat
            </h2>
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
                AUTORIZĂRI
              </p>
              <h2
                className="mb-5 text-3xl font-extrabold text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                Autorizație ANCPI clasa A și B
              </h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  Deținem autorizație de persoană juridică ANCPI clasa A și B — cel
                  mai înalt nivel de autorizare, care permite realizarea oricărui tip
                  de lucrare: de la cadastru general până la topografie industrială,
                  planuri urbanistice și lucrări de precizie.
                </p>
                <p>
                  Toate lucrările sunt semnate și ștampilate de ingineri autorizați,
                  cu răspundere profesională. Nu lucrăm prin subcontractori.
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
                  value: "Persoană Juridică Clasa A & B",
                  color: "text-brand-cyan",
                },
                {
                  label: "Activitate",
                  value: "Din 2016 — strângem experiență și aducem rezultate clienților",
                  color: "text-brand-violet",
                },
                {
                  label: "Echipamente",
                  value: "GPS RTK, Stație Totală Robotizată, Nivelă de Precizie",
                  color: "text-brand-pink",
                },
                {
                  label: "Rată de succes",
                  value: "100% documentații aprobate ANCPI",
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
                Cu rădăcini în Dobrogea, activi în toată țara
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Zona noastră principală de activitate este județul Constanța — cu
                precădere litoralul și Mangalia. Cunoaștem în detaliu specificul local:
                tipurile de acte de proprietate, primăriile și OCPI Constanța.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                La cererea clienților, realizăm lucrări și în restul țării — am finalizat
                proiecte în București, Ilfov, Timișoara, Tulcea și alte județe.
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
              Ce ne diferențiază
            </h2>
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
              Hai să discutăm despre proprietatea ta
            </h2>
            <p className="mb-8 text-white/60 max-w-lg mx-auto">
              Consultație gratuită, fără obligații. Îți răspundem în câteva ore.
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
