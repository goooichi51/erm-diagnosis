"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Lock, ArrowRight } from "lucide-react";
import { calculateResult, type Answers } from "@/lib/diagnosis/scoring";

export default function CompletePage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [previewLevel, setPreviewLevel] = useState<number | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("erm_diagnosis_result");
    if (!saved) {
      router.push("/diagnosis");
      return;
    }
    try {
      const answers: Answers = JSON.parse(saved);
      const result = calculateResult(answers);
      setPreviewLevel(result.maturityLevel.level);
    } catch {
      router.push("/diagnosis");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("メールアドレスを入力してください");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const saved = sessionStorage.getItem("erm_diagnosis_result");
      if (!saved) throw new Error("診断データがありません");

      const answers: Answers = JSON.parse(saved);
      const result = calculateResult(answers);

      // セッションIDを生成してローカル保存（Supabase未接続時のフォールバック）
      const sessionId = crypto.randomUUID();

      // Supabase APIへの保存を試みる
      try {
        const res = await fetch("/api/diagnosis/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers, email, companyName }),
        });
        if (res.ok) {
          const data = await res.json();
          sessionStorage.setItem(
            "erm_session_id",
            data.sessionId || sessionId
          );
        } else {
          sessionStorage.setItem("erm_session_id", sessionId);
        }
      } catch {
        // API未接続時もローカルで動作
        sessionStorage.setItem("erm_session_id", sessionId);
      }

      // 結果をセッションストレージに保存
      sessionStorage.setItem(
        "erm_diagnosis_full_result",
        JSON.stringify(result)
      );

      router.push(`/diagnosis/result/${sessionStorage.getItem("erm_session_id")}`);
    } catch {
      setError("エラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      {/* ぼかしプレビュー背景 */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        <div className="blur-md opacity-50 pointer-events-none p-8 bg-white rounded-xl border">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-8 border-primary/30 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/50">
                Lv.{previewLevel || "?"}
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3 bg-muted rounded w-full" />
            <div className="h-3 bg-muted rounded w-3/4" />
            <div className="h-3 bg-muted rounded w-5/6" />
          </div>
        </div>
      </div>

      {/* 登録フォーム */}
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">診断が完了しました</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            結果を表示するため、メールアドレスをご入力ください
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                メールアドレス <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@company.co.jp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">会社名</Label>
              <Input
                id="company"
                type="text"
                placeholder="株式会社○○"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "処理中..." : "診断結果を見る"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>

            <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
              <Lock className="h-3 w-3" />
              ご入力いただいた情報は診断結果の送付のみに使用します
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
