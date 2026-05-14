"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const tagColorMap = {
  cyan: "bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30",
  magenta: "bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30",
  violet: "bg-brand-violet/20 text-brand-violet border-brand-violet/30",
};

export function ProjectsSection() {
  const [largeProject, ...smallProjects] = projects;

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
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={large ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
              tagColorMap[project.tagColor]
            )}
          >
            {project.tag}
          </span>
          <h3 className={cn("mt-2 font-bold text-white drop-shadow-md", large ? "text-2xl md:text-3xl" : "text-lg")}>
            {project.title}
          </h3>
          {large && (
            <p className="mt-1.5 text-sm text-white/85 drop-shadow-md line-clamp-2">
              {project.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
