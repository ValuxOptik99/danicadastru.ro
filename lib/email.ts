import { BrevoClient } from "@getbrevo/brevo";
import { getServiceLabel } from "@/lib/data/service-options";
import { getLocalityLabel } from "@/lib/data/localitati";

interface ServiceRequestEmail {
  name: string;
  phone: string;
  email: string;
  service?: string;
  locality?: string;
  message: string;
}

function esc(input: string): string {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toIntlDigits(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("40")) return digits;
  if (digits.startsWith("0")) return "40" + digits.slice(1);
  if (digits.length === 9) return "40" + digits;
  return digits;
}

function formatNow(): string {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Bucharest",
  }).format(new Date());
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

  const serviceLabel = getServiceLabel(data.service);
  const localityLabel = getLocalityLabel(data.locality);
  const waDigits = toIntlDigits(data.phone);
  const sentAt = formatNow();

  const eName     = esc(data.name);
  const ePhone    = esc(data.phone);
  const eEmail    = esc(data.email);
  const eMessage  = esc(data.message).replace(/\n/g, "<br>");
  const eService  = esc(serviceLabel);
  const eLocality = esc(localityLabel);

  const subject = `Cerere nouă: ${serviceLabel} — ${data.name} (${localityLabel})`;

  const htmlContent = `<!DOCTYPE html>
<html lang="ro">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px 12px;background-color:#e8ecf3;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;">
  <tr><td>

    <!-- HEADER -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#0A0E27;border-radius:12px 12px 0 0;">
      <tr><td style="padding:26px 26px 22px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="font-size:19px;font-weight:bold;color:#ffffff;">DANI <span style="color:#22D3EE;">Cadastru</span></td>
            <td align="right"><span style="display:inline-block;background-color:#22D3EE;color:#0A0E27;font-size:10px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;padding:5px 11px;border-radius:20px;">Cerere nou&#259;</span></td>
          </tr>
        </table>
        <div style="margin-top:18px;font-size:22px;font-weight:bold;color:#ffffff;line-height:1.3;">${eName}</div>
        <div style="margin-top:5px;font-size:13px;color:#8b9bb4;">${sentAt}</div>
      </td></tr>
    </table>

    <!-- ACTION BAR -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#141A3A;">
      <tr><td style="padding:14px 26px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right:8px;"><a href="tel:${waDigits}" style="display:inline-block;background-color:#22D3EE;color:#0A0E27;font-size:12px;font-weight:bold;text-decoration:none;padding:10px 16px;border-radius:6px;">Sun&#259; acum</a></td>
            <td style="padding-right:8px;"><a href="https://wa.me/${waDigits}" style="display:inline-block;background-color:#25D366;color:#ffffff;font-size:12px;font-weight:bold;text-decoration:none;padding:10px 16px;border-radius:6px;">WhatsApp</a></td>
            <td><a href="mailto:${eEmail}" style="display:inline-block;border:1px solid #3d4766;color:#ffffff;font-size:12px;font-weight:bold;text-decoration:none;padding:9px 16px;border-radius:6px;">R&#259;spunde</a></td>
          </tr>
        </table>
      </td></tr>
    </table>

    <!-- BODY -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f5f7fb;">
      <tr><td style="padding:24px 26px;">

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#ffffff;border-radius:8px;border-left:4px solid #8B5CF6;">
          <tr><td style="padding:14px 16px;">
            <div style="font-size:10px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#8B5CF6;">Serviciu solicitat</div>
            <div style="margin-top:4px;font-size:16px;font-weight:bold;color:#0B1437;">${eService}</div>
          </td></tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#ffffff;border-radius:8px;margin-top:12px;">
          <tr><td style="padding:16px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="90" style="padding:7px 0;font-size:12px;font-weight:bold;color:#64748b;">Telefon</td>
                <td style="padding:7px 0;font-size:14px;"><a href="tel:${waDigits}" style="color:#2563EB;text-decoration:none;font-weight:bold;">${ePhone}</a></td>
              </tr>
              <tr><td colspan="2" style="border-top:1px solid #eef1f6;font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr>
                <td width="90" style="padding:7px 0;font-size:12px;font-weight:bold;color:#64748b;">Email</td>
                <td style="padding:7px 0;font-size:14px;"><a href="mailto:${eEmail}" style="color:#2563EB;text-decoration:none;">${eEmail}</a></td>
              </tr>
              <tr><td colspan="2" style="border-top:1px solid #eef1f6;font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr>
                <td width="90" style="padding:7px 0;font-size:12px;font-weight:bold;color:#64748b;">Localitate</td>
                <td style="padding:7px 0;font-size:14px;color:#0B1437;">${eLocality}</td>
              </tr>
            </table>
          </td></tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#ffffff;border-radius:8px;margin-top:12px;">
          <tr><td style="padding:16px;">
            <div style="font-size:10px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#64748b;">Mesaj</div>
            <div style="margin-top:8px;font-size:14px;line-height:1.65;color:#334155;">${eMessage}</div>
          </td></tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:16px;">
          <tr><td align="center" style="padding:4px 0;">
            <a href="https://danicadastru.ro/admin/cereri" style="font-size:12px;color:#64748b;text-decoration:underline;">Vezi toate cererile &icirc;n panoul admin</a>
          </td></tr>
        </table>

      </td></tr>
    </table>

    <!-- FOOTER -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#0F1535;border-radius:0 0 12px 12px;">
      <tr><td style="padding:16px 26px;text-align:center;">
        <div style="font-size:11px;color:#6b7a99;line-height:1.6;">
          Notificare automat&#259; de pe <a href="https://danicadastru.ro" style="color:#22D3EE;text-decoration:none;">danicadastru.ro</a><br>
          VIBE DESIGN GLOW SRL &middot; &#538;os. Constan&#539;ei nr. 19, Mangalia
        </div>
      </td></tr>
    </table>

  </td></tr>
</table>
</body>
</html>`;

  const textContent = [
    `CERERE NOUA — DANI Cadastru`,
    sentAt,
    ``,
    `Nume: ${data.name}`,
    `Telefon: ${data.phone}`,
    `Email: ${data.email}`,
    `Serviciu: ${serviceLabel}`,
    `Localitate: ${localityLabel}`,
    ``,
    `Mesaj:`,
    data.message,
    ``,
    `---`,
    `Suna: tel:${waDigits}`,
    `WhatsApp: https://wa.me/${waDigits}`,
    `Panou admin: https://danicadastru.ro/admin/cereri`,
  ].join("\n");

  const client = new BrevoClient({ apiKey });

  try {
    await client.transactionalEmails.sendTransacEmail({
      subject,
      sender: { email: senderEmail, name: senderName },
      to: [{ email: toEmail }],
      replyTo: { email: data.email, name: data.name },
      htmlContent,
      textContent,
    });
    return { success: true };
  } catch (error) {
    console.error("Brevo send error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
