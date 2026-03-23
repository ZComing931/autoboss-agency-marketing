export default function Guarantee() {
  return (
    <section id="offer" className="relative bg-charcoal py-28">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="mb-4 text-[13px] uppercase tracking-[0.2em] text-copper">
            The Complete Package
          </p>
          <h2 className="text-3xl font-bold text-cream sm:text-4xl" style={{ fontFamily: "var(--font-clash)" }}>
            Here&apos;s Everything You Get for{" "}
            <span className="text-copper">$397/Month</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.8] text-stone-light">
            Most SEO agencies charge $2,000–$5,000 per month. And they don&apos;t
            guarantee a thing.
          </p>
          <p className="mt-3 text-[17px] text-stone-light">
            You&apos;re getting the complete package for{" "}
            <span className="font-medium text-cream">$397/month</span> — with a
            performance guarantee attached.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {[
            {
              title: "A Free Professional Website",
              desc: "Fast, mobile-optimized, and built specifically to rank. Minimum 3 pages, fully SEO-optimized from day one — included at no extra cost.",
            },
            {
              title: "Complete Local Google SEO",
              desc: "I'll optimize your site for the keywords that actually bring in customers — people searching for a general contractor in your specific market, ready to hire.",
            },
            {
              title: "AI Search Optimization",
              desc: 'More and more people are using ChatGPT, Perplexity, and other AI tools to find service providers. I\'ll make sure your business shows up when someone asks, "Find me a general contractor in [your city]." Most of your competitors aren\'t even aware this exists yet.',
            },
            {
              title: "Google Business Profile Optimization",
              desc: "Your Google Business Profile is one of the biggest ranking factors for local businesses. I'll optimize every detail so you dominate the Maps Pack — the most valuable real estate in local search.",
            },
            {
              title: "Reputation Management & Review Campaigns",
              desc: "I'll help you generate more 5-star Google reviews and manage your existing ones — because reviews directly impact both your rankings and how often people actually call you.",
            },
            {
              title: "Complete Technical SEO",
              desc: "Site speed, mobile optimization, structured data, crawlability — all the behind-the-scenes work that makes Google trust your site and rank it higher.",
            },
            {
              title: "Ongoing Content & Link Building",
              desc: "Fresh content and quality backlinks every month to keep you climbing and stay ahead of competitors trying to catch up.",
            },
            {
              title: "Monthly Reporting",
              desc: "No jargon. No fluff. You'll see exactly where you rank, how much traffic you're getting, and what progress we made — every single month.",
            },
          ].map((item, i) => (
            <div key={i} className="card rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-copper text-lg">&#10003;</span>
                <div>
                  <h3 className="text-[16px] font-medium text-cream">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.8] text-stone-light">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
