import { prisma } from "@/lib/prisma";
import { RequestRow } from "./RequestRow";

type StatusFilter = "all" | "nou" | "contactat" | "finalizat";

const FILTER_LABELS: Record<StatusFilter, string> = {
  all: "Toate",
  nou: "Nou",
  contactat: "Contactat",
  finalizat: "Finalizat",
};

export const dynamic = "force-dynamic";

export default async function CereriPage({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const statusFilter = (searchParams.status ?? "all") as StatusFilter;

  const requests = await prisma.serviceRequest.findMany({
    where:
      statusFilter === "all"
        ? undefined
        : { status: statusFilter },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-navy-ink">Cereri de servicii</h1>
        <span className="text-sm text-text-muted">{requests.length} înregistrări</span>
      </div>

      {/* Status filter */}
      <div className="mb-4 flex gap-2 flex-wrap">
        {(Object.keys(FILTER_LABELS) as StatusFilter[]).map((s) => (
          <a
            key={s}
            href={s === "all" ? "/admin/cereri" : `/admin/cereri?status=${s}`}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              statusFilter === s
                ? "bg-navy-950 text-white"
                : "bg-white border border-[#E5E9F2] text-navy-ink hover:bg-bg-muted"
            }`}
          >
            {FILTER_LABELS[s]}
          </a>
        ))}
      </div>

      <div className="rounded-2xl border border-[#E5E9F2] bg-white shadow-sm">
        {requests.length === 0 ? (
          <p className="px-5 py-12 text-center text-sm text-text-muted">
            Nicio cerere de afișat.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E5E9F2] bg-bg-muted">
                  {["Dată", "Nume", "Telefon", "Email", "Serviciu", "Localitate", "Status", ""].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-text-muted last:text-right"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <RequestRow key={req.id} req={req} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
