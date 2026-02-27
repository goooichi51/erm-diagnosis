"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { questions, categories, QUESTIONS_PER_CATEGORY } from "@/lib/diagnosis/questions";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STORAGE_KEY = "erm_diagnosis_answers";

const scaleLabels = [
  { value: 1, label: "全く当てはまらない" },
  { value: 2, label: "あまり当てはまらない" },
  { value: 3, label: "どちらともいえない" },
  { value: 4, label: "ややあてはまる" },
  { value: 5, label: "非常にあてはまる" },
];

export default function DiagnosisPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAnswers(parsed.answers || {});
        setCurrentQuestion(parsed.currentQuestion || 0);
      } catch {
        // 破損したデータは無視
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers, currentQuestion })
      );
    }
  }, [answers, currentQuestion]);

  const question = questions[currentQuestion];
  const categoryIndex = categories.findIndex(
    (c) => c.id === question.categoryId
  );
  const category = categories[categoryIndex];
  const questionInCategory =
    currentQuestion - categoryIndex * QUESTIONS_PER_CATEGORY + 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion((prev) => prev + 1), 200);
    }
  };

  const handleSubmit = () => {
    sessionStorage.setItem(
      "erm_diagnosis_result",
      JSON.stringify(answers)
    );
    sessionStorage.removeItem(STORAGE_KEY);
    router.push("/diagnosis/complete");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* 進捗バー */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2 text-sm">
          <span className="text-muted-foreground">
            {currentQuestion + 1} / {questions.length}
          </span>
          <span className="text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* カテゴリ表示 */}
      <div className="flex items-center gap-2 mb-4">
        <Badge variant="secondary" className="text-xs">
          カテゴリ {categoryIndex + 1}/5
        </Badge>
        <span className="text-sm font-medium text-primary">{category.name}</span>
        <span className="text-xs text-muted-foreground">
          ({questionInCategory}/{QUESTIONS_PER_CATEGORY})
        </span>
      </div>

      {/* 設問カード */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg font-medium leading-relaxed">
            Q{currentQuestion + 1}. {question.text}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {scaleLabels.map((scale) => (
              <button
                key={scale.value}
                onClick={() => handleAnswer(scale.value)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                  answers[question.id] === scale.value
                    ? "border-primary bg-primary/5 text-primary font-medium"
                    : "border-border hover:border-primary/30 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                      answers[question.id] === scale.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground/30"
                    }`}
                  >
                    {scale.value}
                  </div>
                  <span className="text-sm">{scale.label}</span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ナビゲーション */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          前の設問
        </Button>

        {currentQuestion === questions.length - 1 ? (
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            診断結果を見る
          </Button>
        ) : (
          <Button
            variant="ghost"
            onClick={() =>
              setCurrentQuestion((prev) =>
                Math.min(questions.length - 1, prev + 1)
              )
            }
          >
            次の設問
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        )}
      </div>

      {/* 未回答カウント */}
      {currentQuestion === questions.length - 1 && !allAnswered && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          未回答の設問が {questions.length - answeredCount} 件あります
        </p>
      )}
    </div>
  );
}
