"use client";

import { useState, useRef } from "react";
import type { CalculatorResult } from "@/lib/dataforseo";
import { CalculatorForm } from "./components/CalculatorForm";
import { ResultsDisplay } from "./components/ResultsDisplay";
import { LeadCaptureForm } from "./components/LeadCaptureForm";

export default function CalculatorPage() {
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  function handleResults(data: CalculatorResult) {
    setResult(data);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <div className="relative min-h-screen bg-charcoal pt-20">
      <div className="noise absolute inset-0" />

      {/* Hero */}
      <section className="relative mx-auto max-w-3xl px-6 pt-16 pb-12 text-center">
        <p className="mb-6 text-[13px] uppercase tracking-[0.2em] text-copper">
          Free SEO Revenue Calculator
        </p>
        <h1
          className="text-3xl font-bold text-cream sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-clash)" }}
        >
          How Much Revenue Is Google Sending Your Competitors Instead of You?
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.8] text-stone-light">
          Enter your services and the cities you serve. We&apos;ll pull real
          search data and show you the exact dollar amount you&apos;re leaving
          on the table every month.
        </p>
        <p className="mt-2 text-[13px] text-stone">
          Powered by real-time Google search data. Takes 10 seconds.
        </p>
      </section>

      {/* Calculator Form */}
      {!result && (
        <section className="relative mx-auto max-w-xl px-6 pb-20">
          <div className="card rounded-lg p-8">
            <CalculatorForm onResults={handleResults} />
          </div>
        </section>
      )}

      {/* Results */}
      {result && (
        <>
          <section ref={resultsRef} className="relative mx-auto max-w-2xl px-6 pb-12">
            <ResultsDisplay result={result} />
          </section>

          <section className="relative mx-auto max-w-2xl px-6 pb-20">
            <LeadCaptureForm
              cities={result.cities}
              state={result.state}
              estimatedRevenue={result.revenueByPosition.position1.revenue}
            />
          </section>

          <div className="relative pb-12 text-center">
            <button
              onClick={() => setResult(null)}
              className="text-stone hover:text-stone-light text-sm underline transition"
            >
              Try a different city or services
            </button>
          </div>
        </>
      )}

      {/* Bottom CTA */}
      <section className="relative border-t border-cream/[0.06] py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[17px] text-stone-light">
            Ready to own those leads instead of watching competitors get them?
          </p>
          <a
            href="/#apply"
            className="mt-4 inline-flex items-center gap-2 rounded-sm bg-copper px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-copper-dark"
          >
            Apply Now — $397/month
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
