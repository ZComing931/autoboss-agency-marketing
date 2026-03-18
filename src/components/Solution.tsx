import {
  IconGrowthSystem,
  IconOperatingSystem,
  IconOTTO,
  IconBidValidator,
  IconMarginIntel,
  IconJobPerformance,
  IconForecaster,
  IconChangeOrder,
  IconRiskMonitor,
  IconInsights,
} from "./icons";
import type { ReactNode } from "react";

const channels = [
  { name: "Google Maps", desc: "#1 in the local maps pack within 90 days" },
  { name: "AI Search", desc: "ChatGPT, Perplexity, and other AI tools recommend YOU" },
  { name: "Facebook", desc: "Optimized so local searches and recommendations surface your business" },
  { name: "Google Search", desc: 'Organic rankings for high-intent keywords like "kitchen remodel [your city]"' },
];

const ottoAgents: { name: string; desc: string; icon: ReactNode }[] = [
  { name: "Bid Validator", desc: "Reviews every estimate before it goes out. Flags missing scope, weak pricing, and vague line items. No more leaving money on the table.", icon: <IconBidValidator /> },
  { name: "Margin Intelligence", desc: "Calculates your TRUE margin on every job (not the one you hope for). Accounts for overhead, retainage, and hidden costs.", icon: <IconMarginIntel /> },
  { name: "Job Performance Analyzer", desc: "Dives into your past jobs and tells you exactly why that kitchen remodel bled money while the commercial retrofit printed cash.", icon: <IconJobPerformance /> },
  { name: "Predictive Forecaster", desc: "Reads current burn rates, material costs, and delays to predict final job cost before you hit the finish line.", icon: <IconForecaster /> },
  { name: "Change Order Optimizer", desc: "Turns scope creep into high-margin extras. Analyzes change requests and recommends pricing that protects your profit.", icon: <IconChangeOrder /> },
  { name: "Risk Monitor", desc: "Real-time anomaly detection. Flags red flags before they become disasters. Watches every job like a hawk.", icon: <IconRiskMonitor /> },
  { name: "Insights & Reporting", desc: 'Drops your weekly scorecard, monthly profit snapshot, and "Hey OTTO, prep my Monday meeting" reports on demand.', icon: <IconInsights /> },
];

