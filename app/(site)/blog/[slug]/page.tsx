import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPublishedSlugs, getRelatedPosts } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { ArticleSchema } from "@/components/seo/ArticleSchema";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post || !post.published) {
    return { title: "Articol negăsit" };
  }
  return buildPageMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.coverImage || undefined,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post || !post.published) notFound();

  const related = await getRelatedPosts(post.category, post.slug, 3);

  return (
    <>
      <ArticleSchema
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        slug={post.slug}
        coverImage={post.coverImage}
        createdAt={post.createdAt}
        updatedAt={post.updatedAt}
      />
      <ArticleContent post={post} related={related} />
    </>
  );
}
