import type { CategoryScore } from "@/lib/diagnosis/scoring";

interface CategoryBarProps {
  categoryScores: CategoryScore[];
}

export function CategoryBar({ categoryScores }: CategoryBarProps) {
  return (
    <div className="space-y-4">
      {categoryScores.map((cs) => (
        <div key={cs.categoryId}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium">{cs.categoryName}</span>
            <span className="text-sm text-muted-foreground">
              {cs.score}/{cs.maxScore}点 ({cs.percentage}%)
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div
              className="h-3 rounded-full bg-primary transition-all duration-700 ease-out"
              style={{ width: `${cs.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
