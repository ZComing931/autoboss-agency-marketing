import { NextResponse } from "next/server";
import { bookingLeadSchema } from "@/lib/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const lead = parsed.data;

    try {
      const listId = process.env.CLICKUP_LEADS_LIST_ID;
      if (listId && process.env.CLICKUP_API_TOKEN) {
        const { ClickUpClient } = await import("@/lib/clickup");
        const clickup = new ClickUpClient();
        await clickup.createTask(listId, {
          name: `${lead.company} — Consultation Request`,
          description: [
            `## Booking Lead`,
            ``,
            `**Name:** ${lead.name}`,
            `**Company:** ${lead.company}`,
            `**Email:** ${lead.email}`,
            `**Phone:** ${lead.phone}`,
            lead.message ? `**Message:** ${lead.message}` : "",
            ``,
            `---`,
            `*Submitted via autoboss.io booking form*`,
          ].filter(Boolean).join("\n"),
          priority: 1, // Urgent
          tags: ["booking-lead"],
        });
      }
    } catch (err) {
      console.error("ClickUp task creation failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking lead error:", error);
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }
}
