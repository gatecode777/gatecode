import nodemailer from 'nodemailer';

export interface ClientInquiryEmailData {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  budget: string;
  submittedAt: string;
}

export async function sendClientInquiryEmail(data: ClientInquiryEmailData) {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER || 'omrishi@gatexpay.co.in';
  // Strip spaces from App Password (e.g. "mstp mowp ouwq szke" -> "mstpmowpouwqszke")
  const pass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');
  const to = process.env.SMTP_TO || 'vitin@gatecode.in';

  // Create transporter dynamically per call to ensure fresh env variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Client Enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">

  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0fb9b1 0%,#0ca39c 100%);padding:32px 36px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:40px;height:40px;background:rgba(255,255,255,0.25);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          <span style="color:#fff;font-size:20px;">📩</span>
        </div>
        <div>
          <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:800;letter-spacing:-0.3px;">New Client Enquiry</h1>
          <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px;">Submitted via Gatecode website</p>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div style="padding:32px 36px;">

      <!-- Contact Info Section -->
      <div style="margin-bottom:24px;">
        <h2 style="font-size:13px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 14px 0;">Contact Details</h2>

        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:12px 16px;background:#f8fafc;border-radius:8px 8px 0 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:12px;color:#64748b;font-weight:600;display:block;margin-bottom:3px;">NAME</span>
              <span style="font-size:15px;color:#0f172a;font-weight:700;">${data.name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:12px;color:#64748b;font-weight:600;display:block;margin-bottom:3px;">PHONE</span>
              <a href="tel:${data.phone}" style="font-size:15px;color:#0fb9b1;font-weight:600;text-decoration:none;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background:#f8fafc;border-radius:0 0 8px 8px;">
              <span style="font-size:12px;color:#64748b;font-weight:600;display:block;margin-bottom:3px;">BUSINESS EMAIL</span>
              <a href="mailto:${data.email}" style="font-size:15px;color:#0fb9b1;font-weight:600;text-decoration:none;">${data.email}</a>
            </td>
          </tr>
        </table>
      </div>

      <!-- Divider -->
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 24px 0;" />

      <!-- Project Info Section -->
      <div style="margin-bottom:24px;">
        <h2 style="font-size:13px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 14px 0;">Project Requirements</h2>

        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <div style="flex:1;min-width:200px;background:#f0fffe;border:1px solid #b2f0ec;border-radius:8px;padding:14px 18px;">
            <span style="font-size:12px;color:#0ca39c;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:4px;">What They Need</span>
            <span style="font-size:16px;color:#0f172a;font-weight:800;">${data.requirement}</span>
          </div>
          <div style="flex:1;min-width:200px;background:#f0fffe;border:1px solid #b2f0ec;border-radius:8px;padding:14px 18px;">
            <span style="font-size:12px;color:#0ca39c;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:4px;">Budget Range</span>
            <span style="font-size:16px;color:#0f172a;font-weight:800;">${data.budget}</span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div style="text-align:center;padding:20px;background:#f8fafc;border-radius:8px;">
        <p style="margin:0 0 12px;font-size:13px;color:#64748b;">Reply directly to the client</p>
        <a href="mailto:${data.email}?subject=Re: Your Project Enquiry - Gatecode Technologies&body=Hi ${data.name},%0A%0AThank you for reaching out to Gatecode Technologies.%0A%0A"
          style="display:inline-block;background:#0fb9b1;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:700;font-size:14px;">
          Reply to ${data.name}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 36px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#94a3b8;">
        Submitted on <strong style="color:#64748b;">${data.submittedAt}</strong> · Gatecode Technologies
      </p>
    </div>

  </div>
</body>
</html>
  `.trim();

  const info = await transporter.sendMail({
    from: `"Gatecode Website" <${user}>`,
    to,
    subject: `🆕 New Client Enquiry — ${data.name} (${data.requirement})`,
    html,
    replyTo: data.email,
  });

  console.log('[ClientInquiry] Email sent successfully. Message ID:', info.messageId);
  return info;
}
