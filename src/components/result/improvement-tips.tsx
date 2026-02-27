import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Lightbulb } from "lucide-react";
import type { CategoryScore } from "@/lib/diagnosis/scoring";
import type { CategoryId } from "@/lib/diagnosis/questions";

const tipsByCategory: Record<CategoryId, string> = {
  governance:
    "リスク管理の責任体制を明確化し、経営層のコミットメントを強化しましょう。定期的なリスク研修の実施や、リスク報告を奨励する文化づくりが重要です。",
  strategy:
    "経営戦略とリスク管理の統合を進めましょう。リスクアペタイトの明確化と、中長期的なリスクシナリオの検討が次のステップです。",
  performance:
    "リスクの識別・評価プロセスを体系化しましょう。リスクレジスターの整備やKRIの設定により、リスク対応の実効性を高められます。",
  review:
    "PDCAサイクルの確立とBCPの整備・訓練を優先しましょう。インシデント発生時の原因分析プロセスの体系化も重要です。",
  information:
    "リスク情報の共有体制を強化しましょう。経営層への報告ルートの整備と、部門横断的な情報共有の仕組みづくりが効果的です。",
};

interface ImprovementTipsProps {
  weakCategories: CategoryScore[];
}

export function ImprovementTips({ weakCategories }: ImprovementTipsProps) {
  return (
    <div className="space-y-4">
      {weakCategories.map((cs) => (
        <Card key={cs.categoryId} className="border-amber-200 bg-amber-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              {cs.categoryName}
              <span className="text-sm font-normal text-muted-foreground">
                ({cs.percentage}%)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <Lightbulb className="h-4 w-4 mt-0.5 shrink-0 text-amber-600" />
              <p>{tipsByCategory[cs.categoryId]}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
