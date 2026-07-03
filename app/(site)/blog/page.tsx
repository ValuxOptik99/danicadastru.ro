import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { getPublishedPosts } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/data/blog-categories";
import { BlogListClient } from "@/components/blog/BlogListClient";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog — Ghiduri de Cadastru, Intabulare și Topografie",
  description:
    "Articole, ghiduri și noutăți despre cadastru, intabulare, topografie și legislație imobiliară din județul Constanța și Dobrogea. Sfaturi practice de la specialiști DANI Cadastru.",
  path: "/blog",
});

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { categorie?: string };
}) {
  const category = searchParams.categorie;
  const validCategory =
    category && (BLOG_CATEGORIES as readonly string[]).includes(category)
      ? category
      : undefined;

  const posts = await getPublishedPosts(validCategory);

  return <BlogListClient posts={posts} activeCategory={validCategory} />;
}
