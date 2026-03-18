"use client";

import { useState } from "react";

interface EmailGateProps {
  scores: {
    totalScore: number;
    categoryScores: { leads: number; jobs: number; money: number; systems: number };
    tierLabel: string;
  };
  onSubmit: (lead: { name: string; email: string; company: string }) => void;
  onBack: () => void;
}

export function EmailGate({ scores, onSubmit, onBack }: EmailGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name || !email || !company) { setError("Please fill in all fields."); return; }

    setLoading(true);
    try {
      await fetch("/api/assessment/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          score: scores.totalScore,
          tier: scores.tierLabel,
          categoryScores: scores.categoryScores,
        }),
      });
    } catch {
      // Don't block results if API fails
    } finally {
      setLoading(false);
      onSubmit({ name, email, company });
    }
  }

  return (
    <div className="card rounded-lg p-8 sm:p-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-cream sm:text-3xl" style={{ fontFamily: "var(--font-clash)" }}>
          Your Results Are Ready
        </h2>
        <p className="mt-3 text-[16px] text-stone-light">
          Enter your info to see your Vacation Readiness Score and find out
          exactly where you&apos;re stuck.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name"
          className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"
          className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition" />
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Business Name"
          className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition" />
        {error && <p className="text-red-400 text-[14px]">{error}</p>}
        <button type="submit" disabled={loading}
          className="w-full rounded-sm bg-copper px-6 py-4 text-[16px] font-medium text-white hover:bg-copper-dark disabled:opacity-50 disabled:cursor-not-allowed transition">
          {loading ? "Loading..." : "See My Results"}
        </button>
        <p className="text-stone text-[12px] text-center">
          We&apos;ll never spam you. Just your results and one follow-up.
        </p>
      </form>

      <div className="mt-6 text-center">
        <button onClick={onBack} className="text-[14px] text-stone hover:text-cream transition-colors">
          &larr; Back to questions
        </button>
      </div>
    </div>
  );
}
