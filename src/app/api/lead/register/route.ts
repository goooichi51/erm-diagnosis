import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, companyName, sessionId } = body as {
      email: string;
      companyName?: string;
      sessionId?: string;
    };

    if (!email) {
      return NextResponse.json(
        { error: "メールアドレスが必要です" },
        { status: 400 }
      );
    }

    // TODO: Supabase連携時にDB保存を有効化
    // const supabase = await createClient();
    // const { data, error } = await supabase.from("leads").insert({
    //   email,
    //   company_name: companyName,
    // }).select().single();

    return NextResponse.json({
      success: true,
      leadId: crypto.randomUUID(),
    });
  } catch {
    return NextResponse.json(
      { error: "登録中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
