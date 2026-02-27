import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ERM成熟度診断｜株式会社SIS",
  description:
    "あなたの組織のリスク管理レベルを無料で診断。COSO ERMフレームワークに基づく30問の設問で、全社的リスク管理（ERM）の成熟度を5段階で評価します。株式会社SISが提供するリスクマネジメント診断ツール。",
  openGraph: {
    title: "ERM成熟度診断｜株式会社SIS",
    description:
      "約5分で完了。あなたの組織のリスク管理レベルを5段階で評価する無料診断テスト。",
    siteName: "株式会社SIS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
