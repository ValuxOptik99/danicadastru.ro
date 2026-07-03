import Link from "next/link";
import { Plus, Pencil, Eye, EyeOff } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { CATEGORY_CHIP_CLASSES } from "@/lib/data/blog-categories";
import { ArticleRowActions } from "./ArticleRowActions";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(d));
}

export default async function ArticlesPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      published: true,
      createdAt: true,
    },
  });

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-navy-ink">Articole</h1>
        <Link
          href="/admin/articole/nou"
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-cyan px-4 py-2 text-xs font-semibold text-navy-950 transition hover:brightness-110"
        >
          <Plus className="h-3.5 w-3.5" />
          Articol nou
        </Link>
      </div>

      <div className="rounded-2xl border border-[#E5E9F2] bg-white shadow-sm">
        {posts.length === 0 ? (
          <p className="px-5 py-12 text-center text-sm text-text-muted">
            Niciun articol creat. Creează primul articol!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E5E9F2] bg-bg-muted">
                  <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Titlu
                  </th>
                  <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Categorie
                  </th>
                  <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Status
                  </th>
                  <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Dată
                  </th>
                  <th className="px-5 py-2.5 text-right text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Acțiuni
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-[#E5E9F2] last:border-0 hover:bg-bg-muted/40"
                  >
                    <td className="px-5 py-3">
                      <div className="font-medium text-navy-ink">{post.title}</div>
                      <div className="text-xs text-text-muted">/blog/{post.slug}</div>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${CATEGORY_CHIP_CLASSES[post.category] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}
                      >
                        {post.category}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      {post.published ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                          <Eye className="h-3 w-3" /> Publicat
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                          <EyeOff className="h-3 w-3" /> Ciornă
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-text-muted">
                      {formatDate(post.createdAt)}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/articole/${post.id}`}
                          className="rounded-lg border border-[#E5E9F2] bg-white px-3 py-1.5 text-xs font-medium text-navy-ink transition hover:bg-bg-muted"
                        >
                          <Pencil className="inline h-3 w-3 mr-1" />
                          Editează
                        </Link>
                        <ArticleRowActions
                          id={post.id}
                          published={post.published}
                          slug={post.slug}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
