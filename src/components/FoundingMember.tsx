export default function FoundingMember() {
  return (
    <section id="roi" className="relative bg-cream py-28">
      <div className="noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          The Math
        </p>
        <h2 className="text-3xl font-bold text-charcoal sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          Let&apos;s Talk About ROI for One Second
        </h2>

        <div className="mt-8 space-y-6 text-[17px] leading-[1.8] text-charcoal/70">
          <p>
            At $397/month, you&apos;re paying{" "}
            <span className="font-medium text-charcoal">under $5,000 for the entire year.</span>
          </p>

          <p>
            What&apos;s the average project value for your business? $10,000?
            $25,000? $50,000 or more?
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { project: "Kitchen Remodel", value: "$25K+" },
            { project: "Home Addition", value: "$50K+" },
            { project: "Bathroom Reno", value: "$15K+" },
          ].map((item, i) => (
            <div key={i} className="border border-charcoal/10 rounded-lg p-5 text-center">
              <p className="text-2xl font-bold text-copper" style={{ fontFamily: "var(--font-clash)" }}>{item.value}</p>
              <p className="mt-1 text-[13px] tracking-wider text-charcoal/50">{item.project}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-l-3 border-copper/40 bg-white rounded-r-lg p-8">
          <p className="text-[17px] leading-[1.8] text-charcoal/80">
            <span className="font-medium text-charcoal">One job covers the entire year</span> —
            and the leads keep coming every month after that.
          </p>
        </div>

        <div className="section-rule my-14" />

        <h3 className="text-2xl font-semibold text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
          Compare That to What You&apos;re Spending Now
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="border border-red-200 rounded-lg p-6 bg-red-50/50">
            <h4 className="font-medium text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
              Angi / HomeAdvisor / Thumbtack
            </h4>
            <div className="mt-4 space-y-3 text-[15px] text-charcoal/65">
              <p>$1,000–$3,000+ per month</p>
              <p>Leads you don&apos;t own</p>
              <p>Shared with 4-5 competitors</p>
              <p>Disappear when you stop paying</p>
            </div>
          </div>

          <div className="border border-copper/30 rounded-lg p-6 bg-copper/5">
            <h4 className="font-medium text-copper" style={{ fontFamily: "var(--font-clash)" }}>
              SEO with AutoBoss
            </h4>
            <div className="mt-4 space-y-3 text-[15px] text-charcoal/80">
              <p>$397/month</p>
              <p>Leads you own forever</p>
              <p>Go into YOUR CRM</p>
              <p>Build a customer database you keep</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border border-charcoal/10 rounded-lg p-8 text-center">
          <p className="text-xl font-medium text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
            That&apos;s the difference between{" "}
            <span className="text-charcoal/40">renting</span> and{" "}
            <span className="text-copper">owning.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
