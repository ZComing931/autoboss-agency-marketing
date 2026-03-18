"use client";

import { useState } from "react";

const links = [
  { label: "The Problem", href: "/#problem" },
  { label: "The Solution", href: "/#solution" },
  { label: "Pricing", href: "/#founding" },
  { label: "Free Tools", href: "/resources" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-charcoal/90 backdrop-blur-md"
      style={{ top: "2px" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5" style={{ fontFamily: "var(--font-clash)" }}>
          <span className="text-xl font-semibold tracking-tight text-cream">
            AutoBoss<span className="text-copper">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide text-stone-light transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/book"
            className="rounded-sm bg-copper px-5 py-2.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-copper-dark"
          >
            Book Your Spot
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-px w-6 bg-cream transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-cream transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-cream transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-charcoal px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-stone-light transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#founding"
              onClick={() => setOpen(false)}
              className="inline-block rounded-sm bg-copper px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Book Your Spot
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
