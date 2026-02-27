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
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* 背景グラデーション + 装飾 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        {/* 装飾: 浮遊する円 */}
        <div className="absolute top-12 left-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-8 right-[5%] w-80 h-80 bg-[#4a90e2]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-[60%] w-40 h-40 bg-primary/3 rounded-full blur-2xl" />
        {/* 装飾: ドットグリッド */}
        <svg className="absolute top-8 right-[15%] opacity-10" width="120" height="120" viewBox="0 0 120 120">
          {Array.from({ length: 36 }).map((_, i) => (
            <circle key={i} cx={(i % 6) * 22 + 11} cy={Math.floor(i / 6) * 22 + 11} r="2" fill="#1a3a5c" />
          ))}
        </svg>
        <svg className="absolute bottom-16 left-[8%] opacity-10" width="80" height="80" viewBox="0 0 80 80">
          {Array.from({ length: 16 }).map((_, i) => (
            <circle key={i} cx={(i % 4) * 22 + 11} cy={Math.floor(i / 4) * 22 + 11} r="2" fill="#1a3a5c" />
          ))}
        </svg>
        {/* 装飾: リング */}
        <svg className="absolute top-20 right-[25%] opacity-[0.07]" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#1a3a5c" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#2c5f8d" strokeWidth="1.5" />
        </svg>

        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Image
                src="/sislogo.jpg"
                alt="SIS"
                width={20}
                height={20}
                className="rounded-full"
              />
              株式会社SIS提供｜無料診断テスト
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              御社のリスク管理体制、
              <br />
              <span className="text-primary">このままで大丈夫ですか？</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              情報漏洩、内部不正、取引先リスク——
              <br className="hidden md:block" />
              企業を取り巻くリスクは年々複雑化しています。
              <br className="hidden md:block" />
              <strong>約5分の無料診断</strong>で、組織のリスク管理レベルを可視化しませんか。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/diagnosis">
                  無料で診断する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8">
                <a href="tel:06-6484-5939">
                  <Phone className="mr-2 h-5 w-5" />
                  電話で相談する
                </a>
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

      {/* ウェーブ区切り */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* 課題提示セクション */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* 装飾: 斜めライン */}
        <svg className="absolute -right-4 top-1/4 opacity-[0.04]" width="200" height="300" viewBox="0 0 200 300">
          <line x1="0" y1="0" x2="200" y2="300" stroke="#1a3a5c" strokeWidth="1" />
          <line x1="30" y1="0" x2="200" y2="250" stroke="#1a3a5c" strokeWidth="1" />
          <line x1="60" y1="0" x2="200" y2="200" stroke="#1a3a5c" strokeWidth="1" />
          <line x1="90" y1="0" x2="200" y2="150" stroke="#1a3a5c" strokeWidth="1" />
        </svg>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            こんな課題はありませんか？
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            リスク管理の不備は、ある日突然、経営危機として表面化します
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-amber-200 bg-amber-50/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-300" />
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
            <Card className="border-amber-200 bg-amber-50/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-300" />
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
            <Card className="border-amber-200 bg-amber-50/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-300" />
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
      <section className="py-16 relative overflow-hidden">
        {/* 背景パターン: ドット */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(#1a3a5c 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <div className="max-w-5xl mx-auto px-4 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            まずは「現在地」を知ることから
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            SISのERM成熟度診断で、御社のリスク管理体制を5つの観点から可視化します
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md bg-white relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#2c5f8d]" />
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">成熟度レベル判定</h3>
                <p className="text-muted-foreground text-sm">
                  5段階のレベル判定で、現在のリスク管理の到達点を客観的に把握できます
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-white relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2c5f8d] to-[#4a90e2]" />
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">強み・弱みの可視化</h3>
                <p className="text-muted-foreground text-sm">
                  5つの評価軸ごとのスコアをレーダーチャートで表示。どこを強化すべきか一目で分かります
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-white relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4a90e2] to-[#64b5f6]" />
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
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

      {/* ウェーブ区切り */}
      <div className="relative -mb-1">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,30 C960,60 1200,10 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* 5つの評価カテゴリ */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* 装飾: 大きなリング */}
        <svg className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.03]" width="300" height="300" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="140" fill="none" stroke="#1a3a5c" strokeWidth="3" />
          <circle cx="150" cy="150" r="100" fill="none" stroke="#2c5f8d" strokeWidth="2" />
          <circle cx="150" cy="150" r="60" fill="none" stroke="#4a90e2" strokeWidth="1.5" />
        </svg>
        <div className="max-w-5xl mx-auto px-4 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            国際基準に基づく5つの評価軸
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            COSO ERM 2017フレームワーク準拠の体系的な評価で、網羅的に診断します
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => {
              const colors = [
                "from-[#1a3a5c] to-[#2c5f8d]",
                "from-[#2c5f8d] to-[#3a75a8]",
                "from-[#3a75a8] to-[#4a90e2]",
                "from-[#4a90e2] to-[#64b5f6]",
                "from-[#64b5f6] to-[#90caf9]",
              ];
              return (
                <Card key={cat.id} className="text-center border shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors[i]}`} />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* SIS信頼構築セクション */}
      <section className="py-16 relative overflow-hidden">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7fafd] via-[#eef4fa] to-[#f7fafd]" />
        {/* 装飾: ドットグリッド */}
        <svg className="absolute top-12 left-[5%] opacity-[0.06]" width="140" height="140" viewBox="0 0 140 140">
          {Array.from({ length: 49 }).map((_, i) => (
            <circle key={i} cx={(i % 7) * 22 + 5} cy={Math.floor(i / 7) * 22 + 5} r="1.5" fill="#1a3a5c" />
          ))}
        </svg>
        <svg className="absolute bottom-12 right-[5%] opacity-[0.06]" width="100" height="100" viewBox="0 0 100 100">
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={(i % 5) * 22 + 5} cy={Math.floor(i / 5) * 22 + 5} r="1.5" fill="#1a3a5c" />
          ))}
        </svg>

        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="flex justify-center mb-4">
            <Image
              src="/sislogo.jpg"
              alt="株式会社SIS"
              width={64}
              height={64}
              className="rounded-full shadow-lg"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            なぜSISのERM診断なのか
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            リスクマネジメントの専門家集団が設計した診断テスト
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
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
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
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
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
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
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
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
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        {/* 装飾: 大きな半透明円 */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full" />
        {/* 装飾: 斜めライン */}
        <svg className="absolute right-[10%] top-0 bottom-0 opacity-[0.05]" width="100" height="100%" viewBox="0 0 100 200" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="200" stroke="white" strokeWidth="1" />
          <line x1="30" y1="0" x2="100" y2="150" stroke="white" strokeWidth="1" />
          <line x1="60" y1="0" x2="100" y2="100" stroke="white" strokeWidth="1" />
        </svg>

        <div className="max-w-3xl mx-auto px-4 text-center relative">
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
