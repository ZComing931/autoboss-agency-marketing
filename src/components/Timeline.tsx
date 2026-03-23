export default function Timeline() {
  return (
    <section className="relative bg-charcoal py-28">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          Why AutoBoss is different
        </p>
        <h2 className="text-3xl font-bold text-cream sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          What Makes This Different From Every Other SEO Agency
        </h2>

        <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-stone-light">
          <p>
            Most agencies will take your money, send you confusing reports, and
            tell you &ldquo;SEO takes time&rdquo; whenever you ask about results.
          </p>
          <p className="font-medium text-cream">That&apos;s not what this is.</p>
          <p>Here&apos;s what you&apos;re actually getting:</p>
        </div>

        <div className="mt-10 space-y-4">
          {[
            {
              label: "A clear timeline",
              value: "Top 3 in 90 days",
            },
            {
              label: "A real guarantee",
              value: "If we miss it, I work for free until we hit it",
            },
            {
              label: "An affordable price",
              value: "$397/month, not $3,000+",
            },
            {
              label: "Done-for-you execution",
              value: "You don't touch a thing",
            },
          ].map((item, i) => (
            <div key={i} className="card rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-[14px] font-medium text-copper" style={{ fontFamily: "var(--font-clash)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-medium text-cream">{item.label}</h3>
                  <p className="mt-1 text-[15px] text-stone-light">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-l-3 border-copper/30 bg-charcoal-light rounded-r-lg p-8">
          <p className="text-lg font-medium text-cream" style={{ fontFamily: "var(--font-clash)" }}>
            You&apos;re not paying for theory or reports.
          </p>
          <p className="mt-2 text-[16px] leading-[1.8] text-stone-light">
            You&apos;re paying for{" "}
            <span className="text-copper">rankings, leads, and revenue.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
