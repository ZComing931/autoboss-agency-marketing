export interface QuestionOption {
  label: string;
  score: number;
}

export interface Question {
  id: number;
  category: "leads" | "jobs" | "money" | "systems";
  text: string;
  options: QuestionOption[];
}

export const CAT_MAX: Record<string, number> = {
  leads: 20,
  jobs: 30,
  money: 20,
  systems: 30,
};

export const questions: Question[] = [
  {
    id: 1,
    category: "leads",
    text: "When a new lead comes in after hours or while you're on a job, what typically happens?",
    options: [
      { label: "It goes to voicemail or sits unanswered until I get to it", score: 0 },
      { label: "I try to respond when I can — sometimes a few hours later", score: 3 },
      { label: "Someone else handles it, but inconsistently", score: 6 },
      { label: "We have a system — leads get responded to fast, no matter what", score: 10 },
    ],
  },
  {
    id: 2,
    category: "leads",
    text: "Who handles your estimating and lead-to-job process?",
    options: [
      { label: "Just me — every estimate goes through me personally", score: 0 },
      { label: "I have some help, but I still close everything myself", score: 3 },
      { label: "My team handles most of it — I just review final numbers", score: 7 },
      { label: "We have a defined process from first call to signed contract", score: 10 },
    ],
  },
  {
    id: 3,
    category: "jobs",
    text: "When a problem comes up on a job — a delay, a crew issue, a customer complaint — what happens?",
    options: [
      { label: "My crew calls me and I handle it", score: 0 },
      { label: "They try to figure it out but usually end up calling me anyway", score: 3 },
      { label: "They handle most things — big decisions still come to me", score: 6 },
      { label: "My team has playbooks for common problems and handles it without me", score: 10 },
    ],
  },
  {
    id: 4,
    category: "jobs",
    text: "How do your customers find out what's happening with their job?",
    options: [
      { label: "They text or call me directly to ask", score: 0 },
      { label: "My crew updates them sometimes, but it's inconsistent", score: 3 },
      { label: "I try to check in personally at key milestones", score: 6 },
      { label: "We have a system that keeps customers updated automatically", score: 10 },
    ],
  },
  {
    id: 5,
    category: "jobs",
    text: "Right now, how many active jobs could you give me a status update on without calling anyone?",
    options: [
      { label: "None — I'd have to call my crew to find out", score: 0 },
      { label: "1-2 that I'm closely tracking myself", score: 4 },
      { label: "Most of them — I keep mental notes", score: 7 },
      { label: "All of them — we have a tracking system", score: 10 },
    ],
  },
  {
    id: 6,
    category: "money",
    text: "After a job is done, do you know whether you actually made money on it?",
    options: [
      { label: "I have a general sense, but nothing specific", score: 0 },
      { label: "I can figure it out if I sit down and look at the numbers", score: 4 },
      { label: "I track it, but usually after the fact — not in real time", score: 7 },
      { label: "Yes — I know actual vs. estimated costs on every job", score: 10 },
    ],
  },
  {
    id: 7,
    category: "money",
    text: "What happens after a job is complete and you need to collect payment?",
    options: [
      { label: "I personally follow up — it's inconsistent and sometimes takes weeks", score: 0 },
      { label: "We invoice, but follow-up still falls on me", score: 4 },
      { label: "Someone helps, but it's not a clean process", score: 7 },
      { label: "We have a collections process that runs without me chasing it", score: 10 },
    ],
  },
  {
    id: 8,
    category: "systems",
    text: "If you took a week off with no phone access, what would happen to your business?",
    options: [
      { label: "It would stop. Nobody else can make decisions.", score: 0 },
      { label: "Things would slow way down — lots of problems to fix when I got back", score: 3 },
      { label: "Most things would be okay, but a few things would fall through the cracks", score: 7 },
      { label: "It would keep running — my team knows exactly what to do", score: 10 },
    ],
  },
  {
    id: 9,
    category: "systems",
    text: "Does your team know how to handle the most common situations without calling you?",
    options: [
      { label: "No — everything comes through me", score: 0 },
      { label: "They know the basics, but anything unusual requires me", score: 3 },
      { label: "They handle most things — I only deal with real exceptions", score: 7 },
      { label: "Yes — we have documented playbooks and they follow them", score: 10 },
    ],
  },
  {
    id: 10,
    category: "systems",
    text: "How do you currently get new work?",
    options: [
      { label: "100% referrals and word of mouth — nothing consistent online", score: 0 },
      { label: "Mostly referrals, I've tried ads or SEO but nothing stuck", score: 3 },
      { label: "Mix of referrals and some online leads, but it's unpredictable", score: 7 },
      { label: "We have a marketing system that generates consistent inbound leads", score: 10 },
    ],
  },
];

