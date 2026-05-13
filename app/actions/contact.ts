"use server";

export interface ContactFormPayload {
  numeComplet: string;
  telefon: string;
  email: string;
  tipServiciu: string;
  localitate: string;
  mesaj: string;
}

export async function submitContactForm(data: ContactFormPayload): Promise<{ success: boolean; message: string }> {
  // TODO: integrate with email service (Resend, SendGrid, etc.)
  console.log("[ContactForm] New submission:", data);
  return { success: true, message: "Mesaj primit cu succes." };
}
