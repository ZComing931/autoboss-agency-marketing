export default function Diagnostic() {
  return (
    <section className="relative bg-charcoal py-28">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          The Opportunity
        </p>
        <h2 className="text-3xl font-bold text-cream sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          Why General Contractors{" "}
          <span className="text-copper">Win at SEO</span>
          <br />
          (When They Actually Try)
        </h2>

        <div className="mt-8 space-y-6 text-[17px] leading-[1.8] text-stone-light">
          <p>
            Here&apos;s something most contractors don&apos;t know:{" "}
            <span className="font-medium text-cream">
              your competition&apos;s websites are terrible.
            </span>
          </p>
          <p>
            Not exaggerating. Most general contractor websites are slow,
            outdated, and nearly invisible to search engines. Google can barely
            read them. They&apos;re not optimized for local search. They&apos;re
            not showing up when people use AI tools like ChatGPT or Perplexity
            to find contractors. They&apos;re essentially non-existent online.
          </p>

          <blockquote className="my-10 border-l-3 border-copper pl-6 text-xl italic leading-relaxed text-cream" style={{ fontFamily: "var(--font-source, Georgia, serif)" }}>
            That&apos;s your opportunity.
          </blockquote>

          <p>
            With the right website structure, technical optimization, and local
            SEO strategy, you can{" "}
            <span className="font-medium text-cream">
              leapfrog every competitor in your market
            </span>{" "}
            — even the ones who&apos;ve been around for 30 years — because none
            of them are doing this.
          </p>

          <p>
            And here&apos;s what makes it even better: when someone searches for
            a general contractor in your area, they&apos;re not browsing.
            They&apos;re not comparing 10 options.{" "}
            <span className="font-medium text-cream">
              They need work done, they have a budget, and they&apos;re looking
              for someone they can trust.
            </span>
          </p>

          <p className="text-lg font-medium text-copper">
            When you show up at the top of Google? You&apos;re that person.
          </p>
        </div>
      </div>
    </section>
  );
}
