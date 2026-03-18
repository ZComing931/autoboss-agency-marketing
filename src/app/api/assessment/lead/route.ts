import { NextResponse } from "next/server";
import { assessmentLeadSchema } from "@/lib/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = assessmentLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const lead = parsed.data;
    const cats = lead.categoryScores;

    try {
      const listId = process.env.CLICKUP_LEADS_LIST_ID;
      if (listId && process.env.CLICKUP_API_TOKEN) {
        const { ClickUpClient } = await import("@/lib/clickup");
        const clickup = new ClickUpClient();
        await clickup.createTask(listId, {
          name: `${lead.company} — Assessment: ${lead.tier} (Score: ${lead.score}/100)`,
          description: [
            `## Assessment Lead`,
            ``,
            `**Name:** ${lead.name}`,
            `**Email:** ${lead.email}`,
            `**Company:** ${lead.company}`,
            ``,
            `**Vacation Readiness Score:** ${lead.score}/100`,
            `**Tier:** ${lead.tier}`,
            ``,
            `**Category Breakdown:**`,
            `- Leads: ${cats.leads}/20`,
            `- Jobs: ${cats.jobs}/30`,
            `- Money: ${cats.money}/20`,
            `- Systems: ${cats.systems}/30`,
          ].join("\n"),
          priority: 2,
          tags: ["assessment-lead"],
        });
      }
    } catch (err) {
      console.error("ClickUp task creation failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Assessment lead error:", error);
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }
}
