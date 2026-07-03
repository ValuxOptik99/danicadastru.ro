import Link from "next/link";
import { Plus, Eye } from "lucide-react";
import { prisma } from "@/lib/prisma";

function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: number;
  sub?: string;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E5E9F2] bg-white p-5 shadow-sm">
      <div className={`text-3xl font-extrabold ${accent}`}>{value}</div>
      <div className="mt-1 text-sm font-semibold text-navy-ink">{label}</div>
      {sub && <div className="mt-0.5 text-xs text-text-muted">{sub}</div>}
    </div>
  );
}

const STATUS_LABELS: Record<string, string> = {
  nou: "Nou",
  contactat: "Contactat",
  finalizat: "Finalizat",
};

const STATUS_CLASSES: Record<string, string> = {
  nou: "bg-blue-100 text-blue-700",
  contactat: "bg-amber-100 text-amber-700",
  finalizat: "bg-green-100 text-green-700",
};

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(d));
}

export default async function AdminDashboard() {
  const [totalPosts, publishedPosts, totalRequests, newRequests, recentRequests] =
    await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { published: true } }),
      prisma.serviceRequest.count(),
      prisma.serviceRequest.count({ where: { status: "nou" } }),
      prisma.serviceRequest.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-navy-ink">Dashboard</h1>
        <div className="flex gap-3">
          <Link
            href="/admin/articole/nou"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-cyan px-4 py-2 text-xs font-semibold text-navy-950 transition hover:brightness-110"
          >
            <Plus className="h-3.5 w-3.5" />
            Articol nou
          </Link>
          <Link
            href="/admin/cereri"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E9F2] bg-white px-4 py-2 text-xs font-semibold text-navy-ink transition hover:bg-bg-muted"
          >
            <Eye className="h-3.5 w-3.5" />
            Vezi cererile
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Articole total" value={totalPosts} accent="text-navy-ink" />
        <StatCard
          label="Publicate"
          value={publishedPosts}
          sub={`${totalPosts - publishedPosts} ciorne`}
          accent="text-brand-cyan"
        />
        <StatCard label="Cereri total" value={totalRequests} accent="text-navy-ink" />
        <StatCard label="Cereri noi" value={newRequests} accent="text-brand-violet" />
      </div>

      {/* Recent requests */}
      <div className="rounded-2xl border border-[#E5E9F2] bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#E5E9F2] px-5 py-4">
          <h2 className="font-semibold text-navy-ink">Cereri recente</h2>
          <Link
            href="/admin/cereri"
            className="text-xs text-brand-violet hover:underline"
          >
            Toate cererile →
          </Link>
        </div>
        {recentRequests.length === 0 ? (
          <p className="px-5 py-8 text-center text-sm text-text-muted">
            Nicio cerere primită încă.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E5E9F2] bg-bg-muted">
                  <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Dată
                  </th>
                  <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Nume
                  </th>
                  <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Serviciu
                  </th>
                  <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((req) => (
                  <tr
                    key={req.id}
                    className="border-b border-[#E5E9F2] last:border-0 hover:bg-bg-muted/50"
                  >
                    <td className="px-5 py-3 text-text-muted">
                      {formatDate(req.createdAt)}
                    </td>
                    <td className="px-5 py-3 font-medium text-navy-ink">
                      {req.name}
                    </td>
                    <td className="px-5 py-3 text-text-muted">
                      {req.service || "—"}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_CLASSES[req.status] ?? "bg-slate-100 text-slate-600"}`}
                      >
                        {STATUS_LABELS[req.status] ?? req.status}
                      </span>
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
