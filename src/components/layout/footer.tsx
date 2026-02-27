import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/sislogo.jpg"
                alt="株式会社SIS"
                width={36}
                height={36}
                className="rounded-full border border-primary-foreground/20"
              />
              <span className="font-bold">株式会社SIS</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Strategy Intelligence Service
              <br />
              リスクマネジメント・企業調査のプロフェッショナル
            </p>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">お問い合わせ</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:06-6484-5939" className="hover:text-primary-foreground transition-colors">
                  06-6484-5939
                  <span className="text-xs ml-1">(平日 9:00-18:00)</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  〒541-0047
                  <br />
                  大阪府大阪市中央区淡路町2-6-1
                  <br />
                  アインストーン本町ビル2F
                </span>
              </li>
            </ul>
          </div>

          {/* リンク */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">リンク</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="/" className="hover:text-primary-foreground transition-colors">
                  ERM成熟度診断
                </Link>
              </li>
              <li>
                <Link href="/diagnosis" className="hover:text-primary-foreground transition-colors">
                  診断を受ける
                </Link>
              </li>
              <li>
                <a
                  href="https://s-i-s.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                >
                  SIS 公式サイト
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://s-i-s.co.jp/%e4%bc%81%e6%a5%ad%e8%aa%bf%e6%9f%bbv2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                >
                  企業調査サービス
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} 株式会社SIS All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
