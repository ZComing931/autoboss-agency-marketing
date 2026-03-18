export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.jpg"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/70 to-charcoal" />
      </div>

      {/* Noise texture */}
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-3xl flex-col items-center justify-center px-6 text-center">
        {/* Eyebrow */}
        <p className="mb-6 text-[13px] uppercase tracking-[0.2em] text-copper">
          For contractors doing $250K–$2M
        </p>

        {/* Headline */}
        <h1
          className="text-4xl font-bold leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          style={{ fontFamily: "var(--font-clash)" }}
        >
          You&apos;re One Sick Day Away
          <br />
          From Losing Everything
        </h1>

        {/* Subhead */}
        <div className="mt-10 max-w-xl space-y-5 text-[17px] leading-[1.8] text-stone-light">
          <p>
            Your $500K contracting business isn&apos;t a business. It&apos;s a
            high-paying job that stops the second you do.
          </p>
          <p>
            What happens if you get hurt tomorrow? If you need surgery? If you
            just want to take your family to the beach for a week?
          </p>
          <p className="font-medium text-cream">
            Everything stops. The estimates. The follow-ups. The job
            coordination. The money.
          </p>
        </div>

        {/* Value prop */}
        <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-stone-light">
          <span className="font-medium text-cream">AutoBoss OS</span> is the
          operating system that turns overworked contractors into actual business
          owners — in 90 days.{" "}
          <span className="text-copper">#1 on Google Maps</span> in
          your market. Real systems that run without you.{" "}
          <span className="text-copper">A team of 7 AI agents</span>{" "}
          analyzing every bid, protecting your margins, and forecasting problems
          before they cost you money.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="/assessment"
            className="inline-flex items-center justify-center rounded-sm bg-copper px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-copper-dark"
          >
            Take the Free Assessment
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#founding"
            className="inline-flex items-center justify-center rounded-sm border border-cream/15 px-7 py-3.5 text-[15px] font-medium text-cream transition-colors hover:border-cream/30 hover:bg-cream/5"
          >
            Book a Call
          </a>
        </div>

        <div id="hero-end" className="mt-20" />
      </div>
    </section>
  );
}
