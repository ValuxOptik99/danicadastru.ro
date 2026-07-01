"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type Filter = "all" | "dobrogea" | "national";

const categoryColorMap = {
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

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-[0_4px_24px_rgba(11,20,55,0.08)]"
            >
              <Image
                src={project.image}
                alt={`${project.title} — DANI Cadastru`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/88 via-navy-950/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                      categoryColorMap[project.categoryColor]
                    )}
                  >
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-white/60">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base leading-snug">
                  {project.title}
                </h3>
                {project.stats && (
                  <p className="mt-1 text-xs font-semibold text-brand-cyan/90">
                    {project.stats}
                  </p>
                )}
                <p className="mt-1.5 text-xs text-white/65 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
