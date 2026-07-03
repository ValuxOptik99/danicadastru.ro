"use client";

import { useState, useTransition } from "react";
import { Eye, EyeOff, Trash2 } from "lucide-react";
import { togglePublish, deletePost } from "./actions";

interface Props {
  id: string;
  published: boolean;
  slug: string;
}

export function ArticleRowActions({ id, published, slug }: Props) {
  const [isPending, startTransition] = useTransition();
  const [optimisticPublished, setOptimisticPublished] = useState(published);

  function handleToggle() {
    const next = !optimisticPublished;
    setOptimisticPublished(next);
    startTransition(async () => {
      await togglePublish(id, next);
    });
  }

  function handleDelete() {
    if (!confirm(`Ești sigur că vrei să ștergi "/blog/${slug}"? Acțiunea nu poate fi anulată.`)) return;
    startTransition(async () => {
      await deletePost(id);
    });
  }

  return (
    <>
      <button
        onClick={handleToggle}
        disabled={isPending}
        className="rounded-lg border border-[#E5E9F2] bg-white px-3 py-1.5 text-xs font-medium text-navy-ink transition hover:bg-bg-muted disabled:opacity-50"
        title={optimisticPublished ? "Retrage din publicare" : "Publică"}
      >
        {optimisticPublished ? (
          <EyeOff className="inline h-3 w-3" />
        ) : (
          <Eye className="inline h-3 w-3" />
        )}
      </button>
      <button
        onClick={handleDelete}
        disabled={isPending}
        className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100 disabled:opacity-50"
        title="Șterge"
      >
        <Trash2 className="inline h-3 w-3" />
      </button>
    </>
  );
}
