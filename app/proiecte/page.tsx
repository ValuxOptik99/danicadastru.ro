import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portofoliu Proiecte - Cadastru & Topografie",
  description:
    "Portofoliu de proiecte DANI: cadastru rezidențial, infrastructură, scanare 3D. Proiecte finalizate în toată România.",
};

const tagColorMap = {
  cyan: "bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30",
  magenta: "bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30",
  violet: "bg-brand-violet/20 text-brand-violet border-brand-violet/30",
};

export default function ProiectePage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">PORTOFOLIO</p>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
            Proiectele Noastre
          </h1>
          <p className="mx-auto max-w-xl text-white/60 text-lg">
            Peste 2.500 de proiecte finalizate în toată România — de la apartamente individuale
            la ansambluri rezidențiale și infrastructură majoră.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className={cn("mb-2 inline-flex self-start items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider", tagColorMap[project.tagColor])}>
                    {project.tag}
                  </span>
                  <h3 className="font-bold text-white text-lg text-shadow-sm">{project.title}</h3>
                  <p className="mt-1 text-sm text-white/70 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
