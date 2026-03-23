export default function Differentiation() {
  return (
    <section className="relative bg-cream py-28">
      <div className="noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          Case Study
        </p>
        <h2 className="text-3xl font-bold text-charcoal sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          What Happens When This Works
        </h2>

        <div className="mt-8 space-y-6 text-[17px] leading-[1.8] text-charcoal/70">
          <p>
            I worked with a client who was completely invisible online — buried
            on page 3 of Google, getting almost zero traffic, watching business
            dry up.
          </p>
          <p className="font-medium text-charcoal">
            Within 60 days, he was #1 on Google for his target keywords.
          </p>
          <p>Here&apos;s what happened after that:</p>
        </div>

        <div className="mt-8 space-y-4">
          {[
            "He doubled his revenue",
            "He expanded from a cramped single-bay space to a full two-bay facility with a complete studio",
            "He invested $20,000 back into his business with confidence",
            "He went from barely scraping by to genuinely thriving",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
              <p className="text-[16px] leading-[1.8] text-charcoal/80 font-medium">{item}</p>
            </div>
          ))}
        </div>

        <blockquote className="my-10 border-l-3 border-copper pl-6 text-xl italic leading-relaxed text-charcoal" style={{ fontFamily: "var(--font-source, Georgia, serif)" }}>
          All because people could finally find him when they searched.
        </blockquote>

        <div className="border border-charcoal/10 rounded-lg p-8 text-center sm:p-10">
          <p className="text-[17px] leading-[1.8] text-charcoal/70">
            One ranking change. Completely different business.
          </p>
          <p className="mt-4 text-xl font-medium text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
            Now imagine what that kind of visibility could do for a general
            contractor doing{" "}
            <span className="text-copper">$500k, $1M, or $2M a year.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
