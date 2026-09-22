"use client";

import { useState, useTransition } from "react";
import { updateRequestStatus, deleteRequest } from "./actions";

export function useRequestActions(req: { id: string; name: string; status: string }) {
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

  return { status, handleStatus, handleDelete, isPending };
}
