"use client";

import { useReducer } from "react";
import { questions, CAT_MAX, getTier } from "./questions";
import { QuestionStep } from "./QuestionStep";
import { EmailGate } from "./EmailGate";
import { ResultsView } from "./ResultsView";

type Phase = "quiz" | "email" | "results";

interface CategoryScores {
  leads: number;
  jobs: number;
  money: number;
  systems: number;
}

interface State {
  phase: Phase;
  currentQuestion: number;
  answers: Record<number, { index: number; score: number }>;
  lead: { name: string; email: string; company: string } | null;
}

type Action =
  | { type: "ANSWER"; questionId: number; index: number; score: number }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "SUBMIT_EMAIL"; lead: { name: string; email: string; company: string } };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ANSWER":
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: { index: action.index, score: action.score } },
      };
    case "NEXT":
      if (state.currentQuestion < questions.length - 1) {
        return { ...state, currentQuestion: state.currentQuestion + 1 };
      }
      return { ...state, phase: "email" };
    case "PREV":
      if (state.phase === "email") {
        return { ...state, phase: "quiz", currentQuestion: questions.length - 1 };
      }
      return { ...state, currentQuestion: Math.max(0, state.currentQuestion - 1) };
    case "SUBMIT_EMAIL":
      return { ...state, phase: "results", lead: action.lead };
    default:
      return state;
  }
}

function calcCategoryScores(answers: Record<number, { index: number; score: number }>): CategoryScores {
  const scores: CategoryScores = { leads: 0, jobs: 0, money: 0, systems: 0 };
  for (const q of questions) {
    const answer = answers[q.id];
    if (answer) {
      scores[q.category] += answer.score;
    }
  }
  return scores;
}

export function AssessmentQuiz() {
  const [state, dispatch] = useReducer(reducer, {
    phase: "quiz",
    currentQuestion: 0,
    answers: {},
    lead: null,
  });

  const categoryScores = calcCategoryScores(state.answers);
  const totalScore = Object.values(categoryScores).reduce((a, b) => a + b, 0);
  const tier = getTier(totalScore);

  if (state.phase === "results") {
    return (
      <ResultsView
        totalScore={totalScore}
        categoryScores={categoryScores}
        tier={tier}
      />
    );
  }

  if (state.phase === "email") {
    return (
      <EmailGate
        scores={{ totalScore, categoryScores, tierLabel: tier.label }}
        onSubmit={(lead) => dispatch({ type: "SUBMIT_EMAIL", lead })}
        onBack={() => dispatch({ type: "PREV" })}
      />
    );
  }

  const question = questions[state.currentQuestion];
  const selectedAnswer = state.answers[question.id];

  return (
    <QuestionStep
      question={question}
      questionIndex={state.currentQuestion}
      totalQuestions={questions.length}
      selectedIndex={selectedAnswer?.index ?? null}
      onSelect={(index, score) =>
        dispatch({ type: "ANSWER", questionId: question.id, index, score })
      }
      onNext={() => dispatch({ type: "NEXT" })}
      onPrev={state.currentQuestion > 0 ? () => dispatch({ type: "PREV" }) : undefined}
      hasAnswer={selectedAnswer !== undefined}
    />
  );
}
