"use client";

import { useState, useTransition } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BLOG_CATEGORIES } from "@/lib/data/blog-categories";
import { createPost, updatePost } from "./actions";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ă/g, "a").replace(/â/g, "a").replace(/î/g, "i")
    .replace(/ș/g, "s").replace(/ț/g, "t")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

interface PostData {
  id?: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  published: boolean;
}

export function ArticleForm({ initial }: { initial?: Partial<PostData> }) {
  const isEdit = !!initial?.id;
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState(false);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [category, setCategory] = useState(initial?.category ?? BLOG_CATEGORIES[0]);
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle ?? "");
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription ?? "");
  const [published, setPublished] = useState(initial?.published ?? false);
  const [slugTouched, setSlugTouched] = useState(isEdit);

  function handleTitleChange(v: string) {
    setTitle(v);
    if (!slugTouched) setSlug(slugify(v));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const data = {
      title: title.trim(),
      slug: slug.trim(),
      category,
      excerpt: excerpt.trim(),
      content,
      coverImage: coverImage.trim() || undefined,
      metaTitle: metaTitle.trim() || undefined,
      metaDescription: metaDescription.trim() || undefined,
      published,
    };

    startTransition(async () => {
      const result = isEdit
        ? await updatePost(initial!.id!, data)
        : await createPost(data);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left: fields */}
        <div className="flex flex-col gap-4 lg:w-96 shrink-0">
          <div className="rounded-2xl border border-[#E5E9F2] bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold text-navy-ink">Informații articol</h2>

            <div className="space-y-3">
              <div>
                <label className="label-admin">Titlu *</label>
                <Input
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Titlul articolului"
                  required
                />
              </div>

              <div>
                <label className="label-admin">Slug *</label>
                <Input
                  value={slug}
                  onChange={(e) => { setSlugTouched(true); setSlug(e.target.value); }}
                  placeholder="slug-articol"
                  required
                  className="font-mono text-xs"
                />
                <p className="mt-0.5 text-[10px] text-text-muted">/blog/{slug}</p>
              </div>

              <div>
                <label className="label-admin">Categorie *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E9F2] bg-white px-3 py-2 text-sm text-navy-ink focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
                >
                  {BLOG_CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label-admin">Rezumat *</label>
                <Textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Un scurt rezumat al articolului (1-2 propoziții)"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="label-admin">URL imagine copertă</label>
                <Input
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="https://..."
                  type="url"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E9F2] bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold text-navy-ink">SEO (opțional)</h2>
            <div className="space-y-3">
              <div>
                <label className="label-admin">Meta titlu</label>
                <Input
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Titlu pentru Google (max 60 car.)"
                  maxLength={60}
                />
              </div>
              <div>
                <label className="label-admin">Meta descriere</label>
                <Textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Descriere pentru Google (max 160 car.)"
                  rows={3}
                  maxLength={160}
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E9F2] bg-white p-5 shadow-sm">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="h-4 w-4 rounded accent-brand-cyan"
              />
              <span className="text-sm font-medium text-navy-ink">
                Publicat (vizibil pe blog)
              </span>
            </label>
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 border border-red-200">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isPending}
              className="flex-1 rounded-full bg-brand-cyan py-2.5 text-sm font-semibold text-navy-950 transition hover:brightness-110 disabled:opacity-60"
            >
              {isPending ? "Se salvează..." : isEdit ? "Salvează modificările" : "Creează articolul"}
            </button>
            <a
              href="/admin/articole"
              className="rounded-full border border-[#E5E9F2] bg-white px-4 py-2.5 text-sm font-medium text-navy-ink transition hover:bg-bg-muted"
            >
              Anulează
            </a>
          </div>
        </div>

        {/* Right: markdown editor + preview */}
        <div className="flex flex-1 flex-col gap-3">
          {/* Toggle preview (mobile) */}
          <div className="flex gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setPreview(false)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${!preview ? "bg-navy-950 text-white" : "bg-bg-muted text-navy-ink"}`}
            >
              Editor
            </button>
            <button
              type="button"
              onClick={() => setPreview(true)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${preview ? "bg-navy-950 text-white" : "bg-bg-muted text-navy-ink"}`}
            >
              Previzualizare
            </button>
          </div>

          <div className="flex gap-3 flex-1">
            {/* Editor */}
            <div className={`flex flex-col flex-1 ${preview ? "hidden lg:flex" : ""}`}>
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                Conținut (Markdown)
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Scrie conținutul articolului în Markdown...&#10;&#10;## Titlu secțiune&#10;&#10;Text paragraf cu **bold** și *italic*."
                className="flex-1 resize-none rounded-2xl border border-[#E5E9F2] bg-white p-4 font-mono text-sm text-navy-ink placeholder:text-text-muted focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan min-h-[500px]"
              />
            </div>

            {/* Preview */}
            <div className={`flex flex-col flex-1 ${!preview ? "hidden lg:flex" : ""}`}>
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                Previzualizare
              </div>
              <div className="flex-1 overflow-auto rounded-2xl border border-[#E5E9F2] bg-white p-5 min-h-[500px]">
                {content ? (
                  <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-navy-ink prose-a:text-brand-violet prose-strong:text-navy-ink prose-blockquote:border-l-brand-cyan prose-blockquote:text-text-muted">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-sm text-text-muted">
                    Conținutul va apărea aici în timp real.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
