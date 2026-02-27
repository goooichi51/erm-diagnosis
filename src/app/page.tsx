import Link from "next/link";
import Image from "next/image";
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
  AlertTriangle,
  Building2,
  Phone,
  MessageSquare,
} from "lucide-react";
import { categories } from "@/lib/diagnosis/questions";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* 背景写真 */}
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* 紺オーバーレイ */}
        <div className="absolute inset-0 bg-[#1a3a5c]/75" />

        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Image
                src="/sislogo.jpg"
                alt="SIS"
                width={20}
                height={20}
                className="rounded-full"
              />
              株式会社SIS提供｜無料診断テスト
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
              御社のリスク管理体制、
              <br />
              <span className="text-[#64b5f6]">このままで大丈夫ですか？</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              情報漏洩、内部不正、取引先リスク——
              <br className="hidden md:block" />
              企業を取り巻くリスクは年々複雑化しています。
              <br className="hidden md:block" />
              <strong className="text-white">約5分の無料診断</strong>で、組織のリスク管理レベルを可視化しませんか。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8 bg-white text-primary hover:bg-white/90">
                <Link href="/diagnosis">
                  無料で診断する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 border-white/40 text-white hover:bg-white/10">
                <a href="tel:06-6484-5939">
                  <Phone className="mr-2 h-5 w-5" />
                  電話で相談する
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-white/60">
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

      {/* 課題提示セクション */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            こんな課題はありませんか？
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            リスク管理の不備は、ある日突然、経営危機として表面化します
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-amber-200 bg-amber-50/30">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  リスク管理が属人化している
                </h3>
                <p className="text-muted-foreground text-sm">
                  担当者の経験に頼り、組織的なリスク管理の仕組みが整備されていない
                </p>
              </CardContent>
            </Card>
            <Card className="border-amber-200 bg-amber-50/30">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  経営層にリスク情報が届かない
                </h3>
                <p className="text-muted-foreground text-sm">
                  現場のリスクが経営判断に反映されず、対応が後手に回ってしまう
                </p>
              </CardContent>
            </Card>
            <Card className="border-amber-200 bg-amber-50/30">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  何から手をつけるべきか分からない
                </h3>
                <p className="text-muted-foreground text-sm">
                  リスク管理の重要性は理解しているが、自社の現在地と優先課題が見えない
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 解決策：診断で分かること */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/section-analytics.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a3a5c]/80" />
        <div className="max-w-5xl mx-auto px-4 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">
            まずは「現在地」を知ることから
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            SISのERM成熟度診断で、御社のリスク管理体制を5つの観点から可視化します
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">成熟度レベル判定</h3>
                <p className="text-muted-foreground text-sm">
                  5段階のレベル判定で、現在のリスク管理の到達点を客観的に把握できます
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
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
            <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">改善の方向性</h3>
                <p className="text-muted-foreground text-sm">
                  診断結果に基づく改善ポイントを提示。次のアクションが明確になります
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5つの評価カテゴリ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            国際基準に基づく5つの評価軸
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            COSO ERM 2017フレームワーク準拠の体系的な評価で、網羅的に診断します
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

      {/* SIS信頼構築セクション */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/section-meeting.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a3a5c]/80" />
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="flex justify-center mb-4">
            <Image
              src="/sislogo.jpg"
              alt="株式会社SIS"
              width={64}
              height={64}
              className="rounded-full border-2 border-white/30"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">
            なぜSISのERM診断なのか
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            リスクマネジメントの専門家集団が設計した診断テスト
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">企業調査のプロフェッショナル</h3>
                    <p className="text-sm text-muted-foreground">
                      株式会社SISは、企業調査・リスクマネジメントを専門とするコンサルティングファームです。
                      数多くの企業のリスク管理体制の構築・改善を支援してきた実績があります。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">国際基準COSO ERMに準拠</h3>
                    <p className="text-sm text-muted-foreground">
                      世界標準のリスク管理フレームワークであるCOSO ERM 2017に基づく設問設計。
                      グローバルな視点での評価が可能です。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">診断後のサポート体制</h3>
                    <p className="text-sm text-muted-foreground">
                      診断結果をもとに、専門コンサルタントが具体的な改善策をご提案。
                      初回無料相談で、次の一歩を一緒に考えます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">総合的なリスク対策</h3>
                    <p className="text-sm text-muted-foreground">
                      ERM体制構築だけでなく、企業調査・サイバーリスク対策・人材育成まで、
                      リスク管理に関するあらゆるニーズにワンストップで対応します。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 診断CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            まずは現状を知ることから始めましょう
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            約5分で完了する無料診断で、御社のリスク管理レベルを確認しませんか
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link href="/diagnosis">
                無料で診断する
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-6">
            お電話でのご相談も受け付けております：
            <a href="tel:06-6484-5939" className="underline text-primary-foreground/80 hover:text-primary-foreground">
              06-6484-5939
            </a>
            （平日 9:00-18:00）
          </p>
        </div>
      </section>
    </div>
  );
}
