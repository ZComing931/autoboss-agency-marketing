export default function Problem() {
  return (
    <section id="problem" className="relative bg-cream py-28">
      <div className="noise absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-2xl px-6">
        {/* Eyebrow */}
        <p className="mb-8 text-[13px] uppercase tracking-[0.2em] text-copper">
          Sound familiar?
        </p>

        {/* Narrative */}
        <div className="space-y-6 text-[17px] leading-[1.9] text-charcoal/70">
          <p className="text-charcoal font-medium text-xl" style={{ fontFamily: "var(--font-clash)" }}>
            It&apos;s 9 PM on a Tuesday.
          </p>

          <p>
            You just got home from the job site. You&apos;re exhausted. Your
            back hurts. You haven&apos;t seen your kids all day.
          </p>

          <p>But you&apos;re not done.</p>

          <p>You still need to:</p>

          <ul className="ml-5 list-disc space-y-2 text-charcoal/60 marker:text-copper">
            <li>Follow up with those 3 estimates from last week</li>
            <li>Figure out why the Martinez job is bleeding money</li>
            <li>Update your lead spreadsheet (the one that lives in your head)</li>
            <li>Prep tomorrow&apos;s material list</li>
            <li>Post something on social media so people remember you exist</li>
          </ul>

          <p>Instead, you crack a beer and turn on Netflix.</p>

          <blockquote className="my-10 border-l-3 border-copper pl-6 text-xl italic leading-relaxed text-charcoal" style={{ fontFamily: "var(--font-source, Georgia, serif)" }}>
            Because you&apos;re too tired to think.
          </blockquote>

          <p>And tomorrow, you&apos;ll be even further behind.</p>

          <p className="text-xl font-medium text-charcoal" style={{ fontFamily: "var(--font-clash)" }}>
            This is what happens when you&apos;re a $500K-a-year employee
            instead of a business owner.
          </p>

          <p>
            You&apos;re the bottleneck. The single point of failure. The only
            person who knows how anything works.
          </p>

          <p>And deep down, you know this can&apos;t last forever.</p>
        </div>

        {/* Divider */}
        <div className="section-rule my-20" />

        {/* Three Problems */}
        <h2
          className="text-3xl font-bold text-charcoal sm:text-4xl"
          style={{ fontFamily: "var(--font-clash)" }}
        >
          Three Problems Wearing a Trench Coat
        </h2>
        <p className="mt-5 text-[17px] leading-[1.8] text-charcoal/70">
          You don&apos;t have a marketing problem. You have{" "}
          <span className="font-medium text-charcoal">three problems</span>{" "}
          strangling your business at the same time:
        </p>
      </div>

      {/* Problem cards */}
      <div className="relative mx-auto mt-14 max-w-3xl space-y-6 px-6">
        {[
          {
            num: "01",
            title: "No Predictable Leads",
            quote: "I get most of my work from referrals. When they dry up, I panic.",
            paras: [
              "You're on page 3 of Google. Your competitors own the map pack. You're paying Angi $800/month for bottom-feeder leads that ghost you after the estimate.",
              "When referrals slow down, revenue craters. And you have no idea when the next job is coming.",
            ],
          },
          {
            num: "02",
            title: "Everything Lives in Your Head",
            quote: "I know what needs to happen. I just can't explain it to anyone else.",
            paras: [
              "No SOPs. No scorecards. No playbooks.",
              "If you get sick for two weeks, the whole operation stops. Your crew doesn't know what to do. Estimates pile up. Clients get pissed.",
              "You can't hire anyone good because you can't train them. Everything depends on you remembering everything.",
            ],
          },
          {
            num: "03",
            title: "You Haven't Taken a Real Vacation in 3 Years",
            quote: "If I'm not there, nothing happens.",
            paras: [
              "You're estimating, selling, project managing, doing takeoffs, handling complaints, AND swinging a hammer when someone calls in sick.",
              "That's a $200K-a-year business owner doing $20/hour work.",
              "You're trapped. And every day it gets harder to see a way out.",
            ],
          },
        ].map((problem) => (
          <div key={problem.num} className="card-light rounded-lg p-8 sm:p-10">
            <div className="flex items-baseline gap-4">
              <span className="text-[13px] font-medium tracking-wider text-copper">
                {problem.num}
              </span>
              <h3
                className="text-xl font-semibold text-charcoal"
                style={{ fontFamily: "var(--font-clash)" }}
              >
                {problem.title}
              </h3>
            </div>

            <blockquote className="mt-6 border-l-3 border-copper/40 pl-5 text-lg italic leading-relaxed text-charcoal/80" style={{ fontFamily: "var(--font-source, Georgia, serif)" }}>
              &ldquo;{problem.quote}&rdquo;
            </blockquote>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] text-charcoal/65">
              {problem.paras.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
