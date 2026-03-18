export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal-dark py-28">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/success.jpg" alt="" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-charcoal-dark/80" />
      </div>
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold text-cream sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-clash)" }}>
          Stop Being the Bottleneck
          <br />
          in Your Own Business
        </h2>

        <div className="mx-auto mt-8 max-w-lg space-y-4 text-[17px] leading-[1.8] text-stone-light">
          <p>
            You built a $500K operation with your own two hands. You&apos;re good
            at what you do. Your clients love you. Your work is solid.
          </p>
          <p>But you&apos;re exhausted. Overwhelmed. Stuck.</p>
          <p className="font-medium text-cream">
            You don&apos;t need to work harder. You need a system.
          </p>
        </div>

        <p className="mt-8 text-[15px] text-stone">
          In 90 days, AutoBoss OS will give you:
        </p>

        <div className="mx-auto mt-6 inline-flex max-w-md flex-col items-start gap-3 text-left">
          {[
            "Predictable leads from Google, AI search, and everywhere homeowners look",
            "A complete operating system so your business runs without you",
            "7 AI agents protecting your margins and doing the work you hate",
            "The ability to take a 2-week vacation and come back to a business that's still running",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
              <p className="text-[15px] leading-[1.7] text-cream">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/book"
            className="inline-flex items-center gap-2 rounded-sm bg-copper px-8 py-4 text-[15px] font-medium text-white transition-colors hover:bg-copper-dark"
          >
            Book Your Founding Member Spot
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/assessment"
            className="inline-flex items-center rounded-sm border border-cream/15 px-8 py-4 text-[15px] font-medium text-cream transition-colors hover:border-cream/30"
          >
            Take the Free Assessment First
          </a>
        </div>
      </div>
    </section>
  );
}
