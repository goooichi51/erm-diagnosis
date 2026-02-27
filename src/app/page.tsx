import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  TrendingUp,
  FileText,
} from "lucide-react";
import { categories } from "@/lib/diagnosis/questions";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              無料診断テスト
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              あなたの組織の
              <br />
              <span className="text-primary">リスク管理レベル</span>を診断
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              COSO ERMフレームワークに基づく30問の設問で、
              <br className="hidden md:block" />
              全社的リスク管理（ERM）の成熟度を5段階で評価します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/diagnosis">
                  無料で診断する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                約5分
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                登録不要で開始
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                全30問
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 診断で分かること */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            診断で分かること
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            組織のリスク管理体制を5つの観点から評価し、強みと改善ポイントを明確にします
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm bg-muted/30">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">成熟度レベル</h3>
                <p className="text-muted-foreground text-sm">
                  5段階のレベル判定で、現在のリスク管理の到達点を客観的に把握できます
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-muted/30">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">強み・弱みの可視化</h3>
                <p className="text-muted-foreground text-sm">
                  5つの評価軸ごとのスコアをレーダーチャートで表示。どこを強化すべきか一目で分かります
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-muted/30">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">改善の方向性</h3>
                <p className="text-muted-foreground text-sm">
                  診断結果に基づく改善ポイントの概要を提示。次のアクションが明確になります
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5つの評価カテゴリ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            5つの評価カテゴリ
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            COSO ERM 2017フレームワークに基づく評価体系
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <Card key={cat.id} className="text-center border shadow-sm">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary/20 mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {cat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            まずは現状を知ることから
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            約5分で完了する無料診断で、あなたの組織のリスク管理レベルを確認しましょう
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base px-8">
            <Link href="/diagnosis">
              無料で診断する
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
