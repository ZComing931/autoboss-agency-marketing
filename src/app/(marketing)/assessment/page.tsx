import type { Metadata } from "next";
import { AssessmentQuiz } from "./components/AssessmentQuiz";

export const metadata: Metadata = {
  title: "Business Assessment — AutoBoss OS",
  description: "Could your business survive without you for 2 weeks? Take the free assessment and get your Vacation Readiness Score.",
};

export default function AssessmentPage() {
  return (
    <div className="relative min-h-screen bg-charcoal pt-20">
      <div className="noise absolute inset-0" />

      {/* Hero */}
      <section className="relative mx-auto max-w-3xl px-6 pt-16 pb-12 text-center">
        <p className="mb-6 text-[13px] uppercase tracking-[0.2em] text-copper">
          Free Business Assessment
        </p>
        <h1
          className="text-3xl font-bold text-cream sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-clash)" }}
        >
          Could Your Business Survive Without You for 2 Weeks?
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.8] text-stone-light">
          Answer 12 questions. Get your Vacation Readiness Score and find out
          what&apos;s holding your business back.
        </p>
      </section>

      {/* Quiz */}
      <section className="relative mx-auto max-w-xl px-6 pb-20">
        <AssessmentQuiz />
      </section>
    </div>
  );
}
