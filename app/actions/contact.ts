"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendServiceRequestNotification } from "@/lib/email";

const requestSchema = z.object({
  numeComplet: z.string().min(2),
  telefon: z.string().min(6),
  email: z.string().email(),
  tipServiciu: z.string().optional(),
  localitate: z.string().optional(),
  mesaj: z.string().min(1),
  gdpr: z.literal(true),
});

export async function submitServiceRequest(formData: unknown) {
  const parsed = requestSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "Date invalide. Verifică formularul." };
  }

  const { numeComplet, telefon, email, tipServiciu, localitate, mesaj } = parsed.data;

  try {
    await prisma.serviceRequest.create({
      data: {
        name: numeComplet,
        phone: telefon,
        email,
        service: tipServiciu,
        locality: localitate,
        message: mesaj,
      },
    });

    const emailResult = await sendServiceRequestNotification({
      name: numeComplet,
      phone: telefon,
      email,
      service: tipServiciu,
      locality: localitate,
      message: mesaj,
    });
    if (!emailResult.success) {
      console.error("Request saved but email notification failed:", emailResult.error);
    }

    return { success: true };
  } catch (error) {
    console.error("submitServiceRequest error:", error);
    return { success: false, error: "A apărut o eroare. Încearcă din nou sau sună-ne direct." };
  }
}
