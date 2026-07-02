"use server";

import { redirect } from "next/navigation";
import { createSession } from "@/lib/auth";

export async function login(_: unknown, formData: FormData) {
  const password = formData.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return { error: "Configurare lipsă. Contactează administratorul." };
  }

  if (typeof password !== "string" || password !== adminPassword) {
    await new Promise((r) => setTimeout(r, 500));
    return { error: "Parolă incorectă." };
  }

  await createSession();
  redirect("/admin");
}
