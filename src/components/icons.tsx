// System Icons — larger, used as section illustrations
// Style: warm line-art, 2-color (copper stroke + cream/stone fills)

export function IconGrowthSystem({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Radar/signal rings */}
      <circle cx="32" cy="34" r="24" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <circle cx="32" cy="34" r="16" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <circle cx="32" cy="34" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Center pin */}
      <circle cx="32" cy="34" r="3" fill="currentColor" opacity="0.8" />
      {/* Map marker */}
      <path d="M32 8C27.6 8 24 11.6 24 16c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      {/* Signal bars - right side */}
      <path d="M48 44v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M52 44v-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M56 44v-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      {/* Search lens */}
      <circle cx="14" cy="46" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M18.5 50.5L22 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function IconOperatingSystem({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blueprint grid */}
      <rect x="8" y="8" width="48" height="48" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {/* Horizontal lines */}
      <line x1="8" y1="20" x2="56" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <line x1="8" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <line x1="8" y1="44" x2="56" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      {/* Vertical lines */}
      <line x1="24" y1="8" x2="24" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <line x1="40" y1="8" x2="40" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      {/* Checklist items */}
      <rect x="12" y="23" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M14 26l2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="24" y1="26" x2="36" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Second checklist */}
      <rect x="12" y="35" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M14 38l2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="24" y1="38" x2="40" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Scorecard bars */}
      <rect x="42" y="35" width="4" height="10" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="48" y="30" width="4" height="15" rx="1" fill="currentColor" opacity="0.5" />
      {/* Gear */}
      <circle cx="48" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="48" cy="16" r="2" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M48 9v2M48 21v2M41 16h2M53 16h2M43 11l1.5 1.5M52 20l1.5 1.5M43 21l1.5-1.5M52 12l1.5-1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function IconOTTO({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Brain outline */}
      <path d="M32 12c-8 0-16 6-16 16 0 4 1.5 7.5 4 10.5V48c0 2 1.5 4 4 4h16c2.5 0 4-2 4-4v-9.5c2.5-3 4-6.5 4-10.5 0-10-8-16-16-16z" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Neural connections */}
      <circle cx="26" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="38" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="32" cy="32" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="24" cy="36" r="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="40" cy="36" r="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* Connections */}
      <line x1="28" y1="25" x2="30" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="36" y1="25" x2="34" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="26" y1="35" x2="30" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="38" y1="35" x2="34" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Sparkles */}
      <path d="M12 18l2-4 2 4-4 2 4 2-2 4-2-4-4-2 4-2z" fill="currentColor" opacity="0.4" />
      <path d="M50 14l1.5-3 1.5 3-3 1.5 3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill="currentColor" opacity="0.3" />
      <path d="M52 38l1-2 1 2-2 1 2 1-1 2-1-2-2-1 2-1z" fill="currentColor" opacity="0.25" />
      {/* Pulse line at bottom */}
      <path d="M24 52h4l2-3 2 6 2-6 2 3h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

// OTTO Agent Icons — smaller, used in agent cards
// Style: single-color line icons, warm and specific

export function IconBidValidator({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="4" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="10" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Checkmark badge */}
      <circle cx="23" cy="21" r="7" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 21l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMarginIntel({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dollar sign in circle */}
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M16 8v2m0 12v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12.5 13c0-1.7 1.6-3 3.5-3s3.5 1.3 3.5 3-1.6 3-3.5 3-3.5 1.3-3.5 3 1.6 3 3.5 3 3.5-1.3 3.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Small trend arrow */}
      <path d="M24 6l4 0 0 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M28 6l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function IconJobPerformance({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Magnifying glass */}
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bar chart inside lens */}
      <rect x="10" y="14" width="2.5" height="5" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="13.5" y="11" width="2.5" height="8" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="17" y="13" width="2.5" height="6" rx="0.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function IconForecaster({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Trend line going up */}
      <path d="M4 24l7-6 5 3 8-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow at end */}
      <path d="M21 7l3 2-1 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Dotted projection */}
      <path d="M24 9l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" opacity="0.4" />
      {/* Baseline */}
      <line x1="4" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function IconChangeOrder({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Two documents with swap arrows */}
      <rect x="4" y="6" width="11" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <rect x="17" y="12" width="11" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* Arrows */}
      <path d="M13 20l4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 18l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 12l-4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 10l-2 2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Plus sign on new doc */}
      <path d="M22 18v4m-2-2h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconRiskMonitor({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield */}
      <path d="M16 4L6 9v7c0 7.5 4.3 13.5 10 16 5.7-2.5 10-8.5 10-16V9L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Eye inside */}
      <ellipse cx="16" cy="16" rx="5" ry="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
      {/* Alert rays */}
      <path d="M16 8v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M10 12l1.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M22 12l-1.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function IconInsights({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dashboard frame */}
      <rect x="4" y="4" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Pie chart */}
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M12 9v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Mini bars */}
      <rect x="20" y="10" width="2" height="7" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="23.5" y="8" width="2" height="9" rx="0.5" fill="currentColor" opacity="0.5" />
      {/* Stand */}
      <path d="M12 22v4M20 22v4M10 26h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
  );
}
