"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const categoryColorMap = {
  cyan: "bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30",
  pink: "bg-brand-pink/20 text-brand-pink border-brand-pink/30",
  violet: "bg-brand-violet/20 text-brand-violet border-brand-violet/30",
};

const FEATURED_IDS = [
  "complex-rezidential-constanta",
  "hotel-spa-constanta",
  "bloc-rezidential-mangalia",
];

export function ProjectsSection() {
  const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)!).filter(Boolean);
  const [largeProject, ...smallProjects] = featured;

  return (
    <section className="section-padding bg-bg-muted">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <SectionHeading
            eyebrow="PORTOFOLIO"
            title="Proiecte Recente"
            align="left"
            className="mb-0"
          />
          <Link
            href="/proiecte"
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:gap-3 transition-all whitespace-nowrap"
          >
            Vezi toate proiectele <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {/* Large card — spans 2 rows */}
          {largeProject && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 lg:row-span-2"
            >
              <ProjectCard project={largeProject} large />
            </motion.div>
          )}

          {/* Small cards */}
          {smallProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[0];
  large?: boolean;
}) {
  return (
    <Link href="/proiecte" className="group block h-full">
      <div className={cn("relative overflow-hidden rounded-2xl h-full", large ? "min-h-[360px] lg:min-h-full" : "min-h-[200px]")}>
        <Image
          src={project.image}
          alt={`${project.title} — DANI Cadastru`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={large ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
          <div className="flex items-center justify-between mb-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                categoryColorMap[project.categoryColor]
              )}
            >
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-[10px] text-white/60">
              <MapPin className="h-3 w-3" />
              {project.location}
            </span>
          </div>
          <h3 className={cn("font-bold text-white drop-shadow-md", large ? "text-2xl md:text-3xl" : "text-lg")}>
            {project.title}
          </h3>
          {large && project.stats && (
            <p className="mt-1 text-sm font-medium text-brand-cyan/90 drop-shadow-md">
              {project.stats}
            </p>
          )}
          {large && (
            <p className="mt-1.5 text-sm text-white/80 drop-shadow-md line-clamp-2">
              {project.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
