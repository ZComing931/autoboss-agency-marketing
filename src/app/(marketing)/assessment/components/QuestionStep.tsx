"use client";

import type { Question } from "./questions";

interface QuestionStepProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedIndex: number | null;
  onSelect: (index: number, score: number) => void;
  onNext: () => void;
  onPrev?: () => void;
  hasAnswer: boolean;
}

const categoryLabels: Record<string, string> = {
  leads: "Leads",
  jobs: "Jobs",
  money: "Money",
  systems: "Systems",
};

export function QuestionStep({
  question,
  questionIndex,
  totalQuestions,
  selectedIndex,
  onSelect,
  onNext,
  onPrev,
  hasAnswer,
}: QuestionStepProps) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="space-y-8">
      {/* Progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] text-copper">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <span className="text-[13px] text-stone">{Math.round(progress)}%</span>
        </div>
        <div
          className="h-1 w-full rounded-full bg-charcoal-light"
          role="progressbar"
          aria-valuenow={questionIndex + 1}
          aria-valuemin={1}
          aria-valuemax={totalQuestions}
        >
          <div
            className="h-1 rounded-full bg-copper transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Category */}
      <p className="text-[12px] uppercase tracking-[0.2em] text-copper">
        {categoryLabels[question.category]}
      </p>

      {/* Question */}
      <h2
        className="text-xl font-semibold text-cream sm:text-2xl"
        style={{ fontFamily: "var(--font-clash)" }}
      >
        {question.text}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedIndex === i;
          return (
            <button
              key={i}
              onClick={() => onSelect(i, option.score)}
              className={`w-full text-left rounded-lg p-5 transition-all border ${
                isSelected
                  ? "border-copper/40 bg-copper/10 border-l-[3px] border-l-copper"
                  : "border-cream/[0.06] bg-charcoal-light hover:border-cream/15"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold ${
                  isSelected ? "border-copper bg-copper text-white" : "border-stone/40 text-stone"
                }`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className={`text-[15px] ${isSelected ? "text-cream font-medium" : "text-stone-light"}`}>
                  {option.label}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between pt-4">
        {onPrev ? (
          <button onClick={onPrev} className="text-[14px] text-stone hover:text-cream transition-colors">
            &larr; Back
          </button>
        ) : <div />}
        <button
          onClick={onNext}
          disabled={!hasAnswer}
          className="rounded-sm bg-copper px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-copper-dark disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {questionIndex === totalQuestions - 1 ? "See My Results" : "Next"}
        </button>
      </div>
    </div>
  );
}
