import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools for Contractors — AutoBoss OS",
  description: "Free tools to see where your contracting business actually stands. SEO Revenue Calculator and Business Assessment.",
};

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen bg-charcoal pt-20">
      <div className="noise absolute inset-0" />

      <section className="relative mx-auto max-w-3xl px-6 pt-16 pb-20">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          Free Tools
        </p>
        <h1
          className="text-3xl font-bold text-cream sm:text-4xl"
          style={{ fontFamily: "var(--font-clash)" }}
        >
          Free Tools for General Contractors
        </h1>
        <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-stone-light">
          No email required to start. No sales pitch. Just tools that show you
          exactly where your business stands.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {/* Assessment */}
          <a
            href="/assessment"
            className="card group rounded-lg p-8 transition-all hover:border-copper/20"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-copper/30">
              <svg className="h-6 w-6 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h2
              className="text-xl font-semibold text-cream group-hover:text-copper transition-colors"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              Business Assessment
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-stone-light">
              Find out if your business can run without you. Get your Vacation
              Readiness Score and discover what&apos;s holding you back.
            </p>
            <p className="mt-4 text-[14px] text-copper font-medium">
              12 questions &middot; 3 minutes &rarr;
            </p>
          </a>

          {/* Calculator */}
          <a
            href="/calculator"
            className="card group rounded-lg p-8 transition-all hover:border-copper/20"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-copper/30">
              <svg className="h-6 w-6 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            </div>
            <h2
              className="text-xl font-semibold text-cream group-hover:text-copper transition-colors"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              SEO Revenue Calculator
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-stone-light">
              See how much revenue Google is sending your competitors instead of
              you. Powered by real-time search data.
            </p>
            <p className="mt-4 text-[14px] text-copper font-medium">
              Real data &middot; 10 seconds &rarr;
            </p>
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-stone-light text-[16px]">
            Want the full system installed in your business?
          </p>
          <a
            href="/#founding"
            className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-copper hover:text-copper-light transition-colors"
          >
            See the Founding Member Offer
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
