import { NextResponse } from "next/server";
import { calculatorLeadSchema } from "@/lib/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = calculatorLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const lead = parsed.data;
    const listId = process.env.CLICKUP_LEADS_LIST_ID;

    const revenue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(lead.estimatedRevenue);

    const citiesLabel = lead.cities.join(", ");

    // Create ClickUp task (fail gracefully if not configured)
    try {
      if (listId && process.env.CLICKUP_API_TOKEN) {
        const { ClickUpClient } = await import("@/lib/clickup");
        const clickup = new ClickUpClient();
        await clickup.createTask(listId, {
          name: `${lead.company} — ${citiesLabel}, ${lead.state} (${revenue}/mo)`,
          description: [
            `## Calculator Lead`,
            ``,
            `**Contact:** ${lead.name}`,
            `**Company:** ${lead.company}`,
            `**Email:** ${lead.email}`,
            `**Phone:** ${lead.phone}`,
            ``,
            `**Markets:** ${citiesLabel}, ${lead.state}`,
            `**Estimated Revenue Opportunity:** ${revenue}/mo`,
          ].join("\n"),
          priority: 2,
          tags: ["calculator-lead"],
        });
      }
    } catch (err) {
      console.error("ClickUp task creation failed:", err);
    }

    // Email notification (fail gracefully)
    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      const notifyEmails = process.env.LEAD_NOTIFY_EMAILS?.split(",") || [];
      if (resendApiKey && notifyEmails.length > 0) {
        const { sendCalculatorLeadNotification } = await import("@/lib/forms");
        await sendCalculatorLeadNotification({ resendApiKey, to: notifyEmails, lead });
      }
    } catch (err) {
      console.error("Email notification failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 },
    );
  }
}
