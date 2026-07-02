"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/auth";

async function requireAuth() {
  const ok = await verifySession();
  if (!ok) throw new Error("Unauthorized");
}

export async function createPost(data: {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  published: boolean;
}) {
  await requireAuth();

  const existing = await prisma.blogPost.findUnique({ where: { slug: data.slug } });
  if (existing) {
    return { success: false, error: "Există deja un articol cu acest slug." };
  }

  await prisma.blogPost.create({ data });
  revalidatePath("/blog");
  revalidatePath("/admin/articole");
  redirect("/admin/articole");
}

export async function updatePost(
  id: string,
  data: {
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    coverImage?: string;
    metaTitle?: string;
    metaDescription?: string;
    published: boolean;
  }
) {
  await requireAuth();

  const existing = await prisma.blogPost.findUnique({ where: { slug: data.slug } });
  if (existing && existing.id !== id) {
    return { success: false, error: "Există deja un articol cu acest slug." };
  }

  await prisma.blogPost.update({ where: { id }, data });
  revalidatePath("/blog");
  revalidatePath(`/blog/${data.slug}`);
  revalidatePath("/admin/articole");
  redirect("/admin/articole");
}

export async function deletePost(id: string) {
  await requireAuth();
  await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/blog");
  revalidatePath("/admin/articole");
  return { success: true };
}

export async function togglePublish(id: string, published: boolean) {
  await requireAuth();
  await prisma.blogPost.update({ where: { id }, data: { published } });
  revalidatePath("/blog");
  revalidatePath("/admin/articole");
  return { success: true };
}
