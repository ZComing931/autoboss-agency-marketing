export default function Guarantee() {
  return (
    <section id="guarantee" className="relative bg-cream py-28">
      <div className="noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="border border-charcoal/10 rounded-lg p-10 sm:p-14">
          {/* Shield */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-copper/30">
            <svg className="h-8 w-8 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>

          <h2 className="text-center text-3xl font-bold text-charcoal sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
            The AutoBoss Guarantee
          </h2>
          <p className="mx-auto mt-3 text-center text-lg text-charcoal/60">
            Your Business Runs Smoother in 90 Days — Or We Work Until It Does. Free.
          </p>

          {/* Deliverables */}
          <div className="mt-10 space-y-4">
            <p className="text-[13px] uppercase tracking-[0.15em] text-copper">In 90 days, your business will have:</p>
            {[
              { label: "Predictable leads", desc: "Ranked #1 on Google Maps in your market, visible in AI search, and showing up everywhere homeowners look" },
              { label: "Real systems", desc: "Complete ClickUp operating system with SOPs, scorecards, and playbooks so your business runs without you" },
              { label: "OTTO handling the busywork", desc: "7 AI agents protecting your margins, analyzing bids, forecasting problems, and automating the repetitive work you hate" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                <p className="text-[15px] leading-[1.8] text-charcoal/70">
                  <span className="font-medium text-charcoal">{item.label}</span> — {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-lg font-medium text-charcoal">
            If we don&apos;t deliver all three in 90 days, we keep working with you until we do.{" "}
            <span className="text-copper">At no extra cost.</span>
          </p>

          <div className="section-rule my-10" />

          {/* Why we can guarantee */}
          <h3 className="text-lg font-semibold text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
            Why We Can Make This Guarantee:
          </h3>
          <p className="mt-3 text-[15px] leading-[1.8] text-charcoal/70">
            Because we&apos;re not selling you a course or handing you a template and wishing you luck.
            We&apos;re <span className="font-medium text-charcoal">building the entire system for you.</span>{" "}
            We set up ClickUp and write your SOPs. We optimize your Google Business Profile and get you ranked.
            We deploy OTTO and train your team to use it.
          </p>

          <div className="section-rule my-10" />

          {/* Risk vs Reward */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-[13px] uppercase tracking-[0.15em] text-charcoal/40">What you risk:</h4>
              {["Zero financial risk", "Zero time risk", "Zero tech risk"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <span className="mt-1.5 text-charcoal/30">&mdash;</span>
                  <p className="text-[14px] text-charcoal/60">{item}</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="mb-4 text-[13px] uppercase tracking-[0.15em] text-copper">What you get:</h4>
              {[
                "Predictable leads every month",
                "Systems that run without you",
                "10–15 hours back in your week",
                "A 2-week vacation without chaos",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  <p className="text-[14px] text-charcoal/70">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 grid max-w-sm gap-4 sm:grid-cols-3">
            {[
              { number: "90", label: "Day timeline" },
              { number: "3", label: "Systems installed" },
              { number: "0", label: "Risk to you" },
            ].map((stat, i) => (
              <div key={i} className="border border-charcoal/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-copper" style={{ fontFamily: "var(--font-clash)" }}>{stat.number}</p>
                <p className="text-[12px] tracking-wider text-charcoal/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
