"use client";

import { useEffect, useState } from "react";
import type { CalculatorResult } from "@/lib/dataforseo";

function AnimatedCounter({ target, prefix = "", suffix = "", duration = 2000 }: {
  target: number; prefix?: string; suffix?: string; duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span>{prefix}{new Intl.NumberFormat("en-US").format(current)}{suffix}</span>;
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function ResultsDisplay({ result }: { result: CalculatorResult }) {
  const { position1, position3 } = result.revenueByPosition;
  const citiesLabel = result.cities.length > 3
    ? `across ${result.cities.length} cities in ${result.state}`
    : `in ${result.cities.join(", ")}, ${result.state}`;
  const maxCityVolume = Math.max(...result.cityBreakdown.map((c) => c.subtotalVolume), 1);

  return (
    <div className="space-y-8">
      {/* Big Number */}
      <div className="text-center py-8 rounded-lg border border-copper/20 bg-copper/[0.05]">
        <p className="text-[13px] uppercase tracking-[0.2em] text-copper mb-3">
          Estimated Revenue You&apos;re Missing
        </p>
        <p className="text-3xl sm:text-4xl font-bold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
          <AnimatedCounter target={position3.revenue} prefix="$" />
          {" — "}
          <AnimatedCounter target={position1.revenue} prefix="$" />
          <span className="text-xl text-stone">/mo</span>
        </p>
        <p className="text-stone mt-3 text-[14px]">
          Based on ranking in the top 3 positions on Google {citiesLabel}
        </p>
      </div>

      {/* Position Table */}
      <div className="card rounded-lg p-6">
        <h3 className="text-lg font-semibold text-cream mb-2" style={{ fontFamily: "var(--font-clash)" }}>
          Revenue by Google Position
        </h3>
        <p className="text-stone text-[13px] mb-5">
          Position #1 captures the most traffic. Even at #3, you&apos;re capturing significant revenue.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="text-stone border-b border-cream/10">
                <th className="pb-3 text-left font-medium"></th>
                <th className="pb-3 text-right font-semibold text-copper">Pos #1</th>
                <th className="pb-3 text-right font-medium text-stone">Pos #2</th>
                <th className="pb-3 text-right font-medium text-stone">Pos #3</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Click-through rate", values: [`${(position1.ctr * 100).toFixed(0)}%`, `${(result.revenueByPosition.position2.ctr * 100).toFixed(0)}%`, `${(position3.ctr * 100).toFixed(0)}%`] },
                { label: "Monthly clicks", values: [position1.clicks.toLocaleString(), result.revenueByPosition.position2.clicks.toLocaleString(), position3.clicks.toLocaleString()] },
                { label: "Leads (4% conv.)", values: [position1.leads.toLocaleString(), result.revenueByPosition.position2.leads.toLocaleString(), position3.leads.toLocaleString()] },
                { label: "Jobs (30% close)", values: [position1.jobs.toLocaleString(), result.revenueByPosition.position2.jobs.toLocaleString(), position3.jobs.toLocaleString()] },
              ].map((row) => (
                <tr key={row.label} className="border-b border-cream/[0.04]">
                  <td className="py-2.5 text-stone">{row.label}</td>
                  <td className="py-2.5 text-right text-cream">{row.values[0]}</td>
                  <td className="py-2.5 text-right text-cream">{row.values[1]}</td>
                  <td className="py-2.5 text-right text-cream">{row.values[2]}</td>
                </tr>
              ))}
              <tr className="border-t border-cream/10">
                <td className="py-3 text-cream font-medium">Revenue</td>
                <td className="py-3 text-right font-semibold text-copper">{formatCurrency(position1.revenue)}/mo</td>
                <td className="py-3 text-right font-semibold text-copper">{formatCurrency(result.revenueByPosition.position2.revenue)}/mo</td>
                <td className="py-3 text-right font-semibold text-copper">{formatCurrency(position3.revenue)}/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-stone text-[12px] mt-4">
          Based on {result.totalSearchVolume.toLocaleString()} monthly searches across your keywords and cities.
        </p>
      </div>

      {/* City Breakdown */}
      {result.cityBreakdown.length > 1 && (
        <div className="card rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cream mb-4" style={{ fontFamily: "var(--font-clash)" }}>
            Search Volume by City
          </h3>
          <div className="space-y-3">
            {[...result.cityBreakdown].sort((a, b) => b.subtotalVolume - a.subtotalVolume).map((cb) => (
              <div key={cb.city}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] text-cream font-medium">{cb.city}</span>
                  <span className="text-[13px] text-stone">{cb.subtotalVolume.toLocaleString()} searches/mo</span>
                </div>
                <div className="w-full bg-charcoal rounded-full h-2">
                  <div
                    className="bg-copper h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.max((cb.subtotalVolume / maxCityVolume) * 100, 2)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Competitors */}
      {result.topCompetitors.length > 0 && (
        <div className="card rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cream mb-4" style={{ fontFamily: "var(--font-clash)" }}>
            Who&apos;s Getting This Traffic Right Now
          </h3>
          <div className="space-y-3">
            {result.topCompetitors.map((comp, i) => (
              <div key={comp.domain} className="flex items-center justify-between py-2 border-b border-cream/[0.04] last:border-0">
                <div className="flex items-center gap-3">
                  <span className={`flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-medium ${
                    i === 0 ? "bg-copper/15 text-copper" : "bg-cream/5 text-stone"
                  }`}>
                    #{comp.position}
                  </span>
                  <span className="text-cream text-[14px]">{comp.domain}</span>
                </div>
                <span className="text-stone text-[13px]">~{comp.estimatedTraffic} visits/mo</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Keywords */}
      {result.keywords.length > 0 && (
        <div className="card rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cream mb-4" style={{ fontFamily: "var(--font-clash)" }}>
            Keywords People Are Searching
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="text-stone text-left border-b border-cream/10">
                  <th className="pb-2 font-medium">Keyword</th>
                  <th className="pb-2 font-medium text-right">Monthly Searches</th>
                  <th className="pb-2 font-medium text-right">CPC</th>
                  <th className="pb-2 font-medium text-right">Competition</th>
                </tr>
              </thead>
              <tbody>
                {result.keywords.slice(0, 15).map((kw) => (
                  <tr key={kw.keyword} className="border-b border-cream/[0.03] last:border-0">
                    <td className="py-2 text-stone-light">{kw.keyword}</td>
                    <td className="py-2 text-right text-cream font-medium">{kw.searchVolume.toLocaleString()}</td>
                    <td className="py-2 text-right text-stone">${kw.cpc.toFixed(2)}</td>
                    <td className="py-2 text-right">
                      <span className={`text-[12px] px-2 py-0.5 rounded-sm ${
                        kw.competition === "HIGH" ? "bg-red-500/10 text-red-400"
                          : kw.competition === "MEDIUM" ? "bg-copper/10 text-copper"
                            : kw.competition === null ? "bg-cream/5 text-stone"
                              : "bg-green-500/10 text-green-400"
                      }`}>
                        {kw.competition ?? "N/A"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