// Tier definitions
export interface Tier {
  min: number;
  max: number;
  label: string;
  desc: string;
  nextTitle: string;
  nextText: string;
}

export const TIERS: Tier[] = [
  {
    min: 0, max: 25,
    label: "You Are The Business",
    desc: "Your business runs entirely through you. Every lead, every decision, every problem ends with you. If you stop, it stops. The good news: there's nowhere to go but up — and the fixes are more specific than you might think.",
    nextTitle: "This Is Fixable. 90 Days.",
    nextText: "I know that looks like a lot of gaps. But I've seen this exact situation get turned around faster than people expect — because most of it is the same problems, in the same order, with the same fixes.",
  },
  {
    min: 26, max: 50,
    label: "Functional But Fragile",
    desc: "You've got something here. The business works — but it runs on you. You've got some good people, probably a few things figured out, but you're still the linchpin. One bad week and the cracks show.",
    nextTitle: "You're Closer Than You Think. 90 Days.",
    nextText: "You're not starting from scratch. You've already built something. The gaps left are specific and fixable — and the difference between where you are and a business that runs without you is smaller than it feels.",
  },
  {
    min: 51, max: 75,
    label: "Almost There",
    desc: "Your team handles a lot. Your business runs for short stretches without you. But there are specific weak spots — and they're probably the exact things keeping you from fully stepping back.",
    nextTitle: "A Few Fixes From Freedom.",
    nextText: "You've done most of the hard work already. What's left is targeted. The gaps above are the last things standing between you and a business that actually runs without you there to hold it together.",
  },
  {
    min: 76, max: 100,
    label: "Machine Owner",
    desc: "Your business runs like a machine. Your team is solid, your systems are in place, and you can step away without it falling apart. Most contractors never build what you've built.",
    nextTitle: "Now Let's Grow It.",
    nextText: "The foundation is there. The next step is building a growth engine on top of it — consistent inbound leads, better jobs, real visibility into which work is actually worth taking.",
  },
];

// Gap copy per category
export interface GapCopy {
  title: string;
  text: string;
  fix: string;
}

export const GAP_COPY: Record<string, GapCopy> = {
  leads: {
    title: "Lead Response",
    text: "Your business is losing leads right now. Every missed call or slow response is a job going to someone else. Contractors who don't respond within an hour lose the majority of their leads — full stop.",
    fix: "We deploy a Lead Response Agent that texts back within 60 seconds, qualifies the lead, and books the estimate — whether you're on a job, at dinner, or asleep.",
  },
  jobs: {
    title: "Job Management",
    text: "Your team still needs you to run jobs. You're the glue holding everything together — and when you're not there, things slow down or fall apart. Until your crew can run a job start to finish without you, you can't step away.",
    fix: "We document your job workflow start to finish, train your team to run it, and set up automatic customer updates so nobody texts you asking 'where's the crew.'",
  },
  money: {
    title: "Financial Visibility",
    text: "You don't have a clear picture of which jobs are actually making money. You're bidding off gut feel and finding out the result months later — or not at all.",
    fix: "We set up job cost tracking so you know actual vs. estimated on every job — while it's running, not after. If a job is going sideways, you know before it's too late to fix it.",
  },
  systems: {
    title: "Team Systems",
    text: "Your team doesn't have a playbook. When something comes up, they call you — which means you're never really off the clock. Until there are documented systems your crew can follow, the business only runs when you're running it.",
    fix: "We write the playbooks for the situations that come up every week. When something happens on a job, your crew checks the playbook — not your phone.",
  },
};

export function getTier(score: number): Tier {
  return TIERS.find((t) => score >= t.min && score <= t.max) || TIERS[0];
}
