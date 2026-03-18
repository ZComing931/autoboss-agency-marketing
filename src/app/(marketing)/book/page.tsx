"use client";

import { useState } from "react";

export default function BookPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name || !company || !email || !phone) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, message: message || undefined }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email zach@autoboss.io directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="relative min-h-screen bg-charcoal pt-20">
        <div className="noise absolute inset-0" />
        <div className="relative mx-auto max-w-xl px-6 pt-24 pb-20 text-center">
          <div className="text-copper text-4xl mb-6">&#10003;</div>
          <h1
            className="text-3xl font-bold text-cream"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            We&apos;ll Be In Touch Shortly
          </h1>
          <p className="mt-4 text-[17px] text-stone-light leading-[1.8]">
            Thanks, {name}. We received your request for {company} and
            will reach out within 1 business day to schedule your consultation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="/" className="text-[14px] text-copper hover:text-copper-light transition-colors">
              &larr; Back to homepage
            </a>
            <span className="hidden sm:inline text-stone/30">|</span>
            <a href="/assessment" className="text-[14px] text-copper hover:text-copper-light transition-colors">
              Take the free assessment while you wait &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-charcoal pt-20">
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-xl px-6 pt-16 pb-20">
        {/* Hero */}
        <div className="text-center mb-12">
          <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
            Founding Member Consultation
          </p>
          <h1
            className="text-3xl font-bold text-cream sm:text-4xl"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            Let&apos;s Talk About Your Business
          </h1>
          <p className="mt-4 text-[17px] text-stone-light leading-[1.8]">
            Fill out the form below and we&apos;ll reach out within 1 business
            day to schedule your 90-day consultation call.
          </p>
        </div>

        {/* Form */}
        <div className="card rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-[14px] font-medium text-cream mb-1.5">
                Your Name *
              </label>
              <input
                id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="John Smith"
                className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-[14px] font-medium text-cream mb-1.5">
                Business Name *
              </label>
              <input
                id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)}
                placeholder="Smith Home Remodeling"
                className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[14px] font-medium text-cream mb-1.5">
                Email *
              </label>
              <input
                id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="john@smithremodeling.com"
                className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[14px] font-medium text-cream mb-1.5">
                Phone *
              </label>
              <input
                id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                placeholder="(303) 555-1234"
                className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[14px] font-medium text-cream mb-1.5">
                Anything you want us to know? <span className="text-stone">(optional)</span>
              </label>
              <textarea
                id="message" value={message} onChange={(e) => setMessage(e.target.value)}
                rows={3} placeholder="Tell us about your business, biggest challenge, etc."
                className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition resize-none"
              />
            </div>

            {error && <p className="text-red-400 text-[14px]">{error}</p>}

            <button
              type="submit" disabled={loading}
              className="w-full rounded-sm bg-copper px-6 py-4 text-[16px] font-medium text-white hover:bg-copper-dark disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "Submitting..." : "Request Your Consultation"}
            </button>

            <p className="text-stone text-[12px] text-center">
              No obligation. No sales pitch. Just a conversation about your business.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
