import { prisma } from "@/lib/prisma";

export async function getPublishedPosts(category?: string) {
  try {
    return await prisma.blogPost.findMany({
      where: {
        published: true,
        ...(category ? { category } : {}),
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        coverImage: true,
        category: true,
        createdAt: true,
      },
    });
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await prisma.blogPost.findUnique({ where: { slug } });
  } catch {
    return null;
  }
}

export async function getAllPublishedSlugs() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true },
    });
    return posts.map((p) => p.slug);
  } catch {
    return [];
  }
}

export async function getRelatedPosts(category: string, excludeSlug: string, limit = 3) {
  try {
    return await prisma.blogPost.findMany({
      where: {
        published: true,
        category,
        slug: { not: excludeSlug },
      },
      orderBy: { createdAt: "desc" },
      take: limit,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        coverImage: true,
        category: true,
        createdAt: true,
      },
    });
  } catch {
    return [];
  }
}
