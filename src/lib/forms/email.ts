import { Resend } from "resend";

interface LeadNotificationParams {
  resendApiKey: string;
  to: string[];
  lead: {
    name: string;
    phone: string;
    email?: string;
    service?: string;
    message?: string;
    source?: string;
  };
  businessName: string;
}

// Send lead notification to GC client
export async function sendLeadNotification(params: LeadNotificationParams) {
  const resend = new Resend(params.resendApiKey);

  const leadRows = [
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Name</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${params.lead.name}</td></tr>`,
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Phone</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;"><a href="tel:${params.lead.phone}" style="color:#2563eb;text-decoration:none;">${params.lead.phone}</a></td></tr>`,
    params.lead.email
      ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Email</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;"><a href="mailto:${params.lead.email}" style="color:#2563eb;text-decoration:none;">${params.lead.email}</a></td></tr>`
      : "",
    params.lead.service
      ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Service</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${params.lead.service}</td></tr>`
      : "",
    params.lead.message
      ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Message</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${params.lead.message}</td></tr>`
      : "",
    params.lead.source
      ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;">Source Page</td><td style="padding:8px 12px;color:#111827;">${params.lead.source}</td></tr>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color:#1e40af;padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">New Lead Received</h1>
              <p style="margin:4px 0 0;color:#bfdbfe;font-size:14px;">${params.businessName}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.5;">A new lead just submitted a request on your website. Here are the details:</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                ${leadRows}
              </table>
              <p style="margin:24px 0 0;color:#6b7280;font-size:13px;line-height:1.5;">Respond quickly for the best chance of converting this lead. We recommend calling back within 5 minutes.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">Powered by AutoBoss</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const { data, error } = await resend.emails.send({
    from: "AutoBoss Leads <leads@autoboss.dev>",
    to: params.to,
    subject: `New Lead: ${params.lead.name} — ${params.lead.service || "General Inquiry"}`,
    html,
  });

  if (error) throw new Error(`Failed to send lead notification: ${error.message}`);
  return data;
}

// Send confirmation to homeowner
export async function sendLeadConfirmation(params: {
  resendApiKey: string;
  to: string;
  homeownerName: string;
  businessName: string;
  businessPhone: string;
}) {
  const resend = new Resend(params.resendApiKey);

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color:#1e40af;padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">${params.businessName}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 16px;color:#111827;font-size:16px;line-height:1.6;">Hi ${params.homeownerName},</p>
              <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.6;">Thanks for reaching out to <strong>${params.businessName}</strong>. We received your request and will get back to you within <strong>24 hours</strong>.</p>
              <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.6;">If you need immediate help, give us a call:</p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background-color:#1e40af;border-radius:6px;padding:12px 28px;">
                    <a href="tel:${params.businessPhone}" style="color:#ffffff;text-decoration:none;font-size:16px;font-weight:600;">${params.businessPhone}</a>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0;color:#374151;font-size:15px;line-height:1.6;">We look forward to helping you!</p>
              <p style="margin:16px 0 0;color:#374151;font-size:15px;line-height:1.6;">Best regards,<br><strong>${params.businessName}</strong></p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">You received this email because you submitted a request on our website.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const { data, error } = await resend.emails.send({
    from: `${params.businessName} <noreply@autoboss.dev>`,
    to: params.to,
    subject: `Thanks for contacting ${params.businessName}`,
    html,
  });

  if (error) throw new Error(`Failed to send confirmation: ${error.message}`);
  return data;
}

// Send calculator lead notification to AutoBoss team
export async function sendCalculatorLeadNotification(params: {
  resendApiKey: string;
  to: string[];
  lead: {
    name: string;
    company: string;
    email: string;
    phone: string;
    cities: string[];
    state: string;
    estimatedRevenue: number;
  };
}) {
  const resend = new Resend(params.resendApiKey);

  const revenue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(params.lead.estimatedRevenue);

  const citiesLabel = params.lead.cities.join(", ");

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color:#059669;padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">New Calculator Lead</h1>
              <p style="margin:4px 0 0;color:#a7f3d0;font-size:14px;">Revenue Calculator — ${citiesLabel}, ${params.lead.state}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <div style="background-color:#ecfdf5;border:1px solid #6ee7b7;border-radius:8px;padding:16px;margin-bottom:20px;text-align:center;">
                <p style="margin:0;color:#065f46;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Estimated Revenue Opportunity</p>
                <p style="margin:4px 0 0;color:#059669;font-size:32px;font-weight:800;">${revenue}/mo</p>
              </div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:140px;">Name</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${params.lead.name}</td></tr>
                <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Company</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${params.lead.company}</td></tr>
                <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Email</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;"><a href="mailto:${params.lead.email}" style="color:#2563eb;text-decoration:none;">${params.lead.email}</a></td></tr>
                <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Phone</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;"><a href="tel:${params.lead.phone}" style="color:#2563eb;text-decoration:none;">${params.lead.phone}</a></td></tr>
                <tr><td style="padding:8px 12px;font-weight:600;color:#374151;">Markets</td><td style="padding:8px 12px;color:#111827;">${citiesLabel}, ${params.lead.state}</td></tr>
              </table>
              <p style="margin:24px 0 0;color:#6b7280;font-size:13px;line-height:1.5;">This GC used the revenue calculator and requested a full SEO breakdown. Follow up within 1 hour.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">AutoBoss Revenue Calculator Lead</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const { data, error } = await resend.emails.send({
    from: "AutoBoss <calculator@autoboss.dev>",
    to: params.to,
    subject: `Calculator Lead: ${params.lead.company} — ${citiesLabel}, ${params.lead.state} (${revenue}/mo)`,
    html,
  });

  if (error) throw new Error(`Failed to send calculator lead notification: ${error.message}`);
  return data;
}
