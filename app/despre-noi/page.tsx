import type { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Target, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Despre Noi - Echipa DANI",
  description:
    "DANI este o firmă acreditată ANCPI specializată în cadastru, topografie și scanare laser 3D. Peste 10 ani de experiență, 15 ingineri autorizați.",
};

const values = [
  { icon: ShieldCheck, title: "Precizie", desc: "Fiecare măsurătoare este verificată de minim 2 ingineri autorizați." },
  { icon: Target, title: "Eficiență", desc: "Documentații depuse în timp record, fără drumuri inutile pentru client." },
  { icon: Users, title: "Echipă", desc: "15 specialiști cu autorizații ANCPI Clasa A și B, pregătiți continuu." },
  { icon: Award, title: "Calitate", desc: "100% din documentațiile depuse au primit aviz favorabil la OCPI." },
];

export default function DespreNoiPage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">DESPRE NOI</p>
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              Expertiza care contează
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              DANI este o firmă autorizată ANCPI cu peste 10 ani de experiență în geodezie și cadastru.
              Lucrăm direct cu OCPI-urile din toată țara pentru a asigura documentații corecte din prima.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-navy-ink mb-4">Povestea noastră</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Fondată în 2015, DANI a crescut dintr-o echipă de 3 ingineri topografi într-o firmă
                  cu 15 specialiști autorizați ANCPI, operând la nivel național.
                </p>
                <p>
                  Investim constant în echipamente de ultimă generație — GPS RTK, scanere laser 3D,
                  drone cu senzori multispectral — pentru a oferi clienților noștri cele mai precise date.
                </p>
                <p>
                  Parteneriatul cu notari, avocați și primării din toată România ne permite să oferim
                  un serviciu integrat, de la prima consultație până la înscrierea în Cartea Funciară.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-ink mb-6" id="echipa">Valorile noastre</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-2xl border border-[#E5E9F2] p-5 card-shadow">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl gradient-brand">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-navy-ink mb-1">{title}</h3>
                    <p className="text-sm text-text-muted">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-navy-900 p-8 text-center" id="cariere">
            <h2 className="text-2xl font-bold text-white mb-3">Lucrezi în geodezie?</h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Suntem mereu în căutare de ingineri topografi autorizați ANCPI care împărtășesc
              valorile noastre. Trimite-ne CV-ul.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Aplică acum</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
