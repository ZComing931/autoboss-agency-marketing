const phases = [
  {
    timing: "Week 1",
    title: "Onboarding & Audit",
    items: [
      "You pay the $3,000 founding member fee",
      "Within 24 hours, you receive onboarding forms",
      "We audit your digital presence (Google, AI search, Facebook, competitors)",
      "You sign up for ClickUp (~$12-19/user/month) and add us to your account",
    ],
    youDo: "Fill out onboarding forms, set up ClickUp, schedule your kickoff call",
  },
  {
    timing: "Weeks 2–4",
    title: "Intensive Build Phase",
    items: [
      "We build your complete ClickUp operating system from scratch",
      "We write custom SOPs for every role",
      "We optimize your Google Business Profile and start local SEO",
      "We deploy OTTO and configure all 7 agents",
    ],
    youDo: "Collaborate with us (unlimited access), answer questions about your processes",
    result: "By end of week 4, you have a complete operating system and OTTO is running.",
  },
  {
    timing: "Weeks 5–8",
    title: "Launch & Optimization",
    items: [
      "AI Growth System is live and generating leads",
      "OTTO is analyzing bids, tracking margins, and running scorecards",
      "We train your team on the new systems",
      "Weekly check-in calls to review and refine",
    ],
    youDo: "Use the systems daily, report friction, start delegating with your SOPs",
    result: "Lead flow increasing, rankings improving, team operating independently.",
  },
  {
    timing: "Weeks 9–12",
    title: "Autonomy & Handoff",
    items: [
      "Your business is running on the new operating system",
      "We fine-tune OTTO and your SEO strategy",
      "You're stepping away more without things falling apart",
      "Final optimization and troubleshooting",
    ],
    youDo: "Run your business. Take time off to test it.",
    result: "By day 90, you can take a 2-week vacation and your business runs smoothly.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative bg-cream py-28">
      <div className="noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          What happens when you join
        </p>
        <h2 className="text-3xl font-bold text-charcoal sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          Your 90-Day Journey
        </h2>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-px bg-copper/20" />

          <div className="space-y-10">
            {phases.map((phase, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Marker */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-copper/30 bg-cream">
                  <span className="text-[14px] font-medium text-copper" style={{ fontFamily: "var(--font-clash)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="card-light flex-1 rounded-lg p-6">
                  <p className="text-[13px] font-medium tracking-wider text-copper">
                    {phase.timing}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
                    {phase.title}
                  </h3>

                  <div className="mt-4 space-y-2">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-charcoal/30" />
                        <p className="text-[14px] leading-[1.7] text-charcoal/65">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded bg-charcoal/[0.03] p-3">
                    <p className="text-[12px] uppercase tracking-wider text-charcoal/40">What you do:</p>
                    <p className="mt-1 text-[14px] text-charcoal/65">{phase.youDo}</p>
                  </div>

                  {phase.result && (
                    <p className="mt-4 text-[14px] font-medium text-copper">{phase.result}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border border-charcoal/10 rounded-lg p-6 text-center">
          <p className="text-[15px] text-charcoal/70">
            <span className="font-medium text-charcoal">After Day 90:</span>{" "}
            You own everything. $997/month to keep OTTO running is optional. No lock-in.
          </p>
        </div>
      </div>
    </section>
  );
}
