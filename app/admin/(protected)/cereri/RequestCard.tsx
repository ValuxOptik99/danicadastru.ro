"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Trash2, Phone, Mail, MessageSquare } from "lucide-react";
import { useRequestActions } from "./useRequestActions";
import type { ServiceRequestData } from "./types";

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
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(d));
}

export function RequestCard({ req }: { req: ServiceRequestData }) {
  const [expanded, setExpanded] = useState(false);
  const { status, handleStatus, handleDelete, isPending } = useRequestActions(req);

  return (
    <div className="border-b border-[#E5E9F2] p-4 last:border-0">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate font-semibold text-navy-ink">{req.name}</div>
          <div className="text-xs text-text-muted">{formatDate(req.createdAt)}</div>
        </div>
        <select
          value={status}
          onChange={(e) => handleStatus(e.target.value)}
          disabled={isPending}
          className={`shrink-0 rounded-full border-0 px-3 py-2 text-sm font-semibold focus:outline-none cursor-pointer ${STATUS_CLASSES[status] ?? "bg-slate-100 text-slate-600"}`}
        >
          <option value="nou">Nou</option>
          <option value="contactat">Contactat</option>
          <option value="finalizat">Finalizat</option>
        </select>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2">
        <a
          href={`tel:${req.phone}`}
          className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-brand-cyan/10 px-3 text-sm font-semibold text-brand-cyan transition hover:bg-brand-cyan/20"
        >
          <Phone className="h-4 w-4" />
          Sună
        </a>
        <a
          href={`mailto:${req.email}`}
          className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-brand-violet/10 px-3 text-sm font-semibold text-brand-violet transition hover:bg-brand-violet/20"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-3 text-xs">
        <div>
          <div className="text-text-muted">Serviciu</div>
          <div className="font-medium text-navy-ink">{req.service || "—"}</div>
        </div>
        <div>
          <div className="text-text-muted">Localitate</div>
          <div className="font-medium text-navy-ink">{req.locality || "—"}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#E5E9F2] bg-white text-sm font-medium text-navy-ink transition hover:bg-bg-muted"
        >
          <MessageSquare className="h-4 w-4" />
          Mesaj
          {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
        <button
          onClick={handleDelete}
          disabled={isPending}
          aria-label="Șterge"
          title="Șterge"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100 disabled:opacity-50"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {expanded && (
        <div className="mt-3 rounded-xl border border-[#E5E9F2] bg-bg-muted p-3 text-sm text-navy-ink whitespace-pre-wrap">
          {req.message}
        </div>
      )}
    </div>
  );
}
