"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEnd = document.getElementById("hero-end");
    const founding = document.getElementById("founding");
    if (!heroEnd || !founding) return;

    let pastHero = false;
    let inFounding = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero-end") pastHero = !entry.isIntersecting;
          if (entry.target.id === "founding") inFounding = entry.isIntersecting;
        });
        setVisible(pastHero && !inFounding);
      },
      { threshold: 0 }
    );

    observer.observe(heroEnd);
    observer.observe(founding);
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
          <span className="h-1.5 w-1.5 rounded-full bg-copper animate-pulse" />
          <span className="text-[13px] text-stone">
            Only <span className="text-cream">5</span> founding spots left
          </span>
        </div>
        <a
          href="/book"
          className="w-full rounded-sm bg-copper px-6 py-2.5 text-center text-[13px] font-medium text-white transition-colors hover:bg-copper-dark sm:w-auto"
        >
          Book Your Founding Spot
        </a>
      </div>
    </div>
  );
}
