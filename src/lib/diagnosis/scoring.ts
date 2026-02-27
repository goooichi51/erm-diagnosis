import {
  type CategoryId,
  categories,
  QUESTIONS_PER_CATEGORY,
  MAX_SCORE_PER_QUESTION,
} from "./questions";
import { getMaturityLevel, type MaturityLevel } from "./levels";

export interface CategoryScore {
  categoryId: CategoryId;
  categoryName: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface DiagnosisResult {
  totalScore: number;
  totalPercentage: number;
  maturityLevel: MaturityLevel;
  categoryScores: CategoryScore[];
  strongCategories: CategoryScore[];
  weakCategories: CategoryScore[];
}

export type Answers = Record<number, number>;

function getCategoryQuestionIds(categoryId: CategoryId): number[] {
  const categoryIndex = categories.findIndex((c) => c.id === categoryId);
  const start = categoryIndex * QUESTIONS_PER_CATEGORY + 1;
  return Array.from({ length: QUESTIONS_PER_CATEGORY }, (_, i) => start + i);
}

export function calculateResult(answers: Answers): DiagnosisResult {
  const categoryScores: CategoryScore[] = categories.map((cat) => {
    const maxScore = QUESTIONS_PER_CATEGORY * MAX_SCORE_PER_QUESTION;
    const questionIds = getCategoryQuestionIds(cat.id);
    const score = questionIds.reduce(
      (sum, qId) => sum + (answers[qId] || 0),
      0
    );

    return {
      categoryId: cat.id,
      categoryName: cat.name,
      score,
      maxScore,
      percentage: Math.round((score / maxScore) * 100),
    };
  });

  const totalScore = categoryScores.reduce((sum, cs) => sum + cs.score, 0);
  const totalMax =
    categories.length * QUESTIONS_PER_CATEGORY * MAX_SCORE_PER_QUESTION;
  const totalPercentage = Math.round((totalScore / totalMax) * 100);

  const sorted = [...categoryScores].sort(
    (a, b) => b.percentage - a.percentage
  );
  const strongCategories = sorted.slice(0, 2);
  const weakCategories = sorted.slice(-2).reverse();

  return {
    totalScore,
    totalPercentage,
    maturityLevel: getMaturityLevel(totalScore),
    categoryScores,
    strongCategories,
    weakCategories,
  };
}
