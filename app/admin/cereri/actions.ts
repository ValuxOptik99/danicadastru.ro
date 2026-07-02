"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/auth";

const VALID_STATUSES = ["nou", "contactat", "finalizat"] as const;

export async function updateRequestStatus(id: string, status: string) {
  const ok = await verifySession();
  if (!ok) throw new Error("Unauthorized");

  if (!VALID_STATUSES.includes(status as typeof VALID_STATUSES[number])) {
    return { success: false, error: "Status invalid" };
  }

  await prisma.serviceRequest.update({ where: { id }, data: { status } });
  revalidatePath("/admin/cereri");
  return { success: true };
}

export async function deleteRequest(id: string) {
  const ok = await verifySession();
  if (!ok) throw new Error("Unauthorized");
  await prisma.serviceRequest.delete({ where: { id } });
  revalidatePath("/admin/cereri");
  return { success: true };
}
