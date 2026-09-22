"use client";

import Link from "next/link";
import { Pencil, Eye, EyeOff, Trash2 } from "lucide-react";
import { CATEGORY_CHIP_CLASSES } from "@/lib/data/blog-categories";
import { useArticleActions } from "./useArticleActions";

interface Props {
  id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  createdAt: Date;
}

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(d));
}

export function ArticleCard({ id, title, slug, category, published, createdAt }: Props) {
  const { published: optimisticPublished, handleToggle, handleDelete, isPending } =
    useArticleActions({ id, slug, published });

  return (
    <div className="border-b border-[#E5E9F2] p-4 last:border-0">
      <div className="mb-2">
        <div className="font-medium text-navy-ink">{title}</div>
        <div className="text-xs text-text-muted">/blog/{slug}</div>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${CATEGORY_CHIP_CLASSES[category] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}
        >
          {category}
        </span>
        {optimisticPublished ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
            <Eye className="h-3 w-3" /> Publicat
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
            <EyeOff className="h-3 w-3" /> Ciornă
          </span>
        )}
        <span className="text-xs text-text-muted">{formatDate(createdAt)}</span>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={`/admin/articole/${id}`}
          className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#E5E9F2] bg-white text-sm font-medium text-navy-ink transition hover:bg-bg-muted"
        >
          <Pencil className="h-3.5 w-3.5" />
          Editează
        </Link>
        <button
          onClick={handleToggle}
          disabled={isPending}
          className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#E5E9F2] bg-white text-sm font-medium text-navy-ink transition hover:bg-bg-muted disabled:opacity-50"
        >
          {optimisticPublished ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
          {optimisticPublished ? "Retrage" : "Publică"}
        </button>
        <button
          onClick={handleDelete}
          disabled={isPending}
          aria-label="Șterge"
          title="Șterge"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100 disabled:opacity-50"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
