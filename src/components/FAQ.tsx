"use client";

import { useState } from "react";

const faqs = [
  { q: "I'm not tech-savvy. Will this work for me?", a: "Yes. We build everything for you. You don't need to know how ClickUp works or how AI agents function. We set it up, train your team, and make it simple to use. If you can use a smartphone, you can use this system." },
  { q: "How much time does this take from me?", a: "Weeks 1-4: Expect to spend 3-5 hours per week collaborating with us (answering questions, reviewing systems, kickoff calls). Weeks 5-12: 1-hour weekly check-in calls, plus using the systems in your daily workflow. We do the heavy lifting. You just show up and give input." },
  { q: "What if my market is too competitive for SEO?", a: "That's exactly why we use the AI Growth System — it's not just traditional SEO. We optimize for Google Maps, AI search (ChatGPT, Perplexity), and Facebook. We find the gaps your competitors aren't covering and dominate there. Plus, OTTO gives you an operational edge they don't have." },
  { q: "Do I need to hire people first?", a: "No. The system works whether you have 1 employee or 10. We customize it for your current team structure. As you grow and hire, the SOPs and systems make training new people 10x easier." },
  { q: "What happens if I don't hit #1 on Google Maps in 90 days?", a: "We keep working until you do. That's the guarantee. Some markets take longer than others, but we don't stop at day 90 if the job isn't done." },
  { q: "Can I cancel anytime?", a: "The 90-day program is a one-time $3,000 payment, but you're protected by the guarantee — if we don't deliver, we keep working for free. After 90 days, the $997/month continuation is optional and you can cancel anytime." },
  { q: "Why should I trust you? You've never run a contracting business.", a: "Fair question. I'm not a contractor. I'm a systems and AI specialist. What I bring is expertise you can't get from a contractor-turned-consultant. I know how to rank businesses on Google, optimize for AI search, and deploy AI agents that actually work. That's why I'm only taking 5 founding members — to work closely and prove it works." },
  { q: "What if I've tried coaches or agencies before and they didn't work?", a: "Most coaches give advice but don't build anything. Most agencies fix one thing and ignore the rest. AutoBoss OS is different because we build the complete system for you — growth, operations, and AI — and they all work together. Plus, you're protected by the 90-day guarantee." },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-cream/[0.06] transition-colors ${open ? "border-copper/20" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-6 text-[16px] font-medium text-cream">{question}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-copper transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <div>
          <p className="pb-6 text-[15px] leading-[1.8] text-stone-light">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-charcoal py-28">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-2xl px-6">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">Questions?</p>
        <h2 className="text-3xl font-bold text-cream sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          Frequently Asked Questions
        </h2>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone">Still have questions?</p>
          <a
            href="#founding"
            className="mt-3 inline-flex items-center gap-2 text-[15px] font-medium text-copper transition-colors hover:text-copper-light"
          >
            Book a call and let&apos;s talk
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
