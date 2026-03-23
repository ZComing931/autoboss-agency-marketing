"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEnd = document.getElementById("hero-end");
    const apply = document.getElementById("apply");
    if (!heroEnd || !apply) return;

    let pastHero = false;
    let inApply = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero-end") pastHero = !entry.isIntersecting;
          if (entry.target.id === "apply") inApply = entry.isIntersecting;
        });
        setVisible(pastHero && !inApply);
      },
      { threshold: 0 }
    );

    observer.observe(heroEnd);
    observer.observe(apply);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-cream/[0.06] bg-charcoal/95 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-[13px] text-stone">
            <span className="text-cream font-medium">$397/mo</span> — Top 3 on Google in 90 days or it&apos;s free
          </span>
        </div>
        <a
          href="#apply"
          className="w-full rounded-sm bg-copper px-6 py-2.5 text-center text-[13px] font-medium text-white transition-colors hover:bg-copper-dark sm:w-auto"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
