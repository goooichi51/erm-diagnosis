"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScoreCircle } from "@/components/result/score-circle";
import { RadarChart } from "@/components/result/radar-chart";
import { CategoryBar } from "@/components/result/category-bar";
import { ImprovementTips } from "@/components/result/improvement-tips";
import { type DiagnosisResult } from "@/lib/diagnosis/scoring";
import {
  Shield,
  MessageSquare,
  FileText,
  ArrowRight,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("erm_diagnosis_full_result");
    if (!saved) {
      router.push("/diagnosis");
      return;
    }
    try {
      setResult(JSON.parse(saved));
    } catch {
      router.push("/diagnosis");
    }
  }, [router]);

  if (!result) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">結果を読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 text-primary mb-2">
          <Shield className="h-5 w-5" />
          <span className="text-sm font-medium">ERM成熟度診断レポート</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">診断結果</h1>
      </div>

      {/* 総合スコア */}
      <Card className="mb-8">
        <CardContent className="pt-8 pb-8">
          <ScoreCircle
            totalScore={result.totalScore}
            totalPercentage={result.totalPercentage}
            maturityLevel={result.maturityLevel}
          />
          <p className="text-center text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            {result.maturityLevel.description}
          </p>
        </CardContent>
      </Card>

      {/* レーダーチャート */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">カテゴリ別スコア</CardTitle>
        </CardHeader>
        <CardContent>
          <RadarChart categoryScores={result.categoryScores} />
        </CardContent>
      </Card>

      {/* カテゴリ別バー */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">カテゴリ別詳細</CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryBar categoryScores={result.categoryScores} />
        </CardContent>
      </Card>

      {/* 改善提案 */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">改善ポイント</h2>
        <ImprovementTips weakCategories={result.weakCategories} />
      </div>

      <Separator className="my-8" />

      {/* CTAセクション */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-center mb-6">
          次のステップ
        </h2>

        {/* レベル別メッセージ */}
        {result.maturityLevel.level <= 2 && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">
                    リスク管理体制の構築が急務です
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    現状のリスク管理体制には早急な改善が必要です。株式会社SISの専門コンサルタントが、
                    御社の状況に合わせた具体的な改善プランをご提案いたします。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {result.maturityLevel.level === 3 && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">
                    基盤はできています。次のステップへ
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    リスク管理の基本的な仕組みは整っています。さらに高度化するための
                    具体的な戦略を、SISの専門家がご提案いたします。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {result.maturityLevel.level >= 4 && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">
                    高い水準を維持・向上させましょう
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    優れたリスク管理体制です。最新のリスク動向への対応と
                    継続的な改善について、SISがアドバイスいたします。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* SIS問い合わせ導線 */}
        <Card className="border-primary">
          <CardContent className="pt-6">
            <h3 className="font-bold text-center mb-4">
              SISの専門家に相談する
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Button asChild className="w-full gap-2">
                <a href="mailto:info@s-i-s.co.jp">
                  <Mail className="h-4 w-4" />
                  メールで相談する
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full gap-2">
                <a
                  href="https://s-i-s.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  SIS公式サイトへ
                </a>
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-3">
              受付時間：平日 9:00〜18:00（土日祝除く）
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">
                  詳細レポートをPDFで受け取る
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  より詳細な分析と具体的な改善アクションプランをまとめたレポートをお送りします
                </p>
                <Button variant="outline" size="sm">
                  PDFレポートを申し込む
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* もう一度診断 */}
      <div className="text-center mt-12">
        <Button variant="ghost" asChild>
          <Link href="/diagnosis">もう一度診断する</Link>
        </Button>
      </div>
    </div>
  );
}
