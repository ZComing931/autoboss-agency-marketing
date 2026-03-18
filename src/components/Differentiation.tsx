const tableRows = [
  { feature: "Gets you ranked #1 on Google Maps", seo: true, coach: false, ai: false, ab: true },
  { feature: "Optimized for AI search (ChatGPT, Perplexity)", seo: false, coach: false, ai: false, ab: true },
  { feature: "Builds your operating system (ClickUp, SOPs, scorecards)", seo: false, coach: false, ai: false, ab: true },
  { feature: "Gives you business advice", seo: false, coach: true, ai: false, ab: true },
  { feature: "Actually builds the systems for you", seo: false, coach: false, ai: false, ab: true },
  { feature: "AI agents protecting margins and forecasting problems", seo: false, coach: false, ai: "partial" as const, ab: true },
  { feature: "Works as ONE integrated system", seo: false, coach: false, ai: false, ab: true },
];

function CellIcon({ value }: { value: boolean | "partial" }) {
  if (value === true) return <span className="text-copper text-lg">&#10003;</span>;
  if (value === "partial") return <span className="text-stone text-sm">~</span>;
  return <span className="text-stone/30 text-lg">&mdash;</span>;
}

const differentiators = [
  { title: "We Don't Just Fix Leads. We Fix the Whole Business.", desc: "SEO agencies get you traffic and disappear. They don't care if your operations are a disaster. We install all three systems — growth, operations, and AI intelligence — so they work together as one operating system." },
  { title: "We Don't Just Give Advice. We Build It For You.", desc: "Business coaches tell you what to do. Then you're stuck trying to figure out how. We build your ClickUp workspace, write your SOPs, deploy OTTO, and optimize your entire digital presence. You don't lift a finger." },
  { title: "We Don't Just Sell You Tools. We Give You Strategy + Execution.", desc: "AI tools are useless without someone who knows how to deploy them in a contracting business. OTTO isn't just software. It's 7 specialized agents with a strategy behind every one of them." },
  { title: "We're Not Another Monthly Retainer With No Accountability.", desc: "Most agencies and coaches bill you every month whether you get results or not. We have one goal: get your business running predictably in 90 days. If we don't hit it, we keep working until we do. No extra cost." },
];

export default function Differentiation() {
  return (
    <section id="differentiation" className="relative bg-charcoal py-28">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
          Why AutoBoss is different
        </p>
        <h2 className="text-3xl font-bold text-cream sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
          You&apos;ve Probably Tried to Fix This Before.
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-stone-light">
          Maybe you hired an SEO agency. Or worked with a business coach. Or
          bought some AI tool that collected dust after two weeks.
          Here&apos;s the problem:{" "}
          <span className="text-cream">nobody gives you the whole system.</span>
        </p>

        {/* Desktop Table */}
        <div className="mt-14 hidden md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-cream/10">
                <th className="pb-4 text-[13px] font-normal tracking-wider text-stone">What they do</th>
                <th className="pb-4 text-center text-[13px] font-normal tracking-wider text-stone">SEO Agency</th>
                <th className="pb-4 text-center text-[13px] font-normal tracking-wider text-stone">Coach</th>
                <th className="pb-4 text-center text-[13px] font-normal tracking-wider text-stone">AI Tool</th>
                <th className="pb-4 text-center text-[13px] font-medium tracking-wider text-copper">AutoBoss</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} className="border-b border-cream/[0.04]">
                  <td className="py-4 text-[14px] text-stone-light">{row.feature}</td>
                  <td className="py-4 text-center"><CellIcon value={row.seo} /></td>
                  <td className="py-4 text-center"><CellIcon value={row.coach} /></td>
                  <td className="py-4 text-center"><CellIcon value={row.ai} /></td>
                  <td className="py-4 text-center bg-copper/5 rounded"><CellIcon value={row.ab} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-14 space-y-4 md:hidden">
          {[
            { name: "SEO Agency", key: "seo" as const, verdict: "Fixes leads. Ignores everything else." },
            { name: "Business Coach", key: "coach" as const, verdict: "Gives advice. Doesn't build anything." },
            { name: "AI Tool", key: "ai" as const, verdict: "Cool tech. Zero strategy." },
          ].map((comp) => (
            <div key={comp.name} className="card rounded-lg p-5">
              <h4 className="font-medium text-cream">{comp.name}</h4>
              <p className="mb-3 text-[13px] text-stone">{comp.verdict}</p>
              {tableRows.map((row, i) => (
                <div key={i} className="flex items-center justify-between border-t border-cream/[0.04] py-2">
                  <span className="text-[13px] text-stone">{row.feature}</span>
                  <CellIcon value={row[comp.key]} />
                </div>
              ))}
            </div>
          ))}
          <div className="card rounded-lg border-copper/20 bg-copper/5 p-5">
            <h4 className="font-medium text-copper">AutoBoss OS</h4>
            <p className="mb-3 text-[13px] text-copper-light">All of the above. As one system.</p>
            {tableRows.map((row, i) => (
              <div key={i} className="flex items-center justify-between border-t border-copper/10 py-2">
                <span className="text-[13px] text-cream">{row.feature}</span>
                <CellIcon value={row.ab} />
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators */}
        <div className="mt-20 space-y-10">
          <h3 className="text-2xl font-semibold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
            Here&apos;s What Makes AutoBoss Different:
          </h3>
          {differentiators.map((d, i) => (
            <div key={i} className="flex gap-5">
              <span className="mt-0.5 text-[14px] font-medium text-copper">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4 className="font-medium text-cream">{d.title}</h4>
                <p className="mt-2 text-[15px] leading-[1.8] text-stone-light">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-16 border-l-3 border-copper/40 bg-charcoal-light rounded-r-lg p-8">
          <h3 className="text-lg font-semibold text-cream" style={{ fontFamily: "var(--font-clash)" }}>
            The Bottom Line:
          </h3>
          <p className="mt-3 text-[16px] leading-[1.8] text-stone-light">
            You don&apos;t need another marketing agency. You don&apos;t need
            another coach telling you what you already know. You need someone to{" "}
            <span className="text-cream">install the complete operating system</span>{" "}
            — growth, operations, and AI — so your business finally runs like a
            business instead of a high-stress job.
          </p>
          <p className="mt-4 text-lg font-medium text-copper">That&apos;s AutoBoss OS.</p>
        </div>
      </div>
    </section>
  );
}