export default function Solution() {
  return (
    <section id="solution" className="relative bg-charcoal py-28">
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Header */}
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          The AutoBoss OS Solution
        </p>
        <h2 className="text-3xl font-bold text-cream sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          Three Systems. One Operating System. 90 Days.
        </h2>
        <p className="mt-6 max-w-xl text-[17px] leading-[1.8] text-stone-light">
          We don&apos;t just fix your marketing or hand you a template. We
          install a{" "}
          <span className="text-cream">complete operating system</span>{" "}
          for your contracting business — so it runs predictably whether
          you&apos;re on the job site, at your kid&apos;s soccer game, or on a
          beach in Mexico.
        </p>

        {/* ============= SYSTEM 1: AI GROWTH ============= */}
        <div className="mt-24">
          <div className="flex items-start gap-5 border-b border-cream/10 pb-6">
            <div className="text-copper">
              <IconGrowthSystem className="h-14 w-14" />
            </div>
            <div>
              <span className="text-[13px] font-medium tracking-wider text-copper">01</span>
              <h3 className="mt-1 text-2xl font-semibold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
                AI Growth System
              </h3>
              <p className="mt-1 text-[15px] text-stone">
                Search Everywhere — Be found wherever people are looking
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-[16px] leading-[1.8] text-stone-light">
            <p>No more praying for referrals. No more paying Angi for garbage leads.</p>
            <p>
              This isn&apos;t just SEO. This is a{" "}
              <span className="text-cream">complete digital presence overhaul</span>{" "}
              so you dominate every channel where homeowners search for contractors.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {channels.map((ch) => (
              <div key={ch.name} className="card rounded-lg p-5">
                <h4 className="text-[15px] font-medium text-cream">{ch.name}</h4>
                <p className="mt-1 text-[14px] leading-relaxed text-stone">{ch.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-[16px] leading-[1.8] text-stone-light">
            <p>
              Homeowners aren&apos;t searching in just one place anymore.{" "}
              <span className="text-cream">We make sure you own all of it.</span>
            </p>
            <p>
              You stop worrying about where the next job is coming from. Because
              leads are <span className="text-copper">always</span> coming in.
            </p>
          </div>
        </div>

        {/* ============= SYSTEM 2: OPERATING SYSTEM ============= */}
        <div className="mt-24">
          <div className="flex items-start gap-5 border-b border-cream/10 pb-6">
            <div className="text-copper">
              <IconOperatingSystem className="h-14 w-14" />
            </div>
            <div>
              <span className="text-[13px] font-medium tracking-wider text-copper">02</span>
              <h3 className="mt-1 text-2xl font-semibold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
                Your Business on Rails
              </h3>
              <p className="mt-1 text-[15px] text-stone">
                Complete ClickUp operating system with SOPs, scorecards, and playbooks
              </p>
            </div>
          </div>

          <p className="mt-8 text-[16px] leading-[1.8] text-stone-light">
            Everything that lives in your head gets documented, systematized, and put into ClickUp.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "SOPs for estimating, project management, client communication, and every role on your team",
              "Weekly scorecards so you know exactly where you stand (revenue, pipeline, margins, team performance)",
              "Playbook library so your crew can handle problems without calling you every 20 minutes",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                <p className="text-[16px] leading-[1.8] text-stone-light">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-3 border-copper/30 bg-charcoal-light rounded-r-lg p-6">
            <p className="text-[15px] leading-[1.8] text-cream/90">
              You can actually train someone to do estimates. Your business has a
              manual, not just your memory.{" "}
              <span className="text-copper-light">
                You can step away for a week and nothing catches fire.
              </span>
            </p>
          </div>
        </div>

        {/* ============= SYSTEM 3: OTTO ============= */}
        <div className="mt-24">
          <div className="flex items-start gap-5 border-b border-cream/10 pb-6">
            <div className="text-copper">
              <IconOTTO className="h-14 w-14" />
            </div>
            <div>
              <span className="text-[13px] font-medium tracking-wider text-copper">03</span>
              <h3 className="mt-1 text-2xl font-semibold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
                Meet OTTO — Your AI All-Star Team
              </h3>
              <p className="mt-1 text-[15px] text-stone">
                7 AI agents running your business intelligence 24/7
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-[16px] leading-[1.8] text-stone-light">
            <p>This isn&apos;t some chatbot that sends follow-up emails.</p>
            <p>
              OTTO is a <span className="text-cream">full team of specialized AI agents</span>{" "}
              analyzing every bid, protecting your margins, forecasting overruns,
              and handling the repetitive work that keeps you up at night.
            </p>
          </div>

          <p className="mt-8 mb-6 text-[13px] uppercase tracking-[0.15em] text-copper">
            The starting lineup
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {ottoAgents.map((agent) => (
              <div key={agent.name} className="card rounded-lg p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-copper">{agent.icon}</div>
                  <h4 className="text-[15px] font-medium text-cream">
                    OTTO {agent.name}
                  </h4>
                </div>
                <p className="text-[14px] leading-relaxed text-stone">
                  {agent.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-3 border-copper/30 bg-charcoal-light rounded-r-lg p-6">
            <p className="text-[15px] leading-[1.8] text-cream/90">
              You stop guessing if a job is profitable — you KNOW. You catch
              problems before they cost you $15K. You get back{" "}
              <span className="text-copper-light">10–15 hours a week of admin work.</span>
            </p>
          </div>
        </div>

        {/* ============= CLOSING ============= */}
        <div className="mt-24 border border-cream/10 rounded-lg p-10 text-center sm:p-14">
          <h3 className="text-2xl font-bold text-cream sm:text-3xl" style={{ fontFamily: "var(--font-clash)" }}>
            All Three Systems. Working Together. In 90 Days.
          </h3>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.8] text-stone-light">
            SEO agencies fix leads. Business coaches give advice. AI tools are
            cool but have no strategy.{" "}
            <span className="text-cream">Nobody combines all three into one operating system.</span>
          </p>
          <p className="mt-4 text-lg font-medium text-copper">
            That&apos;s why AutoBoss actually works.
          </p>
        </div>
      </div>
    </section>
  );
}
