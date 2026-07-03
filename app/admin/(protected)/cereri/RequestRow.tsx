"use client";

import { useState, useTransition } from "react";
import { ChevronDown, ChevronUp, Trash2, Phone, Mail } from "lucide-react";
import { updateRequestStatus, deleteRequest } from "./actions";

const STATUS_CLASSES: Record<string, string> = {
  nou: "bg-blue-100 text-blue-700",
  contactat: "bg-amber-100 text-amber-700",
  finalizat: "bg-green-100 text-green-700",
};

interface ServiceRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string | null;
  locality: string | null;
  message: string;
  status: string;
  createdAt: Date;
}

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(d));
}

export function RequestRow({ req }: { req: ServiceRequest }) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState(req.status);
  const [isPending, startTransition] = useTransition();

  function handleStatus(newStatus: string) {
    setStatus(newStatus);
    startTransition(async () => {
      await updateRequestStatus(req.id, newStatus);
    });
  }

  function handleDelete() {
    if (!confirm(`Ștergi cererea de la ${req.name}? Acțiunea nu poate fi anulată.`)) return;
    startTransition(async () => {
      await deleteRequest(req.id);
    });
  }

  return (
    <>
      <tr className="border-b border-[#E5E9F2] hover:bg-bg-muted/40">
        <td className="px-4 py-3 text-xs text-text-muted whitespace-nowrap">
          {formatDate(req.createdAt)}
        </td>
        <td className="px-4 py-3 font-medium text-navy-ink">{req.name}</td>
        <td className="px-4 py-3">
          <a
            href={`tel:${req.phone}`}
            className="inline-flex items-center gap-1 text-xs text-brand-cyan hover:underline"
          >
            <Phone className="h-3 w-3" />
            {req.phone}
          </a>
        </td>
        <td className="px-4 py-3">
          <a
            href={`mailto:${req.email}`}
            className="inline-flex items-center gap-1 text-xs text-brand-violet hover:underline"
          >
            <Mail className="h-3 w-3" />
            {req.email}
          </a>
        </td>
        <td className="px-4 py-3 text-xs text-text-muted">{req.service || "—"}</td>
        <td className="px-4 py-3 text-xs text-text-muted">{req.locality || "—"}</td>
        <td className="px-4 py-3">
          <select
            value={status}
            onChange={(e) => handleStatus(e.target.value)}
            disabled={isPending}
            className={`rounded-full border-0 px-2.5 py-1 text-xs font-semibold focus:outline-none cursor-pointer ${STATUS_CLASSES[status] ?? "bg-slate-100 text-slate-600"}`}
          >
            <option value="nou">Nou</option>
            <option value="contactat">Contactat</option>
            <option value="finalizat">Finalizat</option>
          </select>
        </td>
        <td className="px-4 py-3">
          <div className="flex items-center gap-1.5 justify-end">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="rounded-lg border border-[#E5E9F2] bg-white p-1.5 text-navy-ink transition hover:bg-bg-muted"
              title="Mesaj"
            >
              {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="rounded-lg border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100 disabled:opacity-50"
              title="Șterge"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </td>
      </tr>
      {expanded && (
        <tr className="border-b border-[#E5E9F2] bg-bg-muted/50">
          <td colSpan={8} className="px-4 py-3">
            <div className="rounded-xl bg-white p-3 text-sm text-navy-ink whitespace-pre-wrap border border-[#E5E9F2]">
              {req.message}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
