export default function Solution() {
  return (
    <section id="guarantee" className="relative bg-cream py-28">
      <div className="noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-6">
        {/* Guarantee */}
        <div className="border border-charcoal/10 rounded-lg p-10 sm:p-14">
          {/* Shield */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-copper/30">
            <svg className="h-8 w-8 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>

          <h2 className="text-center text-3xl font-bold text-charcoal sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
            Here&apos;s My Guarantee — And I Mean Every Word of It
          </h2>

          <div className="mx-auto mt-8 max-w-xl space-y-5 text-[17px] leading-[1.8] text-charcoal/70">
            <p className="text-center text-xl font-medium text-charcoal">
              I will get your business into the{" "}
              <span className="text-copper">top 3 on Google</span> — or rank you{" "}
              <span className="text-copper">#1</span> — within 90 days.
            </p>
            <p className="text-center">
              If I don&apos;t hit that goal, I keep working with you at no
              additional cost until we do.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-md gap-4 sm:grid-cols-3">
            {[
              { top: "No", bottom: "Games" },
              { top: "No", bottom: "Excuses" },
              { top: "No", bottom: '"SEO Takes Time"' },
            ].map((item, i) => (
              <div key={i} className="border border-charcoal/10 rounded-lg p-4 text-center">
                <p className="text-xl font-bold text-copper" style={{ fontFamily: "var(--font-clash)" }}>{item.top}</p>
                <p className="text-[13px] tracking-wider text-charcoal/50">{item.bottom}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-lg font-medium text-charcoal">
            Either you rank, or I keep working for free.{" "}
            <span className="text-copper">Simple as that.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
