"use client";

import { useState } from "react";

interface LeadCaptureFormProps {
  cities: string[];
  state: string;
  estimatedRevenue: number;
}

export function LeadCaptureForm({ cities, state, estimatedRevenue }: LeadCaptureFormProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name || !company || !email || !phone) { setError("Please fill in all fields."); return; }

    setLoading(true);
    try {
      const response = await fetch("/api/calculator/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, cities, state, estimatedRevenue }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 rounded-lg border border-copper/20 bg-copper/[0.05]">
        <p className="text-copper text-3xl mb-4">&#10003;</p>
        <h3 className="text-2xl font-bold text-cream mb-2" style={{ fontFamily: "var(--font-clash)" }}>
          We&apos;ll Be In Touch Shortly
        </h3>
        <p className="text-stone-light max-w-md mx-auto">
          We&apos;re putting together your custom SEO roadmap for {cities.join(", ")}, {state}.
          Expect a call within 1 business hour.
        </p>
      </div>
    );
  }

  return (
    <div className="card rounded-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-cream mb-2" style={{ fontFamily: "var(--font-clash)" }}>
          Want the Full Breakdown With a Custom Action Plan?
        </h3>
        <p className="text-stone-light max-w-lg mx-auto text-[15px]">
          We&apos;ll show you exactly which keywords to target first, what your
          competitors are doing right, and the plan to start capturing these leads.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        {[
          { value: name, set: setName, placeholder: "Your Name", type: "text" },
          { value: company, set: setCompany, placeholder: "Business Name", type: "text" },
          { value: email, set: setEmail, placeholder: "Email Address", type: "email" },
          { value: phone, set: setPhone, placeholder: "Phone Number", type: "tel" },
        ].map((field) => (
          <input
            key={field.placeholder}
            type={field.type}
            value={field.value}
            onChange={(e) => field.set(e.target.value)}
            placeholder={field.placeholder}
            className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition"
          />
        ))}

        {error && <p className="text-red-400 text-[14px]">{error}</p>}

        <button
          type="submit" disabled={loading}
          className="w-full rounded-sm bg-copper px-6 py-4 text-[16px] font-medium text-white hover:bg-copper-dark disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? "Submitting..." : "Get My Free SEO Roadmap"}
        </button>

        <p className="text-stone text-[12px] text-center">
          No obligation. No credit card. Just data.
        </p>
      </form>
    </div>
  );
}
