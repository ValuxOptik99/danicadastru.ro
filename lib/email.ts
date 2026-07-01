import { BrevoClient } from "@getbrevo/brevo";

interface ServiceRequestEmail {
  name: string;
  phone: string;
  email: string;
  service?: string;
  locality?: string;
  message: string;
}

export async function sendServiceRequestNotification(data: ServiceRequestEmail) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "DANI Cadastru";
  const toEmail = process.env.NOTIFICATION_EMAIL;

  if (!apiKey || !senderEmail || !toEmail) {
    console.error("Brevo env vars missing — skipping email notification");
    return { success: false, error: "Email configuration missing" };
  }

  const client = new BrevoClient({ apiKey });

  try {
    await client.transactionalEmails.sendTransacEmail({
      subject: `Cerere nouă de la ${data.name} — DANI Cadastru`,
      sender: { email: senderEmail, name: senderName },
      to: [{ email: toEmail }],
      replyTo: { email: data.email, name: data.name },
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0E27; padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #fff; margin: 0;">Cerere nouă de servicii</h2>
          </div>
          <div style="background: #f5f7fb; padding: 24px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #0B1437;">Nume:</td><td style="padding: 8px 0; color: #333;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #0B1437;">Telefon:</td><td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #2563EB;">${data.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #0B1437;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563EB;">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #0B1437;">Serviciu:</td><td style="padding: 8px 0; color: #333;">${data.service || "-"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #0B1437;">Localitate:</td><td style="padding: 8px 0; color: #333;">${data.locality || "-"}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #fff; border-radius: 8px;">
              <strong style="color: #0B1437;">Mesaj:</strong>
              <p style="color: #333; margin: 8px 0 0; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Brevo send error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
