export default function FoundingMember() {
  return (
    <section id="founding" className="relative bg-charcoal py-28">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6">
        {/* Scarcity */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 border border-copper/30 rounded-sm px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-copper animate-pulse" />
            <span className="text-[13px] tracking-wide text-copper">
              Only 5 Founding Member Spots Available
            </span>
          </span>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-cream sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
            Founding Member Offer
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.8] text-stone-light">
            I&apos;m looking for{" "}
            <span className="text-cream">5 founding members</span>{" "}
            to go through the full 90-day program with me.
          </p>
        </div>

        {/* Pricing card */}
        <div className="mt-14 border border-cream/10 rounded-lg p-10 sm:p-14">
          <h3 className="text-lg font-semibold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
            Why Only 5?
          </h3>
          <p className="mt-3 text-[15px] leading-[1.8] text-stone-light">
            Because I&apos;m personally doing everything — growth audits,
            ClickUp setup, SOP writing, OTTO deployment, and weekly strategy
            calls. I can only give that level of white-glove attention to{" "}
            <span className="text-cream">5 contractors at a time.</span>
          </p>

          {/* Price */}
          <div className="mt-10 flex flex-wrap items-baseline justify-center gap-4 border-y border-cream/10 py-8">
            <span className="text-5xl font-bold text-copper" style={{ fontFamily: "var(--font-clash)" }}>$3,000</span>
            <span className="text-xl text-stone line-through">$5,997</span>
            <span className="border border-copper/30 rounded-sm px-3 py-1 text-[13px] text-copper">
              Save $2,997
            </span>
          </div>

          {/* Included */}
          <div className="mt-10">
            <p className="mb-6 text-[13px] uppercase tracking-[0.15em] text-copper">
              What founding members get:
            </p>
            <div className="space-y-4">
              {[
                "AI Growth System — Ranked #1 on Google Maps, optimized for AI search, visible everywhere homeowners search",
                "Complete Operating System — Custom ClickUp workspace, SOPs for every role, weekly scorecards, playbook library",
                "OTTO — All 7 AI Agents: Bid Validator, Margin Intelligence, Job Performance Analyzer, Predictive Forecaster, Change Order Optimizer, Risk Monitor, Insights & Reporting",
                "Unlimited access to me during the first 4 weeks — We're building this together",
                "Weekly check-ins for weeks 5–12 — We watch the system work, fix issues, and optimize",
                "90-Day Guarantee — If your business isn't running smoother, I keep working until it does. Free.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  <p className="text-[15px] leading-[1.7] text-stone-light">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="my-10 h-px bg-cream/[0.06]" />

          {/* After 90 days */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
              After 90 Days: You Keep Everything
            </h4>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.8] text-stone-light">
              To keep OTTO running and maintain your systems, you can continue
              for <span className="text-cream">$997/month</span> (optional).
              No lock-in. The core system is yours.
            </p>
          </div>

          <div className="my-10 h-px bg-cream/[0.06]" />

          {/* Cost of inaction */}
          <div className="border-l-3 border-red-500/30 bg-red-500/[0.03] rounded-r-lg p-6">
            <h4 className="font-semibold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
              What Happens If You Do Nothing?
            </h4>
            <div className="mt-3 space-y-3 text-[14px] leading-[1.8] text-stone-light">
              <p>
                If you&apos;re missing even{" "}
                <span className="text-cream">10 qualified leads per month</span>{" "}
                because you&apos;re not ranked on Google, that&apos;s potentially{" "}
                <span className="text-cream">$135,000 in lost revenue</span>{" "}
                over 90 days.
              </p>
              <p className="font-medium text-copper">
                The $3,000 investment pays for itself with one extra job.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="/book"
              className="inline-flex items-center gap-2 rounded-sm bg-copper px-8 py-4 text-[16px] font-medium text-white transition-colors hover:bg-copper-dark"
            >
              Book Your Founding Member Consultation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="mt-4 text-[13px] text-stone">
              Only 5 spots. When they&apos;re gone, price goes to $5,997.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
