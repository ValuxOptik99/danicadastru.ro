"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/data/projects";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { cn } from "@/lib/utils";

type Filter = "all" | "dobrogea" | "national";

const categoryColorMap: Record<string, string> = {
  cyan: "bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30",
  pink: "bg-brand-pink/20 text-brand-pink border-brand-pink/30",
  violet: "bg-brand-violet/20 text-brand-violet border-brand-violet/30",
};

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "Toate" },
  { key: "dobrogea", label: "Dobrogea" },
  { key: "national", label: "Toată Țara" },
];

export function ProiecteGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.region === filter);

  return (
    <section className="py-20 bg-bg-muted">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Filter tabs */}
        <div className="flex gap-2 mb-10 justify-center flex-wrap">
          {filters.map(({ key, label }) => {
            const count =
              key === "all"
                ? projects.length
                : projects.filter((p) => p.region === key).length;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-semibold transition-all border",
                  filter === key
                    ? "bg-navy-950 text-white border-navy-950 shadow-sm"
                    : "bg-white text-navy-ink border-[#E5E9F2] hover:border-navy-950/30"
                )}
              >
                {label}
                <span className="ml-1.5 text-xs opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Cards — horizontal, stacked */}
        <div className="flex flex-col gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => { if (isMobile) setSelected(project); }}
              role={isMobile ? "button" : undefined}
              tabIndex={isMobile ? 0 : undefined}
              onKeyDown={(e) => {
                if (isMobile && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl border border-[#E5E9F2] bg-white shadow-[0_4px_24px_rgba(11,20,55,0.06)] transition-all duration-300 hover:shadow-[0_8px_36px_rgba(11,20,55,0.12)] sm:flex-row",
                isMobile && "cursor-pointer active:scale-[0.99]"
              )}
            >
              {/* Image — left side */}
              <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[280px] lg:w-[340px]">
                <Image
                  src={project.image}
                  alt={`${project.title} — DANI Cadastru`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 340px"
                />
              </div>

              {/* Content — right side */}
              <div className="flex flex-1 flex-col justify-center p-6 lg:p-7">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                      categoryColorMap[project.categoryColor]
                    )}
                  >
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-text-muted">
                    <MapPin className="h-3.5 w-3.5 text-brand-cyan" />
                    {project.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-snug text-navy-ink lg:text-xl">
                  {project.title}
                </h3>

                {project.stats && (
                  <p className="mt-1.5 text-xs font-semibold text-brand-violet">
                    {project.stats}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-text-muted line-clamp-3 lg:line-clamp-none">
                  {project.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-cyan lg:hidden">
                  Vezi detalii
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
