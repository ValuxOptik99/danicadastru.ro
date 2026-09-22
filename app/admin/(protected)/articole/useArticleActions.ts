"use client";

import { useState, useTransition } from "react";
import { togglePublish, deletePost } from "./actions";

export function useArticleActions(post: { id: string; slug: string; published: boolean }) {
  const [isPending, startTransition] = useTransition();
  const [published, setPublished] = useState(post.published);

  function handleToggle() {
    const next = !published;
    setPublished(next);
    startTransition(async () => {
      await togglePublish(post.id, next);
    });
  }

  function handleDelete() {
    if (!confirm(`Ești sigur că vrei să ștergi "/blog/${post.slug}"? Acțiunea nu poate fi anulată.`)) return;
    startTransition(async () => {
      await deletePost(post.id);
    });
  }

  return { published, handleToggle, handleDelete, isPending };
}
