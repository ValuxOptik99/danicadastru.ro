"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { BLOG_CATEGORIES, CATEGORY_CHIP_CLASSES } from "@/lib/data/blog-categories";

interface PostSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string | null;
  category: string;
  createdAt: Date;
}

interface Props {
  posts: PostSummary[];
  activeCategory?: string;
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
    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${classes}`}>
      {category}
    </span>
  );
}

function CoverPlaceholder({ category }: { category: string }) {
  const gradients: Record<string, string> = {
    "Cadastru":   "from-cyan-500/20 to-blue-600/20",
    "Intabulare": "from-violet-500/20 to-purple-600/20",
    "Topografie": "from-pink-500/20 to-rose-600/20",
    "Ghiduri":    "from-blue-500/20 to-indigo-600/20",
    "Legislație": "from-amber-500/20 to-orange-600/20",
  };
  const gradient = gradients[category] ?? "from-slate-200 to-slate-300";
  return (
    <div className={`h-full w-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <span className="text-3xl opacity-40">📋</span>
    </div>
  );
}

export function BlogListClient({ posts, activeCategory }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-cyan">
              BLOG
            </p>
            <h1
              className="text-4xl font-extrabold text-white lg:text-5xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ghiduri și Noutăți Cadastrale
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
              Articole practice despre cadastru, intabulare și topografie — scrise de specialiștii DANI Cadastru pentru proprietarii din Dobrogea.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-[72px] z-30 border-b border-[#E5E9F2] bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex items-center gap-2 overflow-x-auto px-4 py-3 lg:px-6">
          <Link
            href="/blog"
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              !activeCategory
                ? "bg-navy-950 text-white"
                : "bg-bg-muted text-navy-ink hover:bg-[#E5E9F2]"
            }`}
          >
            Toate
          </Link>
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/blog?categorie=${encodeURIComponent(cat)}`}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-navy-950 text-white"
                  : "bg-bg-muted text-navy-ink hover:bg-[#E5E9F2]"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-padding bg-bg-muted">
        <div className="container mx-auto px-4 lg:px-6">
          {posts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-lg text-text-muted">
                În curând vom publica primele articole. Revino curând!
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E9F2] bg-white shadow-[0_2px_12px_rgba(11,20,55,0.05)] transition hover:shadow-[0_8px_32px_rgba(11,20,55,0.10)]"
                  >
                    {/* Cover */}
                    <div className="relative h-44 overflow-hidden bg-bg-muted">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <CoverPlaceholder category={post.category} />
                      )}
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-5">
                      <CategoryChip category={post.category} />
                      <h2 className="mt-3 text-base font-bold leading-snug text-navy-ink group-hover:text-brand-violet transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-xs text-text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(post.createdAt)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
