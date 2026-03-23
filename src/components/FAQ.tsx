export default function FAQ() {
  return (
    <section className="relative bg-cream py-28">
      <div className="noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          Is this you?
        </p>
        <h2 className="text-3xl font-bold text-charcoal sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          This Is For You If...
        </h2>

        <div className="mt-10 space-y-4">
          {[
            "You're an established general contractor doing at least $500k/year",
            "You're tired of paying for leads every month and getting nothing to show for it long-term",
            "You understand the value of marketing but don't have time to deal with it yourself",
            "You want to build a pipeline of high-quality leads that YOU own",
            "You're ready to dominate your local market online",
          ].map((item, i) => (
            <div key={i} className="card-light rounded-lg p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-copper text-lg">&#10003;</span>
                <p className="text-[16px] leading-[1.7] text-charcoal/80">{item}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-charcoal/10 rounded-lg p-8 text-center sm:p-10">
          <p className="text-xl font-medium text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
            If that&apos;s you, here&apos;s what to do next.
          </p>
          <a
            href="#apply"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-copper px-8 py-4 text-[15px] font-medium text-white transition-colors hover:bg-copper-dark"
          >
            Apply Now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
