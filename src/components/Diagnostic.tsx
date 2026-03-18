export default function Diagnostic() {
  return (
    <section id="diagnostic" className="relative bg-cream py-28">
      <div className="noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-6">
        {/* Header */}
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          But first
        </p>
        <h2 className="text-3xl font-bold text-charcoal sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          What&apos;s Actually Broken in Your Business?
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-charcoal/70">
          Most contractors think they have one problem. Usually it&apos;s
          &ldquo;I need more leads.&rdquo; But here&apos;s the truth:{" "}
          <span className="font-medium text-charcoal">
            you might be busy as hell and still broke at the end of the month.
          </span>
        </p>

        {/* Two paths */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="card-light rounded-lg p-8">
            <h3 className="text-lg font-semibold text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
              Busy with jobs but barely profitable?
            </h3>
            <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-charcoal/65">
              <p>
                You&apos;re running three jobs at once. The crew is slammed.
                You&apos;re working 60-hour weeks.
              </p>
              <p>
                But when you check the bank account at the end of the month...
                there&apos;s barely anything there.
              </p>
              <p>
                You <em>thought</em> that kitchen remodel made 30%. Turns out it
                was 12%.
              </p>
            </div>
            <p className="mt-6 text-[14px] font-medium text-copper">
              You don&apos;t have a lead problem. You have a systems and intelligence problem.
            </p>
            <a
              href="/assessment"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-copper transition-colors hover:text-copper-dark"
            >
              Take the Vacation Readiness Test
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="card-light rounded-lg p-8">
            <h3 className="text-lg font-semibold text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
              Profitable but the phone doesn&apos;t ring enough?
            </h3>
            <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-charcoal/65">
              <p>
                When you land a job, you crush it. Good margins. Happy clients.
                Quality work.
              </p>
              <p>
                But the problem is{" "}
                <span className="text-charcoal">you don&apos;t have enough of them.</span>
              </p>
              <p>
                You&apos;re relying on referrals. Maybe some Facebook posts. An
                Angi subscription that sends you tire-kickers.
              </p>
            </div>
            <p className="mt-6 text-[14px] font-medium text-copper">
              You don&apos;t have a systems problem. You have a visibility problem.
            </p>
            <a
              href="/calculator"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-copper transition-colors hover:text-copper-dark"
            >
              Take the Growth Gap Calculator
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* You probably need both */}
        <div className="mt-14 border border-charcoal/10 rounded-lg p-8 text-center sm:p-10">
          <h3 className="text-xl font-semibold text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
            Here&apos;s the Real Answer: You Probably Need Both.
          </h3>
          <div className="mx-auto mt-5 max-w-lg space-y-3 text-[16px] leading-[1.8] text-charcoal/70">
            <p>
              If you&apos;re honest with yourself,{" "}
              <span className="font-medium text-charcoal">both</span> of these
              problems are strangling your business.
            </p>
            <ul className="space-y-2 text-left">
              {[
                "You need more leads AND better systems.",
                "You need to show up on Google AND know if your jobs are actually profitable.",
                "You need the phone to ring AND a business that doesn't fall apart when you take a week off.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/assessment"
              className="inline-flex items-center gap-2 rounded-sm bg-copper px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-copper-dark"
            >
              Take the Free Assessment
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#founding"
              className="inline-flex items-center rounded-sm border border-charcoal/15 px-7 py-3.5 text-[15px] font-medium text-charcoal transition-colors hover:border-charcoal/30"
            >
              Skip — Book a call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
