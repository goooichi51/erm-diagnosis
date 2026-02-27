import { NextResponse } from "next/server";
import { calculateResult, type Answers } from "@/lib/diagnosis/scoring";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { answers, email, companyName } = body as {
      answers: Answers;
      email: string;
      companyName?: string;
    };

    if (!answers || !email) {
      return NextResponse.json(
        { error: "回答データとメールアドレスが必要です" },
        { status: 400 }
      );
    }

    const result = calculateResult(answers);
    const sessionId = crypto.randomUUID();

    // Supabase接続時はここでDBに保存
    // 現在はローカルモードとして結果を返す
    // TODO: Supabase連携時に以下を有効化
    // const supabase = await createClient();
    // await supabase.from("leads").insert({ email, company_name: companyName });
    // await supabase.from("diagnosis_sessions").insert({ ... });

    return NextResponse.json({
      sessionId,
      result: {
        totalScore: result.totalScore,
        totalPercentage: result.totalPercentage,
        maturityLevel: result.maturityLevel.level,
        categoryScores: result.categoryScores,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "診断結果の処理中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
