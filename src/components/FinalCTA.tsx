export default function FinalCTA() {
  return (
    <section id="apply" className="relative overflow-hidden bg-charcoal-dark py-28">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/success.jpg" alt="" className="h-full w-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-charcoal-dark/85" />
      </div>
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          Let&apos;s Go
        </p>
        <h2 className="text-3xl font-bold text-cream sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-clash)" }}>
          Here&apos;s How to Get Started
        </h2>

        <div className="mx-auto mt-8 max-w-lg space-y-5 text-[17px] leading-[1.8] text-stone-light">
          <p>
            If you&apos;re ready to stop renting leads and start owning them...
          </p>
          <p>
            If you&apos;re ready to show up at the top of Google when someone in
            your area searches for a contractor...
          </p>
          <p>
            If you&apos;re ready for high-intent customers calling{" "}
            <span className="font-medium text-cream">YOU</span> instead of your
            competitors...
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-md border border-cream/10 rounded-lg p-8 text-left">
          <h3 className="text-center text-lg font-semibold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
            Fill Out the Application Below
          </h3>
          <p className="mt-3 text-center text-[14px] text-stone">
            I&apos;ll personally review every application and reach out to
            qualified contractors within 24 hours.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-cream mb-1.5">Full Name</label>
              <input
                type="text"
                className="w-full rounded-sm border border-cream/15 bg-charcoal/50 px-4 py-3 text-[15px] text-cream placeholder:text-stone/50 focus:border-copper focus:outline-none"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-cream mb-1.5">Business Name</label>
              <input
                type="text"
                className="w-full rounded-sm border border-cream/15 bg-charcoal/50 px-4 py-3 text-[15px] text-cream placeholder:text-stone/50 focus:border-copper focus:outline-none"
                placeholder="Smith General Contracting"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-cream mb-1.5">Email</label>
              <input
                type="email"
                className="w-full rounded-sm border border-cream/15 bg-charcoal/50 px-4 py-3 text-[15px] text-cream placeholder:text-stone/50 focus:border-copper focus:outline-none"
                placeholder="john@smithgc.com"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-cream mb-1.5">Phone</label>
              <input
                type="tel"
                className="w-full rounded-sm border border-cream/15 bg-charcoal/50 px-4 py-3 text-[15px] text-cream placeholder:text-stone/50 focus:border-copper focus:outline-none"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-cream mb-1.5">City / Market</label>
              <input
                type="text"
                className="w-full rounded-sm border border-cream/15 bg-charcoal/50 px-4 py-3 text-[15px] text-cream placeholder:text-stone/50 focus:border-copper focus:outline-none"
                placeholder="Austin, TX"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-cream mb-1.5">Annual Revenue</label>
              <select className="w-full rounded-sm border border-cream/15 bg-charcoal/50 px-4 py-3 text-[15px] text-cream focus:border-copper focus:outline-none">
                <option value="">Select range...</option>
                <option value="250-500">$250K – $500K</option>
                <option value="500-1m">$500K – $1M</option>
                <option value="1m-2m">$1M – $2M</option>
                <option value="2m+">$2M+</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-sm bg-copper px-8 py-4 text-[16px] font-medium text-white transition-colors hover:bg-copper-dark"
            >
              Submit Application
            </button>
          </div>

          <p className="mt-4 text-center text-[13px] text-stone/60">
            No commitment. No spam. Just a conversation about your market.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-md space-y-4 text-[15px] text-stone-light">
          <p>
            We&apos;ll talk about your specific market, your goals, and map out
            exactly how we get you to the top.
          </p>
          <p>
            You&apos;re committing to 90 days. That&apos;s how long the
            guarantee runs.
          </p>
          <p className="font-medium text-cream">
            But if we don&apos;t hit top 3 by then — I keep working until we do,
            at no extra cost to you.
          </p>
          <p className="text-copper font-medium">
            You have nothing to lose and a pipeline full of customers to gain.
          </p>
          <p className="text-lg font-medium text-cream" style={{ fontFamily: "var(--font-clash)" }}>
            Let&apos;s get you the leads you deserve.
          </p>
        </div>
      </div>
    </section>
  );
}
