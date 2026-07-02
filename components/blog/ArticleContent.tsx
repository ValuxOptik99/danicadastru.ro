"use client";

import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { CATEGORY_CHIP_CLASSES } from "@/lib/data/blog-categories";
import { Button } from "@/components/ui/button";

const WA_URL =
  "https://wa.me/40770556677?text=Bun%C4%83!%20Am%20o%20%C3%AEntrebare%20despre%20cadastru.";

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function CategoryChip({ category }: { category: string }) {
  const classes =
    CATEGORY_CHIP_CLASSES[category] ?? "bg-slate-100 text-slate-600 border-slate-200";
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${classes}`}
    >
      {category}
    </span>
  );
}

interface PostSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string | null;
  category: string;
  createdAt: Date;
}

interface Post extends PostSummary {
  content: string;
  metaDescription: string | null;
  updatedAt: Date;
  published: boolean;
  metaTitle: string | null;
}

interface Props {
  post: Post;
  related: PostSummary[];
}

export function ArticleContent({ post, related }: Props) {
  const readingTime = getReadingTime(post.content);

  return (
    <>
      {/* Back link */}
      <div className="bg-white border-b border-[#E5E9F2] pt-24 pb-4">
        <div className="container mx-auto px-4 lg:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-navy-ink transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Înapoi la blog
          </Link>
        </div>
      </div>

      {/* Article hero */}
      <header className="bg-white pt-8 pb-10">
        <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
          <CategoryChip category={post.category} />
          <h1
            className="mt-4 text-3xl font-extrabold text-navy-ink lg:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            {post.title}
          </h1>
          <p className="mt-3 text-lg text-text-muted leading-relaxed">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.createdAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readingTime} min de citit
            </span>
          </div>

          {post.coverImage && (
            <div className="relative mt-8 h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
        </div>
      </header>

      {/* Markdown content */}
      <article className="bg-white pb-16">
        <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
          <div className="prose prose-slate lg:prose-lg max-w-none prose-headings:font-bold prose-headings:text-navy-ink prose-a:text-brand-violet prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-ink prose-blockquote:border-l-brand-cyan prose-blockquote:text-text-muted prose-code:text-brand-violet prose-code:bg-bg-muted prose-code:px-1 prose-code:rounded">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* CTA band */}
      <section className="bg-navy-950 py-16">
        <div className="container mx-auto px-4 lg:px-6 text-center max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            DANI CADASTRU
          </p>
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Ai nevoie de servicii de cadastru?
          </h2>
          <p className="mt-3 text-white/60">
            Solicită o ofertă gratuită — răspundem în maxim 24 de ore.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
            >
              WhatsApp
            </a>
            <Button asChild variant="outline" size="default" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">Solicită Ofertă</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section-padding bg-bg-muted">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="mb-8 text-xl font-bold text-navy-ink">Articole similare</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E9F2] bg-white shadow-[0_2px_12px_rgba(11,20,55,0.05)] transition hover:shadow-[0_8px_32px_rgba(11,20,55,0.10)]"
                >
                  <div className="relative h-36 overflow-hidden bg-bg-muted">
                    {rel.coverImage ? (
                      <Image
                        src={rel.coverImage}
                        alt={rel.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <CategoryChip category={rel.category} />
                    <h3 className="mt-2 text-sm font-bold leading-snug text-navy-ink group-hover:text-brand-violet transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-text-muted line-clamp-2">{rel.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
