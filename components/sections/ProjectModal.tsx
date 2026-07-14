"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

const categoryColorMap: Record<string, string> = {
  cyan: "bg-brand-cyan/10 text-cyan-700 border-brand-cyan/30",
  pink: "bg-brand-pink/10 text-pink-700 border-brand-pink/30",
  violet: "bg-brand-violet/10 text-violet-700 border-brand-violet/30",
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[88vh] w-[calc(100%-2rem)] max-w-lg gap-0 overflow-y-auto overscroll-contain rounded-2xl p-0">
        {project && (
          <>
            {/* Image */}
            <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-t-2xl">
              <Image
                src={project.image}
                alt={`${project.title} — DANI Cadastru`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Category + location */}
              <div className="mb-3 flex flex-wrap items-center gap-2.5">
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

              <DialogHeader className="space-y-0 text-left">
                <DialogTitle className="text-lg font-bold leading-snug text-navy-ink">
                  {project.title}
                </DialogTitle>
              </DialogHeader>

              {project.stats && (
                <p className="mt-2 text-xs font-semibold text-brand-violet">
                  {project.stats}
                </p>
              )}

              <p className="mt-3.5 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
