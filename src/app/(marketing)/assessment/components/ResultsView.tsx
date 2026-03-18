"use client";

import { CAT_MAX, GAP_COPY, type Tier } from "./questions";

interface ResultsViewProps {
  totalScore: number;
  categoryScores: { leads: number; jobs: number; money: number; systems: number };
  tier: Tier;
}

const categoryLabels: Record<string, string> = {
  leads: "Leads",
  jobs: "Jobs",
  money: "Money",
  systems: "Systems",
};

function CategoryBar({ cat, score }: { cat: string; score: number }) {
  const max = CAT_MAX[cat];
  const pct = Math.round((score / max) * 100);
  const isWeak = pct < 50;

  return (
    <div className="flex items-center gap-3">
      <span className="w-20 shrink-0 text-[13px] font-semibold text-cream">
        {categoryLabels[cat]}
      </span>
      <div className="flex-1 h-1.5 rounded-full bg-charcoal-light">
        <div
          className={`h-1.5 rounded-full transition-all duration-1000 ease-out ${isWeak ? "bg-stone" : "bg-copper"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`w-10 text-right text-[13px] font-semibold ${isWeak ? "text-stone" : "text-copper"}`}>
        {pct}%
      </span>
    </div>
  );
}

export function ResultsView({ totalScore, categoryScores, tier }: ResultsViewProps) {
  const cats = ["leads", "jobs", "money", "systems"] as const;
  const weakCats = cats.filter((c) => Math.round((categoryScores[c] / CAT_MAX[c]) * 100) < 50);

  return (
    <div className="space-y-8">
      {/* Score display */}
      <div className="card rounded-lg p-8 text-center">
        <p className="text-[12px] uppercase tracking-[0.2em] text-copper mb-4">
          Your Score
        </p>
        <div className="relative inline-block">
          <span
            className="text-[80px] font-bold leading-none text-cream sm:text-[96px]"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            {totalScore}
          </span>
          <span className="text-[28px] text-stone ml-1" style={{ fontFamily: "var(--font-clash)" }}>
            / 100
          </span>
        </div>
        <h3
          className="mt-4 text-2xl font-semibold text-copper"
          style={{ fontFamily: "var(--font-clash)" }}
        >
          {tier.label}
        </h3>
        <p className="mt-3 max-w-md mx-auto text-[15px] leading-[1.8] text-stone-light">
          {tier.desc}
        </p>
      </div>

      {/* Category breakdown */}
      <div className="card rounded-lg p-8 space-y-4">
        <p className="text-[12px] uppercase tracking-[0.2em] text-stone mb-2">
          Score by area
        </p>
        {cats.map((c) => (
          <CategoryBar key={c} cat={c} score={categoryScores[c]} />
        ))}
      </div>

      {/* Gaps */}
      {weakCats.length > 0 && (
        <div className="card rounded-lg p-8 border-l-[3px] border-l-copper">
          <h4
            className="text-lg font-semibold text-cream mb-6"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            Where You&apos;re Stuck
          </h4>
          <div className="space-y-6">
            {weakCats.map((c) => (
              <div key={c}>
                <h5 className="text-[14px] font-semibold text-copper mb-1">
                  {GAP_COPY[c].title}
                </h5>
                <p className="text-[14px] leading-[1.8] text-stone-light">
                  {GAP_COPY[c].text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fixes */}
      {weakCats.length > 0 && (
        <div className="card rounded-lg p-8">
          <h4
            className="text-lg font-semibold text-cream mb-6"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            Here&apos;s What the Fix Looks Like
          </h4>
          <div className="space-y-6">
            {weakCats.map((c) => (
              <div key={c}>
                <h5 className="text-[14px] font-semibold text-copper mb-1">
                  {GAP_COPY[c].title}
                </h5>
                <p className="text-[14px] leading-[1.8] text-stone-light">
                  {GAP_COPY[c].fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next step */}
      <div className="card rounded-lg p-8">
        <h4
          className="text-lg font-semibold text-cream mb-3"
          style={{ fontFamily: "var(--font-clash)" }}
        >
          {tier.nextTitle}
        </h4>
        <p className="text-[15px] leading-[1.8] text-stone-light">
          {tier.nextText}
        </p>
      </div>

      {/* CTAs */}
      <div className="text-center space-y-4">
        <a
          href="/book"
          className="inline-flex items-center gap-2 rounded-sm bg-copper px-8 py-4 text-[16px] font-medium text-white transition-colors hover:bg-copper-dark"
        >
          Book Your Founding Member Consultation
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <div>
          <a href="/calculator" className="text-[14px] text-copper hover:text-copper-light transition-colors">
            See how much revenue you&apos;re missing with the SEO Calculator &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
