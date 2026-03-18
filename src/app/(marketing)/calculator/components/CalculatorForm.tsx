"use client";

import { useState, useRef, type KeyboardEvent } from "react";
import type { CalculatorResult } from "@/lib/dataforseo";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
] as const;

function ChipInput({
  label, hint, placeholder, items, max, onAdd, onRemove,
}: {
  label: string; hint: string; placeholder: string;
  items: string[]; max: number;
  onAdd: (v: string) => void; onRemove: (i: number) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const value = inputRef.current?.value.trim() ?? "";
    if ((e.key === "Enter" || e.key === ",") && value) {
      e.preventDefault();
      if (items.length < max && !items.some((item) => item.toLowerCase() === value.toLowerCase())) {
        onAdd(value);
      }
      if (inputRef.current) inputRef.current.value = "";
    }
    if (e.key === "Backspace" && !value && items.length > 0) {
      onRemove(items.length - 1);
    }
  }

  return (
    <div>
      <label className="block text-[14px] font-medium text-cream mb-1.5">
        {label} <span className="text-stone">({hint})</span>
      </label>
      <div className="flex flex-wrap gap-2 mb-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-sm border border-copper/40 bg-copper/10 text-copper text-[13px]"
          >
            {item}
            <button type="button" onClick={() => onRemove(i)} className="ml-0.5 hover:text-cream transition">
              &times;
            </button>
          </span>
        ))}
      </div>
      {items.length < max && (
        <input
          ref={inputRef}
          type="text"
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream placeholder-stone focus:border-copper focus:ring-1 focus:ring-copper outline-none transition"
        />
      )}
      <p className="text-[12px] text-stone mt-1">
        {items.length}/{max} — press Enter or comma to add
      </p>
    </div>
  );
}

interface CalculatorFormProps {
  onResults: (result: CalculatorResult) => void;
}

export function CalculatorForm({ onResults }: CalculatorFormProps) {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [state, setState] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [avgJobSize, setAvgJobSize] = useState(35000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (keywords.length < 2) { setError("Please enter at least 2 keywords."); return; }
    if (!state) { setError("Please select your state."); return; }
    if (cities.length < 1) { setError("Please enter at least 1 city."); return; }

    setLoading(true);
    try {
      const response = await fetch("/api/calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keywords, cities, state, avgJobSize }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
      const result: CalculatorResult = await response.json();
      onResults(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const formattedJobSize = new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", maximumFractionDigits: 0,
  }).format(avgJobSize);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ChipInput
        label="What do you want to rank for?"
        hint="2-4 keywords"
        placeholder="e.g. kitchen remodeling"
        items={keywords} max={4}
        onAdd={(v) => setKeywords((prev) => [...prev, v])}
        onRemove={(i) => setKeywords((prev) => prev.filter((_, idx) => idx !== i))}
      />

      <div>
        <label htmlFor="state" className="block text-[14px] font-medium text-cream mb-1.5">Your State</label>
        <select
          id="state" value={state} onChange={(e) => setState(e.target.value)}
          className="w-full rounded-sm border border-cream/10 bg-charcoal-light px-4 py-3 text-cream focus:border-copper focus:ring-1 focus:ring-copper outline-none transition"
        >
          <option value="">Select state</option>
          {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <ChipInput
        label="What cities do you serve?"
        hint="1-6 cities"
        placeholder="e.g. Denver"
        items={cities} max={6}
        onAdd={(v) => setCities((prev) => [...prev, v])}
        onRemove={(i) => setCities((prev) => prev.filter((_, idx) => idx !== i))}
      />

      <div>
        <label htmlFor="avgJobSize" className="block text-[14px] font-medium text-cream mb-1.5">
          Average Job Size: <span className="text-copper font-semibold">{formattedJobSize}</span>
        </label>
        <input
          id="avgJobSize" type="range" min={5000} max={250000} step={5000}
          value={avgJobSize} onChange={(e) => setAvgJobSize(Number(e.target.value))}
          className="w-full h-2 bg-charcoal rounded-lg appearance-none cursor-pointer accent-[#C67D4A]"
        />
        <div className="flex justify-between text-[12px] text-stone mt-1">
          <span>$5K</span><span>$250K</span>
        </div>
      </div>

      {error && <p className="text-red-400 text-[14px]">{error}</p>}

      <button
        type="submit" disabled={loading}
        className="w-full rounded-sm bg-copper px-6 py-4 text-[16px] font-medium text-white hover:bg-copper-dark disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Analyzing Your Market...
          </span>
        ) : (
          "Show Me The Money"
        )}
      </button>
    </form>
  );
}
